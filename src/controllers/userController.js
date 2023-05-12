const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { Op } = require("sequelize");
require("dotenv").config();

module.exports = class UserController {
  async index(req, res) {
    res.status(200).json({ message: "Acesso a rota de usuário" });
  }

  async register(req, res) {
    try {
      const { username, email, password, confirmPassword, profileImage, favorites } = req.body;
      const user = await User.findOne({ where: {
        [Op.or]: [{ username }, { email }]
      } });

      if (user?.username === username) {
        return res.status(400).json({ message: "Username já cadastrado!" });

      } else if (user?.email === email) {
        return res.status(400).json({ message: "Email já cadastrado!" });

      } else {
        if(password === confirmPassword) {
          console.log("entrou")
          const hashedPassword = await bcrypt.hash(password, 10);
          await User.create({
            username,
            email,
            password: hashedPassword,
            profileImage,
            favorites
          });

        } else {
          return res.status(401).json({ message: "As senhas não coincidem!" })

        }
      }
      res.status(201).json({ message: "Usuário cadastrado com sucesso!" });

    } catch (error) {
      res.status(500).json({ error: "Erro no cadastro: " + error.message });
      
    }
  }

  async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ where: { email } });
      if (!user) {
        return res.status(401).json({ message: "Email inválido ou usuário não cadastrado!" });

      }
      const passwordMatch = await bcrypt.compare(password, user.password);

      if (!passwordMatch) {
        return res.status(401).json({ message: "Senha inválida, tente novamente!" });

      }

      const token = jwt.sign({ id: user.username }, process.env.JWT_SECRET, { expiresIn: "24h" });

      res.status(200).json({ token: token, favorites: user.favorites });

    } catch (error) {
      res.status(500).json({ error: "Erro no login: " + error.message });

    }
  }

  async update(req, res) {
    try {
      const { username, email, password, profileImage, favorites } = req.body;
      const usernameParams = req.params.username;
      const user = await User.findOne({ where: { username: usernameParams } });

      if (!user) {
        return res.status(404).json({ message: "Usuário não encontrado!" });

      }
      if (username) {
        user.username = username;

      }
      if (email) {
        user.email = email;

      }
      if (password) {
        const hashedPassword = await bcrypt.hash(password, 10);
        user.password = hashedPassword;

      }
      if (profileImage) {
        user.profileImage = profileImage;

      }
      if (favorites) {
        user.favorites = favorites;

      }
      await user.save();
      res.status(200).json({ message: "Usuário atualizado com sucesso!" });

    } catch (error) {
      res.status(500).json({ error: "Erro no PATCH: " + error.message });

    }
  }

  async delete(req, res) {
    try {
      const username = req.params.username;
      const user = await User.findOne({ where: { username: username } })

      if (!user) {
        return res.status(404).json({ message: "Usuário não encontrado!" });

      } else {
        await user.destroy();

      }
      res.status(200).json({ message: "Usuário deletado com sucesso!" });

    } catch (error) {
      res.status(500).json({ error: "Erro no DELETE: " + error.message });

    }
  }

  async getUser(req, res) {
    try {
      const JWT = req.header("Authorization").replace("Bearer ", "");
      const decodedToken = jwt.verify(JWT, process.env.JWT_SECRET);
      const user = await User.findOne({ where: { username: decodedToken.id } });

      if (!user) {
        throw new Error();

      }

      res.status(200).json({ user });

    } catch (error) {
      res.status(401).json({ error: "Não autorizado!" });

    }
  }

  async getFavorites(req, res) {
    try {
      const JWT = req.header("Authorization").replace("Bearer ", "");
      const decodedToken = jwt.verify(JWT, process.env.JWT_SECRET);
      const user = await User.findOne({ where: { username: decodedToken.id } });

      if (!user) {
        throw new Error();

      }

      res.status(200).json({ favorites: user.favorites });

    } catch (error) {
      res.status(401).json({ error: "Não autorizado!" });

    }
  }
}