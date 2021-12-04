import React from 'react';
import {Formik, Field, Form} from 'formik';
import {FormGroup, Label, Input, Message, Img, ButtonSign, Button, ForgotPassword} from "./LoginStyles";

const Login = () => (
    <>
        <a href="/"><Img src={"/images/logo.png"}/></a>

        <div className="form-boxed">
            <div className="login-reg-panel">

                <div className="register-info-box">
                    <h2>Don't have an account?</h2>
                    <p>Get 14 days free trial. Now!</p>
                    <Button as="a" href="/register">Sign up</Button>
                </div>

                <div className="white-panel">
                    <Formik
                        initialValues={{
                            username: '',
                            password: '',
                            message: '',
                        }}
                        onSubmit={async (values) => {
                            await new Promise((r) => setTimeout(r, 500));
                            alert(JSON.stringify(values, null, 2));
                        }}
                    >
                        <FormGroup>
                            <Form>
                                <Label htmlFor="username">Username</Label>
                                <Field name="username">
                                    {({
                                          field, // { name, value, onChange, onBlur }
                                          form: {touched, errors}, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                                          meta,
                                      }) => (
                                        <div>
                                            <Input type="text" {...field} />
                                            {meta.touched && meta.error && (
                                                <div className="error">{meta.error}</div>
                                            )}
                                        </div>
                                    )}
                                </Field>

                                <Label htmlFor="password">Password</Label>
                                <Field name="password">
                                    {({
                                          field, // { name, value, onChange, onBlur }
                                          form: {touched, errors}, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                                          meta,
                                      }) => (
                                        <div>
                                            <Input type="password" {...field} />
                                            {meta.touched && meta.error && (
                                                <div className="error">{meta.error}</div>
                                            )}
                                        </div>
                                    )}
                                </Field>

                                <Message>This is the validation message</Message>
                                <ButtonSign as="button" type="submit">Log in</ButtonSign>
                            </Form>
                        </FormGroup>
                    </Formik>
                </div>
            </div>
        </div>
    </>
);

export default Login;
