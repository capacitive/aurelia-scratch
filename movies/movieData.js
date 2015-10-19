import {inject} from "aurelia-framework";
import {HttpClient} from "aurelia-http-client";

let baseUrl = "http://localhost:9090/api/movies";

@inject(HttpClient)
export class MovieData{
	constructor(httpClient){
		httpClient.configure(x => {
			//x.withHeader('Origin', 'http://localhost:9090');
		});
		this.http = httpClient;
	}

	getById(id){
		return this.http.get(`${baseUrl}/${id}`)
		.then(response => response.content);
	}

	getAll(){
		return this.http.get(baseUrl)
				   .then(response => {
					  return response.content;
					  });
	}

	save(movie){
		//final Aurelia version:
		return this.http.put(baseUrl, movie)
					.then(response => {
						return response.content;
					});

		////pre-release (June 2015):
		// var request = this.http.createRequest();
		// request.asPut()
		// 	   .withUrl(baseUrl)
		// 		 .withHeaders("Access-Control-Allow-Origin", "http://localhost:7006")
		// 	   .withHeader("Accept", "application/json")
		// 		 .withHeader("Content-Type", "application/json")
		// 		 .withContent(movie);
		// return request.send().then(response => response.content);
	}
}
