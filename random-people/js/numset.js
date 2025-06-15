function letsgo() {
    var variable = document.getElementById('input_id').value;
    if(variable>10000){
        variable = 10000;
    }
    if(variable<1){
        variable = 1;
    }
    if(isNaN(variable)){
        // do nothing
    }
    else{
        window.location.reload();
        localStorage.setItem("numVar", variable);
    }
}

function creation(){
    var num = localStorage.getItem("numVar");
    if(num == null) num = 100;
    if(num == 1) document.getElementById("person").innerHTML = " Person";
    generate(num);
    document.getElementById('input_id').value = localStorage.getItem("numVar");
    document.getElementById("num").innerHTML = inWords(num);
    return num;
}

function toplist(num){
    if (num>10) { for(i=0; i<topfive.length;i++){ document.write("<li>"+topfive[i]+"</li>"); }}
    else { document.getElementById('stathead').style.display = 'none'; }  
}

function botlist(num){
    if(num>10){ for(i=0; i<botfive.length;i++){ document.write("<li>"+botfive[i]+"</li>"); }}
    else{ document.getElementById('statheadb').style.display = 'none'; }
}