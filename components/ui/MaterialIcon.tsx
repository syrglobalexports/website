import React from "react";

interface MaterialIconProps {
  name: string;
  className?: string;
  size?: number;
}

export const MaterialIcon: React.FC<MaterialIconProps> = ({
  name,
  className = "",
  size,
}) => {
  const style = size ? { fontSize: `${size}px` } : undefined;
  return (
    <span
      className={`material-symbols-outlined ${className}`}
      style={style}
    >
      {name}
    </span>
  );
};
