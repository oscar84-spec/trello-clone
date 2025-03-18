import { Button } from "../Components/index";

const CardPlan = ({ plan }) => {
  const { icon, title, description, price, features, button } = plan;
  return (
    <div className="w-full flex flex-col justify-between gap-2 border-2 border-zinc-300 rounded-md p-2 md:w-76">
      <div className="flex flex-col gap-2">
        <h3 className="text-3xl font-semibold">{title}</h3>
        <span className="block text-text-opacity">{description}</span>
        <span className="block text-2xl font-medium">{price}</span>
      </div>
      <ul className="flex flex-col gap-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            {icon} {feature}
          </li>
        ))}
      </ul>
      <Button clase="md:text-lg">{button}</Button>
    </div>
  );
};

export default CardPlan;
