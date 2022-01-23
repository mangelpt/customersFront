import React from 'react';
import {Grid} from "../components/UI/Grid";
import AverageCard from "../components/Layout/AverageCard";
import {Spinner} from "../components/UI/Spinner";

const Average = () => {
    return (
        <>
            <Grid size={300} gap={5} rows='auto'>
             {/*   <Spinner/>*/}
              <AverageCard average="2"/>
            </Grid>

        </>
    );
};

export default Average;
