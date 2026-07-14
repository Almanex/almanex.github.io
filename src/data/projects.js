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
`,
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

## System Architecture

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 250" style="background:var(--bar); border:2px solid var(--ink); border-radius:12px; margin: 24px 0; box-shadow: 4px 4px 0 var(--ink); width: 100%; max-width: 800px; display: block;">
  <style>
    .node-rect { fill: var(--surface); stroke: var(--ink); stroke-width: 2px; }
    .node-text { font-family: var(--font-mono); font-size: 13px; font-weight: bold; fill: var(--ink); text-anchor: middle; }
    .node-sub { font-family: var(--font-body); font-size: 11px; fill: var(--ink); opacity: 0.8; text-anchor: middle; }
    .arrow-line { stroke: var(--ink); stroke-width: 2px; fill: none; stroke-dasharray: 4; }
    .arrow-head { fill: var(--ink); }
    .center-node { fill: var(--green); }
    .accent-node { fill: var(--cyan); }
  </style>

  <defs>
    <marker id="arrow-right" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" class="arrow-head" />
    </marker>
    <marker id="arrow-left" viewBox="0 0 10 10" refX="4" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 10 0 L 0 5 L 10 10 z" class="arrow-head" />
    </marker>
  </defs>

  <rect x="50" y="50" width="180" height="110" rx="8" class="node-rect" />
  <text x="140" y="90" class="node-text">LOCAL PC</text>
  <text x="140" y="115" class="node-sub">App Files &amp; Folders</text>
  <text x="140" y="135" class="node-sub">Windows Registry</text>

  <path d="M 230 105 L 300 105" class="arrow-line" marker-end="url(#arrow-right)" marker-start="url(#arrow-left)" />

  <rect x="310" y="30" width="180" height="150" rx="8" class="node-rect center-node" style="fill: var(--green); opacity: 0.9;" />
  <text x="400" y="75" class="node-text" style="fill: #111212;">PORTABLE APP SYNC</text>
  <text x="400" y="100" class="node-sub" style="fill: #111212; font-weight: bold;">(PAS Engine)</text>
  <text x="400" y="125" class="node-sub" style="fill: #111212;">• Path Translation</text>
  <text x="400" y="145" class="node-sub" style="fill: #111212;">• Reg Export/Import</text>
  <text x="400" y="165" class="node-sub" style="fill: #111212;">• Smart Sync Logic</text>

  <path d="M 490 105 L 560 105" class="arrow-line" marker-end="url(#arrow-right)" marker-start="url(#arrow-left)" />

  <rect x="570" y="50" width="180" height="110" rx="8" class="node-rect accent-node" style="fill: var(--cyan); opacity: 0.9;" />
  <text x="660" y="90" class="node-text" style="fill: #111212;">BACKUP &amp; CLOUD</text>
  <text x="660" y="115" class="node-sub" style="fill: #111212;">Dropbox / OneDrive / etc.</text>
  <text x="660" y="135" class="node-sub" style="fill: #111212;">External Backup Drive</text>

  <text x="265" y="95" style="font-family: var(--font-mono); font-size: 10px; font-weight: bold; fill: var(--ink); text-anchor: middle;">SYNC</text>
  <text x="525" y="95" style="font-family: var(--font-mono); font-size: 10px; font-weight: bold; fill: var(--ink); text-anchor: middle;">SYNC</text>
</svg>

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

## Архитектура системы

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 250" style="background:var(--bar); border:2px solid var(--ink); border-radius:12px; margin: 24px 0; box-shadow: 4px 4px 0 var(--ink); width: 100%; max-width: 800px; display: block;">
  <style>
    .node-rect { fill: var(--surface); stroke: var(--ink); stroke-width: 2px; }
    .node-text { font-family: var(--font-mono); font-size: 13px; font-weight: bold; fill: var(--ink); text-anchor: middle; }
    .node-sub { font-family: var(--font-body); font-size: 11px; fill: var(--ink); opacity: 0.8; text-anchor: middle; }
    .arrow-line { stroke: var(--ink); stroke-width: 2px; fill: none; stroke-dasharray: 4; }
    .arrow-head { fill: var(--ink); }
    .center-node { fill: var(--green); }
    .accent-node { fill: var(--cyan); }
  </style>

  <defs>
    <marker id="arrow-right" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" class="arrow-head" />
    </marker>
    <marker id="arrow-left" viewBox="0 0 10 10" refX="4" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 10 0 L 0 5 L 10 10 z" class="arrow-head" />
    </marker>
  </defs>

  <rect x="50" y="50" width="180" height="110" rx="8" class="node-rect" />
  <text x="140" y="90" class="node-text">LOCAL PC</text>
  <text x="140" y="115" class="node-sub">App Files &amp; Folders</text>
  <text x="140" y="135" class="node-sub">Windows Registry</text>

  <path d="M 230 105 L 300 105" class="arrow-line" marker-end="url(#arrow-right)" marker-start="url(#arrow-left)" />

  <rect x="310" y="30" width="180" height="150" rx="8" class="node-rect center-node" style="fill: var(--green); opacity: 0.9;" />
  <text x="400" y="75" class="node-text" style="fill: #111212;">PORTABLE APP SYNC</text>
  <text x="400" y="100" class="node-sub" style="fill: #111212; font-weight: bold;">(PAS Engine)</text>
  <text x="400" y="125" class="node-sub" style="fill: #111212;">• Path Translation</text>
  <text x="400" y="145" class="node-sub" style="fill: #111212;">• Reg Export/Import</text>
  <text x="400" y="165" class="node-sub" style="fill: #111212;">• Smart Sync Logic</text>

  <path d="M 490 105 L 560 105" class="arrow-line" marker-end="url(#arrow-right)" marker-start="url(#arrow-left)" />

  <rect x="570" y="50" width="180" height="110" rx="8" class="node-rect accent-node" style="fill: var(--cyan); opacity: 0.9;" />
  <text x="660" y="90" class="node-text" style="fill: #111212;">BACKUP &amp; CLOUD</text>
  <text x="660" y="115" class="node-sub" style="fill: #111212;">Dropbox / OneDrive / etc.</text>
  <text x="660" y="135" class="node-sub" style="fill: #111212;">External Backup Drive</text>

  <text x="265" y="95" style="font-family: var(--font-mono); font-size: 10px; font-weight: bold; fill: var(--ink); text-anchor: middle;">SYNC</text>
  <text x="525" y="95" style="font-family: var(--font-mono); font-size: 10px; font-weight: bold; fill: var(--ink); text-anchor: middle;">SYNC</text>
</svg>

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
- **Intelligente Filterung** indiziert standardmäßig nur Benutzeranwendungen

## Systemarchitektur

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 250" style="background:var(--bar); border:2px solid var(--ink); border-radius:12px; margin: 24px 0; box-shadow: 4px 4px 0 var(--ink); width: 100%; max-width: 800px; display: block;">
  <style>
    .node-rect { fill: var(--surface); stroke: var(--ink); stroke-width: 2px; }
    .node-text { font-family: var(--font-mono); font-size: 13px; font-weight: bold; fill: var(--ink); text-anchor: middle; }
    .node-sub { font-family: var(--font-body); font-size: 11px; fill: var(--ink); opacity: 0.8; text-anchor: middle; }
    .arrow-line { stroke: var(--ink); stroke-width: 2px; fill: none; stroke-dasharray: 4; }
    .arrow-head { fill: var(--ink); }
    .center-node { fill: var(--green); }
    .accent-node { fill: var(--cyan); }
  </style>

  <defs>
    <marker id="arrow-right" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" class="arrow-head" />
    </marker>
    <marker id="arrow-left" viewBox="0 0 10 10" refX="4" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 10 0 L 0 5 L 10 10 z" class="arrow-head" />
    </marker>
  </defs>

  <rect x="50" y="50" width="180" height="110" rx="8" class="node-rect" />
  <text x="140" y="90" class="node-text">LOCAL PC</text>
  <text x="140" y="115" class="node-sub">App Files &amp; Folders</text>
  <text x="140" y="135" class="node-sub">Windows Registry</text>

  <path d="M 230 105 L 300 105" class="arrow-line" marker-end="url(#arrow-right)" marker-start="url(#arrow-left)" />

  <rect x="310" y="30" width="180" height="150" rx="8" class="node-rect center-node" style="fill: var(--green); opacity: 0.9;" />
  <text x="400" y="75" class="node-text" style="fill: #111212;">PORTABLE APP SYNC</text>
  <text x="400" y="100" class="node-sub" style="fill: #111212; font-weight: bold;">(PAS Engine)</text>
  <text x="400" y="125" class="node-sub" style="fill: #111212;">• Path Translation</text>
  <text x="400" y="145" class="node-sub" style="fill: #111212;">• Reg Export/Import</text>
  <text x="400" y="165" class="node-sub" style="fill: #111212;">• Smart Sync Logic</text>

  <path d="M 490 105 L 560 105" class="arrow-line" marker-end="url(#arrow-right)" marker-start="url(#arrow-left)" />

  <rect x="570" y="50" width="180" height="110" rx="8" class="node-rect accent-node" style="fill: var(--cyan); opacity: 0.9;" />
  <text x="660" y="90" class="node-text" style="fill: #111212;">BACKUP &amp; CLOUD</text>
  <text x="660" y="115" class="node-sub" style="fill: #111212;">Dropbox / OneDrive / etc.</text>
  <text x="660" y="135" class="node-sub" style="fill: #111212;">External Backup Drive</text>

  <text x="265" y="95" style="font-family: var(--font-mono); font-size: 10px; font-weight: bold; fill: var(--ink); text-anchor: middle;">SYNC</text>
  <text x="525" y="95" style="font-family: var(--font-mono); font-size: 10px; font-weight: bold; fill: var(--ink); text-anchor: middle;">SYNC</text>
</svg>
 (mit der Option, versteckte Systemkomponenten anzuzeigen)
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
`,
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
`,
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

Dieses Projekt lizenziert unter der MIT-Lizenz.`,
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
`,
  },
  "icoboo": {
    title: "icoboo",
    subtitle: "A native WinUI 3 icon generator and converter supporting 3 languages (English, Russian, German).",
    category: "Utility",
    lang: "C#",
    platform: "Windows 10/11",
    stars: "0",
    license: "MIT",
    github: "https://github.com/Almanex/icoboo",
    image: "/images/projects/icoboo.png",
    readme: `[ English ](README.md) • [ Русский ](docs/README_RU.md) • [ Deutsch ](docs/README_DE.md)

# IconForge

*Native icon generator for Windows 11*

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Platform: Windows](https://img.shields.io/badge/Platform-Windows%2010%20%2F%2011-blue)](https://www.microsoft.com/windows)
[![Framework: .NET 8.0](https://img.shields.io/badge/Framework-.NET%208.0-blue)](https://dotnet.microsoft.com/download)
[![UI: WinUI 3](https://img.shields.io/badge/UI-WinUI%203-blue)](https://learn.microsoft.com/windows/apps/winui/winui3/)
[![Share](https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Fgithub.com%2FAlmanex%2Ficoboo)](https://twitter.com/intent/tweet?text=Check%20out%20IconForge%20-%20A%20native%20icon%20generator%20for%20Windows%2011!&url=https%3A%2F%2Fgithub.com%2FAlmanex%2Ficoboo)

<p align="center">
  <img src="/images/projects/icoboo/cover.png" alt="IconForge main" width="49%" />
  <img src="/images/projects/icoboo/editor.png" alt="IconForge settings" width="49%" />
</p>

---

IconForge is a lightweight native Windows application developed on the WinUI 3 (Windows App SDK) framework and C#, supporting 3 languages (English, Russian, German) out of the box. It is designed for batch generation of icon sets for Windows (\`.ico\`, \`Assets\`) and Android (\`Adaptive Icons\`) from a single source image in PNG or SVG format.

For a detailed walkthrough of all options and features, see the [User Guide](docs/GUIDE.md).


## Main Features

### Generating Icon Packs

* **Windows (Classic .ico):**
  * Build a multi-format \`.ico\` file containing resolutions: \`16x16\`, \`24x24\`, \`32x32\`, \`48x48\`, \`64x64\`, \`128x128\`, \`256x256\` pixels.
  * **Micro-sharpening:** For small sizes (16-48px), a special contour sharpening filter is automatically applied to prevent blurriness in Windows Explorer.
* **Windows Modern Assets (PNG):**
  * Export individual images for the manifest of modern Windows applications (\`Square44x44Logo\`, \`Square150x150Logo\`, \`StoreLogo\`) at all system scales: \`scale-100\`, \`scale-125\`, \`scale-150\`, \`scale-200\`, \`scale-400\`.
* **Android (Adaptive and Legacy Icons):**
  * Layer separation: the logo is automatically positioned inside the safe-zone (72dp) of the \`Foreground.png\` layer, and the \`Background.png\` layer is filled with the selected color or a texture file.
  * Export by project folder structure (\`mipmap-mdpi\` to \`mipmap-xxxhdpi\`).
  * Generate a round Legacy icon (\`ic_launcher.png\`) by masking and layering.
  * Export promo icon for Google Play Console in size \`512x512\` pixels.

### Modern Windows 11 Interface (UI/UX)

* Translucent Mica Alt system material (adapts to desktop wallpaper).
* Full support for Windows 11 system Dark and Light themes.
* Interactive Drag-and-Drop zone with dynamic border color changes and built-in preview for PNG/SVG files.
* Quick color swatches for choosing the background color of Android adaptive icons.

### System Integration (Shell Integration)

* **Explorer context menu:** Option to embed the "Generate icons in IconForge" item directly into the Windows Explorer menu when right-clicking a PNG/SVG file. Registration occurs locally in the \`HKEY_CURRENT_USER\` hive and does not require administrator rights (UAC).
* **Toast Notifications:** When processing is complete, the app sends a native Windows 11 toast notification with an interactive button to open the destination folder.

---

## Tech Stack

| Layer / Component | Technology | Details / Purpose |
| --- | --- | --- |
| Language | C# (.NET 8.0) | net8.0-windows target framework |
| UI Platform | WinUI 3 | Windows App SDK 2.2.0 |
| Graphics Rendering | SkiaSharp | Lanczos3 resize and filtering |
| SVG Rendering | Svg.Skia | Rendering vector graphics to raster |
| Packaging Type | Unpackaged Self-Contained | Runs without global Windows App Runtime installation |

---

## File Export Structure

After generation, the following directory structure is created in the selected destination folder:

\`\`\`text
[Destination_Folder]/
├── Windows/
│   ├── app_icon.ico
│   └── Assets/
│       ├── Square44x44Logo.scale-100.png
│       ├── Square44x44Logo.scale-200.png
│       └── ... (all assets in all scales)
└── Android/
    ├── play_store_512.png
    └── res/
        ├── mipmap-mdpi/
        │   ├── ic_launcher.png
        │   ├── ic_launcher_background.png
        │   └── ic_launcher_foreground.png
        └── mipmap-xxxhdpi/ ...
\`\`\`

---

## Getting Started

### Prerequisites

* [.NET 8.0 SDK](https://dotnet.microsoft.com/download) or later.

### Building and Running from Console

1. Clone the repository:
   \`\`\`powershell
   git clone https://github.com/Almanex/icoboo.git
   cd icoboo
   \`\`\`
2. Compile the project:
   \`\`\`powershell
   dotnet build
   \`\`\`
3. Launch the application:
   \`\`\`powershell
   dotnet run
   \`\`\`

### Publishing (Self-Contained EXE with Assets)

To generate a single executable package:
\`\`\`powershell
dotnet publish -c Release -r win-x64 --self-contained true
\`\`\`
This compilation merges assemblies into a single executable \`IconForge.exe\` and copies the \`Assets/\` folder alongside it inside the \`publish/\` directory.

> [!IMPORTANT]
> The \`Assets/\` folder **must** be kept in the same directory as \`IconForge.exe\` for the application to load UI assets and start successfully. When distributing the app, package both the executable and the \`Assets/\` directory together (e.g., in a ZIP archive).

---

## Contributing

We welcome contributions! Please open an issue or submit a pull request if you want to improve the application.

---

## Versioning

We use [SemVer](https://semver.org/) for versioning. For the versions available, see the tags on this repository.

---

## Authors

* **Almanex** - *Initial development* - [Almanex Profile](https://github.com/Almanex)

---

## License

This project is licensed under the MIT License - see the \`LICENSE\` file for details.`,
    readme_ru: `[ English ](../README.md) • [ Русский ](README_RU.md) • [ Deutsch ](README_DE.md)

# IconForge

*Нативный генератор иконок для Windows 11*

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Platform: Windows](https://img.shields.io/badge/Platform-Windows%2010%20%2F%2011-blue)](https://www.microsoft.com/windows)
[![Framework: .NET 8.0](https://img.shields.io/badge/Framework-.NET%208.0-blue)](https://dotnet.microsoft.com/download)
[![UI: WinUI 3](https://img.shields.io/badge/UI-WinUI%203-blue)](https://learn.microsoft.com/windows/apps/winui/winui3/)
[![Share](https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Fgithub.com%2FAlmanex%2Ficoboo)](https://twitter.com/intent/tweet?text=Check%20out%20IconForge%20-%20A%20native%20icon%20generator%20for%20Windows%2011!&url=https%3A%2F%2Fgithub.com%2FAlmanex%2Ficoboo)

<p align="center">
  <img src="/images/projects/icoboo/cover.png" alt="IconForge main" width="49%" />
  <img src="/images/projects/icoboo/editor.png" alt="IconForge settings" width="49%" />
</p>

---

IconForge — это легкое нативное Windows-приложение (утилита), разработанное на фреймворке WinUI 3 (Windows App SDK) и C#, с полной поддержкой 3 языков интерфейса (русский, английский, немецкий). Оно предназначено для пакетной генерации наборов иконок для Windows (\`.ico\`, \`Assets\`) и Android (\`Adaptive Icons\`) из одного исходного изображения формата PNG или SVG.

Подробное описание всех настроек и возможностей см. в [Руководстве пользователя](GUIDE_RU.md).

---

## Основные возможности

### Генерация пакетов иконок

* **Windows (Классический .ico):**
  * Сборка мультиформатного \`.ico\` файла, содержащего разрешения: \`16x16\`, \`24x24\`, \`32x32\`, \`48x48\`, \`64x64\`, \`128x128\`, \`256x256\` пикселей.
  * **Микро-шарпинг:** Для мелких размеров (16-48px) автоматически применяется специальный контурный фильтр резкости, чтобы иконка не размывалась в Проводнике Windows.
* **Windows Modern Assets (PNG):**
  * Экспорт отдельных изображений для манифеста современных Windows-приложений (\`Square44x44Logo\`, \`Square150x150Logo\`, \`StoreLogo\`) во всех системных масштабах: \`scale-100\`, \`scale-125\`, \`scale-150\`, \`scale-200\`, \`scale-400\`.
* **Android (Adaptive и Legacy Icons):**
  * Разделение слоев: логотип автоматически позиционируется внутри безопасной зоны (safe-zone 72dp) слоя \`Foreground.png\`, а слой \`Background.png\` заливается выбранным цветом или текстурным файлом.
  * Экспорт по структуре папок проекта (\`mipmap-mdpi\` до \`mipmap-xxxhdpi\`).
  * Генерация круглой Legacy-иконки (\`ic_launcher.png\`) путем маскирования и наложения слоев.
  * Экспорт промо-иконки для Google Play Console в размере \`512x512\` пикселей.

### Современный интерфейс Windows 11 (UI/UX)

* Использование системного полупрозрачного материала Mica Alt (адаптируется под обои рабочего стола).
* Полная поддержка системной Темной и Светлой темы Windows 11.
* Интерактивная зона Drag-and-Drop с динамическим изменением цвета границ и встроенным превью для файлов PNG/SVG.
* Быстрые палитры (свотчи) для выбора фонового цвета Android-иконки.

### Системная интеграция (Shell Integration)

* **Контекстное меню Проводника:** Опция встраивания пункта "Сгенерировать иконки в IconForge" прямо в меню Проводника Windows при правом клике на PNG/SVG. Регистрация происходит локально в кусте \`HKEY_CURRENT_USER\` и не требует прав администратора (UAC).
* **Всплывающие уведомления (Toast):** По окончании работы приложение отправляет нативное всплывающее уведомление Windows 11 с интерактивной кнопкой "Открыть папку".

---

## Стек технологий

| Компонент / Слой | Технология | Описание / Назначение |
| --- | --- | --- |
| Язык | C# (.NET 8.0) | net8.0-windows целевой фреймворк |
| UI-платформа | WinUI 3 | Windows App SDK 2.2.0 |
| Графика | SkiaSharp | Lanczos3-ресайз и фильтрация |
| Векторная графика | Svg.Skia | Отрисовка векторной графики в растр |
| Тип приложения | Unpackaged Self-Contained | Запуск без глобальной установки Windows App Runtime |

---

## Структура экспорта файлов

После генерации в выбранной папке создается следующая структура каталогов:

\`\`\`text
[Папка_Назначения]/
├── Windows/
│   ├── app_icon.ico
│   └── Assets/
│       ├── Square44x44Logo.scale-100.png
│       ├── Square44x44Logo.scale-200.png
│       └── ... (все логотипы во всех масштабах)
└── Android/
    ├── play_store_512.png
    └── res/
        ├── mipmap-mdpi/
        │   ├── ic_launcher.png
        │   ├── ic_launcher_background.png
        │   └── ic_launcher_foreground.png
        └── mipmap-xxxhdpi/ ...
\`\`\`

---

## Как собрать и запустить

### Требования

* [.NET 8.0 SDK](https://dotnet.microsoft.com/download) или новее.

### Сборка и запуск из консоли

1. Клонируйте репозиторий:
   \`\`\`powershell
   git clone https://github.com/Almanex/icoboo.git
   cd icoboo
   \`\`\`
2. Скомпилируйте проект:
   \`\`\`powershell
   dotnet build
   \`\`\`
3. Запустите приложение:
   \`\`\`powershell
   dotnet run
   \`\`\`

### Публикация (Self-Contained EXE с ресурсами)

Для генерации единого исполняемого пакета:
\`\`\`powershell
dotnet publish -c Release -r win-x64 --self-contained true
\`\`\`
Эта компиляция объединяет сборки в один исполняемый файл \`IconForge.exe\` и копирует папку \`Assets/\` рядом с ним в каталог \`publish/\`.

> [!IMPORTANT]
> Папка \`Assets/\` **обязательно** должна находиться в одной директории с \`IconForge.exe\`, чтобы приложение могло загрузить графические ресурсы интерфейса и успешно запуститься. При распространении программы упаковывайте исполняемый файл и папку \`Assets/\` вместе (например, в ZIP-архив).

---

## Участие в разработке

Будем рады вашему участию! Создавайте issue или присылайте pull request, если хотите предложить улучшения.

---

## Версионирование

Мы используем [SemVer](https://semver.org/) для версионирования. Доступные версии можно посмотреть по тегам в этом репозитории.

---

## Авторы

* **Almanex** - *Начальная разработка* - [Профиль Almanex](https://github.com/Almanex)

---

## Лицензия

Этот проект лицензирован по лицензии MIT - подробности см. в файле \`LICENSE\`.
`,
    readme_de: `[ English ](../README.md) • [ Русский ](README_RU.md) • [ Deutsch ](README_DE.md)

# IconForge

*Nativer Icon-Generator für Windows 11*

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Platform: Windows](https://img.shields.io/badge/Platform-Windows%2010%20%2F%2011-blue)](https://www.microsoft.com/windows)
[![Framework: .NET 8.0](https://img.shields.io/badge/Framework-.NET%208.0-blue)](https://dotnet.microsoft.com/download)
[![UI: WinUI 3](https://img.shields.io/badge/UI-WinUI%203-blue)](https://learn.microsoft.com/windows/apps/winui/winui3/)
[![Share](https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Fgithub.com%2FAlmanex%2Ficoboo)](https://twitter.com/intent/tweet?text=Check%20out%20IconForge%20-%20A%20native%20icon%20generator%20for%20Windows%2011!&url=https%3A%2F%2Fgithub.com%2FAlmanex%2Ficoboo)

<p align="center">
  <img src="/images/projects/icoboo/cover.png" alt="IconForge main" width="49%" />
  <img src="/images/projects/icoboo/editor.png" alt="IconForge settings" width="49%" />
</p>

---

IconForge ist eine schlanke native Windows-Anwendung, die auf dem WinUI 3 (Windows App SDK)-Framework und C# entwickelt wurde und standardmäßig 3 Sprachen (Englisch, Russisch, Deutsch) unterstützt. Sie ist für die Batch-Generierung von Symbolsätzen für Windows (\`.ico\`, \`Assets\`) und Android (\`Adaptive Icons\`) aus einem einzigen Quellbild im PNG- oder SVG-Format konzipiert.

Eine detaillierte Beschreibung aller Einstellungen und Funktionen finden Sie im [Benutzerhandbuch](GUIDE_DE.md).

---

## Hauptmerkmale

### Generierung von Icon-Paketen

* **Windows (Klassisches .ico):**
  * Erstellen Sie eine Multiformat-\`.ico\`-Datei mit den Auflösungen: \`16x16\`, \`24x24\`, \`32x32\`, \`48x48\`, \`64x64\`, \`128x128\`, \`256x256\` Pixel.
  * **Mikroschärfung:** Für kleine Auflösungen (16-48 Pixel) wird automatisch ein spezieller Konturschärfungsfilter angewendet, um Unschärfe im Windows Explorer zu verhindern.
* **Windows Modern Assets (PNG):**
  * Exportieren Sie einzelne Bilder für das Manifest moderner Windows-Anwendungen (\`Square44x44Logo\`, \`Square150x150Logo\`, \`StoreLogo\`) in allen Systemmaßstäben: \`scale-100\`, \`scale-125\`, \`scale-150\`, \`scale-200\`, \`scale-400\`.
* **Android (Adaptive und Legacy Icons):**
  * Ebenentrennung: Das Logo wird automatisch innerhalb der sicheren Zone (72dp) der \`Foreground.png\`-Ebene positioniert und die \`Background.png\`-Ebene wird mit der ausgewählten Farbe oder einer Texturdatei gefüllt.
  * Export nach Projektordnerstruktur (\`mipmap-mdpi\` bis \`mipmap-xxxhdpi\`).
  * Erzeugen Sie ein rundes Legacy-Symbol (\`ic_launcher.png\`) durch Maskierung und Überlagerung.
  * Exportieren Sie das Promo-Symbol für die Google Play Console in der Größe \`512x512\` Pixel.

### Moderne Windows 11-Oberfläche (UI/UX)

* Verwendung des systemtransparenten Materials Mica Alt (passt sich dem Desktop-Hintergrund an).
* Volle Unterstützung für das dunkle und helle Design von Windows 11.
* Interaktiver Drag-and-Drop-Bereich mit dynamischer Änderung der Rahmenfarbe und integrierter Vorschau für PNG- und SVG-Dateien.
* Schnellfarbfelder zur Auswahl der Hintergrundfarbe für adaptive Android-Symbole.

### Systemintegration (Shell-Integration)

* **Explorer-Kontextmenü:** Option zum direkten Einbetten des Elements "Symbole in IconForge generieren" in das Windows Explorer-Kontextmenü beim Rechtsklick auf eine PNG- oder SVG-Datei. Die Registrierung erfolgt lokal im Hive \`HKEY_CURRENT_USER\` und erfordert keine Administratorrechte (UAC).
* **Toast-Benachrichtigungen:** Nach Abschluss der Verarbeitung sendet die App eine native Windows 11-Toast-Benachrichtigung mit einer interaktiven Schaltfläche zum Öffnen des Zielordners.

---

## Technologie-Stack

| Komponente / Schicht | Technologie | Details / Zweck |
| --- | --- | --- |
| Sprache | C# (.NET 8.0) | net8.0-windows Ziel-Framework |
| UI-Plattform | WinUI 3 | Windows App SDK 2.2.0 |
| Grafik-Rendering | SkiaSharp | Lanczos3-Größenänderung und Filterung |
| SVG-Rendering | Svg.Skia | Rendern von Vektorgrafiken in Raster |
| Verpackungsart | Unpackaged Self-Contained | Läuft ohne globale Installation der Windows App Runtime |

---

## Dateiexportstruktur

Nach der Generierung wird im ausgewählten Zielordner folgende Verzeichnisstruktur erstellt:

\`\`\`text
[Zielordner]/
├── Windows/
│   ├── app_icon.ico
│   └── Assets/
│       ├── Square44x44Logo.scale-100.png
│       ├── Square44x44Logo.scale-200.png
│       └── ... (alle Assets in allen Skalierungen)
└── Android/
    ├── play_store_512.png
    └── res/
        ├── mipmap-mdpi/
        │   ├── ic_launcher.png
        │   ├── ic_launcher_background.png
        │   └── ic_launcher_foreground.png
        └── mipmap-xxxhdpi/ ...
\`\`\`

---

## Erste Schritte

### Anforderungen

* [.NET 8.0 SDK](https://dotnet.microsoft.com/download) oder neuer.

### Erstellen und Ausführen über die Konsole

1. Klonen Sie das Repository:
   \`\`\`powershell
   git clone https://github.com/Almanex/icoboo.git
   cd icoboo
   \`\`\`
2. Kompilieren Sie das Projekt:
   \`\`\`powershell
   dotnet build
   \`\`\`
3. Starten Sie die Anwendung:
   \`\`\`powershell
   dotnet run
   \`\`\`

### Veröffentlichen (eigenständige EXE mit Assets)

So generieren Sie ein einzelnes ausführbares Paket:
\`\`\`powershell
dotnet publish -c Release -r win-x64 --self-contained true
\`\`\`
Diese Kompilierung führt die Assemblies in eine einzige ausführbare Datei \`IconForge.exe\` zusammen und kopiert den Ordner \`Assets/\` daneben in das Verzeichnis \`publish/\`.

> [!IMPORTANT]
> Der Ordner \`Assets/\` **muss** im selben Verzeichnis wie \`IconForge.exe\` aufbewahrt werden, damit die Anwendung UI-Assets laden und erfolgreich starten kann. Wenn Sie die App verteilen, packen Sie sowohl die ausführbare Datei als auch das \`Assets/\`-Verzeichnis zusammen (z. B. in ein ZIP-Archiv).

---

## Mitwirken

Beiträge sind herzlich willkommen! Bitte öffnen Sie ein Issue oder senden Sie einen Pull-Request, wenn Sie Verbesserungen vorschlagen möchten.

---

## Versionierung

Wir verwenden [SemVer](https://semver.org/) für die Versionierung. Die verfügbaren Versionen finden Sie unter den Tags in diesem Repository.

---

## Autoren

* **Almanex** - *Ursprüngliche Entwicklung* - [Almanex Profil](https://github.com/Almanex)

---

## Lizenz

Dieses Projekt ist unter der MIT-Lizenz lizenziert - siehe die Datei \`LICENSE\` für Details.
`,
    guide: `[ English ](GUIDE.md) • [ Русский ](GUIDE_RU.md) • [ Deutsch ](GUIDE_DE.md)

# IconForge User Guide

Welcome to the **IconForge** user guide. This document provides step-by-step instructions and technical details on how to get the most out of the application.

---

<p align="center">
  <img src="/images/projects/icoboo/cover.png" alt="IconForge main" width="49%" />
  <img src="/images/projects/icoboo/editor.png" alt="IconForge settings" width="49%" />
</p>

---

## 1. Quick Start Workflow

IconForge is designed to be straightforward and fast:

1. **Select Source File:** Drag and drop a PNG or SVG image into the dashed drop zone, or click **"Browse file on disk..."** to open a file selection dialog.
2. **Choose Destination:** Specify where you want the generated icons to be saved by entering a path or clicking the folder browser icon.
3. **Configure Settings:** Choose your preferred export options (Windows \`.ico\`, modern Assets, or Android Adaptive layouts).
4. **Generate:** Click **"Generate icons"**. A notification will appear once the process is complete, and you can click the notification or open the target folder to view your assets.

> [!IMPORTANT]
> **Executable Dependency:** The \`IconForge.exe\` single-file executable relies on the \`Assets/\` directory containing the app's internal icons and assets to load its UI correctly. Always ensure the \`Assets/\` folder is present in the same directory as \`IconForge.exe\` when running it. If you download a release ZIP archive, make sure to extract all contents before running the program.

---

## 2. Icon Formats and Technical Specifications

### Windows Classic .ico Generation

The Classic Windows Icon format (\`.ico\`) is a container that bundles multiple resolutions into a single file. This is crucial for keeping icons crisp at different Explorer view options (e.g. details, list, tiles, medium, large, and extra-large icons).

* **Bundled Resolutions:** \`16x16\`, \`24x24\`, \`32x32\`, \`48x48\`, \`64x64\`, \`128x128\`, \`256x256\` pixels.
* **Micro-sharpening Filter:** To prevent small resolutions (\`16x16\` up to \`48x48\` pixels) from looking blurry or muddy in the Windows Explorer shell, IconForge automatically applies a custom contour sharpening filter after scaling using the SkiaSharp Lanczos3 algorithm.

### Windows Modern Assets

Modern Windows Apps (UWP and WinUI 3 packaged applications) use separate PNG files declared in their package manifest (\`Package.appxmanifest\`). These assets are scaled depending on the user's monitor DPI settings.

* **Asset Templates:** \`Square44x44Logo\`, \`Square150x150Logo\`, \`StoreLogo\`.
* **Scales Generated:** \`scale-100\` (100%), \`scale-125\` (125%), \`scale-150\` (150%), \`scale-200\` (200%), and \`scale-400\` (400%).

### Android Adaptive & Legacy Icons

Android 8.0 (API level 26) introduced **Adaptive Icons**, which can display a variety of shapes across different device models (circles, squircles, rounded rectangles). To support this, Android requires icons to consist of separate foreground and background layers.

* **Foreground Layer (\`ic_launcher_foreground.png\`):**
  * The source image is automatically scaled down and centered inside a safe zone.
  * **Safe Zone Rule:** To prevent the logo from being cropped by different device masks, the core icon must reside within a central 72dp circle of the 108dp total canvas size. IconForge handles this positioning automatically.
* **Background Layer (\`ic_launcher_background.png\`):**
  * You can select a background color using a Hex code (e.g. \`#FFFFFF\` or \`#3DDC84\`), pick a predefined color from the quick swatches, or select a custom background image file (such as a pattern or texture).
* **Densities Supported:** Folder structure ranges from \`mipmap-mdpi\` up to \`mipmap-xxxhdpi\`.
* **Legacy Icon (\`ic_launcher.png\`):**
  * For older Android versions, a standard round legacy icon is automatically compiled by combining the foreground and background layers and applying a circular mask.
* **Google Play Console Promo Icon:**
  * Generates a high-quality \`512x512\` pixel PNG representation of the final icon, ready to upload to the developer console.

---

## 3. Shell Integration (Explorer Context Menu)

IconForge lets you register a shortcut directly in the Windows Explorer context menu so you can right-click any image and generate icons immediately.

### Registry Location and Privileges

* **Registry Path:** Keys are added under:
  * \`HKEY_CURRENT_USER\\Software\\Classes\\SystemFileAssociations\\.png\\Shell\\IconForge\`
  * \`HKEY_CURRENT_USER\\Software\\Classes\\SystemFileAssociations\\.svg\\Shell\\IconForge\`
* **No Administrator Rights Required:** Because the application writes to the user-specific registry hive (\`HKEY_CURRENT_USER\`) instead of the system-wide machine hive (\`HKEY_LOCAL_MACHINE\`), **you do not need administrator privileges (UAC prompt)** to toggle this feature. It is entirely sandboxed to the current Windows user profile.

---

## 4. Troubleshooting Windows Defender SmartScreen

If you compile IconForge from source or download an unsigned binary release, Windows Defender SmartScreen might block it on first launch, showing a warning: *"Windows Defender SmartScreen prevented an unrecognized app from starting."*

### Why does this happen?
This warning is standard for free, open-source software that does not have a paid digital code-signing certificate (which cost several hundred dollars annually). It does not mean the application is unsafe.

### How to bypass the warning:
1. In the SmartScreen window, click on the **"More info"** link.
2. The publisher name will show as *Unknown Publisher*.
3. Click the **"Run anyway"** button that appears at the bottom.
4. The application will launch normally and will not show the warning again.
`,
    guide_ru: `[ English ](GUIDE.md) • [ Русский ](GUIDE_RU.md) • [ Deutsch ](GUIDE_DE.md)

# Руководство пользователя IconForge

Добро пожаловать в руководство пользователя **IconForge**. Этот документ содержит пошаговые инструкции и технические характеристики, которые помогут вам максимально эффективно использовать возможности приложения.

---

<p align="center">
  <img src="/images/projects/icoboo/cover.png" alt="IconForge main" width="49%" />
  <img src="/images/projects/icoboo/editor.png" alt="IconForge settings" width="49%" />
</p>

---

## 1. Быстрый старт

Процесс работы в IconForge разработан таким образом, чтобы быть максимально простым и быстрым:

1. **Выберите исходный файл:** Перетащите файл PNG или SVG в пунктирную зону сброса или нажмите кнопку **"Выбрать файл на диске..."**, чтобы открыть диалоговое окно выбора файла.
2. **Укажите папку назначения:** Введите путь или нажмите на значок папки, чтобы указать, куда следует сохранить сгенерированные иконки.
3. **Настройте параметры:** Выберите форматы для экспорта (классический Windows \`.ico\`, современные Windows Assets или адаптивные слои Android).
4. **Сгенерируйте иконки:** Нажмите кнопку **"Сгенерировать иконки"**. По завершении работы появится всплывающее уведомление, кликнув на которое (или открыв указанную папку), вы сможете просмотреть готовые файлы.

> [!IMPORTANT]
> **Зависимость от ресурсов:** Исполняемый файл \`IconForge.exe\` требует наличия папки \`Assets/\` с внутренними иконками приложения в том же каталоге для корректного отображения интерфейса. Обязательно убедитесь, что папка \`Assets/\` находится рядом с файлом \`IconForge.exe\` перед запуском. Если вы скачали ZIP-архив релиза, обязательно полностью распакуйте все файлы перед использованием.

---

## 2. Форматы иконок и технические характеристики

### Классический .ico для Windows

Классический формат иконок Windows (\`.ico\`) представляет собой контейнер, который упаковывает несколько разрешений в один файл. Это необходимо для того, чтобы иконка оставалась четкой при любых режимах отображения в Проводнике (таблица, список, плитка, мелкие, средние, крупные или огромные значки).

* **Упакованные разрешения:** \`16x16\`, \`24x24\`, \`32x32\`, \`48x48\`, \`64x64\`, \`128x128\`, \`256x256\` пикселей.
* **Фильтр микро-резкости (Micro-sharpening):** Чтобы иконки небольшого размера (от \`16x16\` до \`48x48\` пикселей) не выглядели размытыми в Проводнике Windows, IconForge автоматически применяет специальный контурный фильтр резкости после масштабирования с использованием алгоритма SkiaSharp Lanczos3.

### Современные Windows Assets

Современные приложения Windows (пакетированные приложения UWP и WinUI 3) используют отдельные PNG-файлы, прописанные в манифесте пакета (\`Package.appxmanifest\`). Эти ресурсы масштабируются в зависимости от настроек DPI монитора пользователя.

* **Шаблоны ресурсов:** \`Square44x44Logo\`, \`Square150x150Logo\`, \`StoreLogo\`.
* **Масштабы генерации:** \`scale-100\` (100%), \`scale-125\` (125%), \`scale-150\` (150%), \`scale-200\` (200%) и \`scale-400\` (400%).

### Адаптивные и классические иконки Android

В Android 8.0 (API level 26) появились **адаптивные иконки** (Adaptive Icons), которые могут принимать различную форму на разных устройствах (круг, квадрат со скругленными углами, скругленный прямоугольник). Для этого Android требует разделения иконки на два слоя: передний план (логотип) и задний план (фон).

* **Слой переднего плана (\`ic_launcher_foreground.png\`):**
  * Исходное изображение автоматически масштабируется и выравнивается по центру внутри безопасной зоны.
  * **Правило безопасной зоны:** Чтобы логотип не срезался масками на разных устройствах, важные элементы значка должны находиться внутри центрального круга диаметром 72dp при общем размере холста 108dp. IconForge автоматически позиционирует изображение с учетом этого требования.
* **Слой заднего плана (\`ic_launcher_background.png\`):**
  * Вы можете выбрать цвет фона, введя Hex-код (например, \`#FFFFFF\` или \`#3DDC84\`), выбрав готовый цвет из быстрых палитр (свотчей) или указав файл с пользовательским фоновым изображением (текстурой или паттерном).
* **Поддерживаемые плотности:** Структура папок экспортируется от \`mipmap-mdpi\` до \`mipmap-xxxhdpi\`.
* **Классическая (Legacy) иконка (\`ic_launcher.png\`):**
  * Для старых версий Android автоматически собирается стандартная круглая иконка путем наложения слоев переднего и заднего плана с применением круглой маски.
* **Промо-иконка Google Play Console:**
  * Создает высококачественное PNG-изображение размером \`512x512\` пикселей, готовое для загрузки в консоль разработчика.

---

## 3. Системная интеграция (Контекстное меню Проводника)

IconForge позволяет зарегистрировать ярлык непосредственно в контекстном меню Проводника Windows. После этого вы сможете кликнуть правой кнопкой мыши на любое изображение и сразу запустить процесс генерации.

### Разделы реестра и права доступа

* **Путь в реестре:** Записи добавляются в следующие ветки:
  * \`HKEY_CURRENT_USER\\Software\\Classes\\SystemFileAssociations\\.png\\Shell\\IconForge\`
  * \`HKEY_CURRENT_USER\\Software\\Classes\\SystemFileAssociations\\.svg\\Shell\\IconForge\`
* **Права администратора не требуются:** Поскольку приложение записывает параметры в пользовательский куст реестра (\`HKEY_CURRENT_USER\`), а не в общесистемный (\`HKEY_LOCAL_MACHINE\`), **вам не нужны права администратора (UAC-запрос)** для включения или отключения этой функции. Настройки полностью изолированы в профиле текущего пользователя Windows.

---

## 4. Обход предупреждений Windows Defender SmartScreen

При компиляции IconForge из исходного кода или при запуске загруженной неопубликованной сборки фильтр Windows Defender SmartScreen может заблокировать запуск, показав предупреждение: *"Система Windows Defender SmartScreen предотвратила запуск неопознанного приложения."*

### Почему это происходит?
Это предупреждение является стандартным для бесплатного программного обеспечения с открытым исходным кодом, которое не имеет платного цифрового сертификата подписи кода (стоимость которого составляет несколько сотен долларов в год). Это не означает, что приложение небезопасно.

### Как обойти предупреждение:
1. В окне SmartScreen нажмите на ссылку **"Подробнее"** (или **"More info"**).
2. Появится имя издателя: *Неизвестный издатель*.
3. Нажмите на появившуюся кнопку **"Выполнить в любом случае"** (или **"Run anyway"**) в нижней части окна.
4. Приложение запустится в обычном режиме и при последующих запусках предупреждение больше не появится.
`,
    guide_de: `[ English ](GUIDE.md) • [ Русский ](GUIDE_RU.md) • [ Deutsch ](GUIDE_DE.md)

# IconForge Benutzerhandbuch

Willkommen beim Benutzerhandbuch für **IconForge**. Dieses Dokument bietet Schritt-für-Schritt-Anleitungen und technische Details, um die Anwendung optimal zu nutzen.

---

<p align="center">
  <img src="/images/projects/icoboo/cover.png" alt="IconForge main" width="49%" />
  <img src="/images/projects/icoboo/editor.png" alt="IconForge settings" width="49%" />
</p>

---

## 1. Schnellstart-Workflow

IconForge ist so konzipiert, dass es einfach und schnell zu bedienen ist:

1. **Quelldatei auswählen:** Ziehen Sie ein PNG- oder SVG-Bild per Drag-and-Drop in den gestrichelten Ablagebereich oder klicken Sie auf **"Datei auf der Festplatte auswählen..."**, um den Dateiauswahldialog zu öffnen.
2. **Zielordner angeben:** Legen Sie fest, wo die generierten Symbole gespeichert werden sollen, indem Sie einen Pfad eingeben oder auf das Ordnersymbol klicken.
3. **Einstellungen konfigurieren:** Wählen Sie Ihre bevorzugten Exportoptionen aus (klassisches Windows \`.ico\`, moderne Windows Assets oder Android Adaptive Layouts).
4. **Generieren:** Klicken Sie auf **"Symbole generieren"**. Nach Abschluss des Vorgangs wird eine Benachrichtigung angezeigt. Sie können auf die Benachrichtigung klicken oder den Zielordner öffnen, um die Dateien anzuzeigen.

> [!IMPORTANT]
> **Ressourcenabhängigkeit:** Die ausführbare Datei \`IconForge.exe\` benötigt das Verzeichnis \`Assets/\` mit den internen Anwendungssymbolen im selben Ordner, um die Benutzeroberfläche korrekt zu laden. Stellen Sie vor dem Starten sicher, dass sich der Ordner \`Assets/\` im selben Verzeichnis wie \`IconForge.exe\` befindet. Wenn Sie das ZIP-Archiv des Releases heruntergeladen haben, entpacken Sie bitte alle Dateien vollständig vor der Verwendung.

---

## 2. Symbolformate und technische Spezifikationen

### Klassische Windows .ico-Generierung

Das klassische Windows-Symbolformat (\`.ico\`) ist ein Container, der mehrere Auflösungen in einer einzigen Datei zusammenfasst. Dies ist wichtig, damit Symbole bei verschiedenen Explorer-Ansichtsoptionen (z. B. Details, Liste, Kacheln, mittel, groß und extra groß) gestochen scharf bleiben.

* **Bündelauflösungen:** \`16x16\`, \`24x24\`, \`32x32\`, \`48x48\`, \`64x64\`, \`128x128\`, \`256x256\` Pixel.
* **Mikroschärfungsfilter:** Um zu verhindern, dass niedrige Auflösungen (von \`16x16\` bis \`48x48\` Pixel) im Windows Explorer verschwommen oder matschig wirken, wendet IconForge nach der Skalierung mit dem SkiaSharp Lanczos3-Algorithmus automatisch einen benutzerdefinierten Konturschärfungsfilter an.

### Moderne Windows-Assets

Moderne Windows-Apps (UWP- und WinUI 3-Anwendungen) verwenden separate PNG-Dateien, die in ihrem Paketmanifest (\`Package.appxmanifest\`) deklariert sind. Diese Assets werden je nach DPI-Einstellung des Monitors skaliert.

* **Asset-Vorlagen:** \`Square44x44Logo\`, \`Square150x150Logo\`, \`StoreLogo\`.
* **Generierte Skalierungen:** \`scale-100\` (100%), \`scale-125\` (125%), \`scale-150\` (150%), \`scale-200\` (200%) und \`scale-400\` (400%).

### Android Adaptive & Legacy-Symbole

Android 8.0 (API-Level 26) führte **Adaptive Symbole** (Adaptive Icons) ein, die auf verschiedenen Gerätemodellen unterschiedliche Formen anzeigen können (Kreise, abgerundete Quadrate usw.). Um dies zu unterstützen, verlangt Android, dass Symbole aus separaten Vordergrund- und Hintergrundebenen bestehen.

* **Vordergrundebene (\`ic_launcher_foreground.png\`):**
  * Das Quellbild wird automatisch verkleinert und innerhalb einer sicheren Zone zentriert.
  * **Sicherheitszonen-Regel:** Um zu verhindern, dass das Logo durch Gerätemasken abgeschnitten wird, muss sich das Kernsymbol innerhalb eines zentralen Kreises von 72dp bei einer Gesamtgröße von 108dp befinden. IconForge übernimmt diese Positionierung automatisch.
* **Hintergrundebene (\`ic_launcher_background.png\`):**
  * Sie können eine Hintergrundfarbe mithilfe eines Hex-Codes auswählen (z. B. \`#FFFFFF\` oder \`#3DDC84\`), eine vordefinierte Farbe aus den Schnellfarbfeldern wählen oder eine benutzerdefinierte Hintergrundbilddatei (z. B. ein Muster oder eine Textur) auswählen.
* **Unterstützte Dichten:** Die Ordnerstruktur reicht von \`mipmap-mdpi\` bis \`mipmap-xxxhdpi\`.
* **Legacy-Symbol (\`ic_launcher.png\`):**
  * Für ältere Android-Versionen wird automatisch ein rundes Standard-Legacy-Symbol erstellt, indem die Vorder- und Hintergrundebenen kombiniert und eine kreisförmige Maske angewendet werden.
* **Google Play Console Promo-Symbol:**
  * Generiert ein hochwertiges PNG-Bild mit \`512x512\` Pixeln, das in die Entwicklerkonsole hochgeladen werden kann.

---

## 3. Systemintegration (Explorer-Kontextmenü)

Mit IconForge können Sie eine Verknüpfung direkt im Windows Explorer-Kontextmenü registrieren, sodass Sie mit der rechten Maustaste auf ein beliebiges Bild klicken und sofort Symbole generieren können.

### Registrierungspfad und Berechtigungen

* **Registrierungspfad:** Die Schlüssel werden unter folgendem Pfad hinzugefügt:
  * \`HKEY_CURRENT_USER\\Software\\Classes\\SystemFileAssociations\\.png\\Shell\\IconForge\`
  * \`HKEY_CURRENT_USER\\Software\\Classes\\SystemFileAssociations\\.svg\\Shell\\IconForge\`
* **Keine Administratorrechte erforderlich:** Da die Anwendung in den benutzerspezifischen Registrierungs-Hive (\`HKEY_CURRENT_USER\`) statt in den systemweiten Hive (\`HKEY_LOCAL_MACHINE\`) schreibt, **benötigen Sie keine Administratorrechte (UAC-Eingabeaufforderung)**, um diese Funktion zu aktivieren oder zu deaktivieren. Sie ist vollständig auf das aktuelle Windows-Benutzerprofil beschränkt.

---

## 4. Problembehebung bei Windows Defender SmartScreen

Wenn Sie IconForge aus dem Quellcode kompilieren oder eine nicht signierte Binärdatei ausführen, blockiert Windows Defender SmartScreen die Ausführung möglicherweise beim ersten Start mit der Warnung: *"Der Computer wurde durch Windows Defender SmartScreen geschützt. Von Windows Defender SmartScreen wurde der Start einer unbekannten App verhindert."*

### Warum passiert das?
Diese Warnung ist Standard für kostenlose Open-Source-Software, die nicht über ein kostenpflichtiges digitales Codesignaturzertifikat verfügt (das jährlich mehrere hundert Dollar kostet). Dies bedeutet nicht, dass die Anwendung unsicher ist.

### So umgehen Sie die Warnung:
1. Klicken Sie im SmartScreen-Fenster auf den Link **"Weitere Informationen"** (oder **"More info"**).
2. Der Name des Herausgebers wird als *Unbekannter Herausgeber* angezeigt.
3. Klicken Sie auf die Schaltfläche **"Trotzdem ausführen"** (oder **"Run anyway"**), die unten im Fenster angezeigt wird.
4. Die Anwendung startet normal und die Warnung wird bei zukünftigen Starts nicht mehr angezeigt.
`,
  },
  "lingospaced": {
    title: "LingoSpaced ",
    subtitle: "тест",
    category: "Open Source",
    lang: "Kotlin",
    platform: "Windows 11",
    stars: "0",
    license: "MIT",
    github: "https://github.com/Almanex/LingoSpaced-",
    image: "/images/projects/lingospaced-.webp",
    readme: `# LingoSpaced

*Premium mobile application for learning German on Android using a smart automatic spaced repetition algorithm and dynamic glassmorphism interface.*

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](https://opensource.org/licenses/MIT)
[![Platform: Android](https://img.shields.io/badge/Platform-Android%2016-green.svg?style=flat-square)](https://developer.android.com)
[![Language: Kotlin](https://img.shields.io/badge/Language-Kotlin%202.3.20-purple.svg?style=flat-square)](https://kotlinlang.org)
[![Share](https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Fgithub.com%2FAlmanex%2FLingoSpaced-)](https://twitter.com/intent/tweet?text=Check%20out%20this%20awesome%20project&url=https%3A%2F%2Fgithub.com%2FAlmanex%2FLingoSpaced-)

---

## Overview

LingoSpaced is a local-first, offline-capable mobile Android application designed for efficient learning of German vocabulary. It is based on a smart automatic spaced repetition algorithm that adapts to the user's memory using implicit feedback metrics (such as response speed, hint usage, errors, and typos) rather than manual difficulty self-ratings.

The application interface follows premium design standards (Taste Rules) featuring a liquid frosted glass effect (Glassmorphism), spring physics animations, and a dynamic HSL palette that automatically adapts to system light and dark themes.

Detailed instructions and documentation:
* [User Guide](docs/GUIDE.md) - Detailed guide on training mechanics, algorithms, and options.
* [Developer Guide](docs/DEVELOPER.md) - Internal architecture details, storage schemes, and mathematics.

---

## Key Features

* Smart Spaced Repetition: Automates the learning schedule based on user response metrics.
* Dynamic Glassmorphic UI: Smooth animations based on spring physics and interactive glassmorphic cards.
* Four Game Mechanics: Includes choice selection, text input with smart typo checking, letter scrambling, and Text-To-Speech listening practice.
* Phrase Notepad: Offline notebook for saving phrases with custom speech rate, tone, and loop repetition.
* Local Backup & Restore: Export and import vocabulary via JSON using overwrite or merge strategies.
* Daily Reminder Notifications: Dynamic daily push notifications scheduled via AlarmManager indicating overdue reviews.

---

## Tech Stack

| Layer / Component | Technology | Details / Purpose |
| --- | --- | --- |
| Language | Kotlin (v2.3.20) | jvmToolchain = 17 |
| UI Framework | Jetpack Compose | Compose Compiler v2.3.20 |
| Navigation | Jetpack Navigation 3 | androidx.navigation3:1.0.1 |
| Serialization | Kotlinx Serialization JSON | v1.6.3 |
| Storage | Local JSON files | words.json and phrases.json in app files directory |
| Audio/Voice | TextToSpeech (TTS) | Local German speech synthesis |
| Background Tasks | AlarmManager | Daily notifications scheduling |

---

## Getting Started

### Prerequisites

* Android Studio (Koala / Ladybug or later)
* Android SDK 36 (Android 16)
* JDK 17 (recommended to use Android Studio's built-in JBR)

### Installation & Running

1. Clone the repository:
   \`\`\`bash
   git clone https://github.com/Almanex/LingoSpaced-.git
   \`\`\`
2. Set the \`JAVA_HOME\` environment variable to point to your JDK 17 (or Android Studio JBR):
   * On Windows (PowerShell):
     \`\`\`powershell
     $env:JAVA_HOME="C:\\Program Files\\Android\\Android Studio\\jbr"
     \`\`\`
   * On Linux/macOS:
     \`\`\`bash
     export JAVA_HOME="/path/to/android-studio/jbr"
     \`\`\`
3. Run the application using Android Studio or compile a debug build from the terminal:
   \`\`\`powershell
   .\\gradlew.bat assembleDebug
   \`\`\`
   The output APK will be available at \`app/build/outputs/apk/debug/app-debug.apk\`.

---

## Running the Tests

To run the unit tests for the interval algorithm and ViewModels:
\`\`\`powershell
.\\gradlew.bat test
\`\`\`

---

## Deployment

To compile a production or release build:
\`\`\`powershell
.\\gradlew.bat assembleRelease
\`\`\`

---

## Contributing

Contributions, bug reports, and pull requests are welcome. Feel free to open an issue or submit a pull request on GitHub.

---

## License

This project is licensed under the MIT License. Refer to the license terms for details.`,
    readme_ru: `# LingoSpaced

*Премиальное мобильное приложение для изучения немецкого языка на Android с использованием умного автоматического алгоритма интервального повторения и динамического интерфейса с эффектом матового стекла.*

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](https://opensource.org/licenses/MIT)
[![Platform: Android](https://img.shields.io/badge/Platform-Android%2016-green.svg?style=flat-square)](https://developer.android.com)
[![Language: Kotlin](https://img.shields.io/badge/Language-Kotlin%202.3.20-purple.svg?style=flat-square)](https://kotlinlang.org)
[![Share](https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Fgithub.com%2FAlmanex%2FLingoSpaced-)](https://twitter.com/intent/tweet?text=Check%20out%20this%20awesome%20project&url=https%3A%2F%2Fgithub.com%2FAlmanex%2FLingoSpaced-)

---

## Обзор

LingoSpaced — это локальное мобильное Android-приложение для эффективного изучения немецкой лексики, работающее полностью в автономном режиме. В его основе лежит умный алгоритм интервального повторения, который адаптируется к памяти пользователя на основе неявных сигналов обратной связи (таких как скорость ответа, использование подсказок, ошибки и опечатки) вместо ручной самооценки сложности.

Интерфейс приложения разработан в соответствии с премиальными стандартами дизайна (Taste Rules) и включает в себя эффект матового стекла (Glassmorphism), анимации на основе физики пружин и динамическую HSL-палитру, которая автоматически адаптируется под светлую и темную темы системы.
Подробные инструкции и документация:
* [Руководство пользователя](GUIDE_RU.md) — Подробное руководство по игровым механикам, алгоритмам и настройкам.
* [Руководство разработчика](DEVELOPER.md) — Архитектура проекта, схемы хранения данных и математическая модель.
---

## Ключевые возможности

* Умное интервальное повторение: Автоматическое планирование показов на основе метрик ответов пользователя.
* Динамический интерфейс Glassmorphic: Плавные анимации на физике пружин и интерактивные карточки с эффектом размытия фона.
* Четыре игровые механики: Выбор перевода, ввод слова с клавиатуры с автоматическим контролем опечаток, сборка слов из букв и аудирование с использованием Text-To-Speech.
* Блокнот фраз: Автономный блокнот для сохранения выражений с настраиваемой скоростью, тоном и циклическим воспроизведением.
* Локальное резервное копирование: Экспорт и импорт словаря через JSON с поддержкой стратегий слияния или перезаписи.
* Ежедневные напоминания: Динамические пуш-уведомления через AlarmManager с указанием точного количества карточек для повторения.

---

## Стек технологий

| Уровень / Компонент | Технология | Описание / Назначение |
| --- | --- | --- |
| Язык программирования | Kotlin (v2.3.20) | jvmToolchain = 17 |
| UI-фреймворк | Jetpack Compose | Compose Compiler v2.3.20 |
| Навигация | Jetpack Navigation 3 | androidx.navigation3:1.0.1 |
| Сериализация | Kotlinx Serialization JSON | v1.6.3 |
| Хранилище данных | Локальные файлы JSON | words.json и phrases.json во внутреннем кэше приложения |
| Озвучивание | TextToSpeech (TTS) | Локальный синтез речи для немецкого языка |
| Фоновые задачи | AlarmManager | Планирование ежедневных уведомлений |

---

## Начало работы

### Требования

* Android Studio (Koala / Ladybug или новее)
* Android SDK 36 (Android 16)
* JDK 17 (рекомендуется встроенный JBR в Android Studio)

### Установка и запуск

1. Клонируйте репозиторий:
   \`\`\`bash
   git clone https://github.com/Almanex/LingoSpaced-.git
   \`\`\`
2. Настройте переменную окружения \`JAVA_HOME\`, чтобы она указывала на JDK 17 (или Android Studio JBR):
   * В Windows (PowerShell):
     \`\`\`powershell
     $env:JAVA_HOME="C:\\Program Files\\Android\\Android Studio\\jbr"
     \`\`\`
   * В Linux/macOS:
     \`\`\`bash
     export JAVA_HOME="/path/to/android-studio/jbr"
     \`\`\`
3. Откройте проект в Android Studio или соберите отладочную версию через терминал:
   \`\`\`powershell
   .\\gradlew.bat assembleDebug
   \`\`\`
   Готовый файл APK будет сохранен по пути \`app/build/outputs/apk/debug/app-debug.apk\`.

---

## Запуск тестов

Для запуска модульных тестов алгоритма интервалов и ViewModels выполните:
\`\`\`powershell
.\\gradlew.bat test
\`\`\`

---

## Развертывание

Для сборки релизной или рабочей версии выполните:
\`\`\`powershell
.\\gradlew.bat assembleRelease
\`\`\`

---

## Участие в разработке

Приветствуются любые предложения, отчеты об ошибках и пул-реквесты. Вы можете создать тему для обсуждения или отправить пул-реквест в репозиторий.

---

## Лицензия

Проект распространяется под лицензией MIT. Подробности смотрите в тексте лицензии.
`,
    readme_de: `# LingoSpaced

*Premium-Mobilanwendung zum Deutschlernen auf Android mit einem intelligenten automatischen Spaced-Repetition-Algorithmus und einer dynamischen Benutzeroberfläche in Glassmorphism-Optik.*

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](https://opensource.org/licenses/MIT)
[![Platform: Android](https://img.shields.io/badge/Platform-Android%2016-green.svg?style=flat-square)](https://developer.android.com)
[![Language: Kotlin](https://img.shields.io/badge/Language-Kotlin%202.3.20-purple.svg?style=flat-square)](https://kotlinlang.org)
[![Share](https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Fgithub.com%2FAlmanex%2FLingoSpaced-)](https://twitter.com/intent/tweet?text=Check%20out%20this%20awesome%20project&url=https%3A%2F%2Fgithub.com%2FAlmanex%2FLingoSpaced-)

---

## Übersicht

LingoSpaced ist eine lokale, offline-fähige Android-Mobilanwendung, die für das effiziente Erlernen von deutschem Vokabular entwickelt wurde. Sie basiert auf einem intelligenten, automatischen Spaced-Repetition-Algorithmus, der sich mithilfe impliziter Feedback-Metriken (wie Antwortgeschwindigkeit, Verwendung von Hinweisen, Fehler und Tippfehler) an das Gedächtnis des Benutzers anpasst, anstatt eine manuelle Selbsteinschätzung des Schwierigkeitsgrades zu erfordern.

Die Benutzeroberfläche folgt Premium-Designstandards (Taste Rules) mit einem flüssigen Milchglaseffekt (Glassmorphism), auf Federphysik basierenden Animationen und einer dynamischen HSL-Palette, die sich automatisch an die hellen und dunklen Systemthemen anpasst.

Detaillierte Anleitungen und Dokumentation:
* [Benutzerhandbuch](GUIDE_DE.md) – Detaillierte Anleitung zu Trainingsmechaniken, Algorithmen und Optionen.
* [Entwicklerhandbuch](DEVELOPER.md) – Interne Architekturdetails, Speicherschemata und mathematische Modelle.

---

## Hauptmerkmale

* Intelligente Spaced Repetition: Automatische Planung von Wiederholungen basierend auf den Antwortmetriken des Benutzers.
* Dynamische Glassmorphic UI: Fließende, auf Federphysik basierende Animationen und interaktive Karten mit Unschärfe-Effekten.
* Vier Spielmechaniken: Übersetzungsauswahl, Tastatureingabe mit intelligenter Tippfehlerprüfung, Zusammenbauen von Wörtern aus Buchstaben und Hörverstehen mit Text-To-Speech.
* Phrasen-Notizbuch: Offline-Notizbuch zum Speichern von Phrasen mit anpassbarer Sprachgeschwindigkeit, Tonhöhe und zyklischer Wiederholung.
* Lokales Backup & Wiederherstellung: Export und Import des Wortschatzes über JSON mit Unterstützung von Überschreib- oder Zusammenführungsstrategien.
* Tägliche Erinnerungen: Dynamische tägliche Push-Benachrichtigungen über den AlarmManager mit Angabe der genauen Anzahl der fälligen Karten.

---

## Technologie-Stack

| Ebene / Komponente | Technologie | Details / Zweck |
| --- | --- | --- |
| Programmiersprache | Kotlin (v2.3.20) | jvmToolchain = 17 |
| UI-Framework | Jetpack Compose | Compose Compiler v2.3.20 |
| Navigation | Jetpack Navigation 3 | androidx.navigation3:1.0.1 |
| Serialisierung | Kotlinx Serialization JSON | v1.6.3 |
| Datenspeicher | Lokale JSON-Dateien | words.json und phrases.json im App-Dateiverzeichnis |
| Audio/Stimme | TextToSpeech (TTS) | Lokale deutsche Sprachsynthese |
| Hintergrundaufgaben | AlarmManager | Planung täglicher Benachrichtigungen |

---

## Erste Schritte

### Voraussetzungen

* Android Studio (Koala / Ladybug oder neuer)
* Android SDK 36 (Android 16)
* JDK 17 (empfohlen wird das integrierte JBR von Android Studio)

### Installation und Ausführung

1. Klonen Sie das Repository:
   \`\`\`bash
   git clone https://github.com/Almanex/LingoSpaced-.git
   \`\`\`
2. Richten Sie die Umgebungsvariable \`JAVA_HOME\` so ein, dass sie auf Ihr JDK 17 (oder Android Studio JBR) verweist:
   * Unter Windows (PowerShell):
     \`\`\`powershell
     $env:JAVA_HOME="C:\\Program Files\\Android\\Android Studio\\jbr"
     \`\`\`
   * Unter Linux/macOS:
     \`\`\`bash
     export JAVA_HOME="/path/to/android-studio/jbr"
     \`\`\`
3. Öffnen Sie das Projekt in Android Studio oder kompilieren Sie eine Debug-Version über das Terminal:
   \`\`\`powershell
   .\\gradlew.bat assembleDebug
   \`\`\`
   Die fertige APK-Datei wird unter dem Pfad \`app/build/outputs/apk/debug/app-debug.apk\` gespeichert.

---

## Tests ausführen

Um die Unit-Tests für den Intervallalgorithmus und die ViewModels auszuführen:
\`\`\`powershell
.\\gradlew.bat test
\`\`\`

---

## Bereitstellung

Um eine Produktions- oder Release-Version zu kompilieren:
\`\`\`powershell
.\\gradlew.bat assembleRelease
\`\`\`

---

## Mitwirken

Beiträge, Fehlerberichte und Pull-Requests sind herzlich willkommen. Sie können gerne ein Issue erstellen oder einen Pull-Request im Repository einreichen.

---

## Lizenz

Dieses Projekt ist unter der MIT-Lizenz lizenziert. Weitere Einzelheiten finden Sie in den Lizenzbedingungen.
`,
    guide: `# User Guide: LingoSpaced

Welcome to LingoSpaced! This application is designed to help you efficiently and permanently learn German vocabulary without rote memorization. You do not need to manually rate the difficulty of words (like "easy" or "hard") or set schedules — the algorithm will handle it all for you based on your response speed and accuracy.

---

## Two-Stage Learning Cycle

The process of mastering each word consists of two consecutive stages:

### Stage 1: Intensive Study (Intensive)
* Goal: Consolidate the word in short-term memory.
* Rule: You need to give 9 correct answers for the word.
* Frequency of showings:
  * For a correct answer, the word is scheduled for the next show in 8 hours (averaging 3 showings per day).
  * In case of an error, the word does not lose its accumulated points but is scheduled to be shown in 2 hours so that you can repeat and consolidate it faster.
* Transition: After the 9th successful answer, the word automatically transitions to the "Spaced" status (\`SPACED\`).

### Stage 2: Spaced Repetition (Spaced Repetition)
* Goal: Transfer the word into long-term memory with maximum intervals between showings.
* Rule: Base intervals grow by powers of two: $2^{\\text{step}}$ days.
  * Step 0: 1 day
  * Step 1: 2 days
  * Step 2: 4 days
  * Step 3: 8 days
  * Step 4: 16 days
  * ... up to Step 9: 512 days.
* Difficulty Adjustment: The interval is automatically adjusted based on your performance (the \`difficultyFactor\` coefficient). If you answer quickly, without using hints or making typos, the word will be shown less frequently. Errors or hint usage will lower the factor, causing the word to return to the queue sooner.

---

## Game Mechanics (Task Types)

Each card randomly selects one of four game mechanics during a session to comprehensively practice the word:

1. Translation Choice (Choice):
   * You are presented with a German word and 4 translation options in Russian. Select the correct one.
2. Listening Practice (Listening):
   * The word itself is not shown on the screen; only a large [Speaker] button is displayed. The German word is voiced automatically when the card is opened.
   * You need to listen to the word and choose its translation from 4 options.
   * The German spelling and transcription will be revealed only after you select an answer.
3. Word Scramble (Scramble):
   * You are given the translation of the word and a scrambled row of letters of the German word. Click the letters in the correct order to assemble the German word.
4. Text Input (Input):
   * The most challenging task. Write the German translation of the word using the keyboard.
   * Smart Typo Control: The algorithm evaluates the input using Levenshtein distance. If you make 1 minor mistake (for short words up to 6 letters) or up to 2 mistakes (for long words), the answer is accepted as correct but marked as a "Typo", and the word's difficulty factor increases slightly.

---

## Word Pronunciation (Text-to-Speech)

During workouts, voice pronunciation of the German word is available to you:
* On each card, next to the main word (or its translation), a [Speaker] button is displayed.
* You can click it at any time during the practice (both before and after answering) to listen to the correct pronunciation.
* Voice settings: The pronunciation on training cards uses the common speed and tone settings set in the Phrase Notepad (the [Settings] button in the Notepad). Changes there are immediately applied to workouts.

---

## Hint System

If you forget a word, click the [Hint] button in the upper right corner of the card:
* In translation choice: Removes two incorrect options.
* In word scramble: Automatically fills in the next correct letter.
* In manual text input: Fills in the correct word character by character in the text field.
* Note: Using a hint is recorded by the algorithm and lowers the difficulty factor of the word, causing it to appear in the repetition queue sooner.

---

## Adjusting Intervals to Your Needs

You can adjust the overall learning speed by opening the settings window (the [Settings] button on the main screen):
* Fast (0.5x): Cuts all intervals in half. Ideal before exams.
* Standard (1.0x): The optimal balance of forgetting, set by default.
* Slow (2.0x): Doubles the intervals, giving you more time between repetitions.
* Fine-tuning (Slider): You can manually set any multiplier from 0.2x to 3.0x using the slider.

---

## Free Practice

If you have repeated all the words for today and the "For Today" counter is 0, you can start a free practice session:
* It starts a session of 10 random words from your database.
* Important rule: To avoid throwing off the interval calculations, correct answers for words in the Spaced phase (\`SPACED\`) are saved to history but do not change the date of the next show or the repetition step. Progress for words in the Intensive phase (\`INTENSIVE\`) accumulates as usual.

---

## Progress Statistics and Analytics

The "Statistics and Progress" section on the main screen helps you track your achievements:
* Ratio Chart: Visually displays the number of words in the process of learning (Intensive) and those that have transitioned to long-term memory (Spaced).
* Accuracy: The percentage of your correct answers. Aim to keep it above 85-90%!
* Speed: The average response time per card. Indicates your level of automaticity.
* Hints: Shows how often you resort to assistance.
* Total Answers: The total volume of work you have done.

---

## Phrase Notepad

The Phrase Notepad is a standalone section of the application designed to practice listening comprehension and memorize whole German expressions.

> [!NOTE]
> Phrases saved in the notepad live exclusively there and are not mixed with the vocabulary and study cards.

### Key Capabilities:
1. Adding Expressions:
   * Enter a phrase in German.
   * Add a translation (optional) and click "Save to Notepad".
2. Pronunciation (TTS):
   * Click the [Speaker] button next to the phrase for a single playback.
   * Pronunciation uses the native Android Text-to-Speech engine (GERMAN locale).
3. Loop Repeat:
   * Click the [Repeat] button to run the phrase on auto-repeat. It will be pronounced automatically at the set time interval.
   * Click the [Stop] button on the phrase itself or the global "Stop" button on the saved phrases panel to stop playback.
4. Voice Fine-Tuning:
   * Click the [Settings] button in the notepad to open the pronunciation settings panel.
   * Adjust the Speed (from 0.5x to 2.0x) and Tone (Pitch, from 0.5 to 2.0) of the voice using the sliders.
   * Choose the repetition interval between cycles (2s, 3s, 4s, 5s, 8s).
5. Deletion:
   * You can delete a phrase by clicking the [Delete] icon.

---

## Word Backup and Import (JSON)

In the app settings, "Export" and "Import" buttons are available for saving and restoring your card vocabulary.

> [!NOTE]
> Export and import apply only to vocabulary cards. Phrases in the Notepad are not affected.

### Export
Click "Export" -> choose where to save the file. The application will create a \`lingospaced_backup.json\` file with full information: all words, learning progress, intervals, and answer history.

### Import
Click "Import" -> select the JSON file -> choose the strategy:

| Strategy | When to use |
|---|---|
| **Merge (Merge)** | Add new words from the file without losing current progress. If a word already exists, the card with the best progress is kept. |
| **Overwrite All (Overwrite)** | Full restore from a backup. The current vocabulary will be replaced. |

### JSON File Format for Creating an Import Table

The file is a JSON array \`[ ... ]\`. Each element of the array is one word. To add new words, it is sufficient to fill in 4 fields:

| Field | Description | Example |
|---|---|---|
| \`original\` | Word in German | \`"der Hund"\` |
| \`transcription\` | Transcription | \`"[hʊnt]"\` |
| \`translation\` | Translation | \`"собака"\` |
| \`context\` | Example sentence | \`"Der Hund bellt laut."\` |

**Minimal example of an import file:**
\`\`\`json
[
  {
    "original": "das Buch",
    "transcription": "[buːx]",
    "translation": "книга",
    "context": "Ich lese ein Buch."
  },
  {
    "original": "der Tisch",
    "transcription": "[tɪʃ]",
    "translation": "стол",
    "context": "Der Tisch ist aus Holz."
  }
]
\`\`\`

> [!TIP]
> You can add any additional comment fields to the JSON (for example, \`"category"\` or \`"notes"\`) — the application will safely ignore them.

### Full Field Table (for advanced users)

If you want to transfer words along with progress (for example, from one phone to another), here is the complete list of fields:

| Field | Type | Default | Description |
|---|---|---|---|
| \`id\` | String | Auto (UUID) | Unique card ID |
| \`original\` | String | — | German word (key for duplicate detection) |
| \`transcription\` | String | — | Transcription |
| \`translation\` | String | — | Translation |
| \`context\` | String | — | Example usage |
| \`status\` | \`"INTENSIVE"\` / \`"SPACED"\` | \`"INTENSIVE"\` | Study stage |
| \`stage1CorrectCount\` | Number 0–9 | \`0\` | Number of correct answers in the intensive stage |
| \`difficultyFactor\` | Number 0.1–1.0 | \`1.0\` | Difficulty coefficient |
| \`lastShowedTime\` | Number / \`null\` | \`null\` | Timestamp of last showing (Unix ms) |
| \`nextScheduledTime\` | Number | Now | Timestamp of next scheduled showing (Unix ms) |
| \`spacedStep\` | Number 0–9 | \`0\` | Spaced repetition step |
| \`lastAnswerLogs\` | Array | \`[]\` | History of the last 10 answers |
`,
    guide_ru: `# Руководство пользователя: LingoSpaced<p align="center">
  <img src="/images/projects/cover/cover_1.avif" alt="Описание картинки" width="49%" />
</p>

Добро пожаловать в LingoSpaced! Это приложение разработано для того, чтобы помочь вам эффективно и надолго выучить немецкие слова без зубрёжки. Вам не нужно самостоятельно оценивать сложность слов («легко», «сложно») или настраивать расписание — алгоритм сделает это за вас на основе вашего темпа и точности ответов.

---

## Двухэтапный цикл обучения

Процесс освоения каждого слова состоит из двух последовательных этапов:

### Этап 1: Интенсивное изучение (Intensive)
* Цель: Закрепить слово в краткосрочной памяти.
* Правило: Вам нужно дать 9 правильных ответов на слово.
* Периодичность показов:
  * При правильном ответе слово запланируется на следующий показ через 8 часов (в среднем 3 показа в день).
  * При ошибке слово не теряет набранные баллы, но запланируется на показ через 2 часа, чтобы вы могли быстрее повторить и закрепить его.
* Переход: После 9-го успешного ответа слово автоматически переходит в статус «Интервалы» (\`SPACED\`).

### Этап 2: Интервальные повторения (Spaced Repetition)
* Цель: Перевести слово в долгосрочную память с максимальными промежутками между показами.
* Правило: Базовые интервалы растут по степени двойки: $2^{\\text{step}}$ дней.
  * Шаг 0: 1 день
  * Шаг 1: 2 дня
  * Шаг 2: 4 дня
  * Шаг 3: 8 дней
  * Шаг 4: 16 дней
  * ... до Шага 9: 512 дней.
* Коррекция сложности: Интервал автоматически корректируется на основе вашей успеваемости (коэффициента сложности \`difficultyFactor\`). Если вы отвечаете быстро, без подсказок и опечаток, слово будет показываться реже. Ошибки или использование подсказок снизят коэффициент, и слово вернется в очередь быстрее.

---

## Игровые механики (Типы заданий)

Каждая карточка при показе случайно выбирает одну из четырех игровых механик для всесторонней проработки слова:

1. Выбор перевода (Choice):
   * Вам предлагается немецкое слово и 4 варианта перевода на русский. Выберите правильный.
2. Аудирование (Listening):
   * Самого слова на экране нет, отображается только большая кнопка озвучки [Динамик]. Немецкое слово озвучивается автоматически при открытии карточки.
   * Вам необходимо прослушать слово и выбрать его перевод на русский из 4 вариантов.
   * Немецкое написание слова и транскрипция откроются только после выбора ответа.
3. Сборка слова из букв (Scramble):
   * Дается перевод слова на русский язык и перемешанная лента букв немецкого слова. Нажимайте на буквы в правильном порядке, чтобы собрать немецкое слово.
4. Ввод слова с клавиатуры (Input):
   * Наиболее сложное задание. Напишите перевод слова на немецкий язык с клавиатуры.
   * Умный контроль опечаток: Алгоритм оценивает ввод по расстоянию Левенштейна. Если вы сделали 1 мелкую ошибку (для коротких слов до 6 букв) или до 2 ошибок (для длинных слов), ответ засчитается как правильный, но с пометкой «Опечатка», и сложность слова немного увеличится.

---

## Озвучивание слов (Text-to-Speech)

Во время тренировок вам доступно голосовое прослушивание немецкого слова:
* На каждой карточке рядом с основным словом (или его переводом) отображается кнопка [Динамик].
* Вы можете нажать её в любой момент тренировки (как до ответа, так и после), чтобы прослушать правильное произношение.
* Настройка голоса: Озвучка тренировочных карточек использует общие настройки скорости и тона, заданные в Блокноте фраз (кнопка [Настройки] в Блокноте). Изменения там мгновенно применяются и к тренировкам.

---

## Система подсказок

Если вы забыли слово, нажмите кнопку с лампочкой [Подсказка] в правом верхнем углу карточки:
* В выборе перевода: Убирает два неправильных варианта.
* В сборке слова: Автоматически подставляет следующую правильную букву.
* В ручном вводе: Посимвольно открывает правильное слово в текстовом поле.
* Примечание: Использование подсказки учитывается алгоритмом и снижает коэффициент сложности слова, заставляя его появиться в очереди повторения раньше.

---

## Настройка интервалов под себя

Вы можете изменить общую скорость обучения, открыв окно настроек (кнопка [Настройки] на главном экране):
* Быстрый (0.5x): Сокращает все интервалы в два раза. Идеально перед экзаменами.
* Стандартный (1.0x): Оптимальный баланс забывания, установленный по умолчанию.
* Замедленный (2.0x): Увеличивает интервалы в два раза, давая больше времени между повторениями.
* Точная подстройка (Слайдер): Вы можете вручную задать абсолютно любой множитель от 0.2x до 3.0x с помощью ползунка.

---

## Свободная тренировка (Free Practice)

Если вы повторили все слова на сегодня и счетчик «На сегодня» равен 0, вы можете запустить свободную тренировку:
* Она запускает сессию из 10 случайных слов из вашей базы данных.
* Важное правило: Чтобы не сбить расчёт интервалов, правильные ответы для слов в статусе повторения (\`SPACED\`) сохраняются в историю, но не изменяют дату следующего показа и шаг повторения. Прогресс для слов на стадии интенсивного изучения (\`INTENSIVE\`) начисляется как обычно.

---

## Статистика и аналитика прогресса

Раздел «Статистика и Прогресс» на главном экране помогает вам отслеживать успехи:
* Диаграмма соотношения: Наглядно показывает количество слов, находящихся в процессе заучивания (Интенсив) и перешедших в долгосрочную память (Интервалы).
* Точность: Процент ваших правильных ответов. Стремитесь держать его выше 85-90%!
* Скорость: Среднее время ответа на карточку. Свидетельствует об уровне автоматизма.
* Подсказки: Показывает, насколько часто вы прибегаете к помощи.
* Ответов всего: Суммарный объем вашей проделанной работы.

---

## Блокнот фраз (Phrase Notepad)

Блокнот фраз — это автономный раздел приложения, созданный для тренировки восприятия на слух и запоминания целых немецких выражений. 

> [!NOTE]
> Фразы, сохранённые в блокноте, живут исключительно в нём и не смешиваются со словарем и обучающими карточками.

### Основные возможности:
1. Добавление выражений:
   * Введите фразу на немецком языке.
   * Добавьте русский перевод (по желанию) и нажмите «Сохранить в блокнот».
2. Озвучка (TTS):
   * Нажмите на кнопку [Динамик] рядом с фразой для однократного воспроизведения.
   * Озвучка использует нативный движок Android Text-to-Speech (локаль GERMAN).
3. Циклический повтор:
   * Нажмите кнопку [Повтор], чтобы запустить фразу на автоповтор. Она будет автоматически произноситься через заданный интервал времени.
   * Нажмите кнопку [Стоп] на самой фразе или общую кнопку «Стоп» на панели сохранённых фраз, чтобы остановить воспроизведение.
4. Тонкая настройка голоса:
   * Нажмите на кнопку [Настройки] в блокноте, чтобы открыть панель настройки озвучки.
   * Отрегулируйте ползунками Скорость (от 0.5x до 2.0x) и Тон (Pitch, от 0.5 до 2.0) голоса.
   * Выберите интервал повтора между циклами (2с, 3с, 4с, 5с, 8с).
5. Удаление:
   * Удалить фразу можно нажатием на иконку [Удалить].

---

## Резервное копирование и импорт слов (JSON)

В настройках приложения доступны кнопки «Экспорт» и «Импорт» для сохранения и восстановления вашего словаря карточек.

> [!NOTE]
> Экспорт и импорт распространяются только на словарные карточки. Фразы из Блокнота не затрагиваются.

### Экспорт
Нажмите «Экспорт» -> выберите место для сохранения файла. Приложение создаст файл \`lingospaced_backup.json\` с полной информацией: все слова, прогресс обучения, интервалы и история ответов.

### Импорт
Нажмите «Импорт» -> выберите JSON-файл -> выберите стратегию:

| Стратегия | Когда использовать |
|---|---|
| **Объединить (Merge)** | Добавить новые слова из файла, не теряя текущий прогресс. Если слово уже есть — сохраняется карточка с лучшим прогрессом. |
| **Перезаписать всё (Overwrite)** | Полное восстановление из резервной копии. Текущий словарь будет заменён. |

### Формат JSON-файла для создания таблицы импорта

Файл — это JSON-массив \`[ ... ]\`. Каждый элемент массива — одно слово. Для добавления новых слов достаточно заполнить 4 поля:

| Поле | Что писать | Пример |
|---|---|---|
| \`original\` | Слово на немецком | \`"der Hund"\` |
| \`transcription\` | Транскрипция | \`"[hʊnt]"\` |
| \`translation\` | Перевод на русский | \`"собака"\` |
| \`context\` | Пример предложения | \`"Der Hund bellt laut."\` |

**Минимальный пример файла для импорта:**
\`\`\`json
[
  {
    "original": "das Buch",
    "transcription": "[buːx]",
    "translation": "книга",
    "context": "Ich lese ein Buch."
  },
  {
    "original": "der Tisch",
    "transcription": "[tɪʃ]",
    "translation": "стол",
    "context": "Der Tisch ist aus Holz."
  }
]
\`\`\`

> [!TIP]
> Вы можете добавлять в JSON любые дополнительные поля-комментарии (например, \`"category"\` или \`"notes"\`) — приложение их безопасно проигнорирует.

### Полная таблица всех полей (для продвинутых)

Если вы хотите перенести слова вместе с прогрессом (например, с одного телефона на другой), вот полный список полей:

| Поле | Тип | По умолчанию | Описание |
|---|---|---|---|
| \`id\` | Строка | Авто (UUID) | Уникальный ID карточки |
| \`original\` | Строка | — | Ключевое слово на немецком (ключ для определения дубликатов) |
| \`transcription\` | Строка | — | Транскрипция |
| \`translation\` | Строка | — | Перевод |
| \`context\` | Строка | — | Пример использования |
| \`status\` | \`"INTENSIVE"\` / \`"SPACED"\` | \`"INTENSIVE"\` | Этап обучения |
| \`stage1CorrectCount\` | Число 0–9 | \`0\` | Правильных ответов на интенсивном этапе |
| \`difficultyFactor\` | Число 0.1–1.0 | \`1.0\` | Коэффициент сложности |
| \`lastShowedTime\` | Число / \`null\` | \`null\` | Время последнего показа (Unix ms) |
| \`nextScheduledTime\` | Число | Сейчас | Время следующего показа (Unix ms) |
| \`spacedStep\` | Число 0–9 | \`0\` | Шаг интервального повторения |
| \`lastAnswerLogs\` | Массив | \`[]\` | История последних 10 ответов |
`,
    guide_de: `# Benutzerhandbuch: LingoSpaced

Willkommen bei LingoSpaced! Diese Anwendung wurde entwickelt, um Ihnen zu helfen, deutsche Vokabeln effizient und dauerhaft ohne stumpfes Auswendiglernen zu lernen. Sie müssen den Schwierigkeitsgrad von Wörtern nicht manuell bewerten (wie „einfach“ oder „schwer“) oder Pläne erstellen — der Algorithmus erledigt das alles für Sie basierend auf Ihrer Antwortgeschwindigkeit und -genauigkeit.

---

## Zweistufiger Lernzyklus

Der Prozess der Beherrschung jedes Wortes besteht aus zwei aufeinanderfolgenden Phasen:

### Stufe 1: Intensivphase (Intensive)
* Ziel: Konsolidierung des Wortes im Kurzzeitgedächtnis.
* Regel: Sie müssen 9 korrekte Antworten für das Wort geben.
* Häufigkeit der Anzeigen:
  * Bei einer korrekten Antwort wird das Wort für die nächste Anzeige in 8 Stunden geplant (durchschnittlich 3 Anzeigen pro Tag).
  * Bei einem Fehler verliert das Wort seine gesammelten Punkte nicht, wird aber für eine Anzeige in 2 Stunden geplant, damit Sie es schneller wiederholen und festigen können.
* Übergang: Nach der 9. erfolgreichen Antwort wechselt das Wort automatisch in den Status „Spaced“ (\`SPACED\`).

### Stufe 2: Spaced Repetition (Spaced Repetition)
* Ziel: Übertragung des Wortes in das Langzeitgedächtnis mit maximalen Abständen zwischen den Anzeigen.
* Regel: Die Basisintervalle wachsen in Zweierpotenzen: $2^{\\text{step}}$ Tage.
  * Schritt 0: 1 Tag
  * Schritt 1: 2 Tage
  * Schritt 2: 4 Tage
  * Schritt 3: 8 Tage
  * Schritt 4: 16 Tage
  * ... bis Schritt 9: 512 Tage.
* Schwierigkeitsanpassung: Das Intervall wird automatisch basierend auf Ihrer Leistung (dem Koeffizienten \`difficultyFactor\`) angepasst. Wenn Sie schnell, ohne Verwendung von Hinweisen und ohne Tippfehler antworten, wird das Wort seltener angezeigt. Fehler oder die Verwendung von Hinweisen verringern den Faktor, wodurch das Wort schneller in die Warteschlange zurückkehrt.

---

## Spielmechaniken (Aufgabentypen)

Jede Karte wählt während einer Sitzung zufällig eine von vier Spielmechaniken aus, um das Wort umfassend zu üben:

1. Übersetzungsauswahl (Choice):
   * Ihnen wird ein deutsches Wort und 4 Übersetzungsmöglichkeiten auf Russisch präsentiert. Wählen Sie die richtige aus.
2. Hörverstehen (Listening):
   * Das Wort selbst wird nicht auf dem Bildschirm angezeigt; es wird nur eine große Schaltfläche [Lautsprecher] angezeigt. Das deutsche Wort wird beim Öffnen der Karte automatisch ausgesprochen.
   * Sie müssen sich das Wort anhören und seine Übersetzung aus 4 Optionen auswählen.
   * Die deutsche Schreibweise und Transkription werden erst nach Auswahl einer Antwort angezeigt.
3. Worträtsel (Scramble):
   * Sie erhalten die Übersetzung des Wortes und eine gemischte Reihe von Buchstaben des deutschen Wortes. Klicken Sie auf die Buchstaben in der richtigen Reihenfolge, um das deutsche Wort zusammenzusetzen.
4. Tastatureingabe (Input):
   * Die anspruchsvollste Aufgabe. Schreiben Sie die deutsche Übersetzung des Wortes über die Tastatur.
   * Intelligente Tippfehlerkontrolle: Der Algorithmus bewertet die Eingabe anhand der Levenshtein-Distanz. Wenn Sie 1 kleinen Fehler (bei kurzen Wörtern bis zu 6 Buchstaben) oder bis zu 2 Fehler (bei langen Wörtern) machen, wird die Antwort als korrekt akzeptiert, aber als „Tippfehler“ markiert, und der Schwierigkeitsfaktor des Wortes erhöht sich leicht.

---

## Wortaussprache (Text-to-Speech)

Während der Übungen steht Ihnen die Sprachausgabe des deutschen Wortes zur Verfügung:
* Auf jeder Karte wird neben dem Hauptwort (oder seiner Übersetzung) eine Schaltfläche [Lautsprecher] angezeigt.
* Sie können diese jederzeit während der Übung anklicken (sowohl vor als auch nach der Beantwortung), um die korrekte Aussprache anzuhören.
* Spracheinstellungen: Die Aussprache auf den Trainingskarten verwendet die im Phrasen-Notizbuch festgelegten allgemeinen Einstellungen für Geschwindigkeit und Tonhöhe (Schaltfläche [Einstellungen] im Notizbuch). Änderungen dort werden sofort auf die Übungen angewendet.

---

## Hinweissystem

Wenn Sie ein Wort vergessen haben, klicken Sie auf die Schaltfläche [Hinweis] in der oberen rechten Ecke der Karte:
* In der Übersetzungsauswahl: Entfernt zwei falsche Optionen.
* Im Worträtsel: Setzt automatisch den nächsten richtigen Buchstaben ein.
* In der manuellen Texteingabe: Trägt das richtige Wort Zeichen für Zeichen in das Textfeld ein.
* Hinweis: Die Verwendung eines Hinweises wird vom Algorithmus registriert und senkt den Schwierigkeitsfaktor des Wortes, sodass es früher in der Wiederholungswarteschlange erscheint.

---

## Intervalle an die eigenen Bedürfnisse anpassen

Sie können die allgemeine Lerngeschwindigkeit anpassen, indem Sie das Einstellungsfenster öffnen (Schaltfläche [Einstellungen] auf dem Hauptbildschirm):
* Schnell (0.5x): Halbiert alle Intervalle. Ideal vor Prüfungen.
* Standard (1.0x): Das standardmäßig eingestellte, optimale Gleichgewicht des Vergessens.
* Langsam (2.0x): Verdoppelt die Intervalle, sodass Sie mehr Zeit zwischen den Wiederholungen haben.
* Feineinstellung (Schieberegler): Sie können über den Schieberegler manuell jeden Multiplikator von 0.2x bis 3.0x einstellen.

---

## Freies Training

Wenn Sie alle Wörter für heute wiederholt haben und der Zähler „Für heute“ 0 ist, können Sie eine freie Trainingssitzung starten:
* Sie startet eine Sitzung mit 10 zufälligen Wörtern aus Ihrer Datenbank.
* Wichtige Regel: Um die Intervallberechnungen nicht zu verfälschen, werden korrekte Antworten für Wörter in der Spaced-Phase (\`SPACED\`) im Verlauf gespeichert, ändern jedoch nicht das Datum der nächsten Anzeige oder den Wiederholungsschritt. Der Fortschritt für Wörter in der Intensivphase (\`INTENSIVE\`) sammelt sich normal an.

---

## Fortschrittsstatistiken und -analysen

Der Bereich „Statistik und Fortschritt“ auf dem Hauptbildschirm hilft Ihnen, Ihre Erfolge zu verfolgen:
* Verhältnisdiagramm: Zeigt visuell die Anzahl der Wörter an, die sich im Lernprozess befinden (Intensiv) und derjenigen, die in das Langzeitgedächtnis übergegangen sind (Spaced).
* Genauigkeit: Der Prozentsatz Ihrer richtigen Antworten. Versuchen Sie, diesen über 85-90% zu halten!
* Geschwindigkeit: Die durchschnittliche Antwortzeit pro Karte. Zeigt den Grad Ihrer Automatisierung an.
* Hinweise: Zeigt, wie oft Sie auf Hilfe zurückgreifen.
* Antworten insgesamt: Das Gesamtvolumen der von Ihnen geleisteten Arbeit.

---

## Phrasen-Notizbuch

Das Phrasen-Notizbuch ist ein eigenständiger Bereich der Anwendung, der dazu dient, das Hörverstehen zu üben und ganze deutsche Ausdrücke auswendig zu lernen.

> [!NOTE]
> Im Notizbuch gespeicherte Phrasen leben ausschließlich dort und werden nicht mit dem Vokabular und den Lernkarten vermischt.

### Hauptfunktionen:
1. Hinzufügen von Ausdrücken:
   * Geben Sie eine Phrase auf Deutsch ein.
   * Fügen Sie eine Übersetzung hinzu (optional) und klicken Sie auf „Im Notizbuch speichern“.
2. Aussprache (TTS):
   * Klicken Sie auf die Schaltfläche [Lautsprecher] neben der Phrase für eine einmalige Wiedergabe.
   * Die Aussprache verwendet die native Android Text-to-Speech-Engine (GERMAN-Sprachpaket).
3. Endlosschleife:
   * Klicken Sie auf die Schaltfläche [Wiederholen], um die Phrase in einer Endlosschleife abzuspielen. Sie wird automatisch im eingestellten Zeitintervall ausgesprochen.
   * Klicken Sie auf die Schaltfläche [Stopp] an der Phrase selbst oder die globale Schaltfläche „Stopp“ im Bereich der gespeicherten Phrasen, um die Wiedergabe zu beenden.
4. Stimme feineinstellen:
   * Klicken Sie auf die Schaltfläche [Einstellungen] im Notizbuch, um das Einstellungsfenster für die Aussprache zu öffnen.
   * Passen Sie die Geschwindigkeit (von 0.5x bis 2.0x) und die Tonhöhe (Pitch, von 0.5 bis 2.0) der Stimme mit den Schiebereglern an.
   * Wählen Sie das Wiederholungsintervall zwischen den Zyklen (2s, 3s, 4s, 5s, 8s).
5. Löschen:
   * Sie können eine Phrase löschen, indem Sie auf das Symbol [Löschen] klicken.

---

## Datensicherung und -import (JSON)

In den App-Einstellungen stehen die Schaltflächen „Export“ und „Import“ zum Speichern und Wiederherstellen Ihres Kartenwortschatzes zur Verfügung.

> [!NOTE]
> Export und Import gelten nur für Vokabelkarten. Phrasen im Notizbuch sind davon nicht betroffen.

### Export
Klicken Sie auf „Export“ -> wählen Sie den Speicherort für die Datei. Die Anwendung erstellt eine Datei \`lingospaced_backup.json\` mit vollständigen Informationen: alle Wörter, Lernfortschritt, Intervalle und Antwortverlauf.

### Import
Klicken Sie auf „Import“ -> wählen Sie die JSON-Datei aus -> wählen Sie die Strategie:

| Strategie | Wann zu verwenden |
|---|---|
| **Zusammenführen (Merge)** | Neue Wörter aus der Datei hinzufügen, ohne den aktuellen Fortschritt zu verlieren. Wenn ein Wort bereits existiert, wird die Karte mit dem besten Fortschritt behalten. |
| **Alles überschreiben (Overwrite)** | Vollständige Wiederherstellung aus einer Sicherung. Der aktuelle Wortschatz wird ersetzt. |

### JSON-Dateiformat zum Erstellen einer Importtabelle

Die Datei ist ein JSON-Array \`[ ... ]\`. Jedes Element des Arrays ist ein Wort. Um neue Wörter hinzuzufügen, reicht es aus, 4 Felder auszufüllen:

| Feld | Beschreibung | Beispiel |
|---|---|---|
| \`original\` | Wort auf Deutsch | \`"der Hund"\` |
| \`transcription\` | Transkription | \`"[hʊnt]"\` |
| \`translation\` | Übersetzung | \`"собака"\` |
| \`context\` | Beispielsatz | \`"Der Hund bellt laut."\` |

**Minimales Beispiel einer Importdatei:**
\`\`\`json
[
  {
    "original": "das Buch",
    "transcription": "[buːx]",
    "translation": "книга",
    "context": "Ich lese ein Buch."
  },
  {
    "original": "der Tisch",
    "transcription": "[tɪʃ]",
    "translation": "стол",
    "context": "Der Tisch ist aus Holz."
  }
]
\`\`\`

> [!TIP]
> Sie können dem JSON beliebige zusätzliche Kommentarfelder hinzufügen (z. B. \`"category"\` oder \`"notes"\`) — die Anwendung ignoriert diese sicher.

### Vollständige Feldertabelle (für Fortgeschrittene)

Wenn Sie Wörter zusammen mit dem Fortschritt übertragen möchten (z. B. von einem Telefon auf ein anderes), ist hier die vollständige Liste der Felder:

| Feld | Typ | Standard | Beschreibung |
|---|---|---|---|
| \`id\` | String | Auto (UUID) | Eindeutige Karten-ID |
| \`original\` | String | — | Deutsches Wort (Schlüssel für Duplikaterkennung) |
| \`transcription\` | String | — | Transkription |
| \`translation\` | String | — | Übersetzung |
| \`context\` | String | — | Beispielverwendung |
| \`status\` | \`"INTENSIVE"\` / \`"SPACED"\` | \`"INTENSIVE"\` | Lernstufe |
| \`stage1CorrectCount\` | Zahl 0–9 | \`0\` | Anzahl der richtigen Antworten in der Intensivphase |
| \`difficultyFactor\` | Zahl 0.1–1.0 | \`1.0\` | Schwierigkeitskoeffizient |
| \`lastShowedTime\` | Zahl / \`null\` | \`null\` | Zeitstempel der letzten Anzeige (Unix ms) |
| \`nextScheduledTime\` | Zahl | Jetzt | Zeitstempel der nächsten geplanten Anzeige (Unix ms) |
| \`spacedStep\` | Zahl 0–9 | \`0\` | Spaced-Repetition-Schritt |
| \`lastAnswerLogs\` | Array | \`[]\` | Verlauf der letzten 10 Antworten |
`,
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
\`\`\``,
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
    image: "/images/projects/screentation-v2.png",
    readme: `[ English ](README.md) • [ Русский ](README_RU.md) • [ Deutsch ](README_DE.md)

# Screentation

**Screentation** is a native Windows application for quickly creating, editing and annotating screenshots. Written in C# using the modern interface **WinUI 3 (Windows App SDK)** and the graphics library **Win2D** for hardware rendering.

The application allows you to instantly capture screenshots from the clipboard (including in a minimized state), apply arrows, frames, text on top of them, blur sensitive data, crop images and automatically number instruction steps (both in numbers and in Latin letters).

---

<p align="center">
  <img src="screenshots/screentation_01.png" alt="Screentation Canvas" width="49%" />
  <img src="screenshots/screentation_02.png" alt="Screentation Editor" width="49%" />
</p>

---

## User Guide

### Key Features
1. **Automatic Capture**: When the application is open or simply minimized to tray, when you click \`PrintScreen\` (or take a photo using Windows Snipping Tool), the screenshot is automatically added to the list on the left.
2. **Annotation Tools**:
 - **Select**: Select, move and resize applied elements.
 - **Frame (Rect)**: Creates rectangular areas (optional with translucent fill).
 - **Arrow**: Create directional arrows.
 - **Blur**: Gaussian blur effect to hide sensitive information.
 - **Eraser**: Copy and transfer texture (clone area) to hide interface elements.
 - **Text**: Enter custom text on the canvas with the ability to change font size and color.
 - **Step**: Automatic sequence of steps.
3. **Smart Crop**:
 - Allows you to crop the screenshot to any rectangular area.
 - When cropping is confirmed, all previously drawn elements are shifted to the corresponding vector, remaining exactly in their places relative to the cropped frame.
4. **Zoom & Pan**:
 - Scaling is performed by holding the **\`Ctrl\` key + mouse wheel** (focuses on the cursor) or by dragging the **scaling slider** in the right panel.
 - Moving around the enlarged canvas is done by **holding the middle mouse button (wheel)** and dragging.
 - The **“Reset”** button returns the scale to the “fit to window” mode.
5. **Numbering of steps**:
 - Supports 3 formats: Numbers (\`1, 2, 3...\`), Latin capital letters (\`A, B... Z, AA...\`), Latin small letters (\`a, b... z, aa...\`).
 - The “Next step” field allows you to set the starting number or change the current index.
6. **Color selection**:
 - Ready-made quick colors available.
 - The **“Select color...”** button opens the spectral palette (ColorPicker) for selecting any custom shade. The selected color is retained between application restarts.

### Localization & System Tray

* **Supported Languages**: English (\`en-US\`), Russian (\`ru-RU\`), and German (\`de-DE\`). 
  - The application automatically detects your Windows display language (configured in **Settings -> Time & Language -> Language**) and loads the corresponding interface strings.
* **System Tray Behavior**:
  - Closing the main window (using the \`X\` button) does not terminate the application. Instead, it hides it to the system tray to continue background clipboard monitoring.
  - To restore the window, double-click the system tray icon, or right-click the icon and choose **Open Screentation**.
  - To completely close the application, right-click the system tray icon and choose **Exit**.

### Keyboard Shortcuts
| Key | Action |
| :--- | :--- |
| \`Ctrl + V\` | Paste screenshot from clipboard manually |
| \`Ctrl + Z\` | Undo last action (Undo) |
| \`Ctrl + Y\` / \`Ctrl + Shift + Z\` | Redo a undone action (Redo) |
| \`Ctrl + S\` | Save active screenshot to disk |
| \`Ctrl + Shift + S\` | Save all screenshots (batch saving) |
| \`Delete\` / \`Backspace\` | Delete selected annotation element |
| \`Escape\` | Exit current mode / reset selection |
| \`Enter\` *(in frame mode)* | Apply crop |
| \`Escape\` *(in frame mode)* | Undo crop |
| \`1\`, \`2\`, \`3\`, \`4\`, \`5\` | Quick selection of tools: Frame, Step, Arrow, Blur, Stamp |

---

## Developer Guide

### Technology stack
* **Platform**: .NET 10.0, Windows 10/11
* **UI Framework**: WinUI 3 (Windows App SDK 2.2.0)
* **Graphics**: Win2D (Microsoft.Graphics.Win2D 1.4.0) hardware 2D rendering based on Direct2D
* **System integration**: Subclassing windows (Comctl32) to intercept Win32 clipboard events

### Project structure
\`\`\`
Screentation/
├── Assets/                    # Иконки, заставки и графические ресурсы
├── Properties/                # Параметры запуска (launchSettings.json)
├── Models.cs                  # Модели данных (ScreenshotSession, AnnotationElement, etc.)
├── AnnotationCanvas.cs        # Интерактивный холст (обработка мыши, отрисовка, логика инструментов)
├── AnnotationDrawer.cs        # Рендеринг фигур и текста на холсте через Win2D
├── ClipboardMonitor.cs        # Фоновый Win32-мониторинг буфера обмена (WM_CLIPBOARDUPDATE)
├── HistoryManager.cs          # Стек отмены/повтора действий (Undo/Redo)
├── SettingsManager.cs         # Чтение и запись конфигурации пользователя (JSON)
├── ExportManager.cs           # Экспорт скриншотов в форматы PNG, JPEG, WebP
├── MainPage.xaml / .cs        # Основной экран интерфейса (панель инструментов, настройки)
├── MainWindow.xaml / .cs      # Корневое окно приложения и интеграция с треем
└── Screentation.csproj        # Файл конфигурации проекта
\`\`\`

### Key Component Architecture

#### 1. Background clipboard interception (\`ClipboardMonitor.cs\`)
To reliably intercept screenshots in a minimized state, the Win32 function \`AddClipboardFormatListener\` is used, which registers the application window in the clipboard listening chain. When data changes, the window receives the \`WM_CLIPBOARDUPDATE\` system message.
* **Lock protection**: Because the snapshot source (eg Windows Clipboard) locks the buffer while it is being written, it pauses for 100 ms before reading the data and starts a cycle of 10 access attempts (\`OpenClipboard\`).
* **Deduplication**: Windows sends multiple updates in a row for different formats of the same data. To prevent duplicates, the DIB image header is read, reference pixels are calculated and checked against the previous image. If the content is identical and received within 2 seconds of the previous snapshot, it is cut off as a system duplicate.

#### 2. Interactive canvas (\`AnnotationCanvas.cs\`)
Inherits from \`Grid\` and contains \`CanvasControl\` (Win2D). 
* **Grid**: All annotation coordinates are stored in the original screenshot resolution. When rendering, a transformation matrix is ​​applied to the Win2D context (\`Matrix3x2.CreateScale(_scale) * Matrix3x2.CreateTranslation(_offsetX, _offsetY)\`), due to which all shapes are scaled and moved smoothly and without loss of clarity.
* **Text editor**: When placing text on the canvas, the standard \`TextBox\` control is dynamically projected with the \`Loaded\` focus property enabled and aligned to the top-left edge of the canvas. Losing focus or pressing \`Enter\` bakes the text into a vector \`TextElement\`.

#### 3. Rendering shapes (\`AnnotationDrawer.cs\`)
Static class that performs low-level drawing of vector primitives on the \`CanvasDrawingSession\`. Blurring is implemented using the \`GaussianBlurEffect\` effect based on the original \`CanvasBitmap\` texture cache.

---

## ️ Build & Run

### Requirements
* OS: Windows 10 (version 1809 / build 17763) or newer.
* Visual Studio 2022 with **Application development for the Windows platform (UWP/WinUI)** or .NET 10 SDK installed.

###Build commands in the CLI
Build the project:
\`\`\`bash
dotnet build
\`\`\`

Launching the application:
\`\`\`bash
dotnet run
\`\`\`

Publishing (fully autonomous single-file release):
\`\`\`bash
dotnet publish -c Release -r win-x64 --self-contained true
\`\`\`
The result will be saved in \`Screentation/bin/Release/net10.0-windows10.0.26100.0/win-x64/publish/\` and consists of:
- **\`Screentation.exe\`** (a single ~300 MB executable containing the .NET 10.0 Runtime, Windows App SDK, and all dependency DLLs)
- **\`Assets/\`** (folder containing icons and logos)
- **\`Screentation.pdb\`** (debug symbols, optional for distribution)`,
    readme_ru: `[ English ](README.md) • [ Русский ](README_RU.md) • [ Deutsch ](README_DE.md)

# Screentation

**Screentation** это нативное Windows-приложение для быстрого создания, редактирования и аннотирования скриншотов. Написано на C# с использованием современного интерфейса **WinUI 3 (Windows App SDK)** и графической библиотеки **Win2D** для аппаратного рендеринга.

Приложение позволяет мгновенно захватывать скриншоты из буфера обмена (в том числе в свернутом состоянии), наносить поверх них стрелки, рамки, текст, размывать конфиденциальные данные, обрезать изображения и автоматически нумеровать шаги инструкций (как цифрами, так и латинскими буквами).

---

<p align="center">
  <img src="screenshots/screentation_01.png" alt="Screentation Canvas" width="49%" />
  <img src="screenshots/screentation_02.png" alt="Screentation Editor" width="49%" />
</p>

---

## Руководство пользователя (User Guide)

### Основные возможности
1. **Автоматический захват**: Когда приложение открыто или просто свёрнуто в трей, при нажатии \`PrintScreen\` (или создании снимка через «Ножницы» Windows) скриншот автоматически добавляется в список слева.
2. **Инструменты аннотирования**:
- **Выбор (Select)**: Выделение, перемещение и изменение размеров нанесенных элементов.
- **Рамка (Rect)**: Создание прямоугольных областей (опционально с полупрозрачной заливкой).
- **Стрелка (Arrow)**: Создание указательных стрелок.
- **Размытие (Blur)**: Эффект размытия по Гауссу для скрытия конфиденциальной информации.
- **Штамп (Eraser)**: Копирование и перенос текстуры (клонирование области) для скрытия элементов интерфейса.
- **Текст (Text)**: Ввод произвольного текста на холсте с возможностью изменения размера шрифта и цвета.
- **Шаг (Step)**: Автоматическая последовательность шагов.
3. **Умное кадрирование (Crop)**:
- Позволяет обрезать снимок экрана по любой прямоугольной области.
- При подтверждении обрезки все ранее нарисованные элементы смещаются на соответствующий вектор, оставаясь точно на своих местах относительно обрезанного кадра.
4. **Масштабирование и навигация (Zoom & Pan)**:
- Масштабирование выполняется зажатием клавиши **\`Ctrl\` + колесико мыши** (фокусируется на курсоре) либо перетаскиванием **ползунка масштабирования (Slider)** в правой панели.
- Перемещение по увеличенному холсту выполняется **зажатием средней кнопки мыши (колесика)** и перетаскиванием.
- Кнопка **«Сбросить»** возвращает масштаб в режим «по размеру окна».
5. **Нумерация шагов**:
- Поддерживает 3 формата: Цифры (\`1, 2, 3...\`), Латинские заглавные (\`A, B... Z, AA...\`), Латинские строчные (\`a, b... z, aa...\`).
- Поле «Следующий шаг» позволяет задавать стартовый номер или изменять текущий индекс.
6. **Выбор цвета**:
- Доступны готовые быстрые цвета.
- Кнопка **«Выбрать цвет...»** открывает спектральную палитру (ColorPicker) для выбора любого пользовательского оттенка. Выбранный цвет сохраняется между перезапусками приложения.

### Локализация и системный трей

* **Поддерживаемые языки**: Русский (\`ru-RU\`), Английский (\`en-US\`) и Немецкий (\`de-DE\`).
  - Приложение автоматически определяет язык интерфейса Windows (заданный в разделе **Параметры -> Время и язык -> Язык**) и загружает соответствующий перевод.
* **Работа с системным треем**:
  - Нажатие на кнопку закрытия окна (\`X\`) не завершает работу программы, а сворачивает её в системный трей для продолжения фонового мониторинга буфера обмена.
  - Чтобы восстановить окно, дважды кликните по иконке в трее или нажмите правой кнопкой мыши и выберите **Открыть Screentation**.
  - Для полного закрытия приложения нажмите правой кнопкой мыши по иконке в трее и выберите **Выход**.

### Горячие клавиши (Keyboard Shortcuts)
| Клавиша | Действие |
| :--- | :--- |
| \`Ctrl + V\` | Вставить скриншот из буфера обмена вручную |
| \`Ctrl + Z\` | Отменить последнее действие (Undo) |
| \`Ctrl + Y\` / \`Ctrl + Shift + Z\` | Повторить отмененное действие (Redo) |
| \`Ctrl + S\` | Сохранить активный скриншот на диск |
| \`Ctrl + Shift + S\` | Сохранить все скриншоты (пакетное сохранение) |
| \`Delete\` / \`Backspace\` | Удалить выделенный элемент аннотации |
| \`Escape\` | Выйти из текущего режима / сбросить выделение |
| \`Enter\` *(в режиме кадра)* | Применить обрезку |
| \`Escape\` *(в режиме кадра)* | Отменить обрезку |
| \`1\`, \`2\`, \`3\`, \`4\`, \`5\` | Быстрый выбор инструментов: Рамка, Шаг, Стрелка, Размытие, Штамп |

---

## Руководство разработчика (Developer Guide)

### Стек технологий
* **Платформа**: .NET 10.0, Windows 10/11
* **UI Framework**: WinUI 3 (Windows App SDK 2.2.0)
* **Графика**: Win2D (Microsoft.Graphics.Win2D 1.4.0) аппаратный 2D-рендеринг на базе Direct2D
* **Системная интеграция**: Subclassing окон (Comctl32) для перехвата Win32-событий буфера обмена

### Структура проекта
\`\`\`
Screentation/
Assets/ # Иконки, заставки и графические ресурсы
Properties/ # Параметры запуска (launchSettings.json)
Models.cs # Модели данных (ScreenshotSession, AnnotationElement, etc.)
AnnotationCanvas.cs # Интерактивный холст (обработка мыши, отрисовка, логика инструментов)
AnnotationDrawer.cs # Рендеринг фигур и текста на холсте через Win2D
ClipboardMonitor.cs # Фоновый Win32-мониторинг буфера обмена (WM_CLIPBOARDUPDATE)
HistoryManager.cs # Стек отмены/повтора действий (Undo/Redo)
SettingsManager.cs # Чтение и запись конфигурации пользователя (JSON)
ExportManager.cs # Экспорт скриншотов в форматы PNG, JPEG, WebP
MainPage.xaml / .cs # Основной экран интерфейса (панель инструментов, настройки)
MainWindow.xaml / .cs # Корневое окно приложения и интеграция с треем
Screentation.csproj # Файл конфигурации проекта
\`\`\`

### Архитектура ключевых компонентов

#### 1. Фоновый перехват буфера обмена (\`ClipboardMonitor.cs\`)
Для стабильного перехвата скриншотов в свёрнутом состоянии используется Win32-функция \`AddClipboardFormatListener\`, регистрирующая окно приложения в цепочке прослушивания буфера обмена. При изменении данных окно получает системное сообщение \`WM_CLIPBOARDUPDATE\`.
* **Защита от блокировок**: Поскольку источник снимка (например, ножницы Windows) блокирует буфер на время записи, перед чтением данных делается пауза в 100 мс и запускается цикл из 10 попыток обращения (\`OpenClipboard\`).
* **Дедупликация**: Windows отправляет несколько обновлений подряд для разных форматов одних и тех же данных. Для предотвращения дубликатов считывается заголовок DIB-картинки, вычисляются контрольные пиксели и сверяются с предыдущим снимком. Если контент идентичен и получен в пределах 2 секунд от прошлого снимка, он отсекается как системный дубликат.

#### 2. Интерактивный холст (\`AnnotationCanvas.cs\`)
Наследуется от \`Grid\` и содержит \`CanvasControl\` (Win2D).
* **Координатная сетка**: Все координаты аннотаций хранятся в оригинальном разрешении скриншота. При отрисовке к контексту Win2D применяется матрица трансформации (\`Matrix3x2.CreateScale(_scale) * Matrix3x2.CreateTranslation(_offsetX, _offsetY)\`), благодаря чему все фигуры масштабируются и перемещаются плавно и без потери четкости.
* **Текстовый редактор**: При размещении текста на холст динамически проецируется стандартный контрол \`TextBox\` с включенным свойством \`Loaded\`-фокусировки и выравниванием по левому-верхнему краю холста. Потеря фокуса или клавиша \`Enter\` запекают текст в векторный \`TextElement\`.

#### 3. Рендеринг фигур (\`AnnotationDrawer.cs\`)
Статический класс, выполняющий низкоуровневую прорисовку векторных примитивов на \`CanvasDrawingSession\`. Размытие реализуется с помощью эффекта \`GaussianBlurEffect\` на базе исходного кэша текстуры \`CanvasBitmap\`.

---

## ️ Сборка и запуск (Build & Run)

### Требования
* ОС: Windows 10 (версия 1809 / сборка 17763) или более новая.
* Visual Studio 2022 с установленным компонентом **Разработка приложений для платформы Windows (UWP/WinUI)** или .NET 10 SDK.

### Команды сборки в CLI
Сборка проекта:
\`\`\`bash
dotnet build
\`\`\`

Запуск приложения:
\`\`\`bash
dotnet run
\`\`\`

Публикация (полностью автономный релиз в один файл):
\`\`\`bash
dotnet publish -c Release -r win-x64 --self-contained true
\`\`\`
Результат будет сохранен в папку \`Screentation/bin/Release/net10.0-windows10.0.26100.0/win-x64/publish/\` и будет состоять из:
- **\`Screentation.exe\`** (один исполняемый файл ~300 МБ, содержащий .NET 10.0 Runtime, Windows App SDK и все системные DLL)
- **\`Assets/\`** (папка с иконками и логотипами)
- **\`Screentation.pdb\`** (символы отладки, не обязательны для работы)`,
    readme_de: `[ English ](README.md) • [ Русский ](README_RU.md) • [ Deutsch ](README_DE.md)

# Screentation

**Screentation** ist eine native Windows-Anwendung zum schnellen Erstellen, Bearbeiten und Kommentieren von Screenshots. Geschrieben in C# unter Verwendung der modernen Schnittstelle **WinUI 3 (Windows App SDK)** und der Grafikbibliothek **Win2D** für Hardware-Rendering.

Mit der Anwendung können Sie sofort Screenshots aus der Zwischenablage aufnehmen (auch im minimierten Zustand), Pfeile, Rahmen und Text darauf anwenden, vertrauliche Daten verwischen, Bilder zuschneiden und Anweisungsschritte automatisch nummerieren (sowohl in Zahlen als auch in lateinischen Buchstaben).

---

<p align="center">
  <img src="screenshots/screentation_01.png" alt="Screentation Canvas" width="49%" />
  <img src="screenshots/screentation_02.png" alt="Screentation Editor" width="49%" />
</p>

---

## Benutzerhandbuch

### Hauptmerkmale
1. **Automatische Aufnahme**: Wenn die Anwendung geöffnet oder einfach in der Taskleiste minimiert ist und Sie auf „PrintScreen“ klicken (oder ein Foto mit dem Windows Snipping Tool aufnehmen), wird der Screenshot automatisch zur Liste auf der linken Seite hinzugefügt.
2. **Anmerkungstools**:
 - **Auswählen**: Angewandte Elemente auswählen, verschieben und in der Größe ändern.
 - **Rahmen (Rect)**: Erstellt rechteckige Bereiche (optional mit durchscheinender Füllung).
 - **Pfeil**: Richtungspfeile erstellen.
 - **Unschärfe**: Gaußscher Unschärfeeffekt zum Ausblenden vertraulicher Informationen.
 - **Radiergummi**: Textur kopieren und übertragen (Klonbereich), um Oberflächenelemente auszublenden.
 - **Text**: Geben Sie benutzerdefinierten Text auf der Leinwand ein und haben Sie die Möglichkeit, Schriftgröße und -farbe zu ändern.
 - **Schritt**: Automatische Abfolge von Schritten.
3. **Intelligentes Zuschneiden**:
 - Ermöglicht das Zuschneiden des Screenshots auf einen beliebigen rechteckigen Bereich.
 - Wenn das Zuschneiden bestätigt wird, werden alle zuvor gezeichneten Elemente auf den entsprechenden Vektor verschoben und bleiben genau an ihren Plätzen relativ zum zugeschnittenen Rahmen.
4. **Zoom & Schwenk**:
 - Die Skalierung erfolgt durch Halten der **\`Strg\`-Taste + Mausrad** (fokussiert auf den Cursor) oder durch Ziehen des **Skalierungsschiebereglers** im rechten Bereich.
 - Das Bewegen auf der vergrößerten Leinwand erfolgt durch **Halten der mittleren Maustaste (Rad)** und Ziehen.
 - Mit der Schaltfläche **Zurücksetzen** kehrt die Skala in den Modus „An Fenster anpassen“ zurück.
5. **Nummerierung der Schritte**:
 - Unterstützt 3 Formate: Zahlen (\`1, 2, 3...\`), lateinische Großbuchstaben (\`A, B... Z, AA...\`), lateinische Kleinbuchstaben (\`a, b... z, aa...\`).
 - Im Feld „Nächster Schritt“ können Sie die Startnummer festlegen oder den aktuellen Index ändern.
6. **Farbauswahl**:
 - Fertige Schnellfarben verfügbar.
 - Die Schaltfläche **Farbe auswählen...** öffnet die Spektralpalette (ColorPicker) zur Auswahl eines beliebigen benutzerdefinierten Farbtons. Die ausgewählte Farbe bleibt zwischen Anwendungsneustarts erhalten.

### Lokalisierung & System-Tray

* **Unterstützte Sprachen**: Deutsch (\`de-DE\`), Englisch (\`en-US\`) und Russisch (\`ru-RU\`).
  - Die Anwendung erkennt automatisch die Windows-Anzeigesprache (konfiguriert unter **Einstellungen -> Zeit und Sprache -> Sprache**) und lädt die entsprechende Übersetzung.
* **Verhalten im System-Tray**:
  - Das Schließen des Hauptfensters (über die Schaltfläche \`X\`) beendet die Anwendung nicht. Stattdessen wird sie im System-Tray ausgeblendet, um die Hintergrundüberwachung der Zwischenablage fortzusetzen.
  - Um das Fenster wiederherzustellen, doppelklicken Sie auf das System-Tray-Symbol oder klicken Sie mit der rechten Maustaste auf das Symbol und wählen Sie **Screentation öffnen**.
  - Um die Anwendung vollständig zu beenden, klicken Sie mit der rechten Maustaste auf das System-Tray-Symbol und wählen Sie **Beenden**.

### Tastaturkürzel
| Schlüssel | Aktion |
| :--- | :--- |
| \`Strg + V\` | Screenshot manuell aus der Zwischenablage einfügen |
| \`Strg + Z\` | Letzte Aktion rückgängig machen (Rückgängig) |
| „Strg + Y“ / „Strg + Umschalt + Z“ | Eine rückgängig gemachte Aktion wiederherstellen (Redo) |
| \`Strg + S\` | Aktiven Screenshot auf Festplatte speichern |
| \`Strg + Umschalt + S\` | Alle Screenshots speichern (Stapelspeicherung) |
| „Löschen“ / „Rücktaste“ | Ausgewähltes Anmerkungselement löschen |
| „Flucht“ | Aktuellen Modus verlassen / Auswahl zurücksetzen |
| \`Enter\` *(im Frame-Modus)* | Zuschneiden anwenden |
| \`Escape\` *(im Frame-Modus)* | Zuschneiden rückgängig machen |
| „1“, „2“, „3“, „4“, „5“ | Schnelle Auswahl an Werkzeugen: Rahmen, Schritt, Pfeil, Unschärfe, Stempel |

---

## Entwicklerhandbuch

### Technologie-Stack
* **Plattform**: .NET 10.0, Windows 10/11
* **UI-Framework**: WinUI 3 (Windows App SDK 2.2.0)
* **Grafik**: Win2D (Microsoft.Graphics.Win2D 1.4.0) Hardware-2D-Rendering basierend auf Direct2D
* **Systemintegration**: Unterklassen von Windows (Comctl32), um Win32-Zwischenablageereignisse abzufangen

### Projektstruktur
\`\`\`
Screentation/
├── Assets/                    # Иконки, заставки и графические ресурсы
├── Properties/                # Параметры запуска (launchSettings.json)
├── Models.cs                  # Модели данных (ScreenshotSession, AnnotationElement, etc.)
├── AnnotationCanvas.cs        # Интерактивный холст (обработка мыши, отрисовка, логика инструментов)
├── AnnotationDrawer.cs        # Рендеринг фигур и текста на холсте через Win2D
├── ClipboardMonitor.cs        # Фоновый Win32-мониторинг буфера обмена (WM_CLIPBOARDUPDATE)
├── HistoryManager.cs          # Стек отмены/повтора действий (Undo/Redo)
├── SettingsManager.cs         # Чтение и запись конфигурации пользователя (JSON)
├── ExportManager.cs           # Экспорт скриншотов в форматы PNG, JPEG, WebP
├── MainPage.xaml / .cs        # Основной экран интерфейса (панель инструментов, настройки)
├── MainWindow.xaml / .cs      # Корневое окно приложения и интеграция с треем
└── Screentation.csproj        # Файл конфигурации проекта
\`\`\`

### Schlüsselkomponentenarchitektur

#### 1. Abfangen der Zwischenablage im Hintergrund („ClipboardMonitor.cs“)
Um Screenshots im minimierten Zustand zuverlässig abzufangen, wird die Win32-Funktion „AddClipboardFormatListener“ verwendet, die das Anwendungsfenster in der Abhörkette der Zwischenablage registriert. Wenn sich Daten ändern, empfängt das Fenster die Systemmeldung „WM_CLIPBOARDUPDATE“.
* **Sperrschutz**: Da die Snapshot-Quelle (z. B. Windows-Zwischenablage) den Puffer während des Schreibens sperrt, pausiert sie vor dem Lesen der Daten 100 ms und startet einen Zyklus von 10 Zugriffsversuchen („OpenClipboard“).
* **Deduplizierung**: Windows sendet mehrere Updates hintereinander für verschiedene Formate derselben Daten. Um Duplikate zu vermeiden, wird der DIB-Bildkopf gelesen, Referenzpixel berechnet und mit dem vorherigen Bild verglichen. Wenn der Inhalt identisch ist und innerhalb von 2 Sekunden nach dem vorherigen Schnappschuss empfangen wird, wird er als Systemduplikat abgeschnitten.

#### 2. Interaktive Leinwand (\`AnnotationCanvas.cs\`)
Erbt von „Grid“ und enthält „CanvasControl“ (Win2D). 
* **Raster**: Alle Anmerkungskoordinaten werden in der ursprünglichen Screenshot-Auflösung gespeichert. Beim Rendern wird eine Transformationsmatrix auf den Win2D-Kontext angewendet („Matrix3x2.CreateScale(_scale) * Matrix3x2.CreateTranslation(_offsetX, _offsetY)“), wodurch alle Formen reibungslos und ohne Verlust der Klarheit skaliert und verschoben werden.
* **Texteditor**: Beim Platzieren von Text auf der Leinwand wird das Standardsteuerelement „TextBox“ dynamisch mit aktivierter Fokuseigenschaft „Geladen“ projiziert und am oberen linken Rand der Leinwand ausgerichtet. Wenn Sie den Fokus verlieren oder die Eingabetaste drücken, wird der Text in einen Vektor „TextElement“ umgewandelt.

#### 3. Formen rendern (\`AnnotationDrawer.cs\`)
Statische Klasse, die das Zeichnen von Vektorprimitiven auf niedriger Ebene in der „CanvasDrawingSession“ durchführt. Die Unschärfe wird mithilfe des Effekts „GaussianBlurEffect“ implementiert, der auf dem ursprünglichen Textur-Cache „CanvasBitmap“ basiert.

---

##️ Bauen und ausführen

### Anforderungen
* Betriebssystem: Windows 10 (Version 1809 / Build 17763) oder neuer.
* Visual Studio 2022 mit installierter **Anwendungsentwicklung für die Windows-Plattform (UWP/WinUI)** oder .NET 10 SDK.

###Befehle in der CLI erstellen
Erstellen Sie das Projekt:
\`\`\`bash
dotnet build
\`\`\`

Starten der Anwendung:
\`\`\`bash
dotnet run
\`\`\`

Veröffentlichung (vollständig autonome Single-File-Version):
\`\`\`bash
dotnet publish -c Release -r win-x64 --self-contained true
\`\`\`
Das Ergebnis wird im Verzeichnis \`Screentation/bin/Release/net10.0-windows10.0.26100.0/win-x64/publish/\` gespeichert und besteht aus:
- **\`Screentation.exe\`** (eine einzelne ~300 MB große ausführbare Datei, die die .NET 10.0-Laufzeitumgebung, das Windows App SDK und alle abhängigen DLLs enthält)
- **\`Assets/\`** (Ordner mit Symbolen und Logos)
- **\`Screentation.pdb\`** (Debugschnittstellensymbole, optional für den Vertrieb)`,
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
`,
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

GPL-3.0`,
  },
  "seogeek": {
    title: "Seogeek",
    subtitle: "Описание проекта.",
    category: "Open Source",
    lang: "C++",
    platform: "Windows 11",
    stars: "0",
    license: "MIT",
    github: "https://github.com/Almanex/Seogeek",
    image: "/images/projects/seogeek.png",
    readme: `[ English ](README.md) • [ Русский ](docs/README_RU.md) • [ Deutsch ](docs/README_DE.md)

# Seogeek AI

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




**Seogeek AI** is a professional local desktop application for Windows 11 designed for deep technical and search engine optimization (SEO) website auditing, visibility analysis, and automatic recommendation generation powered by Artificial Intelligence.

The application combines classic auditing (speed, broken links, meta tags, schema markup) with live statistics collection from search engines and user behavioral factors, building an interactive website optimization plan.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Platform](https://img.shields.io/badge/Platform-Windows%2011-blue.svg)](#)
[![Framework](https://img.shields.io/badge/Framework-Tauri%20v2-orange.svg)](https://tauri.app/)
[![Share](https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Fgithub.com%2FAlmanex%2FSeogeek)](https://twitter.com/intent/tweet?text=Check%20out%20Seogeek%20AI%20-%20local%20desktop%20app%20for%20deep%20SEO%20and%20technical%20website%20audit&url=https%3A%2F%2Fgithub.com%2FAlmanex%2FSeogeek)

---

## Key Features

*   **Technical and SEO Audit**:
    *   Meta tag verification (Title, Description, H1-H6 headings).
    *   Image availability analysis, alt attribute validation, and checks for modern formats (WebP/AVIF).
    *   Internal and external link verification, broken links discovery, and redirect loops detection.
    *   Structured data markup analysis (JSON-LD, Microdata, OpenGraph) with nested \`@graph\` schema support.
*   **Performance Evaluation (PageSpeed)**:
    *   Integration with Google PageSpeed Insights API.
    *   Page-by-page performance reports separately for desktop and mobile versions.
*   **Dual Search Analytics Integration**:
    *   **Google**: OAuth connection to Google Search Console and Google Analytics 4 (GA4).
    *   **Yandex**: OAuth connection to Yandex.Webmaster and Yandex.Metrika (with auto-selection of the active counter and HTTPS priority).
*   **Split AI Analytics (Google vs Yandex)**:
    *   Detailed SEO audits and practical insights generation using LLMs (support for OpenAI, DeepSeek, Gemini, Anthropic, and local models via LM Studio/Ollama).
    *   Custom prompt tuning for specific search engine requirements (commercial factors and depth of view for Yandex; snippet CTR and engagement for Google).
*   **Interactive AI Fixer**:
    *   An AI assistant modal for each discovered issue: generates ready-to-use code (e.g., corrected meta tags or JSON-LD markup) and step-by-step instructions for developers.
*   **White-Label PDF Reports Export**:
    *   Professional PDF audit report generation featuring traffic graphs, categorization of issues by severity (Critical, Warnings, Notices), and custom company branding.

---

## Tech Stack

| Layer / Component | Technology | Details / Purpose |
| --- | --- | --- |
| Desktop Shell | Tauri v2 | Rust core + system WebView2 |
| Frontend | React / Vite | TypeScript, Lucide Icons, HSL theme palettes |
| Backend | FastAPI (Python) | REST API, WebSockets progress updates |
| Task Queue | Celery / Redis | Async task broker and queue management |
| Crawler | Scrapy / Playwright | High-performance crawler with JS rendering |
| Main Database | PostgreSQL 18 | Storage for project settings, page metadata, issues, and AI cache |
| Document Database | MongoDB 8.3 | Storage for raw HTML pages and headers for AI Fixer |

---

## Getting Started

Detailed steps for installation and configuration can be found in the guides:
*   [User Guide (docs/GUIDE.md)](docs/GUIDE.md) - connecting Google/Yandex accounts and launching your first audit.
*   [Developer Guide (docs/DEVELOPER_GUIDE.md)](docs/DEVELOPER_GUIDE.md) - architecture details, custom SEO rule creation, and AI prompts.

### Local Development Setup

1.  **Start Databases (requires Docker Desktop)**:
    \`\`\`bash
    docker compose up -d
    \`\`\`
2.  **Configure Backend**:
    \`\`\`bash
    cd backend
    python -m venv .venv
    .venv\\Scripts\\activate
    pip install -e .
    alembic upgrade head
    \`\`\`
3.  **Configure Frontend**:
    \`\`\`bash
    cd ../frontend
    npm install
    \`\`\`
4.  **Run Development Environment**:
    Run the PowerShell script from the root:
    \`\`\`powershell
    .\\scripts\\dev.ps1
    \`\`\`

---

## Building the Package (Tauri Build)

To compile the application into a \`.msi\` installer and a standalone \`.exe\` for Windows:

> [!IMPORTANT]
> Install frontend dependencies first:
> \`\`\`powershell
> cd frontend
> npm install
> cd ..
> \`\`\`

Run the build from the project root:
\`\`\`powershell
npx --package @tauri-apps/cli tauri build
\`\`\`
The output installer will be located in \`src-tauri/target/release/bundle/msi/\`.

> [!IMPORTANT]
> **Installed Application Requirements**:
> Since databases run in Docker Compose containers and the backend runs on Python, the installed \`Seogeek.exe\` requires the project files to function.
> 
> On the first launch of the installed version, you will be prompted to select the path to your Seogeek project directory. The app will then allow you to configure the environment automatically by creating a Python \`.venv\`, installing dependencies, and running the stack.

> [!NOTE]
> Ensure Rust version \`1.90.0\` is installed (version \`1.96.0\` has a Windows optimizer bug). Use:
> \`rustup override set 1.90.0\`
> Also, ensure page file size in Windows is at least 8-16 GB to prevent compile errors.

---

## License

This project is licensed under the MIT License. Developed to automate routine tasks of SEO engineers and webmasters.
`,
    readme_ru: `[ English ](../README.md) • [ Русский ](README_RU.md) • [ Deutsch ](README_DE.md)

# Seogeek AI

**Seogeek AI** — это профессиональное локальное десктоп-приложение для Windows 11, предназначенное для проведения глубокого технического и поискового (SEO) аудита сайтов, анализа видимости и автоматической генерации рекомендаций с помощью искусственного интеллекта.

Приложение объединяет классический аудит (скорость, битые ссылки, мета-теги, разметка) со сбором живой статистики из поисковых систем и поведенческих факторов пользователей, формируя интерактивный план оптимизации сайта.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Platform](https://img.shields.io/badge/Platform-Windows%2011-blue.svg)](#)
[![Framework](https://img.shields.io/badge/Framework-Tauri%20v2-orange.svg)](https://tauri.app/)
[![Share](https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Fgithub.com%2FAlmanex%2FSeogeek)](https://twitter.com/intent/tweet?text=Check%20out%20Seogeek%20AI%20-%20local%20desktop%20app%20for%20deep%20SEO%20and%20technical%20website%20audit&url=https%3A%2F%2Fgithub.com%2FAlmanex%2FSeogeek)

---

## Основные возможности

*   **Технический и SEO-аудит**:
    *   Проверка мета-тегов (Title, Description, заголовки H1-H6).
    *   Анализ доступности картинок, проверка alt-атрибутов и поддержка современных форматов (WebP/AVIF).
    *   Проверка внутренних и внешних ссылок, поиск битых путей и циклов перенаправлений.
    *   Анализ разметки структурированных данных (JSON-LD, Microdata, OpenGraph) с поддержкой вложенных \`@graph\` схем.
*   **Оценка производительности (PageSpeed)**:
    *   Интеграция с Google PageSpeed Insights API.
    *   Постраничные отчеты производительности отдельно для десктопной и мобильной версий.
*   **Двойная интеграция с Поисковой аналитикой**:
    *   **Google**: Подключение через OAuth к Google Search Console и Google Analytics 4 (GA4).
    *   **Яндекс**: Подключение через OAuth к Яндекс.Вебмастеру и Яндекс.Метрике (с автоподбором активного счетчика и приоритетом HTTPS-версии).
*   **Раздельная ИИ-Аналитика (Google vs Яндекс)**:
    *   Генерация детальных SEO-аудитов и практических инсайтов с помощью LLM (поддержка OpenAI, DeepSeek, Gemini, Anthropic и локальных моделей через LM Studio/Ollama).
    *   Индивидуальные промпты под специфику каждой поисковой системы (коммерческие факторы и глубина просмотра для Яндекса; CTR сниппетов и вовлеченность для Google).
*   **Интерактивный AI-Исправитель (AI Fixer)**:
    *   Модальное окно ИИ-помощника для каждого обнаруженного замечания: генерация готового кода (например, исправленных мета-тегов или JSON-LD разметки) и пошаговых инструкций для разработчика.
*   **Экспорт White-Label PDF отчетов**:
    *   Генерация профессионально оформленных PDF-отчетов по аудиту с графиками трафика, разбиением ошибок по категориям важности (Критические, Предупреждения, Уведомления) и брендированием вашей компании.

---

## Технологический стек

| Компонент / Уровень | Технология | Назначение / Описание |
| --- | --- | --- |
| Десктопная оболочка | Tauri v2 | Ядро Rust + системный WebView2 |
| Клиентская часть | React / Vite | TypeScript, Lucide Icons, HSL-палитры тем оформления |
| Серверная часть | FastAPI (Python) | REST API, передача прогресса по WebSockets |
| Очередь задач | Celery / Redis | Асинхронный обработчик и брокер задач |
| Краулер | Scrapy / Playwright | Высокопроизводительный краулер с рендерингом JS |
| Реляционная БД | PostgreSQL 18 | Хранение настроек проектов, метаданных страниц, замечаний и ИИ-кэша |
| Документоориентированная БД | MongoDB 8.3 | Хранение исходного HTML-кода страниц и заголовков для AI Fixer |

---

## Быстрый старт

Подробные шаги по установке и настройке описаны в руководствах:
*   [Инструкция пользователя (GUIDE.md)](./GUIDE.md) — подключение доступов Google/Яндекс и запуск первого аудита.
*   [Руководство разработчика (DEVELOPER_GUIDE.md)](./DEVELOPER_GUIDE.md) — детальная архитектура, правила создания кастомных SEO-правил и промптов.

### Локальное развертывание для разработки

1.  **Запуск баз данных (требуется Docker Desktop)**:
    \`\`\`bash
    docker compose up -d
    \`\`\`
2.  **Настройка бэкенда**:
    \`\`\`bash
    cd backend
    python -m venv .venv
    .venv\\Scripts\\activate
    pip install -e .
    alembic upgrade head
    \`\`\`
3.  **Настройка фронтенда**:
    \`\`\`bash
    cd ../frontend
    npm install
    \`\`\`
4.  **Запуск dev-окружения**:
    Запустите из корня скрипт PowerShell:
    \`\`\`powershell
    .\\scripts\\dev.ps1
    \`\`\`

---

## Сборка дистрибутива (Tauri Build)

Компиляция приложения в установочный пакет \`.msi\` и автономный \`.exe\` для Windows:

> [!IMPORTANT]
> Перед первой сборкой проекта обязательно перейдите в папку \`frontend\` и установите зависимости:
> \`\`\`powershell
> cd frontend
> npm install
> cd ..
> \`\`\`

Запуск сборки из корня проекта:
\`\`\`powershell
npx --package @tauri-apps/cli tauri build
\`\`\`
Готовые файлы установщика будут находиться в папке \`src-tauri/target/release/bundle/msi/\`.

> [!IMPORTANT]
> **Особенность работы установленного приложения**:
> Так как базы данных запускаются в контейнерах Docker Compose, а бэкенд-анализатор написан на Python, установленной программе \`Seogeek.exe\` для работы требуются файлы проекта (конфигурации контейнеров, миграции и скрипты Python).
> 
> При первом запуске установленной версии в панели «Управление сервисами» вам будет предложено указать путь к папке проекта Seogeek. После выбора папки приложение автоматически предложит настроить окружение: создаст виртуальное окружение Python (\`.venv\`), установит все зависимости и подготовит проект к запуску.

> [!NOTE]
> Перед сборкой убедитесь, что у вас установлен компилятор Rust версии \`1.90.0\` (версия \`1.96.0\` имеет баг оптимизатора на Windows, приводящий к сбою сборки). Вы можете настроить версию с помощью:
> \`rustup override set 1.90.0\`
> Также для компиляции тяжелых макросов убедитесь, что размер файла подкачки в Windows составляет не менее 8-16 ГБ.

---

## Лицензия

Проект распространяется под лицензией MIT. Разработано для автоматизации рутинных задач SEO-инженеров и веб-мастеров.
`,
    readme_de: `[ English ](../README.md) • [ Русский ](README_RU.md) • [ Deutsch ](README_DE.md)

# Seogeek AI

**Seogeek AI** ist eine professionelle lokale Desktop-Anwendung für Windows 11 zur Durchführung tiefer technischer und Suchmaschinenoptimierungs-Audits (SEO), zur Sichtbarkeitsanalyse und zur automatischen Generierung von Empfehlungen mithilfe künstlicher Intelligenz.

Die Anwendung kombiniert klassische Audits (Geschwindigkeit, defekte Links, Meta-Tags, Schema-Markup) mit der Erfassung von Live-Statistiken aus Suchmaschinen und Nutzerverhaltensfaktoren, um einen interaktiven Website-Optimierungsplan zu erstellen.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Platform](https://img.shields.io/badge/Platform-Windows%2011-blue.svg)](#)
[![Framework](https://img.shields.io/badge/Framework-Tauri%20v2-orange.svg)](https://tauri.app/)
[![Share](https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Fgithub.com%2FAlmanex%2FSeogeek)](https://twitter.com/intent/tweet?text=Check%20out%20Seogeek%20AI%20-%20local%20desktop%20app%20for%20deep%20SEO%20and%20technical%20website%20audit&url=https%3A%2F%2Fgithub.com%2FAlmanex%2FSeogeek)

---

## Hauptmerkmale

*   **Technisches und SEO-Audit**:
    *   Überprüfung von Meta-Tags (Title, Description, H1-H6-Überschriften).
    *   Analyse der Bildverfügbarkeit, Alt-Attribut-Validierung und Prüfung auf moderne Formate (WebP/AVIF).
    *   Verifizierung interner und externer Links, Erkennung defekter Links und Weiterleitungsschleifen.
    *   Analyse von strukturierten Daten-Markups (JSON-LD, Microdata, OpenGraph) mit Unterstützung für verschachtelte \`@graph\`-Schemata.
*   **Leistungsbewertung (PageSpeed)**:
    *   Integration der Google PageSpeed Insights API.
    *   Seitenweise Leistungsberichte separat für Desktop- und Mobilversionen.
*   **Duale Suchanalyse-Integration**:
    *   **Google**: OAuth-Verbindung zur Google Search Console und Google Analytics 4 (GA4).
    *   **Yandex**: OAuth-Verbindung zu Yandex.Webmaster und Yandex.Metrika (mit automatischer Auswahl des aktiven Zählers und HTTPS-Priorität).
*   **Geteilte KI-Analyse (Google vs. Yandex)**:
    *   Detaillierte SEO-Audits und praktische Erkenntnisgenerierung mittels LLMs (Unterstützung für OpenAI, DeepSeek, Gemini, Anthropic und lokale Modelle über LM Studio/Ollama).
    *   Benutzerdefinierte Prompt-Anpassung an die spezifischen Anforderungen der jeweiligen Suchmaschine (kommerzielle Faktoren und Besuchtstiefe für Yandex; Snippet-CTR und Engagement für Google).
*   **Interaktiver KI-Fixer**:
    *   Ein KI-Assistenten-Modal für jedes entdeckte Problem: generiert gebrauchsfertigen Code (z. B. korrigierte Meta-Tags oder JSON-LD-Markups) und Schritt-für-Schritt-Anleitungen für Entwickler.
*   **Export von White-Label-PDF-Berichten**:
    *   Professionelle Erstellung von PDF-Audit-Berichten mit Verkehrsdiagrammen, Kategorisierung von Problemen nach Schweregrad (Kritisch, Warnungen, Hinweise) und individuellem Firmenbranding.

---

## Technologie-Stack

| Ebene / Komponente | Technologie | Details / Zweck |
| --- | --- | --- |
| Desktop-Shell | Tauri v2 | Rust-Kern + System-WebView2 |
| Frontend | React / Vite | TypeScript, Lucide Icons, HSL-Designpaletten |
| Backend | FastAPI (Python) | REST API, WebSockets-Fortschrittsaktualisierungen |
| Aufgabenwarteschlange | Celery / Redis | Asynchroner Task-Broker und Warteschlangenverwaltung |
| Crawler | Scrapy / Playwright | Leistungsstarker Crawler mit JS-Rendering |
| Hauptdatenbank | PostgreSQL 18 | Speicherung von Projekteinstellungen, Seiten-Metadaten, Problemen und KI-Cache |
| Dokumentendatenbank | MongoDB 8.3 | Speicherung von rohen HTML-Seiten und Headern für den KI-Fixer |

---

## Erste Schritte

Detaillierte Schritte zur Installation und Konfiguration finden Sie in den Handbüchern:
*   [Benutzerhandbuch (GUIDE.md)](./GUIDE.md) – Verbindung von Google-/Yandex-Konten und Start Ihres ersten Audits.
*   [Entwicklerhandbuch (DEVELOPER_GUIDE.md)](./DEVELOPER_GUIDE.md) – Architekturdetails, Erstellung benutzerdefinierter SEO-Regeln und KI-Prompts.

### Lokales Entwicklungs-Setup

1.  **Datenbanken starten (erfordert Docker Desktop)**:
    \`\`\`bash
    docker compose up -d
    \`\`\`
2.  **Backend konfigurieren**:
    \`\`\`bash
    cd backend
    python -m venv .venv
    .venv\\Scripts\\activate
    pip install -e .
    alembic upgrade head
    \`\`\`
3.  **Frontend konfigurieren**:
    \`\`\`bash
    cd ../frontend
    npm install
    \`\`\`
4.  **Entwicklungsumgebung ausführen**:
    Führen Sie das PowerShell-Skript aus dem Stammverzeichnis aus:
    \`\`\`powershell
    .\\scripts\\dev.ps1
    \`\`\`

---

## Erstellung des Pakets (Tauri Build)

So kompilieren Sie die Anwendung in ein \`.msi\`-Installationsprogramm und eine eigenständige \`.exe\` für Windows:

> [!IMPORTANT]
> Installieren Sie zuerst die Frontend-Abhängigkeiten:
> \`\`\`powershell
> cd frontend
> npm install
> cd ..
> \`\`\`

Führen Sie den Build aus dem Projektstammverzeichnis aus:
\`\`\`powershell
npx --package @tauri-apps/cli tauri build
\`\`\`
Das fertige Installationsprogramm befindet sich im Ordner \`src-tauri/target/release/bundle/msi/\`.

> [!IMPORTANT]
> **Anforderungen für die installierte Anwendung**:
> Da Datenbanken in Docker-Compose-Containern laufen und das Backend auf Python basiert, benötigt das installierte \`Seogeek.exe\` die Projektdateien, um zu funktionieren.
> 
> Beim ersten Start der installierten Version werden Sie aufgefordert, den Pfad zu Ihrem Seogeek-Projektverzeichnis auszuwählen. Die App ermöglicht es Ihnen dann, die Umgebung automatisch zu konfigurieren, indem sie ein Python \`.venv\` erstellt, Abhängigkeiten installiert und den Stack startet.

> [!NOTE]
> Stellen Sie sicher, dass Rust-Version \`1.90.0\` installiert ist (Version \`1.96.0\` hat einen Windows-Optimierungsfehler). Verwenden Sie:
> \`rustup override set 1.90.0\`
> Stellen Sie außerdem sicher, dass die Auslagerungsdatei in Windows mindestens 8-16 GB groß ist, um Compiler-Fehler zu vermeiden.

---

## Lizenz

Dieses Projekt ist unter der MIT-Lizenz lizenziert. Entwickelt zur Automatisierung von Routineaufgaben von SEO-Ingenieuren und Webmastern.
`,
    guide: `[ English ](GUIDE.md) • [ Русский ](GUIDE_RU.md) • [ Deutsch ](GUIDE_DE.md)

# User Guide - Seogeek AI-SEO Analyzer & Fixer

**Seogeek** is a local desktop application for Windows 11 designed for technical, search engine optimization (SEO), and content auditing of websites, as well as automatic error correction using Artificial Intelligence (AI).

---

## System Requirements and Preparation

To run the application, your computer must have the following installed:
1. **Windows 11** (64-bit).
2. **Docker Desktop** (must be running before launching the application to manage PostgreSQL, MongoDB, and Redis databases).

> [!IMPORTANT]
> **Before running Seogeek**, ensure that **Docker Desktop** is launched and active on your computer. The application will automatically deploy the required databases in containers.

---

## How to Launch the Application

1. Start **Docker Desktop**.
2. Open the **Seogeek** application (via shortcut or by running the compiled executable).
3. On the first launch of the installed application, in the "Service Management" window (button on the main panel), specify the path to the Seogeek repository folder on your computer (containing \`docker-compose.yml\` and the \`backend\` folder).
4. After selecting the folder, the application will detect that the Python virtual environment has not been created yet and will display the **"Configure Automatically"** button. Click it — the application will independently create a \`.venv\`, install all dependencies, and prepare the project for launch. This takes 2-5 minutes.
   > **Manual configuration** (alternative method): open PowerShell in the project folder and run:
   > \`\`\`powershell
   > Set-ExecutionPolicy Bypass -Scope Process
   > powershell .\\scripts\\setup.ps1
   > \`\`\`
5. Once configuration is complete, click **"Start Stack"** in the application to automatically deploy the databases and the background API.
6. The Seogeek icon will appear in the Windows taskbar tray. The application can be minimized to the tray and restored at any time by clicking the icon.

---

## Core Features of the Application

### 1. Control Panel (Dashboard)
* Displays the list of your projects (websites).
* The **"+ New Project"** button allows you to add a site for auditing. You only need to enter the project name and the site domain (e.g., \`https://example.com\`).

### 2. Launching an Audit
In the project settings, the **"Use Playwright (JS rendering)"** option is available (or you can select the mode at launch):

* **Standard Crawling (Fast)**:
  * **How it works**: Downloads the raw HTML code of pages directly from the server. Embedded JavaScript scripts **are not executed**.
  * **What it is suitable for**: For classic sites built on popular CMSs (WordPress, MODX, 1C-Bitrix, OpenCart, Joomla) and site builders (Tilda, Wix). On these platforms, content and SEO tags are already embedded in the HTML on the server side.
  * **Pros**: Lightning-fast speed (dozens of pages per second) and minimal load on your computer.
  
* **Dynamic Crawling (Playwright / JS Rendering)**:
  * **How it works**: Launches a real Chromium browser in the background, loads the page, fully executes all JavaScript scripts, and waits for elements to render.
  * **What it is suitable for**: For modern dynamic web applications (SPAs) on frameworks (React, Vue, Angular, Next.js, Vite) if server-side rendering (SSR) is not configured for them.
  * **Why it is needed**: Without executing JS, such sites are a blank skeleton (e.g., \`<div id="root"></div>\`). A regular scanner will see an empty page. Playwright allows you to see the site and all its links exactly as a real user sees them in a browser.
  * **Cons**: Slower execution speed (1–3 seconds per page) and increased RAM and CPU usage.

### 3. Audit Summary and Health Score
After crawling is complete, an overall website health score from 0 to 100 is calculated:
* **Red sector (0-49)**: critical technical condition, many errors.
* **Yellow sector (50-89)**: indexing or speed issues requiring attention.
* **Green sector (90-100)**: excellent optimization.

### 4. "Pages" Tab
A table of all pages found on the site. It displays:
* HTTP status code (e.g., \`200 OK\`, \`404 Not Found\`).
* Server response time (in milliseconds).
* Page nesting depth and word count.
* Total number of issues for the specific page.

### 5. Error Inspector ("Errors" Tab)
A list of all detected issues, divided by categories:
* **SEO Optimization** (issues with Title, Meta Description, H1 headings, missing alt attributes for images, etc.).
* **Technical Errors** (broken links, slow server response, SSL certificate issues, lack of responsiveness).
* **GEO & Responsiveness** (readiness for AI search engine crawling).
* **Content Quality** (readability of the text).

Each error is provided with a detailed description and a ready-made recommendation for manual correction.

### 6. GEO & Content
A specialized panel for optimizing pages for new AI search systems (Google Search, Yandex Neuro, ChatGPT Search):
* **E-E-A-T Assessment** (experience, expertise, authoritativeness, trustworthiness): checks for contacts, privacy policy, and article authors.
* **Readability Index (Flesch Readability)**: evaluates how easy the text is for a user to understand.
* **Text "Water" Level (Water Words)**: percentage of stop words and low-information phrases in the text.
* **JSON-LD Schema Markup**: checks for structured data (Article, FAQ, Product, Breadcrumbs) to form rich snippets.

---

## How to Use the AI-SEO Assistant (Fix with AI)

Next to each issue in the "Errors" or "GEO & Content" tab, there is a blue **"Fix with AI"** button:
1. Click the button to open the generation window.
2. The AI will analyze the page context (including the raw HTML downloaded to the database) and the error itself.
3. The system will generate a structured solution:
   - **For meta tags**: suggests optimized Title/Description.
   - **For code (JSON-LD, redirects, HTML)**: provides code blocks with a "Copy" button.
   - **For complex texts**: outputs a rewritten version cleared of low-information words.

---

## Configuring AI Providers

To make the "Fix with AI" function available, go to the **"Settings"** section and configure any preferred AI provider:

### Local AI (completely free and confidential):
* **Ollama**:
  1. Install and run Ollama on your computer.
  2. Download a model (e.g., \`llama3\` or \`mistral\`): \`ollama run llama3\`.
  3. In the Seogeek settings, select the **Ollama** provider (default address \`http://localhost:11434/v1\`, model \`llama3\`).
* **LM Studio**:
  1. Launch LM Studio and start the Local Server on port \`1234\`.
  2. Select the **LM Studio** provider in Seogeek settings.

### Cloud AI (API key required):
* **DeepSeek**: select the **DeepSeek** provider and enter your API key.
* **Google Gemini**: select the **Gemini** provider and enter your API key from Google AI Studio.
* **OpenRouter**: universal access to GPT-4, Claude, and other models.

> [!TIP]
> After entering settings, click the **"Test Connection"** button at the bottom of the settings page. The application will make a test request and report if the AI is ready.

---

## Integration with Google Search Console (GSC) and Google Analytics 4 (GA4)

Integration allows you to correlate technical audit results with real traffic data: clicks, impressions, CTR, and page positions in Google search, as well as sessions and bounce rate.

Integration is configured in two steps: creating global access keys in Google Cloud and linking a specific resource in the project settings.

---

### Step 1. Obtaining Google OAuth 2.0 Credentials (Client ID and Client Secret)

Since Seogeek runs locally on your computer, you need to create your own project in Google Cloud Console to generate authorization keys:

1. Go to [Google Cloud Console](https://console.cloud.google.com/) and sign in with your Google account.
2. Create a new project (click **New Project** in the top menu).
3. In the side menu, go to **APIs & Services** -> **Library**.
4. Search for and enable the following APIs (click **Enable** for each):
   * **Google Search Console API** (may also be called Webmasters API) — to collect click and impression statistics.
   * **Google Analytics Data API** — to collect traffic (sessions) and engagement time.
   * **PageSpeed Insights API** — to check page loading speed in the application without limit restrictions.
5. Go to the **OAuth consent screen** tab:
   * Select user type: **External** and click *Create*.
   * Fill in the required fields: application name (e.g., \`Seogeek\`), your support email, and developer contact information.
   * In the **Scopes** step, click *Add or Remove Scopes* and add the following scopes:
     * \`.../auth/webmasters.readonly\` (view Search Console data)
     * \`.../auth/analytics.readonly\` (view Google Analytics reports)
     * \`.../auth/userinfo.email\` (view user email)
     * \`openid\`
   * In the **Test Users** step, make sure to add **your Google Email** under which you will authorize your sites. This is important since the application is in development mode.
6. Go to the **Credentials** tab:
   * Click **+ Create Credentials** -> **OAuth client ID**.
   * Select application type: **Web application**.
   * Set any name (e.g., \`Seogeek Local\`).
   * In the **Authorized Redirect URIs** section, click *Add URI* and enter the exact address:
     \`http://127.0.0.1:8001/api/v1/auth/google/callback\`
     *(Note: do not use localhost; specify the IP 127.0.0.1 and port 8001!)*
   * Click **Create**. Google will provide you with a **Client ID** and **Client Secret**. Copy them.

---

### Step 2. Connecting Google Account in Seogeek

1. In the Seogeek application, go to **"Settings"** in the left menu.
2. Scroll down to the **"Google Integration"** card.
3. Enter the copied **Google Client ID** and **Google Client Secret** and click **"Save Settings"**.
4. Click **"Authorize Google Account"**. The application will open the authorization page in your default browser.
5. Select your Google account (the one you added to *Test Users* in Step 1).
6. If a warning *"Google hasn't verified this app"* appears, click **Advanced** -> **Go to Seogeek (unsafe)**. This is a standard warning for self-developed applications.
7. Grant the application the requested permissions to read Search Console and Analytics.
8. After successful login, the browser will display a message *"Authorization succeeded!"*. Close the browser tab and return to Seogeek.
9. In Seogeek settings, the status will change to **"Connected to Google (Email: your_email@gmail.com)"**.

> [!TIP]
> **Managing client sites or multiple Google accounts:**
> If you have projects registered to other Google accounts (e.g., clients' accounts), you do not need to reconnect different accounts in the application.
> The easiest solution is to go to the Google Search Console and Google Analytics control panels under the second account and delegate access (add read permissions) to your main Google account connected to Seogeek. Once the main account has read access to these resources, the application will be able to synchronize all data in one click!

---

### Step 3. Linking Project and GA4 Property ID

To let Seogeek know where to retrieve traffic statistics for a specific project:

1. Go to the **Dashboard** and open the required project.
2. In the top right corner, click the **"Project Settings"** button (gear icon).
3. In the window that opens, find the **Google Analytics 4 Property ID** field.
4. **How to find your GA4 Property ID:**
   * Open [Google Analytics](https://analytics.google.com/).
   * Go to the **Admin** section in the bottom left corner.
   * Select the required resource (Property) in the column and click **Property Settings** -> **Property details**.
   * In the top right corner, find and copy the numeric **Property ID** (e.g., \`412345678\`).
5. Paste this ID into the project settings in Seogeek and click **"Save"**.

---

### Step 4. Synchronizing and Viewing Data

1. Open the project and go to the **"Google Analytics"** tab.
2. Click the **"Synchronize Google Data"** button in the right corner.
3. A background Celery task will start. The system will automatically:
   * Find a matching verified site in your Google Search Console (by matching the site domain).
   * Request the number of clicks, impressions, CTR, and average page position in search for the last 30 days.
   * Request the number of sessions and bounce rate for each page for the last 30 days from GA4.
   * Link this data with the page technical audit results in the database.
4. After a few seconds, the interface will update, displaying the overall domain summary statistics and a detailed table for each page.

### Limits on Free Google API Requests

All Google APIs used in the application are provided by Google **completely free of charge** under your personal developer project (configuration from Step 1). No credit card binding is required, and standard free quotas are extremely large:

* **Google Search Console API (Search Data)**:
  * **Daily limit**: **100,000,000** (100 million) requests per day per project.
  * **Rate limit**: 20 requests per second (QPS). For personal use, this means unlimited calls.
* **Google Analytics Data API (GA4)**:
  * **Daily limit**: **25,000 tokens per day** per counter (resource). A report request in Seogeek typically consumes 5 to 50 tokens (depending on the number of pages).
  * **Hourly limit**: 5,000 tokens per hour. This limit is sufficient to perform 500 to 5,000 report synchronizations per day.
* **Google PageSpeed Insights API (Speed Analysis)**:
  * **Daily limit**: **25,000 requests per day**.
  * **Rate limit**: 400 requests per minute. Allows you to perform a full speed audit for 25,000 pages daily.

> [!NOTE]
> All limits reset daily at midnight Pacific Time. Under normal use of Seogeek for auditing your own projects, it is practically impossible to exhaust these quotas.

---

## Integration with Yandex (Metrika & Webmaster)

Integration allows you to correlate technical audit data with real referral statistics, impressions, and user behavior from Yandex: clicks, impressions, CTR, and average page positions in Yandex.Webmaster, as well as visits, bounce rate, and viewing time in Yandex.Metrika.

Integration is configured using a personal Yandex OAuth application.

### Step 1. Creating Yandex OAuth Application
1. Go to [Yandex OAuth](https://oauth.yandex.ru/) and log in with your account.
2. Click **"Create Client"** (select "Web service" or "Other").
3. Specify access rights (Scopes) for the application:
   * **Yandex.Metrika**:
     * \`metrika:read\` (Retrieving statistics, reading parameters of own and delegated counters) — **Required**
   * **Yandex.Webmaster**:
     * \`webmaster:hostinfo\` (Retrieving information about external links to the site) — **Required**
     * \`webmaster:verify\` (Adding sites, retrieving indexing status information) — **Required**
   * **Yandex ID (Personal Data)**:
     * \`login:email\` (Access to email address) — *Optional*
     * \`login:info\` (Access to first name, last name, gender) — *Optional*
4. Set **Redirect URI**:
   * For automatic authorization (Web service):
     \`http://127.0.0.1:8001/api/v1/auth/yandex/callback\`
   * For manual authorization of desktop applications (if Yandex does not allow local Callback):
     \`https://oauth.yandex.ru/verification_code\`
5. Save the application and copy the provided **Client ID** and **Client Secret**.

> [!NOTE]
> **Support for two authorization modes (with and without email):**
> * **With profile access (\`login:email\`, \`login:info\`)**: Seogeek will be able to request user data in Yandex ID. In global Seogeek settings, the status will be displayed as: \`Connected to Yandex (Email: your_email@yandex.ru)\`.
> * **Without profile access**: If you do not select these rights in Yandex OAuth, the integration will work fully to collect Metrika and Webmaster data, and the connection status will be displayed simply as \`Connected to Yandex\`.

### Step 2. Connecting in Seogeek
1. Go to the **"Settings"** section in Seogeek.
2. In the **"Yandex Integration"** card, enter your **Client ID** and **Client Secret**.
3. Save settings.
4. Perform authorization:
   * **Automatically**: Click the "Authorize via Yandex" button and confirm permissions in the opened browser window.
   * **Manually (Desktop mode)**: If you used the \`verification_code\` Redirect URI, click the **"Get Code"** button, copy the verification code provided by Yandex, paste it into the confirmation code entry field in Seogeek, and click the **"Confirm Code"** button.

### Step 3. Synchronizing Project Data
When clicking the **"Synchronize Yandex Data"** button in project analytics, Seogeek automatically:
1. Matches the project domain with Metrika counters. If multiple counters are found for one domain, Seogeek automatically selects the counter with the highest activity status (\`Activity: high\`), filtering out inactive mirrors and old counters.
2. Finds a matching verified host in Yandex.Webmaster, prioritizing the HTTPS version (\`https:example.com:443\`) over the HTTP version, as main search data is registered on HTTPS.
3. Matches key queries and metrics page-by-page.

---

## Troubleshooting and FAQ

### Databases Show "Disconnected" Status
* **Solution**: Ensure Docker Desktop is running. If it is running, try restarting the Seogeek application or running \`docker compose up -d\` in the terminal inside the project folder.

### AI Returns "Authentication Fails / Invalid API Key" Error
* **Solution**: Go to settings, re-enter the API key, and click "Save". We have resolved the key re-encryption issue; they are now stored securely and decrypted correctly.

### Scanning Freezes during Page Collection
* **Solution**: On Windows 11, the network stack could cause freezes when working with the PostgreSQL database. We have fully resolved this issue in code using a Selector loop. Ensure that the backend is running on port 8001 (this happens automatically).
`,
    guide_ru: `[ English ](GUIDE.md) • [ Русский ](GUIDE_RU.md) • [ Deutsch ](GUIDE_DE.md)

# Руководство пользователя — Seogeek AI-SEO Analyzer & Fixer

**Seogeek** — это локальное настольное приложение для Windows 11, предназначенное для проведения технического, поискового (SEO) и контентного аудита сайтов, а также автоматического исправления ошибок с помощью искусственного интеллекта (ИИ).

---

## Системные требования и подготовка

Для работы приложения на вашем компьютере должны быть установлены:
1. **Windows 11** (64-разрядная).
2. **Docker Desktop** (обязательно должен быть запущен перед использованием приложения для управления базами данных PostgreSQL, MongoDB и Redis).

> [!IMPORTANT]
> **Перед запуском Seogeek** убедитесь, что программа **Docker Desktop** запущена и активна на вашем компьютере. Приложение автоматически развернет необходимые базы данных в контейнерах.

---

## Как запустить приложение

1. Запустите **Docker Desktop**.
2. Откройте приложение **Seogeek** (через ярлык или запустив скомпилированный файл).
3. При первом запуске установленного приложения в окне «Управление сервисами» (кнопка на главной панели) укажите путь к папке репозитория Seogeek на вашем компьютере (содержащей \`docker-compose.yml\` и папку \`backend\`).
4. После выбора папки приложение обнаружит, что виртуальное окружение Python ещё не создано, и покажет кнопку **«Настроить автоматически»**. Нажмите на неё — приложение самостоятельно создаст \`.venv\`, установит все зависимости и подготовит проект к запуску. Это занимает 2-5 минут.
   > **Ручная настройка** (альтернативный способ): откройте PowerShell в папке проекта и выполните:
   > \`\`\`powershell
   > Set-ExecutionPolicy Bypass -Scope Process
   > powershell .\\scripts\\setup.ps1
   > \`\`\`
5. После завершения настройки нажмите кнопку **«Запустить стек»** в приложении для автоматического развертывания баз данных и фонового API.
6. В панели задач Windows (в трее) появится иконка Seogeek. Приложение можно свернуть в трей и восстановить в любой момент кликом по иконке.

---

## Основные функции приложения

### 1. Панель управления (Dashboard)
* Здесь отображается список ваших проектов (сайтов).
* Кнопка **«+ Новый проект»** позволяет добавить сайт для аудита. Вам нужно будет ввести только название проекта и домен сайта (например, \`https://example.com\`).

### 2. Запуск аудита
В настройках проекта доступна опция **«Использовать Playwright (рендеринг JS)»** (или выбор режима при запуске):

* **Стандартный краулинг (быстрый)**:
  * **Как работает**: Скачивает исходный HTML-код страниц напрямую с сервера. При этом встроенные скрипты JavaScript **не выполняются**.
  * **Для чего подходит**: Для классических сайтов на базе популярных CMS (WordPress, MODX, 1C-Битрикс, OpenCart, Joomla) и конструкторов (Tilda, Wix). У этих платформ контент и SEO-теги уже встроены в HTML на стороне сервера.
  * **Плюсы**: Молниеносная скорость (десятки страниц в секунду) и минимальная нагрузка на ваш компьютер.
  
* **Динамический краулинг (Playwright / Рендеринг JS)**:
  * **Как работает**: Запускает в фоновом режиме реальный браузер Chromium, загружает страницу, полностью выполняет все скрипты JavaScript и ждет отрисовки элементов.
  * **Для чего подходит**: Для современных динамических веб-приложений (SPA) на фреймворках (React, Vue, Angular, Next.js, Vite), если на них не настроен серверный рендеринг (SSR).
  * **Зачем нужен**: Без выполнения JS такие сайты представляют собой пустой каркас (например, \`<div id="root"></div>\`). Обычный сканер увидит пустую страницу. Playwright позволяет увидеть сайт и все ссылки на нем так же, как их видит реальный пользователь в браузере.
  * **Минусы**: Скорость работы ниже (1–3 секунды на страницу), а также повышается потребление оперативной памяти и процессора.

### 3. Сводка аудита и Оценка здоровья (Health Score)
После завершения сканирования рассчитывается общая оценка здоровья сайта от 0 до 100:
* **Красный сектор (0-49)**: критическое техническое состояние, много ошибок.
* **Желтый сектор (50-89)**: есть проблемы с индексацией или скоростью, требующие внимания.
* **Зеленый сектор (90-100)**: отличная оптимизация.

### 4. Вкладка «Страницы»
Таблица всех найденных страниц сайта. Показывает:
* HTTP статус-код (например, \`200 OK\`, \`404 Not Found\`).
* Время ответа сервера (в миллисекундах).
* Глубину вложенности страницы и количество слов на ней.
* Общее число замечаний к конкретной странице.

### 5. Инспектор ошибок (Вкладка «Ошибки»)
Список всех обнаруженных проблем, разделенный по категориям:
* **SEO оптимизация** (проблемы с Title, Meta Description, заголовками H1, отсутствием alt у картинок и т.д.).
* **Технические ошибки** (битые ссылки, медленный ответ сервера, проблемы с SSL-сертификатом, отсутствие адаптивности).
* **GEO & Адаптивность** (готовность к поиску с ИИ).
* **Качество контента** (удобочитаемость текста).

Каждая ошибка снабжена подробным описанием и готовой текстовой рекомендацией по ручному исправлению.

### 6. GEO & Контент
Специализированная панель для оптимизации страниц под новые поисковые ИИ-системы (Google Search, Яндекс Нейро, ChatGPT Search):
* **Оценка E-E-A-T** (экспертность, авторитетность, доверие): проверяет наличие контактов, политики конфиденциальности, указания авторов статей.
* **Индекс читаемости (Flesch Readability)**: оценивает простоту восприятия текста пользователем.
* **Уровень «воды» (Water Words)**: процент стоп-слов и малоинформативных фраз в тексте.
* **Микроразметка JSON-LD**: проверяет наличие структурированных данных (Article, FAQ, Product, Breadcrumbs) для формирования богатых сниппетов.

---

## Как использовать AI-SEO Ассистента (Исправить с ИИ)

Рядом с каждым замечанием во вкладке «Ошибки» или «GEO & Контент» есть синяя кнопка **«Исправить с ИИ»**:
1. Нажмите кнопку, чтобы открыть окно генерации.
2. ИИ проанализирует контекст страницы (включая исходный код, скачанный в базу данных) и саму ошибку.
3. Система сгенерирует структурированное решение:
   - **Для мета-тегов**: предложит готовый оптимизированный Title/Description.
   - **Для кода (JSON-LD, редиректы, HTML)**: предоставит готовые блоки кода с кнопкой «Копировать».
   - **Для сложных текстов**: выдаст переписанный, очищенный от «воды» вариант.

---

## Настройка провайдеров ИИ

Чтобы функция **«Исправить с ИИ»** стала доступна, перейдите в раздел **«Настройки»** и настройте любой удобный ИИ-провайдер:

### Локальные ИИ (полностью бесплатные и конфиденциальные):
* **Ollama**:
  1. Установите и запустите Ollama на компьютере.
  2. Скачайте модель (например, \`llama3\` или \`mistral\`): \`ollama run llama3\`.
  3. В настройках Seogeek выберите провайдер **Ollama** (адрес по умолчанию \`http://localhost:11434/v1\`, модель \`llama3\`).
* **LM Studio**:
  1. Запустите LM Studio и запустите локальный сервер (Local Server) на порту \`1234\`.
  2. Выберите провайдер **LM Studio** в настройках Seogeek.

### Облачные ИИ (требуется API-ключ):
* **DeepSeek**: выберите провайдер **DeepSeek** и укажите ваш API-ключ.
* **Google Gemini**: выберите провайдер **Gemini** и введите ключ API от Google AI Studio.
* **OpenRouter**: универсальный доступ к GPT-4, Claude и другим моделям.

> [!TIP]
> После ввода настроек нажмите кнопку **«Проверить соединение»** внизу страницы настроек. Приложение сделает тестовый запрос и сообщит, готов ли ИИ к работе.

---

## Интеграция с Google Search Console (GSC) и Google Analytics 4 (GA4)

Интеграция позволяет сопоставить результаты технического аудита с реальными данными о трафике: кликами, показами, CTR и позициями страниц в Google, а также сессиями и показателем отказов (bounce rate).

Интеграция настраивается в два шага: создание общих ключей доступа в Google Cloud и привязка конкретного ресурса в настройках проекта.

---

### Шаг 1. Получение ключей Google OAuth 2.0 (Client ID и Client Secret)

Поскольку Seogeek работает локально на вашем компьютере, вам необходимо создать собственный проект в Google Cloud Console для генерации авторизационных ключей:

1. Перейдите в [Google Cloud Console](https://console.cloud.google.com/) и войдите под своей учетной записью Google.
2. Создайте новый проект (кнопка **New Project** в верхнем меню).
3. В боковом меню перейдите в раздел **APIs & Services** (API и службы) -> **Library** (Библиотека).
4. Найдите и включите следующие API (нажмите **Enable** для каждого):
   * **Google Search Console API** (также может называться Webmasters API) — для сбора статистики кликов и показов.
   * **Google Analytics Data API** — для сбора посещаемости (сессий) и времени вовлечения.
   * **PageSpeed Insights API** — для проверки скорости загрузки страниц в приложении без ограничений по лимитам.
5. Перейдите на вкладку **OAuth consent screen** (Экран согласия OAuth):
   * Выберите тип пользователя: **External** (Внешний) и нажмите *Create*.
   * Заполните обязательные поля: название приложения (например, \`Seogeek\`), ваш email для поддержки и контактные данные разработчика.
   * На шаге **Scopes** (Области доступа) нажмите *Add or Remove Scopes* и добавьте следующие области:
     * \`.../auth/webmasters.readonly\` (просмотр данных Search Console)
     * \`.../auth/analytics.readonly\` (просмотр отчетов Google Analytics)
     * \`.../auth/userinfo.email\` (просмотр email пользователя)
     * \`openid\`
   * На шаге **Test Users** (Тестовые пользователи) обязательно добавьте **ваш Google Email**, под которым вы будете авторизовывать свои сайты. Это важно, так как приложение находится в режиме разработки.
6. Перейдите на вкладку **Credentials** (Учетные данные):
   * Нажмите **+ Create Credentials** (Создать учетные данные) -> **OAuth client ID** (Идентификатор клиента OAuth).
   * Выберите тип приложения: **Web application** (Веб-приложение).
   * Задайте любое имя (например, \`Seogeek Local\`).
   * В разделе **Authorized Redirect URIs** (Разрешенные URI перенаправления) нажмите *Add URI* и введите точный адрес:
     \`http://127.0.0.1:8001/api/v1/auth/google/callback\`
     *(Внимание: не используйте localhost, укажите именно IP 127.0.0.1 и порт 8001!)*
   * Нажмите **Create**. Google выдаст вам **Client ID** и **Client Secret**. Скопируйте их.

---

### Шаг 2. Подключение аккаунта Google в Seogeek

1. В приложении Seogeek перейдите в раздел **«Настройки»** (Settings) в левом меню.
2. Прокрутите страницу вниз до карточки **«Интеграция с Google»**.
3. Введите скопированные **Google Client ID** и **Google Client Secret** и нажмите **«Сохранить настройки»**.
4. Нажмите кнопку **«Авторизовать Google-аккаунт»**. Приложение откроет страницу авторизации в вашем браузере по умолчанию.
5. Выберите ваш Google-аккаунт (тот, который вы добавили в *Test Users* на Шаге 1).
6. Если появится предупреждение *"Google hasn't verified this app"*, нажмите **Advanced** (Дополнительно) -> **Go to Seogeek (unsafe)** (Перейти к сайту Seogeek). Это стандартное предупреждение для собственных разрабатываемых приложений.
7. Предоставьте приложению запрашиваемые права на чтение Search Console и Analytics.
8. После успешного входа в браузере отобразится страница с сообщением *"Авторизация прошла успешно!"*. Закройте вкладку браузера и вернитесь в Seogeek.
9. В настройках Seogeek статус изменится на **«Подключено к Google (Email: ваш_email@gmail.com)»**.

> [!TIP]
> **Управление клиентскими сайтами или несколькими Google-аккаунтами:**
> Если у вас есть проекты, зарегистрированные на другие Google-аккаунты (например, аккаунты клиентов), вам не нужно переподключать разные учетные записи в приложении. 
> Самое простое решение — зайти в панели управления Google Search Console и Google Analytics под вторым аккаунтом и делегировать доступ (добавить права на чтение) на ваш основной Google-аккаунт, который вы подключили к Seogeek. Как только основной аккаунт получит права на чтение этих ресурсов, приложение сможет синхронизировать все данные в один клик!

---

### Шаг 3. Подключение проекта и GA4 Property ID

Чтобы Seogeek знал, откуда именно выгружать статистику посещений для конкретного проекта:

1. Перейдите в **Dashboard** и откройте нужный проект.
2. В правом верхнем углу нажмите кнопку **«Настройки проекта»** (кнопка с иконкой шестеренки).
3. В открывшемся окне найдите поле **Google Analytics 4 Property ID**.
4. **Как узнать ваш ID ресурса GA4:**
   * Откройте [Google Analytics](https://analytics.google.com/).
   * Перейдите в раздел **Администратор** (Admin) в левом нижнем углу.
   * Выберите нужный ресурс (Property) в колонке и нажмите **Настройки ресурса** (Property details).
   * В верхнем правом углу найдите и скопируйте числовой идентификатор **Property ID** (например, \`412345678\`).
5. Вставьте этот ID в настройки проекта в Seogeek и нажмите **«Сохранить»**.

---

### Шаг 4. Синхронизация и просмотр данных

1. Откройте проект и перейдите на вкладку **«Google Аналитика»**.
2. Нажмите кнопку **«Синхронизировать Google-данные»** в правом углу.
3. Запустится фоновая задача Celery. Система автоматически:
   * Найдет подходящий подтвержденный сайт в вашем Google Search Console (сопоставив домен сайта).
   * Запросит количество кликов, показов, CTR и среднюю позицию страниц в поиске за последние 30 дней.
   * Запросит из GA4 количество сессий и показатель отказов для каждой страницы за 30 дней.
   * Свяжет эти данные с результатами технического аудита страниц в базе данных.
4. Через несколько секунд интерфейс обновится, отобразив общую сводную статистику домена и подробную таблицу по каждой странице.

### Лимиты на бесплатные запросы к API Google

Все используемые в приложении Google API предоставляются Google **абсолютно бесплатно** в рамках вашего личного проекта разработчика (настройка из Шага 1). Привязка банковской карты не требуется, а стандартные бесплатные квоты чрезвычайно велики:

* **Google Search Console API (Поисковые данные)**:
  * **Дневной лимит**: **100 000 000** (100 миллионов) запросов в сутки на проект.
  * **Ограничение частоты**: 20 запросов в секунду (QPS). Для персонального использования это означает неограниченное число обращений.
* **Google Analytics Data API (GA4)**:
  * **Дневной лимит**: **25 000 токенов в сутки** на один счетчик (ресурс). Один запрос отчета в Seogeek обычно расходует от 5 до 50 токенов (в зависимости от количества страниц).
  * **Часовой лимит**: 5 000 токенов в час. Этого лимита достаточно для проведения от 500 до 5 000 синхронизаций отчетов в день.
* **Google PageSpeed Insights API (Анализ скорости)**:
  * **Дневной лимит**: **25 000 запросов в сутки**.
  * **Ограничение частоты**: 400 запросов в минуту. Позволяет ежедневно проводить полный аудит скорости для 25 000 страниц.

> [!NOTE]
> Все лимиты сбрасываются ежедневно в полночь по тихоокеанскому времени (Pacific Time). При обычном использовании Seogeek для аудита собственных проектов исчерпать эти квоты практически невозможно.

---

## Интеграция с Яндекс (Метрика & Вебмастер)

Интеграция позволяет сопоставить данные технического аудита с реальной статистикой переходов, показов и поведения пользователей из Яндекса: кликами, показами, CTR и средними позициями страниц в Яндекс.Вебмастере, а также визитами, отказами (bounce rate) и временем просмотра в Яндекс.Метрике.

Интеграция настраивается с помощью личного OAuth-приложения Яндекса.

### Шаг 1. Создание приложения Яндекс OAuth
1. Перейдите на [Яндекс OAuth](https://oauth.yandex.ru/) и войдите под своей учетной записью.
2. Нажмите **«Создать приложение»** (выберите тип «Веб-сервис» или «Другие»).
3. Задайте права доступа (Scopes) для приложения:
   * **Яндекс.Метрика**:
     * \`metrika:read\` (Получение статистики, чтение параметров своих и доверенных счетчиков) — **Обязательно**
   * **Яндекс.Вебмастер**:
     * \`webmaster:hostinfo\` (Получение информации о внешних ссылках на сайт) — **Обязательно**
     * \`webmaster:verify\` (Добавление сайтов, получение информации о статусе индексирования) — **Обязательно**
   * **Яндекс ID (Персональные данные)**:
     * \`login:email\` (Доступ к адресу электронной почты) — *Опционально*
     * \`login:info\` (Доступ к имени, фамилии, полу) — *Опционально*
4. Задайте **Redirect URI**:
   * Для автоматической авторизации (Web-сервис):
     \`http://127.0.0.1:8001/api/v1/auth/yandex/callback\`
   * Для ручной авторизации десктопных приложений (если Yandex не разрешает локальный Callback):
     \`https://oauth.yandex.ru/verification_code\`
5. Сохраните приложение и скопируйте выданные **Client ID** и **Client Secret**.

> [!NOTE]
> **Поддержка двух режимов авторизации (с почтой и без):**
> * **С доступом к профилю (\`login:email\`, \`login:info\`)**: Seogeek сможет запросить данные пользователя в Яндекс ID. В общих настройках Seogeek статус отобразится в формате: \`Подключено к Яндекс (email: ваш_email@yandex.ru)\`.
> * **Без доступа к профилю**: Если вы не выберете эти права в OAuth Яндекса, интеграция будет работать абсолютно полноценно для сбора Метрики и Вебмастера, а статус подключения отобразится просто как \`Подключено к Яндекс\`.

### Шаг 2. Подключение в Seogeek
1. Перейдите в раздел **«Настройки»** в Seogeek.
2. В карточке **«Интеграция с Яндекс»** введите ваши **Client ID** и **Client Secret**.
3. Сохраните настройки.
4. Выполните авторизацию:
   * **Автоматически**: Нажмите кнопку «Авторизовать через Яндекс» и подтвердите права доступа в открывшемся окне браузера.
   * **Вручную (Desktop-режим)**: Если вы использовали Redirect URI \`verification_code\`, нажмите кнопку **«Получить код»**, скопируйте выданный Яндексом проверочный код, вставьте его в поле ввода кода подтверждения в Seogeek и нажмите кнопку **«Подтвердить код»**.

### Шаг 3. Синхронизация данных проекта
При нажатии кнопки **«Синхронизировать Яндекс-данные»** в аналитике проекта Seogeek автоматически:
1. Сопоставит домен проекта со счетчиками Метрики. Если для одного домена найдено несколько счетчиков, Seogeek автоматически выберет счетчик с наибольшим статусом активности (\`Activity: high\`), отсекая неактивные зеркала и старые счетчики.
2. Найдет подходящий подтвержденный хост в Яндекс.Вебмастере, отдавая приоритет HTTPS-версии (\`https:example.com:443\`) перед HTTP-версией, так как основные поисковые данные регистрируются именно на HTTPS.
3. Сопоставит ключевые запросы и показатели по страницам.

---

## Часто задаваемые вопросы и решение проблем (Troubleshooting)

### Базы данных показывают статус «Disconnected»
* **Решение**: Убедитесь, что запущен Docker Desktop. Если он запущен, попробуйте перезапустить приложение Seogeek или выполнить в терминале команду \`docker compose up -d\` в папке проекта.

### ИИ выдает ошибку «Authentication Fails / Invalid API Key»
* **Решение**: Перейдите в настройки, введите API-ключ заново и нажмите «Сохранить». Мы исправили проблему повторного шифрования ключей, теперь они сохраняются в безопасности и расшифровываются корректно.

### Сканирование зависает на этапе сбора страниц
* **Решение**: На Windows 11 сетевой стек мог вызывать зависание при работе с базой данных PostgreSQL. Мы полностью устранили эту проблему в коде с помощью Selector-петли. Убедитесь, что бэкенд запущен на порту 8001 (это происходит автоматически).
`,
    guide_de: `[ English ](GUIDE.md) • [ Русский ](GUIDE_RU.md) • [ Deutsch ](GUIDE_DE.md)

# Benutzerhandbuch - Seogeek AI-SEO Analyzer & Fixer

**Seogeek** ist eine lokale Desktop-Anwendung für Windows 11 zur Durchführung von technischen, Suchmaschinen- (SEO) und Inhalts-Audits von Websites sowie zur automatischen Fehlerbehebung mithilfe künstlicher Intelligenz (KI).

---

## Systemanforderungen und Vorbereitung

Um die Anwendung auszuführen, müssen auf Ihrem Computer folgende Komponenten installiert sein:
1. **Windows 11** (64-Bit).
2. **Docker Desktop** (muss vor der Verwendung der Anwendung gestartet werden, um die Datenbanken PostgreSQL, MongoDB und Redis zu verwalten).

> [!IMPORTANT]
> **Vor dem Starten von Seogeek** stellen Sie sicher, dass **Docker Desktop** auf Ihrem Computer gestartet und aktiv ist. Die Anwendung stellt die erforderlichen Datenbanken automatisch in Containern bereit.

---

## Starten der Anwendung

1. Starten Sie **Docker Desktop**.
2. Öffnen Sie die **Seogeek**-Anwendung (über die Verknüpfung oder durch Ausführen der kompilierten ausführbaren Datei).
3. Beim ersten Start der installierten Anwendung geben Sie im Fenster „Diensteverwaltung“ (Schaltfläche im Hauptmenü) den Pfad zum Seogeek-Repository-Ordner auf Ihrem Computer an (der \`docker-compose.yml\` und den Ordner \`backend\` enthält).
4. Nach Auswahl des Ordners erkennt die Anwendung, dass die Python-virtuelle Umgebung noch nicht erstellt wurde, und zeigt die Schaltfläche **„Automatisch konfigurieren“** an. Klicken Sie darauf — die Anwendung erstellt selbstständig eine \`.venv\`, installiert alle Abhängigkeiten und bereitet das Projekt auf den Start vor. Dies dauert 2-5 Minuten.
   > **Manuelle Konfiguration** (alternative Methode): Öffnen Sie PowerShell im Projektordner und führen Sie folgenden Befehl aus:
   > \`\`\`powershell
   > Set-ExecutionPolicy Bypass -Scope Process
   > powershell .\\scripts\\setup.ps1
   > \`\`\`
5. Nach Abschluss der Konfiguration klicken Sie in der Anwendung auf **„Stack starten“**, um die Datenbanken und die Hintergrund-API automatisch bereitzustellen.
6. Das Seogeek-Symbol wird in der Taskleiste von Windows (im Infobereich) angezeigt. Die Anwendung kann jederzeit in den Infobereich minimiert und durch Klicken auf das Symbol wiederhergestellt werden.

---

## Hauptfunktionen der Anwendung

### 1. Dashboard
* Zeigt die Liste Ihrer Projekte (Websites) an.
* Die Schaltfläche **„+ Neues Projekt“** ermöglicht das Hinzufügen einer Website für das Audit. Sie müssen nur den Projektnamen und die Website-Domain eingeben (z. B. \`https://example.com\`).

### 2. Starten eines Audits
In den Projekteinstellungen ist die Option **„Playwright verwenden (JS-Rendering)“** verfügbar (oder Sie können den Modus beim Start auswählen):

* **Standard-Crawling (Schnell)**:
  * **Wie es funktioniert**: Lädt den rohen HTML-Code von Seiten direkt vom Server herunter. Eingebettete JavaScript-Skripte **werden nicht ausgeführt**.
  * **Wofür es geeignet ist**: Für klassische Websites, die auf beliebten CMS (WordPress, MODX, 1C-Bitrix, OpenCart, Joomla) und Website-Baukästen (Tilda, Wix) basieren. Auf diesen Plattformen sind Inhalte und SEO-Tags bereits serverseitig im HTML eingebettet.
  * **Vorteile**: Blitzschnelle Geschwindigkeit (Dutzende von Seiten pro Sekunde) und minimale Belastung Ihres Computers.
  
* **Dynamisches Crawling (Playwright / JS-Rendering)**:
  * **Wie es funktioniert**: Startet im Hintergrund einen echten Chromium-Browser, lädt die Seite, führt alle JavaScript-Skripte vollständig aus und wartet auf das Rendern der Elemente.
  * **Wofür es geeignet ist**: Für moderne dynamische Webanwendungen (SPAs) auf Frameworks (React, Vue, Angular, Next.js, Vite), wenn für diese kein serverseitiges Rendering (SSR) konfiguriert ist.
  * **Warum es benötigt wird**: Ohne Ausführung von JS sind solche Websites ein leeres Skelett (z. B. \`<div id="root"></div>\`). Ein normaler Scanner sieht eine leere Seite. Playwright ermöglicht es Ihnen, die Website und all ihre Links genau so zu sehen, wie ein echter Benutzer sie in einem Browser sieht.
  * **Nachteile**: Langsamere Ausführungsgeschwindigkeit (1–3 Sekunden pro Seite) und erhöhte RAM- und CPU-Auslastung.

### 3. Audit-Zusammenfassung und Health Score
Nach Abschluss des Crawlings wird ein Gesamtwert für die Gesundheit der Website von 0 bis 100 berechnet:
* **Roter Sektor (0-49)**: kritischer technischer Zustand, viele Fehler.
* **Gelber Sektor (50-89)**: Indexierungs- oder Geschwindigkeitsprobleme, die Aufmerksamkeit erfordern.
* **Grüner Sektor (90-100)**: hervorragende Optimierung.

### 4. Registerkarte „Seiten“
Eine Tabelle aller auf der Website gefundenen Seiten. Sie zeigt:
* HTTP-Statuscode (z. B. \`200 OK\`, \`404 Not Found\`).
* Serverantwortzeit (in Millisekunden).
* Schachtelungstiefe der Seite und Wortanzahl.
* Gesamtzahl der Probleme für die spezifische Seite.

### 5. Fehlerinspektor (Registerkarte „Fehler“)
Eine Liste aller erkannten Probleme, unterteilt in Kategorien:
* **SEO-Optimierung** (Probleme mit Title, Meta Description, H1-Überschriften, fehlenden Alt-Attributen bei Bildern usw.).
* **Technische Fehler** (defekte Links, langsame Serverantwort, SSL-Zertifikatsprobleme, fehlende Anpassungsfähigkeit).
* **GEO & Anpassungsfähigkeit** (Bereitschaft für das Crawling durch KI-Suchmaschinen).
* **Inhaltsqualität** (Lesbarkeit des Textes).

Jeder Fehler ist mit einer detaillierten Beschreibung und einer vorgefertigten Empfehlung zur manuellen Behebung versehen.

### 6. GEO & Inhalt
Ein spezialisiertes Panel zur Optimierung von Seiten für neue KI-Suchsysteme (Google Search, Yandex Neuro, ChatGPT Search):
* **E-E-A-T-Bewertung** (Erfahrung, Expertise, Autorität, Vertrauenswürdigkeit): prüft auf Kontaktinformationen, Datenschutzrichtlinie und Artikelautoren.
* **Lesbarkeitsindex (Flesch Readability)**: bewertet, wie einfach der Text für einen Benutzer zu verstehen ist.
* **Text-„Wasser“-Level (Water Words)**: Prozentsatz der Stoppwörter und informationsarmen Phrasen im Text.
* **JSON-LD-Schema-Markup**: prüft auf strukturierte Daten (Article, FAQ, Product, Breadcrumbs) zur Generierung von Rich Snippets.

---

## Verwendung des KI-SEO-Assistenten (Mit KI beheben)

Neben jedem Problem auf der Registerkarte „Fehler“ oder „GEO & Inhalt“ befindet sich eine blaue Schaltfläche **„Mit KI beheben“**:
1. Klicken Sie auf die Schaltfläche, um das Generierungsfenster zu öffnen.
2. Die KI analysiert den Seitenkontext (einschließlich des in die Datenbank heruntergeladenen rohen HTML-Codes) und den Fehler selbst.
3. Das System generiert eine strukturierte Lösung:
   - **Für Meta-Tags**: schlägt optimierten Title/Description vor.
   - **Für Code (JSON-LD, Weiterleitungen, HTML)**: stellt Codeblöcke mit einer Schaltfläche „Kopieren“ bereit.
   - **Für komplexe Texte**: gibt eine überarbeitete Version aus, die von informationsarmen Wörtern gereinigt ist.

---

## Konfiguration von KI-Anbietern

Um die Funktion „Mit KI beheben“ verfügbar zu machen, gehen Sie in den Bereich **„Einstellungen“** und konfigurieren Sie einen beliebigen bevorzugten KI-Anbieter:

### Lokale KI (vollständig kostenlos und vertraulich):
* **Ollama**:
  1. Installieren und starten Sie Ollama auf Ihrem Computer.
  2. Laden Sie ein Modell herunter (z. B. \`llama3\` oder \`mistral\`): \`ollama run llama3\`.
  3. Wählen Sie in den Seogeek-Einstellungen den Anbieter **Ollama** aus (Standardadresse \`http://localhost:11434/v1\`, Modell \`llama3\`).
* **LM Studio**:
  1. Starten Sie LM Studio und starten Sie den lokalen Server auf Port \`1234\`.
  2. Wählen Sie den Anbieter **LM Studio** in den Seogeek-Einstellungen aus.

### Cloud-KI (API-Schlüssel erforderlich):
* **DeepSeek**: Wählen Sie den Anbieter **DeepSeek** und geben Sie Ihren API-Schlüssel ein.
* **Google Gemini**: Wählen Sie den Anbieter **Gemini** und geben Sie Ihren API-Schlüssel aus der Google AI Studio ein.
* **OpenRouter**: universeller Zugriff auf GPT-4, Claude und andere Modelle.

> [!TIP]
> Nach Eingabe der Einstellungen klicken Sie auf die Schaltfläche **„Verbindung testen“** unten auf der Einstellungsseite. Die Anwendung führt eine Testanfrage durch und meldet, ob die KI bereit ist.

---

## Integration mit Google Search Console (GSC) und Google Analytics 4 (GA4)

Die Integration ermöglicht es Ihnen, technische Auditergebnisse mit realen Verkehrsdaten zu korrelieren: Klicks, Impressionen, CTR und Seitenpositionen in der Google-Suche sowie Sitzungen und Absprungrate (Bounce Rate).

Die Integration wird in zwei Schritten konfiguriert: Erstellen globaler Zugriffsschlüssel in Google Cloud und Verknüpfen einer spezifischen Ressource in den Projekteinstellungen.

---

### Schritt 1. Abrufen von Google OAuth 2.0-Anmeldedaten (Client-ID und Client-Secret)

Da Seogeek lokal auf Ihrem Computer läuft, müssen Sie Ihr eigenes Projekt in der Google Cloud Console erstellen, um Autorisierungsschlüssel zu generieren:

1. Rufen Sie die [Google Cloud Console](https://console.cloud.google.com/) auf und melden Sie sich mit Ihrem Google-Konto an.
2. Erstellen Sie ein neues Projekt (klicken Sie im oberen Menü auf **New Project**).
3. Gehen Sie im Seitenmenü auf **APIs & Services** -> **Library**.
4. Suchen Sie nach den folgenden APIs und aktivieren Sie diese (klicken Sie für jede auf **Enable**):
   * **Google Search Console API** (kann auch als Webmasters API bezeichnet werden) — zur Erfassung von Klick- und Impressionsstatistiken.
   * **Google Analytics Data API** — zur Erfassung von Zugriffsdaten (Sitzungen) und Interaktionszeit.
   * **PageSpeed Insights API** — zur Überprüfung der Seitengeschwindigkeit in der Anwendung ohne Limitbeschränkungen.
5. Gehen Sie zur Registerkarte **OAuth consent screen** (OAuth-Zustimmungsbildschirm):
   * Wählen Sie den Benutzertyp: **External** (Extern) und klicken Sie auf *Create*.
   * Füllen Sie die erforderlichen Felder aus: Anwendungsname (z. B. \`Seogeek\`), Ihre Support-E-Mail-Adresse und Kontaktinformationen für Entwickler.
   * Klicken Sie im Schritt **Scopes** (Bereiche) auf *Add or Remove Scopes* und fügen Sie folgende Bereiche hinzu:
     * \`.../auth/webmasters.readonly\` (Daten der Search Console anzeigen)
     * \`.../auth/analytics.readonly\` (Berichte von Google Analytics anzeigen)
     * \`.../auth/userinfo.email\` (E-Mail des Benutzers anzeigen)
     * \`openid\`
   * Stellen Sie im Schritt **Test Users** (Testbenutzer) sicher, dass Sie **Ihre Google-E-Mail-Adresse** hinzufügen, unter der Sie Ihre Websites autorisieren. Dies ist wichtig, da sich die Anwendung im Entwicklungsmodus befindet.
6. Gehen Sie zur Registerkarte **Credentials** (Anmeldedaten):
   * Klicken Sie auf **+ Create Credentials** -> **OAuth client ID**.
   * Wählen Sie den Anwendungstyp: **Web application** (Webanwendung).
   * Legen Sie einen beliebigen Namen fest (z. B. \`Seogeek Local\`).
   * Klicken Sie im Bereich **Authorized Redirect URIs** (Autorisierte Weiterleitungs-URIs) auf *Add URI* und geben Sie die genaue Adresse ein:
     \`http://127.0.0.1:8001/api/v1/auth/google/callback\`
     *(Hinweis: Verwenden Sie nicht localhost; geben Sie genau die IP 127.0.0.1 und den Port 8001 an!)*
   * Klicken Sie auf **Create**. Google stellt Ihnen eine **Client-ID** und ein **Client-Secret** zur Verfügung. Kopieren Sie diese.

---

### Schritt 2. Verbinden des Google-Kontos in Seogeek

1. Gehen Sie in der Seogeek-Anwendung im linken Menü auf **„Einstellungen“**.
2. Scrollen Sie nach unten zur Karte **„Google-Integration“**.
3. Geben Sie die kopierte **Google-Client-ID** und das **Google-Client-Secret** ein und klicken Sie auf **„Einstellungen speichern“**.
4. Klicken Sie auf **„Google-Konto autorisieren“**. Die Anwendung öffnet die Autorisierungsseite in Ihrem Standardbrowser.
5. Wählen Sie Ihr Google-Konto aus (dasjenige, das Sie in Schritt 1 zu den *Test Users* hinzugefügt haben).
6. Wenn die Warnung *"Google hasn't verified this app"* erscheint, klicken Sie auf **Advanced** (Erweitert) -> **Go to Seogeek (unsafe)** (Weiter zu Seogeek (unsicher)). Dies ist eine Standardwarnung für selbst entwickelte Anwendungen.
7. Gewähren Sie der Anwendung die angeforderten Berechtigungen zum Lesen der Search Console und Analytics.
8. Nach erfolgreicher Anmeldung wird im Browser die Meldung *"Authorization succeeded!"* angezeigt. Schließen Sie die Registerkarte und kehren Sie zu Seogeek zurück.
9. In den Seogeek-Einstellungen ändert sich der Status zu **„Verbunden mit Google (E-Mail: Ihre_E-Mail@gmail.com)“**.

> [!TIP]
> **Verwalten von Kunden-Websites oder mehreren Google-Konten:**
> Wenn Sie Projekte haben, die unter anderen Google-Konten registriert sind (z. B. Kundenkonten), müssen Sie die Konten in der Anwendung nicht wechseln.
> Die einfachste Lösung besteht darin, sich unter dem zweiten Konto in die Google Search Console und Google Analytics einzuloggen und den Zugriff an Ihr Haupt-Google-Konto, das mit Seogeek verbunden ist, zu delegieren (Leseberechtigung hinzufügen). Sobald das Hauptkonto Lesezugriff auf diese Ressourcen hat, kann die Anwendung alle Daten mit einem Klick synchronisieren!

---

### Schritt 3. Verknüpfen des Projekts und der GA4-Property-ID

Damit Seogeek weiß, woher die Verkehrsstatistiken für ein bestimmtes Projekt abgerufen werden sollen:

1. Gehen Sie zum **Dashboard** und öffnen Sie das gewünschte Projekt.
2. Klicken Sie in der rechten oberen Ecke auf die Schaltfläche **„Projekteinstellungen“** (Zahnrad-Symbol).
3. Suchen Sie im geöffneten Fenster das Feld **Google Analytics 4 Property ID**.
4. **So finden Sie Ihre GA4-Property-ID:**
   * Öffnen Sie [Google Analytics](https://analytics.google.com/).
   * Gehen Sie in der linken unteren Ecke auf **Verwaltung** (Admin).
   * Wählen Sie die gewünschte Ressource (Property) in der Spalte aus und klicken Sie auf **Property-Einstellungen** -> **Property-Details**.
   * Suchen und kopieren Sie in der rechten oberen Ecke die numerische **Property-ID** (z. B. \`412345678\`).
5. Fügen Sie diese ID in die Projekteinstellungen in Seogeek ein und klicken Sie auf **„Speichern“**.

---

### Schritt 4. Synchronisieren und Anzeigen von Daten

1. Öffnen Sie das Projekt und gehen Sie zur Registerkarte **„Google Analytics“**.
2. Klicken Sie auf die Schaltfläche **„Google-Daten synchronisieren“** in der rechten Ecke.
3. Ein Celery-Hintergrundtask wird gestartet. Das System führt automatisch folgende Schritte aus:
   * Findet eine passende bestätigte Website in Ihrer Google Search Console (durch Abgleich der Website-Domain).
   * Fragt die Anzahl der Klicks, Impressionen, CTR und die durchschnittliche Seitenposition in der Suche für die letzten 30 Tage ab.
   * Fragt die Anzahl der Sitzungen und die Absprungrate für jede Seite für die letzten 30 Tage von GA4 ab.
   * Verknüpft diese Daten mit den technischen Auditergebnissen der Seite in der Datenbank.
4. Nach einigen Sekunden wird die Benutzeroberfläche aktualisiert und zeigt die Gesamtstatistiken der Domain sowie eine detaillierte Tabelle für jede Seite an.

### Limits für kostenlose Google API-Anfragen

Alle in der Anwendung verwendeten Google-APIs werden von Google **völlig kostenlos** im Rahmen Ihres persönlichen Entwicklerprojekts bereitgestellt (Konfiguration aus Schritt 1). Es ist keine Kreditkartenbindung erforderlich, und die standardmäßigen kostenlosen Quoten sind extrem hoch:

* **Google Search Console API (Suchdaten)**:
  * **Tägliches Limit**: **100.000.000** (100 Millionen) Anfragen pro Tag und Projekt.
  * **Ratenbegrenzung**: 20 Anfragen pro Sekunde (QPS). Für den persönlichen Gebrauch bedeutet dies unbegrenzte Aufrufe.
* **Google Analytics Data API (GA4)**:
  * **Tägliches Limit**: **25.000 Token pro Tag** und Zähler (Ressource). Eine Berichtsanfrage in Seogeek verbraucht in der Regel 5 bis 50 Token (abhängig von der Anzahl der Seiten).
  * **Stündliches Limit**: 5.000 Token pro Stunde. Dieses Limit reicht aus, um 500 bis 5.000 Berichtsynchronisierungen pro Tag durchzuführen.
* **Google PageSpeed Insights API (Geschwindigkeitsanalyse)**:
  * **Tägliches Limit**: **25.000 Anfragen pro Tag**.
  * **Ratenbegrenzung**: 400 Anfragen pro Minute. Ermöglicht die tägliche Durchführung eines vollständigen Geschwindigkeits-Audits für 25.000 Seiten.

> [!NOTE]
> Alle Limits werden täglich um Mitternacht pazifischer Zeit (Pacific Time) zurückgesetzt. Bei normaler Nutzung von Seogeek zur Prüfung eigener Projekte ist es praktisch unmöglich, diese Quoten auszuschöpfen.

---

## Integration mit Yandex (Metrika & Webmaster)

Die Integration ermöglicht es Ihnen, technische Auditdaten mit realen Verweisstatistiken, Impressionen und dem Nutzerverhalten von Yandex zu korrelieren: Klicks, Impressionen, CTR und durchschnittliche Seitenpositionen in Yandex.Webmaster sowie Besuche, Absprungrate und Verweildauer in Yandex.Metrika.

Die Integration wird mit einer persönlichen Yandex OAuth-Anwendung konfiguriert.

### Schritt 1. Erstellen der Yandex OAuth-Anwendung
1. Rufen Sie [Yandex OAuth](https://oauth.yandex.ru/) auf und melden Sie sich mit Ihrem Konto an.
2. Klicken Sie auf **„Anwendung erstellen“** (wählen Sie „Webdienst“ oder „Andere“).
3. Geben Sie die Zugriffsrechte (Scopes) für die Anwendung an:
   * **Yandex.Metrika**:
     * \`metrika:read\` (Statistiken abrufen, Parameter eigener und delegierter Zähler lesen) — **Erforderlich**
   * **Yandex.Webmaster**:
     * \`webmaster:hostinfo\` (Informationen über externe Links zur Website abrufen) — **Erforderlich**
     * \`webmaster:verify\` (Websites hinzufügen, Indexierungsstatus abrufen) — **Erforderlich**
   * **Yandex ID (Persönliche Daten)**:
     * \`login:email\` (Zugriff auf E-Mail-Adresse) — *Optional*
     * \`login:info\` (Zugriff auf Vorname, Nachname, Geschlecht) — *Optional*
4. Legen Sie den **Redirect URI** fest:
   * Für die automatische Autorisierung (Webdienst):
     \`http://127.0.0.1:8001/api/v1/auth/yandex/callback\`
   * Für die manuelle Autorisierung von Desktop-Anwendungen (falls Yandex keinen lokalen Callback zulässt):
     \`https://oauth.yandex.ru/verification_code\`
5. Speichern Sie die Anwendung und kopieren Sie die bereitgestellte **Client-ID** und das **Client-Secret**.

> [!NOTE]
> **Unterstützung für zwei Autorisierungsmodi (mit und ohne E-Mail):**
> * **Mit Profilzugriff (\`login:email\`, \`login:info\`)**: Seogeek kann Benutzerdaten in Yandex ID abfragen. In den allgemeinen Seogeek-Einstellungen wird der Status als \`Verbunden mit Yandex (E-Mail: Ihre_E-Mail@yandex.ru)\` angezeigt.
> * **Ohne Profilzugriff**: Wenn Sie diese Rechte in Yandex OAuth nicht auswählen, funktioniert die Integration vollständig zum Sammeln von Metrika- und Webmaster-Daten, und der Verbindungsstatus wird einfach als \`Verbunden mit Yandex\` angezeigt.

### Step 2. Verbinden in Seogeek
1. Gehen Sie zum Bereich **„Einstellungen“** in Seogeek.
2. Tragen Sie in der Karte **„Yandex-Integration“** Ihre **Client-ID** und Ihr **Client-Secret** ein.
3. Speichern Sie die Einstellungen.
4. Führen Sie die Autorisierung durch:
   * **Automatisch**: Klicken Sie auf die Schaltfläche „Über Yandex autorisieren“ und bestätigen Sie die Berechtigungen im geöffneten Browserfenster.
   * **Manuell (Desktop-Modus)**: Wenn Sie den Redirect URI \`verification_code\` verwendet haben, klicken Sie auf die Schaltfläche **„Code abrufen“**, kopieren Sie den von Yandex bereitgestellten Bestätigungscode, fügen Sie ihn in das Eingabefeld für den Bestätigungscode in Seogeek ein und klicken Sie auf die Schaltfläche **„Code bestätigen“**.

### Schritt 3. Synchronisieren von Projektdaten
Beim Klicken auf die Schaltfläche **„Yandex-Daten synchronisieren“** in der Projektanalyse führt Seogeek automatisch folgende Schritte aus:
1. Gleicht die Projektdomain mit Metrika-Zählern ab. Wenn mehrere Zähler für eine Domain gefunden werden, wählt Seogeek automatisch den Zähler mit dem höchsten Aktivitätsstatus (\`Activity: high\`) aus und filtert inaktive Spiegel und alte Zähler heraus.
2. Findet einen passenden bestätigten Host in Yandex.Webmaster, wobei die HTTPS-Version (\`https:example.com:443\`) gegenüber der HTTP-Version bevorzugt wird, da Suchdaten hauptsächlich auf HTTPS registriert werden.
3. Gleicht wichtige Suchanfragen und Metriken seitenweise ab.

---

## Fehlerbehebung und FAQ

### Datenbanken zeigen den Status „Disconnected“ an
* **Lösung**: Stellen Sie sicher, dass Docker Desktop läuft. Wenn es läuft, versuchen Sie, die Seogeek-Anwendung neu zu starten oder führen Sie \`docker compose up -d\` im Terminal im Projektordner aus.

### KI gibt die Fehlermeldung „Authentication Fails / Invalid API Key“ zurück
* **Lösung**: Gehen Sie zu den Einstellungen, geben Sie den API-Schlüssel erneut ein und klicken Sie auf „Speichern“. Wir haben das Problem der Schlüssel-Neuverschlüsselung behoben; sie werden nun sicher gespeichert und korrekt entschlüsselt.

### Der Scanvorgang friert während der Seitensammlung ein
* **Lösung**: Unter Windows 11 konnte der Netzwerk-Stack beim Arbeiten mit der PostgreSQL-Datenbank zu Einfrierungen führen. Wir haben dieses Problem im Code mithilfe einer Selector-Schleife vollständig behoben. Stellen Sie sicher, dass das Backend auf Port 8001 läuft (dies geschieht automatisch).
`,
  }
};
if (typeof window !== 'undefined') {
  window.PROJECTS_DATA = PROJECTS_DATA;
}
