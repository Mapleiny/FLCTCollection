"use strict";
const baseServer_1 = require('./baseServer');
const mysql = require('mysql');
let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'maple1105',
    database: 'wordpress'
});
connection.connect();
class WordpressServer extends baseServer_1.BaseServer {
    constructor() {
        super();
    }
    getPosts() {
        return this.baseQuery(`SELECT * FROM \`wp_posts\``);
    }
    baseQuery(query) {
        return new Promise((resolve, reject) => {
            connection.query(query, function (err, results, fields) {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(results);
                }
            });
        });
    }
}
exports.wordpressServer = new WordpressServer();
