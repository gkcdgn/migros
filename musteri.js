class Musteri extends MigrosBase{
    constructor(isim,soyisim,kartvarmi,urunler){
        super(isim,soyisim,kartvarmi,urunler);
    }
    hesaplar(){
        return super.hesapla();
    }
}