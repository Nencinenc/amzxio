import React from 'react';

import {Section, SectionText, SectionTitle} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import {LeftSection, VisionImg} from './VisionStyles';
import './VisionStyles';

const Vision = (props) => (
    <>
        <Section row nopadding>
            <LeftSection>
                <VisionImg src={"images/vision_black.png"}  onMouseOver={e => (e.currentTarget.src = "images/vision_normal.png")}
                           onMouseOut={e => (e.currentTarget.src = "images/vision_black.png")} alt="" />
            </LeftSection>
            <Section>
                <SectionTitle>Our Vision</SectionTitle>
                <SectionText style={{fontSize: 21}}>
                    Nowadays selling on amazon is a combination of complicated optimization, research, various advertising campaigns and strategies, which can be hard to maintain without help. Our team strives to make the life of an Amazon seller easier.
                    With the constant creation and optimization of our set of features and our open form for proposals we are constantly getting closer to our main destination - ranking you to the top. </SectionText>
            </Section>
        </Section>
    </>
);

export default Vision;