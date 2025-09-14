// percabangan biasa 

let nilai = 12;

if (nilai > 9) {
    console.log ("Besar")
}

else if (nilai < 9) {
    console.log ("Kecil")
}

else {
    console.log ("Sama saja")
}

// percabangan nested

let huji = 20;
let cek = true

if (huji > 12) {
    if (cek == true) {
        console.log ("Besar")
    }
    
    else if (huji < 12) {
        console.log ("Kecil")
    }
}

else {
    console.log ("Sama saja")
}

// perulangan 

let scor = 0;

for (scor = 0; scor < 5; scor++) {
    console.log ("For ke -", scor)
}

let arri = ["Senin", "Selasa", "Rabu", "Kamis"]

for (i = 0; i < arri.length; i++) {
    console.log (arri [i])
}

let johan = ["Carlo Acutis", "Pier Giorgio"]

for (d = 0; d < johan.length; d++) {
    console.log (johan [d])
}

let r = 0;

while (r < 5) {
    console.log ("Ulang y : ", r); 
    r++
}

let huja = 0; 

do {
    console.log ("Do ke -", huja); 
    huja++
} while (huja < 4)
