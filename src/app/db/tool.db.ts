

import { Tool } from "../interfaces/tool.interface";

export const toolsContent: Tool[] = [
    {
        id: 1,
        title: "TOOLS.ADOBE_PHOTOSHOP.TITLE",
        subtitle: "TOOLS.ADOBE_PHOTOSHOP.SUBTITLE",
        link: "https://www.adobe.com/products/photoshop.html",
        description: "TOOLS.ADOBE_PHOTOSHOP.DESCRIPTION",
        tags: ["TOOLS.ADOBE_PHOTOSHOP.TAGS"],
        favorite: true,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/2101px-Adobe_Photoshop_CC_icon.svg.png",
        skill: 60,
        restskill: 40,
        web: "TOOLS.WEB"
    },
    {
        id: 2,
        title: "TOOLS.ADOBE_ILLUSTRATOR.TITLE",
        subtitle: "TOOLS.ADOBE_ILLUSTRATOR.SUBTITLE",
        link: "https://www.adobe.com/products/illustrator.html",
        description: "TOOLS.ADOBE_ILLUSTRATOR.DESCRIPTION",
        tags: ["TOOLS.ADOBE_ILLUSTRATOR.TAGS"],
        favorite: false,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/1051px-Adobe_Illustrator_CC_icon.svg.png",
        skill: 55,
        restskill: 45,
        web: "TOOLS.WEB"
    },
    {
        id: 3,
        title: "TOOLS.ADOBE_INDESIGN.TITLE",
        subtitle: "TOOLS.ADOBE_INDESIGN.SUBTITLE",
        link: "https://www.adobe.com/products/indesign.html",
        description: "TOOLS.ADOBE_INDESIGN.DESCRIPTION",
        tags: ["TOOLS.ADOBE_INDESIGN.TAGS"],
        favorite: true,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Adobe_InDesign_CC_icon.svg/1200px-Adobe_InDesign_CC_icon.svg.png",
        skill: 65,
        restskill: 35,
        web: "TOOLS.WEB"
    },
    {
        id: 4,
        title: "TOOLS.ADOBE_XD.TITLE",
        subtitle: "TOOLS.ADOBE_XD.SUBTITLE",
        link: "https://www.adobe.com/products/xd.html",
        description: "TOOLS.ADOBE_XD.DESCRIPTION",
        tags: ["TOOLS.ADOBE_XD.TAGS"],
        favorite: true,
        image: "https://cdn.worldvectorlogo.com/logos/adobe-xd-2.svg",
        skill: 80,
        restskill: 20,
        web: "TOOLS.WEB"
    }
];