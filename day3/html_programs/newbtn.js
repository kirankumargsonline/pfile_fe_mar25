
var oddnumber_list = [];
var evennumber_list = [];

function AddOddNUM(n){
    oddnumber_list.push(n);

    let items = '';
    

    for(let n of oddnumber_list) {
        items = items + `<LI class="p-2 btn btn-primary m-2" 
                style="list-style-type:none;">${n}</LI>`
    }


    let oddnumber_listhtml = `<div class="d-flex flex-wrap">${items}</div>`
    document.getElementById("oddnumbers-list").innerHTML = oddnumber_listhtml;

    document.getElementById('number').value = "";


    document.getElementById('number').focus();

}

function AddEvenNUM(n){
    evennumber_list.push(n);
    let items = '';


    for(let n of evennumber_list) {
        items = items + `<span class="p-2 btn btn-danger m-2" 
                style="list-style-type:none;">${n}</span>`
    }

    
    let evennumber_listhtml = `<div class="d-flex flex-wrap">${items}</div>`
    
    document.getElementById("evennumbers-list").innerHTML = evennumber_listhtml;


    document.getElementById('number').value = "";


    document.getElementById('number').focus();
}


function funAdd(){

    let num = parseInt(document.getElementById('number').value)

    if(num %2== 0) {
        AddOddNUM(num);
    } else{
        AddEvenNUM(num)
    }


}


