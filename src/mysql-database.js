'use_strict'

class MysqlDatabase {
  constructor (connectionPool) {
    this.connectionPool = connectionPool
    this.promise = connectionPool.promise()
  }

  /**
   * Correct formats your query
   * @param {string} sql - Base SQL
   * @param {string[]} values - Parameters of SQL
   * @returns formated SQL with the parameters
   */
  format (sql, values) {
    return this.promise.format(sql, values)
  }

  query (sql) {
    return this.promise.query(sql)
  }
}

module.exports = MysqlDatabase
