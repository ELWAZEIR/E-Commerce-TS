import React from "react";
import { Form } from "react-bootstrap";
import { FieldValues, Path, UseFormRegister } from "react-hook-form";

type inputProps<TFildValue extends FieldValues> = {
  label: string;
  name: Path<TFildValue>;
  type?: string;
  error: string;
  register: UseFormRegister<TFildValue>;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  formText?:string  
  success?:string
  disabled?:boolean
};
export const Input = <TFildValue extends FieldValues>({
  register,
  error,
  type = "text",
  success,
  name,
  label,
  onBlur,
  formText,
  disabled
}: inputProps<TFildValue>) => {
  const onblurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
    if (onBlur) {
      onBlur(e);
      register(name).onBlur(e);
    } else {
      register(name).onBlur(e);
    }
  };
  return (
    <>
      <Form.Group className="mb-3">
        <Form.Label>{label}</Form.Label>
        <Form.Control
          type={type}
          {...register(name)}
          onBlur={onblurHandler}
          isInvalid={error ? true : false}
          isValid={success ? true : false}
          disabled={disabled}
        />
        <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
        <Form.Control.Feedback type="valid">{success}</Form.Control.Feedback>
        {formText&&<Form.Text muted>{formText}</Form.Text>}
      </Form.Group>
    </>
  );
};
