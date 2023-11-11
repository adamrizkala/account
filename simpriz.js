const hostname = location.hostname;
const inner = "<div style='width: 100%;display: grid;justify-content: center;align-content: center; padding: 30px; height: 100vh;'><p style='font-size: 30px;text-align: center;'>Domain Anda belum terdaftar, silahkan melakukan regristasi melalui WA dengan mengklik link berikut ini : <a href='https://api.whatsapp.com/send?phone=6285727754016'>085727754016</a></p></div>";
const account = ["ustadadamrizkal.blogspot.com", 
                 "www.nasehatquran.com"];
const searchAccount = account.filter(value => value === hostname);
let count = 0;

if (searchAccount[0] !== hostname){
    document.body.innerHTML = inner;
};
