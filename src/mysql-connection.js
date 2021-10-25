'use_strict'

const mysql = require('mysql2')

class MysqlConnection {
  /**
   * Connects to Mysql
   * @param {string} host - IP or name to establish connection. Example {mysql-pod-name}:3306
   * @param {string} user - username to login
   * @param {string} password - password to login
   */
  static async getConnectionPool (host, user = 'root', password = '') {
    this.connectionPool = await _connect(this.connectionPool, host, user, password)
    return this.connectionPool
  }

  /**
   * Closes the connections
   */
  static async closeConnectionPool () {
    if (this.connectionPool && !this.connectionPool._closed) {
      await this.connectionPool.end()
      this.connectionPool = undefined
    }
  }
}

const _connect = async (connectionPool, host, user, password) => {
  if (connectionPool && !connectionPool._closed) return connectionPool

  const connection = mysql.createPool(
    {
      connectionLimit: process.env.MYSQL_NUMBER_OF_CONNECTIONS || 10,
      host,
      password,
      user,
      waitForConnections: false
    }
  )

  await connection.promise().query('SELECT 1+1 AS test')
  return connection
}

module.exports = MysqlConnection
