export const WHATSAPP_NUMBER = '5492204709105';
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export const INSTAGRAM_HANDLE = 'vicky.aphalo';
export const INSTAGRAM_URL = `https://www.instagram.com/${INSTAGRAM_HANDLE}/`;
export const INSTAGRAM_DM_URL = `https://ig.me/m/${INSTAGRAM_HANDLE}`;

export function whatsappUrl(message: string) {
  return `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`;
}
