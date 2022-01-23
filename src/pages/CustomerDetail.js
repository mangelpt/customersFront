import React from 'react';
import {Grid} from "../components/UI/Grid";
import UserCard from "../components/Layout/UserCard";

const CustomerDetails = () => {
    return (
        <Grid size={300} gap={5} rows='auto'>
            <UserCard name={"miguel"} age={"23"} >
            </UserCard>
        </Grid>
    );
};

export default CustomerDetails;
