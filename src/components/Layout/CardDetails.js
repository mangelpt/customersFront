import React from 'react';
import {Card} from "../UI/Card";
import {GenericContainer, UserImageContainer} from "../UI/Containers";
import {TrashIcon, User} from "../../assets/Icons";
import {BoldLabel, SmallLabel} from "../UI/Labels";
import {CircleButton} from "../UI/Buttons";
import {CUSTOMER_DELETE} from "../../Constants";
import {useHTTP} from "../../hooks/useFetch";
import {Spinner} from "../UI/Spinner";
import {useNavigate} from "react-router-dom";
const CardDetails = ({name, last, age, id}) => {
    let navigate = useNavigate();
    const [isLoading, , sendRequest] = useHTTP();
    const deleteHandler = () => {
        sendRequest({
            url: CUSTOMER_DELETE + id,
            method: "DELETE",
        }).then()
        navigate("/" ,{ replace: true });
    }
    return (
        <Card>
            <UserImageContainer>
                <User/>
            </UserImageContainer>
            <BoldLabel>name: {name}</BoldLabel>
            <BoldLabel>last name :{last}</BoldLabel>
            <SmallLabel>full birth date :{age}</SmallLabel>
            <GenericContainer>
                <CircleButton onClick={deleteHandler}>
                    <TrashIcon/>
                </CircleButton>
            </GenericContainer>
            {isLoading && <Spinner/>}
        </Card>
    );
};

export default CardDetails;
