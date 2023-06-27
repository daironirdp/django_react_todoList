import * as Yup from 'yup'



export const AddingSubmittingSchema = Yup.object().shape({

    title: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),

    memo: Yup.string()
        .required('Required')

});
