var async = require('async')

var mongoose = require('mongoose');
var mongoDB = "mongodb+srv://root:cJ6CggCyBfo9tBtA@jimbo.7d4eq.mongodb.net/Invoice?retryWrites=true&w=majority";
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var Item = require('./item')

var items = []

function ItemCreate(article, partida, cb){
  itemDetail = {article:article, partida:partida}

  var item = new Item(itemDetail);

  item.save( function (err) {
    if (err) {
      cb(err, null)
      return
    }
    console.log('New item: ' + item);
    items.push(item)
    cb(null, item)
  });
}

function createItems(cb){
  async.series([
    function(callback){ItemCreate("Brocha", "2491",callback)},
    function(callback){ItemCreate("Pasta para Soldar", "2491",callback)},
    function(callback){ItemCreate("Tubo PVC sanitario", "2491",callback)},
    function(callback){ItemCreate("Tubo PVC cementar", "2491",callback)},
    function(callback){ItemCreate("Lija plomero roja", "2491",callback)},
    function(callback){ItemCreate("Tubo rígido cobre MT", "2491",callback)},
    function(callback){ItemCreate("Honorarios Notario, Fe de hechos", "3311",callback)},
    function(callback){ItemCreate("Lonas Impresas", "2151",callback)},
    function(callback){ItemCreate("Galletas", "2211",callback)},
    function(callback){ItemCreate("Consumo alimentos", "2211",callback)},
    function(callback){ItemCreate("Agua", "2211",callback)},
    function(callback){ItemCreate("Gatorage", "2211",callback)},
    function(callback){ItemCreate("Sello", "2111",callback)},
    function(callback){ItemCreate("Cojín para sello", "2111",callback)},
    function(callback){ItemCreate("Tinta para sello", "2111",callback)},
    function(callback){ItemCreate("Bolígrafo", "2111",callback)},
    function(callback){ItemCreate("Revistero", "2111",callback)},
    function(callback){ItemCreate("Organizador llaves", "2111",callback)},
    function(callback){ItemCreate("Ventilador de piso", "2111",callback)},
    function(callback){ItemCreate("Memoria USB", "2111",callback)},
    function(callback){ItemCreate("Papel facia", "2111",callback)},
    function(callback){ItemCreate("Ventilador de torre", "2111",callback)},
    function(callback){ItemCreate("Sobres", "2111",callback)},
    function(callback){ItemCreate("Mantenimiento vehículo", "3551",callback)},
    function(callback){ItemCreate("Pago Maxitunel", "3721",callback)},
    function(callback){ItemCreate("Caseta peaje", "3721",callback)},
    function(callback){ItemCreate(" Hechura llave", "2921",callback)},
    function(callback){ItemCreate(" Candado", "2921",callback)},
    function(callback){ItemCreate(" Llave esfera", "2921",callback)},
    function(callback){ItemCreate(" Brocha", "2921",callback)},
    function(callback){ItemCreate(" Codo PVC cementar", "2921",callback)},
    function(callback){ItemCreate(" Tuerca unión CPVC", "2921",callback)},
    function(callback){ItemCreate(" Adaptador macho CPVC", "2921",callback)},
    function(callback){ItemCreate(" Válvula esfera", "2921",callback)},
    function(callback){ItemCreate(" Codo cobre", "2921",callback)},
    function(callback){ItemCreate(" Válvula esfera soldable", "2921",callback)},
    function(callback){ItemCreate(" Cople cobre", "2921",callback)},
    function(callback){ItemCreate(" Conector cobre", "2921",callback)},
    function(callback){ItemCreate(" Maguera flexible metálica WC", "2921",callback)},
    function(callback){ItemCreate("Servicio luz, eléctrico", "2461",callback)},
    function(callback){ItemCreate("Foco, Led", "2461",callback)},
    function(callback){ItemCreate("Contacto", "2461",callback)},
    function(callback){ItemCreate("Chalupa", "2461",callback)},
    function(callback){ItemCreate("Cable", "2461",callback)},
    function(callback){ItemCreate("Lampara", "2461",callback)},
    function(callback){ItemCreate("Balastro", "2461",callback)},
    function(callback){ItemCreate("Placa baquelita", "2461",callback)},
    function(callback){ItemCreate("Canaleta", "2461",callback)},
    function(callback){ItemCreate("Cinta Aislar", "2461",callback)},
    function(callback){ItemCreate("Soldadura 50x50", "2461",callback)},
    function(callback){ItemCreate("Manguera naranja", "2461",callback)},
    function(callback){ItemCreate("Poliducto naranja", "2461",callback)},
    function(callback){ItemCreate("Bolsa para basura", "2161",callback)},
    function(callback){ItemCreate("Jabón en polvo", "2161",callback)},
    function(callback){ItemCreate("Escoba", "2161",callback)},
    function(callback){ItemCreate("Cloro", "2161",callback)},
    function(callback){ItemCreate("Trapeadores", "2161",callback)},
    function(callback){ItemCreate("Limpiador líquido", "2161",callback)},
    function(callback){ItemCreate("Cubrebocas", "2161",callback)},
    function(callback){ItemCreate("Destapacaños", "2161",callback)},
    function(callback){ItemCreate("Gel desinfectante", "2161",callback)},
    function(callback){ItemCreate("Alcohol", "2161",callback)},
    function(callback){ItemCreate("Líquido Sanitizante", "2161",callback)},
    function(callback){ItemCreate("Minisplit", "2931",callback)},
    function(callback){ItemCreate("Ventilador minisplit", "2931",callback)},
    function(callback){ItemCreate("Toldo Gazebo", "2931",callback)},
    function(callback){ItemCreate("Corredera de extension", "2931",callback)},
    function(callback){ItemCreate("Jaladera niquel", "2931",callback)},
    function(callback){ItemCreate("Regaton barril", "2931",callback)},
    function(callback){ItemCreate("Ventilador de piso", "5111",callback)},
    function(callback){ItemCreate("Ventilador de techo", "5111",callback)},
    function(callback){ItemCreate("Ventilador de pedestal", "5111",callback)},
    function(callback){ItemCreate(" Memoria USB ", "2141",callback)},
    function(callback){ItemCreate("Memoria ram", "2941",callback)},
    function(callback){ItemCreate("Memoria USB", "2941",callback)},
    function(callback){ItemCreate("Cinta metálica 30 metros Pretul", "2911",callback)},
    function(callback){ItemCreate("Cortador rotativo p tubo Husky", "2911",callback)},
    function(callback){ItemCreate("Tornillo para tablaroca", "2471",callback)},
    function(callback){ItemCreate("Codo cobre", "2471",callback)},
    function(callback){ItemCreate("Conector cobre", "2471",callback)},
    function(callback){ItemCreate("Cemento blanco", "2421",callback)},
    function(callback){ItemCreate("Refrigerante R22", "2511",callback)},
    function(callback){ItemCreate("Comida por celebración", "3821",callback)},
    function(callback){ItemCreate("Viático foráneos (alimentos)", "3751",callback)},
    function(callback){ItemCreate("Cubrebocas", "2541",callback)},
    function(callback){ItemCreate("Lentes protectores", "2721",callback)},
    function(callback){ItemCreate("Caretas", "2721",callback)},
    function(callback){ItemCreate("Guantes médicos", "2721",callback)}
  ],cb)
}
async.series([
    createItems,
],
// Optional callback
function(err, results) {
    if (err) {
        console.log('FINAL ERR: '+err);
    }
    else {
        console.log('done');
    }
    // All done, disconnect from database
    mongoose.connection.close();
});