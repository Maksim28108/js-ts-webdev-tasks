export function Tags(tags: string[]): HTMLDivElement {
    const tagsContainer = document.createElement('div');
    tagsContainer.className = 'card-tags';
    tagsContainer.style.color = '#482BE7'; 

    tagsContainer.textContent = tags.join(', ');
    return tagsContainer;
}