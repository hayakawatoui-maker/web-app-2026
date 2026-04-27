const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('トップページです!');
});

app.get('/about', (req, res) => {
    res.send('自己紹介ページです');
});

app.get('/time', (req, res) => {
    const now = new Date().toLocaleString('ja-JP')
    res.send('現在時刻：' + now);
});

app.listen(3000, () => {
    console.log('サーバーが起動しました： http://localhost:3000');
});

