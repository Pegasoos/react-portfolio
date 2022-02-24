import React from 'react';
import Project from '../Project';

import techLogo from '../../assets/images/screenshot2.png';
import weatherLogo from '../../assets/images/todo_portfolio.gif';
import noteLogo from '../../assets/images/note_taker_portfolio.png';
import employeeLogo from '../../assets/images/employee_tracker_portfolio.png';
import quizLogo from '../../assets/images/portfolio_quiz.gif';

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
      <Project projectname = "Tech Blog" liveurl = "https://nameless-headland-84942.herokuapp.com/login" imgsrc = {techLogo} github = "https://github.com/Pegasoos/Tech-Blog" />
      <Project projectname = "Weather Board" liveurl = "https://pegasoos.github.io/Weather-Board/" imgsrc = "https://media.giphy.com/media/yD0KZFWntDAEy5kgDJ/giphy.gif" github = "https://github.com/Pegasoos/Weather-Board"/>
</div>
<div className="row">
      <Project projectname = "Workday Scheduler" liveurl = "https://pegasoos.github.io/Workday-Scheduler/" imgsrc = {weatherLogo} github = "https://github.com/Pegasoos/Workday-Scheduler"/>
      <Project projectname = "Note Taker" liveurl = "https://immense-wave-31175.herokuapp.com/" imgsrc = {noteLogo} github="https://github.com/Pegasoos/Note-Taker"/>
</div>
<div className="row">
      <Project projectname = "Employee Map" liveurl ="https://www.youtube.com/watch?v=JrETHbpnKZk" imgsrc = {employeeLogo} github = "https://github.com/Pegasoos/Employee-Map"/>
      <Project projectname = "Code Quiz" liveurl = "https://pegasoos.github.io/Code-Quiz/" imgsrc = {quizLogo} github = "https://github.com/Pegasoos/Code-Quiz"/>
</div>
</div>
)
}

export default Portfolio;