import {useForm} from "react-hook-form";
import "./../App.scss";
import { IForm,FormProps } from "../types/form";


export const TextAreaMessage =({register, formState}:FormProps)=>{

    /*const {register, formState} = useForm<IForm>({
        mode:"onChange"
    })*/
    
    const messageError = formState.errors["message"]?.message

    return (
        <div>
        <textarea
          placeholder="Enter message:"
          {...register("message", {
            required: "This field is required",
          })}
        ></textarea>
        {messageError && (
          <p
            style={{
              color: "tomato",
              margin: "2px auto",
              textAlign: "left",
            }}
          >
            {messageError}
          </p>
        )}
        </div>
    )
}
