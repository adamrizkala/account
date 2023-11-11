const hostname = location.hostname;
const inner = "<div style='width: 100%;display: grid;justify-content: center;align-content: center; padding: 30px; height: 100vh;'><p style='font-size: 30px;text-align: center;'>Mohon maaf! Anda mendapatkan template ini secara ilegal. Silahkan beli template ini melalui WA dengan mengklik link berikut ini : <a href='https://wa.me/6285727754016?&text=Halo%2C%20kak!%20Saya%20ingin%20membeli%20template%20%22simpriz%22.%20Berikut%20alamat%20blog%20saya%20%3A%20%5Bwww.alamatblogsaya.com%5D'><button style="cursor: pointer;font-size: 30px;padding: 5px 20px;border-radius: 10px;">KLIK!</button></a></p></div>";
const account = ["ustadadamrizkala.blogspot.com"];
const searchAccount = account.filter(value => value === hostname);
let count = 0;

if (searchAccount[0] !== hostname){
    document.body.innerHTML = inner;
};
