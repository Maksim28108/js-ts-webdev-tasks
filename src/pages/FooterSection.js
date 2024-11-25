import './FooterSection.css'

export const Footer = () => {
    const template = document.createElement('template');
    template.innerHTML = `
        <footer class="footer">
            <div class="footer-content">
                <p class="footer-title" data-i18n="phone">phone reservation? (+1) 987 46 52 </p>
                <div class="footer-icons">
                    <img class="footer-images" src="/src/assets/footerimages/behance.png " alt="footer image">
                    <img class="footer-images" src="/src/assets/footerimages/Figma.png  " alt="footer image">
                    <img class="footer-images" src="/src/assets/footerimages/coolicon.png  " alt="footer image">
                    <img class="footer-images" src="/src/assets/footerimages/inst.png  " alt="footer image">
                    <img class="footer-images" src="/src/assets/footerimages/youtube.png  " alt="footer image">
                </div>
            </div> 
        </footer>
    `

    const footerclone = template.content.cloneNode(true);
    return footerclone

}

