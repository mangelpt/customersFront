import React from 'react';
import {Form} from "../UI/Form";
import {Input} from "../UI/Input";
import {BoldLabel, SmallLabel} from "../UI/Labels";
import {NormalButton} from "../UI/Buttons";
import {UserAdd} from "../../assets/Icons";

const FormLayout = () => {
    return (
        <>
            <Form>
                <BoldLabel>Add new customer</BoldLabel>
                <SmallLabel>name</SmallLabel>
                <Input></Input>

                <SmallLabel>last name</SmallLabel>
                <Input></Input>
                <SmallLabel>birth date </SmallLabel>
                <Input type="date"></Input>
                <NormalButton> <UserAdd/> add new user </NormalButton>
            </Form>
        </>
    );
};

export default FormLayout;
