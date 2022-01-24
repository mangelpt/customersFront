import React, {useState} from 'react';
import {Form} from "../UI/Form";
import {Input} from "../UI/Input";
import {BoldLabel, SmallLabel} from "../UI/Labels";
import {NormalButton} from "../UI/Buttons";
import {UserAdd} from "../../assets/Icons";
import useForm from "../../hooks/useValidateInput";
import {useHTTP} from "../../hooks/useFetch";
import {CUSTOMER_ADD_URL} from "../../Constants";
import {Spinner} from "../UI/Spinner";
import {Card} from "../UI/Card";

const FormLayout = () => {
    const [formState, nameHandler, LastNameHandler, dateHandler, inputBlurHandler, reset] = useForm();
    const formIsValid = formState.nameIsValid && formState.LastNameIsValid;
    const [isLoading, , sendRequest] = useHTTP();
    const [customerCreated, setCustomerCreated] = useState("");
    const addNewCustomerHandler = (e) => {
        e.preventDefault();
        const newCostumer = {
            name: formState.name,
            last: formState.lastName,
            date: formState.birthDate
        }
        sendRequest({
            url: CUSTOMER_ADD_URL,
            method: "POST",
            headers: {'Content-Type': 'application/json'},
            body: newCostumer
        }).then()
        setCustomerCreated(newCostumer.name)
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
            {!isLoading ?
                <Card> last  customer  created: {customerCreated }
                </Card>:
                <Spinner/>
            }
        </>
    );
};

export default FormLayout;
