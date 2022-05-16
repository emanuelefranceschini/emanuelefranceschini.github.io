import personalWebsite from '../assets/images/work/personalWebsiteMockupMin.webp'
import businessWebsite from '../assets/images/work/businessWebsiteMockupMin.webp'
import sporthub from '../assets/images/work/sporthubMockupMin.webp'
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
      title: 'Gematria Technologies',
      role: 'Frontend Web Developer - Internship',
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
          url: 'https://aimodels.gematria.tech'
        },
        {
          projectTitle: 'Keywords Dashboard',
          image: keywords,
          url: 'https://aimodels.gematria.tech'
        }
      ]
    }
  ],
  personalProjects: [
    {
      title: 'Freelance Personal Website',
      img: personalWebsite,
      text: [
        "A website showcasing a client's digital marketing consultation services and articles.",
        <br key='br0' />,
        <br key='br1' />,
        'Built with: React.js-CSS.'
      ],
      links: [
        {
          name: 'Website',
          url: 'https://www.emanueledaquino.net/',
          color: 'neon'
        }
      ]
    },
    {
      title: 'Freelance Business Website',
      img: businessWebsite,
      text: [
        "A restaurant's website where people can find its menu, services and directions..",
        <br key='br2' />,
        <br key='br3' />,
        'Built with: React.js-Material-UI.'
      ],
      links: [
        {
          name: 'Website',
          url: 'https://pizzeriadapagni.netlify.app/',
          color: 'neon'
        }
      ]
    },
    {
      title: 'SportHub',
      img: sporthub,
      text: [
        'Search & save sport suggestions in your area.',
        <br key='br4' />,
        <br key='br5' />,
        'Built with: React.js-CSS-Node.js-Express.'
      ],
      links: [
        {
          name: 'Website',
          url: 'https://emanuelefranceschini.github.io/sporthub/',
          color: 'neon'
        },
        {
          name: 'Code',
          url: 'https://github.com/emanuelefranceschini/sporthub',
          color: 'secondary'
        }
      ]
    }
  ]
}
