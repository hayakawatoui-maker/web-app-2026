app.use(express.json()); 
app.post('/api/test', (req, res) => {
  const { title, message } = req.body;

  const newItem = { title, message };

  console.log("受け取ったデータ:", newItem);

  res.json(newItem);
});
