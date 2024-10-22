import React from 'react';

function Skills() {
  return (
    <section id="skills">
      <h2>Skills</h2>
        <ul>
            <div className="left">
                <li>Basic HTML and CSS</li>
                <img src="image 1.png" alt="html-tagst" width="auto" height="200" />
            </div>
                <hr style={{ border: '.1px solid' }} />
            <div className="center">
                <li>React js | Front-End Development</li>
                <img src="image 2.png" alt="html-tagst" width="auto" height="200" />
            </div>
                <hr style={{ border: '.1px solid' }} />
            <div className="right">
                <li>Basic Networking</li>
                <img src="image 3.png" alt="html-tagst" width="auto" height="200" />
            </div>
        </ul>
    </section>
  );
}

export default Skills;