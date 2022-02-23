import React from 'react';

function Contact(){
    return(
<article className="block rounded">
  <h1>
    Contact
  </h1> 
<hr></hr>
  <p>
    Name
  </p>
    <input type="text" placeholder="Name" className="formsize" />
  <p class="conpad">
    Email
  </p>
    <input type="text" placeholder="Email" className="formsize" />      
  <p class="conpad">
    Message
  </p>
    <textarea placeholder="Message" className="formsize"></textarea>
    <div class="conpad">
    <button class="submit">
      Submit
    </button>
    </div>
    </article>
    )
}

export default Contact;