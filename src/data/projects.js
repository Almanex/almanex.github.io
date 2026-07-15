import shortcutdock from './projects/shortcutdock.json';
import classic_windows_image_viewer from './projects/classic-windows-image-viewer.json';
import gemma_local_desktop from './projects/gemma-local-desktop.json';
import lingospaced from './projects/lingospaced.json';
import mushroom_spot from './projects/mushroom-spot.json';
import portable_app_sync from './projects/portable-app-sync.json';
import flowguide from './projects/flowguide.json';
import rokey from './projects/rokey.json';
import screentation_v2 from './projects/screentation-v2.json';
import shelter_fork from './projects/shelter-fork.json';
import webpconverter from './projects/webpconverter.json';

export const PROJECTS_DATA = {
  "shortcutdock": shortcutdock,
  "classic-windows-image-viewer": classic_windows_image_viewer,
  "gemma-local-desktop": gemma_local_desktop,
  "lingospaced": lingospaced,
  "mushroom-spot": mushroom_spot,
  "portable-app-sync": portable_app_sync,
  "flowguide": flowguide,
  "rokey": rokey,
  "screentation-v2": screentation_v2,
  "shelter-fork": shelter_fork,
  "webpconverter": webpconverter
};

if (typeof window !== 'undefined') {
  window.PROJECTS_DATA = PROJECTS_DATA;
}
