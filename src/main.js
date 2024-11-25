import { HeroSection } from "./pages/HeroSection";
import { GallerySection } from "./pages/GallerySection";
import { Footer } from "./pages/FooterSection";
import locales from "./pages/locales.json"

let currentLocale = "en";

function changeLocale(){
    currentLocale = currentLocale === "en" ? "ar" : "en";

    document.documentElement.setAttribute("dir", currentLocale === "ar" ? "rtl" : "ltr");
 

    translateAllTextOnPage()
}

function translateAllTextOnPage() {
    const localMessages = locales[currentLocale]
  
    const elementsForTranslation = document.querySelectorAll("[data-i18n]")
  
    elementsForTranslation.forEach(element => {
      const key = element.getAttribute("data-i18n")
  
      element.textContent = localMessages[key]
    })
  }

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('app');
    root.innerHTML = HeroSection;

    const galleryContainer = document.createElement('div');
    galleryContainer.innerHTML = GallerySection();
    root.appendChild(galleryContainer);

    const footer = Footer();
    root.appendChild(footer);

    translateAllTextOnPage()


    const languagebutton = document.getElementById('language-button');
    languagebutton.addEventListener('click', changeLocale)

});