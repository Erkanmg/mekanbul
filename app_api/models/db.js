var mongoose = require( 'mongoose' );
var dbURI = "mongodb://localhost/mekanbul"
require("./mekansema");
//var dbURI = 'mongodb+srv://omertaskn452:omertaskn452@mekanbul.lsjeuiv.mongodb.net/mekanbul?retryWrites=true&w=majority';
mongoose.connect(dbURI);
mongoose.connection.on("connected", function (){
    console.log(dbURI + "adresindeki veritabanına  bağlanıldı!\n");
});
mongoose.connection.on("error", function (){
    console.log("Bağlantı hatası\n");
});
mongoose.connection.on("disconnected", function (){
    console.log("Bağlantı kesildi\n");
});

function kapat(msg, callback){
    mongoose.connection.close(function (){
        console.log(msg);
        callback();
    });
}

process.on("SIGNINT", function(){
    kapat("Uygulama kapatıldı!", function (){
        process.exit(0);
    });
});