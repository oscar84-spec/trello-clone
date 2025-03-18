const Sections = ({ alto = "h-screen", clases, children }) => {
  return (
    <section className={`px-2 md:px-10 lg:px-16 xl:px-20 ${alto} ${clases}`}>
      {children}
    </section>
  );
};

export default Sections;
