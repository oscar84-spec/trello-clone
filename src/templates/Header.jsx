const Header = ({ children, clases }) => {
  return (
    <header
      className={`w-full h-12 flex justify-between items-center shadow-xl px-2 md:px-10 lg:px-16 xl:px-20 ${clases} `}
    >
      {children}
    </header>
  );
};

export default Header;
