import React, {useEffect, useState} from 'react';
import {Grid} from "../components/UI/Grid";
import AverageCard from "../components/Layout/AverageCard";
import {Spinner} from "../components/UI/Spinner";
import {CUSTOMER_AVERAGE_URL} from "../Constants";
import {useHTTP} from "../hooks/useFetch";
import {Card} from "../components/UI/Card";

const Average = () => {
    const [averageAge, setAverageAge] = useState("");
    const [isLoading, error, sendRequest] = useHTTP();
    useEffect(() => {
        const getData = async () => {
            const [data] = await sendRequest({url: CUSTOMER_AVERAGE_URL});
            setAverageAge(data.Average);
        }
        getData().then();
    }, [sendRequest])

    return (
        <>
            <Grid size={300} gap={5} rows='auto'>
                {error !==null &&  <Card> {error} </Card>}
                {isLoading ? <Spinner/> :
                    <AverageCard average={averageAge}/>}
            </Grid>
        </>
    );
};

export default Average;
