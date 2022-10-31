import React from 'react'

const About = () => {
  return (
    <div>About</div>
  )
}

export default About

export async function getServerSideProps() {
    await new Promise((resolve) => {
        setTimeout(resolve, 1000);
    });

    return {
        props: {},
    };
}