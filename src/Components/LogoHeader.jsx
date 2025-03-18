import { TabIcon } from "../assets/icons/index";

const LogoHeader = ({ coloText = "text-text-light" }) => {
  return (
    <div>
      <h2
        className={`text-md font-bold ${coloText} flex gap-2 items-center md:text-2xl`}
      >
        <TabIcon coloText={coloText} />
        TaskFlow
      </h2>
    </div>
  );
};

export default LogoHeader;
