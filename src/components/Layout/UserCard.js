import {Card} from "../UI/Card";
import React from 'react';
import {UserImageContainer} from "../UI/Containers";
import {BoldLabel, SmallLabel} from "../UI/Labels";
import {TrashIcon, User} from "../../assets/Icons";
import {CircleButton} from "../UI/Buttons";

const UserCard = ({name, age}) => {
    return (
        <Card>
            <UserImageContainer>
                <User/>
            </UserImageContainer>
            <BoldLabel>{name}</BoldLabel>
            <SmallLabel>{age}</SmallLabel>
            <CircleButton>
                <TrashIcon/>
            </CircleButton>
        </Card>
    );
};

export default UserCard;
