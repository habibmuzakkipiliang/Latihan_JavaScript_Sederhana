console.log ("Hello World")

console.log (124)
console.log (34.5)

// sintaks dasar

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
    if (angka < 15) {
        console.log ("Angka berada di antara 5 dan 15")
    }

    else if (angka == 15) {
        console.log ("Angka adalah 15")
    }
}
else {
    console.log ("Angka tidak berada di antara 5 dan 15")
}

// objek

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