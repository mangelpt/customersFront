import React from 'react';
import {Grid} from "../components/UI/Grid";
import FormLayout from "../components/Layout/FormLayout";

const NewCustomer = () => {
    return (
        <Grid size={300} gap={5} rows='auto'>
            <FormLayout/>
        </Grid>
    );
};

export default NewCustomer;
