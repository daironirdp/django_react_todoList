import * as Yup from 'yup'


const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.


export const LoginSchema = Yup.object().shape({

    username: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),

    password: Yup.string()
        .required('Required')

});


export const SignupSchema = Yup.object().shape({

    username: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),

    password: Yup.string()
        .required('Required').min(
            8,
            'password must contain 8 or more characters with at least one of each: uppercase, lowercase, number and special'
        )
        .matches(passwordRules),

    email: Yup.string()
        .email('Invalid email address')
        .required('Required'),




});