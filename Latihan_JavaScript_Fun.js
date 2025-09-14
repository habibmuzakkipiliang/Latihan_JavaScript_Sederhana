// Hello World

console.log ("Hello World by JavaScript")

// sintaks dasar dan variabel

let ar = "Simple "
let hh = 123

const phi = 3.14
const del = 2.45

console.log (ar)
console.log (hh)
console.log (phi)
console.log (del)

// tambahkan bonus

let hui = "Belajar "
let juk = "Coding "
let wer = "JavaScript "
let ios = "dan Python "

let teer = hui + juk + wer + ios

console.log (teer)


// tipe data 

let a = "Halo "
let b = 124
let c = 3.14
let cek = true
let d = ["objek", "ras", "Vasting"]
let e = ("Ras", "Vestur", "Card", "Kubinka")

console.log (a)
console.log (b)
console.log (cek)
console.log (c)
console.log (d)
console.log (e)


// operator dasar

x = 12
y = 2

console.log ("Tambah :", x + y)
console.log ("Kurang :", x - y)
console.log ("Pangkat :", x ** y)
console.log ("Kali :", x * y)
console.log ("Bagi :", x / y)
console.log ("Modulus : ", x % y)

// operator perbandigan

console.log ("Hasilnya : ", x > y )
console.log ("Hasilnya : ", x < y)
console.log ("Hasilnya : ", x == y)

// operator logika

console.log (x && y)
console.log (x || y)

// percabangan 

let nius = 5

if (nius < 7) {
    console.log ("Besar")
}

else if (nius > 3) {
    console.log ("Kecil")
}

else {
    console.log ("Sama saja")
}

// percabangan nested

let nil = 5

if (nil > 3) {
    if (nil < 2) {
        console.log ("Besar")
    }
    
    else if (nil > 1) {
        console.log ("Kecil")
    }
}

else {
    console.log ("Sama saja")
}

// perulangan for


for (v = 0; v < 5; v++) {
    console.log ("For k ", v)
}

// while 

let m = 0

while (m < 5) {
    console.log ("While ", m)
    m++
}

// do while

let q = 0

do {
    console.log ("Do While ", q)
    q++
} while (q < 5)


// switch case 

let s = 3

switch (s) {
    case 1:
        console.log ("Senin")
        break
    case 2:
        console.log ("Selesa")
        break
    case 3:
        console.log ("Rabu")
        break
    case 4:
        console.log ("Kamis")
        break
    default:
    console.log ("Default")
}

// function JavaScript

function erlang () {
   console.log ("Halo Dunia") 
}

erlang ()
erlang ()
erlang ()

function ruby (ruby) {
    console.log ("Hello " + ruby) 
}

ruby ("Dart")
ruby ("Hellium")
ruby ("Amerika")

function tambah (y, j) {
    return y + j
}

var hasil = tambah (3, 4)
console.log (hasil)

function kali (e, k) {
    return e * k
}

var hasil = kali (2, 5)
console.log (hasil)