//jspm module loading (pre-aurelia): 
//import {sayHello} from 'greeter';
//sayHello();

import {inject} from "aurelia-framework";
import {MovieData} from "movies/movieData";
//local http calls:
//import {HttpClient} from "aurelia-http-client";

var baseUrl = "http://localhost:9090/api/";

//@inject(HttpClient)
@inject(MovieData)
export class List{
	constructor(movieData){//(httpClient){
		this.message = "";
		this.movieData = movieData;
		//simple case - instance of HttpClient:
		//this.http = new HttpClient();
		//this.http = httpClient;	
	}
	
	//one way to inject:
	//static inject(){return [HttpClient]}
	
	activate(){
		this.message = "Hello from Aurelia!";
		return this.movieData
				   .getAll()
				   .then(movies => this.movies = movies);
		// return this.http.get(baseUrl + "movies")
		// 				.then(response => {
		// 					this.movies = response.content;
		// 				});
	}
	
	// changeMessage(){
	// 	this.message = "Goodbye from Aurelia!";
	// }
}