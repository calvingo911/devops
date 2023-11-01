# devops-bbkal
website calculator

# Tahap-tahap menjalankan website di container DOCKER

- Download file code github
- Extract file menjadi sebuah folder dan ,
- Buka terminal pada folder tersebut secara langsung dengan menggunakan <b>git bash</b>

- docker run mysql
  
- docker 

- <b>docker-compose up</b>

Klik link yang sudah di create pada docker :
- localhost:3000 (nodejs / web)
- localhost:8080 (phpmyadmin)

<h2>Infomasi Jika Ada yg Error</h2>
<h4>Buka bagian <b>docker-compose.yaml</b></h4>

- Pastikan host pada bagian phpmyadmin sesuai dengan container pada mysql </br>
  >> contoh : PMA_HOST=bbkal-mysql-1  (bbkal-mysql-1 -> nama container dari mysql)
  
- Dan juga pastikan PORT nodejs dan phpmyadmin tidak disamakan. Khusus untuk node js, PORT harus sesuai dengan PORT dari index.js

<h4>Buka bagian <b>dockerfile</b></h4>

- pastikan versi node yang di taruh sesuai dengan versi yang di run pada docker</br>

   >> FROM node:<b>20.9.0-slim</b>



<h1>Kekurangan</h1>
- Database yang ada pada phpmyadmin masih belum bisa terhubung pada website
