//index.js

const express = require('express'); //설치한 express module을 불러와서 변수(express)에 담는다.
const app = express();  //express를 실행하여 app object를 초기화 한다.

app.get('/', (req, res) => {    // '/' 위치에 'get'요청을 받는 경우
    res.send('Hello World!')    //Hello World를 보낸다.
})

const port = 3000;    //사용할 포트 번호를 port 변수에 넣음.
app.listen(port, () => {    //port 변수를 이용하여 3000번 포트에 node.js 서버를 연결함
    console.log(`Example app listening at http://localhost:${port}`)    //서버가 실행되면 console 창에 찍힘
})

