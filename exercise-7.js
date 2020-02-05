// 1. Menyusun Barisan Bintang
var rows1; // input the number of rows
rows1 = 5;
for (i = 1; i <= rows1; i++) {
  console.log('*');
}

// 2. Menyusun Barisan Bintang Dengan Nested Looping
var rows2; // input the number of rows
rows2 = 5;
for (i = 1; i <= rows2; i++) {
  var column = '';
  for (j = 1; j <= rows2; j++) {
    column += '*';
  }
  console.log(column);
}

// 3. Menyusun Barisan Tangga Bintang Dengan Nested Looping
var rows3; // input the number of rows
rows3 = 5;
for (i = 1; i <= rows3; i++) {
  var column = '';
  for (j = 1; j <= i; j++) {
    column += '*';
  }
  console.log(column);
}
