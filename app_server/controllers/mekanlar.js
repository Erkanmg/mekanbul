var express = require('express');
var router = express.Router;

const anaSayfa=function(req,res,next) {
    res.render('anasayfa', {title :'Anasayfa'});
}

const mekanBilgisi=function(req,res,next) {
    res.render('mekanBilgisi', {title :'Mekan Bilgisi'});
}

const yorumekle=function(req,res,next) {
    res.render('yorumekle', {title :'Yorum Ekle'});
}

module.exports={
    anaSayfa,
    mekanBilgisi,
    yorumekle
}

