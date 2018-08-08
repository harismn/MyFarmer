
//const { users: User, access_tokens: AccessToken } = require('@models');
console.log("aku dsini cuy")
const {users: User} = require('../models/user')

const axios = require('axios');
const crypt = require('bcrypt');
const config = require('../config/config.json');
const Sequelize = require('sequelize');
const { Op } = Sequelize;

console.log(User)

const userService = {
    find: async (req, res) => {
      try {
        const user = await User.all();
        return res
          .status(200)
          .json(response(true, 'User retrieved successfully', user, null));
      } catch (error) {
        if (error.errors) {
          return res.status(400).json(response(false, error.errors));
        }
        return res.status(400).json(response(false, error.message));
      }
    }
}