import { signInSchema, logInType } from "@validations/logInSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { actAuthLogin, resetUi } from "@store/auth/AuthSlice";
import { useEffect } from "react";
const UseLogin = () => {
    const dispatch = useAppDispatch();
    const { error, loading ,accessToken} = useAppSelector((state) => state.auth);
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
  
    const {
      register,
      handleSubmit,
      formState: { errors:formErrors },
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
  
  return {
    error, loading ,accessToken, register,
    handleSubmit,formErrors,SubmitForm,searchParams
  }
}
export default UseLogin