import { zodResolver } from "@hookform/resolvers/zod";
import useCheckEmailAvailability from "@hooks/useCheckEmailAvailability";
import { actAuthRegister, resetUi } from "@store/auth/AuthSlice";
import { useAppDispatch,useAppSelector } from "@store/hooks";
import { signUpSchema, signUpType } from "@validations/signUpSchema";
import React, { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
const UseRegister = () => {
    const dispatch=useAppDispatch()
    const navigate=useNavigate()
  const {error,loading,accessToken}=useAppSelector((state)=>state.auth)
    const {
      register,
      handleSubmit,
      trigger,
      getFieldState,
      formState: { errors:formErrors },
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
  return{error,loading,accessToken,register,
    handleSubmit,formErrors,emailAvailabilityStatus,SubmitForm,emailOnBlurHandler}
}
export default UseRegister