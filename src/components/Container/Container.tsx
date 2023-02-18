import React, { FC } from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const Container: FC<ContainerProps> = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};
