import React from 'react'

const Contact = () => {
  return (
    <div>Contact</div>
  )
}

export default Contact

export async function getServerSideProps() {
    await new Promise((resolve) => {
        setTimeout(resolve, 1000);
    });

    return {
        props: {},
    };
}