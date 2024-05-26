import React, { FC } from "react";

interface IFooterProps {
  style?: React.CSSProperties;
}

export const Footer: FC<IFooterProps> = (props) => {
  return (
    <footer style={props.style}>
      <p>© 2024 pet-project</p>
    </footer>
  );
};
