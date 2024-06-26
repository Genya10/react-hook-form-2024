import { SubmitHandler, useForm } from "react-hook-form";
import "./App.scss";
import { IForm } from "./types/form";
import { InputEmail } from "./components/InputEmail";
import { TextAreaMessage } from "./components/TextAreaMessage";
import { useEffect } from "react";

function App() {
  const {register, handleSubmit, formState, reset, watch } = useForm<IForm>();

  const emailWatch = watch('email')

  useEffect(()=>{
    console.log(emailWatch)
  },[emailWatch])

  useEffect(()=>{
  //Data from server
  reset({
    email:'qwerty@com.ua',
    message:'hello friend'
  })
  },[reset])

  const onSubmit: SubmitHandler<IForm> = (data) => {
    console.log(data);
  };

  return (
    <>
      <h1>Feedback form</h1>
      {/*<button onClick={()=> reset({
          email: 'example@example.com',
          message: 'Default message'
       })}>RESET</button>*/}
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputEmail register={register} formState={formState}/>
        <TextAreaMessage register={register} formState={formState}/>
        <button type="submit">Send</button>
      </form>
    </>
  );
}

export default App;
