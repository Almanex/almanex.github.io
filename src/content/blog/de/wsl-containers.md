---
title: "Linux-Container in WSL ohne Docker Desktop ausführen"
description: "Ein umfassender Leitfaden zur nativen Container-Unterstützung in WSL — Einrichtung, CLI-Nutzung, Netzwerk, Sicherheit und warum es ein Gamechanger für Windows-Entwickler ist."
pubDate: 2026-06-29
category: "WSL"
image: "/images/blog/wsl-containers.jpg"
readTime: "8 Min"
status: "PUB"
---

Auf der Microsoft Build 2026 Konferenz haben die Entwickler einen lang ersehnten Meilenstein angekündigt: die native Unterstützung für **WSL-Container** (WSL Containers). Mit dieser Funktion können Linux-Container direkt innerhalb des Windows-Subsystems für Linux (WSL) erstellt, ausgeführt und verwaltet werden, wodurch die Installation von ressourcenintensiven Drittanbieter-Plattformen wie Docker Desktop vollständig überflüssig wird.

Jahrelang standen Entwickler unter Windows vor einem Dilemma: Entweder Docker Desktop nutzen und dessen hohen Ressourcenverbrauch akzeptieren, oder einen maßgeschneiderten rootless Podman/Docker-Daemon in einer manuell konfigurierten WSL-Instanz einrichten. WSL-Container schließen diese Lücke und bieten eine leichtgewichtige, integrierte Alternative, die direkt out of the box funktioniert, ohne zusätzliche Hintergrunddienste und Lizenzgebühren.

## Warum Docker Desktop zum Problem wurde

Im Jahr 2022 hat Docker seine Lizenzbedingungen aktualisiert. Seitdem benötigen Unternehmen mit mehr als 250 Mitarbeitern oder einem Jahresumsatz von über 10 Millionen US-Dollar ein kostenpflichtiges Abonnement für Docker Desktop. Diese Änderung veranlasste viele Unternehmensteams, nach konformen und kostenfreien Alternativen zu suchen.

Abseits der Lizenzierung ist Docker Desktop für seinen enormen Ressourcenhunger bekannt. Es führt eine eigene virtuelle Dienst-VM aus, die im Leerlauf häufig zwischen 2 GB und 4 GB RAM beansprucht. Zudem können die im Hintergrund laufenden Hilfsdienste die Akkulaufzeit von Entwickler-Laptops drastisch verkürzen und die Systemstartzeit verlangsamen.

## Die Kernkomponenten des Systems

WSL-Container führen zwei wichtige Werkzeuge in das Windows-Ökosystem ein:

1. **`wslc.exe` (mit dem Alias `container.exe`)** – Das Befehlszeilen-Tool, mit dem Container direkt über PowerShell, CMD oder jedes WSL-Terminal erstellt, gestartet, gestoppt und inspiziert werden können.
2. **WSL Container API** – Ein spezielles NuGet-Paket namens `Microsoft.WSL.Containers`, mit dem Entwickler den Lebenszyklus von Containern programmatisch direkt in nativen Windows-Anwendungen steuern können.

Da diese Tools direkt auf den schlanken Kernel der virtuellen WSL-Maschine zugreifen, starten Container nahezu instinktiv und teilen sich die Systemressourcen dynamisch mit dem Host.

## Schritt-für-Schritt-Anleitung zur Einrichtung

Führen Sie die folgenden Schritte aus, um die öffentliche Vorschauversion der WSL-Container zu testen:

### Schritt 1: WSL aktualisieren
Stellen Sie sicher, dass auf Ihrem System die neueste Vorabversion von WSL läuft. Öffnen Sie die PowerShell oder die Eingabeaufforderung als Administrator und führen Sie folgenden Befehl aus:

```bash
wsl --update --pre-release
```

*Hinweis: Die native Container-Unterstützung erfordert mindestens die WSL-Version 2.9.3 oder höher.*

### Schritt 2: WSL neu starten
Übernehmen Sie die Updates, indem Sie die aktive WSL-Instanz herunterfahren:

```bash
wsl --shutdown
```

### Schritt 3: Die CLI überprüfen
Prüfen Sie, ob das CLI-Tool erfolgreich installiert wurde:

```bash
wslc --version
```

### Schritt 4: Container herunterladen und ausführen
Sie können nun Standard-Linux-Container-Images ausführen. Starten Sie beispielsweise einen interaktiven Ubuntu-Container:

```bash
wslc run -it --name test-box ubuntu:latest /bin/bash
```

### Schritt 5: Aus einem Dockerfile bauen
WSL-Container unterstützen die Standard-OCI-Bauanweisungen. Erstellen Sie ein einfaches `Dockerfile` und führen Sie Folgendes aus:

```bash
wslc build -t my-custom-app:1.0 .
```

---

## Technischer Vergleich

| Feature / Metrik | WSL Containers | Docker Desktop | Podman (WSL) |
| :--- | :--- | :--- | :--- |
| **Lizenzierung** | Kostenlos (In Windows enthalten) | Kostenpflichtig für Firmen | Kostenlos (Open Source) |
| **RAM-Verbrauch (Standby)**| Minimal (< 100 MB) | 2 GB - 4 GB | ~150 MB - 300 MB |
| **Daemonless** | Ja | Nein (benötigt Daemon) | Ja (Rootless-Modus) |
| **Compose-Support** | Einfach (über Utilities) | Vollständig | Vollständig (podman-compose) |
| **Startgeschwindigkeit** | Sofort (< 1 Sek.) | Langsam (15–45 Sek.) | Schnell (1–3 Sek.) |
| **Betriebssysteme** | Nur Windows | Windows, macOS, Linux | Windows, macOS, Linux |

---

## Netzwerk & Volume-Mounts

WSL-Container erben die Netzwerkarchitektur von WSL 2, was die Portweiterleitung erheblich vereinfacht. Standardmäßig sind in einem Container ausgeführte Dienste direkt über `localhost` erreichbar.

### Portweiterleitung
Um einen Nginx-Container auszuführen und Port 80 auf Port 8080 Ihrer Windows-Hostmaschine weiterzuleiten, geben Sie Folgendes ein:

```bash
wslc run -d -p 8080:80 --name web-server nginx:latest
```

### Verzeichnisse mounten
Sie können Ordner sowohl vom Windows-Host (`/mnt/c/...`) als auch aus dem internen Linux-Dateisystem von WSL-Instanzen mounten. Beispiel:

```bash
wslc run -v /home/user/app:/app -w /app node:18 npm start
```

*Tipp zur Performance: Speichern Sie Ihren Quellcode immer im nativen WSL-Dateisystem (z. B. unter `/home/username/projects`) statt in Windows-Ordnern wie `/mnt/c/`, um Dateizugriffs-Verzögerungen bei der Übersetzung zwischen den Betriebssystemen zu vermeiden.*

## Integration in VS Code und Dev Containers

Sie können VS Code so konfigurieren, dass `wslc.exe` als Container-Laufzeitumgebung für die Erweiterung **Dev Containers** verwendet wird. Fügen Sie dazu folgende Zeile in Ihre globalen VS Code `settings.json` ein:

```json
{
  "devcontainers.dockerPath": "wslc.exe"
}
```

Dadurch werden Ihre Dev-Container-Builds direkt über das native WSL-Subsystem an Docker Desktop vorbeigeleitet, wobei alle Debugging- und Terminal-Funktionen vollständig erhalten bleiben.

## Sicherheits-Empfehlungen

Da WSL-Container sehr nah am WSL-Kernel ausgeführt werden, ist eine gute Sicherheits-Hygiene ratsam:
- **Rootless ausführen:** Vermeiden Sie es, Container als Root-Benutzer auszuführen. Fügen Sie einen Standardbenutzer in Ihren `Dockerfile`-Anweisungen hinzu.
- **Minimale Images nutzen:** Verwenden Sie schlanke Basis-Images (wie Alpine oder Distroless), um die Angriffsfläche für Sicherheitslücken zu minimieren.
- **Umgebungen isolieren:** Führen Sie Tests mit nicht vertrauenswürdiger Software in separaten, eigens dafür erstellten WSL-Distributionen durch.

## Roadmap & Fazit

Die Funktion befindet sich derzeit in der Public Preview. Die allgemeine Verfügbarkeit (General Availability, GA) ist für Herbst 2026 geplant. Dieses Feature markiert einen willkommenen architektonischen Wandel: Microsoft integriert die Containerisierung direkt in das Betriebssystem Windows. Windows-Entwickler erhalten damit ein schnelles, leichtgewichtiges und rechtlich unbedenkliches Werkzeug für das alltägliche lokale Testen.
