// @ts-ignore
import { RadioGroup, RadioButton } from "react-radio-buttons";

import { ControllerRenderProps } from "react-hook-form";
import {
  MountingStructureProps,
  SystemRequestProps,
} from "../../../utils/types";
import SectionHeader from "./SectionHeader";

type Props = {
  field: ControllerRenderProps<SystemRequestProps, "Installment">;
};

const InstallmentType = ({ field }: Props) => {
  return (
    <>
      <SectionHeader title="Mounting Sturcture" className="text-center my-3" />
      <RadioGroup onChange={field.onChange}>
        <RadioButton
          iconSize={"0px"}
          iconInnerSize={"0px"}
          pointColor={"#60a5fa"}
          rootColor={"#000000"}
          value={MountingStructureProps.RoofTile}
        >
          {MountingStructureProps.RoofTile}
        </RadioButton>
        <RadioButton
          iconSize={"0px"}
          iconInnerSize={"0px"}
          pointColor={"#60a5fa"}
          rootColor={"#000000"}
          value={MountingStructureProps.MetalRoofing}
        >
          {MountingStructureProps.MetalRoofing}
        </RadioButton>
        <RadioButton
          iconSize={"0px"}
          iconInnerSize={"0px"}
          pointColor={"#60a5fa"}
          rootColor={"#000000"}
          value={MountingStructureProps.Ground}
        >
          {MountingStructureProps.Ground}
        </RadioButton>
      </RadioGroup>
    </>
  );
};

export default InstallmentType;
