const MysqlConnection = require('./mysql-connection')
const MysqlDatabase = require('./mysql-database')

class MysqlMiddleware {
  static async setMysqlIntegration (req, _res, next) {
    const connectionPool = await MysqlConnection.getConnectionPool(
      process.env.MYSQL_URL, process.env.MYSQL_USER, process.env.MYSQL_PASSWORD, process.env.MYSQL_PORT)
    const mysql = new MysqlDatabase(connectionPool)
    if (!req.integrations) req.integrations = {}
    req.integrations.mysql = mysql
    next()
  }
}

module.exports = MysqlMiddleware
