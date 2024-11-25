import './Header.css';

export const header = `
<header class="header> 
    <div class="container>
        <div class="header-left">
            <h1 class="logo" data-i18n="party">Party Time!</h1>
            <nav class="nav">
                <ul class="nav-list">
                    <li class="header-list" data-i18n="home"></li>
                    <li class="header-list" data-i18n="gallery"></li>
                    <li class="header-list" data-i18n="about">About </li>
                    <li class="header-list" data-i18n="reservation"></li>
                    <li class="header-list" data-i18n="contacts"></li>
                </ul>
                <div class="header-right">
                    <button id="language-button" class="language-btn" >EN عرب</button>
                    <button class="reservation-btn" data-i18n="reservation"> </button>
                </div>
            </nav>
        </div>
    </div>
</header>

`

