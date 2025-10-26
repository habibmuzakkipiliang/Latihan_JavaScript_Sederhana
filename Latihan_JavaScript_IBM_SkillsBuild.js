// Hello World by JavaScript

console.log ("Hello World")

// sintaks dasar 1

console.log (445)
console.log ("Harus bisa JavaScript")
console.log ("vfeliciwa")   
console.log ("yovita_15")
console.log ("Kafe Cimi Time Malang")
console.log (45567)

// sintaks dasar 2

let namaBelakang = "Muzakki"
const pi = 3.14
var namaDepan = "Habib"

console.log (namaDepan)
console.log (namaBelakang)  
console.log (pi)

// Sintaks profil

let nama = "Habib Muzakki"
let kelas = "12 Agama"
let school = "MAN 2 Kota Serang"
let asal = "Sumbar"
let tinggi = "170 cm"
let berat = "60 kg"

console.log ("Nama :", nama)
console.log ("Kelas :", kelas)
console.log ("Sekolah :", school)
console.log ("Asal :", asal)
console.log ("Tinggi :", tinggi)
console.log ("Berat :", berat)

// sintaks dasar 3

k = "Belajar "
j = "di IBM SkillsBuild"

hasil = k + j
console.log (hasil)

a = "Belajar "
b = "Coding "
c = "di Bootcamp Indonesia"

hasil = a + b + c
console.log (hasil)

// tipe data

teks = "Halo Teks" // string
angka = 3445 // integer
des = 3.14 // float
lim = ["vfeliciwa", "yovita_15", "Fun", "tes"] // array

console.log (teks)
console.log (angka)
console.log (des)
console.log (lim)

// tipe data Objek

dat = {
    "nama" : "Habib Muzakki Piliang",
    "kelas" : "12 Agama",
    "asal" : "Sumbar",
    "tinggi" : "170 cm",
    "berat" : "50 kg",
    "angkatan" : "34",
    "sekolah" : "MAN 2 Kota Serang",
}

console.log ("Nama :", dat ["nama"])
console.log ("Kelas :", dat ["kelas"])
console.log ("Asal :", dat ["asal"])
console.log ("Tinggi :", dat ["tinggi"])
console.log ("Berat :", dat ["berat"])
console.log ("Angkatan :", dat ["angkatan"])
console.log ("Sekolah :", dat ["sekolah"])
console.log (dat)

// operator

let x = 5
let y = 4

console.log (x + y)
console.log (x - y)
console.log (x ** y)
console.log (x / y)
console.log (x % y)

// operator perbandingan

console.log (x > y)
console.log (x < y)
console.log (x == y)

// logika

console.log (x < y && x > y)
console.log (x > y |! x > y)

// percabangan dasar

let t = 7

if (t > 5) {
    console.log ("Besar")
}

else {
    console.log ("Semula")
}

// percabangan lanjutan

let h = 8

if (h > 5) {
    console.log ("Besar")
}

else if (h == 4) {
    console.log ("4")
}

else if (h == 3) {
    console.log ("3")
}

else if (h == 2) {
    console.log ("2")
}

else if (h == 1) {
    console.log ("1")
}

else {
    console.log ("Semula")
}

// percabangan nested

let ko = 8

if (ko > 5) {
    if (true) {
        console.log ("Besar")
    }

    else if (ko < 5) {
        console.log ("Kecil")
    }
}

else {
    console.log ("Semula")
}

// switch case

let nilai = 7

switch (nilai) {
    case 7:
    console.log ("7")
    break

    case 6:
    console.log ("6")
    break

    case 5:
    console.log ("5")
    break

    case 4:
    console.log ("4")
    break

    case 3:
    console.log ("3")
    break

    case 2:
    console.log ("2")
    break

    case 1:
    console.log ("1")

    default:
    console.log ("Semula")

}

// perulangan for

for (m = 20; m < 26; m++) {
    console.log ("m", m)
}

for (i = 0; i < 5; i++) {
    console.log ("i", i)    
}

for (l = 10; l < 16; l++) {
    console.log ("l", l)
}

// perulangan while

r = 5   

while (r < 11) {    
    console.log ("r", r)
    r++
}

k = 5

while (k < 11) {
    console.log ("k", k)
    k++
}

v = 5

while (v < 11) {
    console.log ("v", v)
    v++
}

// perulangan do while

n = 5

do {
    console.log ("n", n)
    n++
}  while (n < 11)

p = 5   

do {
    console.log ("p", p)
    p++
} while (p < 11)

// array 

li = ["vfeliciwa", "yovita_15", "Fun", "tes"]

for (i = 0; i < li.length; i++) {
    console.log (li [i])
}

console.log (li)

ji = ["JavaScript", "Python", "HTML", "CSS"]

for (i = 0; i < ji.length; i++) {
    console.log (ji [i])
}

console.log (ji)

// objek 

let deja = {
    "nama" : "Habib Muzakki Piliang",
    "kelas" : "12 Agama",
    "lomba" : "OSN Informatika",
    "asal" : "Sumbar",
    "tinggal" : "Kota Serang",
    "tinggi" : "170 cm",
    "berat" : "50 kg",
}

console.log ("Nama :", deja ["nama"]) 
console.log ("Kelas :", deja ["kelas"])
console.log ("Lomba :", deja ["lomba"])
console.log ("Asal :", deja ["asal"])
console.log ("Tinggal :", deja ["tinggal"])
console.log ("Tinggi :", deja ["tinggi"])
console.log ("Berat :", deja ["berat"])
console.log (deja)

// function

// tanpa parameter

function halo () {
    console.log ("Halo Dunia")
}

halo ()
halo ()
halo ()

function kop () {
    console.log ("Kopi Cimi Time")
}

kop ()  
kop ()
kop ()

function tes () {
    console.log ("Tes Saja")
}

tes ()  
tes ()
tes ()

// dengan parameter

function sapa (nama) {
    console.log ("Halo " + nama)
}

sapa ("Habib Muzakki")
sapa ("vfeliciwa")
sapa ("Yovita_15")
sapa ("Kafe Cimi Time Malang")
sapa ("aufa")
sapa ("aisyah")

function belajar (topik) {  
    console.log ("Saya belajar " + topik)   
}

belajar ("JavaScript")
belajar ("Python")
belajar ("HTML")
belajar ("CSS")

function lomba (aLomba) {
    console.log ("Saya mengikuti lomba " + aLomba)
} 

lomba ("OSN Informatika")
lomba ("KSM Matematika")
lomba ("LCC PAI")
lomba ("Debat Bahasa Inggris")

function sekolah (aSekolah) {
    console.log ("Saya sekolah di " + aSekolah)
}

sekolah ("MAN 2 Kota Serang")
sekolah ("SMPIT Al-Izzah Serang")
sekolah ("SDIT Al-Izzah Serang")

// dengan return

function tambah (a, b) {
    return a + b
}

hasil = tambah (5, 4)
console.log (hasil)


function kali (x, y) {
    return x * y
}

hasil = kali (6, 7)
console.log (hasil)

function bagi (m, n) {
    return m / n
}

hasil = bagi (20, 4)
console.log (hasil)