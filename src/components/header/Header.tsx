import { Component } from 'react';
import './Header.css';
import { Form } from '../../common/form/Form';
import { SearchBy } from '../../interface/common';

interface HeaderProps {
  inputData: string;
  searchBy: SearchBy;
  setInputValue(data: string): void;
  setRadioValue(value: SearchBy): void;
  handleBtnClick(): void;
}

export class Header extends Component<HeaderProps, { hasError: boolean }> {
  state = {
    hasError: false,
  };

  makeError(): void {
    this.setState({ hasError: true }, () => {
      throw new Error('Not real error!');
    });
  }

  render() {
    return (
      <header>
        <Form
          inputData={this.props.inputData}
          searchBy={this.props.searchBy}
          setInputValue={this.props.setInputValue}
          setRadioValue={this.props.setRadioValue}
          handleBtnClick={this.props.handleBtnClick}
        />
        <button onClick={this.makeError.bind(this)}>Make error!</button>
      </header>
    );
  }
}
