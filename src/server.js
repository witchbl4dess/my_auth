const express = require('express');
const userRoutes = require('./routes/userRoutes');
const connectDB = require('./data/connect');

const app = express();
connectDB();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api', userRoutes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
