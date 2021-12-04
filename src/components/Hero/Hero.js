import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
    <Section row nopadding>
        <LeftSection>
            <SectionTitle main center>
                Selling on Amazon<br />
                Made Smarter<br />   and Faster
            </SectionTitle>
            <SectionText>
                One click away from becoming bestseller
            </SectionText>
            <a href="/register"><Button>Free trial</Button></a>
        </LeftSection>
    </Section>
);

export default Hero;