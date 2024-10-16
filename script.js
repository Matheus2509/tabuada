function tabuada(){
    var num = document.querySelector('#txtn')
    var tab = document.querySelector('#seltab')
    if (num.value.length == 0){
        alert("Digite um número!!")
    }
    else{
        tab.innerHTML =''
        var n = Number(num.value)
        for(var i = 1; i<=10; i++){
            var item = document.createElement('option')
            item.text = `${n} x ${i} = ${n*i}`
            item.value = `tab${i}`
            tab.appendChild(item)
        }
    }
}