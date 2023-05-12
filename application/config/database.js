const fs = require("fs");
module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        // client: "mysql",
        // host: env("DATABASE_HOST", "truecaller.mysql.database.azure.com"),
        // port: env.int("DATABASE_PORT", 3306),
        // database: env("DATABASE_NAME", "mtt"),
        // username: env("DATABASE_USERNAME", "truecaller"),
        // password: env("DATABASE_PASSWORD", "deshka@123#?"),
        // ssl: env.bool(
        //   "DATABASE_SSL",
        //   fs.readFileSync(__dirname + "/DigiCertGlobalRootCA.crt.pem")
        // ),
        client: "mysql",
        host: env("DATABASE_HOST", "localhost"),
        port: env.int("DATABASE_PORT", 3306),
        database: env("DATABASE_NAME", "mtt"),
        username: env("DATABASE_USERNAME", "root"),
        password: env("DATABASE_PASSWORD", ""),
      },
      options: {},
    },
  },
});
