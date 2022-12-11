import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
      <LinkColumn>
      <LinkTitle>Call</LinkTitle>
      <LinkItem href="+573166620216">+57 316 6620216</LinkItem>
      </LinkColumn>


      <LinkColumn>
      <LinkTitle>Email</LinkTitle>
      <LinkItem href="mailto:edgarlopezacevedo@gmail.com">edgarlopezacevedo@gmail.com</LinkItem>
      </LinkColumn>

      </LinkList>
      <SocialIconsContainer>
      
      </SocialIconsContainer>

      <SocialIcons href="https://github.com">
        <AiFillGithub size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://linkedin.com">
        <AiFillLinkedin size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://instagram.com">
        <AiFillInstagram size="3rem"/>
      </SocialIcons>
      

    </FooterWrapper>
  );
};

export default Footer;
