import React from 'react'
import { Form, Formik, useField } from "formik";
import { useHistory } from "react-router-dom"
import { SignUpContainer, NavLink, Divider, TextInput } from "./SignUp.styled.js";
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

function SignUp() {
    let history = useHistory();
    return (
        <SignUpContainer>
            <Formik
                initialValues={{
                    userName: '',
                    email: '',
                    password: '',
                    retypePassword: ''
                }}
                validationSchema={Yup.object({
                    userName: Yup.string()
                        .min(2, 'Must be at least 2 characters')
                        .max(20, 'Must be no more than 20 characters')
                        .required('Required field'),
                    email: Yup.string()
                        .email('Invalid email')
                        .required('Required field'),
                    password: Yup.string()
                        .min(6, 'Must be at least 6 characters')
                        .required('Required field'),
                    retypePassword: Yup.string()
                        .oneOf([Yup.ref('password'), null], "Passwords don't match!")
                        .required('Required field'),
                })}
                onSubmit={(values) => {
                    localStorage.setItem("userName", values["userName"]);
                    localStorage.setItem("email", values["email"]);
                    localStorage.setItem("password", values["password"]);
                    history.push('/sign-in');
                }}
            >
                {props => (
                    <Form>
                        <h1>Register the new account</h1>
                        <CustomTextInput label="Username" name="userName" type="text" placeholder="Username" />
                        <CustomTextInput label="Email" name="email" type="email" placeholder="Email" />
                        <CustomTextInput label="Password" name="password" type="password" placeholder="Password" />
                        <CustomTextInput label="Retype Password" name="retypePassword" type="password" placeholder="Retype password" />
                        <Divider>
                            <h2>Already a member?</h2>
                            <NavLink to="/sign-in">Sign In</NavLink>
                        </Divider>
                        <button
                            type="submit"
                        >
                            <h3>SIGN ME UP</h3>
                        </button>
                    </Form>
                )}
            </Formik>
        </SignUpContainer>
    )
}

export default SignUp;
