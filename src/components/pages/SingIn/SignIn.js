import React from 'react'
import { Form, Formik, useField } from "formik";
import { useHistory } from "react-router-dom"
import { SignUpContainer, NavLink, Divider, TextInput } from "./SignIn.styled.js";
import * as Yup from 'yup'

const CustomTextInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);

    return (
        <TextInput>
            <input {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </TextInput>
    )
}


function SignIn() {
    let history = useHistory();
    return (
        <SignUpContainer>
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                }}
                validationSchema={Yup.object({
                    email: Yup.string()
                        .email('Invalid email')
                        .required('Required field'),
                    password: Yup.string()
                        .required('Required field')
                })}
                onSubmit={(values) => {
                    const email = localStorage.getItem("email");
                    const password = localStorage.getItem("password");
                    if(email === values["email"] && password === values["password"] ){
                        localStorage.setItem("isAuthenticated", true)
                        history.push('/');
                        history.go();
                    } else {
                        alert("Wrong email or password")
                    }
                }}
            >
                {props => (
                    <Form>
                        <h1>Sign In</h1>
                        <CustomTextInput label="Email" name="email" type="email" placeholder="Email" />
                        <CustomTextInput label="Password" name="password" type="password" placeholder="Password" />
                        <Divider>
                            <h2>Not a member?</h2>
                            <NavLink to="/sign-up">Sign Up</NavLink>
                        </Divider>
                        <button
                            type="submit"
                        >
                            <h3>SIGN ME IN</h3>
                        </button>
                    </Form>
                )}
            </Formik>
        </SignUpContainer>
    )
}

export default SignIn;
