import React, { FC } from "react";

interface IContentProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export const Content: FC<IContentProps> = ({ children, style }) => {
  return <div style={style}>{children}</div>;
};
