import React, { Children, FC } from "react";

interface ContainerProps {
  children: React.ReactNode;
}

export const Container: FC<ContainerProps> = ({ children }) => {
  return <div className="container">{children}</div>;
};
