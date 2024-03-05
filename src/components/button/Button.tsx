import './Button.css';

export interface ButtonProps {
  content: string;

  handleClick?: () => void;
}

function Button(props: ButtonProps) {
  return (
    <button onClick={props.handleClick}>{props.content.toUpperCase()}</button>
  );
}

export default Button;
