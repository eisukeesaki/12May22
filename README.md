# knowledge base

## resources
- [PostgreSQL Process and Memory Architecture](https://www.interdb.jp/pg/pgsql02.html)
- [Sequelize documentation](https://sequelize.org/docs/v6/)
- [Sequelize API reference](https://sequelize.org/api/v7/index.html)
- [sequelize-cli](https://github.com/sequelize/cli)
- [database naming conventions](https://www.postgresql.org/docs/7.0/syntax525.htm)
- [node-postgres documentation](https://node-postgres.com/)

## maps
```

manipulate PostgreSQL server
    brew services
        -- help
        start
        
establish connection to PostgreSQL server
    psql
        help
            \?
            \h
        -U <username> -d dbname
        queries
            don't forget to end query with `;`
        describe table
            `\d "User"`
                don't forget `""`
            
ORM
    object relational mapping
    process of mapping between objects and relational databases
    library
        abstracts db querying
        interfaces db querying using OO paradigm
        encapsulates db query code
        Sequelize
            an implementation of ORM
            installed locally to project
            Migrations
                version control db
                migration file
                    treat like commits or log for changes in db
                    exports functions
                        invoked by sequelize-cli
                            up()
                                logic for transorming table into new state
                            down()
                                logic for reverting changes in table
            sequelize-cli
                CLI for Sequelize
                    installed locally to project as development dependency
                        npm i <package name> --save-dev
                    prj_root/.sequelizerc
                        config file
                            specify arguments to pass to sequelize-cli commands
                    commands
                        init
                            creates empty project
                                creates directories
                                    configs
                                    models
                                    migrations
                                    seeders
                        model:generate
                            generates skeleton files
                                migration
                                Model
                            `npx sequelize-cli model:generate --name User --attributes username:string`
                        db:migrate
                            creates table SequelizeMeta
                                1 stores migration logs
                                    entry of each executed migration
                                2 finds and executes yet-to-be-executed migration files
                                3 creates table according to migration file
            connect to PostgreSQL server
                specify connection configs
                    <config path>/<config file>
                        specified in .sequelizerc
                    export as module
                        key-value pairs
                            read values from .env, write to process.env

db interaction
    layers of abstraction
        low level
            database drivers
                handles
                    connection to database
                    connection pooling
                queries
                    raw SQL
                        send
                        receive
                libraries
                    mysql
                    sqlite3
                    pg
                        take database credentials
                        instantiate database instance
                        connect to database
                        send queries (in the form of strings)
                        asynchronously handle results
        middle level
            query builder
                queries
                    use library provided methods
                libraries
                    knex
                        depends on database drivers
                        queries closely resembles SQL
                        programmatically generate dynamic quries [conveniently](conveniently)
              developers are forced to know the output SQL
        high level
            ORM
                maps
                    a record in a relational database
                    an object in backend app
                define objects to map with records
                    structures
                    relationships
                libraries
                    sequelize
                    bookshelf
                    objection
                    waterline
                    syntax differs sighificantly between libraries
                        difficult to transfer knowledge
                not all queries can be represented as an ORM operation
                    messy project
                        maintain
                            - ORM queries
                            - raw SQL queries


db driver
    node-postgres (a.k.a pg)
        PostgreSQL client
            collection of Node modules
                interfaces PostgreSQL
        features
            connection pooling
                means to reduce communication overhead
                cache of db connections
            non-blocking
                callbacks
                promises
                async/await
                
PostgreSQL
    DBMS
        shared memory
            server process
                postgres
            backend processes
                forked off of server process
                postgres
            background processes
                background writer
                checkpointer
                autovacuum launcher
                WAL writer
                statistic collector
                logging collector
                archiver
            db cluster

hstore
    PostgreSQL
        data type
            key-value pairs
            can be stored within single PostgreSQL value
                        
(sequelize)Model
    abstraction that represents a table
    connection instance
        instantiate
            sequelize = new Sequelize()
        access
            sequelize.models.<Model name>
        name
            singular form of a table name(, which is usually pluralized)
        table name
            inferred
                pluralized Model name 
                    if table name not provided
        define
            sequelize.define(modelName, attributes, options)
                calls Model.init
            extend Model, then call .init(attributes, options)
                `User === sequelize.models.User // true`
                sequelize/src/model.js
                ES6 class
          synchronization
              `Model.sync([options])`
              `sequelize.sync([options])`
          columns
              timestamps
                  automatically added
                      createdAt
                      updatedAt
              default value
                  NULL
              data types
                  `{ DataTypes } = require("sequelize")`
              options
                  constraints

db
    seed
        sample data
        initial data set
    seeding
        population of db
            sample data
            initial data set
            
json-stringify-safe
    stringify objects that has circular reference
    npm module

connect Node instance to PostgreSQL server 
    did
        install and configure DBMS
            PostgreSQL
        start db server
            postgres
            brew services
        install and configure db frontend/client
            psql
        connect db frontend CLI to db server
            psql
            PostgreSQL server
        install ORM
            Sequelize
        install db driver
            node-postgres
        install JSON/hstore serializer/deserializer
            pg-hstore
        install CLI for ORM
            sequelize-cli
        create Model and migraion file
            generate skeletons using sequelize-cli
            migration file
                specify logic to transform table into new state
                specify logic to revert changes of table
            Model file
                extend Sequelize's Model class
                call Model.init(<table attributes>, connection instance)
        create table
            run migration
                db:migrate
            confirm table creation using psql
                table description
                corresponding record in SequelizeMeta table
        seeding
            create db seeds
                create seed file
                    seed:generate
                        `npx sequelize-cli seed:generate --name sample-user`
            run seeds
                `npx sequelize-cli db:seed:all` 
            confirm seeding result using psql
        add db connection configs to .env
        create db connection config file that reads values from .env
        initialize model
            <defined Model>.init(connection)
        ...
                
        
```

