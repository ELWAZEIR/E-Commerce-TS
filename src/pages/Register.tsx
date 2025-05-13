import Heading from "@components/common/heading/Heading";
import { Input } from "@components/Form/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import useCheckEmailAvailability from "@hooks/useCheckEmailAvailability";
import { actAuthRegister, resetUi } from "@store/auth/AuthSlice";
import { useAppDispatch,useAppSelector } from "@store/hooks";
import { signUpSchema, signUpType } from "@validations/signUpSchema";
import React, { useEffect } from "react";
import { Button, Col, Form, Row, Spinner } from "react-bootstrap";
import { SubmitHandler, useForm } from "react-hook-form";
import { Navigate, useNavigate } from "react-router-dom";

function Register() {
  const dispatch=useAppDispatch()
  const navigate=useNavigate()
const {error,loading,accessToken}=useAppSelector((state)=>state.auth)
  const {
    register,
    handleSubmit,
    trigger,
    getFieldState,
    formState: { errors },
  } = useForm<signUpType>({
    resolver: zodResolver(signUpSchema),
    mode: "onBlur",
  });
  const {
    emailAvailabilityStatus,
    enteredEmail,
    checkEmailAvailability,
    resetCheckEmailAvailability,
  } = useCheckEmailAvailability();
  const SubmitForm: SubmitHandler<signUpType> =async (data) =>{
    const {email,firstName,lastName,password}=data
    dispatch(actAuthRegister({email,firstName,lastName,password})).unwrap().then(()=>{
      navigate('/login?message=account_created')
    })
  };
  const emailOnBlurHandler = async (e: React.FocusEvent<HTMLInputElement>) => {
    await trigger("email");
    const value = e.target.value;
    const { isDirty, invalid } = getFieldState("email");

    if (isDirty && !invalid && enteredEmail !== value && value.trim() !== "") {
      checkEmailAvailability(value);
    }

    if (isDirty && invalid && enteredEmail) {
      resetCheckEmailAvailability();
    }
  };
useEffect(()=>{
return ()=>{
  dispatch(resetUi())
}
},[dispatch])
if(accessToken)return <Navigate to="/"/>
  return (
    <>
      <Heading title="User Registration" />
      <Row>
        <Col md={{ offset: 3, span: 6 }}>
          <Form onSubmit={handleSubmit(SubmitForm)}>
            <Input
              label="Frist Name"
              register={register}
              name="firstName"
              error={errors.firstName?.message as string}
            />
            <Input
              label="Last Name"
              register={register}
              name="lastName"
              error={errors.lastName?.message as string}
            />
            <Input
              label="E.mail"
              register={register}
              name="email"
              error={
                errors.email?.message
                  ? errors.email?.message
                  : emailAvailabilityStatus === "notAvailable"
                  ? "This email is already in use."
                  : emailAvailabilityStatus === "failed"
                  ? "Error from the server."
                  : ""
              }
              onBlur={emailOnBlurHandler}
              formText={
                emailAvailabilityStatus === "checking"
                  ? "We're currently checking the availability of this email address. Please wait a moment."
                  : ""
              }
              success={
                emailAvailabilityStatus === "available"
                  ? "This email is available for use"
                  : ""
              }
              disabled={emailAvailabilityStatus==="checking"?true:false}
            />
            <Input
              label="PassWord"
              register={register}
              name="password"
              type="PassWord"
              error={errors.password?.message as string}
            />
            <Input
              label="Confirm PassWord"
              register={register}
              name="confirmPassword"
              type="PassWord"
              error={errors.confirmPassword?.message as string}
            />
            <Button
              disabled={emailAvailabilityStatus === "checking" ? true : false || loading==="pending"}
              variant="info"
              type="submit"
              style={{ color: "while" }}
            >
              {loading==="pending" ?(<>
                <Spinner animation="grow" size="sm"> </Spinner> Loding...  </>):("submit")
                }
            </Button>
            {error&& <p style={{marginTop:'10px',color:'DC3545'}}>{error}</p>}
          </Form>
        </Col>
      </Row>
    </>
  );
}
export default Register;
