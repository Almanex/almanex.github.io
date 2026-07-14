import classic_windows_image_viewer from './projects/classic-windows-image-viewer.json';
import portable_app_sync from './projects/portable-app-sync.json';
import ru_privatezilla from './projects/ru-privatezilla.json';
import mushroom_spot from './projects/mushroom-spot.json';
import gemma_local_desktop from './projects/gemma-local-desktop.json';
import icoboo from './projects/icoboo.json';
import lingospaced from './projects/lingospaced.json';
import rokey from './projects/rokey.json';
import screentation_v2 from './projects/screentation-v2.json';
import shortcutdock from './projects/shortcutdock.json';
import shelter_fork from './projects/shelter-fork.json';
import seogeek from './projects/seogeek.json';

export const PROJECTS_DATA = {
  "classic-windows-image-viewer": classic_windows_image_viewer,
  "portable-app-sync": portable_app_sync,
  "ru-privatezilla": ru_privatezilla,
  "mushroom-spot": mushroom_spot,
  "gemma-local-desktop": gemma_local_desktop,
  "icoboo": icoboo,
  "lingospaced": lingospaced,
  "rokey": rokey,
  "screentation-v2": screentation_v2,
  "shortcutdock": shortcutdock,
  "shelter-fork": shelter_fork,
  "seogeek": seogeek
};

if (typeof window !== 'undefined') {
  window.PROJECTS_DATA = PROJECTS_DATA;
}
