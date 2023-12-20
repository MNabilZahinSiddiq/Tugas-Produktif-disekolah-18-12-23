// no1 start
let a = 2
let b = 2
let c = 2

if(a > b && a > c) {
    bilangan = "A adalah yang terbesar"
} else if(b > a && b > c) {
    bilangan = "B adalah yang terbesar"
} else if(c > a && c > b) {
    bilangan = "C adalah yang terbesar"
} else {
    bilangan = "sama besar"
}

console.log(bilangan)
// no1 end

// no2 start
let angka = 0

if(angka > 0) {
    PON = "Positif"
} else {
    PON = "Negatif"
}

if(angka % 2 == 0) {
    GG = "Genap"
} else {
    GG = "Ganjil"
}

console.log(`berarti ${angka} adalah: ${PON} dan ${GG}`)
// no2 end

// no3 start
let lampu = "1";

if(lampu == "1") {
    hasil = "ON"
} else {
    hasil = "OFF"
}

console.log("lampunya: " + hasil)
// no3 end


// no4 start
let barang1 = 100000
let barang2 = 100000
let barang3 = 100000

let jumlah = barang1 + barang2 + barang3

let diskon = 10/100 * jumlah

if(jumlah > 100000) {
    harga = jumlah - diskon
} else {
    harga = jumlah
}

console.log(`harga yang harus di bayar adalah ${harga}`)
// no4 end

// no5 start
let bilangan1 = "Rp 100.000"
let bilangan2 = "Rp 200.000"
let bilangan3 = "Rp 300.000"

let lembur = 2

if(lembur > 6) {
    gaji = bilangan3
} else if(lembur == 6) {
    gaji = bilangan2
} else if(lembur < 6) {
    gaji = bilangan1
}

console.log(`Maka gaji yang diterima adalah sebesar ${gaji}`)
// no5 end

// no6 start
let tinggi = 400

if(tinggi <= 500) {
    keadaan = "Aman"
} else if(tinggi <= 600.0) {
    keadaan = "Waspada"
} else if(tinggi <= 650.0) {
    keadaan = "Siaga 2"
} else {
    keadaan = "Siaga 1"
}

console.log(`keadaan ketinggian saat ini adalah ${keadaan}`)
// no6 end