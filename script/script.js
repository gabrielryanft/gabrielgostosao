
function pegtemp(){
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    var seg = data.getSeconds()
    var shora = String(hora)
    var smin = String(min)
    var sseg = String(seg)
    var p1 = document.getElementById('p1')
    var spn = document.querySelector("#spn")

    if(shora.length == 1){
        hora = "0" + hora
    }
    if(smin.length == 1){
        min = "0" + min
    }
    if(sseg.length == 1){
        seg = "0" + seg
    }
    if(hora == 1 || 0){
        p1.innerHTML `Agora é: `
    }
    spn.innerHTML = `${hora}h:${min}min:${seg}s.`
    setTimeout("pegtemp()", 1000)
}

