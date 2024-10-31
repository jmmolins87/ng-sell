

import { DialInterface } from "../interface/dial.interface";

function isMobileDevice(): boolean {
    return /Mobi|Android/i.test(navigator.userAgent);
}

function getMobileUrl(url: string): string {
    if (url.includes('github.com')) {
        return 'github://openRepo/https://github.com/jmmolins87';
    } else if (url.includes('linkedin.com')) {
        return 'linkedin://profile/juan-maria-molins-cortes-5065a072';
    }
    return url;
}

export const dialContent: DialInterface[] = [
    {
        icon: 'pi pi-github',
        target: '_blank',
        url: isMobileDevice() ? getMobileUrl('https://github.com/jmmolins87') : 'https://github.com/jmmolins87'
    },
    {
        icon: 'pi pi-linkedin',
        target: '_blank',
        url: isMobileDevice() ? getMobileUrl('https://www.linkedin.com/in/juan-maria-molins-cortes-5065a072/') : 'https://www.linkedin.com/in/juan-maria-molins-cortes-5065a072/'
  }
]