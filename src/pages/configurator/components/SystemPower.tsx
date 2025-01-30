import { ControllerRenderProps, UseFormResetField } from "react-hook-form";
import SectionHeader from "./SectionHeader";
import { SystemRequestProps, SystemTypeProps } from "../../../utils/types";
import { MonofazedSystems, TrifazedSystems } from "../../../utils/systems";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useState } from "react";

type Props = {
  field: ControllerRenderProps<SystemRequestProps, "System">;
  resetField: UseFormResetField<SystemRequestProps>;
};

const SystemPower = ({ field, resetField }: Props) => {
  const [systemType, setSystemType] = useState<SystemTypeProps>(
    SystemTypeProps.SinglePhased
  );
  const handleSystemChange = (system: SystemTypeProps) => {
    resetField("System");
    setSystemType(system);

    const systemTypeTitle = document.getElementById("systemTypeTitle");
    if (systemTypeTitle) {
      if (system === SystemTypeProps.SinglePhased) {
        systemTypeTitle.innerHTML = "Single Phased Systems";
      } else if (system === SystemTypeProps.TriplePhased) {
        systemTypeTitle.innerHTML = "Triple Phased Systems";
      }
    }
  };

  return (
    <>
      <SectionHeader title="System Power" className="text-center mt-8 mb-4" />
      <p
        id="systemTypeTitle"
        className={`mb-4 text-xl text-center font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-3xl`}
      >
        Single Phased Systems
      </p>
      <div className="grid gap-6 mb-6 sm:grid-cols-2">
        <div>
          <label
            htmlFor="system_power"
            className="block mb-1 ms-1 text-sm text-gray-500"
          >
            System power (kW)
          </label>
          <input
            readOnly
            type="text"
            id="system_power"
            className="border-b-2 border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            placeholder={
              field.value?.kw.toString() || "Va rugam sa selectati un sistem"
            }
          />
        </div>
        <div>
          <label
            htmlFor="system_panels"
            className="block mb-1 ms-1 text-sm text-gray-500"
          >
            Number of panels
          </label>
          <input
            type="text"
            id="system_panels"
            className="border-b-2 border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
            placeholder={
              field.value?.numarPanouri.toString() ||
              "Va rugam sa selectati un sistem"
            }
          />
        </div>
      </div>
      <div className="flex flex-row flex-wrap justify-center sm:justify-start">
        {systemType === SystemTypeProps.SinglePhased && (
          <>
            {MonofazedSystems.map((sys, i) => (
              <SelectSystemButton
                onClick={() => field.onChange(sys)}
                selected={
                  field.value?.id - 1 === i &&
                  systemType == SystemTypeProps.SinglePhased
                }
                key={i}
                kw={sys.kw}
              />
            ))}
            <span
              onClick={() => handleSystemChange(SystemTypeProps.TriplePhased)}
              className="border-b-2 w-min text-center p-1 m-2 cursor-pointer transition-colors border-[#60a5fa] text-[#60a5fa] whitespace-nowrap inline-flex items-center"
            >
              See Triple Phased Systems
              <FaArrowRight className="ms-1 mt-0.5" />
            </span>
          </>
        )}
        {systemType === SystemTypeProps.TriplePhased && (
          <>
            <span
              onClick={() => handleSystemChange(SystemTypeProps.SinglePhased)}
              className="border-b-2 w-min text-center p-1 m-2 cursor-pointer transition-colors border-[#60a5fa] text-[#60a5fa] whitespace-nowrap inline-flex items-center"
            >
              <FaArrowLeft className="ms-1 mt-0.5" />
              See Single Phased Systems
            </span>
            {TrifazedSystems.map((sys, i) => (
              <SelectSystemButton
                onClick={() => field.onChange(sys)}
                selected={
                  field.value?.id - 1 === i &&
                  systemType == SystemTypeProps.TriplePhased
                }
                key={i}
                kw={sys.kw}
              />
            ))}
          </>
        )}
      </div>
    </>
  );
};

export default SystemPower;

const SelectSystemButton = ({
  onClick,
  selected,
  kw,
}: {
  onClick: () => void;
  selected: boolean;
  kw: number;
}) => {
  return (
    <span
      onClick={onClick}
      className={`border-2 rounded-md w-[80px] text-center py-1 m-2 cursor-pointer transition-colors hover:bg-gray-100 ${
        selected && "border-[#60a5fa] text-[#60a5fa]"
      }`}
    >
      {kw}kW
    </span>
  );
};
