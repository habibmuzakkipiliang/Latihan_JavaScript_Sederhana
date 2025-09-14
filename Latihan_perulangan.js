// perulangan for 

for (e = 0; e < 5; e++) {
    console.log ("For", e)
}

leh = ["Gui", "Jai", "Hailo"]

for (let a = 0; a < leh.length; a++) {
    console.log (leh [a])
}


hansel = ["Guru", "Mahasiswa", "Dosen", "Rektor"]

for (let c = 0; c < hansel.length; c++) {
    console.log (hansel [c])
}

// perulangan while

let r = 0;

while (r < 5) {
    console.log ("While", r)
    r++
}

// perulangan do while

let t = 0;

do {
    console.log ("Do while", t)
    t++
} while (t < 5)

// switch

let i = 4;

switch (i) {
    case 1:
        console.log ("Senin")
        break
    case 2:
        console.log ("Selasa")
        break
    case 3:
        console.log ("Rabu")
        break
    case 4:
        console.log ("Kamis")
        break
    case 5:
        console.log ("Jumat")
        break
    default:
    console.log ("Sama saja")
}