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