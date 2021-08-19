'use_strict'

const assert = require('assert').strict

const { MysqlConnection, MysqlDatabase } = require('../index')

describe('Integration tests for MysqlDatabase', function () {
  let pool

  beforeEach(async function () {
    pool = await MysqlConnection.getConnectionPool(process.env.MYSQL_URL)
  })

  afterEach(async function () {
    await MysqlConnection.closeConnectionPool()
  })

  it('should query properly', async function () {
    const repo = new MysqlDatabase(pool)
    const [rows] = await repo.query('SELECT * FROM mysql.db')
    assert.equal(rows.length, 2)
  })

  it('should throw error if db is not set at sql', async function () {
    const repo = new MysqlDatabase(pool)
    try {
      await repo.query('SELECT * FROM db')
    } catch (err) {
      assert.equal(err.code, 'ER_NO_DB_ERROR')
    }
  })
})
