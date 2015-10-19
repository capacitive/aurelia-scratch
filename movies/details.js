import {inject} from "aurelia-framework";
import {MovieData} from "movies/movieData";

@inject(MovieData)
export class Details{
	constructor(movieData){
		this.data = movieData;
	}
	
	activate(params){
		//aurelia router waits for promise to resolve;
		//promise rejection - router cancels navigation
		return this.data.getById(params.id)
				.then(movie => this.movie = movie);
	}
}