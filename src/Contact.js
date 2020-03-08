import React from 'react';
import './Contactme.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Contact()
{ return (
    <div className="contact">
    <div className="me">
        <h5 >Contact Me</h5>
        <p>Chase Dixon</p>
        <p>Email: schasedixon16@gmail.com</p>
         <p>Phone: 801-864-9875</p>
        <a href="https://www.linkedin.com/in/s-chase-dixon/" class="btn btn-outline-primary btn-md" role="button"  target="_blank" rel="noopener noreferrer">in</a>
        <a href="https://github.com/cdixon16-maker" class="btn btn-outline-light btn-md" role="button"  target="_blank" rel="noopener noreferrer">GitHub</a>
    </div>

    <div class="videoWrapper">
        <iframe width="600" height="400" src="https://www.youtube.com/embed/3sK3wJAxGfs" frameborder="0" allowfullscreen title="Motivational Video">
        </iframe>
    </div>

   </div>
    )
    
}



export default Contact;