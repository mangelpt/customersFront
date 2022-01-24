import {Card} from "../UI/Card";
import React from 'react';
import {GenericContainer, UserImageContainer} from "../UI/Containers";
import {BoldLabel, SmallLabel} from "../UI/Labels";
import {DetailsIcon, TrashIcon, User} from "../../assets/Icons";
import {CircleButton} from "../UI/Buttons";

const UserCard = ({name, age}) => {
    return (
        <Card>
            <UserImageContainer>
                <User/>
            </UserImageContainer>
            <BoldLabel>{name}</BoldLabel>
            <SmallLabel>{age}</SmallLabel>
            <GenericContainer>
                <CircleButton>
                    <TrashIcon/>
                </CircleButton>
                <CircleButton>
                    <DetailsIcon/>
                </CircleButton>
            </GenericContainer>
        </Card>
    );
};

export default UserCard;
