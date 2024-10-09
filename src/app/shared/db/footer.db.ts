

import { FooterInterface } from "../interface/footer.interface";


export const footerContent: FooterInterface[] = [
    {
        label: "FOOTER.RIGHTS"
    },
    {
        label: "FOOTER.MY_SITE"
    },
    {
        label: "FOOTER.LEGAL",
        routerLink: ['/legal']
    },
    {
        label: "FOOTER.COOKIES",
        routerLink: ['/cookies']
    },
    {
        label: "FOOTER.PRIVACITY",
        routerLink: ['/privacity']
    }
]