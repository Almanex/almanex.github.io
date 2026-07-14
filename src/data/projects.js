import classic_windows_image_viewer from './projects/classic-windows-image-viewer.json';
import gemma_local_desktop from './projects/gemma-local-desktop.json';
import portable_app_sync from './projects/portable-app-sync.json';
import screentation_v2 from './projects/screentation-v2.json';
import shortcutdock from './projects/shortcutdock.json';
import webpconverter from './projects/webpconverter.json';
import rokey from './projects/rokey.json';
import shelter_fork from './projects/shelter-fork.json';
import flowguide from './projects/flowguide.json';
import lingospaced from './projects/lingospaced.json';
import mushroom_spot from './projects/mushroom-spot.json';

export const PROJECTS_DATA = {
  "classic-windows-image-viewer": classic_windows_image_viewer,
  "gemma-local-desktop": gemma_local_desktop,
  "portable-app-sync": portable_app_sync,
  "screentation-v2": screentation_v2,
  "shortcutdock": shortcutdock,
  "webpconverter": webpconverter,
  "rokey": rokey,
  "shelter-fork": shelter_fork,
  "flowguide": flowguide,
  "lingospaced": lingospaced,
  "mushroom-spot": mushroom_spot
};

if (typeof window !== 'undefined') {
  window.PROJECTS_DATA = PROJECTS_DATA;
}
