import React from 'react';
import Button from 'react-bootstrap/Button';
import './Contactme.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function contactme()
{ return (
    <div className="contact">
    <div className="me">
   <h5 >Contact Me</h5>
   <p>Chase Dixon</p>
   <p>Email: schasedixon16@gmail.com</p>
   <p>Phone: 801-864-9875</p>
   <a href="https://www.linkedin.com/in/s-chase-dixon/" class="btn btn-outline-primary btn-md" role="button"  target="_blank">in</a>
   <a href="https://github.com/cdixon16-maker" class="btn btn-outline-light btn-md" role="button"  target="_blank">GitHub</a>
   </div>

   <div class="youtube embed">
   <iframe width="800" height="450" src="https://www.youtube.com/embed/3sK3wJAxGfs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>

   </div>
    )
    
}



export default contactme;