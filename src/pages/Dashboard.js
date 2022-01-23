import React, {useEffect, useState} from 'react';
import {Grid} from "../components/UI/Grid";
import UserCard from "../components/Layout/UserCard";
import {useHTTP} from "../hooks/useFetch";
import {CUSTOMER_URL} from "../Constants";


const Dashboard = () => {
    const [customers, setCustomers] = useState([]);
    const [isLoading, error, sendRequest] = useHTTP();

    useEffect(() => {
        const getData = async () => {
            const data = await sendRequest({
                url: CUSTOMER_URL, headers: {
                    'Content-Type':'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Headers': 'Content-Type'
                }
            });

            setCustomers(data);
        }
        getData().then();
    }, [sendRequest])

    console.log(customers)
    return (
        <>
            <Grid size={300} gap={5} rows='auto'>
                <UserCard name={"miguel"} age={"23"}>
                </UserCard>
                <UserCard name={"miguel"} age={"23"}>
                </UserCard>
                <UserCard name={"miguel"} age={"23"}>
                </UserCard>
                <UserCard name={"miguel"} age={"23"}>
                </UserCard>
            </Grid>
        </>
    );
};

export default Dashboard;
