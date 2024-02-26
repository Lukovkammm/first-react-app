import { Component } from 'react';
import './Main.css';
import { Card, CardData } from '../../common/card/Card';
import { IMG_LINKS } from '../../assets/img-urls';

interface MainProps {
  cards: CardData[];
}

export class Main extends Component<MainProps> {
  render() {
    return (
      <div className="container">
        {this.props.cards?.map((card, index) => (
          <Card key={card.id} card={card} imgUrl={IMG_LINKS[index]} />
        ))}
      </div>
    );
  }
}
