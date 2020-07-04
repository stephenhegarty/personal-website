import React from 'react';

import Layout from '../components/Layout';

import Scroll from '../components/Scroll';

import pic1 from '../assets/images/pic01.jpg';
import pic2 from '../assets/images/vikiceland.jpg';
import pic3 from '../assets/images/waterfall.jpg';
import pic4 from '../assets/images/conference.jpg';
import config from '../../config';

var ReactRotatingText = require('react-rotating-text');

const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <h2>{config.heading}</h2>
        <p>
        <ReactRotatingText items={[' Java Developer', ' JS Developer',' Bedroom Musician', ' Bookworm' , ' Blogger', 'Optimist']} />
        </p>
        <ul className="actions special">
          <li>
            <Scroll type="id" element="one">
              {/* <a href="/#" className="button primary">
                Explore
              </a> */}
            </Scroll>
          </li>
        </ul>
      </div>
      <Scroll type="id" element="one">
        <a href="#one" className="more">
          Learn More
        </a>
      </Scroll>
    </section>

    <section id="one" className="wrapper style1 special">
      <div className="inner">
        <header className="major">
          <h2>
         About
          </h2>
          <p>
          Hey there, my name is Stephen and I'm a full time java developer at Rapid 7.
          <br />
            Currently based in Belfast, Northern Ireland. 
            <br />
            <br />
            I work on the InsightAppSec team and develop cool features using Java and AWS.
            <br />
            Outside of that, I'm an avid musician, reader and blogger.
            <br />
            I'm currently learning JavaScript, React Native, Python and Electrical Engineering using
            my trusty raspberry PI. 
          </p>
        </header>
          <div>
          <img src={pic4} className="profile-image"/>
        </div>  
      </div>
    </section>

    <section id="two" className="wrapper alt style2">
    <section className="spotlight">
        <div className="image">
          <img src={pic1} alt="" />
        </div>
        <div className="content">
          <h2>
            Programming
          </h2>
          <p>
            Coming Soon...
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={pic2} alt="" />
        </div>
        <div className="content">
          <h2>
            Travel
          </h2>
          <p>
            Coming Soon...
          </p>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={pic3} alt="" />
        </div>
        <div className="content">
          <h2>
           Life
          </h2>
          <p>
            Coming Soon...
          </p>
        </div>
      </section>
    </section>

    <section id="three" className="wrapper style3 special">
      <div className="inner">
        <header className="major">
          <h2>Projects</h2>
          {/* <p>
           List of github projects that I've worked on
          </p> */}
          <p>
            Coming soon...
          </p>
        </header>
        {/* <ul className="features">
          <li className="icon fa-paper-plane">
            <h3>Project 1</h3>
            <p>
              Coming soon...
            </p>
          </li>
          <li className="icon solid fa-laptop">
            <h3>Project 2</h3>
            <p>
              Coming soon...
            </p>
          </li>
          <li className="icon solid fa-code">
            <h3>Project 3</h3>
            <p>
              Coming soon...
            </p>
          </li>
          <li className="icon solid fa-headphones-alt">
            <h3>Project 4</h3>
            <p>
              Coming soon...
            </p>
          </li>
          <li className="icon fa-heart">
            <h3>Project 5</h3>
            <p>
              Coming soon...
            </p>
          </li>
          <li className="icon fa-flag">
            <h3>Project 6</h3>
            <p>
              Coming soon...
            </p>
          </li>
        </ul> */}
      </div>
    </section>

    {/* <section id="cta" className="wrapper style4">
      <div className="inner">
        <header>
          <h2>
            Subscribe to my newsletter.
          </h2>
          <p>
          Sign up to be notified when I publish new blogs          
          </p>
        </header>
        <ul className="actions stacked">
          <li>
            <a href="/#" className="button fit primary">
              Activate
            </a>
          </li>
          <li>
            <a href="/#" className="button fit">
              Learn More
            </a>
          </li>
        </ul>
      </div>
    </section> */}
  </Layout>
);

export default IndexPage;
