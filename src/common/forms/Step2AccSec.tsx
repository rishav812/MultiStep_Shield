import React from "react";
import { useForm } from "react-hook-form";
import CommonSelect from "../input/CommonSelect";
import CommonInput from "../input/CommonInput";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/;

const schema = yup.object().shape({
  password: yup
    .string()
    .min(8)
    .max(32)
    .matches(passwordRegex, "Password is not valid")
    .required("Password is required"),

  securityQuestion: yup.string().required("Security question is required"),

  securityAnswer: yup
    .string()
    .min(3, "Answer must be at least 3 characters")
    .required("Security answer is required"),
});

const options = [
  {
    value: "",
    label: "Select a question",
  },
  {
    value: "What is the name of your first pet?",
    label: "What is the name of your first pet?",
  },
  {
    value: "In what city were you born?",
    label: "In what city were you born?",
  },
  {
    value: "What was the make of your first car?",
    label: "What was the make of your first car?",
  },
];

function AccountSecurity({ onDispatch, onBack, formData }: any) {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      password: formData.password,
      securityQuestion: formData.securityQuestion,
      securityAnswer: formData.securityAnswer,
    },
    resolver: yupResolver(schema),
  });

  const onsubmit = (data: any) => {
    onDispatch(data);
  };

  return (
    <form
      className="bg-white p-6 rounded-xl shadow-md max-w-md mx-auto space-y-6"
      onSubmit={handleSubmit(onsubmit)}
    >
      <h3>Account Security Info</h3>
      <div>
        <CommonInput
          control={control}
          name="password"
          placeholder="Password..."
          error={errors.password?.message}
        />
      </div>

      <div className="space-y-4">
        <CommonSelect
          control={control}
          name="securityQuestion"
          options={options}
          error={errors.securityQuestion?.message}
        />
        <CommonInput
          control={control}
          name="securityAnswer"
          placeholder="Type your answer.."
          error={errors.securityAnswer?.message}
        />
      </div>

      <div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 transition"
        >
          Next
        </button>
        <br />

        <button
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition duration-300"
          onClick={() => onBack()}
        >
          Back
        </button>
      </div>
    </form>
  );
}

export default AccountSecurity;
