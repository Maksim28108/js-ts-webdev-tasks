export function Image(src: string, alt: string): HTMLImageElement {
    const img = document.createElement('img');
    img.src = img.src = `/src/assets/Images/${src}`;
    img.alt = alt;
    img.className = 'card-image';
    return img;
}