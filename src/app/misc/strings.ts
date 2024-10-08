import { Tab } from '../projects/projects.component'

export const toolTip = {
    showDelay: '300',
    hideDelay: '300',
}

export const about = {
    cards: [
        {
            header: 'Hey',
            text: 'I am Yoav Rabby.\nSome know me as Arik Hativa and others as Pigafetta.\nI am 31. From a small village in Israel.',
        },
        {
            header: 'so... I am a software developer',
            text: 'Studied programming at Infinity Labs and at 42 Madrid.\nI have 3 years of professional experience.',
            // img: {
            //     dir: 'right',
            //     src: 'assets/images/42.png',
            //     alt: '42 madrid logo',
            // },
        },
        {
            header: 'Broadcom Inc.',
            text: 'Worked at Broadcom for 2 years. Mostly in a position of a full stack developer.\nAfter a year there I assumed responsibility for the ELK stack and created a provisioning service in Golang.',
        },
        {
            header: 'Sofi Cooperative',
            text: 'Joined Sofi and started working on the mobile app "Avoda+" as a full stack developer.',
        },
        {
            header: 'Web development',
            text: 'I have also been making some websites as a freelancer.\nCheck them out!\n(they are under the briefcase icon)',
        },
    ],
}

export const projects: {
    tabs: Tab[]
} = {
    tabs: [
        {
            title: 'Beit Tawfik Toubi',
            content:
                '<a href="https://beittawfiktoubi.com">beittawfiktoubi.com</a><br><br>Beit Tawfik Toubi is a small hosting business. The website is written in Angular and hosted on Github Pages.',
            tech: ['Angular', 'Typescript', 'Github Pages'],
        },
        {
            title: 'Avoda+',
            content:
                '<a href="https://www.sofi.coop/project/avoda-plus">sofi.coop</a><br><br>Avoda+ is a mobile app that helps teenagers with their first steps in the job market. I worked on the app as a full-stack developer.',
            tech: [
                'ReactNative',
                'Prisma',
                'GraphQL',
                'Docker',
                'PostgreSQL',
                'Vue.js',
                'Node.js',
                'Typescript',
            ],
        },
        {
            title: 'Naama Ofir',
            content:
                '<a href="https://naamaofir.com/">naamaofir.com</a><br><br>Landing page for Naama Ofir (Animator). Written in Angular and hosted on Github Pages.',

            tech: ['Angular', 'Typescript', 'Github Pages'],
        },
        {
            title: 'Oded Rabby',
            content:
                '<a href="https://odedrabby.com/">odedrabby.com</a><br><br>Landing page for Oded Rabby. He is a musician, and I created a custom music player for the page. Written in Angular and hosted on Github Pages.',

            tech: ['Angular', 'Typescript', 'Github Pages'],
        },
        {
            title: 'Shemzmani',
            content:
                "<a href=\"https://shemzmani.space/\">shemzmani.space</a><br><br>Landing page for Gal Cohen Paraira's new album 'shemzmani'. Written in Angular and hosted on Github Pages.",

            tech: ['Angular', 'Typescript', 'Github Pages'],
        },
        {
            title: 'Milouban TLD',
            content:
                '<a href="https://www.milouban.com/">milouban.com</a><br><br>Milouban LTD is a company that trades with cotton linters pulp. this website serves them as a landing page and to showcase their products. Written with Wordpress, and hosted on Github Pages.',

            tech: ['Wordpress', 'Docker', 'Github Pages'],
        },
    ],
}
