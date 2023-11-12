const hostname = location.hostname;
const inner = `<div style='width: 100%;display: grid;justify-content: center;align-content: center; padding: 30px; height: 100vh;'><p style='font-size: 30px;text-align: center;'>Mohon maaf! Anda mendapatkan template ini secara ilegal. Silahkan beli template ini melalui WA dengan mengklik link berikut ini : <a href='https://wa.me/6285727754016?&text=Halo%2C%20kak!%20Saya%20ingin%20membeli%20template%20%22simpriz%22.%20Berikut%20alamat%20blog%20saya%20%3A%20%5Bwww.alamatblogsaya.com%5D'><button style="cursor: pointer;font-size: 30px;padding: 5px 20px;border-radius: 10px;">KLIK!</button></a></p></div>`;
const account = ["ustadadamrizkala.blogspot.com"];
const searchAccount = account.filter(value => value === hostname);
let count = 0;
if (searchAccount[0] !== hostname){
    document.body.innerHTML = inner;
    document.head.innerHTML = null;
};
const backToTop = document.getElementById("back-to-top");
const menu2 = document.getElementById("menu2");
  
window.onscroll = function() {
  backToTopFunction();
  menu2Function();
};
function backToTopFunction() {
    if (document.documentElement.scrollTop > 500){
  	backToTop.style.filter = "opacity(1)";
  	backToTop.style.right = "5%";
  } else {
	backToTop.style.filter = null;
  	backToTop.style.right = null;
  }
}  
function menu2Function() {
    if (document.documentElement.scrollTop > 200){
  	menu2.style.top = "0";
  } else {
	menu2.style.top = null;
  }
}
document.getElementById('Image2').id = "Image1";
document.getElementById('LinkList2').id = "LinkList1";
document.getElementById('Blog2').id = "Blog1";
document.getElementById('PopularPosts2').id = "PopularPosts1";
document.getElementById('FeaturedPost2').id = "FeaturedPost1";
const image = document.getElementsByClassName('image')
const imageScr = image[1].currentSrc
if (image[1] !== undefined){
image[0].style.backgroundImage = `url(${imageScr})`  
}
document.getElementById('Label2').id = "Label1";
