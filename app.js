var app = require('./config/app_config');
var db = require('./config/db_config');
var User = require('./models/produto');
var produtoController = require('./controllers/produtoController');
var produtos = require('./routes/produtoRouter');

app.get('/', function(req,res){
    res.end('Ben-vindo a API de Produtos')
});

//rotas de produtos
app.use('/produtos', produtos);

