

import { NavbarInterface } from "../interface/navbar.interface";

export const navbarItems: NavbarInterface[] = [
    {
        label: "NAVBAR.ABOUT",
        icon: 'pi pi-fw pi-user',
        routerLink: ['/about']
    },
    {
        label: "NAVBAR.TOOLS",
        icon: 'pi pi-fw pi-cog',
        routerLink: ['/tools']
    },
    {
        label: "NAVBAR.CONTACT",
        icon: 'pi pi-fw pi-envelope',
        routerLink: ['/contact']
    }
]