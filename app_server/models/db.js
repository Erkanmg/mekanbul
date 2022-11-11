var mongoose = require('mongoose');
require("./mekansema");
var dbURI = "mongodb+srv://erkanmert123:tuna10@mekanbul.q94nbpv.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(dbURI);
function kapat(msg, callback) {
    mongoose.connection.close(function () {
        console.log(msg);
        callback();
    });
}
process.on("SIGINT", function() {
    kapat("Uygulama kapatıldı!", function () {
        process.exit(0);
    });
});

mongoose.connection.on("connected",function () {
    console.log(dbURI + " adresindeki veritabanına bağlanıldı!");    
});
mongoose.connection.on("error",function () {
    console.log(" Bağlantı hatası!");    
});
mongoose.connection.on("disconnected",function () {
    console.log(" Bağlantı kesildi!");    
});

