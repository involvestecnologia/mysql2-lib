# @involves/mysql2-lib

[![Build status](https://badge.buildkite.com/724b7254015fc277fe6480cfdafbe57d80178f20359871459d.svg)](https://buildkite.com/involves/nodejs-lib-mysql)

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