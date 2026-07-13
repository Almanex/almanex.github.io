export const PROJECTS_DATA = {
  "classic-windows-image-viewer": {
    title: "Classic Windows Image Viewer",
    subtitle: "Brings back the classic Windows photo viewer experience to Windows 11.",
    category: "Open Source",
    lang: "C++",
    platform: "Windows 11",
    stars: "1",
    license: "Other",
    github: "https://github.com/Almanex/Classic-Windows-image-viewer-for-Windows-11",
    image: "/images/projects/classic-windows-image-viewer.png",
    readme: `[ English ](README.md) • [ Русский ](docs/README_RU.md) • [ Deutsch ](docs/README_DE.md)

# Shell Image Viewer

*Classic Windows Photo Viewer launcher for Windows 10 and 11.*

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Platform: Windows](https://img.shields.io/badge/Platform-Windows-0078d7.svg)](#)
[![Language: C++17](https://img.shields.io/badge/Language-C%2B%2B17-blue.svg)](#)
[![Share](https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Fgithub.com%2FAlmanex%2FClassic-Windows-image-viewer-for-Windows-11)](https://twitter.com/intent/tweet?text=Check%20out%20this%20awesome%20project&url=https%3A%2F%2Fgithub.com%2FAlmanex%2FClassic-Windows-image-viewer-for-Windows-11)


<p align="center">
  <img src="screenshots/cover.png" alt="Shell Image Viewer" width="95%" />
</p>

---

## Overview

Microsoft has removed the classic Windows Photo Viewer interface in Windows 10 and 11, but the underlying system library \`shimgvw.dll\` remains to support legacy functionality.

\`PhotoViewer.exe\` is a tiny launcher written in C++ that calls \`ImageView_FullscreenW\` from \`shimgvw.dll\` to bring back the familiar full-screen viewing experience.

If your system version lacks \`shimgvw.dll\` (common in some lite or "N" editions), you can find compatible versions in the \`DLL/\` directory of this project and place them next to the executable.

---

## Key Features

- Fullscreen viewing of images with the original Windows Photo Viewer user interface.
- Automatic system-wide lookup of \`shimgvw.dll\`.
- Support for loading local \`shimgvw.dll\` adjacent to the executable if not found in the system.
- Open files through command-line argument passing or standard file selection dialog.
- Command-line flags to retrieve help, version information, and supported image formats.

---

## Tech Stack

| Layer / Component | Technology | Details / Purpose |
| --- | --- | --- |
| Language | C++17 | Standard compliance for modern and safe codebase |
| Build System | CMake 3.16+ | Cross-platform build configuration |
| UI Library | Win32 API / Common Dialogs | Native lightweight file picking dialog and message boxes |
| Core Dependency | shimgvw.dll | Native Windows Photo Viewer library |

---

## Getting Started

For a detailed step-by-step graphical setup guide, see the [User Guide](docs/GUIDE.md).

### Prerequisites

- Windows 10/11
- CMake 3.16+
- MinGW-w64 or MSVC with C++17 support

### Installation & Running

Run the following commands in your shell:

\`\`\`powershell
git clone https://github.com/Almanex/Classic-Windows-image-viewer-for-Windows-11.git
cd Classic-Windows-image-viewer-for-Windows-11
cmake -B build -G "MinGW Makefiles"
cmake --build build --config Release
\`\`\`

The resulting binary will be built at \`release/PhotoViewer.exe\`.

---

## Running the Tests

The project does not contain automated unit tests. Testing is conducted manually by executing the launcher with diagnostic parameters:

\`\`\`powershell
release/PhotoViewer.exe /?
release/PhotoViewer.exe --about
release/PhotoViewer.exe --formats
\`\`\`

---

## Deployment

To deploy the application, simply copy the compiled standalone \`PhotoViewer.exe\` binary to the target system.

> [!WARNING]
> **Windows Defender SmartScreen** may block the application on its first launch.
> * **Reason**: The application is unsigned (does not have a paid digital code-signing certificate), which is standard for free, open-source projects.
> * **Instruction**: To bypass this warning, click **"More info"**, and then select **"Run anyway"**.

---

## Contributing

Contributions are welcome! Feel free to open issues or submit Pull Requests for bugs, enhancements, and translation updates.

---

## Versioning

This project adheres to Semantic Versioning (SemVer). To see available tags and releases, check the releases section of this repository.

---

## Authors & Contributors

- Initial author: [Almanex](https://github.com/Almanex)
- Contributors & community

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Acknowledgments

- Developers of the original \`shimgvw.dll\`.
- Community testers and contributors.`,
    readme_ru: `[ English ](../README.md) • [ Русский ](README_RU.md) • [ Deutsch ](README_DE.md)

# Shell Image Viewer

*Классический просмотрщик изображений Windows для Windows 10 и 11.*

[![Лицензия: MIT](https://img.shields.io/badge/%D0%9B%D0%B8%D1%86%D0%B5%D0%BD%D0%B7%D0%B8%D1%8F-MIT-blue.svg)](../LICENSE)
[![Платформа: Windows](https://img.shields.io/badge/%D0%9F%D0%BB%D0%B0%D1%82%D1%84%D0%BE%D1%80%D0%BC%D0%B0-Windows-0078d7.svg)](#)
[![Язык: C++17](https://img.shields.io/badge/%D0%AF%D0%B7%D1%8B%D0%BA-C%2B%2B17-blue.svg)](#)
[![Share](https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Fgithub.com%2FAlmanex%2FClassic-Windows-image-viewer-for-Windows-11)](https://twitter.com/intent/tweet?text=Check%20out%20this%20awesome%20project&url=https%3A%2F%2Fgithub.com%2FAlmanex%2FClassic-Windows-image-viewer-for-Windows-11)


<p align="center">
  <img src="../screenshots/cover.png" alt="Shell Image Viewer" width="95%" />
</p>

---

## Обзор

Microsoft удалила классический интерфейс средства просмотра фотографий Windows (Windows Photo Viewer) в Windows 10 и 11, однако системная библиотека \`shimgvw.dll\` всё ещё присутствует в системе для обеспечения обратной совместимости.

\`PhotoViewer.exe\` — это крошечный лаунчер, написанный на C++, который вызывает функцию \`ImageView_FullscreenW\` из библиотеки \`shimgvw.dll\` для возврата привычного полноэкранного режима просмотра изображений.

Если в вашей системе отсутствует библиотека \`shimgvw.dll\` (например, в некоторых облегченных сборках или Windows "N" версиях), вы можете найти совместимые версии в папке \`DLL/\` этого проекта и разместить её рядом с исполняемым файлом.

---

## Основные возможности

- Полноэкранный просмотр изображений с помощью оригинального интерфейса Windows Photo Viewer.
- Автоматический поиск системной библиотеки \`shimgvw.dll\`.
- Возможность использования локальной копии DLL при отсутствии системной.
- Поддержка открытия файлов через аргументы командной строки или стандартный диалог выбора.
- Встроенные параметры командной строки для получения информации о версии, справки и списка форматов.

---

## Стек технологий

| Компонент / Уровень | Технология | Описание / Назначение |
| --- | --- | --- |
| Язык программирования | C++17 | Использование современного стандарта для безопасного и эффективного кода |
| Система сборки | CMake 3.16+ | Кросс-компиляция и конфигурация сборщика |
| Интерфейс пользователя | Win32 API / Common Dialogs | Минималистичный нативный диалог открытия файлов и информационные окна |
| Основная зависимость | shimgvw.dll | Нативная библиотека Windows Photo Viewer |

---

## Начало работы

Подробное пошаговое руководство с иллюстрациями по настройке приложения см. в [Руководстве пользователя](GUIDE_RU.md).

### Требования

- Операционная система Windows 10/11
- Установленный CMake 3.16+
- Компилятор MinGW-w64 или MSVC с поддержкой C++17

### Сборка и запуск

Выполните следующие команды в терминале:

\`\`\`powershell
git clone https://github.com/Almanex/Classic-Windows-image-viewer-for-Windows-11.git
cd Classic-Windows-image-viewer-for-Windows-11
cmake -B build -G "MinGW Makefiles"
cmake --build build --config Release
\`\`\`

Исполняемый файл будет скомпилирован в \`release/PhotoViewer.exe\`.

---

## Тестирование

В проекте нет автоматических юнит-тестов. Тестирование производится вручную запуском исполняемого файла с различными параметрами командной строки:

\`\`\`powershell
release/PhotoViewer.exe /?
release/PhotoViewer.exe --about
release/PhotoViewer.exe --formats
\`\`\`

---

## Развертывание

Для развертывания приложения достаточно скопировать скомпилированный файл \`PhotoViewer.exe\` на целевую систему.

> [!WARNING]
> **Windows Defender SmartScreen** может заблокировать запуск приложения при первом старте.
> * **Причина**: Приложение не подписано платным сертификатом разработчика, что является стандартной практикой для бесплатных проектов с открытым исходным кодом.
> * **Инструкция**: Чтобы обойти это предупреждение, нажмите **«Подробнее»** (More info), а затем выберите **«Выполнить в любом случае»** (Run anyway).

---

## Участие в разработке

Мы рады любому участию в улучшении проекта! Вы можете создавать сообщения об ошибках (Issues) или присылать свои исправления (Pull Requests).

---

## Версионирование

Этот проект использует семантическое версионирование (SemVer). Все доступные версии и теги можно просмотреть на вкладке релизов в репозитории.

---

## Авторы и контрибьюторы

- Начальный автор: [Almanex](https://github.com/Almanex)
- Сообщество и контрибьюторы

---

## Лицензия

Проект распространяется под свободной лицензией MIT. Подробности см. в файле [LICENSE](../LICENSE).

---

## Благодарности

- Разработчикам оригинальной библиотеки \`shimgvw.dll\`.
- Сообществу за поддержку и тестирование.
`,
    readme_de: `[ English ](../README.md) • [ Русский ](README_RU.md) • [ Deutsch ](README_DE.md)

# Shell Image Viewer

*Klassischer Windows-Bildbetrachter für Windows 10 und 11.*

[![Lizenz: MIT](https://img.shields.io/badge/Lizenz-MIT-blue.svg)](../LICENSE)
[![Plattform: Windows](https://img.shields.io/badge/Plattform-Windows-0078d7.svg)](#)
[![Sprache: C++17](https://img.shields.io/badge/Sprache-C%2B%2B17-blue.svg)](#)
[![Share](https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Fgithub.com%2FAlmanex%2FClassic-Windows-image-viewer-for-Windows-11)](https://twitter.com/intent/tweet?text=Check%20out%20this%20awesome%20project&url=https%3A%2F%2Fgithub.com%2FAlmanex%2FClassic-Windows-image-viewer-for-Windows-11)


<p align="center">
  <img src="../screenshots/cover.png" alt="Shell Image Viewer" width="95%" />
</p>

---

## Überblick

Microsoft hat die klassische Windows Photo Viewer-Schnittstelle in Windows 10 und 11 entfernt, aber die zugrunde liegende Systembibliothek \`shimgvw.dll\` unterstützt weiterhin die Legacy-Funktionalität.

\`PhotoViewer.exe\` ist ein kleiner Launcher, der in C++ geschrieben wurde und \`ImageView_FullscreenW\` von \`shimgvw.dll\` aufruft, um das bekannte Vollbild-Anzeigeerlebnis wiederherzustellen.

Wenn Ihrer Systemversion \`shimgvw.dll\` fehlt (häufig in einigen Lite- oder „N“-Editionen), finden Sie kompatible Versionen im Verzeichnis \`DLL/\` dieses Projekts und können diese neben der ausführbaren Datei platzieren.

---

## Hauptfunktionen

- Vollbild-Bildbetrachtung über die originale Windows Photo Viewer-Schnittstelle.
- Automatische Suche nach der Systembibliothek \`shimgvw.dll\`.
- Option zur Verwendung einer lokalen Kopie der DLL, wenn die System-DLL fehlt.
- Unterstützung für das Öffnen von Dateien über Befehlszeilenargumente oder den Standard-Auswahldialog.
- Integrierte Befehlszeilenparameter für Versionsinformationen, Hilfe und Liste der unterstützten Formate.

---

## Technologie-Stack

| Komponente / Ebene | Technologie | Details / Zweck |
| --- | --- | --- |
| Programmiersprache | C++17 | Einhaltung moderner Standards für sicheren und effizienten Code |
| Build-System | CMake 3.16+ | Plattformübergreifende Build-Automatisierung |
| Benutzeroberfläche | Win32-API / Common Dialogs | Schlanker nativer Dateiauswahldialog und Informationsfenster |
| Hauptabhängigkeit | shimgvw.dll | Native Windows Photo Viewer-Bibliothek |

---

## Erste Schritte

Eine detaillierte Schritt-für-Schritt-Anleitung mit Bildern zur Einrichtung der App finden Sie im [Benutzerhandbuch](GUIDE_DE.md).

### Voraussetzungen

- Betriebssystem Windows 10/11
- CMake 3.16+ installiert
- MinGW-w64- oder MSVC-Compiler mit C++17-Unterstützung

### Erstellung und Ausführung

Führen Sie folgende Befehle im Terminal aus:

\`\`\`powershell
git clone https://github.com/Almanex/Classic-Windows-image-viewer-for-Windows-11.git
cd Classic-Windows-image-viewer-for-Windows-11
cmake -B build -G "MinGW Makefiles"
cmake --build build --config Release
\`\`\`

Die ausführbare Datei wird in \`release/PhotoViewer.exe\` erstellt.

---

## Tests ausführen

Das Projekt enthält keine automatisierten Unit-Tests. Tests werden manuell durch Ausführen der ausführbaren Datei mit verschiedenen Parametern durchgeführt:

\`\`\`powershell
release/PhotoViewer.exe /?
release/PhotoViewer.exe --about
release/PhotoViewer.exe --formats
\`\`\`

---

## Bereitstellung

Um die Anwendung bereitzustellen, kopieren Sie einfach die kompilierte Datei \`PhotoViewer.exe\` auf das Zielsystem.

> [!WARNING]
> **Windows Defender SmartScreen** kann den Start der Anwendung beim ersten Mal blockieren.
> * **Grund**: Die Anwendung ist nicht mit einem kostenpflichtigen Entwicklerzertifikat signiert, was bei kostenlosen Open-Source-Projekten üblich ist.
> * **Anleitung**: Um diese Warnung zu umgehen, klicken Sie auf **„Weitere Informationen“** (More info) und wählen Sie dann **„Trotzdem ausführen“** (Run anyway).

---

## Beitragen

Wir freuen uns über jeden Beitrag zur Verbesserung des Projekts! Sie können Fehlerberichte (Issues) erstellen oder eigene Korrekturen (Pull Requests) einreichen.

---

## Versionierung

Dieses Projekt verwendet die semantische Versionierung (SemVer). Alle verfügbaren Versionen und Tags können auf der Registerkarte „Releases“ im Repository eingesehen werden.

---

## Autoren und Mitwirkende

- Erstautor: [Almanex](https://github.com/Almanex)
- Community und Mitwirkende

---

## Lizenz

Das Projekt ist unter der freien MIT-Lizenz lizenziert. Weitere Details finden Sie in der Datei [LICENSE](../LICENSE).

---

## Danksagungen

- Entwickler der originalen Bibliothek \`shimgvw.dll\`.
- Community für Unterstützung und Tests.
`,
    guide: `[ English ](GUIDE.md) • [ Русский ](GUIDE_RU.md) • [ Deutsch ](GUIDE_DE.md)

# Shell Image Viewer User Guide

*Step-by-step instructions on how to restore and use the classic photo viewer in Windows 10 and 11.*

This guide describes how to restore the classic Windows photo viewer interface using the portable utility **Shell Image Viewer**.


<p align="center">
  <img src="../screenshots/cover.png" alt="Shell Image Viewer" width="95%" />
</p>

---

## Step 1. Download the Application

Go to the releases section on GitHub and download the \`PhotoViewer.exe\` executable from the latest version:
- [Shell Image Viewer Releases on GitHub](https://github.com/Almanex/Classic-Windows-image-viewer-for-Windows-11/releases)

---

## Step 2. Place the Executable File

Move the downloaded \`PhotoViewer.exe\` file to any permanent folder on your computer (for example, to the root directory of drive \`C:\\\` or to \`C:\\Program Files\\PhotoViewer\\\`).

> [!WARNING]
> **Windows Defender SmartScreen on First Launch:**
> On the first launch or file association, Windows Defender might show a warning: **"Windows protected your PC"**.
> This is a standard reaction of Microsoft Defender to new open-source utilities without a paid digital signature.
> To run the program:
> 1. Click on the **"More info"** link.
> 2. Click the **"Run anyway"** button.
>
> ![SmartScreen warning](https://g-ek.com/assets/images/00/shell-image-viewer-pic-5.png)

---

## Step 3. Select App for Opening Images

1. Right-click on any image file (e.g., \`.jpg\` or \`.png\`).
2. Select **"Open with"** → **"Choose another app"**.
   
   ![Open with](https://g-ek.com/assets/images/Windows11/shell-image-viewer-pic-1.png)

---

## Step 4. Locate PhotoViewer.exe

1. Scroll down the list of programs and click **"More apps"**.
2. Click **"Look for another app on this PC"**.
3. In the Explorer window, navigate to the folder where you saved \`PhotoViewer.exe\` (from Step 2), select it, and click **"Open"**.

   ![Select file in Explorer](https://g-ek.com/assets/images/Windows11/shell-image-viewer-pic-3.png)

---

## Step 5. Associate File Types

Select how you want to use the application:
- To always use this program for this file type, click **"Always"**.
- To use it just once, click **"Just once"**.

![Use choice](https://g-ek.com/assets/images/Windows11/shell-image-viewer-pic-4.png)

> [!TIP]
> **Associate other formats:**
> Repeat the association steps (Steps 3–5) for the main image formats you use: \`.jpg\`, \`.jpeg\`, \`.png\`, \`.bmp\`, \`.gif\`, \`.tiff\`.

---

## Source

This guide is based on the article:
- [How to restore classic Photo Viewer in Windows 11 on G-ek.com](https://g-ek.com/klassicheskoe-sredstvo-prosmotra-fotografij-v-windows-11)
`,
    guide_ru: `[ English ](GUIDE.md) • [ Русский ](GUIDE_RU.md) • [ Deutsch ](GUIDE_DE.md)

# Руководство пользователя Shell Image Viewer

*Пошаговая инструкция по настройке и использованию классического средства просмотра фотографий в Windows 10 и 11.*

В этой инструкции описано, как вернуть классический интерфейс просмотра изображений с помощью портативного приложения **Shell Image Viewer**.


<p align="center">
  <img src="../screenshots/cover.png" alt="Shell Image Viewer" width="95%" />
</p>

---

## Шаг 1. Скачивание приложения

Перейдите в раздел релизов на GitHub и скачайте исполняемый файл \`PhotoViewer.exe\` из последней версии:
- [Релизы Shell Image Viewer на GitHub](https://github.com/Almanex/Classic-Windows-image-viewer-for-Windows-11/releases)

---

## Шаг 2. Размещение исполняемого файла

Переместите скачанный исполняемый файл \`PhotoViewer.exe\` в любую постоянную папку на вашем компьютере (например, в корневой раздел диска \`C:\\\` или в папку \`C:\\Program Files\\PhotoViewer\\\`).

> [!WARNING]
> **Windows Defender SmartScreen и первый запуск:**
> При первом запуске или сопоставлении файлов защитник Windows может выдать предупреждение: **«Система Windows защитила ваш компьютер»**.
> Это стандартная реакция Microsoft Defender на новые независимые утилиты (open-source) без платной цифровой подписи.
> Чтобы запустить программу:
> 1. Нажмите на ссылку **«Подробнее»** (More info).
> 2. Нажмите на появившуюся кнопку **«Выполнить в любом случае»** (Run anyway).
>
> ![Предупреждение SmartScreen](https://g-ek.com/assets/images/00/shell-image-viewer-pic-5.png)

---

## Шаг 3. Выбор приложения для открытия изображений

1. Щёлкните правой кнопкой мыши по любому файлу изображения (например, \`.jpg\` или \`.png\`).
2. Выберите пункт меню **«Открыть с помощью»** (Open with) → **«Выбрать другое приложение»** (Choose another app).
   
   ![Открыть с помощью](https://g-ek.com/assets/images/Windows11/shell-image-viewer-pic-1.png)

---

## Шаг 4. Указание пути к PhotoViewer.exe

1. Прокрутите список доступных программ в самый низ и нажмите ссылку **«Еще приложения»** (More apps).
2. Выберите пункт **«Найти другое приложение на этом компьютере»** (Look for another app on this PC).
3. В открывшемся окне Проводника перейдите к папке, в которую вы сохранили файл \`PhotoViewer.exe\` (из Шага 2), выберите его и нажмите кнопку **«Открыть»** (Open).

   ![Выбор файла в Проводнике](https://g-ek.com/assets/images/Windows11/shell-image-viewer-pic-3.png)

---

## Шаг 5. Ассоциация типов файлов

Выберите способ использования приложения:
- Чтобы всегда использовать эту программу для данного типа файла, нажмите кнопку **«Всегда»** (Always).
- Чтобы использовать один раз, нажмите кнопку **«Только один раз»** (Just once).

![Выбор использования](https://g-ek.com/assets/images/Windows11/shell-image-viewer-pic-4.png)

> [!TIP]
> **Настройка для всех форматов:**
> Повторите процедуру сопоставления (Шаги 3–5) для основных форматов изображений, которые вы используете: \`.jpg\`, \`.jpeg\`, \`.png\`, \`.bmp\`, \`.gif\`, \`.tiff\`.

---

## Источник информации

Данное руководство составлено на основе статьи:
- [Как вернуть классическое Средство Просмотра фотографий в Windows 11 на G-ek.com](https://g-ek.com/klassicheskoe-sredstvo-prosmotra-fotografij-v-windows-11)
`,
    guide_de: `[ English ](GUIDE.md) • [ Русский ](GUIDE_RU.md) • [ Deutsch ](GUIDE_DE.md)

# Shell Image Viewer Benutzerhandbuch

*Schritt-für-Schritt-Anleitung zur Einrichtung und Verwendung des klassischen Windows-Bildbetrachters unter Windows 10 und 11.*

Diese Anleitung beschreibt, wie Sie die klassische Benutzeroberfläche zur Bildanzeige mit dem portablen Dienstprogramm **Shell Image Viewer** wiederherstellen.


<p align="center">
  <img src="../screenshots/cover.png" alt="Shell Image Viewer" width="95%" />
</p>

---

## Schritt 1. Anwendung herunterladen

Gehen Sie zum Release-Bereich auf GitHub und laden Sie die ausführbare Datei \`PhotoViewer.exe\` der neuesten Version herunter:
- [Shell Image Viewer Releases auf GitHub](https://github.com/Almanex/Classic-Windows-image-viewer-for-Windows-11/releases)

---

## Schritt 2. Ausführbare Datei platzieren

Verschieben Sie die heruntergeladene Datei \`PhotoViewer.exe\` in einen beliebigen permanenten Ordner auf Ihrem Computer (z. B. in das Stammverzeichnis von Laufwerk \`C:\\\` oder in \`C:\\Program Files\\PhotoViewer\\\`).

> [!WARNING]
> **Windows Defender SmartScreen beim ersten Start:**
> Beim ersten Start oder der Dateizuordnung zeigt Windows Defender möglicherweise eine Warnung an: **„Der Computer wurde durch Windows geschützt“**.
> Dies ist eine Standardreaktion von Microsoft Defender auf neue Open-Source-Dienstprogramme, die keine kostenpflichtige digitale Signatur haben.
> So führen Sie das Programm aus:
> 1. Klicken Sie auf den Link **„Weitere Informationen“** (More info).
> 2. Klicken Sie auf die Schaltfläche **„Trotzdem ausführen“** (Run anyway).
>
> ![SmartScreen-Warnung](https://g-ek.com/assets/images/00/shell-image-viewer-pic-5.png)

---

## Schritt 3. App zum Öffnen von Bildern auswählen

1. Klicken Sie mit der rechten Maustaste auf eine beliebige Bilddatei (z. B. \`.jpg\` oder \`.png\`).
2. Wählen Sie **„Öffnen mit“** (Open with) → **„Andere App auswählen“** (Choose another app).
   
   ![Öffnen mit](https://g-ek.com/assets/images/Windows11/shell-image-viewer-pic-1.png)

---

## Schritt 4. PhotoViewer.exe suchen

1. Scrollen Sie in der Programmliste nach unten und klicken Sie auf **„Weitere Apps“** (More apps).
2. Klicken Sie auf **„Andere App auf diesem PC suchen“** (Look for another app on this PC).
3. Navigieren Sie im Explorer-Fenster zu dem Ordner, in dem Sie \`PhotoViewer.exe\` gespeichert haben (aus Schritt 2), wählen Sie die Datei aus und klicken Sie auf **„Öffnen“** (Open).

   ![Datei im Explorer auswählen](https://g-ek.com/assets/images/Windows11/shell-image-viewer-pic-3.png)

---

## Schritt 5. Dateitypen zuordnen

Wählen Sie aus, wie Sie die Anwendung verwenden möchten:
- Um dieses Programm immer für diesen Dateityp zu verwenden, klicken Sie auf **„Immer“** (Always).
- Um es nur einmal zu verwenden, klicken Sie auf **„Nur einmal“** (Just once).

![Verwendung auswählen](https://g-ek.com/assets/images/Windows11/shell-image-viewer-pic-4.png)

> [!TIP]
> **Weitere Formate zuordnen:**
> Wiederholen Sie die Zuordnungsschritte (Schritte 3–5) für die wichtigsten Bildformate, die Sie verwenden: \`.jpg\`, \`.jpeg\`, \`.png\`, \`.bmp\`, \`.gif\`, \`.tiff\`.

---

## Quelle

Dieses Handbuch basiert auf dem Artikel:
- [So stellen Sie den klassischen Bildbetrachter in Windows 11 auf G-ek.com wieder her](https://g-ek.com/klassicheskoe-sredstvo-prosmotra-fotografij-v-windows-11)
`
  },
  "portable-app-sync": {
    title: "Portable App Sync",
    subtitle: "A utility designed for keeping portable applications synchronized across multiple systems.",
    category: "Utility",
    lang: "C#",
    platform: "Windows 10/11",
    stars: "1",
    license: "MIT",
    github: "https://github.com/Almanex/Portable-App-Sync",
    image: "/images/projects/portable-app-sync.png",
    readme: `[ English ](README.md) • [ Русский ](docs/README_RU.md) • [ Deutsch ](docs/README_DE.md) | [ Quick Start ](docs/QUICKSTART.md) • [ User Guide ](docs/GUIDE.md)

# PAS (Portable App Sync)

**A portable utility to automate backup and restore of installed Windows applications**

- **Automatic logging** of all operations
- **Portable** no installation required, single \`.exe\` file
- **Modern Fluent UI** styled with WPF-UI 4.3.0, supporting Light/Dark themes and system theme matching
- **Smart filtering** by default indexes only user applications (with option to show hidden system components)
- **Detailed info** background loading of official descriptions and human-readable names. If the app name is not yet loaded, the package ID is displayed instead (they are often identical).

**[Russian version of README / Russian version](docs/README_RU.md)**

<p align="center">
  <img src="screenshots/cover.png" alt="Portable App Sync" width="95%" />
</p>

---

## Technologies

- **.NET 10.0** modern development platform
- **WPF & WPF-UI (v4.3.0)** Fluent design system and modern controls
- **Winget** Windows Package Manager for package management
- **MVVM** architectural pattern for separation of logic and presentation

## System Requirements

- **OS**: Windows 10 (version 1809+) or Windows 11
- **Winget**: Must be installed (usually pre-installed in Windows 11)
- **.NET Runtime**: Not required (self-contained build)

## Usage

### Creating a Backup

1. Run \`PAS.exe\`
2. Wait for system scanning to complete (only user desktop applications are indexed)
3. Select the applications you want to save
   - The filter **All Visible / Available Offline / Online Fallback / Excluded by Default** helps quickly check what will go into the offline package, fallback script, or be excluded
4. Select export mode:
   - **Online Script** creates a \`.bat\` or \`.ps1\` file for auto-installation via winget (recommended)
   - **Offline Package** creates a hybrid set: downloads available distributions and adds an online fallback script for unsupported applications if necessary
5. Click the export button and specify the save location
6. After completion, use the summary of the last export and the **Open Export Folder** button

### Restoring Applications

#### "Online Script" Mode
1. Copy the created \`RestoreApps.bat\` or \`RestoreApps.ps1\` file to the new system
2. Run the file as administrator
3. Wait for all applications to be installed automatically

#### "Offline Package" Mode
1. Copy the folder with downloaded distributions to the new system
2. Run \`install_all.bat\` as administrator
3. If \`RestoreOnlineFallback.bat\` was created, run it after offline installation on a machine with internet access
4. Applications available for offline will be installed from local files, while unsupported ones will be delivered via \`winget install\`

## Building from Source

### Development Requirements

- .NET 10 SDK
- Visual Studio 2022 or JetBrains Rider (optional)

### Build Commands

\`\`\`powershell
# Clone the repository
git clone https://github.com/Almanex/Portable-App-Sync.git
cd Portable-App-Sync

# Build the project
dotnet build

# Run the application
dotnet run

# Create a portable executable (single file)
dotnet publish -c Release
\`\`\`

The final \`.exe\` file will be located in \`dist\\PAS.exe\`

## Project Structure

\`\`\`
PAS/
├── Models/              # Data models
│   ├── InstalledApp.cs
│   ├── ExportMode.cs
│   ├── ExportResult.cs
│   └── WingetExportModels.cs
├── Services/            # Business logic
│   ├── WingetService.cs
│   ├── SystemScanService.cs
│   ├── ScriptGeneratorService.cs
│   ├── DownloadService.cs
│   ├── LoggingService.cs
│   ├── CacheService.cs
│   └── OfflineCompatibilityService.cs
├── ViewModels/          # MVVM ViewModels
│   ├── MainViewModel.cs
│   └── RelayCommand.cs
├── Views/               # UI views
│   ├── MainWindow.xaml
│   ├── MainWindow.xaml.cs
│   ├── HelpWindow.xaml
│   └── HelpWindow.xaml.cs
├── Converters/          # XAML converters
│   └── ValueConverters.cs
├── App.xaml             # Entry point
├── App.xaml.cs
├── AssemblyInfo.cs
└── icon.ico             # Application icon
\`\`\`

## Important Notes

### Application Filtering

By default, the application hides:
- **Microsoft Store Apps** (MSIX packages: Calculator, Photos, Xbox, etc.)
- **System Components** (Visual C++ Redistributable, .NET Runtime, drivers)
- **Technical Dependencies** (WindowsAppRuntime, VCLibs, etc.)

Only **user desktop applications** installed via \`.exe\` or \`.msi\` installers are displayed in the list.
**If you need hidden packages:** you can instantly disable this filter in the interface by checking *"Show system and hidden applications"*.

Service components and updater packages, such as \`Microsoft Edge Update\`, are excluded from export by default. They don't disappear completely: enable system/hidden apps and select the **Excluded by Default** filter to see what exactly was excluded.

### Winget Check

In older Windows 10 builds, Winget might be missing. Scripts automatically check for its presence and provide instructions for installing App Installer from the Microsoft Store.

### Offline Mode Limitations

**Not all applications support downloading distributions** via \`winget download\`. Examples:
- **Visual Studio Code** (\`Microsoft.VisualStudioCode\`)
- **Git** (\`Git.Git\`)
- **Android Studio** (\`Google.AndroidStudio\`)
- And other applications where manufacturers restricted direct downloading

For such applications, PAS now uses a **hybrid offline mode**:
- Supported packages are downloaded locally to the selected folder
- An \`RestoreOnlineFallback.bat\` is automatically created for unsupported packages
- As a result, export doesn't fail due to these apps: they are marked as \`Skipped\` and moved to the fallback script

Recommended restore order:
1. Run \`install_all.bat\`
2. Then, if it was created, run \`RestoreOnlineFallback.bat\` on a machine with internet

**Recommendation**: Use the "Online Script" mode if you want a single universal scenario without separating into offline and fallback.

### Security and Reliability

The project is designed with a focus on industrial-grade stability and security:

- **[Security] Injection Protection**: All interaction with Winget CLI passes through strict package ID validation (\`SafeIdPattern\`). This eliminates the possibility of executing arbitrary commands through app name manipulation.
- **[Stability] Process Stability**: Hard timeouts (120s) are implemented for all external calls. If a Winget process hangs, the application correctly terminates its process tree, leaving no "zombie" processes.
- **[Reliability] Data Integrity**: The caching system is protected from corrupted data and memory overflow (50 MB limit per file). JSON structure is validated before reading.
- **[Einschränkung] Log Rotation**: Automatic log file size management (5 MB limit) prevents uncontrolled disk data growth.
- **[Architecture] DI Architecture (Dependency Injection)**: Use of a dependency container ensures component isolation, simplifies testing, and eliminates service initialization errors.
- **[Threads] Thread Safety**: All interface updates and background tasks are synchronized, eliminating crashes during parallel description loading or app installation.

All operations are transparent and logged in \`PAS.log\` in real-time.

## Logging

All operations are recorded in the \`PAS.log\` file in the \`%LocalAppData%\\PAS\\\` folder. The log contains:
- Information messages on progress
- Warnings about issues
- Errors with full stack traces
- Fatal exceptions (if the application crashed)

## Contributing

Any improvements are welcome! Please:
1. Fork the project
2. Create a branch for your changes
3. Submit a Pull Request

## License

This project is distributed under the MIT License. See the \`LICENSE\` file for details.

## Acknowledgments

- Microsoft for [Winget](https://github.com/microsoft/winget-cli)
- .NET Community for excellent development tools

---

**Note**: This application uses the official Windows Package Manager (Winget) and contains no malicious code. All operations are transparent and can be verified in the source code.`,
    readme_ru: `[ English ](../README.md) • [ Русский ](README_RU.md) • [ Deutsch ](README_DE.md) | [ Быстрый старт ](QUICKSTART_RU.md) • [ Руководство пользователя ](GUIDE_RU.md)

# PAS (Portable App Sync)

**Портативная утилита для автоматизации резервного копирования и восстановления установленных приложений Windows**

- **Автоматическое логирование** всех операций.
- **Портативность:** не требует установки, один исполняемый файл \`.exe\`.
- **Современный Fluent UI:** стилизован с помощью WPF-UI 4.3.0, поддерживает светлую/темную темы и автоподстройку под системную тему.
- **Умная фильтрация:** по умолчанию индексируются только пользовательские приложения (с возможностью отображения скрытых и системных компонентов).
- **Подробная информация:** фоновое скачивание официальных описаний и понятных человеку имен программ. Если название приложения еще не загружено, вместо него отображается Package ID (они часто совпадают).

---

<p align="center">
  <img src="../screenshots/cover.png" alt="Portable App Sync" width="95%" />
</p>

---

## Технологии

- **.NET 10.0:** современная платформа разработки.
- **WPF и WPF-UI (v4.3.0):** система Fluent-дизайна и современные элементы управления.
- **Winget:** Windows Package Manager для управления пакетами.
- **MVVM:** архитектурный паттерн для разделения логики и представления.

## Системные требования

- **ОС:** Windows 10 (версия 1809+) или Windows 11.
- **Winget:** должен быть установлен (по умолчанию предустановлен в Windows 11).
- **.NET Runtime:** не требуется (сборка self-contained).

## Использование

### Создание резервной копии

1. Запустите \`PAS.exe\`.
2. Дождитесь завершения сканирования системы (индексируются только пользовательские настольные приложения).
3. Выберите приложения, которые вы хотите сохранить.
   - Фильтр **Все видимые / Доступны оффлайн / Онлайн-резерв / Исключены по умолчанию** помогает быстро проверить, какие приложения попадут в оффлайн-пакет, какие в онлайн-скрипт восстановления, а какие будут пропущены.
4. Выберите режим экспорта:
   - **Онлайн-скрипт:** создает файл \`.bat\` или \`.ps1\` для автоматической установки через winget (рекомендуется).
   - **Оффлайн-пакет:** создает гибридный набор — скачивает доступные дистрибутивы программ локально и при необходимости добавляет онлайн-скрипт резервного восстановления для неподдерживаемых приложений.
5. Нажмите кнопку экспорта и укажите место для сохранения.
6. После завершения ознакомьтесь со сводкой экспорта и воспользуйтесь кнопкой **"Открыть папку экспорта"**.

### Восстановление приложений

#### Режим "Онлайн-скрипт"
1. Скопируйте созданный файл \`RestoreApps.bat\` или \`RestoreApps.ps1\` на новую систему.
2. Запустите файл от имени администратора.
3. Дождитесь автоматической установки всех приложений.

#### Режим "Оффлайн-пакет"
1. Скопируйте папку с загруженными дистрибутивами на новую систему.
2. Запустите \`install_all.bat\` от имени администратора.
3. Если был создан файл \`RestoreOnlineFallback.bat\`, запустите его после завершения оффлайн-установки на компьютере с доступом в интернет.
4. Приложения, доступные для оффлайн-установки, будут установлены из локальных файлов, а неподдерживаемые оффлайн-загрузку — доустановлены через \`winget install\`.

---

## Сборка из исходников

### Требования для разработки

- .NET 10 SDK
- Visual Studio 2022 или JetBrains Rider (опционально)

### Команды сборки

\`\`\`powershell
# Клонирование репозитория
git clone https://github.com/Almanex/Portable-App-Sync.git
cd Portable-App-Sync

# Сборка проекта
dotnet build

# Запуск приложения
dotnet run

# Публикация портативной версии (один файл .exe)
dotnet publish -c Release
\`\`\`

Готовый файл \`.exe\` будет находиться в папке \`dist\\PAS.exe\`

## Структура проекта

\`\`\`
PAS/
├── Models/              # Модели данных
│   ├── InstalledApp.cs
│   ├── ExportMode.cs
│   ├── ExportResult.cs
│   └── WingetExportModels.cs
├── Services/            # Бизнес-логика
│   ├── WingetService.cs
│   ├── SystemScanService.cs
│   ├── ScriptGeneratorService.cs
│   ├── DownloadService.cs
│   ├── LoggingService.cs
│   ├── CacheService.cs
│   └── OfflineCompatibilityService.cs
├── ViewModels/          # Вьюмодели MVVM
│   ├── MainViewModel.cs
│   └── RelayCommand.cs
├── Views/               # Представления UI (WPF)
│   ├── MainWindow.xaml
│   ├── MainWindow.xaml.cs
│   ├── HelpWindow.xaml
│   └── HelpWindow.xaml.cs
├── Converters/          # XAML конвертеры
│   └── ValueConverters.cs
├── App.xaml             # Точка входа приложения
├── App.xaml.cs
├── AssemblyInfo.cs
└── icon.ico             # Иконка приложения
\`\`\`

---

## Важные примечания

### Фильтрация приложений

По умолчанию приложение скрывает из списка:
- **Microsoft Store Apps** (пакеты MSIX: Калькулятор, Фотографии, Xbox и т.д.).
- **Системные компоненты** (Visual C++ Redistributable, .NET Runtime, драйверы).
- **Технические зависимости** (WindowsAppRuntime, VCLibs и т.д.).

В списке отображаются только **пользовательские настольные приложения**, установленные через \`.exe\` или \`.msi\` инсталляторы.
**Если вам нужны скрытые пакеты:** вы можете мгновенно отключить этот фильтр в интерфейсе, установив флажок *"Показывать системные и скрытые приложения"*.

Служебные компоненты и пакеты обновлений, такие как \`Microsoft Edge Update\`, исключаются из экспорта по умолчанию. Они не исчезают бесследно: включите отображение системных/скрытых приложений и выберите фильтр **Исключены по умолчанию**, чтобы увидеть, что именно было отсеяно.

### Проверка Winget

В устаревших сборках Windows 10 утилита Winget может отсутствовать. Создаваемые скрипты автоматически проверяют ее наличие и предлагают инструкции по установке App Installer из Microsoft Store.

### Ограничения автономного (оффлайн) режима

**Не все приложения поддерживают скачивание дистрибутивов** через \`winget download\`. Примеры:
- **Visual Studio Code** (\`Microsoft.VisualStudioCode\`)
- **Git** (\`Git.Git\`)
- **Android Studio** (\`Google.AndroidStudio\`)
- И другие программы, производители которых ограничили возможность прямой загрузки.

Для таких приложений PAS использует **гибридный оффлайн-режим**:
- Поддерживаемые пакеты скачиваются локально в выбранную папку.
- Для неподдерживаемых автоматически создается скрипт \`RestoreOnlineFallback.bat\`.
- В результате экспорт не прерывается ошибками: такие программы помечаются как \`Пропущено (Skipped)\` и переносятся в файл онлайн-резерва.

Рекомендуемый порядок восстановления:
1. Запустите \`install_all.bat\`.
2. После этого (если файл был создан) запустите \`RestoreOnlineFallback.bat\` на машине с интернетом.

**Рекомендация:** Используйте режим "Онлайн-скрипт", если вам нужен один универсальный сценарий без разделения на оффлайн и резерв.

### Безопасность и надежность

Проект разработан с фокусом на промышленную стабильность и безопасность:

- **[Безопасность] Защита от инъекций:** все взаимодействия с Winget CLI проходят через строгую валидацию Package ID (\`SafeIdPattern\`). Это исключает возможность выполнения произвольных команд через манипуляцию именами программ.
- **[Стабильность] Процесс стабильности:** для всех внешних вызовов реализованы жесткие таймауты (120 секунд). Если процесс Winget зависнет, приложение корректно завершит всё дерево процессов, не оставляя «зомби».
- **[Надежность] Целостность данных:** кэш-система защищена от поврежденных файлов и переполнения памяти (лимит 50 МБ на файл). Структура JSON проверяется перед чтением.
- **[Ограничения] Ротация логов:** автоматическое ограничение размера лог-файла (до 5 МБ) предотвращает неконтролируемый рост дискового пространства.
- **[Архитектура] DI-Архитектура (Dependency Injection):** использование контейнера зависимостей изолирует компоненты, упрощает тестирование и исключает ошибки инициализации сервисов.
- **[Потоки] Потокобезопасность:** все обновления интерфейса и фоновые задачи синхронизированы, исключая сбои при параллельной загрузке описаний или установке программ.

Все операции прозрачны и фиксируются в \`PAS.log\` в режиме реального времени.

## Логирование

Все операции записываются в файл \`PAS.log\` в папке \`%LocalAppData%\\PAS\\\`. Лог содержит:
- Информационные сообщения о прогрессе выполнения задач.
- Предупреждения о потенциальных проблемах.
- Ошибки с полными трассировками стека (stack traces).
- Фатальные исключения (в случае сбоя приложения).

## Участие в разработке

Любые улучшения приветствуются! Пожалуйста:
1. Создайте форк проекта.
2. Создайте ветку для ваших изменений.
3. Отправьте Pull Request.

## Лицензия

Этот проект распространяется под лицензией MIT. Подробности см. в файле \`LICENSE\`.

## Благодарности

- Microsoft за [Winget](https://github.com/microsoft/winget-cli).
- Сообществу .NET за прекрасные инструменты разработки.

---

**Примечание:** Данное приложение использует официальный менеджер пакетов Windows (Winget) и не содержит вредоносного кода. Все выполняемые операции прозрачны и могут быть проверены в исходном коде.
`,
    readme_de: `[ English ](../README.md) • [ Русский ](README_RU.md) • [ Deutsch ](README_DE.md) | [ Quick Start ](QUICKSTART.md) • [ User Guide ](GUIDE.md)

# PAS (Portable App Sync)

**Ein tragbares Dienstprogramm zur Automatisierung der Sicherung und Wiederherstellung installierter Windows-Anwendungen**

- **Automatische Protokollierung** aller Vorgänge
- **Portabel**, keine Installation erforderlich, einzelne „.exe“-Datei
- **Moderne Fluent-Benutzeroberfläche** im Stil von WPF-UI 4.3.0, unterstützt Hell/Dunkel-Themen und System-Theme-Abgleich
- **Intelligente Filterung** indiziert standardmäßig nur Benutzeranwendungen (mit der Option, versteckte Systemkomponenten anzuzeigen)
- **Detaillierte Informationen** Laden offizieller Beschreibungen und für Menschen lesbarer Namen im Hintergrund. Wenn der App-Name noch nicht geladen ist, wird stattdessen die Paket-ID angezeigt (diese sind oft identisch).

**[Russische Version von README / Russische Version](README_RU.md)**

<p align="center">
  <img src="../screenshots/cover.png" alt="Portable App Sync" width="95%" />
</p>

---

## Technologien

- **.NET 10.0** moderne Entwicklungsplattform
- **WPF & WPF-UI (v4.3.0)** Fließendes Designsystem und moderne Steuerung
- **Winget** Windows Package Manager für die Paketverwaltung
- **MVVM**-Architekturmuster zur Trennung von Logik und Präsentation

## Systemanforderungen

- **Betriebssystem**: Windows 10 (Version 1809+) oder Windows 11
- **Winget**: Muss installiert sein (normalerweise vorinstalliert in Windows 11)
- **.NET Runtime**: Nicht erforderlich (eigenständiger Build)

## Verwendung

### Erstellen eines Backups

1. Führen Sie „PAS.exe“ aus
2. Warten Sie, bis der Systemscan abgeschlossen ist (nur Benutzer-Desktopanwendungen werden indiziert)
3. Wählen Sie die Anwendungen aus, die Sie speichern möchten
   - Der Filter **Alle sichtbar / Offline verfügbar / Online-Fallback / Standardmäßig ausgeschlossen** hilft dabei, schnell zu überprüfen, was in das Offline-Paket oder Fallback-Skript aufgenommen oder ausgeschlossen wird
4. Exportmodus auswählen:
   - **Online Script** erstellt eine „.bat“- oder „.ps1“-Datei für die automatische Installation über Winget (empfohlen)
   - **Offline Package** erstellt einen Hybridsatz: lädt verfügbare Distributionen herunter und fügt bei Bedarf ein Online-Fallback-Skript für nicht unterstützte Anwendungen hinzu
5. Klicken Sie auf die Schaltfläche „Exportieren“ und geben Sie den Speicherort an
6. Verwenden Sie nach Abschluss die Zusammenfassung des letzten Exports und die Schaltfläche **Exportordner öffnen**

### Anwendungen wiederherstellen

#### Modus „Online-Skript“
1. Kopieren Sie die erstellte Datei „RestoreApps.bat“ oder „RestoreApps.ps1“ auf das neue System
2. Führen Sie die Datei als Administrator aus
3. Warten Sie, bis alle Anwendungen automatisch installiert werden

#### Modus „Offline-Paket“
1. Kopieren Sie den Ordner mit den heruntergeladenen Distributionen auf das neue System
2. Führen Sie „install_all.bat“ als Administrator aus
3. Wenn „RestoreOnlineFallback.bat“ erstellt wurde, führen Sie es nach der Offline-Installation auf einem Computer mit Internetzugang aus
4. Offline verfügbare Anwendungen werden aus lokalen Dateien installiert, während nicht unterstützte Anwendungen über „winget install“ bereitgestellt werden

## Aufbau aus der Quelle

### Entwicklungsanforderungen

- .NET 10 SDK
- Visual Studio 2022 oder JetBrains Rider (optional)

### Build-Befehle

\`\`\`powershell
# Clone the repository
git clone https://github.com/Almanex/Portable-App-Sync.git
cd Portable-App-Sync

# Build the project
dotnet build

# Run the application
dotnet run

# Create a portable executable (single file)
dotnet publish -c Release
\`\`\`

Die endgültige „.exe“-Datei befindet sich unter „dist\\PAS.exe“.

## Projektstruktur

\`\`\`
PAS/
├── Models/              # Data models
│   ├── InstalledApp.cs
│   ├── ExportMode.cs
│   ├── ExportResult.cs
│   └── WingetExportModels.cs
├── Services/            # Business logic
│   ├── WingetService.cs
│   ├── SystemScanService.cs
│   ├── ScriptGeneratorService.cs
│   ├── DownloadService.cs
│   ├── LoggingService.cs
│   ├── CacheService.cs
│   └── OfflineCompatibilityService.cs
├── ViewModels/          # ViewModels MVVM
│   ├── MainViewModel.cs
│   └── RelayCommand.cs
├── Views/               # UI-Ansichten (WPF)
│   ├── MainWindow.xaml
│   ├── MainWindow.xaml.cs
│   ├── HelpWindow.xaml
│   └── HelpWindow.xaml.cs
├── Converters/          # XAML-Konverter
│   └── ValueConverters.cs
├── App.xaml             # Einstiegspunkt
├── App.xaml.cs
├── AssemblyInfo.cs
└── icon.ico             # Anwendungs-Icon
\`\`\`

## Wichtige Hinweise

### Anwendungsfilterung

Standardmäßig verbirgt die Anwendung Folgendes:
- **Microsoft Store Apps** (MSIX-Pakete: Rechner, Fotos, Xbox usw.)
- **Systemkomponenten** (Visual C++ Redistributable, .NET Runtime, Treiber)
- **Technische Abhängigkeiten** (WindowsAppRuntime, VCLibs usw.)

In der Liste werden nur **Benutzer-Desktopanwendungen** angezeigt, die über „.exe“- oder „.msi“-Installationsprogramme installiert wurden.
**Wenn Sie versteckte Pakete benötigen:** Sie können diesen Filter in der Benutzeroberfläche sofort deaktivieren, indem Sie *"System und versteckte Anwendungen anzeigen"* aktivieren.

Dienstkomponenten und Updater-Pakete wie „Microsoft Edge Update“ sind standardmäßig vom Export ausgeschlossen. Sie verschwinden nicht vollständig: Aktivieren Sie System-/versteckte Apps und wählen Sie den Filter **Standardmäßig ausgeschlossen**, um zu sehen, was genau ausgeschlossen wurde.

### Winget-Check

In älteren Windows 10-Builds fehlt Winget möglicherweise. Skripte prüfen automatisch, ob es vorhanden ist, und geben Anweisungen für die Installation des App Installers aus dem Microsoft Store.

### Einschränkungen im Offline-Modus

**Nicht alle Anwendungen unterstützen das Herunterladen von Distributionen** über „winget download“. Beispiele:
- **Visual Studio Code** (\`Microsoft.VisualStudioCode\`)
- **Git** (\`Git.Git\`)
- **Android Studio** (\`Google.AndroidStudio\`)
- Und andere Anwendungen, bei denen die Hersteller das direkte Herunterladen eingeschränkt haben

Für solche Anwendungen verwendet PAS jetzt einen **hybriden Offline-Modus**:
- Unterstützte Pakete werden lokal in den ausgewählten Ordner heruntergeladen
- Für nicht unterstützte Pakete wird automatisch eine „RestoreOnlineFallback.bat“ erstellt
- Dadurch schlägt der Export aufgrund dieser Apps nicht fehl: Sie werden als „Übersprungen“ markiert und in das Fallback-Skript verschoben

Empfohlene Wiederherstellungsreihenfolge:
1. Führen Sie „install_all.bat“ aus
2. Wenn es dann erstellt wurde, führen Sie „RestoreOnlineFallback.bat“ auf einem Computer mit Internet aus

**Empfehlung**: Verwenden Sie den Modus „Online-Skript“, wenn Sie ein einziges universelles Szenario ohne Trennung in Offline und Fallback wünschen.

### Sicherheit und Zuverlässigkeit

Das Projekt ist mit dem Schwerpunkt auf Stabilität und Sicherheit auf Industrieniveau konzipiert:

- **[Sicherheit] Injektionsschutz**: Alle Interaktionen mit der Winget-CLI durchlaufen eine strenge Paket-ID-Validierung („SafeIdPattern“). Dadurch wird die Möglichkeit der Ausführung beliebiger Befehle durch Manipulation des App-Namens ausgeschlossen.
- **[Stabilität] Prozessstabilität**: Für alle externen Aufrufe sind harte Timeouts (120s) implemetiert. Wenn ein Winget-Prozess hängt, beendet die Anwendung korrekt ihren Prozessbaum und hinterlässt keine „Zombie“-Prozesse.
- **[Zuverlässigkeit] Datenintegrität**: Das Caching-System ist vor beschädigten Daten und Speicherüberlauf geschützt (50 MB-Limit pro Datei). Die JSON-Struktur wird vor dem Lesen validiert.
- **[Einschränkung] Protokollrotation**: Die automatische Verwaltung der Protokolldateigröße (5 MB-Grenze) verhindert ein unkontrolliertes Datenwachstum auf der Festplatte.
- **[Architektur] DI-Architektur (Abhängigkeitsinjektion)**: Die Verwendung eines Abhängigkeitscontainers gewährleistet die Komponentenisolation, vereinfacht das Testen und eliminiert Fehler bei der Dienstinitialisierung.
- **[Threads] Thread-Sicherheit**: Alle Schnittstellenaktualisierungen und Hintergrundaufgaben werden synchronisiert, wodurch Abstürze beim parallelen Laden von Beschreibungen oder bei der App-Installation vermieden werden.

Alle Vorgänge sind transparent und werden in Echtzeit in „PAS.log“ protokolliert.

## Protokollierung

Alle Vorgänge werden in der Datei „PAS.log“ im Ordner „%LocalAppData%\\PAS\\“ aufgezeichnet. Das Protokoll enthält:
- Informationsmeldungen zum Fortschritt
- Warnungen zu Problemen
- Fehler mit Full-Stack-Traces
- Fatale Ausnahmen (wenn die Anwendung abgestürzt ist)

## Mitwirken

Alle Verbesserungen sind willkommen! Bitte:
1. Forken Sie das Projekt
2. Erstellen Sie einen Zweig für Ihre Änderungen
3. Senden Sie eine Pull-Anfrage

## Lizenz

Dieses Projekt wird unter der MIT-Lizenz vertrieben. Einzelheiten finden Sie in der Datei „LICENSE“.

## Danksagungen

- Microsoft für [Winget](https://github.com/microsoft/winget-cli)
- .NET-Community für hervorragende Entwicklungstools

---

**Hinweis**: Diese Anwendung verwendet den offiziellen Windows-Paketmanager (Winget) und enthält keinen Schadcode. Alle Vorgänge sind transparent und können im Quellcode überprüft werden.
`,
    guide: `[ English ](../README.md) • [ Русский ](README_RU.md) • [ Deutsch ](README_DE.md) | [ Quick Start ](QUICKSTART.md) • [ User Guide ](GUIDE.md) • [ Руководство пользователя ](GUIDE_RU.md)

# PAS (Portable App Sync) — Comprehensive User Guide

Welcome to the comprehensive user guide for **PAS (Portable App Sync)**! This guide will walk you through the inner workings of the application, help you understand the backup and restore processes, explain the filter systems, and show you how to resolve common troubleshooting scenarios.

---

<p align="center">
  <img src="../screenshots/cover.png" alt="Portable App Sync" width="95%" />
</p>

---

## Application Workflow

The diagram below outlines the overall workflow of backing up and restoring your applications using PAS.

\`\`\`mermaid
flowchart TD
    Start([Launch PAS.exe]) --> Scan[Scan System via Winget]
    Scan --> Populate[Populate Interactive UI List]
    
    subgraph Filtering & Selection
        Populate --> Filter{Apply Filters}
        Filter -- "Show System/Hidden" --> ShowAll[Show All Packages]
        Filter -- "User Apps Only (Default)" --> ShowUser[Show Desktop Apps]
        ShowAll & ShowUser --> Select[Select Apps via Checkboxes]
    end
    
    Select --> Mode{Choose Export Mode}
    
    subgraph Exporting
        Mode -- "Online Script" --> GenOnline[Generate RestoreApps.bat / .ps1]
        Mode -- "Offline Package" --> DownLocal[Download installers to local folder]
        DownLocal --> CheckComp{Supported by Winget Download?}
        CheckComp -- Yes --> SaveInst[Save installer file]
        CheckComp -- No --> MarkSkip[Mark as Skipped & Add to Fallback]
        SaveInst & MarkSkip --> GenOffline[Generate install_all.bat & RestoreOnlineFallback.bat]
    end

    GenOnline & GenOffline --> End([Ready to restore on new system])
\`\`\`

---

## Understanding Application Filtering

By default, PAS scans all installed applications on your computer using the Windows Package Manager (Winget). To prevent cluttering your backup list with system packages or runtime libraries, the application applies smart filters:

- **User Desktop Applications (Default)**: Displays standard applications installed by the user (e.g., Google Chrome, VS Code, Discord, WinRAR).
- **Microsoft Store Apps**: Hidden by default. Includes pre-installed Windows packages (UWP/MSIX), such as Calculator, Xbox, Photos, etc.
- **System Components**: Hidden by default. Includes compilers, drivers, configuration packages, and shared runtimes (e.g., C++ Redistributables, .NET Runtimes).
- **Technical Dependencies**: Hidden by default. Framework runtimes and libraries like \`VCLibs\` or \`WindowsAppRuntime\`.

### How to Toggle Filters
If you want to back up a hidden system component (like a specific runtime or store app):
1. Check the box **"Show system and hidden applications"** at the top of the interface.
2. The list will instantly refresh to display all scanned packages.
3. Use the view filter selection:
   - **All Visible**: Displays all currently unfiltered programs.
   - **Available Offline**: Displays only applications that support downloading their installers via Winget.
   - **Online Fallback**: Displays applications that will need to be downloaded from the internet during recovery because they don't support direct downloading.
   - **Excluded by Default**: Displays updater components or system utilities that are excluded from backups by default (e.g., \`Microsoft Edge Update\`) to prevent conflict.

---

## Export Modes Explained

PAS offers two distinct methods for backing up your application configuration. Choosing the right one depends on your destination machine's environment.

### 1. Online Script (Recommended)
This mode generates a lightweight command script that pulls installers directly from Microsoft's official Winget repositories during the restore process.

- **Files Generated**: \`RestoreApps.bat\` (and/or \`RestoreApps.ps1\`).
- **Ideal For**: Restoring applications on a machine with a stable internet connection.
- **Pros**: 
  - Ultra-small backup size (only a few kilobytes).
  - Always installs the **latest versions** of the apps at the time of restoration.
  - Highly reliable.
- **Cons**: Requires active internet connection during restore.

### 2. Offline Package
This mode attempts to download all installer files (\`.exe\`, \`.msi\`, \`.msix\`) to a local folder so they can be installed without internet access.

- **Files Generated**: A folder containing installer files, \`install_all.bat\` (offline installer script), and potentially \`RestoreOnlineFallback.bat\` (online fallback script).
- **Ideal For**: Air-gapped machines, corporate networks with restricted internet, or saving bandwidth.
- **Pros**: Installs applications fast without downloading them during setup.
- **Cons**: Large backup size (several gigabytes depending on selected apps).

> [!IMPORTANT]
> **The Hybrid Fallback Mechanism**: Many publishers (e.g., Microsoft for VS Code, Git, Android Studio) restrict direct installer downloading via Winget. 
> 
> To prevent backup failures, PAS automatically identifies these unsupported packages, skips downloading them offline, and puts them into \`RestoreOnlineFallback.bat\`. 
> 
> When restoring, run \`install_all.bat\` first to install offline packages, then run \`RestoreOnlineFallback.bat\` once you have an internet connection to install the remaining applications.

---

## Restoration Steps

To restore your applications on a fresh Windows installation, follow these procedures.

### How to run the Online Script
1. Copy \`RestoreApps.bat\` or \`RestoreApps.ps1\` to the target computer.
2. Right-click the script and select **"Run as Administrator"**.
3. A command prompt window will open. If Winget is not installed, the script will prompt you and provide instructions on how to install it.
4. Wait for the automated installer to finish.

### How to run the Offline Package
1. Copy the exported folder containing \`install_all.bat\` and the installers to the target computer.
2. Right-click \`install_all.bat\` and select **"Run as Administrator"**.
3. All local installers will be run silently or with basic progress indicators.
4. If a \`RestoreOnlineFallback.bat\` was created, run it as Administrator after connecting the computer to the internet to fetch the remaining applications.

---

## Troubleshooting Common Issues

### 1. Winget is missing on the target machine
**Symptom**: The restore script warns that the \`winget\` command was not found.
- **Solution**: Winget is pre-installed on Windows 11 and recent builds of Windows 10. If it is missing:
  1. Open the Microsoft Store and search for **"App Installer"**.
  2. Click **"Update"** or **"Install"**.
  3. Alternatively, download the latest \`.msixbundle\` from the official [GitHub repository](https://github.com/microsoft/winget-cli/releases) and run it.

### 2. Apps are skipped during offline download
**Symptom**: PAS log shows warnings about skipped downloads, and some apps are not in the offline folder.
- **Explanation**: This is normal behavior due to licensing or publisher constraints. The installer cannot be downloaded ahead of time. These applications are automatically placed into the online fallback script.

### 3. Permission Errors
**Symptom**: Scripts fail to run, or installers exit with errors.
- **Solution**: Ensure you are running the scripts **as Administrator**. Many desktop applications require administrative privileges to write to \`C:\\Program Files\` and register system services.

### 4. Logging & Diagnostics
If the application crashes or an operation fails, you can find logs here:
- **Log Location**: \`%LocalAppData%\\PAS\\PAS.log\` (paste this in the Windows Explorer address bar).
- **Log Properties**:
  - Automatically rotated when it exceeds **5 MB**.
  - Contains complete exception details and Winget CLI process outputs for quick diagnostic parsing.
`,
    guide_ru: `[ English ](../README.md) • [ Русский ](README_RU.md) • [ Deutsch ](README_DE.md) | [ Быстрый старт ](QUICKSTART_RU.md) • [ Руководство пользователя ](GUIDE_RU.md)

# PAS (Portable App Sync) — Полное руководство пользователя

Добро пожаловать в руководство пользователя для **PAS (Portable App Sync)**! Данный документ подробно описывает принципы работы приложения, процессы резервного копирования и восстановления, систему фильтрации, а также способы решения часто возникающих проблем.

---

<p align="center">
  <img src="../screenshots/cover.png" alt="Portable App Sync" width="95%" />
</p>

---

## Схема работы приложения

Ниже представлена диаграмма, описывающая процесс резервного копирования и восстановления приложений с помощью PAS.

\`\`\`mermaid
flowchart TD
    Start([Запуск PAS.exe]) --> Scan[Сканирование системы через Winget]
    Scan --> Populate[Заполнение интерактивного списка в UI]
    
    subgraph Фильтрация и выбор
        Populate --> Filter{Применить фильтры}
        Filter -- "Показывать системные/скрытые" --> ShowAll[Показать все пакеты]
        Filter -- "Только пользовательские (по умолчанию)" --> ShowUser[Показать настольные приложения]
        ShowAll & ShowUser --> Select[Выбор программ галочками]
    end
    
    Select --> Mode{Выбор режима экспорта}
    
    subgraph Экспорт
        Mode -- "Онлайн-скрипт" --> GenOnline[Создать RestoreApps.bat / .ps1]
        Mode -- "Оффлайн-пакет" --> DownLocal[Скачивание установщиков в локальную папку]
        DownLocal --> CheckComp{Поддерживается winget download?}
        CheckComp -- Да --> SaveInst[Сохранить файл установщика]
        CheckComp -- Нет --> MarkSkip[Пометить как пропущенное и добавить в резерв]
        SaveInst & MarkSkip --> GenOffline[Создать install_all.bat и RestoreOnlineFallback.bat]
    end

    GenOnline & GenOffline --> End([Готово к восстановлению на новой ОС])
\`\`\`

---

## Понимание фильтрации приложений

По умолчанию PAS сканирует все установленные на компьютере программы с помощью диспетчера пакетов Windows (Winget). Чтобы не перегружать список резервного копирования техническими пакетами или библиотеками времени выполнения, приложение использует умные фильтры:

- **Пользовательские приложения (по умолчанию)**: Отображает стандартные настольные программы, установленные пользователем (например, Google Chrome, VS Code, Discord, WinRAR).
- **Приложения Microsoft Store**: Скрыты по умолчанию. Включает предустановленные пакеты Windows (UWP/MSIX), такие как Калькулятор, Xbox, Фотографии и т. д.
- **Системные компоненты**: Скрыты по умолчанию. Включает компиляторы, драйверы, пакеты конфигурации и общие среды выполнения (например, Microsoft Visual C++ Redistributable, .NET Runtime).
- **Технические зависимости**: Скрыты по умолчанию. Библиотеки и фреймворки типа \`VCLibs\` или \`WindowsAppRuntime\`.

### Как переключить фильтры
Если вам нужно сделать резервную копию скрытого системного компонента (например, конкретной библиотеки или приложения Store):
1. Установите флажок **"Показывать системные и скрытые приложения"** в верхней части окна.
2. Список мгновенно обновится и отобразит все найденные пакеты.
3. Используйте фильтр отображения для быстрой навигации:
   - **Все видимые**: Отображает все текущие неотфильтрованные программы.
   - **Доступны оффлайн**: Показывает только приложения, которые поддерживают скачивание файлов установщиков на диск.
   - **Онлайн-резерв**: Показывает программы, установщики которых не могут быть скачаны локально; при восстановлении они будут загружаться из интернета.
   - **Исключены по умолчанию**: Показывает службы обновлений или служебные утилиты, которые исключаются из резервной копии во избежание конфликтов (например, \`Microsoft Edge Update\`).

---

## Режимы экспорта

PAS предлагает два метода для сохранения конфигурации приложений. Выбор зависит от наличия интернета на целевом компьютере.

### 1. Онлайн-скрипт (Рекомендуется)
Этот режим создает легковесный скрипт, который скачивает установщики из официальных репозиториев Winget непосредственно в процессе восстановления приложений.

- **Создаваемые файлы**: \`RestoreApps.bat\` (и/или \`RestoreApps.ps1\`).
- **Сфера применения**: Восстановление программ на компьютере со стабильным подключением к интернету.
- **Преимущества**:
  - Минимальный размер резервной копии (всего несколько килобайт).
  - При восстановлении всегда устанавливаются **самые свежие версии** приложений.
  - Высокая надежность работы.
- **Недостатки**: Требуется активное интернет-подключение при восстановлении.

### 2. Оффлайн-пакет
Этот режим скачивает файлы инсталляторов приложений (\`.exe\`, \`.msi\`, \`.msix\`) в локальную папку, чтобы их можно было установить вообще без доступа к сети.

- **Создаваемые файлы**: Папка с файлами установщиков, скрипт тихой установки \`install_all.bat\` и (при необходимости) резервный скрипт \`RestoreOnlineFallback.bat\`.
- **Сфера применения**: Компьютеры в изолированных сетях, корпоративные рабочие места без доступа к интернету или экономия трафика.
- **Преимущества**: Быстрая установка приложений без скачивания во время развертывания.
- **Недостатки**: Большой размер резервной копии (может достигать нескольких гигабайт).

> [!IMPORTANT]
> **Гибридный механизм резервного восстановления**: Многие разработчики (например, Microsoft для VS Code, Git, Android Studio) запрещают прямое скачивание дистрибутивов через Winget.
> 
> Чтобы экспорт не прерывался ошибками, PAS автоматически распознает такие пакеты, пропускает их оффлайн-скачивание и вносит их в скрипт онлайн-резерва \`RestoreOnlineFallback.bat\`.
> 
> При восстановлении сначала запустите \`install_all.bat\` (установит программы без интернета), а затем, подключившись к сети, запустите \`RestoreOnlineFallback.bat\`, чтобы доустановить оставшиеся приложения.

---

## Процесс восстановления

Для развертывания программ на новой системе следуйте инструкциям ниже.

### Запуск Онлайн-скрипта
1. Скопируйте файл \`RestoreApps.bat\` или \`RestoreApps.ps1\` на новый компьютер.
2. Щелкните правой кнопкой мыши по файлу и выберите **"Запуск от имени администратора"**.
3. Откроется окно командной строки. Если утилита Winget отсутствует в системе, скрипт сообщит об этом и покажет инструкцию по установке.
4. Дождитесь завершения автоматической установки.

### Запуск Оффлайн-пакета
1. Скопируйте экспортированную папку (со скриптом \`install_all.bat\` и установщиками) на новый компьютер.
2. Щелкните правой кнопкой мыши по файлу \`install_all.bat\` и выберите **"Запуск от имени администратора"**.
3. Все локальные инсталляторы будут выполнены в тихом режиме или с минимальным отображением прогресса.
4. Если был создан файл \`RestoreOnlineFallback.bat\`, подключите компьютер к интернету, щелкните по нему правой кнопкой мыши и выберите **"Запуск от имени администратора"**, чтобы доустановить пропущенные программы.

---

## Решение частых проблем

### 1. Утилита Winget не найдена на новом компьютере
**Симптом**: Скрипт восстановления выдает ошибку о том, что команда \`winget\` не найдена.
- **Решение**: Утилита Winget предустановлена в Windows 11 и последних версиях Windows 10. Если она отсутствует:
  1. Откройте Microsoft Store и найдите **"Установщик приложения"** (App Installer).
  2. Нажмите **"Обновить"** или **"Установить"**.
  3. В качестве альтернативы скачайте последний пакет \`.msixbundle\` из официального [репозитория на GitHub](https://github.com/microsoft/winget-cli/releases) and run it.

### 2. Приложения пропускаются при оффлайн-скачивании
**Симптом**: В логе PAS появляются предупреждения о пропуске скачивания программ, и некоторых установщиков нет в оффлайн-папке.
- **Объяснение**: Это штатное поведение, обусловленное лицензионными ограничениями авторов программ. Их дистрибутивы нельзя скачать заранее через Winget. Такие программы автоматически переносятся в файл онлайн-резерва \`RestoreOnlineFallback.bat\`.

### 3. Ошибки прав доступа
**Симптом**: Скрипты завершаются с ошибками, или установщики завершают работу аварийно.
- **Решение**: Всегда запускайте скрипты **от имени администратора**. Большинство настольных программ требуют привилегий администратора для записи файлов в \`C:\\Program Files\` и регистрации системных служб.

### 4. Логирование и диагностика
Если приложение закрылось с ошибкой или экспорт прошел неудачно, вы можете изучить логи:
- **Путь к файлу лога**: \`%LocalAppData%\\PAS\\PAS.log\` (скопируйте этот путь и вставьте его в адресную строку Проводника).
- **Свойства лога**:
  - Автоматически ротируется (очищается старое) при превышении размера **5 МБ**.
  - Содержит полные данные об исключениях, а также вывод консоли Winget CLI для точной диагностики.
`
  },
  "ru-privatezilla": {
    title: "Ru-Privatezilla",
    subtitle: "Russian localization for Privatezilla, a popular Windows 10 privacy and security setup tool.",
    category: "Translation",
    lang: "C#",
    platform: "Windows 10",
    stars: "0",
    license: "MIT",
    github: "https://github.com/Almanex/Ru-translation-privatezilla",
    image: "images/projects/ru-privatezilla.jpg",
    readme: `<h1 align="center">
  <br>
  <a href="http://www.builtbybel.com"><img src="https://github.com/builtbybel/privatezilla/blob/master/src/Privatezilla/icon.ico" alt="Privatezilla" width="200"></a>
  <br>
  Privatezilla
  <br>
</h1>
<h4 align="center">Privatezilla is the simplest way to perform a quick privacy and security check of your Windows 10 copy.
</h4>

<p align="center">
<a href="https://github.com/builtbybel/privatezilla/releases/latest" target="_blank">
<img alt="Latest GitHub release" src="https://img.shields.io/github/release/builtbybel/privatezilla.svg?style=flat-square" />
</a>
	
<a href="https://github.com/builtbybel/privatezilla/releases" target="_blank">
<img alt="Downloads on GitHub" src="https://img.shields.io/github/downloads/builtbybel/privatezilla/total.svg?style=flat-square" />
</a>

<a href="https://github.com/builtbybel/privatezilla/commits/master">
<img src="https://img.shields.io/github/last-commit/builtbybel/privatezilla.svg?style=flat-square&logo=github&logoColor=white"
alt="GitHub last commit">
<a href="https://github.com/builtbybel/burnbytes/issues">
<img src="https://img.shields.io/github/issues-raw/builtbybel/privatezilla.svg?style=flat-square&logo=github&logoColor=white"
alt="GitHub issues">   
  
</p>

<p align="center">
  <a href="#about">About</a> •
  <a href="#download">Download</a> •
  <a href="#community-package">Community package</a> •
  <a href="#credits">Credits</a> •
  <a href="#support">Support</a>
</p>

![intro](https://github.com/builtbybel/privatezilla/blob/master/assets/intro.gif)

## About

Privatezilla integrates the most critical Windows 10 privacy settings and allows you to quickly perform a privacy check against these settings. Active settings are marked with the status "Configured" and indicates that your privacy is protected. The inactive ones are declared as "Not configured". All available settings (currently 60) can be enabled as well as disabled.

### System Requirements

- Windows 10 (supports 1809 - 2004)
- .NET Framework 4.5

## Download

- (GitHub) [Download](https://github.com/builtbybel/privatezilla/releases)
- (Mirror on my site) [Download](https://www.builtbybel.com/privatezilla)

## Community package
### For advanced users only!

The community package for Privatezilla adds support for several advanced scripting features based upon PowerShell, e.g.
- Removal of specific pre-installed apps
- Uninstall of OneDrive 
- Unping Startmenu tiles 
- Disable telemetry of third-party apps (E.g. CCleaner, Firefox, Dropbox, Microsoft Office)
- Removal of Windows Defender (NOT recommended! I can highly recommend using Windows Defender on consumer versions of Windows 10)
- Blocking telemetry via firewall and host files. Rules are provided by [crazy-max/WindowsSpyBlocker](https://github.com/crazy-max/WindowsSpyBlocker)
- Support for all-in-one PowerShell debloating script [Windows10Debloater.ps1](https://github.com/Sycnex/Windows10Debloater) 
- New automation templates					  

All objects (templates and scripts) included can be viewed [here](https://github.com/builtbybel/privatezilla/tree/master/scripts)

### How-to Install
* **[Download](https://github.com/builtbybel/privatezilla/blob/master/scripts/packages.zip?raw=true)** the latest \`packages.zip\` file.
* **Extract the package** to Privatezilla installation directory
* **Restart Privatezilla**

### Intro of community package after Installing

![community-package](https://github.com/builtbybel/privatezilla/blob/master/assets/community-pkg.gif)

## Credits

Since release 0.30 this project is partly based upon 

- https://github.com/t-richards/chemo

More infos [here](https://www.builtbybel.com/blog/12-company-announcements/39-spydish-becomes-privatezilla-open-source)

This software uses the following packages:

- [Icon by bokehlicia](https://iconarchive.com/show/captiva-icons-by-bokehlicia/preferences-system-icon.html)

## Support
If you like the tool please consider supporting me via PayPal.

You can [buy me a coffee or donut, some banana, a shirt, Taycan or Tesla, the stars or whatever you want here](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=donate@builtbybel.com&lc=US&item_name=%20Builtbybel&no_note=0&cn=&currency_code=USD&bn=PP-DonationsBF:btn_donateCC_LG.gif:NonHosted)

---

> [builtbybel](https://www.builtbybel.com) &nbsp;&middot;&nbsp;
> GitHub [@builtbybel](https://github.com/builtbybel) &nbsp;&middot;&nbsp;
> Twitter [@builtbybel](https://twitter.com/builtbybel)
`
  },
  "mushroom-spot": {
    title: "MushroomSpot",
    subtitle: "Android application for mushroom foragers to catalog and discover spotting sites.",
    category: "Android App",
    lang: "Kotlin",
    platform: "Android",
    stars: "0",
    license: "MIT",
    github: "https://github.com/Almanex/MushroomSpot",
    image: "images/projects/mushroom-spot.jpg",
    readme: `[ English ](README.md) • [ Русский ](README_RU.md) • [ Deutsch ](README_DE.md)

# MushroomSpot

**Android application for mushroom foragers to catalog and discover spotting sites**

An Android application for planning, tracking, and documenting mushroom foraging trips. The app provides high-precision location tracking (3-8 meters), intelligent GPS filtering, and a modern user interface.

## Key Features

- Trip management: Create, list, and view trip details with auto GPS tracking
- Mushroom logging: Add findings with photos, notes, and high-precision GPS coordinates
- GPS signal indicators: Blue (Excellent), Orange (Good/Acceptable), Red (Poor - saving blocked)
- Export & Import: Full data structure support in JSON and CSV formats
- Google Maps Integration: View routes and navigation waypoints (up to 23 waypoints)

## Technology Stack

- Language: Kotlin (1.9.0)
- UI Framework: Jetpack Compose (1.5.0)
- Database: Room Database (local storage)
- Concurrency: Kotlin Coroutines & Flow
- Dependency Injection: Hilt

## System Requirements

- OS: Android 7.0 (API level 24) or higher
- Hardware: GPS module and Camera

## Building from Source

\`\`\`bash
# Clone the repository
git clone https://github.com/Almanex/MushroomSpot.git
cd MushroomSpot

# Build debug APK
./gradlew assembleDebug

# Install on device
./gradlew installDebug
\`\`\`

## License

This project is licensed under the MIT License.`,
    readme_ru: `[ English ](README.md) • [ Русский ](README_RU.md) • [ Deutsch ](README_DE.md)

# MushroomSpot

**Android-приложение для грибников для каталогизации и поиска мест находок**

Мобильное приложение для планирования, отслеживания и документирования поездок за грибами. Обеспечивает высокоточное определение местоположения (3-8 метров), интеллектуальную фильтрацию GPS-данных и современный интерфейс.

## Основные функции

- Управление поездками: Создание, просмотр списка и деталей поездок с автоматическим GPS-трекингом
- Учет грибов: Добавление находок с фото, заметками и высокоточными координатами
- Индикация точности GPS: Синий (Отличная), Оранжевый (Хорошая), Красный (Низкая - сохранение заблокировано)
- Экспорт и импорт: Поддержка структуры данных в форматах JSON и CSV
- Интеграция с картами: Маршруты в Google Maps с промежуточными точками навигации

## Технологический стек

- Язык: Kotlin (1.9.0)
- UI-платформа: Jetpack Compose (1.5.0)
- База данных: Room Database (локальное хранение)
- Асинхронность: Kotlin Coroutines & Flow
- Внедрение зависимостей: Hilt

## Системные требования

- ОС: Android 7.0 (API 24) или выше
- Устройство: с модулем GPS и камерой

## Сборка проекта

\`\`\`bash
# Клонирование репозитория
git clone https://github.com/Almanex/MushroomSpot.git
cd MushroomSpot

# Сборка debug APK
./gradlew assembleDebug

# Установка на подключенное устройство
./gradlew installDebug
\`\`\`

## Лицензия

Этот проект распространяется под лицензией MIT.`,
    readme_de: `[ English ](README.md) • [ Русский ](README_RU.md) • [ Deutsch ](README_DE.md)

# MushroomSpot

**Android-Anwendung für Pilzsammler zur Katalogisierung und Entdeckung von Fundorten**

Eine mobile Android-Anwendung zur Planung, Verfolgung und Dokumentation von Pilzsammelrunden. Die App bietet hochpräzise Standortbestimmung (3-8 Meter), intelligente GPS-Filterung und eine moderne Benutzeroberfläche.

## Hauptfunktionen

- Runden-Management: Erstellen, Auflisten und Anzeigen von Runden-Details mit automatischem GPS-Tracking
- Pilz-Protokollierung: Fundorte mit Fotos, Notizen und hochpräzisen GPS-Koordinaten markieren
- GPS-Signalindikatoren: Blau (Ausgezeichnet), Orange (Gut/Akzeptabel), Rot (Schlecht - Speichern blockiert)
- Export & Import: Volle Unterstützung der Datenstruktur in den Formaten JSON und CSV
- Google Maps Integration: Routenverlauf und Navigations-Wegpunkte anzeigen

## Technologie-Stack

- Sprache: Kotlin (1.9.0)
- UI-Framework: Jetpack Compose (1.5.0)
- Datenbank: Room Database (lokaler Speicher)
- Asynchronität: Kotlin Coroutines & Flow
- Dependency Injection: Hilt

## Systemanforderungen

- Betriebssystem: Android 7.0 (API-Level 24) oder höher
- Hardware: GPS-Modul und Kamera

## Build aus Quellcode

\`\`\`bash
# Repository klonen
git clone https://github.com/Almanex/MushroomSpot.git
cd MushroomSpot

# Debug-APK erstellen
./gradlew assembleDebug

# Auf Gerät installieren
./gradlew installDebug
\`\`\`

## Lizenz

Dieses Projekt lizenziert unter der MIT-Lizenz.`
  },
  "gemma-local-desktop": {
    title: "Gemma Local Desktop",
    subtitle: "A local Windows desktop helper chat interface for Google's Gemma LLM.",
    category: "AI Tool",
    lang: "C#",
    platform: "Windows 10/11",
    stars: "0",
    license: "MIT",
    github: "https://github.com/Almanex/Gemma-Local-Desktop-",
    image: "images/projects/gemma-local-desktop.jpg",
    readme: `[ English ](README.md) • [ Русский ](docs/README_RU.md) • [ Deutsch ](docs/README_DE.md)

# Gemma Local Desktop

**Native Windows AI assistant and coding workspace powered by Google Gemma via llama.cpp.**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Platform: Windows](https://img.shields.io/badge/Platform-Windows-0078d7.svg)](#requirements)
[![Language: C#](https://img.shields.io/badge/Language-C%23-239120.svg)](https://learn.microsoft.com/dotnet/csharp/)
[![Framework: .NET 10.0](https://img.shields.io/badge/Framework-.NET%2010.0-512bd4.svg)](https://dotnet.microsoft.com/)
[![Share](https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Fgithub.com%2FAlmanex%2FGemma-Local-Desktop-)](https://twitter.com/intent/tweet?text=Check%20out%20Gemma%20Local%20Desktop%20-%20native%20Windows%20AI%20assistant%20and%20coding%20workspace&url=https%3A%2F%2Fgithub.com%2FAlmanex%2FGemma-Local-Desktop-)

---

<details open>
  <summary style="cursor: pointer; padding: 6px; font-family: sans-serif;"><b>[ Show ] 1. Initial Setup Screen</b></summary>
  <br/>
  <p align="center"><img src="GemmaChatCsharp/Assets/gemma-chat-win_1.png" width="95%" /></p>
</details>
<details>
  <summary style="cursor: pointer; padding: 6px; font-family: sans-serif;"><b>[ Show ] 2. Chat and Build Workspace</b></summary>
  <br/>
  <p align="center"><img src="GemmaChatCsharp/Assets/gemma-chat-win_2.png" width="95%" /></p>
</details>
<details>
  <summary style="cursor: pointer; padding: 6px; font-family: sans-serif;"><b>[ Show ] 3. Code Editor and Live Preview</b></summary>
  <br/>
  <p align="center"><img src="GemmaChatCsharp/Assets/gemma-chat-win_3.png" width="95%" /></p>
</details>

---

## Overview

Gemma Local Desktop is an experimental, fully functional project designed to push the boundaries of local AI development on Windows. By utilizing Google's Gemma models locally through \`llama.cpp\` integration, it offers a secure, offline environment for AI-assisted coding and conversation. There are no API keys, no subscription fees, and no cloud-dependency.

---

## Key Features

- **Chat Mode**: A conversation workspace optimized for pure dialogue, text summarization, and complex reasoning.
- **Build Mode**: A split-screen environment that generates code, HTML/JS web apps, and artifacts side-by-side with a 720px live interactive web preview.
- **One-Click Templates**: Instant high-fidelity template starters to quickly generate functional mini-games, weather dashboards, or interactive UI components.
- **Full-Screen Preview**: A quick-launch option to open generated web apps directly in the system's default browser.
- **Workspace Persistence**: Automatic file storage on disk per chat project, enabling the model to read, edit, and reference project files iteratively.
- **Modern User Experience**: A clean, Windows-native UI implementation with glassmorphism, resizable canvas, and automatic dark mode support.
- **Hardware Acceleration**: Automatic NVIDIA GPU detection and intelligent model offloading utilizing CUDA, with fallback to CPU execution.
- **Zero Configuration Setup**: Automatic handling of environment setup, including downloading required \`llama.cpp\` binaries and the recommended Gemma model on first launch.

---

## Tech Stack

| Layer / Component | Technology | Details / Purpose |
| --- | --- | --- |
| Application Shell | WPF (.NET 10.0) | Desktop application framework with CommunityToolkit.Mvvm |
| UI styling | WPF-UI / Custom styles | Modern native Fluent Design look and feel |
| Web View | Microsoft.Web.WebView2 | Renders the HTML/CSS/JS preview canvas |
| Markdown Parser | Markdig.Wpf (v0.5.0.1) | Renders rich text messages and chats |
| Model Runtime | llama.cpp (Local server) | Runs the LLM engine offline with GPU/CPU support |
| State Persistence | Local JSON + Directory files | Saves workspaces and chats locally |

---

## Requirements

- **Operating System**: Windows 10 or Windows 11 (64-bit)
- **Processor**: x64 CPU (SSE3 support recommended)
- **Graphics Card**: NVIDIA GPU (optional, for CUDA acceleration)
- **Memory**: 4GB+ RAM (minimum recommended for Gemma 2B)

---

## Getting Started

### Prerequisites

Ensure you have the following installed on your machine:
- [.NET 10.0 SDK](https://dotnet.microsoft.com/download/dotnet/10.0)
- [Git](https://git-scm.com/)

### Installation & Running

1. Clone this repository to your local system:
   \`\`\`powershell
   git clone https://github.com/Almanex/Gemma-Local-Desktop-.git
   cd Gemma-Local-Desktop-
   \`\`\`

2. Run the application using the .NET CLI:
   \`\`\`powershell
   cd GemmaChatCsharp
   dotnet run
   \`\`\`

On first startup, the application performs the following automated steps:
- Checks system specs (NVIDIA CUDA support vs CPU fallback).
- Downloads the compatible \`llama.cpp\` runtime server binaries.
- Downloads the recommended Gemma model (~1.6GB).
- Creates the local workspace folders.

---

## Running the Tests

Currently, this repository does not include automated unit tests. When unit tests are implemented, they can be executed from the test project directory using:
\`\`\`powershell
dotnet test
\`\`\`

---

## Deployment

### Compilation & Build

To compile the application in Release mode:
\`\`\`powershell
dotnet build -c Release
\`\`\`

### Self-Contained Deployment

To publish the application as a single, portable executable file (\`.exe\`) containing all native dependencies:
\`\`\`powershell
dotnet publish -c Release -r win-x64 --self-contained true -p:PublishSingleFile=true -p:IncludeNativeLibrariesForSelfExtract=true
\`\`\`
The output file will be saved in \`bin/Release/net10.0-windows/win-x64/publish/\`.

> [!WARNING]
> **Windows Defender SmartScreen Warning**
>
> Because the compiled executable is self-signed/unsigned (which is standard for free, open-source projects), Windows Defender SmartScreen may display a warning on the first launch of the compiled binary.
>
> To run the application:
> 1. Click **More info**.
> 2. Click **Run anyway**.

---

## Shortcuts

- \`Ctrl + N\`: New chat
- \`Ctrl + B\`: Toggle between Chat and Build modes
- \`Ctrl + \\\`: Toggle Canvas split-pane visibility (Preview / Code)

---

## Contributing

We welcome contributions from the community. If you would like to report bugs, suggest features, or submit pull requests:
1. Please read our [CONTRIBUTING.md](CONTRIBUTING.md).
2. Open an issue or submit a pull request on GitHub.

---

## Versioning

This project uses [SemVer](https://semver.org/) for versioning. For the versions available, see the tags on this repository.

---

## Authors & Contributors

- **Almanex** - *Initial Work* - [Almanex GitHub](https://github.com/Almanex)

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Acknowledgments

- The [llama.cpp](https://github.com/ggml-org/llama.cpp) project team for the model inference engine.
- Markdig contributors for the Markdown parser libraries.`,
    readme_ru: `[ English ](../README.md) • [ Русский ](README_RU.md) • [ Deutsch ](README_DE.md)

# Gemma Local Desktop

**Локальный AI-ассистент и среда разработки для Windows на базе Google Gemma и llama.cpp.**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](../LICENSE)
[![Platform: Windows](https://img.shields.io/badge/Platform-Windows-0078d7.svg)](#требования)
[![Language: C#](https://img.shields.io/badge/Language-C%23-239120.svg)](https://learn.microsoft.com/dotnet/csharp/)
[![Framework: .NET 10.0](https://img.shields.io/badge/Framework-.NET%2010.0-512bd4.svg)](https://dotnet.microsoft.com/)
[![Share](https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Fgithub.com%2FAlmanex%2FGemma-Local-Desktop-)](https://twitter.com/intent/tweet?text=Check%20out%20Gemma%20Local%20Desktop%20-%20native%20Windows%20AI%20assistant%20and%20coding%20workspace&url=https%3A%2F%2Fgithub.com%2FAlmanex%2FGemma-Local-Desktop-)

---

<details open>
  <summary style="cursor: pointer; padding: 6px; font-family: sans-serif;"><b>[ Показать ] 1. Экран первоначальной настройки</b></summary>
  <br/>
  <p align="center"><img src="../GemmaChatCsharp/Assets/gemma-chat-win_1.png" width="95%" /></p>
</details>
<details>
  <summary style="cursor: pointer; padding: 6px; font-family: sans-serif;"><b>[ Показать ] 2. Рабочая область Чата и Сборки</b></summary>
  <br/>
  <p align="center"><img src="../GemmaChatCsharp/Assets/gemma-chat-win_2.png" width="95%" /></p>
</details>
<details>
  <summary style="cursor: pointer; padding: 6px; font-family: sans-serif;"><b>[ Показать ] 3. Редактор кода и предпросмотр</b></summary>
  <br/>
  <p align="center"><img src="../GemmaChatCsharp/Assets/gemma-chat-win_3.png" width="95%" /></p>
</details>

---

## Обзор

Gemma Local Desktop — это экспериментальный, полностью функциональный проект, созданный для расширения возможностей локального использования искусственного интеллекта на Windows. Благодаря локальной интеграции моделей Google Gemma через \`llama.cpp\` приложение предоставляет безопасную автономную среду для генерации кода и общения. Для его работы не требуются API-ключи, подписки или подключение к интернету.

---

## Ключевые возможности

- **Режим чата (Chat Mode)**: Рабочая область, оптимизированная для ведения диалога, суммаризации текстов и логических рассуждений.
- **Режим сборки (Build Mode)**: Разделенный экран, позволяющий генерировать код HTML/JS-приложений и видеть живой интерактивный предпросмотр шириной 720px в реальном времени.
- **Шаблоны в один клик**: Быстрый запуск качественных шаблонов для генерации простых игр (например, тетриса), интерактивных панелей погоды или элементов интерфейса.
- **Полноэкранный просмотр**: Возможность быстро открыть созданное веб-приложение в системном браузере по умолчанию.
- **Сохранение проектов**: Локальное сохранение файлов для каждого чат-проекта, что позволяет модели итеративно читать, редактировать и дорабатывать файлы.
- **Современный интерфейс**: Чистый нативный дизайн Windows с поддержкой эффектов размытия (glassmorphism), адаптивным холстом и автоматической темной темой.
- **Аппаратное ускорение**: Автоматическое обнаружение видеокарт NVIDIA и перенос вычислений на GPU с использованием CUDA, с автоматическим переходом на CPU при их отсутствии.
- **Установка без настройки**: Автоматическая подготовка окружения, включая скачивание сервера \`llama.cpp\` и рекомендуемой модели Gemma при первом запуске.

---

## Технологический стек

| Слой / Компонент | Технология | Назначение / Описание |
| --- | --- | --- |
| Основа приложения | WPF (.NET 10.0) | Настольное приложение с архитектурой MVVM на базе CommunityToolkit.Mvvm |
| Стилизация UI | WPF-UI / Кастомные стили | Современный нативный дизайн в стиле Fluent Design |
| Просмотр веб-страниц | Microsoft.Web.WebView2 | Отображение интерактивного окна предпросмотра HTML/CSS/JS |
| Парсер Markdown | Markdig.Wpf (v0.5.0.1) | Форматирование сообщений и чатов |
| Движок моделей | llama.cpp (Локальный сервер) | Автономный запуск LLM с поддержкой GPU и CPU |
| Сохранение состояния | Локальный JSON + Файловая система | Хранение переписки и файлов проектов |

---

## Требования

- **Операционная система**: Windows 10 или Windows 11 (64-бит)
- **Процессор**: x64 CPU (рекомендуется поддержка инструкций SSE3)
- **Видеокарта**: NVIDIA GPU (опционально, для ускорения через CUDA)
- **Оперативная память**: 4 ГБ+ (минимально для работы модели Gemma 2B)

---

## Начало работы

### Предварительные требования

Убедитесь, что на вашем компьютере установлены следующие компоненты:
- [.NET 10.0 SDK](https://dotnet.microsoft.com/download/dotnet/10.0)
- [Git](https://git-scm.com/)

### Установка и запуск

1. Клонируйте репозиторий на локальный компьютер:
   \`\`\`powershell
   git clone https://github.com/Almanex/Gemma-Local-Desktop-.git
   cd Gemma-Local-Desktop-
   \`\`\`

2. Запустите приложение с помощью .NET CLI:
   \`\`\`powershell
   cd GemmaChatCsharp
   dotnet run
   \`\`\`

При первом запуске приложение выполнит следующие шаги автоматически:
- Проверит характеристики системы (наличие NVIDIA GPU для CUDA или CPU).
- Скачает подходящую сборку сервера \`llama.cpp\`.
- Скачает рекомендуемую модель Gemma (~1.6 ГБ).
- Создаст структуру локальных папок проекта.

---

## Запуск тестов

На данный момент проект не содержит автоматических юнит-тестов. После их реализации, запуск тестов из тестовой директории можно будет выполнить командой:
\`\`\`powershell
dotnet test
\`\`\`

---

## Развертывание

### Компиляция проекта

Для сборки проекта в режиме Release выполните команду:
\`\`\`powershell
dotnet build -c Release
\`\`\`

### Публикация единого файла (Portable)

Чтобы собрать приложение в один переносимый \`.exe\` файл со всеми зависимостями:
\`\`\`powershell
dotnet publish -c Release -r win-x64 --self-contained true -p:PublishSingleFile=true -p:IncludeNativeLibrariesForSelfExtract=true
\`\`\`
Результат сборки будет находиться по пути: \`bin/Release/net10.0-windows/win-x64/publish/\`.

> [!WARNING]
> **Предупреждение Windows Defender SmartScreen**
>
> Поскольку скомпилированный исполняемый файл не подписан коммерческим сертификатом (что является стандартной практикой для бесплатного ПО с открытым исходным кодом), при первом запуске Windows Defender SmartScreen может выдать предупреждение безопасности.
>
> Для запуска приложения:
> 1. Нажмите **Подробнее** (More info).
> 2. Нажмите **Выполнить в любом случае** (Run anyway).

---

## Горячие клавиши

- \`Ctrl + N\`: Создать новый чат
- \`Ctrl + B\`: Переключение между режимом Чата и Сборки
- \`Ctrl + \\\`: Скрыть/показать панель предпросмотра (Preview / Code)

---

## Участие в разработке

Мы будем рады вашему вкладу в проект. Если вы хотите сообщить об ошибке, предложить улучшения или отправить Pull Request:
1. Пожалуйста, ознакомьтесь с [CONTRIBUTING.md](../CONTRIBUTING.md).
2. Создайте Issue или отправьте Pull Request в репозиторий проекта.

---

## Версионирование

В проекте используется семантическое версионирование [SemVer](https://semver.org/). Список доступных версий можно найти в разделе тегов репозитория.

---

## Авторы и участники

- **Almanex** - *Начальная разработка* - [Almanex GitHub](https://github.com/Almanex)

---

## Лицензия

Этот проект распространяется под лицензией MIT — подробности можно найти в файле [LICENSE](../LICENSE).

---

## Благодарности

- Команде проекта [llama.cpp](https://github.com/ggml-org/llama.cpp) за движок инференса моделей.
- Создателям библиотеки Markdig за парсер Markdown.
`,
    readme_de: `[ English ](../README.md) • [ Русский ](README_RU.md) • [ Deutsch ](README_DE.md)

# Gemma Local Desktop

**Lokaler Windows-KI-Assistent und Entwicklungsumgebung basierend auf Google Gemma via llama.cpp.**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](../LICENSE)
[![Platform: Windows](https://img.shields.io/badge/Platform-Windows-0078d7.svg)](#systemanforderungen)
[![Language: C#](https://img.shields.io/badge/Language-C%23-239120.svg)](https://learn.microsoft.com/dotnet/csharp/)
[![Framework: .NET 10.0](https://img.shields.io/badge/Framework-.NET%2010.0-512bd4.svg)](https://dotnet.microsoft.com/)
[![Share](https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Fgithub.com%2FAlmanex%2FGemma-Local-Desktop-)](https://twitter.com/intent/tweet?text=Check%20out%20Gemma%20Local%20Desktop%20-%20native%20Windows%20AI%20assistant%20and%20coding%20workspace&url=https%3A%2F%2Fgithub.com%2FAlmanex%2FGemma-Local-Desktop-)

---

<details open>
  <summary style="cursor: pointer; padding: 6px; font-family: sans-serif;"><b>[ Anzeigen ] 1. Erster Einrichtungsbildschirm</b></summary>
  <br/>
  <p align="center"><img src="../GemmaChatCsharp/Assets/gemma-chat-win_1.png" width="95%" /></p>
</details>
<details>
  <summary style="cursor: pointer; padding: 6px; font-family: sans-serif;"><b>[ Anzeigen ] 2. Chat- und Build-Arbeitsbereich</b></summary>
  <br/>
  <p align="center"><img src="../GemmaChatCsharp/Assets/gemma-chat-win_2.png" width="95%" /></p>
</details>
<details>
  <summary style="cursor: pointer; padding: 6px; font-family: sans-serif;"><b>[ Anzeigen ] 3. Code-Editor und Live-Vorschau</b></summary>
  <br/>
  <p align="center"><img src="../GemmaChatCsharp/Assets/gemma-chat-win_3.png" width="95%" /></p>
</details>

---

## Übersicht

Gemma Local Desktop ist ein experimentelles, voll funktionsfähiges Projekt, das entwickelt wurde, um die Grenzen der lokalen KI-Nutzung unter Windows zu erweitern. Durch die lokale Ausführung von Google Gemma-Modellen über die Integration von \`llama.cpp\` bietet die Anwendung eine sichere, vollständig Offline-fähige Umgebung für KI-gestützte Programmierung und Konversationen. Es werden keine API-Schlüssel, keine kostenpflichtigen Abonnements und keine Internetverbindungen benötigt.

---

## Hauptfunktionen

- **Chat-Modus (Chat Mode)**: Ein für reinen Dialog, Textzusammenfassungen und logisches Denken optimierter Arbeitsbereich.
- **Build-Modus (Build Mode)**: Eine geteilte Bildschirmumgebung, mit der HTML/JS-Web-Apps und Code-Artefakte generiert und direkt in einer interaktiven 720px Live-Vorschau angezeigt werden können.
- **Ein-Klick-Vorlagen**: Schneller Start von Vorlagen zur Generierung einfacher Spiele (wie Tetris), interaktiver Wetter-Dashboards oder Benutzeroberflächen-Elementen.
- **Vollbild-Vorschau**: Eine Funktion, um die generierte Web-App direkt im Standardbrowser des Systems zu öffnen.
- **Projekt-Speicherung**: Lokale Speicherung der Dateien für jedes Chat-Projekt, sodass das Modell Projektdateien iterativ lesen, bearbeiten und verfeinern kann.
- **Moderne Benutzeroberfläche**: Ein klares, natives Windows-UI-Design mit Glassmorphism-Effekten, anpassbarem Vorschaufenster und automatischer Unterstützung für den Dunkelmodus.
- **Hardwarebeschleunigung**: Automatische Erkennung von NVIDIA-Grafikkarten und Auslagerung von Berechnungen auf die GPU via CUDA mit automatischem Fallback auf CPU.
- **Einrichtung ohne Konfiguration**: Automatische Vorbereitung der Laufzeitumgebung, einschließlich des Downloads der \`llama.cpp\`-Serverdateien und des empfohlenen Gemma-Modells beim ersten Start.

---

## Technologie-Stack

| Ebene / Komponente | Technologie | Zweck / Beschreibung |
| --- | --- | --- |
| Anwendungs-Framework | WPF (.NET 10.0) | Desktop-Anwendung mit MVVM-Architektur über das CommunityToolkit.Mvvm |
| UI-Styling | WPF-UI / Eigene Stile | Modernes, natives Fluent Design |
| Web-Vorschau | Microsoft.Web.WebView2 | Anzeige des interaktiven Vorschaufensters für HTML/CSS/JS |
| Markdown-Parser | Markdig.Wpf (v0.5.0.1) | Formatierung von Chat-Nachrichten |
| Modell-Laufzeit | llama.cpp (Lokaler Server) | Lokaler Betrieb des LLM-Engines mit GPU- und CPU-Unterstützung |
| Zustandsspeicherung | Lokales JSON + Dateisystem | Speicherung von Chatverläufen und Projektdateien |

---

## Systemanforderungen

- **Betriebssystem**: Windows 10 oder Windows 11 (64-Bit)
- **Prozessor**: x64 CPU (Unterstützung für SSE3 empfohlen)
- **Grafikkarte**: NVIDIA GPU (optional, für CUDA-Beschleunigung)
- **Arbeitsspeicher**: 4 GB+ RAM (Minimum für das Gemma 2B Modell)

---

## Erste Schritte

### Voraussetzungen

Stellen Sie sicher, dass die folgenden Komponenten auf Ihrem System installiert sind:
- [.NET 10.0 SDK](https://dotnet.microsoft.com/download/dotnet/10.0)
- [Git](https://git-scm.com/)

### Installation & Ausführen

1. Klonen Sie das Repository auf Ihren lokalen Computer:
   \`\`\`powershell
   git clone https://github.com/Almanex/Gemma-Local-Desktop-.git
   cd Gemma-Local-Desktop-
   \`\`\`

2. Starten Sie die Anwendung über die .NET-CLI:
   \`\`\`powershell
   cd GemmaChatCsharp
   dotnet run
   \`\`\`

Beim ersten Start führt die Anwendung folgende Schritte automatisch aus:
- Überprüfung der Systemleistung (NVIDIA CUDA GPU vs CPU-Fallback).
- Download der passenden \`llama.cpp\`-Laufzeitdateien.
- Download des empfohlenen Gemma-Modells (~1.6 GB).
- Erstellung lokaler Projektordner.

---

## Tests ausführen

Derzeit enthält dieses Repository keine automatisierten Unit-Tests. Wenn Unit-Tests implementiert sind, können sie aus dem Testprojektverzeichnis mit folgendem Befehl ausgeführt werden:
\`\`\`powershell
dotnet test
\`\`\`

---

## Bereitstellung

### Kompilierung

So kompilieren Sie die Anwendung im Release-Modus:
\`\`\`powershell
dotnet build -c Release
\`\`\`

### Eigenständige Veröffentlichung (Portable)

So veröffentlichen Sie die Anwendung als eine einzige, tragbare \`.exe\`-Datei, die alle nativen Abhängigkeiten enthält:
\`\`\`powershell
dotnet publish -c Release -r win-x64 --self-contained true -p:PublishSingleFile=true -p:IncludeNativeLibrariesForSelfExtract=true
\`\`\`
Die Ausgabedatei wird unter \`bin/Release/net10.0-windows/win-x64/publish/\` gespeichert.

> [!WARNING]
> **Windows Defender SmartScreen Warnung**
>
> Da die kompilierte ausführbare Datei nicht kommerziell signiert ist (was bei kostenlosen Open-Source-Projekten üblich ist), zeigt Windows Defender SmartScreen möglicherweise beim ersten Start des Kompilats eine Warnung an.
>
> So führen Sie das Programm trotzdem aus:
> 1. Klicken Sie auf **Weitere Informationen** (More info).
> 2. Klicken Sie auf **Trotzdem ausführen** (Run anyway).

---

## Tastaturkürzel

- \`Ctrl + N\`: Neuen Chat erstellen
- \`Ctrl + B\`: Wechseln zwischen Chat- und Build-Modus
- \`Ctrl + \\\`: Vorschau- / Code-Bereich ein- oder ausblenden

---

## Mitwirken

Beiträge aus der Community sind herzlich willkommen. Wenn Sie Fehler melden, Funktionen vorschlagen oder Pull Requests einreichen möchten:
1. Lesen Sie bitte unsere [CONTRIBUTING.md](../CONTRIBUTING.md).
2. Eröffnen Sie ein Issue oder erstellen Sie einen Pull Request auf GitHub.

---

## Versionierung

Dieses Projekt verwendet [SemVer](https://semver.org/) zur Versionierung. Verfügbare Versionen finden Sie in den Tags dieses Repositories.

---

## Autoren & Mitwirkende

- **Almanex** - *Ursprüngliche Entwicklung* - [Almanex GitHub](https://github.com/Almanex)

---

## Lizenz

Dieses Projekt lizenziert unter der MIT-Lizenz – Einzelheiten finden Sie in der Datei [LICENSE](../LICENSE).

---

## Danksagungen

- Dem Team hinter [llama.cpp](https://github.com/ggml-org/llama.cpp) für die Inferenz-Engine.
- Den Entwicklern von Markdig für die Markdown-Bibliotheken.
`,
    guide: `[ English ](GUIDE.md) • [ Русский ](GUIDE_RU.md) • [ Deutsch ](GUIDE_DE.md)

# Gemma Local Desktop User Guide

Welcome to the User Guide for Gemma Local Desktop. This document provides detailed information on how to configure, run, and optimize your local AI development environment.

---

## 1. Application Layout and Modes

Gemma Local Desktop features a dual-mode interface designed to balance standard conversational AI tasks with interactive application development.

### Chat Mode
- **Purpose**: Optimized for standard text dialogues, code analysis, debugging advice, and general reasoning.
- **UI Details**: A clean, single-column chat feed featuring markdown rendering for readable code snippets and structured text blocks.

### Build Mode
- **Purpose**: Designed to generate and iteratively refine web applications (HTML, CSS, JS) and code artifacts.
- **UI Details**: Splits the interface to show the conversation panel on the left, and the **Build Canvas** on the right.
- **Build Canvas**:
  - Contains a code editor view showing the current generated source files.
  - Features a live, interactive 720px WebView preview panel.
  - Includes a quick button to launch the generated application in your default system browser.

---

## 2. Automated Local Setup

The application is designed to run entirely offline with zero manual configurations. On the first launch, the following automated sequence takes place:

### Hardware Detection
- The app checks for the presence of an NVIDIA graphics card and checks if the system supports CUDA acceleration.
- If CUDA is supported, it configures \`llama.cpp\` to offload model layers to the GPU for faster inference.
- If no compatible GPU is detected, it falls back to CPU execution.

### Runtime and Model Download
- **llama.cpp Server**: The app downloads the appropriate precompiled binaries of \`llama.cpp\` server for your hardware configuration.
- **Recommended Model**: It downloads the Gemma model weights (~1.6GB) in GGUF format from a secure public repository.
- **Sandbox Creation**: A local workspace folder is created to store temporary assets, chats, and code files.

---

## 3. Using One-Click Templates

To demonstrate the capabilities of local code generation, the application includes four preset templates:

1. **Mega Portfolio**
   - *Prompt description*: Generates a single-page developer portfolio with a glassmorphic navigation bar, scroll-reveal animations via IntersectionObserver, and a responsive grid layout.
2. **Weather Dashboard**
   - *Prompt description*: Creates a weather app interface featuring animated SVG weather icons, theme-switching logic (sunny, rainy, snowy) through CSS variables, and layout grids.
3. **Mega Tetris**
   - *Prompt description*: Generates a functional Tetris clone utilizing 2D array matrix math, wall-kick rotation logic, collision detection, and a neon-glowing CSS canvas.
4. **Premium Calculator**
   - *Prompt description*: Builds a scientific calculator layout featuring an expression evaluator state-machine, history of recent operations, and responsive button grid styles.

To launch a template:
1. Start a new chat.
2. Click on one of the four template cards displayed in the empty chat state.
3. The prompt will load automatically into the input box; press Enter to let the model generate the application.

---

## 4. Workspace Persistence and Iterative Development

Every chat session is backed by a persistent directory on your local disk:

- **Local Storage**: Files generated by the assistant (e.g., \`index.html\`, style sheets, scripts) are saved directly in a dedicated subfolder inside the chat's workspace path.
- **Iterative Updates**: When you ask the assistant to modify the generated app (e.g., "change the theme color to blue" or "add a reset button"), the model does not just regenerate the code in the chat. It rewrites or modifies the target file directly in the workspace directory.
- **Preview Auto-Reload**: The live preview panel in Build Mode automatically updates to show the updated version of your code as soon as the file modification is saved.

---

## 5. Keyboard Shortcuts

Use these shortcuts to navigate the application quickly:

- \`Ctrl + N\`: Start a new chat session.
- \`Ctrl + B\`: Toggle split-pane view (switch between Chat Mode and Build Mode).
- \`Ctrl + \\\`: Toggle the Visibility of the right-side Canvas pane (Preview and Code editor).

---

## 6. Optimization and Troubleshooting

### Performance Tweaks
- **RAM Constraints**: If you experience system lag during inference, ensure you have at least 4GB of free RAM before launching the model.
- **GPU Driver**: For optimal CUDA performance, verify that you have the latest NVIDIA drivers installed.
- **llama.cpp Logs**: Troubleshooting logs for the local server subprocess are stored in your Windows temporary directories or app data folders. If the server fails to launch, check for process conflicts on the default local port.
`,
    guide_ru: `[ English ](GUIDE.md) • [ Русский ](GUIDE_RU.md) • [ Deutsch ](GUIDE_DE.md)

# Руководство пользователя Gemma Local Desktop

Добро пожаловать в руководство пользователя Gemma Local Desktop. В этом документе подробно описано, как настроить, запустить и оптимизировать вашу локальную среду разработки искусственного интеллекта.

---

## 1. Интерфейс и режимы работы

Интерфейс приложения поддерживает два режима работы, разработанных для баланса между общением с ИИ и созданием интерактивных приложений.

### Режим чата (Chat Mode)
- **Назначение**: Оптимизирован для обычного ведения диалога, анализа кода, помощи в отладке и общих рассуждений.
- **Интерфейс**: Одноколоночная лента чата с поддержкой форматирования Markdown для удобного чтения фрагментов кода и структурированного текста.

### Режим сборки (Build Mode)
- **Назначение**: Создан для генерации и итеративного улучшения веб-приложений (HTML, CSS, JS) и программных компонентов.
- **Интерфейс**: Экран делится на две панели: слева отображается чат, а справа — **рабочая область сборки (Build Canvas)**.
- **Рабочая область сборки (Build Canvas)**:
  - Включает окно редактора кода с исходными файлами сгенерированного проекта.
  - Содержит живое интерактивное окно предварительного просмотра WebView шириной 720px.
  - Предоставляет кнопку быстрого запуска для открытия созданного приложения в системном браузере по умолчанию.

---

## 2. Автоматическая локальная настройка

Приложение разработано для работы полностью в автономном режиме (offline) и не требует ручной настройки при первом запуске:

### Обнаружение оборудования
- Приложение проверяет наличие видеокарты NVIDIA и поддержку технологии ускорения CUDA.
- Если CUDA поддерживается, оно настраивает \`llama.cpp\` для переноса слоев модели на графический процессор (GPU) для более быстрого выполнения запросов.
- Если совместимый графический процессор не обнаружен, вычисления выполняются на центральном процессоре (CPU).

### Загрузка окружения и модели
- **Сервер llama.cpp**: Приложение скачивает подходящие скомпилированные исполняемые файлы сервера \`llama.cpp\` для вашей конфигурации оборудования.
- **Рекомендуемая модель**: Скачиваются веса модели Gemma (~1.6 ГБ) в формате GGUF из безопасного публичного репозитория.
- **Создание песочницы**: Создается папка локального рабочего пространства для хранения временных файлов, чатов и кода.

---

## 3. Использование шаблонов в один клик

Для демонстрации возможностей генерации кода в приложение встроены четыре демонстрационных шаблона:

1. **Mega Portfolio**
   - *Описание промпта*: Генерирует одностраничное портфолио разработчика с полупрозрачной навигационной панелью (glassmorphism), анимацией появления элементов при прокрутке через IntersectionObserver и адаптивной сеткой.
2. **Weather Dashboard**
   - *Описание промпта*: Создает интерфейс панели погоды с анимированными SVG-иконками, логикой переключения тем оформления (солнечно, дождливо, снежно) через CSS-переменные и сеткой прогноза на 5 дней.
3. **Mega Tetris**
   - *Описание промпта*: Генерирует полностью рабочий клон игры Тетрис с использованием логики матриц в 2D-массиве, правил поворота фигур (wall-kick), проверкой столкновений и светящимся неоновым CSS-интерфейсом.
4. **Premium Calculator**
   - *Описание промпта*: Создает инженерный калькулятор с логикой вычисления выражений на основе конечного автомата, историей последних вычислений и адаптивной сеткой кнопок.

Чтобы запустить шаблон:
1. Создайте новый чат.
2. Кликните по одной из четырех карточек шаблонов, отображаемых на стартовом экране пустого чата.
3. Промпт автоматически загрузится в поле ввода; нажмите Enter для начала генерации.

---

## 4. Сохранение состояния и итеративная разработка

Каждая сессия чата сохраняется в отдельную папку на вашем локальном диске:

- **Локальное хранилище**: Файлы, созданные ассистентом (например, \`index.html\`, стили, скрипты), записываются напрямую в рабочую папку текущего чата.
- **Итеративные обновления**: Когда вы просите ассистента изменить созданное приложение (например, «измени цвет темы на синий» или «добавь кнопку сброса»), модель не просто выводит обновленный код в чат, а точечно переписывает или редактирует соответствующий файл в вашей рабочей папке.
- **Автообновление превью**: Окно живого просмотра в режиме сборки автоматически перезагружается, отображая изменения сразу после сохранения файлов.

---

## 5. Горячие клавиши

Используйте эти сочетания клавиш для быстрой навигации по приложению:

- \`Ctrl + N\`: Начать новый сеанс чата.
- \`Ctrl + B\`: Переключить режим разделенного экрана (между режимом Чат и Сборка).
- \`Ctrl + \\\`: Показать/скрыть правую панель рабочей области (предпросмотр и редактор кода).

---

## 6. Оптимизация и устранение неполадок

### Повышение производительности
- **Ограничения оперативной памяти**: Если во время генерации система начинает работать медленно, убедитесь, что на компьютере свободно не менее 4 ГБ оперативной памяти перед запуском модели.
- **Драйвер видеокарты**: Для достижения максимальной скорости генерации с использованием CUDA обновите драйверы NVIDIA до последней версии.
- **Логи llama.cpp**: Логи работы локального сервера сохраняются во временных системных папках Windows или каталогах данных приложения. Если сервер не запускается, проверьте, не занят ли порт по умолчанию другим процессом.
`,
    guide_de: `[ English ](GUIDE.md) • [ Русский ](GUIDE_RU.md) • [ Deutsch ](GUIDE_DE.md)

# Benutzerhandbuch für Gemma Local Desktop

Willkommen im Benutzerhandbuch für Gemma Local Desktop. Dieses Dokument enthält detaillierte Informationen zur Konfiguration, Ausführung und Optimierung Ihrer lokalen KI-Entwicklungsumgebung.

---

## 1. Benutzeroberfläche und Betriebsmodi

Die Anwendung verfügt über eine duale Benutzeroberfläche, die entwickelt wurde, um standardmäßige dialogbasierte KI-Aufgaben und die interaktive Anwendungsentwicklung auszubalancieren.

### Chat-Modus (Chat Mode)
- **Zweck**: Optimiert für den klassischen Textdialog, Codeanalysen, Debugging-Hilfen und allgemeines logisches Denken.
- **Benutzeroberfläche**: Ein einspaltiger Chat-Verlauf mit Markdown-Formatierung für lesbare Code-Auszüge und strukturierten Text.

### Build-Modus (Build Mode)
- **Zweck**: Entwickelt, um Webanwendungen (HTML, CSS, JS) und Code-Artefakte zu generieren und iterativ zu verbessern.
- **Benutzeroberfläche**: Teilt den Bildschirm, sodass links das Chat-Panel und rechts der **Build-Arbeitsbereich (Build Canvas)** angezeigt wird.
- **Build-Arbeitsbereich (Build Canvas)**:
  - Enthält einen Code-Editor, der die aktuellen generierten Quelldateien anzeigt.
  - Bietet ein interaktives 720px WebView-Live-Vorschaufenster.
  - Enthält eine Schnellschaltfläche, um die generierte Anwendung im Standardbrowser Ihres Systems zu öffnen.

---

## 2. Automatische lokale Einrichtung

Die Anwendung ist so konzipiert, dass sie vollständig offline und ohne manuelle Konfigurationen läuft. Beim ersten Start wird folgende automatische Sequenz ausgeführt:

### Hardware-Erkennung
- Die App prüft das Vorhandensein einer NVIDIA-Grafikkarte und ob das System CUDA-Beschleunigung unterstützt.
- Wenn CUDA unterstützt wird, konfiguriert sie \`llama.cpp\` so, dass Modellschichten auf die GPU ausgelagert werden, um eine schnellere Inferenz zu ermöglichen.
- Wenn keine kompatible GPU erkannt wird, wird die CPU als Fallback verwendet.

### Laufzeitumgebung und Modell-Download
- **llama.cpp Server**: Die App lädt die passenden vorkompilierten Binärdateien des \`llama.cpp\`-Servers für Ihre Hardwarekonfiguration herunter.
- **Empfohlenes Modell**: Die Modellgewichte für Gemma (~1,6 GB) werden im GGUF-Format aus einem sicheren öffentlichen Repository heruntergeladen.
- **Erstellung der Sandbox**: Ein lokaler Arbeitsbereichsordner wird erstellt, um temporäre Assets, Chats und Code-Dateien zu speichern.

---

## 3. Nutzung der Ein-Klick-Vorlagen

Um die Fähigkeiten der lokalen Code-Generierung zu demonstrieren, enthält die Anwendung vier voreingestellte Vorlagen:

1. **Mega Portfolio**
   - *Beschreibung*: Generiert ein einseitiges Entwickler-Portfolio mit einer transparenten Navigationsleiste (Glassmorphism), Einblende-Animationen beim Scrollen über IntersectionObserver und einem responsiven Grid-Layout.
2. **Weather Dashboard**
   - *Beschreibung*: Erstellt eine Wetter-App-Oberfläche mit animierten SVG-Wettersymbolen, Logik zum Wechseln des Design-Themas (sonnig, regnerisch, schneebedeckt) über CSS-Variablen und Vorhersage-Grids.
3. **Mega Tetris**
   - *Beschreibung*: Generiert einen funktionsfähigen Tetris-Klon unter Verwendung von Matrixberechnungen auf Basis von 2D-Arrays, Wall-Kick-Rotationslogik, Kollisionserkennung und einer neonfarbenen CSS-Benutzeroberfläche.
4. **Premium Calculator**
   - *Beschreibung*: Baut einen wissenschaftlichen Rechner mit einer auf einem Zustandsautomaten basierenden Formelauswertung, einem Verlauf der letzten Berechnungen und responsiven Schaltflächenstilen.

So starten Sie eine Vorlage:
1. Starten Sie einen neuen Chat.
2. Klicken Sie auf eine der vier Vorlagenkarten, die im leeren Chat-Status angezeigt werden.
3. Der Prompt wird automatisch in das Eingabefeld geladen; drücken Sie die Eingabetaste, um die Generierung zu starten.

---

## 4. Projekt-Speicherung und iterative Entwicklung

Jede Chat-Sitzung wird in einem persistenten Verzeichnis auf Ihrer lokalen Festplatte gespeichert:

- **Lokaler Speicher**: Vom Assistenten generierte Dateien (z. B. \`index.html\`, Stylesheets, Skripte) werden direkt in einem speziellen Unterordner im Arbeitsbereichspfad des Chats gespeichert.
- **Iterative Updates**: Wenn Sie den Assistenten bitten, die generierte Anwendung zu ändern (z. B. „Ändere die Designfarbe in Blau“ oder „Füge eine Reset-Schaltfläche hinzu“), gibt das Modell den aktualisierten Code nicht nur im Chat aus, sondern überschreibt oder bearbeitet die Zieldatei direkt im Arbeitsbereichsverzeichnis.
- **Automatische Vorschau-Aktualisierung**: Das Live-Vorschaufenster im Build-Modus wird automatisch aktualisiert, sobald eine Dateiänderung im Arbeitsbereich gespeichert wird.

---

## 5. Tastaturkürzel

Verwenden Sie diese Tastenkombinationen, um schnell in der Anwendung zu navigieren:

- \`Ctrl + N\`: Startet eine neue Chat-Sitzung.
- \`Ctrl + B\`: Wechselt die geteilte Bildschirmansicht (Umschalten zwischen Chat- und Build-Modus).
- \`Ctrl + \\\`: Blendet die rechte Canvas-Ansicht ein oder aus (Vorschau und Code-Editor).

---

## 6. Optimierung und Fehlerbehebung

### Leistungstipps
- **RAM-Beschränkungen**: Wenn das System während der Inferenz verzögert reagiert, stellen Sie sicher, dass Sie vor dem Start des Modells mindestens 4 GB freien RAM haben.
- **Grafikkartentreiber**: Installieren Sie für eine optimale CUDA-Leistung die neuesten NVIDIA-Treiber.
- **llama.cpp-Protokolle**: Fehlerbehebungsprotokolle für den lokalen Server-Subprozess werden in Ihren temporären Windows-Verzeichnissen oder App-Datenordnern gespeichert. Wenn der Server nicht startet, prüfen Sie, ob der Standardport von einem anderen Prozess belegt ist.
`
  },
  "lingospaced": {
    title: "LingoSpaced",
    subtitle: "An Android flashcard application utilizing spaced repetition for language learning.",
    category: "Android App",
    lang: "Kotlin",
    platform: "Android",
    stars: "0",
    license: "MIT",
    github: "https://github.com/Almanex/LingoSpaced-",
    image: "images/projects/lingospaced.jpg",
    readme: `[ English ](README.md) • [ Русский ](README_RU.md) • [ Deutsch ](README_DE.md)

# LingoSpaced

**Android flashcard application utilizing spaced repetition for language learning**

LingoSpaced is a mobile application for learning German on Android 16 (API 36). It uses an automated spaced repetition algorithm that adapts to user memory based on implicit signals like response speed, mistakes, and hints, without manual difficulty ratings.

## UI/UX Design

The interface follows Taste Rules standards, featuring a fluid glassmorphism effect, spring physics animations, and a dynamic HSL color palette adapting to light/dark themes.

## Quick Start

### Requirements
- Android Studio (Koala / Ladybug or newer)
- Android SDK 36 (Android 16)
- JDK 17

### Build & Run
\`\`\`powershell
# Set JDK environment variable
\$env:JAVA_HOME="C:\\Program Files\\Android\\Android Studio\\jbr"

# Run unit tests
.\\gradlew.bat test

# Build debug APK
.\\gradlew.bat assembleDebug
\`\`\`

Output APK path: \`app/build/outputs/apk/debug/app-debug.apk\`

## License

MIT`,
    readme_ru: `[ English ](README.md) • [ Русский ](README_RU.md) • [ Deutsch ](README_DE.md)

# LingoSpaced

**Мобильное приложение для изучения немецкого языка с умным интервальным повторением**

LingoSpaced — мобильное приложение под Android 16 (API 36) для эффективного запоминания немецких слов. В основе лежит алгоритм интервальных повторений, адаптирующийся под память пользователя на основе скорости ответа, опечаток и ошибок без ручной оценки сложности.

## Дизайн UI/UX

Интерфейс спроектирован по канонам нео-брутализма и Glassmorphism: эффект жидкого матового стекла, анимации на основе физики пружин и динамическая HSL-палитра, адаптирующаяся под светлую и темную темы.

## Быстрый старт

### Требования
- Android Studio (Koala / Ladybug или новее)
- Android SDK 36 (Android 16)
- JDK 17

### Команды консоли
\`\`\`powershell
\$env:JAVA_HOME="C:\\Program Files\\Android\\Android Studio\\jbr"

# Запуск тестов
.\\gradlew.bat test

# Сборка APK
.\\gradlew.bat assembleDebug
\`\`\`

## Лицензия

MIT`,
    readme_de: `[ English ](README.md) • [ Русский ](README_RU.md) • [ Deutsch ](README_DE.md)

# LingoSpaced

**Android-Karteikarten-App mit Spaced Repetition zum Sprachenlernen**

LingoSpaced is eine mobile App zum Deutschlernen für Android 16 (API 36). Sie nutzt einen automatischen Spaced-Repetition-Algorithmus, der sich anhand impliziter Signale (Antwortgeschwindigkeit, Fehler, Nutzung von Hinweisen) an das Gedächtnis des Nutzers anpasst.

## UI/UX-Design

Das Interface folgt modernen Design-Standards und bietet Glassmorphismus-Effekte, Physik-basierte Animationen sowie eine dynamische HSL-Farbpalette für helle und dunkle System-Designs.

## Schnellstart

### Anforderungen
- Android Studio (Koala / Ladybug oder neuer)
- Android SDK 36 (Android 16)
- JDK 17

### Build & Test
\`\`\`powershell
\$env:JAVA_HOME="C:\\Program Files\\Android\\Android Studio\\jbr"

# Tests ausführen
.\\gradlew.bat test

# Debug-APK erstellen
.\\gradlew.bat assembleDebug
\`\`\`

## Lizenz

MIT`
  },
  "rokey": {
    title: "Rokey",
    subtitle: "A lightweight global hotkey daemon and shell shortcut engine for Windows.",
    category: "System Tool",
    lang: "C++",
    platform: "Windows 10/11",
    stars: "0",
    license: "MIT",
    github: "https://github.com/Almanex/Rokey",
    image: "/images/projects/rokey.jpg",
    readme: `[ English ](README.md) • [ Русский ](docs/README_RU.md) • [ Deutsch ](docs/README_DE.md)
# Rokey Keyboard Layout Converter (Windows 11 Style)

**Rokey** is an ultra-lightweight and fast Windows utility designed to instantly translate selected text from an incorrect keyboard layout to the correct one (for example, \`ghbdtn\` → \`привет\` or \`work\` → \`работа\`).

The project is developed in pure C++ using the Win32 API, which allows it to use minimal system resources (around 1.5 MB of RAM) and build into **a single independent executable** file without external dependencies.

---

## Features

- **Portability**: Works out of the box, does not require installing any libraries or packages (MSIX, Windows App SDK, etc.).
- **Lightweight**: All functionality (background key hook, system tray icon, and graphical settings interface) is packed into a single executable file \`Roke.exe\` (~150 KB).
- **Windows 11 Integration**: The settings interface is adapted to the Windows 11 style (supports system dark/light themes, uses Segoe UI font, and handles DPI scaling).

---

## Usage

1. Select the text with the incorrect layout in any application.
2. Press the hotkey combination (default: **Ctrl+Shift+Q**).
3. The text will be automatically replaced with the correct layout translation.

**Examples:**
- \`ghbdtn\` → \`привет\`
- \`rhjcnf\` → \`работа\`
- \`dcf\` → \`все\`

---

## Settings & Autostart

![Rokey Settings](ro.jpg)

Settings can be accessed via the context menu of the application's icon in the system tray (right-click on the icon → **Show Settings**).

Settings are saved in the Windows registry at:
\`HKEY_CURRENT_USER\\\\Software\\\\Roke\`

### Supported Options:
- **Restore Clipboard**: Saves and restores the original contents of the clipboard after completing layout conversion.
- **Switch System Layout**: Automatically changes the input language in the active window to the correct one after replacing the text.
- **Sound Notification**: Plays a system sound on successful layout conversion.
- **Run at Windows Startup**: Adds the program to system autostart.
- **Activation Hotkey**: Choose between three combinations:
  - \`Ctrl + Shift + Q\` (default)
  - \`Ctrl + Alt + Q\`
  - \`F12\`

---

## Building from Source

### Requirements:
- **Visual Studio 2022** or **Visual Studio Build Tools 2022** with the "Desktop development with C++" workload.
- Windows SDK (Windows 10 SDK 10.0.19041.0 / Windows 11 SDK 10.0.26100.0 or newer).

### Instructions:
Run the automatic build script in the project root directory:
\`\`\`cmd
.\\\\build.bat
\`\`\`

The script will automatically initialize the Visual Studio build environment and compile the application in **Release x64** mode.

The build output (a single file \`Roke.exe\`) will be located in:
\`\`\`text
bin\\\\Release\\\\
\`\`\``,
    readme_ru: `[ English ](README.md) • [ Русский ](docs/README_RU.md) • [ Deutsch ](docs/README_DE.md)
# Rokey Keyboard Layout Converter (Windows 11 Style)

**Rokey** — это сверхлегкая и быстрая утилита для Windows, предназначенная для быстрого перевода выделенного текста из неверной раскладки клавиатуры в правильную (например, \`ghbdtn\` → \`привет\` или \`work\` → \`работа\`).

Проект разработан на чистом C++ с использованием Win32 API, благодаря чему занимает минимум системных ресурсов (около 1.5 МБ ОЗУ) и собирается в **один независимый исполняемый файл** без внешних зависимостей.

---

## Особенности / Features

- **Автономность**: Работает «из коробки», не требует установки библиотек или пакетов (MSIX, Windows App SDK и т.д.).
- **Легковесность**: Весь функционал (фоновый перехватчик клавиш, иконка в трее и графический интерфейс настроек) упакован в один исполняемый файл \`Roke.exe\` (~150 КБ).
- **Интеграция с Windows 11**: Интерфейс настроек адаптирован под стиль Windows 11 (поддерживает системную темную/светлую тему, использует шрифт Segoe UI и учитывает масштабирование DPI).

---

## Использование / Usage

1. Выделите текст с неверной раскладкой в любом приложении.
2. Нажмите горячую клавишу (по умолчанию **Ctrl+Shift+Q**).
3. Текст автоматически заменится на правильный.

**Примеры / Examples:**
- \`ghbdtn\` → \`привет\`
- \`rhjcnf\` → \`работа\`
- \`dcf\` → \`все\`

---

## Настройки и автозапуск / Settings & Autostart

![Rokey Settings](ro.jpg)

Доступ к настройкам осуществляется через контекстное меню иконки приложения в системном трее (правой кнопкой мыши по иконке → **Показать настройки**).

Параметры сохраняются в системный реестр Windows по пути:
\`HKEY_CURRENT_USER\\\\Software\\\\Roke\`

### Поддерживаемые опции:
- **Восстанавливать буфер обмена**: Сохраняет и возвращает исходное содержимое буфера обмена после завершения автозамены.
- **Переключать раскладку системы**: Автоматически изменяет язык ввода в активном окне на правильный после замены текста.
- **Звуковой сигнал**: Воспроизводит системный звук при успешной конвертации.
- **Запускать при старте Windows**: Добавляет программу в автозапуск при входе в систему.
- **Сочетание клавиш активации**: Выбор между тремя комбинациями:
  - \`Ctrl + Shift + Q\` (по умолчанию)
  - \`Ctrl + Alt + Q\`
  - \`F12\`

---

## Сборка проекта / Building

### Требования:
- **Visual Studio 2022** или **Visual Studio Build Tools 2022** с установленной рабочей нагрузкой «Разработка классических приложений на C++».
- Пакет Windows SDK (Windows 10 SDK 10.0.19041.0 / Windows 11 SDK 10.0.26100.0 или новее).

### Инструкция:
Запустите скрипт автоматической сборки в корне проекта:
\`\`\`cmd
.\\\\build.bat
\`\`\`

Скрипт автоматически инициализирует среду сборки Visual Studio и скомпилирует приложение в режиме **Release x64**.

Результат сборки (один файл \`Roke.exe\`) будет находиться в папке:
\`\`\`text
bin\\\\Release\\\\
\`\`\``,
    readme_de: `[ English ](README.md) • [ Русский ](docs/README_RU.md) • [ Deutsch ](docs/README_DE.md)
# Rokey Tastaturlayout-Konverter (Windows 11-Stil)

**Rokey** ist ein extrem leichtgewichtiges und schnelles Windows-Dienstprogramm, mit dem markierter Text sofort von einem falschen Tastaturlayout in das richtige übersetzt werden kann (z. B. \`ghbdtn\` → \`привет\` oder \`work\` → \`работа\`).

Das Projekt wurde in reinem C++ unter Verwendung der Win32-API entwickelt. Dadurch verbraucht es minimale Systemressourcen (ca. 1,5 MB RAM) und lässt sich ohne externe Abhängigkeiten in **eine einzige unabhängige ausführbare Datei** kompilieren.

---

## Funktionen

- **Portabilität**: Funktioniert sofort ohne Installation von Bibliotheken oder Paketen (MSIX, Windows App SDK usw.).
- **Leichtgewicht**: Die gesamte Funktionalität (Hintergrund-Tastatur-Hook, System-Tray-Symbol und grafische Einstellungsoberfläche) ist in einer einzigen ausführbaren Datei \`Roke.exe\` (~150 KB) enthalten.
- **Windows 11-Integration**: Die Einstellungsoberfläche ist an den Windows 11-Stil angepasst (unterstützt das dunkle/helles Systemdesign, verwendet die Schriftart Segoe UI und berücksichtigt DPI-Skalierung).

---

## Verwendung

1. Markieren Sie den Text mit dem falschen Layout in einer beliebigen Anwendung.
2. Drücken Sie die Tastenkombination (Standard: **Ctrl+Shift+Q**).
3. Der Text wird automatisch durch die korrekte Layoutübersetzung ersetzt.

**Beispiele:**
- \`ghbdtn\` → \`привет\`
- \`rhjcnf\` → \`работа\`
- \`dcf\` → \`все\`

---

## Einstellungen & Autostart

![Rokey Settings](ro.jpg)

Die Einstellungen können über das Kontextmenü des Programmsymbols in der Systemleiste aufgerufen werden (Rechtsklick auf das Symbol → **Einstellungen anzeigen**).

Die Parameter werden in der Windows-Registrierung unter folgendem Pfad gespeichert:
\`HKEY_CURRENT_USER\\\\Software\\\\Roke\`

### Unterstützte Optionen:
- **Zwischenablage wiederherstellen**: Speichert und stellt den ursprünglichen Inhalt der Zwischenablage nach der Konvertierung wieder her.
- **System-Layout wechseln**: Ändert die Eingabesprache im aktiven Fenster nach dem Ersetzen des Textes automatisch auf die richtige.
- **Sound-Benachrichtigung**: Spielt einen Systemton ab, wenn die Konvertierung erfolgreich war.
- **Mit Windows starten**: Fügt das Programm zum Windows-Autostart hinzu.
- **Aktivierungs-Hotkey**: Auswahl zwischen drei Kombinationen:
  - \`Ctrl + Shift + Q\` (Standard)
  - \`Ctrl + Alt + Q\`
  - \`F12\`

---

## Build aus Quellcode

### Anforderungen:
- **Visual Studio 2022** oder **Visual Studio Build Tools 2022** mit der Arbeitslast „Desktopentwicklung mit C++“.
- Windows SDK (Windows 10 SDK 10.0.19041.0 / Windows 11 SDK 10.0.26100.0 oder neuer).

### Anleitung:
Führen Sie das automatische Build-Skript im Projektverzeichnis aus:
\`\`\`cmd
.\\\\build.bat
\`\`\`

Das Skript initialisiert die Visual Studio-Buildumgebung und kompiliert die Anwendung im Modus **Release x64**.

Die ausführbare Datei (\`Roke.exe\`) befindet sich nach dem Build im Ordner:
\`\`\`text
bin\\\\Release\\\\
\`\`\``
  },
  "screentation-v2": {
    title: "Screentation V2",
    subtitle: "A screenshot organization, capture, and annotation tool for Windows desktops.",
    category: "Utility",
    lang: "C#",
    platform: "Windows 10/11",
    stars: "0",
    license: "MIT",
    github: "https://github.com/Almanex/Screentation-V2",
    image: "images/projects/screentation-v2.jpg",
    readme: `[ English ](README.md) • [ Русский ](README_RU.md) • [ Deutsch ](README_DE.md)

# Screentation

**Desktop screenshot capture, annotation, and batch-saving tool**

Screentation is a lightweight and modern desktop application for screenshot annotation and batch export, designed for technical writers, developers, and QA engineers. The app intercepts new screenshots from the clipboard and lets you add borders, arrows, steps, and blur private data in a few clicks.

## Key Features

- Clipboard Auto-Capture: Instantly loads screenshots from clipboard or supports drag-and-drop.
- Annotation Tools (Konva.js): Rectangles (hollow/filled), Arrows, step numbers (auto-incrementing), and high-quality blur.
- Smart Eraser: Clone stamp utility to clean text or icons while restoring the original background behind them.
- Batch Export: Exports screenshots to PNG, JPEG, or WebP with customizable quality and filename naming templates.
- Tray Support: Minimizes to system tray and continues background clipboard monitoring.

## Technology Stack

- Core Shell: Electron, Node.js
- Frontend Framework: React, TypeScript, Vite
- Canvas Library: Konva.js (react-konva)
- Image Processing: sharp (for high-speed server-side compression)

## Quick Start

### Requirements
- Node.js (LTS 18+)
- Git

### Build & Run
\`\`\`bash
git clone https://github.com/Almanex/Screentation.git
cd Screentation
npm install
npm run dev
\`\`\`

### Create Installer
\`\`\`bash
npx electron-builder --win
\`\`\`

## License

MIT`,
    readme_ru: `[ English ](README.md) • [ Русский ](README_RU.md) • [ Deutsch ](README_DE.md)

# Screentation

**Инструмент для захвата, аннотирования и пакетного сохранения скриншотов**

Screentation — легкое десктопное приложение для редактирования скриншотов и их пакетного экспорта. Полезно для технических писателей, тестировщиков и разработчиков при создании инструкций и баг-репортов. Программа перехватывает скриншоты из буфера обмена и позволяет быстро наложить рамки, стрелки, нумерацию шагов или скрыть личные данные.

## Основные возможности

- Автозахват буфера обмена: Мгновенный импорт скриншотов при создании или через Drag-and-Drop.
- Графические аннотации (Konva.js): Рамки, указательные стрелки, маркеры шагов с автоувеличением номера, размытие.
- Умный ластик: Инструмент штампа для стирания конфиденциальных данных с восстановлением текстуры фона.
- Пакетный экспорт: Сохранение в PNG, JPEG, WebP с настройкой качества сжатия.
- Фоновый режим: Работа из системного трея Windows.

## Технологический стек

- Ядро: Electron, Node.js
- Фронтенд: React, TypeScript, Vite
- Графика: Konva.js (react-konva) для холста
- Обработка изображений: sharp для сжатия в главном процессе

## Быстрый старт

### Требования
- Node.js (LTS 18+)
- Git

### Команды сборки
\`\`\`bash
git clone https://github.com/Almanex/Screentation.git
cd Screentation
npm install
npm run dev
\`\`\`

## Лицензия

MIT`,
    readme_de: `[ English ](README.md) • [ Русский ](README_RU.md) • [ Deutsch ](README_DE.md)

# Screentation

**Desktop-Tool zum Erfassen, Kommentieren und Stapelspeichern von Screenshots**

Screentation ist eine leichtgewichtige Desktop-Anwendung zur Screenshot-Annotation und zum Stapel-Export, entwickelt für technische Redakteure, Entwickler und QA-Ingenieure. Die App erfasst Screenshots aus der Zwischenablage und ermöglicht das Hinzufügen von Rahmen, Pfeilen, Schrittnummern und Weichzeichnern.

## Hauptfunktionen

- Automatischer Capture: Lädt Screenshots direkt aus der Zwischenablage oder per Drag-and-Drop.
- Zeichenwerkzeuge (Konva.js): Rahmen, Pfeile, automatisch inkrementierende Schrittnummern und Weichzeichner.
- Intelligenter Radierer: Kopierstempel-Werkzeug zum Entfernen vertraulicher Daten unter Wiederherstellung des Hintergrunds.
- Stapel-Export: Speichern in PNG, JPEG oder WebP mit Qualitätskontrolle.
- Tray-Modus: Minimiert sich im Windows-System-Tray und läuft im Hintergrund weiter.

## Technologie-Stack

- Kern: Electron, Node.js
- Frontend: React, TypeScript, Vite
- Canvas-Bibliothek: Konva.js (react-konva)
- Bildkomprimierung: sharp (für serverseitige Verarbeitung)

## Schnellstart

### Anforderungen
- Node.js (LTS 18+)
- Git

### Befehle
\`\`\`bash
git clone https://github.com/Almanex/Screentation.git
cd Screentation
npm install
npm run dev
\`\`\`

## Lizenz

MIT`
  },
  "shortcutdock": {
    title: "ShortcutDock",
    subtitle: "A simple desktop shortcut organizer dock utility for Windows users.",
    category: "Utility",
    lang: "C#",
    platform: "Windows 10/11",
    stars: "0",
    license: "MIT",
    github: "https://github.com/Almanex/ShortcutDock",
    image: "https://raw.githubusercontent.com/Almanex/ShortcutDock/main/screenshots/screenshot3.png",
    readme: `[ English ](README.md) • [ Русский ](docs/README_RU.md) • [ Deutsch ](docs/README_DE.md)

# ShortcutDock

**Customizable Fluent design shortcut dock panel for Windows 11 desktops**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Platform: Windows](https://img.shields.io/badge/Platform-Windows%2010%20%2F%2011-blue.svg)](#)
[![Framework: .NET 10](https://img.shields.io/badge/Framework-.NET%2010.0-blueviolet.svg)](https://dotnet.microsoft.com)
[![Share on X](https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Fgithub.com%2FAlmanex%2FShortcutDock)](https://twitter.com/intent/tweet?text=Check%20out%20ShortcutDock%20--%20a%20beautiful%20customizable%20shortcut%20dock%20for%20Windows%2011%21&url=https%3A%2F%2Fgithub.com%2FAlmanex%2FShortcutDock&hashtags=windows11,wpf,dotnet,opensource)

---

## Overview

ShortcutDock is a modern, lightweight Windows desktop dock panel designed to organize your shortcuts. It features Mica and Acrylic blur effects that sync with the active Windows system theme, support for Drag-and-Drop, automatic vertical and horizontal layout orientation, system AppBar reservation, and tray integration.

> [!IMPORTANT]
> **First stable release available!**  
> You can download the ready-made compiled file **\`ShortcutDock.exe\`** on the [Releases](https://github.com/Almanex/ShortcutDock/releases/tag/v2.0.0) page and run it on your computer without installing additional libraries.

For detailed instructions on configuring all features, read the [User Guide (GUIDE.md)](docs/GUIDE.md).

---

## Screenshots

<details open>
  <summary style="cursor: pointer; padding: 6px; font-family: sans-serif;"><b>[ Show ] 1. Horizontal Layout (Bottom Position)</b></summary>
  <br/>
  <p align="center">
    <img src="screenshots/screenshot1.png" width="95%" alt="ShortcutDock Horizontal Bottom" />
  </p>
</details>

<details>
  <summary style="cursor: pointer; padding: 6px; font-family: sans-serif;"><b>[ Show ] 2. Vertical Layout (Left Position)</b></summary>
  <br/>
  <p align="center">
    <img src="screenshots/screenshot2.png" width="95%" alt="ShortcutDock Vertical Left" />
  </p>
</details>

<details>
  <summary style="cursor: pointer; padding: 6px; font-family: sans-serif;"><b>[ Show ] 3. Fluent Settings Window</b></summary>
  <br/>
  <p align="center">
    <img src="screenshots/screenshot3.png" width="95%" alt="ShortcutDock Settings" />
  </p>
</details>

<details>
  <summary style="cursor: pointer; padding: 6px; font-family: sans-serif;"><b>[ Show ] 4. Context Menu & Customizations</b></summary>
  <br/>
  <p align="center">
    <img src="screenshots/screenshot4.png" width="95%" alt="ShortcutDock Context Menu" />
  </p>
</details>

<details>
  <summary style="cursor: pointer; padding: 6px; font-family: sans-serif;"><b>[ Show ] 5. Horizontal Layout (Top Position)</b></summary>
  <br/>
  <p align="center">
    <img src="screenshots/screenshot5.png" width="95%" alt="ShortcutDock Top Position" />
  </p>
</details>






---

## Key Features

- Desktop Panel: Drag-and-drop \`.exe\` or \`.lnk\` files directly onto the panel to add.
- Dynamic Orientation: Switches between vertical (left/right screen positions) and horizontal (top/bottom) layouts.
- Modern Backdrop: Support for Mica and Acrylic blur effects in sync with the active Windows theme.
- Auto-Hide: Panel smoothly hides off-screen when mouse focus is lost to maximize workspace.
- Hover Zoom & Active Indicators: macOS-style icon zoom animation on hover and accent color dots under running applications.

---

## Tech Stack

| Layer / Component | Technology | Version | Purpose |
| --- | --- | --- | --- |
| Language | C# (.NET 10.0) | net10.0-windows | Main programming language |
| UI Framework | WPF + WPF-UI | 4.3.0 | Modern controls and Mica window shell |
| Pattern | MVVM Toolkit | 8.4.2 | CommunityToolkit.Mvvm for state binding |
| Win32 Interop | P/Invoke | - | DWM, WindowStyle, and AppBar APIs |
| Image Lib | System.Drawing.Common | 10.0.9 | Icon Extraction and PNG rendering |

---

## Project Structure

\`\`\`text
ShortcutDock/
├── ShortcutDock.slnx              # Visual Studio Solution (SDK 10 format)
└── src\\ShortcutDock\\
    ├── ShortcutDock.csproj         # net10.0-windows configuration
    ├── app.manifest                # DPI awareness and compatibility manifest
    ├── App.xaml / App.xaml.cs      # Entry point, DI container, and Tray service
    ├── MainWindow.xaml / .xaml.cs  # Main panel, DWM blur, DnD, and orientation hooks
    ├── SettingsWindow.xaml / .cs   # Fluent settings window
    ├── app_icon.ico                # App icon asset
    ├── Native\\
    │   └── Win32.cs                # P/Invoke helper definitions
    ├── Models\\
    │   ├── Settings.cs            
    │   ├── PanelSettings.cs        # Panel preferences
    │   └── ShortcutItem.cs         # Shortcut model (GUID, path, cached icon)
    ├── Services\\
    │   ├── SettingsService.cs      # Load/save settings.json in %AppData%
    │   ├── ProcessLauncher.cs     # Executes apps, supports admin elevation
    │   ├── ShortcutResolver.cs     # Resolves shell links (.lnk) via COM interfaces
    │   └── IconExtractor.cs       # Jumbo icon extraction (256x256) to PNG cache
    └── ViewModels\\
        ├── MainViewModel.cs       # Handles main collection and settings
        └── ShortcutViewModel.cs   # Commands for launch, elevation, and deletion
\`\`\`

---

## Data & Configuration

Configuration is saved in JSON format under \`%AppData%\\ShortcutDock\\settings.json\`:

\`\`\`json
{
  "PanelSettings": {
    "Position": "Bottom",
    "IconSize": 48,
    "KeepOnTop": true,
    "BackdropType": "Mica",
    "ShowAddButton": true,
    "AutoHide": false,
    "HoverZoom": true,
    "ShowRunningIndicators": true,
    "Language": "en"
  },
  "Shortcuts": [
    {
      "Id": "a1b2c3d4-...",
      "Name": "Google Chrome",
      "TargetPath": "C:\\\\Program Files\\\\Google\\\\Chrome\\\\Application\\\\chrome.exe",
      "IconPath": "%AppData%\\\\ShortcutDock\\\\Cache\\\\chrome_ABCD1234.png"
    }
  ]
}
\`\`\`

Icon cache is stored under \`%AppData%\\ShortcutDock\\Cache\\*.png\`.

---

## Getting Started

### Prerequisites
- .NET 10.0 SDK or newer

### Build & Run
\`\`\`powershell
# Clone the repository
git clone https://github.com/Almanex/ShortcutDock.git
cd ShortcutDock

# Restore dependencies and build
dotnet build

# Run project
dotnet run --project src\\ShortcutDock
\`\`\`

### Standalone Publication
To compile a single executable with all dependencies bundled inside:
\`\`\`powershell
dotnet publish -c Release -r win-x64 --self-contained true -p:PublishSingleFile=true
\`\`\`
The output file will be saved in \`src\\ShortcutDock\\bin\\Release\\net10.0-windows\\win-x64\\publish\\\`.

---

## Running the Tests
This project uses manual UI verification and automated build checks. To verify code formatting:
\`\`\`powershell
dotnet build -c Release
\`\`\`

---

## Contributing
Please submit issues and pull requests on our GitHub repository. For major changes, open an issue first to discuss what you want to change.

---

## Versioning
We use SemVer for versioning. For available versions, see the tags on this repository.

---

## Authors & Acknowledgments
- Almanex - Developer and initial work.
- WPF-UI community for Fluent styling elements.

---

## License
This project is licensed under the MIT License - see the \`LICENSE\` file for details.`,
    readme_ru: `[ English ](../README.md) • [ Русский ](README_RU.md) • [ Deutsch ](README_DE.md)

# ShortcutDock

**Настраиваемая панель быстрого запуска в стиле Fluent Design для рабочего стола Windows 11**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Platform: Windows](https://img.shields.io/badge/Platform-Windows%2010%20%2F%2011-blue.svg)](#)
[![Framework: .NET 10](https://img.shields.io/badge/Framework-.NET%2010.0-blueviolet.svg)](https://dotnet.microsoft.com)
[![Share on X](https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Fgithub.com%2FAlmanex%2FShortcutDock)](https://twitter.com/intent/tweet?text=%D0%9F%D0%BE%D1%81%D0%BC%D0%BE%D1%82%D1%80%D0%B8%D1%82%D0%B5%20%D0%BD%D0%B0%20ShortcutDock%20--%20%D0%BA%D1%80%D0%B0%D1%81%D0%B8%D0%B2%D1%83%D1%8E%20%D0%BF%D0%B0%D0%BD%D0%B5%D0%BB%D1%8C%20%D0%B1%D1%8B%D1%81%D1%82%D1%80%D0%BE%D0%B3%D0%BE%20%D0%B7%D0%B0%D0%BF%D1%83%D1%81%D0%BA%D0%B0%20%D0%B4%D0%BB%D1%8F%20Windows%2011%21&url=https%3A%2F%2Fgithub.com%2FAlmanex%2FShortcutDock&hashtags=windows11,wpf,dotnet,opensource)

---

## Обзор

ShortcutDock — это современная, легковесная панель ярлыков для рабочего стола Windows, предназначенная для удобной организации ваших приложений. Она поддерживает эффекты размытия Mica и Acrylic, синхронизацию с системной темой Windows, технологию Drag-and-Drop, автоматическое переключение между вертикальной и горизонтальной ориентациями, резервирование экранного пространства (AppBar) и интеграцию с системным треем.

> [!IMPORTANT]
> **Доступен первый стабильный релиз!**  
> Вы можете скачать готовый скомпилированный файл **\`ShortcutDock.exe\`** на странице [Релизы](https://github.com/Almanex/ShortcutDock/releases/tag/v2.0.0) и запустить его на своем компьютере без установки дополнительных библиотек.

Подробные инструкции по настройке всех функций приведены в [Руководстве пользователя (GUIDE.md)](GUIDE.md).

---

## Скриншоты

<details open>
  <summary style="cursor: pointer; padding: 6px; font-family: sans-serif;"><b>[ Показать ] 1. Горизонтальное расположение (Снизу)</b></summary>
  <br/>
  <p align="center">
    <img src="screenshots/screenshot1.png" width="95%" alt="ShortcutDock Горизонтальная внизу" />
  </p>
</details>

<details>
  <summary style="cursor: pointer; padding: 6px; font-family: sans-serif;"><b>[ Показать ] 2. Вертикальное расположение (Слева)</b></summary>
  <br/>
  <p align="center">
    <img src="screenshots/screenshot2.png" width="95%" alt="ShortcutDock Вертикальная слева" />
  </p>
</details>

<details>
  <summary style="cursor: pointer; padding: 6px; font-family: sans-serif;"><b>[ Показать ] 3. Окно настроек Fluent Design</b></summary>
  <br/>
  <p align="center">
    <img src="screenshots/screenshot3.png" width="95%" alt="ShortcutDock Настройки" />
  </p>
</details>

<details>
  <summary style="cursor: pointer; padding: 6px; font-family: sans-serif;"><b>[ Показать ] 4. Контекстное меню и настройки</b></summary>
  <br/>
  <p align="center">
    <img src="screenshots/screenshot4.png" width="95%" alt="ShortcutDock Контекстное меню" />
  </p>
</details>

<details>
  <summary style="cursor: pointer; padding: 6px; font-family: sans-serif;"><b>[ Показать ] 5. Горизонтальное расположение (Сверху)</b></summary>
  <br/>
  <p align="center">
    <img src="screenshots/screenshot5.png" width="95%" alt="ShortcutDock Позиция сверху" />
  </p>
</details>






---

## Основные возможности

- Панель на рабочем столе: Перетаскивайте файлы \`.exe\` или \`.lnk\` с помощью Drag-and-Drop прямо на панель для их быстрого добавления.
- Динамическая ориентация: Автоматически переключается между вертикальным (при размещении слева или справа на экране) и горизонтальным (сверху или снизу) режимами отображения.
- Современное размытие: Поддержка эффектов размытия Mica и Acrylic с динамической сменой системной темы оформления (темная/светлая).
- Автоскрытие: Панель плавно скрывается за пределы экрана при потере фокуса мыши, освобождая рабочую область.
- Эффект Hover Zoom и индикаторы запуска: macOS-анимация увеличения значков при наведении и аккуратные точки акцентного цвета под запущенными программами.

---

## Стек технологий

| Слой / Компонент | Технология | Версия | Назначение |
| --- | --- | --- | --- |
| Язык | C# (.NET 10.0) | net10.0-windows | Основной язык разработки |
| UI-фреймворк | WPF + WPF-UI | 4.3.0 | Современные элементы управления и окно Mica |
| Паттерн | MVVM Toolkit | 8.4.2 | Связывание состояния через CommunityToolkit.Mvvm |
| Интеграция с Win32 | P/Invoke | - | Работа с DWM, стилями окон и API AppBar |
| Графика | System.Drawing.Common | 10.0.9 | Извлечение значков и рендеринг в PNG |

---

## Структура проекта

\`\`\`text
ShortcutDock/
├── ShortcutDock.slnx              # Файл решения Visual Studio (формат SDK 10)
└── src\\ShortcutDock\\
    ├── ShortcutDock.csproj         # Конфигурация проекта net10.0-windows
    ├── app.manifest                # Манифест совместимости и поддержки DPI
    ├── App.xaml / App.xaml.cs      # Точка входа, DI-контейнер и служба трея
    ├── MainWindow.xaml / .xaml.cs  # Главная панель, обработка размытия DWM, DnD и AppBar
    ├── SettingsWindow.xaml / .cs   # Окно настроек Fluent-дизайна
    ├── app_icon.ico                # Встроенный значок приложения
    ├── Native\\
    │   └── Win32.cs                # Системные вызовы P/Invoke
    ├── Models\\
    │   ├── Settings.cs            
    │   ├── PanelSettings.cs        # Настройки панели
    │   └── ShortcutItem.cs         # Модель ярлыка (GUID, пути, кэшированная иконка)
    ├── Services\\
    │   ├── SettingsService.cs      # Загрузка/сохранение settings.json в %AppData%
    │   ├── ProcessLauncher.cs     # Запуск приложений (включая права администратора)
    │   ├── ShortcutResolver.cs     # Разрешение путей .lnk-файлов через COM-интерфейсы
    │   └── IconExtractor.cs       # Извлечение больших значков (256x256) в кэш PNG
    └── ViewModels\\
        ├── MainViewModel.cs       # Управление коллекцией ярлыков и настройками
        └── ShortcutViewModel.cs   # Команды запуска, удаления и администрирования
\`\`\`

---

## Данные и конфигурация

Конфигурационный файл сохраняется в формате JSON по пути \`%AppData%\\ShortcutDock\\settings.json\`:

\`\`\`json
{
  "PanelSettings": {
    "Position": "Bottom",
    "IconSize": 48,
    "KeepOnTop": true,
    "BackdropType": "Mica",
    "ShowAddButton": true,
    "AutoHide": false,
    "HoverZoom": true,
    "ShowRunningIndicators": true,
    "Language": "ru"
  },
  "Shortcuts": [
    {
      "Id": "a1b2c3d4-...",
      "Name": "Google Chrome",
      "TargetPath": "C:\\\\Program Files\\\\Google\\\\Chrome\\\\Application\\\\chrome.exe",
      "IconPath": "%AppData%\\\\ShortcutDock\\\\Cache\\\\chrome_ABCD1234.png"
    }
  ]
}
\`\`\`

Кэш иконок находится в папке \`%AppData%\\ShortcutDock\\Cache\\*.png\`.

---

## С чего начать

### Требования
- .NET 10.0 SDK или новее

### Сборка и запуск
\`\`\`powershell
# Клонирование репозитория
git clone https://github.com/Almanex/ShortcutDock.git
cd ShortcutDock

# Восстановление зависимостей и сборка
dotnet build

# Запуск проекта
dotnet run --project src\\ShortcutDock
\`\`\`

### Автономная публикация (Self-Contained EXE)
Для компиляции единого исполняемого файла со всеми встроенными зависимостями:
\`\`\`powershell
dotnet publish -c Release -r win-x64 --self-contained true -p:PublishSingleFile=true
\`\`\`
Готовый исполняемый файл будет сохранен в папке \`src\\ShortcutDock\\bin\\Release\\net10.0-windows\\win-x64\\publish\\\`.

---

## Тестирование
В проекте используется ручное визуальное тестирование интерфейса, а также автоматическая проверка сборки. Чтобы проверить форматирование кода и сборку:
\`\`\`powershell
dotnet build -c Release
\`\`\`

---

## Участие в разработке
Вы можете отправлять сообщения об ошибках и пулл-реквесты на GitHub. При внесении значительных изменений рекомендуется сначала создать issue для предварительного обсуждения.

---

## Версионирование
Проект использует систему SemVer. Доступные версии и теги можно посмотреть на странице релизов репозитория.

---

## Авторы и благодарности
- Almanex - Разработчик и первоначальная реализация.
- Сообщество WPF-UI за современные элементы Fluent Design.

---

## Лицензия
Этот проект распространяется под лицензией MIT — подробности смотрите в файле \`LICENSE\`.`,
    readme_de: `[ English ](../README.md) • [ Русский ](README_RU.md) • [ Deutsch ](README_DE.md)

# ShortcutDock

**Anpassbare Fluent-Design-Schnellstartleiste für Windows 11-Desktops**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Platform: Windows](https://img.shields.io/badge/Platform-Windows%2010%20%2F%2011-blue.svg)](#)
[![Framework: .NET 10](https://img.shields.io/badge/Framework-.NET%2010.0-blueviolet.svg)](https://dotnet.microsoft.com)
[![Share on X](https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Fgithub.com%2FAlmanex%2FShortcutDock)](https://twitter.com/intent/tweet?text=Schau%20dir%20ShortcutDock%20an%20--%20eine%20wundersch%C3%B6ne%2C%20anpassbare%20Schnellstartleiste%20f%C3%BCr%20Windows%2011%21&url=https%3A%2F%2Fgithub.com%2FAlmanex%2FShortcutDock&hashtags=windows11,wpf,dotnet,opensource)

---

## Übersicht

ShortcutDock ist eine moderne, leichtgewichtige Windows-Desktop-Leiste zur Organisation Ihrer Verknüpfungen. Sie bietet Mica- und Acrylic-Weichzeichnungseffekte, die sich mit dem aktiven Windows-Systemdesign synchronisieren, Drag-and-Drop-Unterstützung, automatische Ausrichtung zwischen vertikaler und horizontaler Ausrichtung, Systemplatzreservierung (AppBar) und System-Tray-Integration.

> [!IMPORTANT]
> **Erste stabile Version verfügbar!**  
> Sie können die fertige, kompilierte Datei **\`ShortcutDock.exe\`** auf der [Releases](https://github.com/Almanex/ShortcutDock/releases/tag/v2.0.0)-Seite herunterladen und direkt auf Ihrem Computer ausführen, ohne zusätzliche Bibliotheken installieren zu müssen.

Ausführliche Anweisungen zur Konfiguration aller Funktionen finden Sie im [Benutzerhandbuch (GUIDE.md)](GUIDE.md).

---

## Screenshots

<details open>
  <summary style="cursor: pointer; padding: 6px; font-family: sans-serif;"><b>[ Anzeigen ] 1. Horizontales Layout (Unten)</b></summary>
  <br/>
  <p align="center">
    <img src="screenshots/screenshot1.png" width="95%" alt="ShortcutDock Horizontal Unten" />
  </p>
</details>

<details>
  <summary style="cursor: pointer; padding: 6px; font-family: sans-serif;"><b>[ Anzeigen ] 2. Vertikales Layout (Links)</b></summary>
  <br/>
  <p align="center">
    <img src="screenshots/screenshot2.png" width="95%" alt="ShortcutDock Vertikal Links" />
  </p>
</details>

<details>
  <summary style="cursor: pointer; padding: 6px; font-family: sans-serif;"><b>[ Anzeigen ] 3. Fluent Einstellungsfenster</b></summary>
  <br/>
  <p align="center">
    <img src="screenshots/screenshot3.png" width="95%" alt="ShortcutDock Einstellungen" />
  </p>
</details>

<details>
  <summary style="cursor: pointer; padding: 6px; font-family: sans-serif;"><b>[ Anzeigen ] 4. Kontextmenü und Anpassungen</b></summary>
  <br/>
  <p align="center">
    <img src="screenshots/screenshot4.png" width="95%" alt="ShortcutDock Kontextmenü" />
  </p>
</details>

<details>
  <summary style="cursor: pointer; padding: 6px; font-family: sans-serif;"><b>[ Anzeigen ] 5. Horizontales Layout (Oben)</b></summary>
  <br/>
  <p align="center">
    <img src="screenshots/screenshot5.png" width="95%" alt="ShortcutDock Position Oben" />
  </p>
</details>






---

## Hauptfunktionen

- Desktop-Leiste: Ziehen Sie \`.exe\`- oder \`.lnk\`-Dateien einfach per Drag-and-Drop direkt auf die Leiste, um sie hinzuzufügen.
- Dynamische Ausrichtung: Wechselt automatisch zwischen vertikalen (linke/rechte Bildschirmseite) und horizontalen (oben/unten) Layouts.
- Modernes Design: Unterstützung für Mica- und Acrylic-Weichzeichnungseffekte, synchronisiert mit dem aktiven Windows-Systemdesign (hell/dunkel).
- Automatisches Ausblenden: Die Leiste wird sanft ausgeblendet, wenn der Mausfokus verloren geht, um die Arbeitsfläche zu maximieren.
- Hover-Zoom & Aktivitätsindikatoren: macOS-ähnliche Icon-Vergrößerungsanimation beim Überfahren mit der Maus und farbige Punkte unter geöffneten Anwendungen.

---

## Technologiestapel

| Ebene / Komponente | Technologie | Version | Zweck |
| --- | --- | --- | --- |
| Sprache | C# (.NET 10.0) | net10.0-windows | Hauptprogrammiersprache |
| UI-Framework | WPF + WPF-UI | 4.3.0 | Moderne Steuerelemente und Mica-Fensterrahmen |
| Entwurfsmuster | MVVM Toolkit | 8.4.2 | Zustandsbindung über CommunityToolkit.Mvvm |
| Win32-Integration | P/Invoke | - | APIs für DWM, Fensterstile und AppBar |
| Grafikbibliothek | System.Drawing.Common | 10.0.9 | Icon-Extraktion und PNG-Rendering |

---

## Projektstruktur

\`\`\`text
ShortcutDock/
├── ShortcutDock.slnx              # Visual Studio-Projektmappe (SDK 10-Format)
└── src\\ShortcutDock\\
    ├── ShortcutDock.csproj         # net10.0-windows Konfiguration
    ├── app.manifest                # DPI-Kompatibilität und Windows-Manifest
    ├── App.xaml / App.xaml.cs      # Einstiegspunkt, DI-Container und Tray-Service
    ├── MainWindow.xaml / .xaml.cs  # Hauptleiste, DWM-Blur, DnD- und AppBar-Integration
    ├── SettingsWindow.xaml / .cs   # Fluent-Design Einstellungsfenster
    ├── app_icon.ico                # Integriertes Programmsymbol
    ├── Native\\
    │   └── Win32.cs                # P/Invoke-Schnittstellendefinitionen
    ├── Models\\
    │   ├── Settings.cs            
    │   ├── PanelSettings.cs        # Leisteneinstellungen
    │   └── ShortcutItem.cs         # Verknüpfungsmodell (GUID, Pfad, Cache-Symbol)
    ├── Services\\
    │   ├── SettingsService.cs      # settings.json in %AppData% laden/speichern
    │   ├── ProcessLauncher.cs     # Anwendungsstart, auch mit Administratorrechten
    │   ├── ShortcutResolver.cs     # Auflösen von .lnk-Verknüpfungen über COM
    │   └── IconExtractor.cs       # Extraktion großer Symbole (256x256) in PNG-Cache
    └── ViewModels\\
        ├── MainViewModel.cs       # Verwaltung der Verknüpfungssammlung und Einstellungen
        └── ShortcutViewModel.cs   # Befehle zum Starten, Entfernen und für Admin-Rechte
\`\`\`

---

## Daten und Konfiguration

Die Einstellungen werden als JSON unter \`%AppData%\\ShortcutDock\\settings.json\` gespeichert:

\`\`\`json
{
  "PanelSettings": {
    "Position": "Bottom",
    "IconSize": 48,
    "KeepOnTop": true,
    "BackdropType": "Mica",
    "ShowAddButton": true,
    "AutoHide": false,
    "HoverZoom": true,
    "ShowRunningIndicators": true,
    "Language": "de"
  },
  "Shortcuts": [
    {
      "Id": "a1b2c3d4-...",
      "Name": "Google Chrome",
      "TargetPath": "C:\\\\Program Files\\\\Google\\\\Chrome\\\\Application\\\\chrome.exe",
      "IconPath": "%AppData%\\\\ShortcutDock\\\\Cache\\\\chrome_ABCD1234.png"
    }
  ]
}
\`\`\`

Der Icon-Cache wird unter \`%AppData%\\ShortcutDock\\Cache\\*.png\` abgelegt.

---

## Erste Schritte

### Voraussetzungen
- .NET 10.0 SDK oder neuer

### Bauen & Ausführen
\`\`\`powershell
# Repository klonen
git clone https://github.com/Almanex/ShortcutDock.git
cd ShortcutDock

# Abhängigkeiten wiederherstellen und bauen
dotnet build

# Projekt ausführen
dotnet run --project src\\ShortcutDock
\`\`\`

### Standalone Veröffentlichung
So kompilieren Sie eine einzelne, eigenständige ausführbare Datei:
\`\`\`powershell
dotnet publish -c Release -r win-x64 --self-contained true -p:PublishSingleFile=true
\`\`\`
Die fertige ausführbare Datei wird unter \`src\\ShortcutDock\\bin\\Release\\net10.0-windows\\win-x64\\publish\\\` gespeichert.

---

## Tests ausführen
Dieses Projekt verwendet manuelle UI-Tests und automatisierte Build-Checks. So überprüfen Sie die Formatierung und den Build:
\`\`\`powershell
dotnet build -c Release
\`\`\`

---

## Mitwirken
Bitte senden Sie Fehlerberichte (Issues) und Pull Requests auf GitHub. Bei größeren Änderungen erstellen Sie bitte zuerst ein Issue zur Diskussion.

---

## Versionsverwaltung
Wir verwenden SemVer für die Versionsverwaltung. Verfügbare Versionen und Tags finden Sie unter Releases.

---

## Autoren & Danksagungen
- Almanex - Entwickler und Erstumsetzung.
- WPF-UI Community für moderne Designelemente.

---

## Lizenz
Dieses Projekt ist unter der MIT-Lizenz lizenziert - siehe die \`LICENSE\`-Datei für Details.`,
    guide: `[ English ](GUIDE.md) • [ Русский ](GUIDE_RU.md) • [ Deutsch ](GUIDE_DE.md)

# ShortcutDock User Guide

Welcome to **ShortcutDock** — a modern and functional dock panel for quick launching applications, folders, and managing system elements on Windows 11 and 10.

This guide will help you quickly understand all the features of the application and configure it to suit your needs.

---

## Table of Contents
1. [System Requirements](#1-system-requirements)
2. [Installation and First Launch](#2-installation-and-first-launch)
3. [Adding Shortcuts to the Panel](#3-adding-shortcuts-to-the-panel)
4. [Managing and Sorting Shortcuts](#4-managing-and-sorting-shortcuts)
5. [Configuring Appearance and Effects](#5-configuring-appearance-and-effects)
6. [Recycle Bin Integration](#6-recycle-bin-integration)
7. [System Tray Integration](#7-system-tray-integration)
8. [Where Settings are Stored (Portability)](#8-where-settings-are-stored-portability)
9. [Troubleshooting](#9-troubleshooting)

---

## 1. System Requirements
* **Operating System:** Windows 10 (build 19041 and higher) or Windows 11.
* **Architecture:** x64.
* **Optional:** The Lightweight version requires the [.NET 10 Desktop Runtime](https://dotnet.microsoft.com/download/dotnet/10.0) (or higher) installed. The Self-Contained version runs without any additional runtimes.

---

## 2. Installation and First Launch
The application is delivered as a single \`ShortcutDock.exe\` file and does not require a full installation:

> [!TIP]
> **Get the Application:**  
> 📥 **[Download the latest version from the GitHub Releases page](https://github.com/Almanex/ShortcutDock/releases)**

1. Place the \`ShortcutDock.exe\` file in any convenient folder on your computer (e.g., \`C:\\Program Files\\ShortcutDock\` or your personal user directory).
2. Double-click the \`ShortcutDock.exe\` file to launch it.
3. On the first launch, an empty semi-transparent panel with a \`+\` button will appear at the bottom of the screen.

> [!IMPORTANT]
> **Windows Defender SmartScreen Warning:**  
> Since the application executable is not signed with a paid commercial developer digital certificate (which is normal for free open-source projects), Windows Defender SmartScreen might block the launch on the first run, showing a *"Windows protected your PC"* popup.  
> **How to run the application:** Click the **"More info"** link (in the top-left area of the warning popup), and then click the appeared **"Run anyway"** button. Windows will remember your choice, and the warning won't appear on subsequent launches.

---

## 3. Adding Shortcuts to the Panel
You can add new programs, folders, or drives to the panel in three ways:

### Method A: Drag-and-Drop
* Simply drag any executable file (\`.exe\`), shortcut (\`.lnk\`), folder, or a whole drive from Windows File Explorer and drop it onto any empty space on the panel. ShortcutDock will automatically extract the high-resolution icon and add the item.

### Method B: Via the "+" Button
1. If the option to show the \`+\` button is enabled in the settings, click it.
2. In the opened dialog window, select the desired program file or shortcut and click "Open".

### Method C: Via the Context Menu
* Right-click on any empty space of the panel and select **"Add Application"**.

---

## 4. Managing and Sorting Shortcuts

### Reordering Icons
* Hold the left mouse button on any icon and drag it left/right (or up/down for a vertical panel) to change its position relative to other items. Release the mouse button at the desired position — the order is saved automatically.

### Run as Administrator
* Right-click (RMB) the desired application on the panel and select **"Run as Administrator"**.

### Changing the Icon
1. Right-click the shortcut and select **"Change Icon..."**.
2. Select any \`.png\` image or \`.ico\` icon file. The panel will instantly update the icon.

### Removing from the Panel
* Right-click the shortcut on the panel and select **"Remove from Panel"** (the program file on the disk will not be affected).

---

## 5. Configuring Appearance and Effects
To open the settings window, right-click on any empty space on the panel or on the application tray icon and select **"Panel Settings"**.

* **Screen Position:** 
  * *Bottom* or *Top* (horizontal panel).
  * *Left* or *Right* (the panel automatically switches to vertical mode).
  * When moved to screen edges, the panel automatically reserves desktop space (AppBar technology) — other windows will not overlap it when maximized.
* **Blur Effect:**
  * *None:* Fully transparent background (only icons float over the wallpaper).
  * *Mica:* Windows 11 signature semi-transparent effect matching your wallpaper color. Automatically switches between dark and light themes depending on system settings.
  * *Acrylic:* Translucent frosted glass effect. Also dynamically adapts to system theme changes (light/dark).
* **Icon Size:**
  * You can select icon sizes: **32px**, **40px**, **48px**, or **64px**. The panel resizes instantly.
* **Keep on Top:**
  * When enabled, the panel is always visible on top of other windows and reserves desktop space. When disabled, the panel behaves like a normal window and can be overlapped.
* **Interface Language:**
  * Allows you to switch the application language (*English*, *Русский*, *Deutsch*). The changes apply instantly to all elements, including context menus and system tray. On first launch, the language is chosen automatically based on Windows settings.
* **Show "+" button on the panel:**
  * Allows you to hide the add button on the dock panel for a clean, minimalist look (enabled by default on first launch).
* **Start with Windows:**
  * Adds the application to Windows startup folder to launch the panel automatically when you log in.
* **Auto-Hide:**
  * When enabled, the panel smoothly slides out of the screen when it loses mouse focus, leaving a thin 2px trigger strip. Hovering the mouse over this strip instantly brings the panel back. The AppBar space reservation is temporarily disabled while the panel is hidden, allowing other windows to occupy the full screen. The panel will not hide if a context menu is open.
* **Hover Zoom Effect:**
  * Enables a smooth wave-like icon scaling effect on mouse hover, similar to macOS dock. This makes the selected shortcut stand out and easier to click.
* **Show Indicators for Running Programs:**
  * Displays small dots of the accent color under the icons of currently active programs.
  * Clicking an active program icon will focus and bring its existing window to the foreground instead of launching a new duplicate process.

---

## 6. Recycle Bin Integration
In the panel settings, you can enable the option **"Show Recycle Bin on the panel"**.

* **Dynamic State:** The Recycle Bin icon changes in real-time depending on whether it is empty or contains deleted files.
* **Empty Recycle Bin:** Right-click the Recycle Bin icon on the panel and select **"Empty Recycle Bin"**.
* **Open Recycle Bin:** Left-click the Recycle Bin icon to open it in Windows File Explorer.
* *Note:* The Recycle Bin is always pinned to the very end of the panel; it cannot be dragged to the middle.

---

## 7. System Tray Integration
When ShortcutDock is running, its icon appears in the system tray (near the Windows clock).

* **Quick Show/Hide:** Double-click the tray icon to quickly hide the panel (or restore it).
* **Tray Context Menu:** Right-click the tray icon to open Settings or exit the application completely ("Exit").

---

## 8. Where Settings are Stored (Portability)
All user settings, added shortcuts, and cache icons are stored in your user profile directory:
\`%AppData%\\ShortcutDock\\\` (typically \`C:\\Users\\Username\\AppData\\Roaming\\ShortcutDock\`).

* **Configuration File:** \`settings.json\` — contains settings for positions, sizes, and the list of shortcuts.
* **Cache Folder:** \`Cache\\\` — stores extracted PNG icons for fast rendering on startup.
* All paths within the configuration file are saved in a portable format (using the \`%AppData%\` variable), allowing you to copy settings to another computer easily.

---

## 9. Troubleshooting

### Application icons display incorrectly
* Try removing the shortcut and adding the application again, or manually replace the icon using the context menu -> "Change Icon...".

### The panel overlaps the Windows Taskbar
* Change the panel position in settings. For example, if the Windows taskbar is at the bottom, pin ShortcutDock to the top, left, or right edge to avoid interface overlap.

### Autostart does not work
* Make sure you haven't moved the \`ShortcutDock.exe\` file after enabling autostart. If you did, simply disable and re-enable autostart in the settings to update the path in the Windows registry.
`,
    guide_ru: `[ English ](GUIDE.md) • [ Русский ](GUIDE_RU.md) • [ Deutsch ](GUIDE_DE.md)

# Руководство пользователя ShortcutDock


Добро пожаловать в **ShortcutDock** — современную и функциональную док-панель для быстрого запуска приложений, папок и управления системными элементами на Windows 11 и 10.

Это руководство поможет вам быстро разобраться во всех функциях приложения и настроить его под свои нужды.

---

## Содержание
1. [Системные требования](#1-системные-требования)
2. [Установка и первый запуск](#2-установка-и-первый-запуск)
3. [Добавление ярлыков на панель](#3-добавление-ярлыков-на-панель)
4. [Управление ярлыками и их сортировка](#4-управление-ярлыками-и-их-сортировка)
5. [Настройка внешнего вида и эффектов](#5-настройка-внешнего-вида-и-эффектов)
6. [Интеграция с Корзиной](#6-интеграция-с-корзиной)
7. [Работа через системный трей](#7-работа-через-системный-трей)
8. [Где хранятся настройки (Портативность)](#8-где-хранятся-настройки-портативность)
9. [Решение возможных проблем](#9-решение-возможных-проблем)

---

## 1. Системные требования
* **Операционная система:** Windows 10 (билд 19041 и выше) или Windows 11.
* **Архитектура:** x64.
* **Дополнительно:** Для легковесной версии (Lightweight) требуется установленный компонент [.NET 10 Desktop Runtime](https://dotnet.microsoft.com/download/dotnet/10.0). Автономная версия (Self-Contained) работает без дополнительных библиотек.

---

## 2. Установка и первый запуск
Приложение поставляется как единый файл \`ShortcutDock.exe\` и не требует полноценной установки:

> [!TIP]
> **Получить приложение:**  
> 📥 **[Скачать последнюю версию программы со страницы Релизов GitHub](https://github.com/Almanex/ShortcutDock/releases)**

1. Поместите файл \`ShortcutDock.exe\` в любую удобную папку на компьютере (например, \`C:\\Program Files\\ShortcutDock\` или вашу персональную папку).
2. Дважды кликните по файлу \`ShortcutDock.exe\` для запуска.
3. При первом запуске появится пустая полупрозрачная панель с кнопкой \`+\` в нижней части экрана.

> [!IMPORTANT]
> **Предупреждение Windows Defender SmartScreen:**  
> Поскольку исполняемый файл приложения не подписан платной коммерческой цифровой подписью разработчика (что является стандартом для бесплатных open-source проектов), при первом запуске фильтр SmartScreen в Microsoft Defender может заблокировать запуск, выведя окно *«Система Windows защитила ваш компьютер»*.  
> **Как запустить приложение:** Нажмите ссылку **«Подробнее»** (в левой верхней части предупреждения), а затем — появившуюся кнопку **«Выполнить в любом случае»**. После этого Windows запомнит выбор, и приложение будет запускаться без предупреждений.

---

## 3. Добавление ярлыков на панель
Добавить новые программы, папки или диски на панель можно тремя способами:

### Способ А: Простое перетаскивание (Drag-and-Drop)
* Просто перетащите любой исполняемый файл (\`.exe\`), ярлык (\`.lnk\`), папку или целый жесткий диск прямо из проводника Windows на любое свободное место панели. ShortcutDock автоматически извлечет иконку высокого разрешения и добавит элемент.

### Способ Б: Через кнопку «+»
1. Если в настройках включена опция отображения кнопки \`+\`, кликните на неё.
2. В открывшемся окне выберите нужный файл программы или ярлык и нажмите «Открыть».

### Способ В: Через контекстное меню
* Кликните правой кнопкой мыши по пустому пространству панели и выберите **«Добавить приложение»**.

---

## 4. Управление ярлыками и их сортировка

### Смена порядка значков
* Зажмите левую кнопку мыши на любой иконке и перетащите её влево/вправо (или вверх/вниз для вертикальной панели), чтобы изменить её положение относительно других элементов. Отпустите мышь в нужном месте — порядок сохранится автоматически.

### Запуск от имени администратора
* Кликните правой кнопкой мыши (ПКМ) по нужному приложению на панели и выберите **«Запустить от имени администратора»**.

### Изменение значка (иконки)
1. Нажмите ПКМ по ярлыку и выберите **«Изменить значок...»**.
2. Выберите любое изображение в формате \`.png\` или файл иконки \`.ico\`. Панель мгновенно обновит отображение значка.

### Удаление с панели
* Нажмите ПКМ по ярлыку на панели и выберите **«Удалить с панели»**. (Сам файл программы на диске при этом не пострадает).

---

## 5. Настройка внешнего вида и эффектов
Чтобы открыть окно настроек, кликните ПКМ по свободному месту на панели или по иконке приложения в трее и выберите **«Настройки панели»**.

* **Положение на экране:** 
  * *Снизу* или *Сверху* (панель будет горизонтальной).
  * *Слева* или *Справа* (панель автоматически переключится в вертикальный режим).
  * При перемещении к краям экрана панель автоматически зарезервирует место на Рабочем столе (технология AppBar) — другие окна не будут перекрывать её при разворачивании на весь экран.
* **Эффект размытия:**
  * *Нет:* Полностью прозрачный фон (на экране отображаются только значки, парящие над обоями).
  * *Mica:* Фирменный полупрозрачный эффект Windows 11, подстраивающийся под цвет обоев. Автоматически переключается между темной и светлой палитрой в зависимости от системной темы Windows.
  * *Acrylic:* Эффект матового полупрозрачного стекла. Также динамически реагирует на смену системного оформления (светлое/темное).
* **Размер значков:**
  * Вы можете выбрать размер значков: **32px**, **40px**, **48px** или **64px**. Панель изменит свои размеры мгновенно под выбранный пресет.
* **Поверх всех окон (Keep on Top):**
  * Если включено, панель всегда видна на экране и резервирует под себя место. Если отключено, панель ведет себя как обычное окно и может перекрываться другими программами.
* **Язык интерфейса:**
  * Позволяет переключать язык приложения (доступны *English*, *Русский*, *Deutsch*). Смена языка происходит мгновенно для всех элементов интерфейса, включая трей и контекстные меню. При первом запуске язык выбирается автоматически на основе настроек Windows.
* **Показывать кнопку «+» на панели:**
  * Позволяет скрыть кнопку добавления на док-панели для создания чистого и минималистичного вида (по умолчанию включено при первом запуске).
* **Запускать вместе с Windows:**
  * Добавляет приложение в системный автозапуск, чтобы панель появлялась на экране сразу при старте компьютера.
* **Автоматически скрывать панель (Auto-Hide):**
  * При включении панель плавно уезжает за границы экрана при потере фокуса мыши, оставляя тонкую полоску в 2px. Наведение мыши на эту полоску мгновенно возвращает панель. При этом резервирование рабочего пространства AppBar временно отключается, давая открытым окнам занять весь экран. Если у вас открыто контекстное меню на панели, док не будет скрываться.
* **Эффект увеличения при наведении (Hover Zoom):**
  * Включает плавное волновое масштабирование значков при наведении мыши в стиле дока macOS. Это делает выделенный ярлык заметным и облегчает клик по нему.
* **Индикаторы запущенных программ:**
  * Отображает маленькие точки акцентного цвета под иконками активных в данный момент программ.
  * При повторном клике по значку запущенного приложения док сфокусирует и выведет его существующее окно на передний план вместо запуска новой копии.

---

## 6. Интеграция с Корзиной
В настройках панели вы можете включить опцию **«Отображать Корзину на панели»**.

* **Динамическое состояние:** Иконка корзины меняется в реальном времени в зависимости от того, пуста она или содержит удаленные файлы.
* **Очистка корзины:** Нажмите ПКМ по значку Корзины на панели и выберите **«Очистить корзину»**.
* **Открытие корзины:** Нажмите ЛКМ по значку Корзины, чтобы открыть её стандартное окно проводника.
* *Примечание:* Корзина всегда автоматически закрепляется в самом конце панели, её нельзя случайно переместить в середину.

---

## 7. Работа через системный трей
Когда панель ShortcutDock запущена, в системном трее (рядом с часами Windows) появляется иконка приложения.

* **Быстрое скрытие/показ панели:** Кликните дважды ЛКМ по иконке в трее, чтобы мгновенно скрыть панель с экрана (или показать её обратно).
* **Контекстное меню трея:** Кликнив ПКМ, можно открыть настройки или полностью завершить работу приложения («Выход»).

---

## 8. Где хранятся настройки (Портативность)
Все пользовательские настройки, добавленные ярлыки и кэш иконок хранятся в вашей системной папке пользователя:
\`%AppData%\\ShortcutDock\\\` (обычно это \`C:\\Users\\Имя_Пользователя\\AppData\\Roaming\\ShortcutDock\`).

* **Файл конфигурации:** \`settings.json\` — содержит настройки расположения, размеров и перечень ваших ярлыков.
* **Папка кэша:** \`Cache\\\` — здесь хранятся извлеченные PNG-иконки для быстрой отрисовки панели при старте.
* Все пути к файлам внутри конфигурационного файла сохраняются в портативном виде (с использованием переменной \`%AppData%\`), что позволяет переносить настройки на другие компьютеры.

---

## 9. Решение возможных проблем

### Значки приложений отображаются некорректно
* Попробуйте удалить иконку с панели и добавить приложение заново, либо вручную замените значок через контекстное меню ярлыка -> «Изменить значок...».

### Панель перекрывает панель задач Windows
* Измените положение панели в настройках. Например, если панель задач Windows находится снизу, закрепите ShortcutDock сверху, слева или справа во избежание наложения интерфейсов.

### Автозапуск не работает
* Убедитесь, что вы не перемещали файл \`ShortcutDock.exe\` после того, как включили тумблер автозапуска в настройках. Если переместили, просто выключите и включите автозапуск заново, чтобы обновить путь в реестре Windows.
`,
    guide_de: `[ English ](GUIDE.md) • [ Русский ](GUIDE_RU.md) • [ Deutsch ](GUIDE_DE.md)

# ShortcutDock Benutzerhandbuch

Willkommen bei **ShortcutDock** — einer modernen und funktionalen Schnellstartleiste zur Organisation Ihrer Anwendungen, Ordner und zur Verwaltung von Systemelementen unter Windows 10 und 11.

Dieses Handbuch hilft Ihnen, sich schnell mit allen Funktionen der Anwendung vertraut zu machen und sie an Ihre Bedürfnisse anzupassen.

---

## Inhaltsverzeichnis
1. [Systemanforderungen](#1-systemanforderungen)
2. [Installation und erster Start](#2-installation-und-erster-start)
3. [Hinzufügen von Verknüpfungen zur Leiste](#3-hinzugügen-von-verknüpfungen-zur-leiste)
4. [Verknüpfungen verwalten und sortieren](#4-verknüpfungen-verwalten-und-sortieren)
5. [Einstellung von Aussehen und Effekten](#5-einstellung-von-aussehen-und-effekten)
6. [Integration des Papierkorbs](#6-integration-des-papierkorbs)
7. [Arbeiten über das System-Tray](#7-arbeiten-über-das-system-tray)
8. [Speicherort der Einstellungen (Portabilität)](#8-speicherort-der-einstellungen-portabilität)
9. [Problembehandlung](#9-problembehandlung)

---

## 1. Systemanforderungen
* **Betriebssystem:** Windows 10 (Build 19041 und höher) oder Windows 11.
* **Architektur:** x64.
* **Optional:** Für die Leichtgewichts-Version (Lightweight) ist die Installation der [.NET 10 Desktop-Laufzeitumgebung](https://dotnet.microsoft.com/download/dotnet/10.0) (oder höher) erforderlich. Die eigenständige Version (Self-Contained) läuft ohne zusätzliche Bibliotheken.

---

## 2. Installation und erster Start
Die Anwendung wird als einzelne Datei \`ShortcutDock.exe\` geliefert und erfordert keine vollständige Installation:

> [!TIP]
> **Holen Sie sich die Anwendung:**  
> 📥 **[Laden Sie die neueste Version von der GitHub Releases-Seite herunter](https://github.com/Almanex/ShortcutDock/releases)**

1. Legen Sie die Datei \`ShortcutDock.exe\` in einen beliebigen Ordner auf Ihrem Computer (z. B. \`C:\\Program Files\\ShortcutDock\` oder Ihren persönlichen Benutzerordner).
2. Doppelklicken Sie auf die Datei \`ShortcutDock.exe\`, um sie zu starten.
3. Beim ersten Start erscheint eine leere, halbtransparente Leiste mit einer \`+\`-Schaltfläche am unteren Bildschirmrand.

> [!IMPORTANT]
> **Windows Defender SmartScreen-Warnung:**  
> Da die ausführbare Datei der Anwendung nicht mit einem kostenpflichtigen digitalen Zertifikat des Entwicklers signiert ist (was bei kostenlosen Open-Source-Projekten üblich ist), blockiert Windows Defender SmartScreen möglicherweise den Start beim ersten Ausführen und zeigt ein Popup *"Der Computer wurde durch Windows geschützt"* an.  
> **So starten Sie die Anwendung:** Klicken Sie auf den Link **„Weitere Informationen“** (oben links im Warnungs-Popup) und dann auf die Schaltfläche **„Trotzdem ausführen“**. Windows merkt sich Ihre Entscheidung und die Warnung wird bei zukünftigen Starts nicht mehr angezeigt.

---

## 3. Hinzufügen von Verknüpfungen zur Leiste
Sie können neue Programme, Ordner oder Laufwerke auf drei Arten zur Leiste hinzufügen:

### Methode A: Drag-and-Drop
* Ziehen Sie einfach eine ausführbare Datei (\`.exe\`), eine Verknüpfung (\`.lnk\`), einen Ordner oder ein ganzes Laufwerk aus dem Windows-Explorer an eine beliebige freie Stelle auf der Leiste. ShortcutDock extrahiert automatisch das hochauflösende Symbol und fügt das Element hinzu.

### Methode B: Über die „+“-Schaltfläche
1. Wenn die Option zum Anzeigen der \`+\`-Schaltfläche in den Einstellungen aktiviert ist, klicken Sie darauf.
2. Wählen Sie im geöffneten Dialogfenster die gewünschte Programmdatei oder Verknüpfung aus und klicken Sie auf „Öffnen“.

### Methode C: Über das Kontextmenü
* Klicken Sie mit der rechten Maustaste auf eine freie Stelle der Leiste und wählen Sie **„Anwendung hinzufügen“**.

---

## 4. Verknüpfungen verwalten und sortieren

### Ändern der Symbolreihenfolge
* Halten Sie die linke Maustaste auf einem Symbol gedrückt und ziehen Sie es nach links/rechts (oder bei einer vertikalen Leiste nach oben/unten), um seine Position im Verhältnis zu anderen Elementen zu ändern. Lassen Sie die Maustaste an der gewünschten Stelle los — die Reihenfolge wird automatisch gespeichert.

### Als Administrator ausführen
* Klicken Sie mit der rechten Maustaste (RMB) auf die gewünschte Anwendung auf der Leiste und wählen Sie **„Als Administrator ausführen“**.

### Symbol (Icon) ändern
1. Klicken Sie mit der rechten Maustaste auf die Verknüpfung und wählen Sie **„Symbol ändern...“**.
2. Wählen Sie ein beliebiges \`.png\`-Bild oder eine \`.ico\`-Symboldatei aus. Die Leiste aktualisiert die Anzeige des Symbols sofort.

### Von der Leiste entfernen
* Klicken Sie mit der rechten Maustaste auf die Verknüpfung auf der Leiste und wählen Sie **„Von der Leiste entfernen“** (die Programmdatei auf der Festplatte wird dabei nicht gelöscht).

---

## 5. Einstellung von Aussehen und Effekten
Um das Einstellungsfenster zu öffnen, klicken Sie mit der rechten Maustaste auf eine freie Stelle auf der Leiste oder auf das Anwendungssymbol im System-Tray und wählen Sie **„Leisten-Einstellungen“**.

* **Bildschirmposition:** 
  * *Unten* oder *Oben* (horizontale Leiste).
  * *Links* oder *Rechts* (die Leiste wechselt automatisch in den vertikalen Modus).
  * Wenn die Leiste an die Ränder des Bildschirms verschoben wird, reserviert sie automatisch Platz auf dem Desktop (AppBar-Technologie) — andere Fenster überdecken sie beim Maximieren nicht.
* **Weichzeichnungseffekt:**
  * *Kein:* Völlig transparenter Hintergrund (nur Symbole schweben über dem Hintergrundbild).
  * *Mica:* Der typische halbtransparente Windows 11-Effekt, der sich an die Farbe Ihres Hintergrundbilds anpasst. Wechselt automatisch zwischen dunklen und hellen Designs je nach Systemeinstellung.
  * *Acrylic:* Transluzenter Milchglaseffekt. Reagiert ebenfalls dynamisch auf Änderungen des Systemdesigns (hell/dunkel).
* **Symbolgröße:**
  * Sie können die Symbolgröße wählen: **32px**, **40px**, **48px** oder **64px**. Die Leiste ändert ihre Größe sofort.
* **Im Vordergrund (Keep on Top):**
  * Wenn aktiviert, ist die Leiste immer sichtbar und reserviert Platz auf dem Desktop. Wenn deaktiviert, verhält sich die Leiste wie ein normales Fenster und kann von anderen Programmen überdeckt werden.
* **Oberflächensprache:**
  * Ermöglicht das Umschalten der Anwendungssprache (*English*, *Русский*, *Deutsch*). Die Änderungen werden sofort auf alle Elemente angewendet, einschließlich Kontextmenüs und System-Tray. Beim ersten Start wird die Sprache automatisch basierend auf den Windows-Einstellungen ausgewählt.
* **„+“-Schaltfläche auf der Leiste anzeigen:**
  * Ermöglicht das Ausblenden der Hinzufügen-Schaltfläche auf der Leiste für ein klares, minimalistisches Erscheinungsbild (standardmäßig beim ersten Start aktiviert).
* **Mit Windows starten:**
  * Fügt die Anwendung zum Windows-Autostart hinzu, sodass die Leiste direkt beim Start des Computers angezeigt wird.
* **Automatisch ausblenden (Auto-Hide):**
  * Wenn aktiviert, gleitet die Leiste reibungslos aus dem Bildschirm, wenn sie den Mausfokus verliert, und hinterlässt einen dünnen 2-px-Auslöserstreifen. Wenn Sie die Maus über diesen Streifen bewegen, kehrt die Leiste sofort zurück. Die AppBar-Platzreservierung wird vorübergehend deaktiviert, während die Leiste ausgeblendet ist, sodass andere Fenster den gesamten Bildschirm einnehmen können. Die Leiste wird nicht ausgeblendet, wenn ein Kontextmenü geöffnet ist.
* **Hover-Zoom-Effekt:**
  * Aktiviert einen wellenartigen Skalierungseffekt der Symbole beim Bewegen der Maus darüber, ähnlich wie beim macOS-Dock. Dies hebt die ausgewählte Verknüpfung hervor und erleichtert das Anklicken.
* **Indikatoren für laufende Programme:**
  * Zeigt kleine Punkte in der Akzentfarbe unter den Symbolen der derzeit aktiven Programme an.
  * Durch Klicken auf ein aktives Programmsymbol wird das vorhandene Fenster fokussiert und in den Vordergrund gebracht, anstatt einen neuen doppelten Prozess zu starten.

---

## 6. Integration des Papierkorbs
In den Leisten-Einstellungen können Sie die Option **„Papierkorb auf der Leiste anzeigen“** aktivieren.

* **Dynamischer Status:** Das Papierkorbsymbol ändert sich in Echtzeit, je nachdem, ob er leer ist oder gelöschte Dateien enthält.
* **Papierkorb leeren:** Klicken Sie mit der rechten Maustaste auf das Papierkorbsymbol auf der Leiste und wählen Sie **„Papierkorb leeren“**.
* **Papierkorb openen:** Klicken Sie mit der linken Maustaste auf das Papierkorbsymbol, um ihn im Windows-Explorer zu öffnen.
* *Hinweis:* Der Papierkorb ist immer am Ende der Leiste angeheftet; er kann nicht in die Mitte gezogen werden.

---

## 7. Arbeiten über das System-Tray
Wenn ShortcutDock ausgeführt wird, wird sein Symbol im System-Tray (neben der Windows-Uhr) angezeigt.

* **Schnelles Ausblenden/Einblenden:** Doppelklicken Sie auf das Tray-Symbol, um die Leiste schnell auszublenden (oder wiederherzustellen).
* **Tray-Kontextmenü:** Klicken Sie mit der rechten Maustaste auf das Tray-Symbol, um die Einstellungen zu öffnen oder die Anwendung vollständig zu beenden („Beenden“).

---

## 8. Speicherort der Einstellungen (Portabilität)
Alle Benutzereinstellungen, hinzugefügten Verknüpfungen und Symbol-Caches werden in Ihrem Benutzerprofilverzeichnis gespeichert:
\`%AppData%\\ShortcutDock\\\` (normalerweise \`C:\\Users\\Benutzername\\AppData\\Roaming\\ShortcutDock\`).

* **Konfigurationsdatei:** \`settings.json\` — enthält Einstellungen für Positionen, Größen und die Liste der Verknüpfungen.
* **Cache-Ordner:** \`Cache\\\` — speichert extrahierte PNG-Symbole für schnelles Rendern beim Start.
* Alle Pfade in der Konfigurationsdatei werden in einem portablen Format gespeichert (unter Verwendung der Variable \`%AppData%\`), sodass Sie Einstellungen problemlos auf einen anderen Computer kopieren können.

---

## 9. Problembehandlung

### Anwendungssymbole werden nicht korrekt angezeigt
* Versuchen Sie, die Verknüpfung zu entfernen und die Anwendung erneut hinzuzufügen, oder ersetzen Sie das Symbol manuell über das Kontextmenü -> „Symbol ändern...“.

### Die Leiste überlappt die Windows-Taskleiste
* Ändern Sie die Position der Leiste in den Einstellungen. Wenn sich beispielsweise die Windows-Taskleiste unten befindet, heften Sie ShortcutDock an den oberen, linken oder rechten Rand an, um Interface-Überlappungen zu vermeiden.

### Autostart funktioniert nicht
* Stellen Sie sicher, dass Sie die Datei \`ShortcutDock.exe\` nach dem Aktivieren des Autostarts nicht verschoben haben. Wenn Sie dies getan haben, deaktivieren und aktivieren Sie den Autostart einfach erneut in den Einstellungen, um den Pfad in der Windows-Registrierung zu aktualisieren.
`
  },
  "shelter-fork": {
    title: "Shelter Fork",
    subtitle: "A security-focused sandbox app fork for Android devices.",
    category: "Security",
    lang: "Java",
    platform: "Android",
    stars: "0",
    license: "GPL-3.0",
    github: "https://github.com/Almanex/Shelter-fork",
    image: "/images/projects/shelter-fork.png",
    readme: `[ English ](README.md) • [ Русский ](README_RU.md) • [ Deutsch ](README_DE.md)

# Shelter Fork

**Security-focused application sandbox fork for Android devices**

Shelter is an open-source app that leverages the Work Profile feature of Android to provide an isolated space where you can clone or install apps.

## Android 16 Optimizations

This fork includes specific adaptations for Android 16 (API 36) and Pixel 9a devices:
- Edge-to-Edge UI: Fully compliant with Android 16 mandatory edge-to-edge requirements.
- Material You: Dynamic color styling and themes.
- Navigation: Native Predictive Back gesture navigation animations.
- Display compatibility: Layout fine-tuning for Pixel 9a displays.

## Key Features

- App Isolation: Install apps inside a work profile to prevent sandbox leaks.
- Freeze Apps: Suspend background activity of isolated apps when not actively in use.
- Multi-Account: Run two separate copies of the same application on a single device.
- Unprivileged API: Operates safely without root or ADB privilege abuse.

## Installation & Uninstall

To install, build from source using Android 16 SDK.
To uninstall, delete the Work Profile in Android Settings first, then uninstall the Shelter app normally.

## License

GPL-3.0`,
    readme_ru: `[ English ](README.md) • [ Русский ](README_RU.md) • [ Deutsch ](README_DE.md)

# Shelter Fork

**Форк изолированной песочницы приложений для Android с фокусом на безопасности**

Shelter — приложение с открытым исходным кодом, использующее встроенную функцию «Рабочий профиль» (Work Profile) в Android для создания изолированного пространства под установку или клонирование приложений.

## Оптимизации для Android 16

Этот форк адаптирован для Android 16 (API 36) и смартфонов Pixel 9a:
- Безрамочный интерфейс (Edge-to-Edge): Полная совместимость с обязательными требованиями Android 16.
- Дизайн Material You: Адаптивная палитра цветов под обои системы.
- Улучшенная навигация: Поддержка плавных жестов назад (Predictive Back).
- Совместимость с экранами: Оптимизация верстки под дисплеи Pixel 9a.

## Основные возможности

- Изоляция приложений: Установка приложений в отдельный рабочий профиль для защиты личных данных.
- Заморозка программ: Приостановка фоновой активности изолированных приложений.
- Два аккаунта: Запуск двух независимых копий одного приложения на устройстве.
- Безопасность: Работает через стандартные API без UAC/root/ADB привилегий.

## Удаление приложения

Чтобы полностью удалить Shelter, сначала удалите рабочий профиль в Настройках системы -> Аккаунты, а затем удалите само приложение Shelter как обычно.

## Лицензия

GPL-3.0`,
    readme_de: `[ English ](README.md) • [ Русский ](README_RU.md) • [ Deutsch ](README_DE.md)

# Shelter Fork

**Sicherheitsorientierter Anwendungs-Sandbox-Fork für Android-Geräte**

Shelter ist eine Open-Source-App, die das Work-Profil-Feature von Android nutzt, um einen isolierten Bereich bereitzustellen, in dem Apps installiert oder geklont werden können.

## Android 16 Optimierungen

Dieser Fork enthält spezifische Anpassungen für Android 16 (API 36) und Pixel 9a Geräte:
- Edge-to-Edge UI: Volle Einhaltung der neuen Design-Richtlinien.
- Material You: Dynamische Farbthemen basierend auf dem System-Hintergrundbild.
- Navigation: Unterstützung der Predictive Back Navigation für flüssige Zurück-Gesten.
- Display-Kompatibilität: Layout-Anpassungen für Pixel 9a Displays.

## Hauptfunktionen

- App-Isolation: Apps im Arbeitsprofil installieren, um Datenabfluss zu verhindern.
- Apps einfrieren: Pausiert Hintergrundaktivitäten isolierter Apps bei Nichtgebrauch.
- Multi-Account: Führen Sie zwei Kopien derselben App auf einem Gerät aus.
- Keine Root-Rechte: Nutzt sichere Standard-APIs ohne Root- oder ADB-Eingriffe.

## Deinstallation

Um Shelter zu deinstallieren, löschen Sie zuerst das Arbeitsprofil in den Android-Einstellungen und deinstallieren Sie dann die Shelter-App.

## Lizenz

GPL-3.0`
  }
};
if (typeof window !== 'undefined') {
  window.PROJECTS_DATA = PROJECTS_DATA;
}
