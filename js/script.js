function luas(){
    let angkaPertama = document.getElementById("angka1").value;
    let angkaKedua = document.getElementById("angka2").value;


let hasil = parseInt(angkaPertama) * parseInt(angkaKedua);
    alert('hasilnya adalah: ' + hasil + 'cm2')
} 

function keliling(){
    let angkaPertama = document.getElementById("angkake1").value;
    let angkaKedua = document.getElementById("angkake2").value;

let hasil = 2 * (parseInt(angkaPertama) + parseInt(angkaKedua)) ;
    alert('hasilnya adalah: ' + hasil + 'cm')
} 


