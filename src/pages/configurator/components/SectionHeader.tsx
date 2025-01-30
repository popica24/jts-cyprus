type Props = {
  title: string;
  className?: string;
};

const SectionHeader = ({ title, className }: Props) => {
  return (
    <p
      className={`mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl ${className}`}
    >
      {title}
    </p>
  );
};

export default SectionHeader;
