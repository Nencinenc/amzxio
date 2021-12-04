import React from 'react';
import {
    BlogCard,
    CardInfo,
    GridContainer,
    HeaderThree,
    Hr,
    TitleContent,
    Subtext,
} from './ProjectsStyles';
import {Section, SectionDivider, SectionTitle} from '../../styles/GlobalComponents';
import {projects} from '../../constants/constants';
import ScrollAnimation from 'react-animate-on-scroll';
import {FaArrowDown} from 'react-icons/fa';

class Projects extends React.Component {
    constructor() {
        super();
        this.state = {};
        this.toggleOpen = this.toggleOpen.bind(this);
    }

    toggleOpen() {
        this.setState({open: !this.state.open});
    }

    render() {
        return (
            <Section nopadding id="projects">
                <ScrollAnimation animateIn="bounceIn">
                    <SectionTitle main>What We Do</SectionTitle>
                    <Subtext>
                    </Subtext>
                </ScrollAnimation>

                <GridContainer>
                    {projects.map(({id, image, title, description, tags, source, visit}) => (
                        <BlogCard key={id}>
                            <TitleContent>
                                <div style={{paddingTop: 25, paddingBottom: 10,}}>
                                    <FaArrowDown size="1.5em"/>
                                    <HeaderThree title onClick={this.toggleOpen}>{title} </HeaderThree>
                                </div>
                            </TitleContent>
                            <CardInfo open={this.state.open}>
                                <Hr/>
                                {description}
                            </CardInfo>
                        </BlogCard>
                    ))}
                </GridContainer>
            </Section>
        );
    }
}

export default Projects;