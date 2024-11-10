import { Image } from './Image';
import { Tags } from './Tags';

export interface CardProps {
    name: string;
    content: string;
    image: string;
    tags: string[];
}

export function Card(props: CardProps): HTMLLIElement {
    const card = document.createElement('li');
    card.className = 'card';

    const image = Image(props.image, props.name);
    const heading = document.createElement('h3');
    heading.textContent = props.name;
    heading.className = 'card-heading';

    const paragraph = document.createElement('p');
    paragraph.textContent = props.content;
    paragraph.className = 'card-content';

    const tags = Tags(props.tags);

    card.append(image, heading, paragraph, tags);
    return card;
}