type tbuttonProps = {
  name: string;
  onClick: (e: string) => void;
  active: boolean;
};

export default function TButton({ name, onClick, active }: tbuttonProps) {
  const colorActive = active ? "bg-sky-600" : "bg-gray-600"
  return (
    <button
      className={`animate-[bounce_1s] ${colorActive} text-white hover:bg-gray-400`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
}
