
function getElement(id){
    const element = document.getElementById(id);
    return element;
}

getElement('call-box').addEventListener('click', function(e){
    if(e.target.className.includes('btn-heart')){
        const heart = getElement('heart-count').innerText;
        
        const currentHeart = Number(heart) + 1;
        getElement('heart-count').innerText = currentHeart;
    }
})

getElement('call-box').addEventListener('click', function(e){
    if(e.target.closest('.btn-call')){
        const callButton = e.target.closest('.btn-call');

        const cardTitle = callButton.parentNode.parentNode.children[0].children[0].innerText;
        const cardNumber = callButton.parentNode.parentNode.children[0].children[1].children[0].innerText;
        
        const coin = getElement('coin-count').innerText;

        if(coin <= 0){
            alert('Not enough coin' + ' Call terminated');
            return;
        }

        alert(cardTitle + ' ' + cardNumber + ' calling....')

        const currentCoin = Number(coin) - 20;
        getElement('coin-count').innerText = currentCoin;

        
    }
})