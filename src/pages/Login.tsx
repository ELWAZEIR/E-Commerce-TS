import Heading from "@components/common/heading/Heading";
import { Input } from "@components/Form/Input";
import { Alert, Button, Col, Form, Row, Spinner } from "react-bootstrap";
import { signInSchema, logInType } from "@validations/logInSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate, useSearchParams,Navigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { actAuthLogin, resetUi } from "@store/auth/AuthSlice";
import { useEffect } from "react";

function Login() {
  const dispatch = useAppDispatch();
  const { error, loading ,accessToken} = useAppSelector((state) => state.auth);
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<logInType>({
    resolver: zodResolver(signInSchema),
    mode: "onBlur",
  });
  const SubmitForm: SubmitHandler<logInType> = (data) => {
    if (searchParams.get("message") === "account_created") {
      setSearchParams("");
    }
    dispatch(actAuthLogin(data))
      .unwrap()
      .then(() => navigate("/"));
  };
  useEffect(() => {
    return () => {
      dispatch(resetUi());
    };
  },[dispatch]);
if(accessToken) return <Navigate to="/"/>

  return (
    <>
      <Heading title="User Login" />
      <Row>
        <Col md={{ offset: 3, span: 6 }}>
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
              error={errors.email?.message as string}
            />
            <Input
              label="password"
              register={register}
              name="password"
              error={errors.password?.message as string}
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
