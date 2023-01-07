import { useState } from "react";
import * as Yup from 'yup';
import { withFormik, FormikProps, FormikErrors, Form, Field, Formik } from 'formik';

const TransactionForm = () => {
    const [accounts, setAccounts] = useState([]);
    const [message, setMessage] = useState('');

    const processTransaction = (values: any) => {
        // const currentAcc = accounts.find()
        // setMessage(`Transaction Complete. New statement: ${values}`)
    };


    /** 
     * SET UP FORMIK INSTANCE
     * */
    // Type the values 
    const initialValues = {
        type: 'wd', 
        amount: 0,
        id: 0
    }

    const validations = Yup.object({
        id: Yup.number()
          .max(4, 'Must be 4 characters or less')
          .required('Required'),
        type: Yup.string()
          .max(3, 'Must be 3 characters or less')
          .required('Required'),
        amount: Yup.number().required('Required'),
      });

    return (
        <div>
            <div>
                <h2>Welcome to your banking platform</h2>
                <h3>What would you like to do today?</h3>
            </div>
            <Formik
                initialValues={initialValues}
                onSubmit={processTransaction}
                validationSchema={validations}
            >
                {({errors, values, handleSubmit, touched}) => (
                    <form onSubmit={handleSubmit}>
                        <label>Select Account Type</label>
                        <label>type</label>
                        <Field name="type" as="input" />
                        {touched.type && errors.type ? errors.type : ''}
                        <label>amount</label>
                        <Field name="amount" as="input" />

                        <label>id</label>
                        <Field name="id" as="input" />

                        <button onClick={() => handleSubmit()}>Submit</button>
                    </form>
                )}
            </Formik>
        </div>
    );
};

export default TransactionForm;