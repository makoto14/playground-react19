import { FC, useState, useTransition } from "react";

export const UseTransition: FC = () => {
  const [poke, setPoke] = useState<string>("");
  const [isPending, startTransition] = useTransition();

  const handleClick = () => {
    startTransition(async () => {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
      const pokeStr = await res.json();
      setPoke(pokeStr);
    });
  };

  return (
    <div>
      <h2>useTransition</h2>
      <button onClick={handleClick} disabled={isPending}>
        start transition
      </button>
      <p>{JSON.stringify(poke)}</p>
    </div>
  );
};
