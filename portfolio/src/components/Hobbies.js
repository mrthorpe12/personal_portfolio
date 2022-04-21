import React from 'react';
import { Carousel } from 'react-bootstrap';

import alley from "../images/sevilla_alley.JPG";
import belltower from "../images/sevilla_belltower.JPG";
import buildings from "../images/sevilla_buildings.JPG";
import carriages from "../images/sevilla_carriages.JPG";
import fountain from "../images/sevilla_fountain.JPG";
import peacock from "../images/sevilla_peacock.JPG";
import plaza from "../images/sevilla_plaza.JPG";

const Hobbies = () => {
    return (
        <div>
            <h1>Hobbies</h1>
            <p><strong>"I don't have hobbies; hobbies cost money. Interests are quite free."</strong> - George Carlin</p>
            <h2>Travel</h2>
            <p>I've visited most of the contiguous U.S. and have been to Spain, France, Italy, and the UK. At some
                point in the near future, I'd like to travel to Russia, since I studied Russian as an undergrad!
            </p>
            <p>Favorite state: Montana. Reason: I enjoy the outdoors, and Montana has a lot of outdoors to offer.
                Highly recommend Glacier National Park if you're interested in hiking, fishing, camping, or winter
                sports!</p>
            <p>Favorite city: Sevilla, Spain. Reason: Fascinating culture and awesome people. Sevilla is a great
                place to
                experience Spanish culture firsthand, and the area's history is amazing.</p>
            <Carousel>
                {/* carousel with images of Sevilla */}
                <Carousel.Item>
                    <img className='img-responsive carousel' src={alley} alt="Whitewashed alley, Sevilla." />
                    <Carousel.Caption></Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className='img-responsive carousel' src={belltower} alt="Belltower at sunset, Sevilla." />
                    <Carousel.Caption></Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className='img-responsive carousel' src={buildings} alt="Andalusian architecture on city square, Sevilla." />
                    <Carousel.Caption></Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className='img-responsive carousel' src={carriages} alt="Carriages in city square, Sevilla." />
                    <Carousel.Caption></Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className='img-responsive carousel' src={fountain} alt="Fountain in city square, Sevilla." />
                    <Carousel.Caption></Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className='img-responsive carousel' src={peacock} alt="Peacock in city park, Sevilla." />
                    <Carousel.Caption></Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className='img-responsive carousel' src={plaza} alt="City plaza in evening, Sevilla." />
                    <Carousel.Caption></Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <h2>Music</h2>
            <p>Played the string bass throughout middle and high school. Was chosen to attend the Missouri
                All-State
                Orchestra twice (2015 and 2016).</p>
            <h2>Sports</h2>
            <p>Football: Diehard Packers fan (my family is originally from Wisconsin).</p>
            <p>Baseball: Enjoy watching the St. Louis Cardinals.</p>
            <p>Started practicing Brazilian jiu-jitsu this summer. Really enjoy it as a sport and would recommend
                it to anyone who's interested!</p>
        </div>
    )
}

export default Hobbies;