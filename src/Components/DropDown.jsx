const DropDown = ({ children }) => {
  return (
    <div className="absolute p-3 shadow-md z-10 top-12 left-1/2 w-1/2 rounded-md bg-white flex flex-col gap-3">
      {children}
    </div>
  );
};

export default DropDown;
