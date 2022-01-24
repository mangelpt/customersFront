import React, {useEffect, useState} from 'react';
import {Grid} from "../components/UI/Grid";
import UserCard from "../components/Layout/UserCard";
import {useHTTP} from "../hooks/useFetch";
import {CUSTOMER_URL} from "../Constants";
import {Spinner} from "../components/UI/Spinner";

const Dashboard = () => {
    const [customers, setCustomers] = useState([]);
    const [isLoading, error, sendRequest] = useHTTP();

    useEffect(() => {
        const getData = async () => {
            const data = await sendRequest({url: CUSTOMER_URL});
            setCustomers(data);
        }
        getData().then();
    }, [sendRequest])

    let allCustomers;
    if (error !== null) {
        allCustomers = error
    } else {
        allCustomers = customers.map((customer) => {
            const birthYear = new Date(customer.birthDate).getFullYear();
            const currentYear = new Date().getFullYear();
            return <UserCard
                key={customer.id}
                id={customer.id}
                name={customer.name + " " + customer.lastName}
                age={currentYear - birthYear}>
            </UserCard>
        })
    }

    return (
        <>
            <Grid size={300} gap={5} rows='auto'>
                {isLoading ? <Spinner/> : allCustomers}
            </Grid>
        </>
    );
};

export default Dashboard;
