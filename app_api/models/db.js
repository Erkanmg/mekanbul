var mongoose = require( 'mongoose' );
//var dbURI = "mongodb://localhost/mekanbul"
require("./mekansema");
var dbURI = "mongodb+srv://erkanmert123:tuna10@mekanbul.q94nbpv.mongodb.net/mekanbul?retryWrites=true&w=majority";
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