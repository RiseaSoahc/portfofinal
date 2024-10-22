import React from 'react';

function Contact() {
  return (
    <section id="contact">
      <h2>Contact</h2>
        <div className="con-main">
            <div className="con2">
                <img src="contact.png" alt="html-tagst" width="auto" height="100" />
                    <hr />          
            </div>
            <div className="con">
                <p>Businness Email : &nbsp;&nbsp;
                    <a href="#email.com">
                        karlmedellemangahis@gmail.com
                    </a>
                </p>
                <p>Secondary : &nbsp;&nbsp;
                    <a href="#email.com">
                        riseasoahcv.iv@gmail.com
                    </a>
                </p>
            </div>
        </div>
    </section>
  );
}

export default Contact;