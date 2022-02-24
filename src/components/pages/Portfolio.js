import React from 'react';
import Project from '../Project';

function Portfolio(){
return(
<div className="container">
  <section className="row">
    <div className="col-md-8 block rounded">
      <article className="portblock">
        <h1>Portfolio</h1>
        <hr></hr>
      </article>
    </div>
</section>
<div className="row">
      <Project />
      <Project />
</div>
<div className="row">
      <Project />
      <Project />
</div>
<div className="row">
      <Project />
      <Project />
</div>
</div>
)
}

export default Portfolio;