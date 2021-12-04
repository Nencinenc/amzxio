import Link from 'next/link';
import React from 'react';
import {FaUserLock} from 'react-icons/fa';
import {AiFillFacebook, AiFillInstagram, AiFillLinkedin} from 'react-icons/ai';
import {DiCssdeck} from 'react-icons/di';

import {Container, Div1, Div2, Div3, NavLink, SocialIcons, Span} from './HeaderStyles';

const Header = () => (
    <Container>
        <Div1>
            <Link href="/">
                <a style={{display: "flex", alignItems: "center", color: "#660708", marginBottom: 5}}>
                    <img src={"/images/logo.png"} style={{maxHeight: 40}}/>
                </a>
            </Link>
        </Div1>
        <Div2>
            <li>
                <Link href="/pricing">
                    <NavLink>Pricing</NavLink>
                </Link>
            </li>
            <li>
                <Link href="/blog">
                    <NavLink>Blog</NavLink>
                </Link>
            </li>
            <li>
                <Link href="/support">
                    <NavLink>Support</NavLink>
                </Link>
            </li>
        </Div2>
        <Div3>
            <SocialIcons href="/login">
                <FaUserLock size="3rem" color=""/>
            </SocialIcons>
            <SocialIcons href="#">
                <AiFillFacebook size="3rem"/>
            </SocialIcons>
            <SocialIcons href="#">
                <AiFillInstagram size="3rem"/>
            </SocialIcons>
            <SocialIcons href="#">
                <AiFillLinkedin size="3rem"/>
            </SocialIcons>
        </Div3>
    </Container>
);

export default Header;
