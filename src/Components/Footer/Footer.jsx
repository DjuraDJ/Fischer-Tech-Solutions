import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebook, faLinkedinIn} from "@fortawesome/free-brands-svg-icons";



function ContactInfo () {
    return (<div className="email">
             
              <spam className="bcolor"></spam>
    </div>);
}
function SocialMedia() {
    return (<div>
        <a href="http://www.facebook.com">
               <FontAwesomeIcon className="facebook" icon={faFacebook} size="3x"/>
        </a>
        <a href="http://www.Linkedin.com">
               <FontAwesomeIcon className="linkedin" icon={faLinkedinIn} size="3x"/>
        </a>
         
    </div>  );
}





function Footer() {
    return (<div>
        <ContactInfo/>
        <SocialMedia/>
    </div>);
}

export default Footer;
