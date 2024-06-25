import { useForm } from "react-hook-form";
import { IForm , FormProps} from "../types/form";
import './../App.scss';


export const InputEmail = ({register,formState}: FormProps) => {

 /* const { register, formState } = useForm<IForm>({
    mode: "onChange",
  });*/

  const emailError = formState.errors["email"]?.message;

  return (
    <div>
      <input
        type="text"
        placeholder="Enter email:"
        {...register("email", {
          required: "This field is required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Invalid email address",
          },
        })}
      />
      {emailError && (
        <p
          style={{
            color: "tomato",
            margin: "2px auto",
            textAlign: "left",
          }}
        >
          {emailError}
        </p>
      )}
    </div>
  );
};
