const button = document.getElementById('convert-button')
const select = document.getElementById('select-currency')

fetch(`https://v6.exchangerate-api.com/v6/c72aef0e66e234c69e7b4d24/latest/BRL`).then( response => {
    return response.json()
}).then( corpo => {

    const dollarValue = corpo.conversion_rates.USD
    const euroValue = corpo.conversion_rates.EUR
    const bitCoinValue = 0.0000072
    
    const convertValues = () => {
        const inputReal = document.getElementById('reais-to-convert').value
        const realValueText = document.getElementById('real-value-text')
        const currencyValueText = document.getElementById('currency-value-text')
    
        realValueText.innerText = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(inputReal)
    
        if (select.value === 'US$ Dólar Americano') {
            currencyValueText.innerText = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD'
            }).format(inputReal * dollarValue)
        }
    
        if (select.value === '€ Euro') {
            currencyValueText.innerText = new Intl.NumberFormat('de-DE', {
                style: 'currency',
                currency: 'EUR'
            }).format(inputReal * euroValue)
        }
    
        if (select.value === 'Bitcoin') {
            currencyValueText.innerText = new Intl.NumberFormat('de-DE', {
                style: 'currency',
                currency: 'BTC'
            }).format(inputReal * bitCoinValue)
        }
    }
    
    const changeCurrency = () => {
        const currencyName = document.getElementById('currency-name')
        const currencyImage = document.getElementById('image-currency')
    
        if (select.value === 'US$ Dólar Americano') {
            currencyName.innerText = 'Dólar'
            currencyImage.src = './assets/eua-dolar.png'
        }
    
        if (select.value === '€ Euro') {
            currencyName.innerText = 'Euro'
            currencyImage.src = './assets/euro.png'
        }
    
        if (select.value === 'Bitcoin') {
            currencyName.innerText = 'Bitcoin'
            currencyImage.src = './assets/bitcoin.png'
        }
    
        convertValues()
    }
    
    button.addEventListener('click', convertValues)
    select.addEventListener('change', changeCurrency)

})