import React from 'react';
import './AboutMe.css';
function AboutMeTab (props)
{
    return (
        <div className="about">
     
        <div className="aboutme">
            <h3>About Me</h3>
            <p>Hi my name is Chase Dixon. I am from Draper, UT. I have a lot of passion about Web development but I haven't always been that way. Growing up I always told myself I was going to be a Dr. I told myself through high school and starting college at BYU-Idaho. But after taking some classes and learning about it I realized it wasn't for me. I then went on to graduate at BYU-Idaho with a degree in Business Management with an emphasis in Finance. I decided that would be a good fit for me because I had talked to people about the degree and I figured it would be a useful degree to have. I then realized there wasn't a high demand because there were a lot of people with the same idea.  I then went on pluralsight and different websites to learn more about web development because there were people in my life that new about web development and they all said that I would be good in Web Develpment. I started learning about it and I liked it but I wanted more of an in person learning experience. So I attended a bootcamp at Helio training and while learning at Helio training I have learned that I really do like Web Development and have grown to have a desire to become a greate Web Developer.</p> 
            <p>While attending BYU-Idaho I was working at Avantguard, a third party alarm monitoring call center, when I met my wife who was also working there. We graduated together and have now been married for 2.5 years. My wife is currently a 3rd grade teacher at Brookhaven Elementary school in Eagle Mountain, UT. She loves teaching kids and helping them progress in their education and in their life. We have on daughter who is less than a year old and I am currently staying home with my her while I am attending the bootcamp. It has been a great opportunity to stay at home with my daughter and take care of her.</p>
        </div>
        <div>
            <h3>Hobbies</h3>
            <ol className = "hobbies">
                <li className="piano">I play the piano</li>
                <li className="hiking">I enjoy going on hikes</li>
                <li className="watching">I enjoy watching movies.</li>
                <li className="excercise"> I enjoying working out</li>
            </ol>
        </div>
        <div>
            
        </div>
        </div>
    )
}


export default AboutMeTab;