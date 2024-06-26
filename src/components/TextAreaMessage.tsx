import "./../App.scss";
import {FormProps } from "../types/form";


export const TextAreaMessage =({register, formState}:FormProps)=>{
    
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
