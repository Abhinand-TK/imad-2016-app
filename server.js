var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={
    
 'article-one': {

title:  'Art-one|abhi',
heading: 'ARTICLE ONE',
date: 'sdja',
content:` <p>
        is just a reminder of things could easily go wrong yes the article one is just a reminder!
        This is just a reminder of things could easily go wrong yes the article one is just a reminder!This is just a reminder of things could easily go wrong yes the article one is just a reminder!This is just a reminder of things could easily go wrong yes the article one is just a reminder!This is just a reminder of things could easily go wrong yes the article one is just a reminder!
        
    </p>
    
     <p>
        This is just a reminder of things could easily go wrong yes the article one is just a reminder!
        This is just a reminder of things could easily go wrong yes the article one is just a reminder!This is just a reminder of things could easily go wrong yes the article one is just a reminder!This is just a reminder of things could easily go wrong yes the article one is just a reminder!This is just a reminder of things could easily go wrong yes the article one is just a reminder!
        
    </p>
    
     <p>
        This is just a reminder of things could easily go wrong yes the article one is just a reminder!
        This is just a reminder of things could easily go wrong yes the article one is just a reminder!This is just a reminder of things could easily go wrong yes the article one is just a reminder!This is just a reminder of things could easily go wrong yes the article one is just a reminder!This is just a reminder of things could easily go wrong yes the article one is just a reminder!
        
    </p>`
    

},
 'article-two':{
     title:  'Art-two|abhi',
heading: 'ARTICLE TWO',
date: 'sdja',
content:` <p>
        is just a reould easily go wrong yes the article one is just a reminder!This is just a reminder of things could easily go wrong yes the article one is just a reminder!
        
    </p>
    
     <p>
        This is just a reminder of things could easily go wrong yes the article one is just a reminder!
        This is justould easily go wrong yes the article one is just a reminder!This is just a reminder of things could easily go wrong yes the article one is just a reminder!
        
    </p>
    
     <p>
        This is justould easily go wrong yes the article one is just a reminder!This is just a reminder of things could easily go wrong yes the article one is just a reminder!
        
    </p>`
    
 },
 'article-three':{
     title:  'Art-three|abhi',
heading: 'ARTICLE THREE',
date: 'sdja',
content:` <p>
        is just a reminrong yes the article one is just a reminder!
        
    </p>
    
     <p>
        This is just a rong yes the article one is just a reminder!
        
    </p>
    
     <p>
        This is just a d easily go wrong yes the article one is just a reminder!This is just a reminder of things could easily go wrong yes the article one is just a reminder!
        
    </p>`
    
 }
};
function createtemplate(data){

var title=data.title;
var heading=data.heading;
var date=data.date;
var content=data.content;

var htmlTemplate= `<html>
    <head>
        <title>
            ${title}
        </title>
        
        <meta name="viewport" content="width=device-width,initial-scale=1"/>
          <link href="/ui/style.css" rel="stylesheet" />
    
    </head>
    
<body>
    
<div class ="c">   

    <div>
        <a href="/">HOME</a>
    </div>
    
<hr/>

<h3>
    ${heading}
</h3>

<div>
    
    ${date}
</div>

 <div>
   ${content}
</div>

</div>
  
</body>
</html>
  `;
  return htmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter=0;
app.get('/counter',function(req,res){
   counter=counter+1;
   res.send(counter.toString()); 
});

app.get('/:articleName',function(req,res){
    var articleName=req.params.articleName;
    res.send(createtemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});




var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
