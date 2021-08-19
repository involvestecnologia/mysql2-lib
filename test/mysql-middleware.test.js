'use_strict'

const assert = require('assert').strict
const chai = require('chai')
const chaiHttp = require('chai-http')
const express = require('express')

const { MysqlMiddleware } = require('../index')

chai.use(chaiHttp)

describe('Integration tests of MysqlMiddleware', function () {
  it('should inject mysqlRepository at the request', async function () {
    const app = express()
    app.use(MysqlMiddleware.setMysqlIntegration)
    const route = '/'
    app.get(route, (req, res) => {
      assert(req.integrations.mysql)
      res.sendStatus(200)
    })

    const res = await chai.request(app).get(route)
    assert.equal(res.statusCode, 200)
  })
})
