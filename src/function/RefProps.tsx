import { FC, ReactNode, RefObject } from "react";

type Props = {
  ref?: RefObject<HTMLButtonElement | null>;
  children: ReactNode;
};

export const RefProps: FC<Props> = ({ ref, children }) => {
  return (
    <div>
      <h2>Ref Props</h2>
      <button ref={ref}>{children}</button>
    </div>
  );
};
