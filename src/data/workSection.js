import grippedWebsite from '../assets/images/work/grippedWebsite.webp'
import grippedStories from '../assets/images/work/grippedWebDevSuccessStoriesMockup.webp'
import grippedResults from '../assets/images/work/grippedResults.webp'
import gematria from '../assets/images/work/gematriaWebsiteMockupMin.webp'
import aimodels from '../assets/images/work/gematriaAimodelsMockupMin.webp'
import comentions from '../assets/images/work/gematriaComentionsMockupMin.webp'
import keywords from '../assets/images/work/gematriaKeywordsMockupMin.webp'
import CableIcon from '@mui/icons-material/Cable'
import ConstructionIcon from '@mui/icons-material/Construction'
import DesignServicesIcon from '@mui/icons-material/DesignServices'
import EqualizerIcon from '@mui/icons-material/Equalizer'

export const work = {
  workExperiences: [
    {
      title: 'Gripped',
      role: 'Frontend Web Developer',
      anchorLink: 'gripped',
      list: [
        {
          icon: <ConstructionIcon color='secondary' />,
          text: 'Built, maintained and launched several different websites and webpages to the highest possible standard.'
        },
        {
          icon: <DesignServicesIcon color='secondary' />,
          text: 'Leveraged creativity around new projects in order to come up with new solutions or improve existing ones.'
        },
        {
          icon: <CableIcon color='secondary' />,
          text: 'Maintained a strong focus on staying up-to-date with the latest industry trends and standards.'
        },
        {
          icon: <EqualizerIcon color='secondary' />,
          text: 'Consistently applied a data-driven approach to tackle problems and find effective solutions.'
        }
      ],
      projects: [
        {
          projectTitle: 'Gripped Website',
          image: grippedWebsite,
          url: 'https://gripped.io/'
        },
        {
          projectTitle: 'Gripped Web Dev Success Stories',
          projectDescr: `Here's a page (I built it! 😁) showcasing some of Gripped Web Dev Success Stories that I was able to contribute to!`,
          image: grippedStories,
          url: 'https://gripped.io/b2b-website-design-agency/',
        },
        {
          projectTitle: 'Gripped Results',
          projectDescr: `Here are more success stories, some of which I was involved in!`,
          image: grippedResults,
          url: 'https://gripped.io/results/',
        }
      ]
    },
    {
      title: 'Gematria Technologies',
      role: 'Frontend Web Developer - Internship',
      anchorLink: 'gematria-technologies',
      list: [
        {
          icon: <ConstructionIcon color='secondary' />,
          text: 'Migrated the website (HTML-CSS to Gatsby) improving maintainability, performance and responsiveness.'
        },
        {
          icon: <DesignServicesIcon color='secondary' />,
          text: 'Implemented a modern design system (Material-UI), improving code reusability and visual consistency.'
        },
        {
          icon: <CableIcon color='secondary' />,
          text: 'Integrated a state management system (Redux), for improved code readability and organization.'
        },
        {
          icon: <EqualizerIcon color='secondary' />,
          text: 'Fully designed and developed several data analysis dashboards with multiple filters, using React and modern charting libraries.'
        }
      ],
      projects: [
        {
          projectTitle: 'Gematria Website',
          image: gematria,
          url: 'https://gematria.tech'
        },
        {
          projectTitle: 'AI Models Dashboard',
          image: aimodels,
          url: 'https://aimodels.gematria.tech'
        },
        {
          projectTitle: 'Co-mentions Dashboard',
          image: comentions,
          url: 'https://comentions.gematria.tech'
        },
        {
          projectTitle: 'Keywords Dashboard',
          image: keywords,
          url: 'https://keywords.gematria.tech'
        }
      ]
    }
  ]
}
