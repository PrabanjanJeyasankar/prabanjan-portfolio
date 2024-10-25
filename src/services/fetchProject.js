// import BookHub from '../assets/images/project-mockups/Book-Hub-Mockup.png'
// import Arcexperio from '../assets/images/project-mockups/Arcexperio-Mockup.png'
// import CareerCompass from '../assets/images/project-mockups/Career-Compass-Mockup.png'
// import DribbbleClone from '../assets/images/project-mockups/Dribbble-Mockup.png'
// import Rentify from '../assets/images/project-mockups/Rentify-Mockup.png'
// import Revive from '../assets/images/project-mockups/Revive-Mockup.png'

// import BookHub from '../assets/images/project-mockups/Book-Hub-Mockup.webp'
// import Arcexperio from '../assets/images/project-mockups/Arcexperio-Mockup.webp'
// import CareerCompass from '../assets/images/project-mockups/Career-Compass-Mockup.webp'
// import DribbbleClone from '../assets/images/project-mockups/Dribbble-Mockup.webp'
// import Rentify from '../assets/images/project-mockups/Rentify-Mockup.webp'
// import Revive from '../assets/images/project-mockups/Revive-Mockup.webp'

import BookHub from '../assets/images/project_mockup_test_1/Book-Hub-Mockup.webp'
import Arcexperio from '../assets/images/project_mockup_test_1/Arcexperio-Mockup.webp'
import CareerCompass from '../assets/images/project_mockup_test_1/Career-Compass-Mockup.webp'
import DribbbleClone from '../assets/images/project_mockup_test_1/Dribbble-Mockup.webp'
import Rentify from '../assets/images/project_mockup_test_1/Rentify-Mockup.webp'
import Revive from '../assets/images/project_mockup_test_1/Revive-Mockup.webp'

const fetchProjects = () => {
    return [
        {
            id: 1,
            title: 'BookHub',
            subtitle: 'Library management app',
            role: 'Full Stack Developer',
            description:
                'Book Hub is a simple library management app that helps you manage your book collections easily. You can add, browse, update, or remove books with just a few clicks. Designed with a modern look, it works seamlessly on any device. With real-time updates and easy navigation, Book Hub makes it effortless to keep track of your books, whether for personal use or sharing with the community!',
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
                'Rentify is an easy-to-use platform where you can effortlessly upload details about your property, whether it is an apartment, house, or unique space. Once listed, other users can browse your offerings and purchase their ideal place to stay. Whether you are looking to rent out a spare room or an entire property, Rentify connects you with potential renters, making the process seamless and efficient. Share your space with others while earning extra income, all within a vibrant community of renters and property owners.',
            techStack: ['ReactJs', 'CSS'],
            // hostedLink: 'https://rentify-prabanjan.vercel.app/',
            thumbnail: Rentify,
        },
        {
            id: 3,
            title: 'Career Compass',
            subtitle: 'Career path guidance app',
            role: 'UI/UX Designer',
            description:
                'A tool designed for job seekers to assess their skills and explore suitable career paths. It offers personalized job recommendations based on your skillset and interests, helping you find the right opportunities to advance your career.',
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
                'Arcexperio offers architects a space to showcase their projects through interactive AR previews, giving clients a fresh way to experience designs. It’s a platform that helps both architects and users explore and engage with architecture in an entirely new, immersive format. Whether you’re presenting your work or exploring designs, Arcexperio makes the process simple and engaging.',
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
                'Revive is a forward-thinking web application aimed at tackling the growing issue of e-waste management. It connects businesses, individuals, scrap dealers, and recycling plants within a sustainable supply chain. By doing so, it offers users monetary rewards in exchange for their e-waste. Revive streamlines the entire process of collecting, sorting, and distributing e-waste, making it easier to monitor and manage. Plus, it encourages responsible disposal practices, making it a win-win for both users and the environment.',
            techStack: ['Figma', 'Canva'],
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
