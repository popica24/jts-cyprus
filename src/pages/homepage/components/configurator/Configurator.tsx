import { useState } from "react";
import ConfiguratorButton from "./components/ConfiguratorButton";
import SystemPower from "./components/SystemPower";
import ConfiguratorTitle from "./components/ConfiguratorTitle";
import { system } from "../../../../utils/types";
import { monofazedSystems } from "../../../../utils/systems";

type Orientation = {
  East: boolean;
  West: boolean;
  North: boolean;
};

const Configurator = () => {
  const BASE_PRICE = 100;

  const [totalPrice, setTotalPrice] = useState(BASE_PRICE);
  const [selectedSystem, setSelectedSystem] = useState<system>(
    monofazedSystems[0]
  );
  const [orientation, setOrientation] = useState<Orientation | null>(null);

  const [selectedOptions, setSelectedOptions] = useState({
    roofSheetMetal: 0,
    roofTile: 0,
    groundStructureProvidedByClient: 0,
    groundStructure: Math.ceil(400 * selectedSystem.kw),
    flatRoofClientStructure: 0,
    flatRoofDomoStructure: Math.ceil(450 * selectedSystem.kw),
  });

  const handleOptionClick = (optionKey, price) => {
    setSelectedOptions((prevOptions) => {
      const newOptions = { ...prevOptions };
      const currentPriceDiff = prevOptions[optionKey];

      if (currentPriceDiff === 0) {
        // Option selected, subtract its price from the total
        setTotalPrice((prevTotal) => prevTotal + price);
        newOptions[optionKey] = -price;
      } else {
        // Option deselected, revert the difference from the total
        setTotalPrice((prevTotal) => prevTotal - currentPriceDiff);
        newOptions[optionKey] = currentPriceDiff + price;
      }

      return newOptions;
    });
  };

  return (
    <>
      <form className="flex flex-col items-center justify-center w-[90vmin] md:w-[600px] mx-auto">
        {/* Mounting Frame */}
        <div className="w-[90vmin] md:max-w-[600px] mt-2">
          <ConfiguratorTitle title="Mounting Frame" />
          <ConfiguratorButton
            price={`${selectedOptions.roofSheetMetal > 0 ? "+" : ""}${
              selectedOptions.roofSheetMetal
            } Lei`}
            text="Inclined Roof - Sheet Metal"
            handleClick={() =>
              handleOptionClick("roofSheetMetal", 0 * selectedSystem.kw)
            }
            active={selectedOptions.roofSheetMetal !== 0}
          />

          <ConfiguratorButton
            price={`${selectedOptions.roofTile > 0 ? "+" : ""}${
              selectedOptions.roofTile
            } Lei`}
            text="Inclined Roof - Tile"
            handleClick={() => handleOptionClick("roofTile", 0 * selectedSystem.kw)}
            active={selectedOptions.roofTile !== 0}
          />

          <ConfiguratorButton
            price={`${
              selectedOptions.groundStructureProvidedByClient > 0 ? "+" : ""
            }${selectedOptions.groundStructureProvidedByClient} Lei`}
            text="Ground + Structure Provided by Client"
            handleClick={() =>
              handleOptionClick(
                "groundStructureProvidedByClient",
                0 * selectedSystem.kw
              )
            }
            active={selectedOptions.groundStructureProvidedByClient !== 0}
          />

          <ConfiguratorButton
            price={`${selectedOptions.groundStructure > 0 ? "+" : ""}${
              selectedOptions.groundStructure
            } Lei`}
            text="Ground + Ground Structure"
            handleClick={() =>
              handleOptionClick(
                "groundStructure",
                Math.ceil(400 * selectedSystem.kw)
              )
            }
            active={selectedOptions.groundStructure !== 0}
          />

          <ConfiguratorButton
            price={`${selectedOptions.flatRoofClientStructure > 0 ? "+" : ""}${
              selectedOptions.flatRoofClientStructure
            } Lei`}
            text="Flat Roof + Client-Supplied Structure"
            handleClick={() =>
              handleOptionClick(
                "flatRoofClientStructure",
                0 * selectedSystem.kw
              )
            }
            active={selectedOptions.flatRoofClientStructure !== 0}
          />

          <ConfiguratorButton
            price={`${selectedOptions.flatRoofDomoStructure > 0 ? "+" : ""}${
              selectedOptions.flatRoofDomoStructure
            } Lei`}
            text="Flat Roof + Domo-Type Structure"
            handleClick={() =>
              handleOptionClick(
                "flatRoofDomoStructure",
                Math.ceil(450 * selectedSystem.kw)
              )
            }
            active={selectedOptions.flatRoofDomoStructure !== 0}
          />
        </div>
        {/* Mounting Frame */}

        {/* System Power */}
        <SystemPower setSystem={setSelectedSystem} system={selectedSystem} />
        {/* System Power */}

        {/* Panels */}
        <div className="w-[90vmin] md:max-w-[600px] mt-2">
          <ConfiguratorTitle title="Solar Panels" />
          <ConfiguratorButton
            price={`+${0 * selectedSystem.kw} Lei`}
            text="Canadian"
          />
          <ConfiguratorButton
            price={`+${0 * selectedSystem.kw} Lei`}
            text="Aiko"
          />
          <ConfiguratorButton
            price={`+${0 * selectedSystem.kw} Lei`}
            text="Longi"
          />
          <ConfiguratorButton
            price={`+${Math.ceil(400 * selectedSystem.kw)} Lei`}
            text="Trina"
          />
        </div>
        {/* Panels */}

        {/* Orientation */}
        <div className="w-[90vmin] md:max-w-[600px] mt-2">
          <ConfiguratorTitle title="Orientation" />
          <div className="flex flex-row items-center justify-center">
            <span className="px-6 py-3 mx-2 text-lg text-center border-2 roudned min-w-[100px] cursor-pointer">
              East
            </span>
            <span className="px-6 py-3 mx-2 text-lg text-center border-2 roudned min-w-[100px] cursor-pointer">
              West
            </span>
            <span className="px-6 py-3 mx-2 text-lg text-center border-2 roudned min-w-[100px] cursor-pointer">
              North
            </span>
          </div>
        </div>
        {/* Orientation */}
      </form>
    </>
  );
};

export default Configurator;
