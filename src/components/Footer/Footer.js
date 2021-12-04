import React from 'react';
import { AiFillFacebook, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
    return (
        <FooterWrapper>
            <LinkList>
                <LinkColumn>
                    <LinkTitle>Email</LinkTitle>
                    <LinkItem href="mailto:support@amzx.io">
                        support@amzx.io
                    </LinkItem>
                </LinkColumn>
            </LinkList>
            <SocialIconsContainer>
                <CompanyContainer>
                    <Slogan>AMZX © All Rights Reserved</Slogan>
                </CompanyContainer>
                <SocialContainer>
                    <SocialIcons href="https://google.com">
                        <AiFillFacebook size="3rem" />
                    </SocialIcons>
                    <SocialIcons href="https://google.com">
                        <AiFillInstagram size="3rem" />
                    </SocialIcons>
                    <SocialIcons href="https://google.com">
                        <AiFillLinkedin size="3rem" />
                    </SocialIcons>
                </SocialContainer>
            </SocialIconsContainer>
        </FooterWrapper>
    );
};

export default Footer;