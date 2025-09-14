// percabangan biasa

let jika = 60;

if (jika > 50) {
    console.log ("Besar")
}

else if (jika < 45) {
    console.log ("Kecil")
}

else {
    console.log ("Sama saja")
}

// percabangan nested

let job = 23;
let cek = true

if (job < 15) {
    if (cek == true) {
        console.log ("Besar")
    }
    
    else if (job > 15) {
        console.log ("Kecil")
    }
}

else {
    console.log ("Sama saja")
}

// perulangan 


for (b = 0; b < 10; b++) {
    console.log ("Ulang ke- ", b)
}


let t = 0;

while (t < 3) {
    console.log ("while ", t);
    t++
}


let h = 0;

do {
    console.log ("Do while", h)
    h++
} while (h < 5)


//  switch

let i = 4;
let poker
switch (i) {
    case 1:
        poker = "1"
        break
    case 2:
        poker = "2"
        break
    case 3:
        poker = "3"
        break
    case 4:
        poker = "4"
        break
    default:
    poker = "Hari biasa"
}

console.log (poker)

// switch 

let kop = 3;

switch (kop) {
    case 1:
        console.log ("1")
        break
    case 2:
        console.log ("2")
        break
    case 3:
        console.log ("3")
        break
    case 4:
        console.log ("4")
    default:
    console.log ("biasa saja")
}

