const http = require("http");
const fs = require("fs");
const axios = require("axios");

let URL = 'https://gist.githubusercontent.com/josejbocanegra/c6c2c82a091b880d0f6062b0a90cce88/raw/9ed13fd53a144528568d1187c1d34073b36101fd/categories.json'

var myhtml = ''

function proccessCategories(data){
    return new Promise((resolve, reject)=>{

        resolve()
    });
}

http.createServer((req, res) => {
    
    axios.get(URL).then(resp => {
        fs.readFile('index.html', function (err, data) {
          res.write(data.toString);
          res.end();
        });
        //console.log(resp.data);
    }).catch(()=>{console.log('algo salió mal')});

}).listen(3000); 