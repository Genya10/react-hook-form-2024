import {UseFormRegister, FormState, Control} from 'react-hook-form'

export interface IForm{
    'email': string,
    'message': string,
    'isImportant': boolean
}

export interface FormProps {
    register: UseFormRegister<IForm>,
    formState: FormState<IForm>,
    
}

export interface ControlProps {
    control:Control<IForm>
}