import Heading from "@components/common/heading/Heading";
import { Input } from "@components/Form/Input";
import { Button, Col, Form, Row, Spinner } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import UseRegister from "@hooks/UseRegister";
function Register() {
const {error,loading,accessToken,register,
  handleSubmit,formErrors,emailAvailabilityStatus,SubmitForm,emailOnBlurHandler}=UseRegister()
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
              error={formErrors.firstName?.message as string}
            />
            <Input
              label="Last Name"
              register={register}
              name="lastName"
              error={formErrors.lastName?.message as string}
            />
            <Input
              label="E.mail"
              register={register}
              name="email"
              error={
                formErrors.email?.message
                  ? formErrors.email?.message
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
              error={formErrors.password?.message as string}
            />
            <Input
              label="Confirm PassWord"
              register={register}
              name="confirmPassword"
              type="PassWord"
              error={formErrors.confirmPassword?.message as string}
            />
            <Button
              disabled={emailAvailabilityStatus === "checking" ? true : false || loading==="pending"}
              variant="info"
              type="submit"
              style={{ color: "white" }}
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
