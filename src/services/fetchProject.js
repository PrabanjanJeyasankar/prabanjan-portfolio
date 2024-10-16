import BookHub from '../assets/images/project-mockups/Book-Hub-Mockup.png'
import Arcexperio from '../assets/images/project-mockups/Arcexperio-Mockup.png'
import CareerCompass from '../assets/images/project-mockups/Career-Compass-Mockup.png'
import DribbbleClone from '../assets/images/project-mockups/Dribbble-Mockup.png'
import Rentify from '../assets/images/project-mockups/Rentify-Mockup.png'
import Revive from '../assets/images/project-mockups/Revive-Mockup.png'

const fetchProjects = () => {
    return [
        {
            id: 1,
            title: 'BookHub',
            subtitle: 'Library management app',
            role: 'Full Stack Developer',
            description:
                'An application for managing and discovering books, allowing users to maintain personal libraries and search for books in various categories.',
            techStack: ['ReactJs', 'NodeJs', 'ExpressJS', 'MongoDB'],
            hostedLink: 'https://book-hub-ruddy.vercel.app/',
            thumbnail: BookHub,
        },
        {
            id: 2,
            title: 'Rentify',
            subtitle: 'House rental app',
            role: 'Front End Developer',
            description:
                'A platform for users to rent out properties and search for available rentals.',
            techStack: ['ReactJs', 'CSS'],
            hostedLink: 'https://rentify-prabanjan.vercel.app/',
            thumbnail: Rentify,
        },
        {
            id: 3,
            title: 'Career Compass',
            subtitle: 'Career path guidance app',
            role: 'UI/UX Designer',
            description:
                'A tool for job seekers to assess their skills and find suitable career paths, including job recommendations.',
            techStack: ['ReactJs', 'NodeJs', 'ExpressJS', 'MongoDB'],
            thumbnail: CareerCompass,
        },
        {
            id: 4,
            title: 'Dribbble Clone',
            subtitle: 'Cloned the original dribbble website',
            role: 'Front End Developer',
            description:
                'A clone of the Dribbble platform for designers to showcase their portfolios and connect with potential clients.',
            techStack: ['React', 'CSS'],
            hostedLink: 'https://dribbble-clone-prabanjan.vercel.app/',
            thumbnail: DribbbleClone,
        },
        {
            id: 5,
            title: 'Arcexperio',
            subtitle: 'Architectural design showcase with AR!',
            role: 'UI/UX Designer (Freelance)',
            description:
                'A web-based platform for architects to present their portfolios and engage with clients in a digital environment.',
            techStack: ['Figma', 'Photoshop'],
            hostedLink: 'http://www.youtube.com/watch?v=B8XiWZE0hmE',
            thumbnail: Arcexperio,
        },
        {
            id: 6,
            title: 'Revive',
            subtitle: 'E-waste management app',
            role: 'UI/UX Designer',
            description:
                'A health and wellness platform designed to help users track their fitness goals, mental well-being, and connect with wellness professionals.',
            techStack: ['Figma', 'Sketch', 'InVision'],
            thumbnail: Revive,
        },
    ]
}

export default fetchProjects

/* 
title
role - 'UI/UX Designer',
description - 
tech stack used -
hosted link - 

*/
