import React from 'react';

function About() {
  return (
    <section id="about">
      <h2>About Me</h2>
      <p>
        "As a dedicated learner, I've been immersing myself in the dynamic 
        world of web development. I've honed my skills in HTML and CSS, 
        building a strong foundation for creating visually appealing and 
        responsive web pages. To enhance my capabilities, I've delved into 
        React.js, a powerful JavaScript library for building user interfaces. 
        Additionally, I've explored the intricacies of networking, 
        gaining valuable insights into how data is transmitted and managed across 
        networks. With this comprehensive skill set, I'm eager to contribute 
        to innovative web projects and collaborate with like-minded individuals."
      </p>
      <div className="pics">
        <img src="html-tagst 1.png" alt="html-tagst" width="auto" height="200" />
        <img src="css 1.png" alt="css" width="auto" height="200" />
        <img src="javascript 1.png" alt="js" width="auto" height="200" />
      </div>
      <div className="pics2">
        <img src="image.png" alt="react" width="auto" height="200" />
        <img src="netw 1.png" alt="networking" width="auto" height="200" />
        <img src="networking_diagram 1.png" alt="networking-basic" width="auto" height="200" />
      </div>
    </section>
  );
}

export default About;