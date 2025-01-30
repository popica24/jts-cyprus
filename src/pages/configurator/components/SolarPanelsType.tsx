// @ts-ignore
import { RadioGroup, RadioButton } from "react-radio-buttons";

import { ControllerRenderProps } from "react-hook-form";
import { SystemRequestProps } from "../../../utils/types";
import SectionHeader from "./SectionHeader";

type Props = {
  field: ControllerRenderProps<SystemRequestProps, "SolarPanels">;
};

const SolarPanelsType = ({ field }: Props) => {
  return (
    <>
      <SectionHeader title="Solar Panels Type" className="text-center my-3" />
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
      </RadioGroup>
    </>
  );
};

export default SolarPanelsType;
