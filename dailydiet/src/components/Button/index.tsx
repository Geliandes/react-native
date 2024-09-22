import { PressableProps, Text } from "react-native";
import * as S from './styles';
import { PencilSimpleLine, Plus, Trash } from "phosphor-react-native";
import { useState } from "react";

type ButtonProps = PressableProps &{
  text: string;
  type?: S.ButtonTypeStyleProps;
  icon?: S.ButtonIconStyleProps;
  fullWidth?: S.ButtonFullWidthStyleProps;
};

export function Button({
  text,
  type = "PRIMARY",
  icon,
  fullWidth,
  ...rest
}: ButtonProps) {

  const [isPressed, setIsPressed] = useState(false);

  const handlePressIn = () => setIsPressed(true);
  const handlePressOut = () => setIsPressed(false);
  
  const icons = {
    PLUS: <Plus size={18} color={type === "PRIMARY" ? "white" : "black"} />,
    EDIT: <PencilSimpleLine size={18} color={type === "PRIMARY" ? "white" : "black"} />,
    DELETE: <Trash size={18} color={type === "PRIMARY" ? "white" : "black"} />
  };

  return (
    <S.Container 
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      isPressed={isPressed}
      type={type}
      icon={icon}
      fullWidth={fullWidth} 
      {...rest}
    >   
      {icon ? icons[icon] : null}
      <S.ButtonText type={type}>{text}</S.ButtonText>
    </S.Container>
  );
}
