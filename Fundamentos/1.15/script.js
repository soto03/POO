function changeImage(element){
    element.src = 'https://i.pinimg.com/564x/a2/8b/d6/a28bd644abc5142da1acb1deb8ad9078.jpg';
    element.alt = 'Nueva Imagen';
}

function showDescription(button){
    let description = button.nextElementSibling;
    description.style.display = description.style.display === 'block'?
    'none' : 'block';
}

function completeTask(button){
    let taskItem = button.parentElement;
    let taskText =  taskItem.querySelector('span');
    taskText.classList.toggle('completed');
}

function applyDiscount(button){
    let productCard = button.parentElement;
    let priceElement = productCard.querySelector('.price');
    let currentPrice = parseFloat (priceElement.textContent.replace('$',''));
    let newPrice = (currentPrice * 0.7).toFixed(2);
    priceElement.textContent = `$${newPrice}`;
}