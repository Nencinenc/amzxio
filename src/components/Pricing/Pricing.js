import React from 'react';
import {pricing} from '../../constants/constants';
import {SectionDivider} from '../../styles/GlobalComponents';

const Pricing = () => {
    return (
        <div className="maincontainer">
            <section>
                <div className="container py-5">
                    <header className="text-center mb-5 text-white">
                        <div className="row">
                            <div className="col-lg-8 mx-auto">
                                <h1>Features Overview</h1>
                                <p>Information about our basic functionalities can be found in the video below. For more detailed descriptions of individual features, click on the corresponding icons below.</p>
                            </div>
                        </div>
                    </header>
                </div>
            </section>

            <SectionDivider/>

            <section>
                <div className="container py-5">
                    <header className="text-center mb-5 text-white">
                        <div className="row">
                            <div className="col-lg-8 mx-auto">
                                <h1>Transparent pricing models</h1>
                                <p>Whether you are a seller, vendor or agency, our pricing models are tailored to your
                                    individual requirements as an Amazon dealer.</p>
                            </div>
                        </div>
                    </header>

                    <div className="row text-center align-items-end">

                        {pricing.map(({
                                          id,
                                          title,
                                          price,
                                          time,
                                          feature1,
                                          feature2,
                                          feature3,
                                          feature4,
                                          feature5,
                                          feature6,
                                          feature7,
                                          button
                                      }) => (
                            <div className="col-lg-4 mb-5 mb-lg-0" key={id}>
                                <div className="bg-white p-5 rounded-lg shadow">
                                    <h1 className="h6 text-uppercase font-weight-bold mb-4">{title}</h1>
                                    <h2 className="h1 font-weight-bold">{price}<span
                                        className="text-small font-weight-normal ml-2">{time}</span></h2>
                                    <div className="custom-separator my-4 mx-auto bg-primary"/>
                                    <ul className="list-unstyled my-5 text-small text-left">
                                        <li className="mb-3">
                                            <i className="fa fa-check mr-2 text-primary"/> {feature1}
                                        </li>
                                        <li className="mb-3">
                                            <i className="fa fa-check mr-2 text-primary"/> {feature2}
                                        </li>
                                        <li className="mb-3">
                                            <i className="fa fa-check mr-2 text-primary"/> {feature3}
                                        </li>
                                        <li className="mb-3">
                                            <i className="fa fa-check mr-2 text-primary"/> {feature4}
                                        </li>
                                        <li className="mb-3 text-muted">
                                            <i className="fa fa-times mr-2"/>
                                            <del> {feature5}</del>
                                        </li>
                                        <li className="mb-3 text-muted">
                                            <i className="fa fa-times mr-2"/>
                                            <del> {feature6} </del>
                                        </li>
                                        <li className="mb-3 text-muted">
                                            <i className="fa fa-times mr-2"/>
                                            <del> {feature7}</del>
                                        </li>
                                    </ul>
                                    <a href="#"
                                       className="btn btn-primary btn-block p-2 shadow rounded-pill">{button}</a>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Pricing;
