import { SubmitHandler, useForm } from "react-hook-form";
import "./App.scss";
import { IForm } from "./types/form";
import { InputEmail } from "./components/InputEmail";
import { TextAreaMessage } from "./components/TextAreaMessage";

function App() {
  const {register, handleSubmit,formState } = useForm<IForm>();

  const onSubmit: SubmitHandler<IForm> = (data) => {
    console.log(data);
  };

  return (
    <>
      <h1>Feedback form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputEmail register={register} formState={formState}/>
        <TextAreaMessage register={register} formState={formState}/>
        <button type="submit">Send</button>
      </form>
    </>
  );
}

export default App;
