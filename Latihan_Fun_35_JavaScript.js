// Hello World by JavaScript

console.log ("Hello World")

// sintaks dasar 1

console.log ("Kafe Cimi Time Malang")
console.log ("Feliciwa Kurniawati")
console.log ("vfeliciwa")
console.log ("yovita_15")
console.log ("M. Wisnu Haris")
console.log ("Tes JS")
console.log ("Tenis Meja")
console.log ("12 Hujan")
console.log ("Rurik")
console.log ("Skotlandia")
console.log (23.0)
console.log (90.0)
console.log (89.3)
console.log (12)

// sintaks dasar 2 

const rt = 56.9
var juk = "Tes "
let kob = "Era Majapahit "
var yuk = "IBM SkillsBuild"

console.log (rt)
console.log (juk)
console.log (kob)
console.log (yuk)


// sintaks dasar 3

let h = "Aku "
let j = "mau menjadi "
let u = "seorang pengembang inovasi teknologi "
let k = "terbaru "

res = h + j + u + k
console.log (res)

let ju = "Aku "
let jk = "mau menjadi seorang "
let io = "mandiri dan bisa ikut lomba coding "
let yu = "di Universitas Indonesia "

kol = ju + jk + io + yu
console.log (kol)

// tipe data 

let namaLengkap = "Habib Muzakki"
let namaPanggil = "Habib"
let umur = 18
let jomblo = true
let tinggiBadan = 170.5
let beratBadan = 60

console.log ("Nama lengkap :", namaLengkap)
console.log ("Nama panggil :", namaPanggil)
console.log ("Umur :", umur)
console.log ("Jomblo :", jomblo)
console.log ("Tinggi Badan :", tinggiBadan)
console.log ("Berat Badan :", beratBadan)

// operator 

let y = 10
let x = 5

console.log (x + y)
console.log (x - y)
console.log (x * y)
console.log (x ** y)
console.log (x / y)
console.log (x % y)

// perbandingan

console.log (x == y)
console.log (x < y)
console.log (x > y)
console.log (x || y)
console.log (x && y)

// percabangan dasar

let hu = 8 

if (hu > 5) {
    console.log ("Besar")
}

else {
    console.log ("Kecil")
}

// percabangan lanjutan

let ip = 11

if (ip < 9) {
    console.log ("Besar")
}

else if (ip > 3) {
    console.log ("Kecil")
}

else {
    console.log ("Default")
}

// percabangan lanjutan 2

let jl = 8 

if (jl > 5) {
    console.log ("Besar")
}

else if (jl == 4) {
    console.log ("4")
}

else if (jl == 3) {
    console.log ("3")
}

else if (jl == 2) {
    console.log ("2")
}

else {
    console.log ("Semula")
}

// percabangan nested

let kl = 10
 
if (kl > 9){
    if (true) {
        console.log ("Besar")
    }
    
    else if (kl == 8) {
        console.log ("kecil 4")
    }
    
    else if (kl == 4) {
        console.log ("Kecil  1")
    }
    
    else if (kl == 3) {
        console.log ("kecil 2")
    }
}

else {
    console.log ("Default")
}

// switch

let jio = 4

switch (jio) {
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
        
    default:
    console.log ("Default")
}

// for 

for (t = 0; t < 5; t++){
    console.log ("t", t)
}

for (f = 0; f < 5; f++) {
    console.log ("f", f)
}

for (d = 0; d < 5; d++) {
    console.log ("d", d)
}

// while 

let we = 0

while (we < 5) {
    console.log ("we", we)
    we++
}

let ho = 0

while (ho < 5) {
    console.log ("ho", ho)
    ho++
}


let qw = 0

while (qw < 5) {
    console.log ("qw",qw)
    qw++
}

// do while

let aj = 0

do {
    console.log ("aj", aj)
    aj++
} while (aj < 5)

let wer = 0

do {
    console.log ("wer", wer)
    wer++
} while (wer < 5)

let rk = 0

do {
    console.log ("rk", rk)
    rk++
} while (rk < 5)

// list dan objek

li = ["Tas", "White", "Wer", "Ras", "Rare"]

console.log (li)

ok = {
    "nama" : "Habib Muzakki",
    "kelas" : "12 Agama",
    "tinggi" : "173 cm",
    "berat" : "60 kg",
}

console.log ("Nama :", ok ["nama"])
console.log ("Kelas :", ok ["kelas"])
console.log ("Tinggi :", ok ["tinggi"])
console.log ("Berat :", ok ["berat"])

// function 


function def () {
    console.log ("Halo Dunia saya")
}

def ()
def ()
def ()

function guf () {
    console.log ("Halo Yovita")
    console.log ("Halo MPPT")
    console.log ("Halo Felicia")
    console.log ("Halo Dani")
}

guf ()

function tambah (w, o) {
    return w + o
}

hasil = tambah (10, 9)
console.log (hasil)

function kali (h, q) {
    return h * q
}

hasil = kali (10, 20)
console.log (hasil)