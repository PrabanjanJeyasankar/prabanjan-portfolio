import BookHub from '../assets/images/project-mockups/Book-Hub-Mockup.jpg'
import Arcexperio from '../assets/images/project-mockups/Arcexperio-Mockup.jpg'
import CareerCompass from '../assets/images/project-mockups/Career-Compass-Mockup.jpg'
import DribbbleClone from '../assets/images/project-mockups/Dribbble-Mockup.jpg'
import Rentify from '../assets/images/project-mockups/Rentify-Mockup.jpg'
import Revive from '../assets/images/project-mockups/Revive-Mockup.jpg'

const fetchProjects = () => {
    return [
        {
            title: 'BookHub',
            description: 'Full Stack Developer',
            thumbnail: BookHub,
        },
        {
            title: 'Rentify',
            description: 'Front End Developer',
            thumbnail: Rentify,
        },
        {
            title: 'Career Compass',
            description: 'UI/UX Designer',
            thumbnail: CareerCompass,
        },
        {
            title: 'Dribbble Clone',
            description: 'Front End Developer',
            thumbnail: DribbbleClone,
        },
        {
            title: 'Arcexperio',
            description: 'UI/UX Designer (Freelance)',
            thumbnail: Arcexperio,
        },

        {
            title: 'Revive',
            description: 'UI/UX Designer',
            thumbnail: Revive,
        },
    ]
}

export default fetchProjects
