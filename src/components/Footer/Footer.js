import React from 'react';
import { Button } from '../Button/Button';
import { Link } from 'react-router-dom';
import { FooterContainer, FooterInput, FooterLinks, FooterSubscription, FooterSubscriptionHeading, SocialIcons, SocialLogo, SocialMediaWrap, WebsiteRights } from './Footer.styled';

function Footer() {
  return (
    <FooterContainer>
      <FooterSubscription>
        <FooterSubscriptionHeading>
          SIGN UP FOR EXCLUSIVE DEALS & OFFERS
        </FooterSubscriptionHeading>
        <div>
          <FooterInput
            name='email'
            type='email'
            placeholder='Your Email'
          />
          <Button buttonStyle='btn--outline'>Subscribe</Button>
        </div>
      </FooterSubscription>
      <FooterLinks>
        <Link to='/about-us' style={{
          color: "#fff",
          textDecoration: "none",
          fontSize: "22px"
        }}>About Us</Link>
      </FooterLinks>
      <hr style={{ width: "80%", marginTop: "20px" }} />
      <SocialMediaWrap>
        <SocialLogo>
          <Link to='/' style={{ display: "flex", alignItems: "center", textDecoration: "none", color:"white" }}>
            <h4>ROD</h4>
            <i className="fas fa-fish"></i>
          </Link>
        </SocialLogo>
        <WebsiteRights>ROD © 2020</WebsiteRights>
        <SocialIcons>
          <Link
            style={{ color:"white", fontSize: "24px" }}
            to='/'
            target='_blank'
            aria-label='Facebook'
          >
            <i className='fab fa-facebook-f' />
          </Link>
          <Link
            style={{ color:"white", fontSize: "24px" }}
            to='/'
            target='_blank'
            aria-label='Instagram'
          >
            <i className='fab fa-instagram' />
          </Link>
          <Link
            style={{ color:"white", fontSize: "24px" }}
            to='/'
            target='_blank'
            aria-label='Youtube'
          >
            <i className='fab fa-youtube' />
          </Link>
          <Link
            style={{ color:"white", fontSize: "24px" }}
            to='/'
            target='_blank'
            aria-label='Twitter'
          >
            <i className='fab fa-twitter' />
          </Link>
          <Link
            style={{ color:"white", fontSize: "24px" }}
            to='/'
            target='_blank'
            aria-label='LinkedIn'
          >
            <i className='fab fa-linkedin' />
          </Link>
        </SocialIcons>
      </SocialMediaWrap>
    </FooterContainer>
  );
}

export default Footer;