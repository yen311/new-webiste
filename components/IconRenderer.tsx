import * as SiIcons from "react-icons/si";
import * as DiIcons from "react-icons/di";

const IconRenderer = ({ icon, color }) => {
  // Access the icon dynamically using bracket notation
  let IconComponent = SiIcons[icon];

  if (!IconComponent) {
    IconComponent = DiIcons[icon];
  }

  return IconComponent && <IconComponent color={color} />;
};

export default IconRenderer;
