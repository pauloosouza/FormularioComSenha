let btn =document.querySelector('.aberto');

btn.addEventListener('click', function(){
    let input=document.querySelector('.input');

    if (input.getAttribute('type') =='password'){
        input.setAttribute('type', 'text');
        btn.src = './Img/aberto.png'
    }
    else{
        input.setAttribute('type', 'password');
        btn.src = './Img/cortado.png'
    }

});

// Outro olho

let btnn =document.querySelector('.aberto1');

btnn.addEventListener('click', function(){
    let input=document.querySelector('.input1');

    if (input.getAttribute('type') =='password'){
        input.setAttribute('type', 'text');
        btnn.src = './Img/aberto.png'
    }
    else{
        input.setAttribute('type', 'password');
        btnn.src = './Img/cortado.png'
    }

});




