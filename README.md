#Api Untuk Produk

Lakukan "npm install" pada terminal atau command line

Setelah itu buat database dan isi nama database pada config/config.json

dan lakukan "node_modules/.bin/sequelize db:migrate" pada terminal

1. Pembuatan user 
'{namadomain}/api/registrasi/users' METHOD = POST
{
    "frist_name": "Muhammad Rafly",
    "last_name": "Syahputra",
    "email": "raflyssyahputra@gmail.com",
    "password": "rafly123456"
}

2. Login
'{namadomain}/api/auth/signin' METHOD = POST
{
    "email": "raflyssyahputra@gmail.com",
    "password": "rafly123456"
}

3. Input Produk
'{namadomain}/api/insert/peroduk' METHOD = POST
masukan header token pada tahap ini untuk memastikan user sudah login atau belum 
x-access-token : {token user}

Setelah itu di isi dengan form data dikarenakan akan mengupload file
kode_produk : {kode produk yang ingin di input}
nama_produk : {nama produk yang ingin di input}
qty : {quantity produk yang ingin di input}
file : {dan gambar produk berupa foto atau img}

3. Ambil Detail Produk
'{namadomain}/api/get/peroduk/:id' METHOD = GET
masukan header token pada tahap ini untuk memastikan user sudah login atau belum 
x-access-token : {token user}

4. Ambil Semua Produk
'{namadomain}/api/all/peroduk' METHOD = GET
masukan header token pada tahap ini untuk memastikan user sudah login atau belum 
x-access-token : {token user}

5. Update Produk
'{namadomain}/api/update/peroduk/:id' METHOD = PUT
masukan header token pada tahap ini untuk memastikan user sudah login atau belum 
x-access-token : {token user}

Setelah itu di isi dengan form data dikarenakan akan mengupload file
kode_produk : {kode produk yang ingin di update}
nama_produk : {nama produk yang ingin di update}
qty : {quantity produk yang ingin di update}
untuk file optional dikarenakan jika tidak di isi maka akan menggunakan file yang lama
file : {dan gambar produk berupa foto atau img}

4. Delete Produk
'{namadomain}/api/delete/peroduk/:id' METHOD = Delete
masukan header token pada tahap ini untuk memastikan user sudah login atau belum 
x-access-token : {token user}
