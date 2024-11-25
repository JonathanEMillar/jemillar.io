export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    title: 'Johnny Millar',
    subtitle: 'Clinician-Scientist | Chief of Staff, Learning Model of Life',
    description: 'Personal website of Johnny Millar',
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Projects',
            href: '/projects'
        },
        {
            text: 'Publications',
            href: '/publications'
        },
        {
            text: 'CV',
            href: '/cv'
        }
    ],
    footerNavLinks: [
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        },
        {
            text: 'Download theme',
            href: 'https://github.com/JustGoodUI/dante-astro-theme'
        }
    ],
    socialLinks: [
        {
            text: 'LinkedIn',
            href: 'https://www.linkedin.com/in/jonathan-millar-274960318/'
        },
        {
            text: 'X/Twitter',
            href: 'https://x.com/jemillarni'
        }
    ],
    hero: {
        title: '',
        text: "I'm **Johnny Millar**, a clinician-scientist working at the intersection of artificial intelligence and biology. Currently, I serve as Chief of Staff at the <a href='https://lml.ac.uk'>Learning Model of Life</a>, The University of Edinburgh. In addition, I am a Senior Research and <a href='https://https://gail.ed.ac.uk/'>Generative AI Lab</a> Fellow. Alongside my research work, I'm privileged to care for patients as an Honorary Consultant in Intensive Care Medicine at Glasgow's Queen Elizabeth University Hospital. Feel free to explore some of my endeavors at <a href='https://github.com/JustGoodUI/dante-astro-theme'>GitHub</a> or follow me on <a href='https://www.linkedin.com/in/jonathan-millar-274960318/'>LinkedIn</a>.",
        image: {
            src: '/hero.png',
            alt: 'Portrait image of Johnny Millar'
        },
        actions: [
            {
                text: 'Get in Touch',
                href: '/contact'
            }
        ]
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
