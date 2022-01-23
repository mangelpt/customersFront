import React from 'react';
import {Card} from "../UI/Card";
import {BoldLabel, SmallLabel} from "../UI/Labels";


const AverageCard = ({average}) => {
    return (
        <Card>
            <BoldLabel>the total average age is :</BoldLabel>
            <SmallLabel>{average}</SmallLabel>
        </Card>
    );
};

export default AverageCard;
