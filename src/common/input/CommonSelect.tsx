import React from "react";
import { Controller } from "react-hook-form";

interface CommonInputProps {
  name: string;
  control: any;
  [key: string]: any;
  error: any;
}

function CommonSelect({ name, control, options, error }: CommonInputProps) {
  return (
    <div>
      <Controller
        name={name}
        control={control}
        defaultValue=""
        render={({ field }) => (
          <select {...field}>
            {options?.length > 0 &&
              options.map(
                (item: { value: string; label: string }, index: number) => {
                  return (
                    <option key={index} value={item?.value}>
                      {item?.label}
                    </option>
                  );
                }
              )}
          </select>
        )}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}

export default CommonSelect;
