import { Card, CardProps } from './card';

import data from './db/cards.json';

function Grid(cards: CardProps[]): HTMLUListElement {
    const grid = document.createElement('ul');
    grid.className = 'grid';
    cards.forEach(cardData => {
        const cardElement = Card(cardData);
        grid.append(cardElement);
    });
    return grid;
}

function renderPage(): void {
    const container = document.createElement('section');
    container.className = 'page';

    const heading = document.createElement('h1');
    heading.textContent = "Our Works";
    heading.className = 'page-heading';

    const subtitle = document.createElement('p');
    subtitle.textContent = "The most important part of the Startup Framework is the samples. The samples form a set of 20 usable pages you can use as is or you can add new blocks from UI Kit.";
    subtitle.className = 'page-subtitle';

    container.append(heading, subtitle, Grid(data as CardProps[]));
    document.body.append(container);
}

document.addEventListener("DOMContentLoaded", renderPage);