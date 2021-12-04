import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Vision from '../components/Vision/Vision';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import {Layout} from '../layout/Layout';
import {Section, SectionDivider} from '../styles/GlobalComponents';

const Home = () => {
    return (
        <Layout>
            <Section grid>
                <Hero/>
                <BgAnimation/>
            </Section>
            <SectionDivider/>
            <Vision />
            <SectionDivider/>
            <Projects/>
        </Layout>
    );
};

export default Home;
