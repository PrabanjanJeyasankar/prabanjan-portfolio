// import BookHub from '../assets/images/project-mockups/Book-Hub-Mockup.png'
// import Arcexperio from '../assets/images/project-mockups/Arcexperio-Mockup.png'
// import CareerCompass from '../assets/images/project-mockups/Career-Compass-Mockup.png'
// import DribbbleClone from '../assets/images/project-mockups/Dribbble-Mockup.png'
// import Rentify from '../assets/images/project-mockups/Rentify-Mockup.png'
// import Revive from '../assets/images/project-mockups/Revive-Mockup.png'

import BookHub from '../assets/images/project-mockups/Book-Hub-Mockup.webp'
import Arcexperio from '../assets/images/project-mockups/Arcexperio-Mockup.webp'
import CareerCompass from '../assets/images/project-mockups/Career-Compass-Mockup.webp'
import DribbbleClone from '../assets/images/project-mockups/Dribbble-Mockup.webp'
import Rentify from '../assets/images/project-mockups/Rentify-Mockup.webp'
import Revive from '../assets/images/project-mockups/Revive-Mockup.webp'

const fetchProjects = () => {
    return [
        {
            id: 1,
            title: 'BookHub',
            subtitle: 'Library management app',
            role: 'Full Stack Developer',
            description:
                'Book Hub is an innovative library management application designed to streamline the process of managing book collections for both personal and community use. \n\n With its core functionality focused on basic CRUD (Create, Read, Update, Delete) operations, users can effortlessly add new books, view their existing collections, update book details, and remove books as needed.\n\nThe application is built using React and CSS, ensuring a modern and intuitive user interface that is both responsive and visually appealing, making it accessible on various devices, from desktops to mobile phones.\n\nLeveraging Axios for efficient API interactions, Book Hub provides dynamic data management, enabling real-time updates and seamless data fetching. This ensures that users always have access to the most current information about their books.\n\nAdditionally, the integration of React Router allows for smooth navigation throughout the application, enhancing the overall user experience.\n\nThe application employs state management tools and various libraries and Styled Components.',
            techStack: ['ReactJs', 'NodeJs', 'ExpressJS', 'MongoDB'],
            hostedLink: 'https://book-hub-prabanjan.vercel.app/',
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
