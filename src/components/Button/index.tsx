import { ButtonContainer } from "./styles";
import { IButtonProps } from "./types";

const Button = ({ title, onClick, type = "button", disabled = false }: IButtonProps) => {
  return (
    <ButtonContainer 
      onClick={onClick} 
      type={type} 
      disabled={disabled}
    >
      {title}
    </ButtonContainer>
  );
};

export default Button;
