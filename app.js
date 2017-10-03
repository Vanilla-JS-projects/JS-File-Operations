const fs = require('fs')
let dataToWrite;
let buffer;
let dataToString = [];
let dir = "./posts";

fs.readdir(dir, (err, files) => {
  
  if (err) {
    console.log(err)
  }
  
  files.forEach((file) => {
      buffer = fs.readFileSync(`${dir}/${file}`)
      dataToString += buffer.toString() + "//";
    })
      
       console.log(dataToString);
      
      let finaldata = dataToString.split("//");
      
      dataToWrite =`
    <html>
      <body>
        <div>${finaldata}</div>
      </body>
    </html>
  `  
  
    fs.writeFile("build/ " + "post1" + ".html", dataToWrite.trim(), 'utf8', (err) => {
      if (err) console.log(err)
      console.log('file created')
    })

    
});



