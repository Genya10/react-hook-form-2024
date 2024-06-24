import {useForm} from 'react-hook-form'
import './App.scss'

function App() {

  const {register, handleSubmit} = useForm({
    //ОПЦИИ ФОРМЫ
    defaultValues:{'e-mail':'test@com.ua'},
    mode:'onChange',
  })

//eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (data:any) =>{
    console.log(data)
  }

  return (
    <>
      <h1>Feedback form</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
           type="text" 
            placeholder='Enter e-mail:'
            {...register('e-mail', {
              required:'This field is required',
            })}
            />

          <textarea  placeholder='Enter message:'></textarea>
          <button type='submit'>Send</button>
      </form>
    </>
  )
}

export default App
