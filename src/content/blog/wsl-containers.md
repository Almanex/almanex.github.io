---
title: "How to Run Linux Containers in WSL Without Docker Desktop"
description: "A comprehensive guide to WSL's native container support — setup, CLI usage, networking, security, and why it's a game-changer for Windows developers."
pubDate: 2026-06-29
category: "WSL"
image: "/images/blog/wsl-containers.jpg"
readTime: "8 min"
status: "PUB"
---

At the Microsoft Build 2026 conference, developers announced a major milestone: native support for **WSL Containers**. This feature allows you to build, run, and manage Linux containers directly inside the Windows Subsystem for Linux (WSL), completely removing the need to install resource-heavy third-party platforms like Docker Desktop. 

For years, developers on Windows faced a dilemma: use Docker Desktop and accept its high resource consumption, or set up a custom rootless Podman/Docker daemon inside a manual WSL instance. WSL Containers aim to bridge this gap, offering a lightweight, built-in alternative that works right out of the box without extra background services and licensing overhead.

## Why Docker Desktop Became a Challenge

In 2022, Docker updated its licensing terms, requiring companies with more than 250 employees or over $10 million in annual revenue to purchase a paid subscription. This change prompted many enterprise teams to seek compliant alternatives.

Beyond licensing, Docker Desktop has a reputation for being resource-intensive. It runs its own utility virtual machine, which frequently consumes between 2GB and 4GB of RAM even when idle. Moreover, the background helper services can cause noticeable battery drain and slower system boot times on developer laptops.

## Core System Components

WSL Containers introduce two key tools to the Windows ecosystem:

1. **`wslc.exe` (aliased as `container.exe`)** – The command-line utility used to build, run, stop, and inspect containers from PowerShell, CMD, or any WSL terminal.
2. **WSL Container API** – Available as the `Microsoft.WSL.Containers` NuGet package, allowing developers to programmatically control container lifecycles directly within native Windows applications.

Because these tools tap directly into the lightweight WSL virtual machine kernel, containers boot almost instantly and dynamically share system resources.

## Step-by-Step Installation & Usage

To try out the public preview of WSL Containers, follow these steps:

### Step 1: Update WSL
Ensure your system is running the latest pre-release version of WSL. Open PowerShell or Command Prompt as an Administrator and execute:

```bash
wsl --update --pre-release
```

*Note: Native container support requires WSL version 2.9.3 or higher.*

### Step 2: Restart WSL
Apply the updates by shutting down the active WSL instance:

```bash
wsl --shutdown
```

### Step 3: Verify the CLI
Check if the command-line utility is successfully installed:

```bash
wslc --version
```

### Step 4: Pull and Run a Container
You can now run standard Linux container images. For example, to start an interactive Ubuntu container:

```bash
wslc run -it --name test-box ubuntu:latest /bin/bash
```

### Step 5: Build from a Dockerfile
WSL Containers support standard OCI build instructions. Create a simple `Dockerfile` and run:

```bash
wslc build -t my-custom-app:1.0 .
```

---

## Technical Comparison

| Feature / Metric | WSL Containers | Docker Desktop | Podman (WSL) |
| :--- | :--- | :--- | :--- |
| **Licensing** | Free (Included in Windows) | Paid for enterprises | Free (Open Source) |
| **Idle RAM Usage** | Negligible (< 100MB) | 2GB - 4GB | ~150MB - 300MB |
| **Daemonless** | Yes | No (requires daemon) | Yes (rootless mode) |
| **Compose Support** | Basic (via integrations) | Full | Full (podman-compose) |
| **Startup Speed** | Instant (< 1s) | Slow (15s - 45s) | Fast (1s - 3s) |
| **OS Availability** | Windows only | Windows, macOS, Linux | Windows, macOS, Linux |

---

## Networking & Volume Mounts

WSL Containers inherit WSL 2’s networking architecture, which simplifies port mapping. By default, services running inside a container are accessible via `localhost`.

### Port Forwarding
To run an Nginx container and map port 80 to port 8080 on your host Windows machine:

```bash
wslc run -d -p 8080:80 --name web-server nginx:latest
```

### Directory Mounting
You can mount directories from both the Windows host (`/mnt/c/...`) and internal WSL Linux filesystems. To mount a directory:

```bash
wslc run -v /home/user/app:/app -w /app node:18 npm start
```

*Tip: For optimal performance, always store your source code inside the native WSL filesystem (e.g., `/home/username/projects`) rather than on Windows folders like `/mnt/c/` to avoid cross-OS translation overhead.*

## VS Code & Dev Containers Integration

You can configure VS Code to use `wslc.exe` as the container runtime for the **Dev Containers** extension. Update your global VS Code `settings.json`:

```json
{
  "devcontainers.dockerPath": "wslc.exe"
}
```

This configuration routes your dev container builds through the native WSL subsystem, bypassing Docker Desktop entirely while preserving full debugger and terminal integrations.

## Security Best Practices

Because WSL Containers run close to the WSL kernel, maintaining security hygiene is important:
- **Run Rootless:** Avoid running containers as root. Add a non-root user in your `Dockerfile` configurations.
- **Keep Images Minimal:** Use distroless or Alpine-based base images to reduce the vulnerability attack surface.
- **Isolate Workloads:** Keep development workloads in separate WSL distributions if you are testing untrusted software.

## Roadmap & Conclusion

Currently in Public Preview, WSL Containers are slated for General Availability (GA) in the autumn of 2026. This feature represents a welcome architectural shift: Microsoft is integrating containerization directly into Windows, turning it into a first-class citizen for developers. It offers a fast, lightweight, and legally compliant tool for local environment testing.
