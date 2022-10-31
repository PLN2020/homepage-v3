import React from 'react'

const Photography = () => {
  return (
    <div>Photography</div>
  )
}

export default Photography

export async function getServerSideProps() {
    await new Promise((resolve) => {
        setTimeout(resolve, 1000);
    });

    return {
        props: {},
    };
}