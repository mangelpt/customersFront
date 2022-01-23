import React from 'react';
import {Form} from "../UI/Form";
import {Input} from "../UI/Input";
import {BoldLabel, SmallLabel} from "../UI/Labels";
import {NormalButton} from "../UI/Buttons";
import {UserAdd} from "../../assets/Icons";
import useForm from "../../hooks/useValidateInput";

const FormLayout = () => {
    const [formState, nameHandler, LastNameHandler, dateHandler, inputBlurHandler, reset] = useForm();
    const formIsValid = formState.nameIsValid && formState.LastNameIsValid;

    const addNewCustomerHandler = (e) => {
        e.preventDefault();
        const name=formState.name;
        const lastName=formState.lastName;
        const birthDate=formState.birthDate;
        console.log(name,lastName,birthDate);
        reset()
    }
    return (
        <>
            <Form onSubmit={addNewCustomerHandler}>
                <BoldLabel>Add new customer</BoldLabel>
                <SmallLabel>name</SmallLabel>
                <Input
                    onChange={nameHandler}
                    onBlur={inputBlurHandler}
                    value={formState.name}
                />
                {!formState.nameIsValid &&
                    formState.isTouched &&
                    <span>{"name at least 3 characters"}</span>}
                <SmallLabel>last name</SmallLabel>
                <Input
                    onChange={LastNameHandler}
                    onBlur={inputBlurHandler}
                    value={formState.lastName}
                />
                {!formState.LastNameIsValid &&
                    formState.isTouched &&
                    <span>{"last name at least 3 characters"}</span>}
                <SmallLabel>birth date </SmallLabel>
                <Input type="date"
                       onChange={dateHandler}
                       onBlur={inputBlurHandler}
                       value={formState.birthDate}
                />
                <NormalButton disabled={!formIsValid}> <UserAdd/> add new user </NormalButton>
            </Form>
        </>
    );
};

export default FormLayout;
