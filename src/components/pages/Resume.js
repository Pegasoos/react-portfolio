import React from 'react';
import resume from '../../assets/Web Developer Resume-converted.pdf';

function Resume(){
    return(
        <div className = 'container'>
            <article className = 'block rounded'>
            <h1><a href = {resume}> Resume <i className="fas fa-file-pdf"></i></a></h1>
            </article>
        </div>
    )
}
export default Resume;