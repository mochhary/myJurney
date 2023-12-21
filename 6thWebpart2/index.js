const http = require("http");
const host = "localhost";
const port = 3002;
const rupiah = require("rupiah-format");
const fileSystem = require("fs");
const operatingSystem = require("os");

// req = data masuk
// res = data keluar

const server = http.createServer((req, res) => {
  const nama = "Hary";
  let uang = 500000;
  let jajan = 150000;
  let sisa = uang - jajan;

  uang = rupiah.convert(uang);
  jajan = rupiah.convert(jajan);
  sisa = rupiah.convert(sisa);

  fileSystem.appendFile("sisaUang.txt", sisa, () => {
    console.log("sisaUang berhasil disimpan");
  });

  const sisaRAM = operatingSystem.freemem();
  const jumlahCPU = operatingSystem.cpus();

  function checkCPU() {
    let myCPU = [];
    jumlahCPU.map((cpu, i) => {
      myCPU.push(cpu.model);
    });
    return myCPU[0];
  }

  const hasil = `
  <head>
  <title>${nama}</title>
  <link rel="stylesheet" href="style.css">
  <style>
  body{
    background-color : cornflowerblue
  }
  h3{
    background-color:#333;
    color : #fff;
    padding:10px;
    text-align:center;
  }

  </style>
  </head>
  <body>
  <div class="tampil">
  <h3 class="judul">NODE JS UANG JAJAN</h3>
  <p> Halo nama saya ${nama}, saya jajan sebanyak ${jajan}, uang saya tadinya ${uang}, sekarang menjadi ${sisa}</p>
  <p>Sisa RAM di Laptop saya adalah : ${sisaRAM}</p>
  <p>Merk CPU di Laptop saya adalah : ${checkCPU()}</p>
  </div>
  </body>
  `;

  const statusCode = (res.statusCode = 203);
  res.end(`${hasil}`);
});
server.listen(port, host, () => {
  console.log(`server menyala di "${host}:${port}"😍`);
});
