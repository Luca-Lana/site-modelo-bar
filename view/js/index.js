function preload() {
    imgs=Array('f1.jpg', 'f2.jpg', 'f3.jpg');
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
    carregaFoto("f1.jpg");
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
        carregaFoto("f"+fi+".jpg");
     
}
function ant(){
    fi--;
    if(fi<min){
        fi=max;
    }
    carregaFoto("f"+fi+".jpg");
}