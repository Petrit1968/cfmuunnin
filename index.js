const input = documen.querySelector('input');
const fahrenheitTuloste = documen.querySelector('#fahrenheit');
const celsiusTuloste = documen.querySelector('#celsius');
const muunnaButton = document.querySelector('button');

function fahrenheitCelsiukseksi(fahrenheit) {
    let celsius = fahrenheit;
    return celsius;

}

function muunna() {
    let syote = fahrenheitSyote.value;
    fahrenheitTuloste.textcontent = syote;

    celsiusTuloste.textcontent = syote;
    
}

// const button = document.querySelector('button');
muunnabutton.addEventListener('click', muunna);
