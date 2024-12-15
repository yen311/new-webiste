import * as SiIcons from "react-icons/si";

const IconRenderer = ({ icon, color }) => {
  // Access the icon dynamically using bracket notation
  const IconComponent = SiIcons[icon];

  return <IconComponent color={color} />;
};

export default IconRenderer;
