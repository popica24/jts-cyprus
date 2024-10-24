import React, { useState } from "react";
import {
  monofazedSystems,
  trifazedSystems,
} from "../../../../../utils/systems";
import { system } from "../../../../../utils/types";
import ConfiguratorTitle from "./ConfiguratorTitle";

type Props = {
  system: system;
  setSystem: React.Dispatch<React.SetStateAction<system>>;
};

const SystemPower = ({ system, setSystem }: Props) => {
  const [selectedOption, setSelctedOption] = useState(0);

  const [page, setPage] = useState(1);

  const handleChangePage = (pageNumber: number) => {
    setPage(pageNumber);
    if (pageNumber == 1) {
      setSystem(monofazedSystems[0]);
    }
    if (pageNumber == 2) {
      setSystem(trifazedSystems[0]);
    }
  };

  const handleSystemSelect = (i: number) => {
    if (page == 1) {
      setSystem(monofazedSystems[i]);
      setSelctedOption(i);
    }
    if (page == 2) {
      setSystem(trifazedSystems[i]);
      setSelctedOption(i);
    }
    if (page == 3) {
      setSystem(monofazedSystems[i]);
      setSelctedOption(i);
    }
  };

  return (
    <div className="max-w-[90vmin] md:w-[600px] mx-auto mt-2">
      <ConfiguratorTitle title="System Power" />
      <div className="grid grid-cols-2 my-4 gap-x-3">
        <div className="col-span-1">
          <fieldset className="w-full my-2 border-2 border-[#00000059] pb-2">
            <legend className="ms-5 px-2 inline-flex text-[14px]">
              System power kW
            </legend>
            <input
              inputMode="text"
              className="w-full px-4 focus-visible:outline-0"
              value={system.putereSistem}
              readOnly
            />
          </fieldset>
        </div>
        <div className="col-span-1">
          <fieldset className="w-full my-2 border-2 border-[#00000059] pb-2">
            <legend className="ms-5 px-2 inline-flex text-[14px]">
              Numer of panels
            </legend>
            <input
              inputMode="text"
              className="w-full px-4 focus-visible:outline-0"
              value={system.numarPanouri}
              readOnly
            />
          </fieldset>
        </div>
      </div>
      <div className="flex flex-row flex-wrap items-start justify-start">
        {page == 1 &&
          monofazedSystems.map((sys, i) => (
            <div
              key={i}
              className="p-1 m-1 border cursor-pointer text-sm w-min whitespace-nowrap"
              onClick={() => handleSystemSelect(i)}
            >
              {sys.putereSistem}
            </div>
          ))}
        {page == 2 &&
          trifazedSystems.map((sys, i) => (
            <div
              key={i}
              className="p-1 m-1 border cursor-pointer text-sm w-min whitespace-nowrap"
              onClick={() => handleSystemSelect(i)}
            >
              {sys.putereSistem}
            </div>
          ))}
      </div>
      <div className="flex whitespace-nowrap flex-col md:flex-row items-center justify-evenly my-4 text-sm">
        <span
          className="p-1 mx-1 border border-gray-300 rounded-md w-full md:w-1/3 text-center"
          onClick={() => handleChangePage(1)}
        >
          Sisteme monofazate
        </span>
        <span
          className="p-1 mx-1 border border-gray-300 rounded-md  w-full md:w-1/3 my-2 md:my-0 text-center"
          onClick={() => handleChangePage(2)}
        >
          Sisteme trifazate
        </span>
        <span
          className="p-1 mx-1 border border-gray-300 rounded-md  w-full md:w-1/3 text-center"
          onClick={() => handleChangePage(3)}
        >
          Sisteme victron monofazate
        </span>
      </div>
    </div>
  );
};

export default SystemPower;
