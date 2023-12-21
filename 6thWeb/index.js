// require = memanggil library/codingan dari javascriptnya
const http = require("http");

// library rupiah = untuk menambahkan format rp di angkanya
const rupiah = require("rupiah-format");

// memasukan data ke file baru
const fileSistem = require("fs");

const os = require("os");
const host = "localhost";
const port = 3002;

// request  = data masuk dari luar
// response = data keluar dari sistem
const server = http.createServer(function (request, response) {
  const nama = "Mochammad Hari";
  let uang = 1000000;
  let jajan = 200000;
  let sisa = uang - jajan;

  uang = rupiah.convert(uang);
  jajan = rupiah.convert(jajan);
  sisa = rupiah.convert(sisa);

  fileSistem.appendFile("sisauang.txt", sisa, () => {
    console.log("data uang berhasil disimpan");
  });

  const sisaRAM = os.freemem();
  const jumlahCPU = os.cpus()[0];

  function checkCPU() {
    let myCPU = [];
    jumlahCPU.map((cpu, i) => {
      myCPU.push(cpu.model);
    });
    return myCPU[0];
  }

  const hasil = `<p>Halo nama saya ${nama}, saya jajan sebanyak ${jajan}, uang saya tadinya ${uang} sekarang menjadi ${sisa}</p>
  <p>sisa RAM PC saya adalah : ${sisaRAM}</p>
  <p>CPU di PC saya adalah :${checkCPU()}</p> `;
  response.statusCode = 203;
  response.end(hasil);
});

server.listen(port, host, function () {
  console.log(`server menyala di ${host}:${port} ❤️`);
});

// fungsi nodemon = agar kita tidak perlu merunning ulang projectan nya
