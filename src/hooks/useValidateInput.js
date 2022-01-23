import {useReducer} from 'react';

const initialState = {name: "", lastName: "", birthDate: "", isTouched: false}
const reducer = (state, action) => {
    switch (action.type) {
        case 'NAME':
            return {...state, name: action.name, nameIsValid: action.nameIsValid}
        case 'LASTNAME':
            return {...state, lastName: action.lastName, LastNameIsValid: action.lastNameIsValid}
        case 'DATE':
            return {...state, birthDate: action.date, dateIsValid: true}
        case 'BLUR':
            return {...state, isTouched: true}
        case 'RESET':
            return {...initialState}
        default:
            throw new Error("option does not exits")
    }
}
const useForm = () => {
    const [formState, formDispatch] = useReducer(reducer, initialState);
    const isValid = (value) => {
        return value.length >= 3
    }
    const inputBlurHandler = (value) => {
        formDispatch({type: 'BLUR'})
    }
    const nameHandler = (e) => {
        const valid = isValid(e.target.value)
        formDispatch({type: 'NAME', name: e.target.value, nameIsValid: valid});
    }
    const LastNameHandler = (e) => {
        const valid = isValid(e.target.value)
        formDispatch({type: 'LASTNAME', lastName: e.target.value, lastNameIsValid: valid});
    }
    const dateHandler = (e) => {
        formDispatch({type: 'DATE', date: e.target.value});
    }
    const reset = () => {
        formDispatch({type: 'RESET'})
    }
    return (
        [formState, nameHandler, LastNameHandler, dateHandler, inputBlurHandler, reset]
    );
};
export default useForm;