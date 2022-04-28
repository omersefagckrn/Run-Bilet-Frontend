import React from 'react';
import { Card } from '..';

import { cards } from '../../FakeData/data';

const Cards = () => {
	return cards.map((card, index) => <Card key={index} card={card} />);
};

export default Cards;
