import Heading from "@components/common/heading/Heading";
import { Input } from "@components/Form/Input";
import { zodResolver } from "@hookform/resolvers/zod";
import useCheckEmailAvailability from "@hooks/useCheckEmailAvailability";
import { signUpSchema, signUpType } from "@validations/signUpSchema";
import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { SubmitHandler, useForm } from "react-hook-form";

function Register() {
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
  const SubmitForm: SubmitHandler<signUpType> = (data) => console.log(data);
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
              disabled={emailAvailabilityStatus === "checking" ? true : false}
              variant="info"
              type="submit"
              style={{ color: "while" }}
            >
              submit
            </Button>
          </Form>
        </Col>
      </Row>
    </>
  );
}
export default Register;
