let btn = document.querySelector('button')
let inputC = document.querySelector('input')
let divC = document.querySelector('div')

function func(){ 
    inputC.value=''
}


btn.addEventListener('click' , function(){
    let p1 = document.createElement('p')
    let p2 = document.createElement('p')
    let btnX = document.createElement('button')
    let btnUp = document.createElement('button')
    let btnDown = document.createElement('button')
    p1.style.cssText = ' margin:auto ; margin-bottom:10px; border-radius:5%; width:500px; height : 50px; background-color: #99ccff ;font-size: 25px; text-align: left;padding:5px'
    p2.style.cssText = 'display: inline;'
    btnX.style.cssText = 'height: 50px;width: 45px;border-radius: 20%;margin-right : 5px; background-color: #ff4d4d; font-size: 30px ; cursor:pointer'
    btnUp.style.cssText = 'height: 50px;width: 45px;border-radius: 20%; margin-right : 5px; background-color: #0088cc; font-size: 30px ; cursor:pointer '
    btnDown.style.cssText = 'height: 50px;width: 45px;border-radius: 20%; margin-right : 20px;background-color: #ffa31a ; font-size: 30px ; cursor:pointer'
    btnX.innerText = 'X';
    btnUp.innerText = '🠕';
    btnDown.innerText = '🠗';
    p2.innerText = inputC.value;
    p1.append(btnX , btnUp , btnDown , p2)
    divC.appendChild(p1)
    
    inputC.value = '';
    btnX.addEventListener('click' , function(){
        p1.remove();
    
    })

    btnUp.addEventListener('click' , function(){
        var swap = p1;
        if(swap.previousElementSibling){
            swap.parentNode.insertBefore(swap , swap.previousElementSibling);
        }

    })

    btnDown.addEventListener('click' , function(){
        var swap = p1;
        if(swap.nextElementSibling){
            swap.parentNode.insertBefore(swap.nextElementSibling , swap);
        }
    })

})



