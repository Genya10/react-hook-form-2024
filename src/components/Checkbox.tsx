import { Controller } from "react-hook-form";
import { ControlProps } from "../types/form";

export const Checkbox = ({ control }: ControlProps) => {
  return (
    <Controller
      control={control}
      name="isImportant"
      render={({ field }) => (
        <button
          style={{
            display: "block",
            margin: "10px auto",
           // marginLeft: "50px",
          }}
          onClick={(e) => {
            e.preventDefault();
            field.onChange(!field.value);
          }}
        >
          {field.value ? "Important" : "Not important"}
        </button>
      )}
    />
  );
};
