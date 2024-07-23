let count = 0;

function countCard() {
    let cardInput = document.getElementById("cardInput").value.toUpperCase();
    let cards = cardInput.split(',').map(card => card.trim());
    let result = cardCounter(cards);
    document.getElementById("result").innerText = result;
}

function cardCounter(cards) {
    cards.forEach(card => {
        switch(card) {
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
                count++;
                break;
            case '7':
            case '8':l0pñ
            case '9':
            case '10':
                break;
            case 'J':
            case 'Q':
            case 'K':
            case 'A':
                count--;
                break;
            default:4
                break;
        }
    });

    let decision = (count > 0) ? "apuesta" : "espera";
    return count + " " + decision;
}