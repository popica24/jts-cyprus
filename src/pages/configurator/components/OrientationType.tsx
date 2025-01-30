import { SystemRequestProps } from "../../../utils/types";
import { ControllerRenderProps } from "react-hook-form";
import SectionHeader from "./SectionHeader";

type Props = {
  field: ControllerRenderProps<SystemRequestProps, "Orientation">;
};

const OrientationType = ({ field }: Props) => {
  const toggleOrientation = (direction: keyof typeof field.value) => {
    field.onChange({
      ...field.value,
      [direction]: !field.value?.[direction] || false,
    });
  };

  return (
    <>
      <SectionHeader title="Panel Orientation" className="text-center my-3" />
      <div className="flex flex-row items-center justify-center">
        <span
          onClick={() => toggleOrientation("West")}
          className={`w-1/3 text-xl py-2 border text-center border-black rounded-md shadow-md cursor-pointer transition-colors hover:bg-gray-100 ${
            field.value?.West ? "border-blue-600 text-blue-600" : "border-black"
          } `}
        >
          West
        </span>
        <span
          onClick={() => toggleOrientation("South")}
          className={`w-1/3 text-xl py-2 border text-center border-black rounded-md shadow-md cursor-pointer transition-colors hover:bg-gray-100 ${
            field.value?.South
              ? "border-blue-600 text-blue-600"
              : "border-black"
          } mx-5 `}
        >
          South
        </span>
        <span
          onClick={() => toggleOrientation("East")}
          className={`w-1/3 text-xl py-2 border text-center border-black rounded-md shadow-md cursor-pointer transition-colors hover:bg-gray-100 ${
            field.value?.East ? "border-blue-600 text-blue-600" : "border-black"
          } `}
        >
          East
        </span>
      </div>
    </>
  );
};

export default OrientationType;
