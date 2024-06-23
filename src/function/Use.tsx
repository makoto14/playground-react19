import { FC, Suspense, use, useState } from "react";

export const Use: FC = () => {
  const [id, setId] = useState<number>(1);
  return (
    <div>
      <h2>Use</h2>
      <label>
        id
        <input
          value={id}
          onChange={(e) => setId(e.target.valueAsNumber)}
          type="number"
        />
      </label>
      <Suspense fallback="Loading...">
        <Children id={id} />
      </Suspense>
    </div>
  );
};

const Children: FC<{ id: number }> = ({ id }) => {
  const data = use<string>(fetchPoke(id));
  return <>{data}</>;
};

const fetchPoke = async (id: number): Promise<string> => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const pokeStr = await res.json();
  return JSON.stringify(pokeStr);
};
