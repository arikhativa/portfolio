import { Tab } from '../projects/projects.component'

export const about = {
    cards: [
        {
            header: 'hey',
            text: 'i am yoav rabby.\nsome know me as arik hativa and others as pigafetta.\ni am 31. from a small village in israel.',
        },
        {
            header: 'so... i am a software developer',
            text: 'studied programming in infinity labs and in 42 madrid.\ni have 3 years of experience.',
            // img: {
            //     dir: 'right',
            //     src: 'assets/images/42.png',
            //     alt: '42 madrid logo',
            // },
        },
        {
            header: 'Broadcom Inc.',
            text: 'i work at broadcom for 2 years. mostly in a position of a full stack developer.\nafter a year there i got the respirability of the ELK stack and created a provisioning service in Golang.',
        },
        {
            header: 'Sofi Cooperative',
            text: 'i joined sofi and started working on the mobile app "Avoda+" as a full stack developer.',
        },
        {
            header: 'web development',
            text: 'i have also been making some websites as a freelancer.\ncheck them out!\n(they are under the briefcase icon)',
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
                '<a href="https://beittawfiktoubi.com">beittawfiktoubi.com</a><br><br>Beit Tawfik Toubi is a website for the small hosting business. written in Angular and hosted on Github Pages.',
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
                'PostgreSQL',
                'Vue.js',
                'Node.js',
                'Typescript',
            ],
        },
        {
            title: 'Naama Ofir',
            content:
                '<a href="https://naamaofir.com/">naamaofir.com</a><br><br>Landing page for Naam Aofir (Animator). written in Angular and hosted on Github Pages.',

            tech: ['Angular', 'Typescript', 'Github Pages'],
        },
        {
            title: 'Oded Rabby',
            content:
                '<a href="https://odedrabby.com/">odedrabby.com</a><br><br>Landing page for Oded Rabby. since he is a musician, I created a custom music player to the page. written in Angular and hosted on Github Pages.',

            tech: ['Angular', 'Typescript', 'Github Pages'],
        },
        {
            title: 'shemzmani',
            content:
                "<a href=\"https://shemzmani.space/\">shemzmani.space</a><br><br>Landing page for Gal Cohen Paraira's new album 'shemzmani'. written in Angular and hosted on Github Pages.",

            tech: ['Angular', 'Typescript', 'Github Pages'],
        },
        {
            title: 'Milouban TLD',
            content:
                '<a href="https://www.milouban.com/">milouban.com</a><br><br>Milouban LTD is a company that trades with cotton linter pulp. this website serves them as a landing page and to showcase their products. written with Wordpress, and hosted on Github Pages.',

            tech: ['Wordpress', 'Github Pages'],
        },
    ],
}
