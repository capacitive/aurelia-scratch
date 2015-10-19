export function configure(aurelia){
	aurelia.use
		   .standardConfiguration()
		   .developmentLogging()
			 .plugin("aurelia-validation")
			 .plugin("resources");
		   //.eventAggregator

    aurelia.start()//document is implied
		   .then(a => a.setRoot('app', document.body));
}
