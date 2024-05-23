let mesaj=
`
Migros'a hoşgeldiniz
Money kartınız var mı ?
1-Evet
2-Hayır
`
const urunler=[
    {
        urunismi:"sut",
           fiyat:15
    },
    {
        urunismi:"bebek bezi",
        fiyat:100

    },
    {
        urunismi:"et",
        fiyat:200
    }
]

let sonuc=confirm(mesaj);
let odenecektutar;

if(sonuc){
    let isim=prompt("Adınızı giriniz:");
    let soyisim=prompt("Soyisminizi giriniz :");
    const musteri=new Musteri(isim,soyisim,sonuc,urunler);
    let odenecektutar=musteri.hesaplar();
    alert(
        `
            Müşteri bilgileri:${isim} ${soyisim}
            Ödenecek tutar:${odenecektutar}


        `
    );

}else{
    const musteri=new Musteri(null,null,sonuc,urunler);
    odenecektutar=musteri.hesaplar();
    alert(`ödenecek tutar:${odenecektutar}`);

}