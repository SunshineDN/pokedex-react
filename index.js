require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const userRouter = require('./src/routes/user');
const sequelize = require('./src/config/config');

const PORT = process.env.EXTERNAL_PORT || 3000;

app.use(cors());
app.use(express.json());
app.use('/users', userRouter);

sequelize
  .sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(`Erro ao sincronizar com o banco de dados: ${error}`);
  });
