import React from 'react';

function Project(props){
    return(
<div className="col-sm-6 col-md-12 col-lg-6">
        <h2>{props.projectname}</h2>
        <a href={props.liveurl}>
        <figure className="figure">
          <img src={props.imgsrc} className="figure-img img-fluid rounded border border-dark portfolio-image" alt="..."/>
        </figure>
        </a>
        <p>
          <a href={props.github} className = "git-link"><i className="fab fa-github"></i> Github Repository</a>
        </p>
      </div>
      )
};
export default Project