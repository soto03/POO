// Variable global para el conteo de cartas
let count = 0;

// Función para contar las cartas
function countCards(card) {
    if ([2, 3, 4, 5, 6].includes(card)) {
        count += 1;
    } else if ([10, 'J', 'Q', 'K', 'A'].includes(card)) {
        count -= 1;
    }
    // No se hace nada para 7, 8, 9

    // Determinar la decisión del jugador
    if (count > 0) {
        return count + " Bet";
    } else {
        return count + " Hold";
    }
}

// Ejemplos de uso
console.log(countCards(5));   // Debería imprimir: 1 Bet
console.log(countCards(9));   // Debería imprimir: 1 Bet (count no cambia para 9)
console.log(countCards('K')); // Debería imprimir: 0 Hold
console.log(countCards(3));   // Debería imprimir: 1 Bet
console.log(countCards(7));   // Debería imprimir: 1 Bet (count no cambia para 7)
console.log(countCards('Q')); // Debería imprimir: 0 Hold
console.log(countCards(10));  // Debería imprimir: -1 Hold