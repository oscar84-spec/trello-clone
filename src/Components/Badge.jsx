const Badge = ({ prioridad }) => {
  return (
    <span
      className={`inline-block whitespace-nowrap rounded-[0.27rem] px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline text-[0.75em] font-bold leading-none
${
  prioridad === "Alto"
    ? "bg-red-200 text-red-600"
    : prioridad === "Medio"
    ? "bg-yellow-200 text-yellow-600"
    : "bg-green-200 text-green-600"
}`}
    >
      {prioridad}
    </span>
  );
};

export default Badge;
