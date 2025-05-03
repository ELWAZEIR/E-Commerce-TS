import Heading from "@components/common/heading/Heading"
import { Input } from "@components/Form/Input"
import { Button, Col, Form, Row } from "react-bootstrap"
import { signInSchema, logInType } from "@validations/logInSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { SubmitHandler, useForm } from "react-hook-form"

function Login() {
  const {register,handleSubmit,formState:{errors}}=useForm<logInType>({
    resolver: zodResolver(signInSchema),
    mode:"onBlur"
  })
  const SubmitForm: SubmitHandler<logInType> = (data) => console.log(data)

  return (
    <>
    <Heading title="User Login"/>
     <Row>
      <Col md={{offset:3,span:6}}>

      <Form onSubmit={handleSubmit(SubmitForm)}>

     <Input label="E.mail"  register={register} name="email" error={errors.email?.message as string} />    
     <Input  label="password" register={register} name="password" error={errors.password?.message as string} type="password" />    

      <Button  variant="info" type="submit" style={{color:"while"}} >submit</Button>
    </Form>
      </Col>
    </Row>
    </>
   
   
  )
}

export default Login