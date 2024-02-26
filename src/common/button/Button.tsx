import { Component, ReactNode } from 'react';
import './Button.css';

export interface ButtonProps {
  btnContent: string;
  handleClick: () => void;
}

export class Button extends Component<ButtonProps> {
  render(): ReactNode {
    return (
      <button onClick={this.props.handleClick}>{this.props.btnContent}</button>
    );
  }
}
