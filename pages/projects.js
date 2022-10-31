import React from 'react'

const Projects = () => {
  return (
    <div>Projects</div>
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