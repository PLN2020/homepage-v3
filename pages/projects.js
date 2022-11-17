import ProjectsDesktop from "../components/Projects/projects-desktop";
import ProjectsMobile from "../components/Projects/projects-mobile";

const Projects = () => {
    return (
        <>
            <ProjectsDesktop display={{ base: "none", lg: "grid" }} />
            <ProjectsMobile display={{ base: "", lg: "none"}} />
        </>
    )
}

export default Projects

export async function getServerSideProps() {
    await new Promise((resolve) => {
        setTimeout(resolve, 1000);
    });

    return {
        props: {},
    };
}