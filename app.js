import {bindable} from 'aurelia-framework';

var appName = "Aurelia Space Station";
var appVersion = 1;
var appTitle = appName + " " + appVersion;

export class App{
	router;

	configureRouter(config, router){
		this.router = router;

		config.map([
			{ route:["./", "", "list"],
				moduleId:"movies/list",
				title:"List",
				name:"home",
			  	nav:true },
			{ route:"about",
			  	moduleId:"about/about",
			  	title:"About",
			  	nav:true },
			{ route: ["details/:id"],
				moduleId:"movies/details",
				name:"details"},
			{ route: "edit/:id",
				moduleId: "movies/edit",
				name: "edit"},
			{ route: "create",
				moduleId: "movies/edit"},
			{ route: "play",
				moduleId: "about/about",
				title: "Clips",
				nav: true }
		]);
	};
}
