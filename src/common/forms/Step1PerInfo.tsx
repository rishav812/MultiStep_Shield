import React from "react";
import { useForm } from "react-hook-form";
import CommonInput from "../input/CommonInput";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),

  email: yup
    .string()
    .matches(emailRegex, "Email format is invalid")
    .required("Email is required"),

  phone: yup
    .string()
    .matches(/^[0-9]{10}$/, "Phone must be exactly 10 digits")
    .required("Phone is required"),
});

function PersonalInfo({ onDispatch, formData }: any) {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    onDispatch(data);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md space-y-6"
      >
        <h3 className="text-2xl font-bold text-center text-gray-800">
          Personal Info
        </h3>

        <CommonInput
          control={control}
          name="name"
          type="text"
          placeholder="Name..."
          error={errors.name?.message}
        />

        <CommonInput
          control={control}
          name="email"
          type="email"
          placeholder="Email..."
          error={errors.email?.message}
        />

        <CommonInput
          control={control}
          name="phone"
          type="number"
          placeholder="Mobile..."
          error={errors.phone?.message}
        />

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition duration-300"
        >
          Next
        </button>
      </form>
    </div>
  );
}

export default PersonalInfo;
