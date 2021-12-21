function intervalo(){
    document.querySelectorAll(".num")[pos].innerHTML = results[pos]
    document.querySelectorAll(".num")[pos].classList.add('sorteado')
        if(pos == 5){
            pos = 0
            clearInterval(interv)
            document.getElementById('sort').disabled = false
        }
    pos++
}


function exibir(){
    cleanMega();
    interv = setInterval(intervalo, 1000);
}


function randomNumber(min, max){
    return Math.random() * (max - min) + min;
}

let results = []
function sortearNum(callback){
    for(let i = 0; i < 6; i++){
        let ver = 0
        result = parseInt(randomNumber(0, 59))
        do{
            ver = 0
            results.forEach(item => {
                if(result == item){
                    ver = 1
                }
            })
            if(ver == 1){
                result = parseInt(randomNumber(0, 59))
            }
        }while(ver == 1)
        results[i] = result
    }
    console.log(results)
    return callback(results);
}

function cleanMega(){
    pos = 0
    for(let i = 0; i < 6; i++){
        document.querySelectorAll(".num")[i].innerHTML = ""
        document.querySelectorAll(".num")[i].classList.remove('sorteado')
    }
}

let interv = 0
let pos = 0

document.getElementById('sort').addEventListener('click', function(){
    sortearNum(exibir)
    document.getElementById('sort').disabled = true
    
})