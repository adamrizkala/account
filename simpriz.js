const kode = document.getElementById('kode-pendaftaran').childNodes[0].childNodes[1].innerText;
if (kode !== "1234567890"){
    document.body.innerHTML = null;
}
