

import { Tool } from "../interfaces/tool.interface";

export const toolsContent: Tool[] = [
    {
        id: 1,
        title: "Adobe Photoshop",
        subtitle: "TOOLS.ADOBE_PHOTOSHOP.SUBTITLE",
        link: "https://www.adobe.com/products/photoshop.html",
        description: "TOOLS.ADOBE_PHOTOSHOP.DESCRIPTION",
        tags: [
            "TOOLS.ADOBE_PHOTOSHOP.TAGS.EDIT_IMG",
            "TOOLS.ADOBE_PHOTOSHOP.TAGS.DESIGN",
            "TOOLS.ADOBE_PHOTOSHOP.TAGS.PHOTO_RET",
            "TOOLS.ADOBE_PHOTOSHOP.TAGS.DIGITAL_ART",
            "TOOLS.ADOBE_PHOTOSHOP.TAGS.PHOTO_MANIP",
        ],
        favorite: true,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/2101px-Adobe_Photoshop_CC_icon.svg.png",
        skill: 60,
        restskill: 40,
        web: "TOOLS.WEB"
    },
    {
        id: 2,
        title: "Adobe Illustrator",
        subtitle: "TOOLS.ADOBE_ILLUSTRATOR.SUBTITLE",
        link: "https://www.adobe.com/products/illustrator.html",
        description: "TOOLS.ADOBE_ILLUSTRATOR.DESCRIPTION",
        tags: [
            "TOOLS.ADOBE_ILLUSTRATOR.TAGS.VECTOR_GRAPHICS",
            "TOOLS.ADOBE_ILLUSTRATOR.TAGS.ILLUSTRATION",
            "TOOLS.ADOBE_ILLUSTRATOR.TAGS.GRAPHIC_DESIGN",
            "TOOLS.ADOBE_ILLUSTRATOR.TAGS.LOGO_DESIGN",
            "TOOLS.ADOBE_ILLUSTRATOR.TAGS.TYPOGRAPHY"
        ],
        favorite: false,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Adobe_Illustrator_CC_icon.svg/1051px-Adobe_Illustrator_CC_icon.svg.png",
        skill: 55,
        restskill: 45,
        web: "TOOLS.WEB"
    },
    {
        id: 3,
        title: "Adobe Indesign",
        subtitle: "TOOLS.ADOBE_INDESIGN.SUBTITLE",
        link: "https://www.adobe.com/products/indesign.html",
        description: "TOOLS.ADOBE_INDESIGN.DESCRIPTION",
        tags: [
            "TOOLS.ADOBE_INDESIGN.TAGS.TYPOGRAPHY",
            "TOOLS.ADOBE_INDESIGN.TAGS.GRAPHIC_DESIGN",
            "TOOLS.ADOBE_INDESIGN.TAGS.PRINT_DESIGN",
            "TOOLS.ADOBE_INDESIGN.TAGS.DIGITAL_PUBLISHING"
        ],
        favorite: true,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Adobe_InDesign_CC_icon.svg/1200px-Adobe_InDesign_CC_icon.svg.png",
        skill: 65,
        restskill: 35,
        web: "TOOLS.WEB"
    },
    {
        id: 4,
        title: "Adobe XD",
        subtitle: "TOOLS.ADOBE_XD.SUBTITLE",
        link: "https://www.adobe.com/products/xd.html",
        description: "TOOLS.ADOBE_XD.DESCRIPTION",
        tags: [
            "TOOLS.ADOBE_XD.TAGS.UI_DESIGN",
            "TOOLS.ADOBE_XD.TAGS.UX_DESIGN",
            "TOOLS.ADOBE_XD.TAGS.PROTOTYPES",
            "TOOLS.ADOBE_XD.TAGS.COLLABORATIVE_DESIGN",
            "TOOLS.ADOBE_XD.TAGS.GRAPHIC_DESIGN",
            "TOOLS.ADOBE_XD.TAGS.WEB_DESIGN",
        ],
        favorite: true,
        image: "https://cdn.worldvectorlogo.com/logos/adobe-xd-2.svg",
        skill: 80,
        restskill: 20,
        web: "TOOLS.WEB"
    },
    {
        id: 5,
        title: "Figma",
        subtitle: "TOOLS.FIGMA.SUBTITLE",
        link: "https://www.figma.com/",
        description: "TOOLS.FIGMA.DESCRIPTION",
        tags: [
            "TOOLS.FIGMA.TAGS.UI_DESIGN",
            "TOOLS.FIGMA.TAGS.UX_DESIGN",
            "TOOLS.FIGMA.TAGS.PROTOTYPES",
            "TOOLS.FIGMA.TAGS.WEB_DESIGN",
            "TOOLS.FIGMA.TAGS.GRAPHIC_DESIGN",
            "TOOLS.FIGMA.TAGS.COLLABORATIVE_DESIGN"
        ],
        favorite: true,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/1365px-Figma-logo.svg.png",
        skill: 75,
        restskill: 25,
        web: "TOOLS.WEB"
    },
    {
        id: 6,
        title: "Visual Studio Code",
        subtitle: "TOOLS.VSC.SUBTITLE",
        link: "https://code.visualstudio.com/",
        description: "TOOLS.VSC.DESCRIPTION",
        tags:[
            "TOOLS.VSC.TAGS.EDIT_CODE",
            "TOOLS.VSC.TAGS.DEVELOPMENT",
        ],
        favorite: true,
        image: "https://seeklogo.com/images/V/visual-studio-code-logo-449D71944F-seeklogo.com.png",
        skill: 90,
        restskill: 10,
        web: "TOOLS.WEB"
    },
    {
        id: 7,
        title: "Notion",
        subtitle: "TOOLS.NOTION.SUBTITLE",
        link: "https://www.notion.so/",
        description: "TOOLS.NOTION.DESCRIPTION",
        tags: [
            "TOOLS.NOTION.TAGS.PRODUCTIVITY",
            "TOOLS.NOTION.TAGS.PROJECT_MANAGEMENT",
            "TOOLS.NOTION.TAGS.COLLABORATIVE",
            "TOOLS.NOTION.TAGS.TASK_MANAGEMENT",
            "TOOLS.NOTION.TAGS.LABELED"
        ],
        favorite: true,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Notion-logo.svg/2048px-Notion-logo.svg.png",
        skill: 90,
        restskill: 10,
        web: "TOOLS.WEB"
    },
    {
        id: 8,
        title: "Trello",
        subtitle: "TOOLS.TRELLO.SUBTITLE",
        link: "https://trello.com/",
        description: "TOOLS.TRELLO.DESCRIPTION",
        tags: [
            "TOOLS.NOTION.TAGS.PRODUCTIVITY",
            "TOOLS.NOTION.TAGS.PROJECT_MANAGEMENT",
            "TOOLS.NOTION.TAGS.COLLABORATIVE",
            "TOOLS.NOTION.TAGS.TASK_MANAGEMENT",
            "TOOLS.NOTION.TAGS.LABELED"
        ],
        favorite: false,
        image: "https://cdn.worldvectorlogo.com/logos/trello-logo.svg",
        skill: 85,
        restskill: 15,
        web: "TOOLS.WEB"
    },
    {
        id: 9,
        title: "Jira",
        subtitle: "TOOLS.TRELLO.SUBTITLE",
        link: "https://www.atlassian.com/software/jira",
        description: "TOOLS.JIRA.DESCRIPTION",
        tags: [
            "TOOLS.JIRA.TAGS.PRODUCTIVITY",
            "TOOLS.JIRA.TAGS.PROJECT_MANAGEMENT",
            "TOOLS.JIRA.TAGS.COLLABORATIVE",
            "TOOLS.JIRA.TAGS.TASK_MANAGEMENT",
            "TOOLS.JIRA.TAGS.LABELED"
        ],
        favorite: true,
        image: "https://cdn.worldvectorlogo.com/logos/jira-3.svg",
        skill: 70,
        restskill: 30,
        web: "TOOLS.WEB"
    },
    {
        id: 10,
        title: "Html",
        subtitle: "TOOLS.HTML.SUBTITLE",
        link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
        description: "TOOLS.HTML.DESCRIPTION",
        tags: [
            "TOOLS.HTML.TAGS.DEVELOPMENT",
            "TOOLS.HTML.TAGS.LABELED",
            "TOOLS.HTML.TAGS.CONTENT_STRUCTURE",
            "TOOLS.HTML.TAGS.FRONTEND"
        ],
        favorite: true,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png",
        skill: 90,
        restskill: 10,
        web: "TOOLS.WEB"
    },
    {
        id: 11,
        title: "CSS",
        subtitle: "TOOLS.CSS.SUBTITLE",
        link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
        description: "TOOLS.CSS.DESCRIPTION",
        tags: [
            "TOOLS.CSS.TAGS.DEVELOPMENT",
            "TOOLS.CSS.TAGS.STYLES",
            "TOOLS.CSS.TAGS.WEB_DESIGN",
            "TOOLS.CSS.TAGS.FRONTEND"
        ],
        favorite: true,
        image: "https://cdn.freebiesupply.com/logos/large/2x/css3-logo-png-transparent.png",
        skill: 90,
        restskill: 10,
        web: "TOOLS.WEB"
    },
    {
        id: 12,
        title: "SASS",
        subtitle: "TOOLS.SASS.SUBTITLE",
        link: "https://sass-lang.com/",
        description: "TOOLS.SASS.DESCRIPTION",
        tags: [
            "TOOLS.SASS.TAGS.DEVELOPMENT",
            "TOOLS.SASS.TAGS.STYLES",
            "TOOLS.SASS.TAGS.WEB_DESIGN",
            "TOOLS.SASS.TAGS.FRONTEND",
            "TOOLS.SASS.TAGS.PROGRAMMING"
        ],
        favorite: true,
        "image": "https://cdn.freebiesupply.com/logos/large/2x/sass-1-logo-png-transparent.png",
        skill: 90,
        restskill: 10,
        web: "TOOLS.WEB"
    },
    {
        id: 13,
        title: "JavaScript",
        subtitle: "TOOLS.JAVASCRIPT.SUVTITLE",
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        description: "TOOLS.JAVASCRIPT.DESCRIPTION",
        tags: [
            "TOOLS.JAVASCRIPT.TAGS.DEVELOPMENT",
            "TOOLS.JAVASCRIPT.TAGS.PROGRAMMING",
            "TOOLS.JAVASCRIPT.TAGS.FRONTEND",
            "TOOLS.JAVASCRIPT.TAGS.AUTOMATION",
            "TOOLS.JAVASCRIPT.TAGS.WEB_FUNCTIONALITY"
        ],
        favorite: true,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/1200px-JavaScript-logo.png",
        skill: 55,
        restskill: 45,
        web: "TOOLS.WEB"
    },
    {
        id: 14,
        title: "Angular",
        subtitle: "TOOLS.ANGULAR.SUBTITLE",
        link: "https://angular.io/",
        description: "TOOLS.ANGULAR.DESCRIPTION",
        tags: [
            "TOOLS.ANGULAR.TAGS.DEVELOPMENT",
            "TOOLS.ANGULAR.TAGS.PROGRAMMING",
            "TOOLS.ANGULAR.TAGS.FRAMEWORK",
            "TOOLS.ANGULAR.TAGS.FRONTEND",
            "TOOLS.ANGULAR.TAGS.WEB_FUNCTIONALITY",
            "TOOLS.ANGULAR.TAGS.ANGULAR",
            "TOOLS.ANGULAR.TAGS.COMPONENTS"
        ],
        favorite: true,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png",
        skill: 70,
        restskill: 30,
        web: "TOOLS.WEB"
    },
    {
        id: 15,
        title: "React",
        subtitle: "TOOLS.REACT.SUBTITLE",
        link: "https://reactjs.org/",
        description: "TOOLS.REACT.DESCRIPTION",
        tags: [
            "TOOLS.REACT.TAGS.DEVELOPMENT",
            "TOOLS.REACT.TAGS.PROGRAMMING",
            "TOOLS.REACT.TAGS.FRAMEWORK",
            "TOOLS.REACT.TAGS.FRONTEND",
            "TOOLS.REACT.TAGS.WEB_FUNCTIONALITY",
            "TOOLS.REACT.TAGS.REACT",
            "TOOLS.REACT.TAGS.COMPONENTS"
        ],
        favorite: false,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
        skill: 40,
        restskill: 60,
        web: "TOOLS.WEB"
    },
    {
        id: 16,
        title: "GitHub",
        subtitle: "TOOLS.GITHUB.SUBTITLE",
        link: "https://github.com/",
        description: "TOOLS.GITHUB.DESCRIPTION",
        tags: [
            "TOOLS.GITHUB.TAGS.REPOSITORY",
            "TOOLS.GITHUB.TAGS.PRODUCTIVITY",
            "TOOLS.GITHUB.TAGS.PROJECT_MANAGEMENT",
            "TOOLS.GITHUB.TAGS.COLLABORATIVE",
            "TOOLS.GITHUB.TAGS.TASK_MANAGEMENT",
            "TOOLS.GITHUB.TAGS.VERSION_CONTROL"
        ],
        favorite: true,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/1200px-Octicons-mark-github.svg.png",
        skill: 80,
        restskill: 20,
        web: "TOOLS.WEB"
    },
    {
        id: 17,
        title: "Node.Js",
        subtitle: "TOOLS.NODE.SUBTITLE",
        link: "https://nodejs.org/",
        description: "TOOLS.NODE.DESCRIPTION",
        tags: [
            "TOOLS.NODE.TAGS.DEVELOPMENT",
            "TOOLS.NODE.TAGS.BACKEND",
            "TOOLS.NODE.TAGS.PROGRAMMING",
            "TOOLS.NODE.TAGS.API"
        ],
        favorite: false,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png",
        "skill": 30,
        "restskill": 70,
        web: "TOOLS.WEB"
    },
    {
        id: 18,
        title: "Postman",
        subtitle: "TOOLS.POSTMAN.SUBTITLE",
        link: "https://www.postman.com/",
        description: "TOOLS.POSTMAN.DESCRIPTION",
        tags: [
            "TOOLS.POSTMAN.TAGS.DEVELOPMENT",
            "TOOLS.POSTMAN.TAGS.BACKEND",
            "TOOLS.POSTMAN.TAGS.API"
        ],
        favorite: false,
        image: "https://seeklogo.com/images/P/postman-logo-F43375A2EB-seeklogo.com.png",
        skill: 30,
        restskill: 70,
        web: "TOOLS.WEB"
    },
    {
        id: 19,
        title: "Git",
        subtitle: "TOOLS.GIT.SUBTITLE",
        link: "https://git-scm.com/",
        description: "TOOLS.GIT.DESCRIPTION",
        tags: [
            "TOOLS.GIT.TAGS.DEVELOPMENT",
            "TOOLS.GIT.TAGS.VERSION_CONTROL",
            "TOOLS.GIT.TAGS.PRODUCTIVITY",
            "TOOLS.GIT.TAGS.PROGRAMMING"
        ],
        favorite: true,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Git-logo.svg/1200px-Git-logo.svg.png",
        skill: 85,
        restskill: 15,
        web: "TOOLS.WEB"
    },
    {
        id: 20,
        title: "Bootstrap",
        subtitle: "TOOLS.BOOTSTRAP.SUBTITLE",
        link: "https://getbootstrap.com/",
        description: "TOOLS.BOOTSTRAP.DESCRIPTION",
        tags: [
            "TOOLS.BOOTSTRAP.TAGS.DEVELOPMENT",
            "TOOLS.BOOTSTRAP.TAGS.WEB_DESIGN",
            "TOOLS.BOOTSTRAP.TAGS.FRONTEND",
            "TOOLS.BOOTSTRAP.TAGS.STYLES",
            "TOOLS.BOOTSTRAP.TAGS.COMPONENTS",
            "TOOLS.BOOTSTRAP.TAGS.FRAMEWORK"
        ],
        favorite: true,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1200px-Bootstrap_logo.svg.png",
        skill: 75,
        restskill: 25,
        web: "TOOLS.WEB"
    },
    {
        id: 21,
        title: "Material UI",
        subtitle: "TOOLS.MATERIAL.SUBTITLE",
        link: "https://material.angular.io/",
        description: "TOOLS.MATERIAL.DESCRIPTION",
        tags: [
            "TOOLS.MATERIAL.TAGS.DEVELOPMENT",
            "TOOLS.MATERIAL.TAGS.WEB_DESIGN",
            "TOOLS.MATERIAL.TAGS.FRAMEWORK",
            "TOOLS.MATERIAL.TAGS.FRONTEND",
            "TOOLS.MATERIAL.TAGS.STYLES",
            "TOOLS.MATERIAL.TAGS.PROGRAMMING",
            "TOOLS.MATERIAL.TAGS.COMPONENTS",
            "TOOLS.MATERIAL.TAGS.ANGULAR",
            "TOOLS.MATERIAL.TAGS.REACT"
        ],
        favorite: false,
        image: "https://cdn.jsdelivr.net/gh/angular-material-extensions/pages@master/assets/angular-material-extensions-logo.png",
        skill: 65,
        restskill: 35,
        web: "TOOLS.WEB"
    },
    {
        id: 22,
        title: "PrimeNg",
        subtitle: "TOOLS.PRIMENG.SUBTITLE",
        link: "https://www.primefaces.org/primeng/",
        description: "TOOLS.PRIMENG.DESCRIPTION",
        tags: [
            "TOOLS.PRIMENG.TAGS.DEVELOPMENT",
            "TOOLS.PRIMENG.TAGS.WEB_DESIGN",
            "TOOLS.PRIMENG.TAGS.FRONTEND",
            "TOOLS.PRIMENG.TAGS.STYLES",
            "TOOLS.PRIMENG.TAGS.PROGRAMMING",
            "TOOLS.PRIMENG.TAGS.COMPONENTS",
            "TOOLS.PRIMENG.TAGS.FRAMEWORK",
            "TOOLS.PRIMENG.TAGS.ANGULAR",
            "TOOLS.PRIMENG.TAGS.REACT"
        ],
        favorite: true,
        image: "https://soka.gitlab.io/angular/ui/primeng/01-primeng-intro/img/primeng-2.png",
        skill: 85,
        restskill: 15,
        web: "TOOLS.WEB"
    },
    {
        id: 23,
        title: "MongoDB",
        subtitle: "TOOLS.MONGO.SUBTITLE",
        link: "https://www.mongodb.com/",
        description: "TOOLS.MONGO.DESCRIPTION",
        tags: [
            "TOOLS.MONGO.TAGS.DEVELOPMENT",
            "TOOLS.MONGO.TAGS.DATA_BASE",
            "TOOLS.MONGO.TAGS.BACKEND",
            "TOOLS.MONGO.TAGS.PROGRAMMING"
        ],
        favorite: false,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/1200px-MongoDB_Logo.svg.png",
        skill: 55,
        restskill: 45,
        web: "TOOLS.WEB"
    },
    {
        "id": 24,
        title: "Wordpress",
        subtitle: "TOOLS.WORDPRESS.SUBTITLE",
        link: "https://wordpress.com/",
        description: "TOOLS.WORDPRESS.DESCRIPTION",
        tags: [
            "TOOLS.WORDPRESS.TAGS.DEVELOPMENT",
            "TOOLS.WORDPRESS.TAGS.CMS",
            "TOOLS.WORDPRESS.TAGS.FRONTEND",
            "TOOLS.WORDPRESS.TAGS.BACKEND",
            "TOOLS.WORDPRESS.TAGS.WEB_FUNCTIONALITY"
        ],
        favorite: false,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/WordPress_blue_logo.svg/1200px-WordPress_blue_logo.svg.png",
        skill: 75,
        restskill: 25,
        web: "TOOLS.WEB"
    },
    {
        id: 25,
        title: "Docker",
        subtitle: "TOOLS.DOCKER.SUBTITLE",
        link: "https://www.docker.com/",
        description: "TOOLS.DOCKER.DESCRIPTION",
        tags: [
            "TOOLS.DOCKER.TAGS.DEVELOPMENT",
            "TOOLS.DOCKER.TAGS.VIRTUALIZATION",
            "TOOLS.DOCKER.TAGS.BACKEND"
        ],
        favorite: false,
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Docker_%28container_engine%29_logo.svg/1200px-Docker_%28container_engine%29_logo.svg.png",
        skill: 25,
        restskill: 75,
        web: "TOOLS.WEB"
    },
    {
        id: 26,
        title: "Tailwind",
        subtitle: "TOOLS.TAILWIND.SUBTITLE",
        link: "https://tailwindcss.com/",
        description: "TOOLS.TAILWINDD.DESCRIPTION",
        tags: [
            "TOOLS.TAILWIND.TAGS.DEVELOPMENT",
            "TOOLS.TAILWIND.TAGS.WEB_DESIGN",
            "TOOLS.TAILWIND.TAGS.FRONTEND",
            "TOOLS.TAILWIND.TAGS.STYLES",
            "TOOLS.TAILWIND.TAGS.FRAMEWORK",
            "TOOLS.TAILWIND.TAGS.COMPONENTS"
        ],
        favorite: false,
        image: "https://cdn.worldvectorlogo.com/logos/tailwind-css-1.svg",
        skill: 75,
        restskill: 25,
        web: "TOOLS.WEB"
    },
    {
        id: 27,
        title: "Stenicl JS",
        subtitle: "TOOLS.STENCIL.SUBTITLE",
        link: "https://stenciljs.com/",
        description: "TOOLS.STENCIL.DESCRIPTION",
        tags: [
            "TOOLS.STENCIL.TAGS.DEVELOPMENT",
            "TOOLS.STENCIL.TAGS.FRONTEND",
            "TOOLS.STENCIL.TAGS.COMPONENTS",
            "TOOLS.STENCIL.TAGS.WEB_FUNCTIONALITY",
            "TOOLS.STENCIL.TAGS.FRAMEWORK"
        ],
        favorite: true,
        image: "https://stenciljs.com/stencil-og.png",
        skill: 65,
        restskill: 45,
        web: "TOOLS.WEB"
    },
    {
        id: 28,
        title: "Storybook",
        subtitle: "TOOLS.STORYBOOK.SUBTITLE",
        link: "https://storybook.js.org/",
        description: "TOOLS.STORYBOOK.DESCRIPTION",
        tags: [
            "TOOLS.STORYBOOK.TAGS.DEVELOPMENT",
            "TOOLS.STORYBOOK.TAGS.FRONTEND",
            "TOOLS.STORYBOOK.TAGS.COMPONENTS",
            "TOOLS.STORYBOOK.TAGS.FRAMEWORK"
        ],
        favorite: true,
        image: "https://static-00.iconduck.com/assets.00/storybook-icon-2048x410-m440b17u.png",
        skill: 75,
        restskill: 25,
        web: "TOOLS.WEB"
    },
    {
        id: 29,
        title: "Nest Js",
        subtitle: "TOOLS.NEST.SUBTITLE",
        link: "https://nestjs.com/",
        description: "TOOLS.NEST.DESCRIPTION",
        tags: [
            "TOOLS.NEST.TAGS.DEVELOPMENT",
            "TOOLS.NEST.TAGS.BACKEND",
            "TOOLS.NEST.TAGS.API",
            "TOOLS.NEST.TAGS.FRAMEWORK",
            "TOOLS.NEST.TAGS.PROGRAMMING",
            "TOOLS.NEST.TAGS.DATA_BASE"
        ],
        favorite: false,
        image: "https://cdn.icon-icons.com/icons2/2699/PNG/512/nestjs_logo_icon_169927.png",
        skill: 25,
        restskill: 75,
        web: "TOOLS.WEB"
    }
];