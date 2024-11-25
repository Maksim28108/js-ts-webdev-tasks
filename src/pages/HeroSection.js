
import {header} from '../components/Header.js'; 
import './HeroSection.css';


export const HeroSection = `
<section class="hero">
    ${header}
    <div class="hero-content"> 
        <div class="hero-container">
            <p class="date" data-i18n="date">
                <i class="fa-solid fa-calendar"></i>
                
            </p>
            <h2 class="hero-title" data-i18n="hero-title"></h2>
        </div>
    </div>
</section>

`