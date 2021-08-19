# @involves/mysql2-lib

[![Build status](https://badge.buildkite.com/87ff5c12adfc88e2e42d690f00aac6f5f26bcda2a9c709944f.svg)](https://buildkite.com/involves/nodejs-lib-mysql2)

## Install
```
npm install @involves/mysql2-lib --save
```

## Example usage

```javascript
    const express = require('express')
    const { MysqlMiddleware } = require('@involves/mysql2-lib')

    const app = express()
    app.use(MysqlMiddleware.setMysqlIntegration)
    app.get('/:id', (req, res) => {
        const record = await req.integrations.mysql.query(`SELECT * FROM db.table WHERE id = ${req.query.id}`, 
        res.send(record)
    })
```

## How to run the tests

At the terminal, just type the command:
```
make test
```