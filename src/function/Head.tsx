/** @jsxImportSource restyle */
import { FC } from "react";
import { css, styled } from "restyle";

export const Head: FC = () => {
  const [className, styles] = css({
    color: "red",
  });

  return (
    <div>
      <h2 className={className}>Head</h2>
      <title>react 19</title>
      <div
        css={{
          color: "hotpink",
        }}
      >
        hoge
      </div>
      {styles}
      <Button>restyle button</Button>
    </div>
  );
};

const Button = styled("button", {
  padding: "0.5rem 1rem",
  borderRadius: "4px",
  backgroundColor: "blue",
  color: "white",
});
