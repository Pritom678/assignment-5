
function getElement(id){
    const element = document.getElementById(id);
    return element;
}

//for heart button
getElement('call-box').addEventListener('click', function(e){
    if(e.target.className.includes('btn-heart')){
        const heart = getElement('heart-count').innerText;
        
        const currentHeart = Number(heart) + 1;
        getElement('heart-count').innerText = currentHeart;
    }
})

//for call button
getElement('call-box').addEventListener('click', function(e){
    if(e.target.closest('.btn-call')){
        const callButton = e.target.closest('.btn-call');

        const cardTitle = callButton.parentNode.parentNode.children[0].children[0].children[0].innerText;
        
        const cardNumber = callButton.parentNode.parentNode.children[0].children[1].children[0].innerText;
        
        const coin = getElement('coin-count').innerText;

        if(coin <= 0){
            alert('Not enough coin' + ' Call terminated');
            return;
        }

        alert(cardTitle + ' ' + cardNumber + ' calling....')

        const currentCoin = Number(coin) - 20;
        getElement('coin-count').innerText = currentCoin;

        const history = getElement('history-container');

        const newHistory = document.createElement('div');

        newHistory.innerHTML = `
                    <div>
                        <div class="w-2/3 flex flex-col justify-center items-start gap-2 p-3">
                            <h1 class="md:font-bold font-semibold md:text-sm text-[10px]">${cardTitle}</h1>
                            <h1 class="md:font-semibold font-medium md:text-sm text-[10px]">${cardNumber}</h1>
                        </div>
                        <div>
                            
                        </div>
                    </div>
        `
        history.append(newHistory)
        
    }
})

//for copy button

getElement('call-box').addEventListener('click', function(e){
    if(e.target.closest('.copy-btn')){
        const copy = getElement('copy-count').innerHTML;
        const currentCopy = Number(copy) + 1;
        getElement('copy-count').innerHTML = currentCopy;

        const cardTitle = callButton.parentNode.parentNode.children[0].children[0].children[0].innerText;
        
        const cardNumber = callButton.parentNode.parentNode.children[0].children[1].children[0].innerText;

        const textToCopy = cardTitle + ' ' + cardNumber;

        navigator.clipboard.writeText(textToCopy)
            .then(()=>{
                alert('texted Copied');
            })
            .catch(err =>{
                alert('texted not Copied', err)
            })

    }
})

// for clear button
getElement('clear-btn').addEventListener('click', function(){
    const history = getElement('history-container');
    history.innerHTML = '';
})