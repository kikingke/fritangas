var app_fireBase = {};
(function(){
var config = {
    apiKey: "AIzaSyCZmaSdOSRPIuCRNhyPCgS5LoQHO-SlBOk",
    authDomain: "fritangas-c82e6.firebaseapp.com",
    databaseURL: "https://fritangas-c82e6.firebaseio.com",
    projectId: "fritangas-c82e6",
    storageBucket: "fritangas-c82e6.appspot.com",
    messagingSenderId: "964180946238"
  };
  firebase.initializeApp(config);
  
  app_fireBase = firebase;
    
    function fnCreate(path, body, callBack){
        if(path || !body){
		    return;		
	    }
        app_fireBase.database().ref(path).set(body, callBack);
    }
	
	app_fireBase.databaseApi = {
		create: fnCreate,
		read: fnRead,
		update: fnUpdate,
		delete: fnDelete
	}

})
