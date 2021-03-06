import {Card} from "../UI/Card";
import React from 'react';
import {GenericContainer, UserImageContainer} from "../UI/Containers";
import {BoldLabel, SmallLabel} from "../UI/Labels";
import {DetailsIcon, TrashIcon, User} from "../../assets/Icons";
import {CircleButton} from "../UI/Buttons";
import {useNavigate} from "react-router-dom";
import {CUSTOMER_DELETE} from "../../Constants";
import {useHTTP} from "../../hooks/useFetch";
import {Spinner} from "../UI/Spinner";

const UserCard = ({name, age, id}) => {
    const [isLoading, , sendRequest] = useHTTP();
    let navigate = useNavigate();
    const detailsHandler = () => {
        navigate(`/customers/${id}`);
    }
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
            <BoldLabel>{name}</BoldLabel>
            <SmallLabel>{age}</SmallLabel>
            <GenericContainer>
                <CircleButton onClick={deleteHandler}>
                    <TrashIcon/>
                </CircleButton>
                <CircleButton onClick={detailsHandler}>
                    <DetailsIcon/>
                </CircleButton>
            </GenericContainer>
            {isLoading && <Spinner/>}
        </Card>
    );
};

export default UserCard;
