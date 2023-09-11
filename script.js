lista = [];

function territory(){
    lista.push(589000);
}

function bronco(){
    lista.push(709100);
}

function edge(){
    lista.push(912000);
}

function focus(){
    lista.push(529900);
}

function mustang(){
    lista.push(929400);
}

function gt(){
    lista.push(12000000);
}

function mostrarcarrito(){
    var total = 0;
    productos = [];
    length = lista.length;
    for (var i = 0; i < lista.length; i++)
        productos.push(parseInt(lista[i]));
    for(let x of productos){
        total+=x;
    }
    document.getElementById('resultado').innerHTML="Total a pagar: " + total +"$";     
}

const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')
if (toastTrigger) {
  toastTrigger.addEventListener('click', () => {
    const toast = new bootstrap.Toast(toastLiveExample)

    toast.show()
  })
}

const toastTrigger1 = document.getElementById('liveToastBtn1')
const toastLiveExample1 = document.getElementById('liveToast1')
if (toastTrigger1) {
  toastTrigger1.addEventListener('click', () => {
    const toast1 = new bootstrap.Toast(toastLiveExample1)

    toast1.show()
  })
}