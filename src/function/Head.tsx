/** @jsxImportSource restyle */
import { FC, useState } from "react";
import { css, styled } from "restyle";

export const Head: FC = () => {
  const [className, styles] = css({
    color: "red",
  });

  const [gap, setGap] = useState<number>(0);

  return (
    <div>
      <h2 className={className}>Head</h2>
      <title>Playground react 19</title>

      <div
        css={{
          color: "hotpink",
        }}
      >
        hoge
      </div>
      {styles}
      <Button onClick={() => setGap((v) => v + 1)}>restyle button</Button>

      <div
        css={{
          display: "flex",
          flexDirection: "column",
          color: "hotpink",
          gap: `${gap}px`,
        }}
      >
        {Array.from({ length: 10 }).map((_v, i) => (
          <div key={i}>{i}</div>
        ))}
      </div>
    </div>
  );
};

const Button = styled("button", {
  padding: "0.5rem 1rem",
  borderRadius: "4px",
  backgroundColor: "blue",
  color: "white",
});
