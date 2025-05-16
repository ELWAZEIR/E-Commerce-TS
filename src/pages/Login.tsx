import { Input } from "@components/Form/Input";
import { Alert, Button, Col, Form, Row, Spinner } from "react-bootstrap";
import Heading from "@components/common/heading/Heading";
import { Navigate } from "react-router-dom";
import UseLogin from "@hooks/UseLogin";

function Login() {
  const { error, loading ,accessToken, register,
    handleSubmit,formErrors,SubmitForm,searchParams}=UseLogin()
  if(accessToken) return <Navigate to="/"/>

  return (
    <>
      <Heading title="User Login" />
      <Row>
      <Col md={{ span: 6, offset: 3 }}>
          {searchParams.get("message") === "login_required" && (
            <Alert variant="success">
              You need to login to view this content
            </Alert>
          )}

          {searchParams.get("message") === "account_created" && (
            <Alert variant="success">
              Your account successfully created, please login
            </Alert>
          )}
          <Form onSubmit={handleSubmit(SubmitForm)}>
            <Input
              label="E.mail"
              register={register}
              name="email"
              error={formErrors.email?.message as string}
            />
            <Input
              label="password"
              register={register}
              name="password"
              error={formErrors.password?.message as string}
              type="password"
            />

            <Button variant="info" type="submit" style={{ color: "while" }}>
              {loading === "pending" ? (
                <>
                  <Spinner animation="grow" size="sm"></Spinner>
                  Loding...
                </>
              ) : (
                "submit"
              )}
            </Button>
            {error && (
              <p style={{ marginTop: "10px", color: "DC3545" }}>{error}</p>
            )}
          </Form>
        </Col>
      </Row>
    </>
  );
}

export default Login;
