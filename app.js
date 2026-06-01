app.use(express.json()); 
app.post('/api/test', (req, res) => {
  const { title, message } = req.body;

  const newItem = { title, message };

  console.log("受け取ったデータ:", newItem);

  res.json(newItem);
});
app.listen(process.env.PORT || 3000, () => {
    console.log(`サーバが起動しました: http://localhost:${process.env.PORT || 3000}`);
});
