
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