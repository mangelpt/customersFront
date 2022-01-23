import {useReducer} from 'react';

const initialState = {name: "", street: "", postalCode: "", city: "", isTouched: false}
const reducer = (state, action) => {
    switch (action.type) {
        case 'NAME':
            return {...state, name: action.name, nameIsValid: action.nameIsValid}
        case 'STREET':
            return {...state, street: action.street, streetIsValid: action.streetIsValid}
        case 'CODE':
            return {...state, postalCode: action.code, codeIsValid: action.codeIsValid}
        case 'CITY':
            return {...state, city: action.city, cityIsValid: action.cityIsValid}
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
        return value.length >= 4
    }
    const inputBlurHandler = (value) => {
        formDispatch({type: 'BLUR'})
    }
    const nameHandler = (e) => {
        const valid = isValid(e.target.value)
        formDispatch({type: 'NAME', name: e.target.value, nameIsValid: valid});
    }
    const streetHandler = (e) => {
        const valid = isValid(e.target.value)
        formDispatch({type: 'STREET', street: e.target.value, streetIsValid: valid});
    }
    const postalHandler = (e) => {
        const valid = isValid(e.target.value)
        formDispatch({type: 'CODE', code: e.target.value, codeIsValid: valid});
    }
    const cityHandler = (e) => {
        const valid = isValid(e.target.value)
        formDispatch({type: 'CITY', city: e.target.value, cityIsValid: valid});
    }
    const reset = () => {
        formDispatch({type:'RESET'})
    }
    return (
        [formState, nameHandler, streetHandler, postalHandler, cityHandler, inputBlurHandler,reset]
    );
};
export default useForm;