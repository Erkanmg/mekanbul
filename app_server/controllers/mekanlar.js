var express = require('express');
var router = express.Router;

const anaSayfa=function(req,res,next){
    res.render('anasayfa',
    {"baslik":"Anasayfa",
    "sayfabaslik":{
    "siteAd":"Mekanbul",
    "slogan": "Civardaki Mekanları Keşfet"
  },
 "mekanlar":[
    {
       "ad":"Starbucks",
       "puan": "3",
       "adres": "Centrum Garden AVM",
       "imkanlar":["Dünya Kahveleri","Kekler","Pastalar"],
       "mesafe":"10km"
    },
    {
       "ad":"Mackbear",
       "puan": "4",
       "adres": "Sdü Doğu Kampüsü",
       "imkanlar":["Kahve","Çay","Pasta"],
       "mesafe":"5km"
    },
    {
       "ad":"Sarımsak",
       "puan": "2",
       "adres": "GYM Factory'nin karşısı",
       "imkanlar":["Filtre","Çay","Poğaça"],
       "mesafe":"1km"
    }
 ]
 });
 };
 const mekanBilgisi = function (req, res, next) {
    res.render("mekanbilgisi", {
      "baslik": "Mekan Bilgisi",
      "mekanBaslik": "Starbuckss",
      "mekanDetay": {
        "ad": "Starbucks",
        "puan": "3",
        "adres": "Centrum Garden",
        "saatler": [
          {
            "gunler": "Pazartesi-Cuma",
            "acilis": "9:00",
            "kapanis":"23:00",
            "kapali": false
          },
          {
            "gunler": "Cumartesi-Pazar",
            "acilis": "10:00",
            "kapanis":"22:00",
            "kapali": false
          },
        ],
        "imkanlar": ["Dünya Kahveleri", "Kekler", "Pastalar"],
        "koordinatlar": {
          "enlem": "37.7",
          "boylam": "30.5",
        },
        "yorumlar": [
          {
            "yorumYapan": "Erkan Mert Güngör",
            "yorumMetni": "Disgusting",
            "tarih": "20 Ekim 2022",
            "puan": "4",
          },
        ],
      },
    });
  };
 

const yorumEkle=function(req,res,next) {
    res.render('yorumekle', {title :'Yorum Ekle'});
}

module.exports={
    anaSayfa,
    mekanBilgisi,
    yorumEkle
}

