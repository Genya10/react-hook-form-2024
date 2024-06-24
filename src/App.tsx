import { SubmitHandler, useForm } from "react-hook-form";
import "./App.scss";
import { IForm } from "./types/form";

function App() {
  const { register, handleSubmit, formState } = useForm<IForm>({
    //ОПЦИИ ФОРМЫ
    //defaultValues:{'email':'test@com.ua'},
    mode: "onChange",
  });

  const emailError = formState.errors["email"]?.message;

  const onSubm: SubmitHandler<IForm> = (data) => {
    console.log(data["email"]);
  };

  return (
    <>
      <h1>Feedback form</h1>

      <form onSubmit={handleSubmit(onSubm)}>
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
              color: "red",
              margin: "2px auto",
              textAlign: "left",
            }}
          >
            {emailError}
          </p>
        )}
        <textarea placeholder="Enter message:"></textarea>
        <button type="submit">Send</button>
      </form>
    </>
  );
}

export default App;
