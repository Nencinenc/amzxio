import React from 'react';
import { Layout } from '../layout/Layout';
import KeywordApp from '../components/KeywordApp/KeywordApp';
import {Section, SectionDivider, SectionTitle} from '../styles/GlobalComponents';

const Keyword = () => {
    return (
        <Layout>
            <Section nopadding>
                <SectionTitle main>Keyword</SectionTitle>
                    <KeywordApp/>
            </Section>
        </Layout>
    );
};

export default Keyword;
