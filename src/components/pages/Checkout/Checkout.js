import React from 'react'
import { Form, Formik, useField } from "formik";
import { Button } from "../../Button/Button"
import { useHistory } from "react-router-dom"
import { CheckoutContainer, Buttons, Divider, TextInput } from "./Checkout.styled.js";
import * as Yup from 'yup'

const CustomTextInput = ({ label, ...props }) => {
    const [field, meta] = useField(props);

    return (
        <TextInput>
            <label htmlFor={props.id || props.name}>{label}</label>
            <input className="text-input" {...field} {...props} />
            {meta.touched && meta.error ? (
                <div className="error">{meta.error}</div>
            ) : null}
        </TextInput>
    )
}


function Checkout() {
    let history = useHistory();
    return (
        <CheckoutContainer>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    address: ''
                }}
                validationSchema={Yup.object({
                    firstName: Yup.string()
                        .min(2, 'Must be at least 2 characters')
                        .max(20, 'Must be no more than 20 characters')
                        .matches('^[A-Z]+', 'Your first name should start with a capital letter')
                        .required('Required field'),
                    lastName: Yup.string()
                        .min(2, 'Must be at least 2 characters')
                        .max(20, 'Must be no more than 20 characters')
                        .matches('^[A-Z]+', 'Your last name should start with a capital letter')
                        .required('Required field'),
                    email: Yup.string()
                        .email('Invalid email')
                        .required('Required field'),
                    phone: Yup.string()
                        //  
                        .matches('^[0][\\d]{9}$|^[+][3][8][0][\\d]{9}$', 'You should enter a valid phone number')
                        .required('Required field'),
                    address: Yup.string()
                        .required('Required field'),
                })}
                onSubmit={(values) => {
                    history.push('/success');
                }}
            >
                {props => (
                    <Form>
                        <h1>Checkout</h1>
                        <Divider>
                            <CustomTextInput label="First Name" name="firstName" type="text" placeholder="Put your name in here..." />
                            <CustomTextInput label="Last Name" name="lastName" type="text" placeholder="Put your name in here..." />
                        </Divider>
                        <Divider>
                            <CustomTextInput label="Email" name="email" type="email" placeholder="Put your email in here..." />
                            <CustomTextInput label="Phone" name="phone" type="phone" placeholder="Put your phone in here..." />
                        </Divider>
                        <CustomTextInput label="Adress" name="address" type="adress" placeholder="Put your address in here..." />
                        <Buttons>
                            <Button
                                path="/cart"
                                buttonStyle='btn--primary'
                                buttonSize='btn--large'
                            >
                                <h2>Go Back</h2>
                            </Button>
                            <button
                                type="submit"
                            >
                                <h2>Continue</h2>
                            </button>
                        </Buttons>
                    </Form>
                )}
            </Formik>
        </CheckoutContainer>
    )
}

export default Checkout;
