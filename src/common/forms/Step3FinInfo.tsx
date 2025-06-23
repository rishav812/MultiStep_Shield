import React from "react";
import CommonSelect from "../input/CommonSelect";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  incomeRange: yup.string().required("Income Range is required"),
  employmentStatus: yup.string().required("Employment Status is required"),
});

const incomeOptions = [
  { label: "Select Income range", value: "" },
  { label: "Below ₹2,50,000", value: "<250000" },
  { label: "₹2,50,000 - ₹5,00,000", value: "250000-500000" },
  { label: "₹5,00,001 - ₹10,00,000", value: "500001-1000000" },
  { label: "Above ₹10,00,000", value: ">1000000" },
];

const employmentOptions = [
  { label: "Select Employment Status", value: "" },
  { label: "Employed", value: "employed" },
  { label: "Self-Employed", value: "self_employed" },
  { label: "Student", value: "student" },
  { label: "Unemployed", value: "unemployed" },
  { label: "Retired", value: "retired" },
];

function FinancialInfo({ onDispatch, onBack, formData }: any) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      incomeRange: formData.incomeRange,
      employmentStatus: formData.employmentStatus,
    },
    resolver: yupResolver(schema),
  });

  const onsubmit = (data: any) => {
    onDispatch(data);
  };

  return (
    <form onSubmit={handleSubmit(onsubmit)}>
      <div>
        <h3>Financial Info</h3>
        <CommonSelect
          control={control}
          name="incomeRange"
          options={incomeOptions}
          error={errors?.incomeRange?.message}
        />
        <CommonSelect
          control={control}
          name="employmentStatus"
          options={employmentOptions}
          error={errors?.employmentStatus?.message}
        />
      </div>
      <div>
        <button type="submit">Next</button>
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

export default FinancialInfo;
