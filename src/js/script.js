//Sidepanel left offset counter
function adjustSidePanelPosition(language) {
    const sidePanel = document.querySelector('.sidepanel');

    let leftOffset;

    switch (language) {
        case 'en':
            leftOffset = '-85px';
            break;
        case 'pl':
            leftOffset = '-130px';
            break;
        case 'ua':
            leftOffset = '-100px';
            break;
    }

    sidePanel.style.left = leftOffset;
}


const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const closeElement = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElement.addEventListener('click', () => {
    menu.classList.remove('active');
});

//Text translation
function translate(language) {
    document.querySelectorAll('[data-lang-en]').forEach(elem => {
      elem.textContent = elem.getAttribute(`data-lang-${language}`);
    });
  }
  
  document.querySelectorAll('.language-select__option').forEach(option => {
    option.addEventListener('click', function() {
        const selectedLanguage = this.getAttribute('data-value');
        const selectedLanguageText = this.textContent;

        translate(selectedLanguage);
        adjustSidePanelPosition(selectedLanguage);

        const selectedLangElement = document.querySelector('.language-select .selected-lang');;
        selectedLangElement.textContent = selectedLanguageText;

        document.querySelector('.language-select__options').style.display = 'none';
        document.querySelector('.selected-lang').style.removeProperty('display');
    });
});

document.querySelector('.selected-lang').addEventListener('click', function() {
    const options = document.querySelector('.language-select__options');
    const isOptionsVisible = options.style.display === 'block';
    options.style.display = isOptionsVisible ? 'none' : 'block';
    this.style.display = 'none';
});

