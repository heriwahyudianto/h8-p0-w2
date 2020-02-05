// 1. Melakukan Looping Menggunakan While
console.log('LOOPING PERTAMA');
var flag = 2;
while (flag <=20) {
  console.log(`${flag} - I love coding`);
  flag +=2;
}
console.log('LOOPING KEDUA');
var flag = 20;
while (flag >=2) {
  console.log(`${flag} - I love coding`);
  flag -=2;
}

// 2. Melakukan Looping Menggunakan For
console.log('LOOPING PERTAMA');
for (i=1; i<=20; i++) {
  console.log(`${i} - I love coding`);
}
console.log('LOOPING KEDUA');
for (i=20; i>=1; i--) {
  console.log(`${i} - I love coding`);
}

// 3. Angka Ganjil dan Genap
//contoh - ganjil genap
for(i=1; i <= 100; i++) {
  if (i%2 === 0) {
    console.log(`GENAP`);
  } else {
    console.log(`GANJIL`);
  }
}

//contoh - untuk pertambahan counter 2
for(i=1; i <= 100; i+=2) {
  if (i%3 === 0) {
    console.log(`${i} kelipatan 3`);
  }
}

//contoh - untuk pertambahan counter 5
for(i=1; i <= 100; i+=5) {
  if (i%6 === 0) {
    console.log(`${i} KELIPATAN 6`);
  }
}

//counter sekarang = 10,
for(i=1; i <= 100; i+=9) {
  if (i%10 === 0) {
    console.log(`${i} KELIPATAN 10`);
  }
}
