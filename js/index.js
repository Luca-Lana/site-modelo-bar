function preload() {
    imgs=Array("img/f1.jpg", "img/f2.jpg", "img/f3.jpg");
    imgQtde=imgs.length;
    for(i=0;i<imgQtde;i++) {
        var preloading=new Image();
        preloading.src=imgs[i];
    }
}

function iniciaSlider() {
    preload();
    max=3;
    min=1;
    fi=min;
    tr=true;
    carregaFoto("img/f1.jpg");
    document.getElementById("img").addEventListener("transitionend", fimTr);
}

function fimTr(){
    tr=true;
}

function carregaFoto(foto) {
    document.getElementById("img").style.backgroundImage="URL("+foto+")";
}

function prox(){

    fi++;
    if(fi>max){
        fi=min;
    }
    carregaFoto("img/f"+fi+".jpg");
    
}
function ant(){
    fi--;
    if(fi<min){
        fi=max;
    }
    carregaFoto("img/f"+fi+".jpg");
}