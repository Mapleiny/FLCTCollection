import {BaseServer, StatusCode,ResponseObject,ResponseArray} from './baseServer'
import mysql = require('mysql');
import {IBlog} from '../models/wordpressModel'


let connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : 'maple1105',
	database : 'wordpress'
});
connection.connect();

class WordpressServer extends BaseServer {

	constructor(){
		super();

	}

	getPosts():Promise<IBlog>{
		return this.baseQuery<IBlog>(`SELECT * FROM \`wp_posts\``);
	}

	private baseQuery<T>(query:string):Promise<T>{
		return new Promise((resolve,reject)=>{
			connection.query(query, function(err, results, fields) {
				if (err){
					reject(err);
				}else{
					resolve(results);
				}
			});
		});
	}
}


export let wordpressServer = new WordpressServer();