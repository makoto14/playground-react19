import { useEffect, useRef } from "react";
import { RefProps } from "./function/RefProps";
import { UseTransition } from "./function/UseTransition";
import { Head } from "./function/Head";
import { Use } from "./function/Use";

export const App = () => {
  const ref = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    ref.current?.focus();
  }, []);

  return (
    <div>
      <RefProps ref={ref}>children</RefProps>
      <UseTransition />
      <Head />
      <Use />
    </div>
  );
};
