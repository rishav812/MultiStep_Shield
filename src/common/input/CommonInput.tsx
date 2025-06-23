import React from "react";
import { Controller } from "react-hook-form";

interface CommonInputProps {
  name: string;
  control: any;
  [key: string]: any;
  error?: string;
}

function CommonInput({ name, control, error, ...rest }: CommonInputProps) {
  return (
    <div className="mb-4">
      <Controller
        name={name}
        control={control}
        defaultValue=""
        render={({ field }) => (
          <input
            {...field}
            {...rest}
            className={`w-full p-2 border rounded-md ${
              error ? "border-red-500" : "border-gray-300"
            }`}
          />
        )}
      />
      {error && <p className="text-red-300 text-sm mt-1">{error}</p>}
    </div>
  );
}

export default CommonInput;
