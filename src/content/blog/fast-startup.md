---
title: Why You Should Disable Fast Startup in Windows 11/10
description: >-
  A detailed guide on Windows Fast Startup: why it interferes with updates,
  breaks restarts, causes unexpected wakeups, and how to properly disable it.
pubDate: '2026-07-21T00:00:00.000Z'
category: Windows
image: /images/blog/fast-startup.jpg
readTime: 5 min
status: DFT
---

The Fast Startup feature is enabled by default in all modern versions of Windows, starting with Windows 8. The goal of Microsoft engineers was simple: reduce the wait time when powering on your PC. However, in practice, this feature often becomes the source of mysterious glitches and issues that users struggle with for years, never realizing the true cause.

In this article, we will break down how Fast Startup works, why it does more harm than good on modern computers, and how to properly disable it in Windows 11 and Windows 10.

---

## What is Fast Startup and How Does It Work?

Most users believe that when they click **"Shut down"**, their computer completely powers off and clears its system memory. With Fast Startup enabled, this is not what happens.

Fast Startup is a hybrid shutdown mode — a cross between a full shutdown and the classic hibernation mode:

1. When you shut down your PC, Windows logs off your user accounts and closes running applications.
2. Instead of completely unloading the operating system, the Windows Kernel and loaded drivers save their active state to a system file named `hiberfil.sys` on your hard drive.
3. The next time you power on your PC, Windows does not boot the system from scratch. Instead, it reads the saved kernel state from the file directly into RAM.

For older computers with slow mechanical hard drives (HDDs), this significantly reduced boot times. However, on modern computers with fast Solid-State Drives (SSDs), the difference in boot speed is just a second or two, while the list of side effects is quite long.

---

## 4 Reasons to Disable Fast Startup

### 1. Restarts Stop Fixing System Glitches
The golden rule of IT troubleshooting is to reboot the computer. A restart clears RAM and resets frozen driver processes.

But with Fast Startup enabled, clicking Shut Down and then pressing the power button **does not reset the system state**. Windows simply loads the cached kernel. If a driver or system service crashed earlier, that buggy state will be loaded again.

> **Note:** To perform a clean boot when Fast Startup is active, you must click **"Restart"** (which bypasses the Fast Startup cache) or disable Fast Startup entirely.

### 2. Issues Installing System Updates and Drivers
Many Windows updates and driver installations (especially graphics card drivers like NVIDIA/AMD and network adapters) require a cold reboot from zero to swap locked system files.

Fast Startup can block or glitch these files from being correctly swapped during a shutdown, leaving updates in a half-installed state or causing driver conflicts.

### 3. Random Computer Wakeups in the Middle of the Night
Have you ever closed your laptop lid or shut down your PC, only to find it running in your bag or waking up by itself in the middle of the night?

Because Fast Startup is deeply connected to hibernation, wake timers from devices (such as network adapters or PCIe devices) can trigger unexpected wakeups. Disabling Fast Startup fixes accidental wakeups in most cases.

### 4. Difficulty Accessing BIOS/UEFI on Boot
With Fast Startup active, the initial hardware initialization stage is bypassed extremely quickly. The time window to press key shortcuts to enter BIOS/UEFI (like <kbd>Del</kbd> or <kbd>F2</kbd>) is reduced to fractions of a second. Disabling Fast Startup restores the standard boot screen, giving you enough time to press the keys.

---

## How to Disable Fast Startup in Windows 11 / 10

The steps to turn off this feature are the same on both Windows 11 and Windows 10.

### Step 1. Open the Control Panel
Press the <kbd>Win + R</kbd> keys, type `control` in the Run window, and press **OK** or <kbd>Enter</kbd>.

### Step 2. Go to Power Options
In the top-right corner of the Control Panel, set the View mode to **Large icons** or **Small icons**. Select **Power Options**.

### Step 3. Open Power Button Settings
In the left column of the window, click the link **"Choose what the power buttons do"** (or **"Choose what closing the lid does"** on laptops).

### Step 4. Allow Changes to Unavailable Settings
By default, the shutdown options are locked. Click the link **"Change settings that are currently unavailable"** at the top. This step requires Administrator privileges.

### Step 5. Disable Fast Startup
Under **Shutdown settings** at the bottom, uncheck the box for **"Turn on fast startup (recommended)"**.

### Step 6. Save Changes
Click the **"Save changes"** button at the bottom.

---

## Alternative Method: Using the Command Prompt

If you want to turn off Fast Startup and also free up several gigabytes of space occupied by the hibernation file on your system drive, you can disable hibernation entirely.

1. Open the **Start menu**, search for **"Command Prompt"** (or **"Terminal"**).
2. Right-click it and select **"Run as administrator"**.
3. Type the following command and press <kbd>Enter</kbd>:
   ```bash
   powercfg -h off
   ```

> **Warning:** This will also disable the classic hibernation option (sleeping with saving data to disk). If you use hibernation regularly on a laptop, stick to the Control Panel method instead.

## Conclusion

If your computer uses a modern SSD, Fast Startup provides no noticeable benefits while increasing the risk of system instability. Turning it off ensures that Windows starts fresh every time you boot, making system updates and driver operations much more reliable.
