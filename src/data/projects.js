import flowguide from './projects/flowguide.json';
import gemma_local_desktop from './projects/gemma-local-desktop.json';
import lingospaced from './projects/lingospaced.json';
import classic_windows_image_viewer from './projects/classic-windows-image-viewer.json';
import mushroom_spot from './projects/mushroom-spot.json';
import portable_app_sync from './projects/portable-app-sync.json';
import rokey from './projects/rokey.json';
import ru_privatezilla from './projects/ru-privatezilla.json';
import screentation_v2 from './projects/screentation-v2.json';
import shelter_fork from './projects/shelter-fork.json';
import shortcutdock from './projects/shortcutdock.json';
import webpconverter from './projects/webpconverter.json';

export const PROJECTS_DATA = {
  "flowguide": flowguide,
  "gemma-local-desktop": gemma_local_desktop,
  "lingospaced": lingospaced,
  "classic-windows-image-viewer": classic_windows_image_viewer,
  "mushroom-spot": mushroom_spot,
  "portable-app-sync": portable_app_sync,
  "rokey": rokey,
  "ru-privatezilla": ru_privatezilla,
  "screentation-v2": screentation_v2,
  "shelter-fork": shelter_fork,
  "shortcutdock": shortcutdock,
  "webpconverter": webpconverter
};

if (typeof window !== 'undefined') {
  window.PROJECTS_DATA = PROJECTS_DATA;
}
