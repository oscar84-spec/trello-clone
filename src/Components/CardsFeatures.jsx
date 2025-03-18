const CardsFeatures = ({ card }) => {
  const { icon, title, description } = card;
  return (
    <div className="w-full h-48 flex flex-col gap-2 border-2 border-zinc-300 rounded-md p-2 md:w-62 xl:w-72">
      <span>{icon}</span>
      <h3 className="text-2xl font-medium text-text-light">{title}</h3>
      <p className="text-sm text-text-opacity-light text-pretty">
        {description}
      </p>
    </div>
  );
};

export default CardsFeatures;
