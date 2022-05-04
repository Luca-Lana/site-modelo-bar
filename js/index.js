function preload() {
    imgs=Array("img/f1.jpg", "img/f2.jpg", "img/f3.jpg");
    imgQtde=imgs.length;
    for(i=0;i<imgQtde;i++) {
        var preloading=new Image();
        preloading.src=imgs[i];
    }
}
function preloadPromo() {
    imags=Array("img/promo1.jpg", "img/promo2.jpg", "img/promo3.jpg");
    imgQtde=imags.length;
    for(i=0;i<imgQtde;i++) {
        var preloading=new Image();
        preloading.src=imags[i];
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
    tmr=setInterval(trocaFoto, 4000);
}

function iniciaPromocoes(){
    preloadPromo();
    maxi=3;
    mini=1;
    fix=min;
    tra=true;
    carregaPromo("img/promo1.jpg");
    document.getElementById("imgPromo").addEventListener("transitionend", fimTra);
    timr=setInterval(trocaPromo, 4000);
}

function trocaFoto(){
    fi++;
    if(fi>max){
        fi=min;
    }
    carregaFoto("img/f"+fi+".jpg");
}

function trocaPromo(){
    fix++;
    if(fix>maxi){
        fix=mini;
    }
    carregaPromo("img/promo"+fix+".jpg");
}
function fimTr(){
    tr=true;
}
function fimTra(){
    tra=true;
}

function carregaFoto(foto) {
    document.getElementById("img").style.backgroundImage="URL("+foto+")";
}

function carregaPromo(promo) {
    document.getElementById("imgPromo").style.backgroundImage="URL("+promo+")";
}

function trocaPromocao(dra){
    clearInterval(timr);
    fix+=dra;
    if(fix>maxi){
        fix=mini;
    }
    if(fix<mini){
        fix=maxi;
    }
    carregaPromo("img/promo"+fix+".jpg");
    timr=setInterval(trocaPromo, 4000); 
}   

function troca(dr){
    clearInterval(tmr);
    fi+=dr;
    if(fi>max){
        fi=min;
    }
    if(fi<min){
        fi=max;
    }
    carregaFoto("img/f"+fi+".jpg");
    tmr=setInterval(trocaFoto, 4000); 
}   
