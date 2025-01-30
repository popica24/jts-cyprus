// @ts-ignore
import { RadioGroup, RadioButton } from "react-radio-buttons";

import SectionHeader from "./SectionHeader";
import { ControllerRenderProps } from "react-hook-form";
import { ClientTypeProps, SystemRequestProps } from "../../../utils/types";

type Props = {
  field: ControllerRenderProps<SystemRequestProps, "ClientType">;
};

const ClientType = ({ field }: Props) => {
  return (
    <>
      <SectionHeader title="Client Type" className="text-center my-3" />
      <RadioGroup onChange={field.onChange} horizontal>
        <RadioButton
          iconSize={"0px"}
          iconInnerSize={"0px"}
          pointColor={"#60a5fa"}
          rootColor={"#000000"}
          value={ClientTypeProps.Company}
        >
          {ClientTypeProps.Company}
        </RadioButton>
        <RadioButton
          iconSize={"0px"}
          iconInnerSize={"0px"}
          pointColor={"#60a5fa"}
          rootColor={"#000000"}
          value={ClientTypeProps.Individual}
        >
          {ClientTypeProps.Individual}
        </RadioButton>
      </RadioGroup>
    </>
  );
};

export default ClientType;
