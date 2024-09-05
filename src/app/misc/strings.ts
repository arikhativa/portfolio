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
            title: 'Avoda+',
            content:
                'Avoda+ is a mobile app for the workers of sofi cooperative.\n\ni am working on it as a full stack developer.\n\nthe app is built with flutter and the backend is in node.js.\n\nthe app is still in development and will be released soon.',
            tech: ['Flutter', 'Node.js'],
        },
        {
            title: 'Provisioning Service',
            content:
                'The provisioning service is a service that provisions new environments for the ELK stack.\n\nthe service is written in Golang and uses the ELK stack to provision the new environments.\n\nthe service is used by the developers to create new environments for testing and development.',
            tech: ['Golang', 'ELK Stack'],
        },
        {
            title: 'Web Development',
            content:
                'I have been making websites for a while now.\n\ni have made websites for small businesses, artists, and more.\n\ni use technologies like HTML, CSS, JavaScript, and React to build the websites.\n\ncheck them out!',
            tech: ['Golang', 'ELK Stack'],
        },
    ],
}
