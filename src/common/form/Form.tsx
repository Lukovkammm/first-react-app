import { Component, ReactNode } from 'react';
import './Form.css';
import { Button } from '../button/Button';
import { SearchBy } from '../../interface/common';

export interface InputProps {
  inputData: string;
  searchBy: SearchBy;
  setInputValue(data: string): void;
  setRadioValue(value: SearchBy): void;
  handleBtnClick(): void;
}

export class Form extends Component<InputProps> {
  render(): ReactNode {
    return (
      <>
        <input
          type="text"
          name="input-text"
          defaultValue={this.props.inputData}
          onChange={(e) => this.props.setInputValue(e.target.value)}
        />

        <Button
          btnContent="Search"
          handleClick={() => this.props.handleBtnClick()}
        ></Button>

        <div className="radio">
          <input
            type="radio"
            id="by_name"
            name="search_by"
            value="by name"
            defaultChecked={this.props.searchBy === 'by name'}
            onChange={(e) =>
              this.props.setRadioValue(e.target.value as SearchBy)
            }
          />
          <label htmlFor="by_name">by name</label>
          <input
            type="radio"
            id="by_food"
            name="search_by"
            value="by food"
            defaultChecked={this.props.searchBy === 'by food'}
            onChange={(e) =>
              this.props.setRadioValue(e.target.value as SearchBy)
            }
          />
          <label htmlFor="by_food">by food</label>
        </div>
      </>
    );
  }
}
