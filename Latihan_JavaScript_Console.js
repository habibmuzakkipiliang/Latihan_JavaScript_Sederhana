// hello world

console.log ("Hello World")

// sintaks dasar dan variabel

let teks = "Hello Aturm";
let luki = 12;

const kop = 3.14;
const mop = 2.13;

console.log (teks)
console.log (luki)
console.log (kop)
console.log (mop)

// operator dasar

let x = 12;
let y = 3;

console.log ("Tambah : ", x + y)
console.log ("Kurang : ", x - y)
console.log ("Pangkat :", x ** y)
console.log ("Bagi : ", x / y)
console.log ("Modulus :", x % y)
console.log ("Bagi double :", x )
console.log ("Kali : ", x * y)

// perbandingan logika

console.log (x < y)
console.log (x > y)
console.log (x == y)
console.log (x || y)
console.log (x && y)
console.log (x <= y)
console.log (x >= y)

// percabangan biasa 

let nilai = 20;

if (nilai > 20) {
    console.log ("Besar")
}

else if (nilai < 20) {
    console.log ("Kecil")
}

else {
    console.log ("Sama saja")
}

// percabangan bersarang


let ukor = 10;
let uji = true

if (ukor > 15) {
    if (uji) {
        console.log ("Besar")
    }
    
    else if (ukor < 15) {
        console.log ("Kecil")
    }
}

else {
    console.log ("Sama saja")
}


// perulangan for 

let hui = 0;

for (hui = 0; hui < 10; hui++) {
    console.log ("Ulang ke - ", hui)
}

// perulangan while

let kor = 0;

while (kor < 5) {
    console.log ("While ke - ", kor)
    kor++
}

// perulangan do While

let yuin = 0;

do {
    console.log ("Do While ke -", yuin)
    yuin++
} while (yuin < 5)

// function 

function greet () {
    console.log ("Halo Dunia Indonesia")
}

greet ()
greet ()

function hujan(hujan) {
    console.log ("Hello",  hujan)
}
   
hujan ("Patrick Star")
hujan ("Spongebob")
hujan ("Sandy Cheek")


function tambah (a, b) {
    return a + b
}

var hasil = tambah (1, 4)
console.log (hasil)


function kurang (r, t) {
    return r - t
}

var hasil = kurang (10, 5)
console.log (hasil)

function kali (w, t) {
    return w * t
}

var hasil = kali (2, 5)
console.log (hasil)