const AboutDetailField = ({
  title,
  value,
}: {
  title: string;
  value: string;
}) => {
  return (
    <div className="flex items-center justify-between w-full py-3">
      <p className="w-[34%] font-bold">{title}:</p>
      <p className="flex-1">{value}</p>
    </div>
  );
};

export default AboutDetailField;
