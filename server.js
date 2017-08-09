var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articleOne = {
    title: "Article one |kalai " ,
    heading: "Article one",
    date:"sep 5,2017",
    content: '
            
            <p>
                this is my first artice. this is my first artice. this is my first artice. this is my first artice.
                 this is my first artice. this is my first artice. this is my first artice. this is my first artice.
            </p>
            <p>
                this is my first artice. this is my first artice. this is my first artice. this is my first artice.
                 this is my first artice. this is my first artice. this is my first artice. this is my first artice.
            </p>
            <p>
                this is my first artice. this is my first artice. this is my first artice. this is my first artice.
                 this is my first artice. this is my first artice. this is my first artice. this is my first artice.
            </p>'
};

function createTemplate(data)
{
var title = data.title;
var date = data.date;
var heading = data.heading;
var content = data.content;
var htmlTemplate = '
<html>
    <head>
        <title>
            ${title}
        </title>
        <link href="/ui/style.css" rel="stylesheet" />
    <style>
        .container{
            max-width: 800px;
    margin: 0 auto;
    color: blue;
    font-family: sans-serif;
    padding-top: 60px;
    padding-left: 200px;
    padding-right: 20px;:sans-serif;
        }
            
  </style>
        
    </head>
    <body>
        <div class="container">
            <div>
            <a href="/"></a>
        </div>
        <hr/>
        <h3>
            ${heading}
        </h3>
        <div>
            sep 23,1996
        </div>
        <div>
         ${content}
        </div> 
        </div>
    </body>
</html>
';
 return htmlTemplate;
          }

app.get('/', function (req, res) {
  res.send(createTemplate(articleOne));
});

app.get('/article-one',function(req,res){
res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
});
app.get('/article-two',function(req,res){
res.send('Article two requested and will be server here');
});
app.get('/article-three',function(req,res){
res.send('Article three requested and will be server here');
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
