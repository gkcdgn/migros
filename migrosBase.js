class MigrosBase{
    indirimorani=50;
    constructor(isim,soyisim,kartvarmi,urunler){
        this .isim= isim;
        this .soyisim=soyisim;
        this .kartvarmi=kartvarmi,
        this .urunler=urunler

    }
    hesapla(){
        let odenecektutar=0;
        if(this.urunlerikontrolet(this.urunler)){
            if(this.kartvarmi){
                this.urunler.forEach(urun=> {
                    odenecektutar +=(urun.fiyat*(100-this.indirimorani)/100);
                    
                });
            }else{

                this.urunler.forEach(urun=>{
                    odenecektutar +=urun.fiyat;
                });


            }


        }else{

            alert("en az bir tane ürün satın almalısınız");

        }
     return odenecektutar;
     
    }
    urunlerikontrolet(urunler){
        if(urunler !=null && urunler.length>0){
            return true;
        }else{
            return false;
    
        }
        
        
    }
    
    
 
}



