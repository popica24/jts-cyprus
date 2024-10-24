type Props = {
  text: string;
  price: string;
  handleClick: () => void;
  active: boolean
};

const ConfiguratorButton = ({ text, price, handleClick }: Props) => {
  return (
    <span
      onClick={handleClick}
      className="flex justify-between items-center p-3 border border-gray-300 my-2 rounded-md"
    >
      <p className="font-medium text-base md:text-lg">{text}</p>
      <p className="text-gray-500">{price}</p>
    </span>
  );
};

export default ConfiguratorButton;
