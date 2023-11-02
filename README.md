# devops-bbkal
website calculator

# Tahap-tahap menjalankan website di container DOCKER

- Download file code github
- Extract file menjadi sebuah folder dan ,
- Buka terminal pada folder tersebut secara langsung dengan menggunakan <b>git bash</b>

Image yang diperlukan :

- docker run mysql
  
- docker pull node

- docker pull dbeaver/cloudbeaver


Hal yang perlu di Build setelah menginstall image dan code :

- docker volume create bbkaldata

nb : untuk mencreate volume dengan nama bbkaldata

- docker-compose build

- docker-compose up

- Setelah sudah jalan didocker, maka install database dbeaver supaya mysql nya bisa konek ke database :
  
>>https://dbeaver.io/download/

- Nb: Database tidak harus dbeaver, bisa dengan database manager lainnya

Setelah selesai download, maka koneksikan databasenya dan dibuatkan table.



Ketika sudah selesai, Klik link yang sudah di create pada docker :
- localhost:3000 (nodejs / web)


<h2>Infomasi Jika Ada yg Error</h2>
<h4>Buka bagian <b>docker-compose.yaml</b></h4>

- Pastikan host pada bagian phpmyadmin sesuai dengan container pada mysql </br>
  
- Dan juga pastikan PORT nodejs dan phpmyadmin tidak disamakan. Khusus untuk node js, PORT harus sesuai dengan PORT dari index.js

<h4>Buka bagian <b>dockerfile</b></h4>

- pastikan versi node yang di taruh sesuai dengan versi yang di run pada docker</br>

   >> FROM node:<b>20.9.0-slim</b>


