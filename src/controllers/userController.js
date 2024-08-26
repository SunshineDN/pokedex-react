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
        console.log('Username já cadastrado!');
        return res.status(400).json({ message: "Username já cadastrado!" });

      } else if (user?.email === email) {
        console.log('Email já cadastrado!');
        return res.status(400).json({ message: "Email já cadastrado!" });

      } else {
        if(password === confirmPassword) {
          console.log("Senhas coincidem!");
          const hashedPassword = await bcrypt.hash(password, 10);
          await User.create({
            username,
            email,
            password: hashedPassword,
            profileImage,
            favorites
          });

        } else {
          console.log("Senhas não coincidem!");
          return res.status(401).json({ message: "As senhas não coincidem!" })

        }
      }
      console.log('Usuário cadastrado com sucesso!');
      res.status(201).json({ message: "Usuário cadastrado com sucesso!" });

    } catch (error) {
      console.log('Erro Interno do Servidor - Cadastro:', error);
      res.status(500).json({ message: "Erro Interno do Servidor"});
      
    }
  }

  async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ where: { email } });
      if (!user) {
        console.log('Email inválido ou usuário não cadastrado!');
        return res.status(401).json({ message: "Email inválido ou usuário não cadastrado!" });
        
      }
      console.log('Usuário encontrado');
      console.log('Comparando senhas...');
      const passwordMatch = await bcrypt.compare(password, user.password);

      if (!passwordMatch) {
        console.log('Senha inválida, tente novamente!');
        return res.status(401).json({ message: "Senha inválida, tente novamente!" });

      }

      console.log('Gerando token...');
      const token = jwt.sign({ id: user.username }, process.env.JWT_SECRET, { expiresIn: "24h" });

      res.status(200).json({ token: token, favorites: user.favorites });

    } catch (error) {
      console.log('Erro Interno do Servidor - Login:', error);
      res.status(500).json({ message: "Erro Interno do Servidor" });

    }
  }

  async update(req, res) {
    try {
      const { username, email, password, confirmPassword, profileImage, favorites } = req.body;
      const usernameParams = req.params.username;
      const user = await User.findOne({ where: { username: usernameParams } });

      if (!user) {
        console.log('Usuário não encontrado!');
        return res.status(404).json({ message: "Usuário não encontrado!" });

      }

      if (username) {
        if(username !== usernameParams) {
          const userExists = await User.findOne({ where: { username } });
          if(userExists) {
            console.log('Username já cadastrado!');
            return res.status(400).json({ message: "Username já cadastrado!" });
  
          }
        }
        user.username = username;


      }
      if (email) {
        if(email !== user.email) {
          const emailExists = await User.findOne({ where: { email } });
          if(emailExists) {
            console.log('Email já cadastrado!');
            return res.status(400).json({ message: "Email já cadastrado!" });
  
          }
        }
        user.email = email;

      }
      if (password) {
        if (confirmPassword) {
          if (password !== confirmPassword) {
            console.log('As senhas não coincidem!');
            return res.status(401).json({ message: "As senhas não coincidem!" });
  
          }
          const hashedPassword = await bcrypt.hash(password, 10);
          user.password = hashedPassword;

        } else {
          console.log('Confirme a senha para atualizar!');
          return res.status(401).json({ message: "Confirme a senha para atualizar!" });

        }
      }
      if (profileImage) {
        user.profileImage = profileImage;

      }
      if (favorites) {
        user.favorites = favorites;

      }
      await user.save();
      if (username) {
        const token = jwt.sign({ id: user.username }, process.env.JWT_SECRET, { expiresIn: "24h" });
        console.log('Usuário atualizado com sucesso!');
        return res.status(200).json({ token: token, message: "Usuário atualizado com sucesso!" });

      }
      console.log('Usuário atualizado com sucesso!');
      res.status(200).json({ message: "Usuário atualizado com sucesso!" });

    } catch (error) {
      console.log('Erro Interno do Servidor - Update:', error);
      res.status(500).json({ message: "Erro Interno do Servidor" });

    }
  }

  async delete(req, res) {
    try {
      const username = req.params.username;
      const user = await User.findOne({ where: { username: username } })

      if (!user) {
        console.log('Usuário não encontrado!');
        return res.status(404).json({ message: "Usuário não encontrado!" });

      } else {
        await user.destroy();

      }
      console.log('Usuário deletado com sucesso!');
      res.status(200).json({ message: "Usuário deletado com sucesso!" });

    } catch (error) {
      console.log('Erro Interno do Servidor - Delete:', error);
      res.status(500).json({ message: "Erro Interno do Servidor"});

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

      console.log('Usuário encontrado!');
      res.status(200).json({ user });

    } catch (error) {
      console.log('Erro Interno do Servidor - Get User:', error);
      res.status(401).json({ message: "Não autorizado!" });

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

      console.log('Favoritos encontrados!');
      res.status(200).json({ favorites: user.favorites });

    } catch (error) {
      console.log('Erro Interno do Servidor - Get Favorites:', error);
      res.status(401).json({ message: "Não autorizado!" });

    }
  }

  async addFavorite(req, res) {
    try {
      const JWT = req.header("Authorization").replace("Bearer ", "");
      const decodedToken = jwt.verify(JWT, process.env.JWT_SECRET);
      const user = await User.findOne({ where: { username: decodedToken.id } });

      if (!user) {
        throw new Error();

      }
      const { favorites } = req.body;

      if(favorites === user.favorites) {
        console.log('A lista de favoritos não mudou!');
        return res.status(400).json({ message: "Sua lista de favoritos não mudou!" });

      }

      user.favorites = favorites;
      await user.save();

      console.log('Favoritos atualizados com sucesso!');
      res.status(200).json({ favorites: user.favorites });

    } catch (error) {
      console.log('Erro Interno do Servidor - Add Favorite:', error);
      res.status(401).json({ message: "Não autorizado!" });

    }
  }
}