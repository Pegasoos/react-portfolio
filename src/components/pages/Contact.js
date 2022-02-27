import React from 'react';

function Contact(){
    return(

<div className ="container">   
<div class = "con-block">
  <article className="block rounded">
<div class = "row">   
  <h1>
    Contact
  </h1> 
<hr></hr>
</div>
  <form action="https://formsubmit.co/fb1081e4e60cc6ebed200a778ffeac99" method="POST">
  <p>
    Name
  </p>
    <input type="hidden" name="_subject" value="New Contact!"></input>

    <input type="text" placeholder= "Name" name = "name" className="formsize" required/>
  <p className="conpad">
    Email
  </p>
    <input type="email" placeholder= "Email" name = "email" className="formsize" required/>      
  <p className="conpad">
    Message
  </p>
    <textarea placeholder="Message" name = "message" className="formsize" required></textarea>
    <div class="conpad">
    <button className="submit">
      Submit
    </button>
    </div>
  </form>
  </article>
  </div>
</div>  

    )
}

export default Contact;