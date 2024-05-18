import { useColor } from "@/context/ColorContext";
import { Button } from "./button";

interface ColorButtonProps {
  color: string;
}

const ColorButton: React.FC<ColorButtonProps> = ({ color }) => {
  const { changeColor } = useColor();

  const handleClick = () => {
    changeColor(color);
  };

  return (
    <Button
      className={`bg-${color}-400 rounded-full w-8 h-8 hover:bg-${color}-700`}
      onClick={handleClick}
    ></Button>
  );
};

export default ColorButton;
