export const SAMPLE_MENU_URL = '/menu/Embassy-Catering-Sample-Menu.pdf';
export const SAMPLE_MENU_FILENAME = 'Embassy-Catering-Sample-Menu.pdf';
export const SAMPLE_MENU_UNLOCK_KEY = 'embassySampleMenuUnlocked';

let warmed = false;
export function warmSampleMenu() {
  if (warmed || typeof window === 'undefined') return;
  warmed = true;
  fetch(SAMPLE_MENU_URL).catch(() => {
    warmed = false;
  });
}

export function triggerMenuDownload() {
  const a = document.createElement('a');
  a.href = SAMPLE_MENU_URL;
  a.download = SAMPLE_MENU_FILENAME;
  document.body.appendChild(a);
  a.click();
  a.remove();
}
