import './GallerySection.css'

const DATABASE = [ 
    {image:'/src/assets/galleryimages/gallery1.png' },
    {image:'/src/assets/galleryimages/gallery2.png' },
    {image:'/src/assets/galleryimages/gallery3.png' },
    {image:'/src/assets/galleryimages/gallery4.png' },
    {image:'/src/assets/galleryimages/gallery5.png' },
    {image:'/src/assets/galleryimages/gallery6.png' },
    {image:'/src/assets/galleryimages/gallery7.png' },
    {image:'/src/assets/galleryimages/gallery8.png' },
    {image:'/src/assets/galleryimages/gallery9.png' },
    {image:'/src/assets/galleryimages/gallery4.png' },
]

function createElement (gallery){
    const section = document.createElement("section");

    const image = document.createElement("img");
    image.src = gallery.image;
    image.alt = "Gallery image";
    image.classList.add("gallery-image"); 

    section.append(image);

    return section;

}

export const GallerySection = () => {
    
    const gallerySect = document.createElement('div');
    gallerySect.id = "gallerysection";
    gallerySect.classList.add("gallery-section-container");

    const galleryTitle = document.createElement("h2");
    galleryTitle.classList.add("gallery-title");
    galleryTitle.textContent = "HALLOWEEN MEMORIES";
    galleryTitle.setAttribute("data-i18n", "memories");

    const galleryImages = document.createElement('div');
    galleryImages.classList.add("gallery-section");

    

    const gallerypart = document.createDocumentFragment();

    DATABASE.forEach((item) => {
    const element = createElement(item);
    gallerypart.append(element);
});

galleryImages.append(gallerypart);
gallerySect.append(galleryTitle);
gallerySect.append(galleryImages);
return gallerySect.outerHTML;
}