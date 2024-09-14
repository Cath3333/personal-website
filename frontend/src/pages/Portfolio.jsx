import React, { useState } from 'react';
import portfolioArray from '../content/portoflio.json';
import ProjectComponent from '../components/ProjectComponent';


function Portfolio() {
    return(
        <div class="flex justify-center">
            {
                portfolioArray.map((portfolio, index) => {
                    return (
                        <ProjectComponent project={portfolio}/>
                    )
                })
            }
        </div>
    )
}

export default Portfolio;