'use_strict'

const assert = require('assert').strict

const { MysqlConnection } = require('../index')

describe('Integration tests for MysqlConnection', function () {
  afterEach(async function () {
    await MysqlConnection.closeConnectionPool()
  })

  it('should connect properly', async function () {
    assert.doesNotReject(await MysqlConnection.getConnectionPool(process.env.MYSQL_URL,
      process.env.MYSQL_USER, process.env.MYSQL_PASSWORD))
  })

  it('should use the same connection object', async function () {
    const pool = await MysqlConnection.getConnectionPool(process.env.MYSQL_URL)
    const pool2 = await MysqlConnection.getConnectionPool(process.env.MYSQL_URL)

    assert.equal(pool, pool2)
  })

  it('should throw error if cant connect', async function () {
    try {
      await MysqlConnection.getConnectionPool('')
    } catch (err) {
      assert.equal(err.code, 'ECONNREFUSED')
    }
  })

  it('should await for connection', async function () {
    const conn = await MysqlConnection.getConnectionPool(process.env.MYSQL_URL,
      process.env.MYSQL_USER, process.env.MYSQL_PASSWORD)

    const promises = []
    const _executeQuery = () => conn.promise().query('SELECT * FROM mysql.db')

    for (let index = 0; index < 100; index++) {
      promises.push(_executeQuery())
    }

    await Promise.all(promises)
  })
})
