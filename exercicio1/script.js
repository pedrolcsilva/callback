function exibirSoma(arg){
    document.writeln(arg)
}

function somar(callback){
    let x = parseInt(document.getElementById('num1').value) + parseInt(document.getElementById('num2').value)
    return callback(x);
}

document.getElementById('imprim').addEventListener('click', function(){
    somar(result => {
        document.writeln(result)
    })
})