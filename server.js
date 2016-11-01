var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var PORT = process.env.PORT || 3000;
var todos=[];
var todoNextId = 1;

app.use(bodyParser.json());

app.get('/', function(req,res){
    res.send('Todo API Root');
});

// GET /todos
app.get('/todos', function(req, res){
    res.json(todos);
});

// GET /todos/:id
app.get('/todos/:id', function(req,res){
    var todoId = parseInt(req.params.id, 10);
    var askedTodo;
    for( i=0 ; i < todos.length ; i++){
        if(todos[i].id === todoId ){
            askedTodo = todos[i];
        }
    }
    
    if(askedTodo){
        res.json(askedTodo);    
    }else{
        res.status(404).send();
    }
    
});

app.post('/todos', function(req, res){
    var body = req.body;
    body.id = todoNextId;
    todos.push(body);
    todoNextId++ ;
    
    res.send(body);
});

app.listen(PORT, function(){
    console.log('Express listening on port ' + PORT + '!');
}); 