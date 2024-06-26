import {UseFormRegister, FormState} from 'react-hook-form'

export interface IForm{
    'email': string,
    'message': string
}

export interface FormProps {
    register: UseFormRegister<IForm>,
    formState: FormState<IForm>
}