<!-- sonar-badges: pending-token -->
[![Quality gate](https://sonarcloud.io/api/project_badges/quality_gate?project=involvestecnologia_mysql2-lib)](https://sonarcloud.io/summary/new_code?id=involvestecnologia_mysql2-lib)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=involvestecnologia_mysql2-lib&metric=coverage)](https://sonarcloud.io/summary/new_code?id=involvestecnologia_mysql2-lib)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=involvestecnologia_mysql2-lib&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=involvestecnologia_mysql2-lib)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=involvestecnologia_mysql2-lib&metric=bugs)](https://sonarcloud.io/summary/new_code?id=involvestecnologia_mysql2-lib)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=involvestecnologia_mysql2-lib&metric=vulnerabilities)](https://sonarcloud.io/summary/new_code?id=involvestecnologia_mysql2-lib)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=involvestecnologia_mysql2-lib&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=involvestecnologia_mysql2-lib)
[![Technical Debt](https://sonarcloud.io/api/project_badges/measure?project=involvestecnologia_mysql2-lib&metric=sqale_index)](https://sonarcloud.io/summary/new_code?id=involvestecnologia_mysql2-lib)
[![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=involvestecnologia_mysql2-lib&metric=duplicated_lines_density)](https://sonarcloud.io/summary/new_code?id=involvestecnologia_mysql2-lib)
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=involvestecnologia_mysql2-lib&metric=reliability_rating)](https://sonarcloud.io/summary/new_code?id=involvestecnologia_mysql2-lib)
[![Lines of Code](https://sonarcloud.io/api/project_badges/measure?project=involvestecnologia_mysql2-lib&metric=ncloc)](https://sonarcloud.io/summary/new_code?id=involvestecnologia_mysql2-lib)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=involvestecnologia_mysql2-lib&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=involvestecnologia_mysql2-lib)

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
