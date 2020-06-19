module.exports = function ({ param1, param2 }) {
    return `
    <!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      <style>
          .main-block {
              border: 1px solid black;
              width: 450px;
              height: 950px;
              margin: 0 auto;
  
          }
  
          .block {
              border: 1px solid black;
              width: 421px;
              position: relative;
              top: 15px;
              margin: 0 auto;
          }
  
          .header {
              background-color: black;
              color: white;
          }
  
          .header-text {
              margin-left: 145px;
          }
  
          .block3 {
              height: 20px;
              background-color: rgb(122, 121, 121);
              border: 1px solid rgb(65, 65, 65);
              display: inline-block;
              width: 204px;
          }
  
          .block1 {
              background-color: rgb(122, 121, 121);
              height: 48px;
              width: 277px;
              margin-left: 145px;
          }
  
  
          .block2 {
              height: 100px;
              width: 205px;
              border: 1px solid rgb(78, 78, 78);
              margin: 0 auto;
              display: inline-block;
          }
  
          .midle-block {
              background-color: rgb(122, 121, 121);
              width: 197px;
              height: 94px;
              border: 1px solid rgb(65, 65, 65);
              margin: 0 auto;
              margin-top: 2px;
  
          }
  
          .midle-block2 {
              background-color: rgb(122, 121, 121);
              border: 1px solid rgb(65, 65, 65);
              width: 410px;
              height: 94px;
              margin: 0 auto;
              margin-top: 2px;
              margin-bottom: 2px;
          }
  
          .text-block {
              font-size: 50px;
              position: relative;
              left: 80px;
              top: 15px;
          }
  
          .text-block2 {
              font-size: 50px;
              position: relative;
              left: 60px;
              top: 15px;
          }
  
          .text-block3 {
              font-size: 50px;
              position: relative;
              left: 160px;
              top: 15px;
          }
  
          .text {
              font-size: 50px;
          }
  
          .footer {
              background-color: rgb(122, 121, 121);
              text-align: center;
          }
      </style>
  </head>
  
  <body>
      <div class="main-block">
          <div class="block">
              <div class="header">
                  <span class="header-text">BEAst Label &trade; A7 </span>
              </div>
  
              <div class="block1"><span class="text">${param1}</span></div>
  
              <hr>
  
              <div class="block1"><span class="text">${param2}</span></div>
  
              <hr>
  
              <div class="block3">
                  <span>Lossningsplats</span>
              </div>
  
              <div class="block3">
                  <span>Hus</span>
              </div>
  
              <div class="block2">
                  <div class="midle-block"> <span class="text-block">B</span></div>
              </div>
              <div class="block2">
                  <div class="midle-block">
                      <span class="text-block">D</span>
                  </div>
              </div>
  
              <div class="block3"><span>Trappa</span> </div>
              <div class="block3"><span>Vaning</span> </div>
  
              <div class="block2">
                  <div class="midle-block">
                      <span class="text-block">1</span>
                  </div>
              </div>
  
              <div class="block2">
                  <div class="midle-block">
                      <span class="text-block">2</span>
                  </div>
              </div>
  
              <div class="block3" style="width: 420px"><span>Lagenhet</span> </div>
  
              <div class="block4">
                  <div class="midle-block2">
                      <span class="text-block3">1103</span>
                  </div>
              </div>
  
              <div class="block3"><span>Rum</span> </div>
              <div class="block3"><span>Position</span> </div>
  
              <div class="block2">
                  <div class="midle-block">
                      <span class="text-block2">456</span>
                  </div>
              </div>
  
              <div class="block2">
                  <div class="midle-block">
                      <span class="text-block2">789</span>
                  </div>
              </div>
  
              <div class="footer">
                  (90)123456789012400002
              </div>
          </div>
      </div>
  </body>
  
  </html>
    `

};