import React from "react";

type ButtonSelectorT = {
  description: string;
  fontSize?: string;
  paddingX?: string;
  paddingY?: string;
};

const ButtonSelector: React.FC<ButtonSelectorT> = ({
  description,
  fontSize,
  paddingX,
  paddingY,
}) => {
  return (
    <div
      className="border-2 border-gray-800 font-medium urban flex items-center justify-center rounded-lg"
      style={{
        paddingTop: paddingY,
        paddingBottom: paddingY,
        paddingLeft: paddingX,
        paddingRight: paddingX,
      }}
    >
      <p
        style={{
          fontSize: fontSize,
        }}
      >
        {description}
      </p>
    </div>
  );
};

export default ButtonSelector;
