import React from 'react';
import headshot from "../images/headshot.jpg";

function Home() {
    return (
        <div>
            <h1>Homepage</h1>
            <p>Hey! Welcome to my personal page. My name is Max and I'm a first-year student at the <a
                href="http://si.umich.edu">University of Michigan School of Information (UMSI).</a> I've always been
                fascinated by
                data science and would describe myself as eager to learn. Click the links at the top of the page to see my
                education, work experience, and personal hobbies.</p>
            <p>            <strong>Where I'm from:</strong> Columbia, Missouri
            </p>
            <p>            <strong>What I listen to:</strong> Rap, classic rock, jazz
            </p>
            <p>            <strong>What my favorite food is:</strong> Pho ga (Vietnamese chicken soup)
            </p>
            <img className='img-responsive' src={headshot} alt="Personal headshot"></img>
        </div>
    )
}

export default Home;