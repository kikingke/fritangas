var app_firebase = {};
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
  
  app_firebase = firebase;
    
    function fnCreate(path, body, callBack){
        if(path || !body){
		    return;		
	    }
        app_firebase.database().ref(path).set(body, callBack);
    }

})
