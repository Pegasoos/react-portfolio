import React from 'react';

function Home(){
    return(
        <div class="container">
        <article class="block rounded">
        <h1>
          About Me
        </h1>
        <hr></hr>
        <div class="row">
          <div class="col-md-4">
          <img src="./assets/images/profile.jpg" alt = "A Smiling Man with a Beard in a Black Shirt." class="img-fluid"/>
          </div>
          <div class="col-md-8">
            <p>
                My name is Nathan William Anthony. I am a web development upstart hoping to break into this booming industry.
                I hope to use the Linguistics skills I learned at Florida Atlantic University to parse the many complextities of coding languages and contruct web sites and programs that help people!
            </p>
            <p>
               My Resume: <a href="assets/Anthony, Nathan-Web Developer Resume.pdf"><i class="fas fa-file-pdf"></i></a>.
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
          </div></div></article>
          </div>
    )
}

export default Home;