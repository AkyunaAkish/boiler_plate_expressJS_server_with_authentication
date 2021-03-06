var knex = require('../../../db_config/knex')
var jwt = require('jsonwebtoken')
var bcrypt = require('bcrypt')

exports.signIn = function(body) {
  return new Promise(function(resolve, reject) {
    if (!body || Object.keys(body).length === 0 && body.constructor === Object) {
      reject({
        error: 'The form was not properly completed'
      })
    } else if (body && Object.keys(body).length > 0 && body.constructor === Object) {
      if (body.username && typeof body.username === 'string' && body.password && typeof body.password === 'string') {
        return knex('users')
          .where({
            username: body.username.toLowerCase()
          })
          .first()
          .then(function(user) {
            if (user && bcrypt.compareSync(body.password, user.password)) {
              var user_obj = {
                id: user.id,
                username: user.username
              }
              var token = jwt.sign({
                id: user.id
              }, process.env.SECRET)
              var userObj = {
                id: user_obj.id,
                username: user_obj.username,
                token: token
              }
              resolve({
                user: userObj
              })
            } else if (user) {
              reject({
                error: 'Username or password incorrect'
              })
            } else {
              reject({
                error: 'User with that username doesn\'t exist in the database'
              })
            }
          })
          .catch(function(err) {
            reject({
              error: 'User with that username doensn\'t exist in the database: ' + err
            })
          })
      }
    }
  })
}
