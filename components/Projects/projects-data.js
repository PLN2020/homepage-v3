import { ExternalLinkIcon } from "@chakra-ui/icons";
import { FaCss3, FaGithub, FaHome, FaHtml5, FaJs, FaReact, FaYoutube } from "react-icons/fa";
import { SiChakraui, SiHeroku, SiNextdotjs, SiRubyonrails, SiVercel } from "react-icons/si";

export const ProjectsData = [
    {
        projectTitle: "Homepage v3",
        projectYear: "2022", 
        projectDesc: "homepage-v3-description", 
        projectStack: [
            {
                label: "Next JS",
                icon: <SiNextdotjs />,
            },
            {
                label: "Chakra UI",
                icon: <SiChakraui />,
            },
            {
                label: "React",
                icon: <FaReact />,
            },
            {
                label: "Vercel",
                icon: <SiVercel />,
            },
        ],
        firstLinkIcon: <FaGithub />,
        firstLink: "https://github.com/PLN2020/homepage-v3",
        firstLinkText: "homepage-v3-first-link-text",
        secondLinkIcon: <FaHome />,
        secondLink: "https://www.plnguyen.dev/",
        secondLinkText: "homepage-v3-second-link-text",
        img: "https://res.cloudinary.com/ditoikfqn/image/upload/v1667780360/NextJS-Portfolio/homepage-v3_ju7vrn.jpg",
    },
    {
        projectTitle: "Homepage v2",
        projectYear: "2022", 
        projectDesc: "homepage-v2-description", 
        projectStack: [
            {
                label: "Next JS",
                icon: <SiNextdotjs />,
            },
            {
                label: "Chakra UI",
                icon: <SiChakraui />,
            },
            {
                label: "React",
                icon: <FaReact />,
            },
            {
                label: "Vercel",
                icon: <SiVercel />,
            },
        ],
        firstLinkIcon: <FaGithub />,
        firstLink: "https://github.com/PLN2020/nextjs-chakraui-hp",
        firstLinkText: "homepage-v2-first-link-text",
        secondLinkIcon: <ExternalLinkIcon />,
        secondLink: "https://nextjs-chakraui-hp.vercel.app/",
        secondLinkText: "homepage-v2-second-link-text",
        img: "https://res.cloudinary.com/ditoikfqn/image/upload/v1667780799/NextJS-Portfolio/homepage-v2_ixoni4.png",
    },
    {
        projectTitle: "Braid",
        projectYear: "2021", 
        projectDesc: "braid-description", 
        projectStack: [
            {
                label: "Ruby on Rails",
                icon: <SiRubyonrails />,
            },
            {
                label: "Html5",
                icon: <FaHtml5 />,
            },
            {
                label: "CSS",
                icon: <FaCss3 />,
            },
            {
                label: "Javascript",
                icon: <FaJs />,
            },
            {
                label: "Heroku",
                icon: <SiHeroku />,
            }
        ],
        firstLinkIcon: <FaGithub />,
        firstLink: "https://github.com/AntoineBoucherCodes/Braid",
        firstLinkText: "braid-first-link-text",
        secondLinkIcon: <FaYoutube />,
        secondLink: "https://www.youtube.com/watch?v=7VBFMMoaGkA&t=1528s",
        secondLinkText: "braid-second-link-text",
        img: "https://res.cloudinary.com/ditoikfqn/image/upload/v1664611782/NextJS-Portfolio/braid_pn2hjz.jpg",
    },
]