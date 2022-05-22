import React from 'react';
import profileImg from "../../assets/images/profile.jpg";

function Home(){
    return(
        <div className="container">
        <article className="block rounded">
        <h1>
          About Me
        </h1>
        <hr></hr>
        <div className="row">
          <div className="col-md-4">
          <img src={profileImg} alt = "A Smiling Man with a Beard in a Black Shirt." className="img-fluid"/>
          </div>
          <div className="col-md-8">
            <p>
                My name is Nathan William Anthony. I am a web development upstart hoping to break into this booming industry.
                I hope to use the Linguistics skills I learned at Florida Atlantic University to parse the many complextities of coding languages and contruct web sites and programs that help people!
            </p>
            <p>
              Though I am just starting out, I do have several projects up on my <a href="https://github.com/Pegasoos">Github</a>. 
            </p>
            <p>
              You can see more of my background at my <a href="https://www.linkedin.com/in/nathan-anthony-1b37a4166">LinkedIn</a>.
            </p>
            <p>
              If you like what you see, you can reach me at definitelyisntme@gmail.com or by phone at 863-212-4962.
            </p>
          </div>
          </div>
          </article>
          </div>
    )
}

export default Home;