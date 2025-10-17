// Hello World by JavaScript

console.log ("Hello World by JavaScript")

// sintaks dasar JavaScript

const r = 23.4
var h = 23
let j = "Text"

console.log (r)
console.log (h)
console.log (j)

let i = "Halo Hayyan Faras"
let q = "Halo Fachri Ahmad"
let b = 23
let def = "Otter"
let jun = "Halo Justinian"
let c = "Determinan"
let jio = "Halo Filza Gibran"

console.log (i)
console.log (q)
console.log (b)
console.log (def)
console.log (jun)
console.log (c)
console.log (jio)

// operator

x = 23
y = 5

console.log (x + y)
console.log (x - y)
console.log (x * y)
console.log (x ** y)
console.log (x / y)
console.log (x % y)


console.log (x < y)
console.log (x > y)
console.log (x == y)
console.log (x || y)


// percabangan dasar

let f = 5

if (f > 4) {
    console.log ("Besar")
}

else {
    console.log ("Kecil")
}

// percabangan lanjutan

let t = 5

if (t < 5) {
    console.log ("Besar")
}

else if (t > 5) {
    console.log ("Kecil")
}

else {
    console.log ("Sama saja")
}

let ref = 6

if (ref == 100) {
    console.log ("Lebih besar")
}

else if (ref == 90) {
    console.log ("Bagus")
}

else if (ref == 80) {
    console.log ("Sedang")
}

else if (ref == 75) {
    console.log ("di bawah kkm")
}

else if (ref == 70) {
    console.log ("jelek")
}

else {
    console.log ("sama saja")
}

// percabangan nested

let w = 7

if (w < 5) {
    if (true) {
        console.log ("Besar")
    }
    
    else if (w > 3) {
        console.log ("Kecil")
    }
    
    else {
        console.log ("Sama saja")
    }
}

// perulangan for

for (m = 0; m < 5; m++) {
    console.log ("for ", m)
}

for (w = 0; w < 10; w++) {
    console.log ("Wor ", w)
}

for (i = 0; i < 5; i++) {
    console.log ("Fot ", i)
}

// perulangan while 

let z = 0

while (z < 5) {
   console.log ("while", z)
   z++
}

let s = 0

while (s < 5) {
    console.log ("huj", s)
    s++
}

// perulangan do while

let d = 0

do {
    console.log ("d ", d)
    d++
} while (d < 4)

let qen = 10

do {
    console.log ("qe ", qen)
    qen++
} while (qen < 5)

// switch

let nilai = 5 

switch (nilai) {
    case 1:
        console.log ("Kecil")
        break
        
    case 2:
        console.log ("Sedang")
        break
        
    case 3:
        console.log ("Besar")
        break
    
    case 4:
        console.log ("Sangat besar")
        break
        
    case 5:
        console.log ("Mega besar")
        break
        
    default:
    console.log ("Biasa")
}

// data Array dan Object

let yun = ["Safer", "Keren", "Sering", "Bounty"]

console.log (yun)

let unir = {
    "nama " : "Habib Muzakki",
    "kelas " : "12", 
    "umur " : "18 tahun",
    "tinggi " : "172 cm",
    "berat " : "61 kg",
}

console.log (unir)


// function 

function dent () {
    console.log ("Hello World")
}

dent ()
dent ()

function dt () {
    console.log ("Tas Aku")
}

dt ()
dt ()
dt ()
dt ()

function fet () {
    console.log ("Halo Jakarta")
    console.log ("Hello Banten")
    console.log ("Hello Park")
    console.log ("Hello Tapper")
    console.log ("Tar Bae")
}

fet ()

function tambah (q, t) {
    return q + t
}

hasil = tambah (1,4)
console.log (hasil)

function kurang (m, p) {
    return m - p
}

hasil = kurang (20, 3)
console.log (hasil)

function kali (r, t) {
    return r - t
}

hasil = kali (10, 10)
console.log (hasil)


function bagi (f, c) {
    return f / c
}

hasil = bagi (12, 2)
console.log (hasil)

function modulus (e, k) {
    return e % k
}

hasil = modulus (12, 4)
console.log (hasil)
