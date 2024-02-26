import { Component } from 'react';
import './App.css';
import { Header } from './components/header/Header';
import { Main } from './components/main/Main';
import { CardData } from './common/card/Card';
import { SearchBy } from './interface/common';
import { getMainData } from './api/data';
import { ErrorBoundary } from './common/error/Error';

export class App extends Component {
  state = {
    cards: [] as CardData[],
    inputData: localStorage.getItem('searchData') ?? '',
    searchBy: (localStorage.getItem('searchBy') as SearchBy) ?? SearchBy.Name,
  };

  constructor(props: object | Readonly<object>) {
    super(props);
    this.setInputValue = this.setInputValue.bind(this);
    this.setRadioValue = this.setRadioValue.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
  }

  async componentDidMount() {
    this.setState({
      cards: await getMainData(this.state.searchBy, this.state.inputData),
    });
  }

  setInputValue(value: string): void {
    this.setState({
      inputData: value,
    });
  }

  setRadioValue(value: SearchBy): void {
    this.setState({
      searchBy: value,
    });
  }

  async handleBtnClick() {
    localStorage.setItem('searchData', this.state.inputData);
    localStorage.setItem('searchBy', this.state.searchBy);

    this.setState({
      cards: await getMainData(this.state.searchBy, this.state.inputData),
    });
  }

  render() {
    return (
      <ErrorBoundary>
        <Header
          inputData={this.state.inputData}
          searchBy={this.state.searchBy}
          setInputValue={this.setInputValue}
          setRadioValue={this.setRadioValue}
          handleBtnClick={this.handleBtnClick}
        />
        <Main cards={this.state.cards} />
      </ErrorBoundary>
    );
  }
}

export default App;
