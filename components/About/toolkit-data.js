import { DiRuby } from "react-icons/di"
import { FaBootstrap, FaConfluence, FaCss3, FaFigma, FaGithub, FaHtml5, FaJira, FaJs, FaReact, FaSlack, FaTrello } from "react-icons/fa"
import { SiChakraui, SiFirebase, SiHeroku, SiMiro, SiNextdotjs, SiPostgresql, SiRubyonrails, SiYarn } from "react-icons/si"
import { Icon } from '@chakra-ui/react'

export const FrontEndData = [
    {
        name: "React",
        icon: <Icon as={FaReact} />,
        level: "65"
    },
    {
        name: "Next.JS",
        icon: <Icon as={SiNextdotjs} />,
        level: "60"
    },
    {
        name: "Html5",
        icon: <Icon as={FaHtml5} />,
        level: "75"
    },
    {
        name: "CSS",
        icon: <Icon as={FaCss3} />,
        level: "75"
    },
    {
        name: "Javascript",
        icon: <Icon as={FaJs} />,
        level: "60"
    },
    {
        name: "Bootstrap",
        icon: <Icon as={FaBootstrap} />,
        level: "65"
    },
    {
        name: "Chakra UI",
        icon: <Icon as={SiChakraui} />,
        level: "75"
    }
]

export const BackEndData = [
    {
        name: "Ruby",
        icon: <Icon as={DiRuby} />,
        level: "70"
    },
    {
        name: "Rails",
        icon: <Icon as={SiRubyonrails} />,
        level: "70"
    },
    {
        name: "Firebase",
        icon: <Icon as={SiFirebase} />,
        level: "40"
    },
    {
        name: "Heroku",
        icon: <Icon as={SiHeroku} />,
        level: "50"
    },
    {
        name: "PostgreSQL",
        icon: <Icon as={SiPostgresql} />,
        level: "50"
    },
    {
        name: "Yarn",
        icon: <Icon as={SiYarn} />,
        level: "40"
    }
]

export const WorkflowData = [
    {
        name: "JIRA",
        icon: <Icon as={FaJira} />,
        level: "80"
    },
    {
        name: "Confluence",
        icon: <Icon as={FaConfluence} />,
        level: "85"
    },
    {
        name: "Trello",
        icon: <Icon as={FaTrello} />,
        level: "65"
    },
    {
        name: "Miro",
        icon: <Icon as={SiMiro} />,
        level: "70"
    },
    {
        name: "Figma",
        icon: <Icon as={FaFigma} />,
        level: "40"
    },
    {
        name: "GitHub",
        icon: <Icon as={FaGithub} />,
        level: "75"
    },
    {
        name: "Slack",
        icon: <Icon as={FaSlack} />,
        level: "80"
    },
]