import React from 'react';

function Contact(){
    return(
<article className="block rounded">
  <h1>
    Contact
  </h1> 
<hr></hr>
<form action="https://formsubmit.co/fb1081e4e60cc6ebed200a778ffeac99" method="POST">
  <p>
    Name
  </p>
    <input type="hidden" name="_subject" value="New Contact!"></input>

    <input type="text" placeholder= "Name" name = "name" className="formsize" required/>
  <p class="conpad">
    Email
  </p>
    <input type="email" placeholder= "Email" name = "email" className="formsize" required/>      
  <p class="conpad">
    Message
  </p>
    <textarea placeholder="Message" name = "message" className="formsize" required></textarea>
    <div class="conpad">
    <button class="submit">
      Submit
    </button>
    </div>
</form>
    </article>
    )
}

export default Contact;