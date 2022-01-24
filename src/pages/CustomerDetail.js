import React, {useEffect, useState} from 'react';
import {Grid} from "../components/UI/Grid";
import CardDetails from "../components/Layout/CardDetails";
import {useParams} from "react-router-dom";
import {useHTTP} from "../hooks/useFetch";
import {CUSTOMER_URL} from "../Constants";
import {Spinner} from "../components/UI/Spinner";

const CustomerDetails = () => {
    let {customerId} = useParams();
    const [customer, setCustomer] = useState({});
    const [isLoading, , sendRequest] = useHTTP();

    useEffect(() => {
        const getData = async () => {
            const [data] = await sendRequest({url: CUSTOMER_URL+customerId});
            setCustomer(data);
        }
        getData().then();
    }, [customerId, sendRequest])

    console.log(customer)
    return (
        <Grid size={300} gap={5} rows='auto'>
            <CardDetails
                id={customer.id}
                name={customer.name}
                last={customer.lastName}
                age={customer.birthDate} >
            </CardDetails>
            {isLoading && <Spinner/>}
        </Grid>
    );
};

export default CustomerDetails;
