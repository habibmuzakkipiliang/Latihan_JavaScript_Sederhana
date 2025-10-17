// Hello World by JavaScript

console.log ("Hello World")

// sintaks dasar

console.log ("Kafe Cimi Time Malang")
console.log ("vfeliciwa")
console.log ("Felicia Kurniawati")
console.log ("IBM SkilsBuild")
console.log ("Era Modern")
console.log ("yovita_15")
console.log ("Era Digital")
console.log (124)
console.log (34.5)
console.log (34.9)
console.log (45.19)

// sintaks dasar 2

const rt = 56.9
var juk = "Tes "
let kob = "Era Majapahit "
var yuk = "IBM SkillsBuild"

console.log (rt)
console.log (juk)
console.log (kob)
console.log (yuk)

// sintaks dasar bonus

let nama = "Habib Muzakki"
let kelas = "12 Agama"
let umur = "18 tahun"
let tinggi = "173 cm"
let berat = "60 kg"
let hobi = "Coding"
let star = true

console.log ("Nama lengkap :", nama)
console.log ("Kelas :", kelas) 
console.log ("Umur :", umur)
console.log ("Tinggi badan :", tinggi)
console.log ("Berat badan :", berat)
console.log ("Hobi :", hobi)
console.log ("Status :", star)

// sintaks dasar 3

let ui = "Saran "
let jk = "Terbaik "
let us = "Dari Mpk"

hos = ui + jk + us
console.log (hos)

// tipe data

let namaDepan = "Faiz"
let namaBelakang = "Kurniawan"
let umurku = 17
let jomblo = true
let tinggiBadan = 170.5
let beratBadan = 60

console.log (namaDepan)
console.log (namaBelakang)
console.log (umurku)
console.log (jomblo)
console.log (tinggiBadan)
console.log (beratBadan)

// operator 

let j = 13
let k = 4

console.log (j + k)
console.log (j - k)
console.log (j * k)
console.log (j / k)
console.log (j ** k)
console.log (j % k)

// operator perbandingan

console.log (j > k)
console.log (j < k)
console.log (j == k)
console.log (j || k)
console.log (j && k)
 

// percabangan dasar

let nilai = 100

if (nilai < 90) {
    console.log ("Kamu lulus")
}

else {
    console.log ("Kamu tidak lulus")
}

// percabangan lanjutan

let score = 75

if (score > 85) {
    console.log ("Nilai A")
}

else if (score > 70) {
    console.log ("Nilai B")
}

else {
    console.log ("Nilai C")
}

// nested 

let angka = 10

if (angka > 5) {
    if (true) {
        console.log ("Angka berada di antara 5 dan 15")
    }

    else if (angka == 15) {
        console.log ("Angka adalah 15")
    }
    
    else if (angka == 10) {
        console.log ("Angla adalah 10")
    }
}

else {
    console.log ("Angka tidak berada di antara 5 dan 15")
}

// switch

let oke = 3

switch (oke) {
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
        break
        
    case 5:
        console.log ("5")
        break
        
    case 6:
        console.log ("6")
        break
        
    default:
    console.log ("Default")
}

// for 

for (i = 0; i < 5; i++) {
    console.log ("H", i)
}

for (g = 0; g < 5; g++) {
    console.log ("G", g)
}

for (lt = 0; lt < 15; lt++) {
    console.log ("LT ", lt)
}

// while

let n = 0

while (n < 5) {
    console.log ("n", n)
    n++
}

let mh = 0 

while (mh < 10) {
    console.log ("J", mh)
    mh++
}


// do while

let a = 0

do {
    console.log ("A", a)
    a++
} while (a < 10)

// objek dan list

let li = ["Amanat", "Jujur", "Trust", "Good", "Health"]

console.log (li)

let obj = {
    "nama" : "John",
    "umur" : "20 tahun",
    "hobi" : "Bermain game",
    "kerja" : "Programmer",
    "status" : "Single",
    "tinggi" : "180 cm",
    "berat" : "70 kg",
}

console.log ("Nama :", obj ["nama"])
console.log ("Umur :", obj ["umur"])
console.log ("Hobi :", obj ["hobi"])
console.log ("Kerja :", obj ["kerja"])
console.log ("Status :", obj ["status"])
console.log ("Tinggi badan :", obj ["tinggi"])
console.log ("Berat badan :", obj ["berat"])

// function

function defHui () {
    console.log ("Saya Harus Belajar TKA")
}

defHui ()
defHui ()
defHui ()

function fuiTu () {
    console.log ("Selamat datang")
    console.log ("Tes")
    console.log ("By Habib")
    console.log ("Set")
}

fuiTu ()

function tambah (w, k) {
    return w + k
}

hasil = tambah (5, 8)
console.log (hasil)

function kurang (l, p) {
    return l - p
}

hasil = kurang (10, 9)
console.log (hasil)
