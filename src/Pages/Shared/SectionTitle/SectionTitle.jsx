const SectionTitle = ({ title }) => {
  return (
    <div className="flex justify-center">
      <h1 className="text-3xl md:text-5xl my-14 md:my-24 font-bold border-b-4 text-white border-white p-5 inline-block ">
        {title}
      </h1>
    </div>
  );
};

export default SectionTitle;
