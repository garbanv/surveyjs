import React from 'react';
import dynamic from "next/dynamic"
//import CreatorComponent from '../components/creator'

const CreatorComponent = dynamic(() => import("../components/creator"), {
    ssr: false,
  })

const Creator = () => {
    return (
        <div>
            <h3>Creator</h3>
      <CreatorComponent />
        </div>
    );
}

export default Creator;
