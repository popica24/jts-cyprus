import { Controller, SubmitHandler, useForm } from "react-hook-form";
import Header from "./components/Header";
import { SystemRequestProps } from "../../utils/types";
import ClientType from "./components/ClientType";
import SystemPower from "./components/SystemPower";
import InstallmentType from "./components/InstallmentType";
import OrientationType from "./components/OrientationType";
import SolarPanelsType from "./components/SolarPanelsType";

const Configurator = () => {
  const {
    handleSubmit,
    control,
    resetField,
    formState: { errors },
  } = useForm<SystemRequestProps>();

  const onSubmit: SubmitHandler<SystemRequestProps> = (data) =>
    console.log(data);
  return (
    <div className="max-w-xl mx-auto">
      <Header />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="ClientType"
          control={control}
          render={({ field }) => <ClientType field={field} />}
        />
        <Controller
          name="System"
          control={control}
          render={({ field }) => (
            <SystemPower field={field} resetField={resetField} />
          )}
        />
        <Controller
          name="Installment"
          control={control}
          render={({ field }) => <InstallmentType field={field} />}
        />
        <Controller
          name="Orientation"
          control={control}
          render={({ field }) => <OrientationType field={field} />}
        />
        {/* <Controller
          name="SolarPanels"
          control={control}
          render={({ field }) => <SolarPanelsType field={field} />}
        /> */}
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Configurator;
