import { Component, ReactNode } from 'react';
import './Card.css';

export interface CardData {
  id: number;
  name: string;
  tagline: string;
  first_brewed: string;
  description: string;
  image_url: string;
  ingredients: {
    malt: {
      name: string;
      amount: {
        value: number;
        unit: string;
      };
    }[];
    yeast: string;
  };
  food_pairing: string[];
  brewers_tips: string;
}

interface CardProps {
  card: CardData;
  imgUrl: string;
}

export class Card extends Component<CardProps> {
  render(): ReactNode {
    return (
      <div className="card">
        <div className="card_header">
          <img width="150px" src={this.props.imgUrl} />
          <div>
            <h2>{this.props.card.name}</h2>
            <h3>{this.props.card.tagline}</h3>
          </div>
        </div>
        <div className="card_body">
          <p>{this.props.card.description}</p>
          <div className="extra">
            <span className="extra-info_title">Food:</span>
            <p className="extra-info">
              {this.props.card.food_pairing.map((food) => (
                <span key={food}>{food}</span>
              ))}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
