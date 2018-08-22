
var mainApp = {};
(function(){
var firebase = app_firebase;
  var uid = null;
  firebase.auth().onAuthStateChanged(function(user){
    if(user){
      uid = user.uid;
       console.log(uid);
    }else{
      console.log("redirect");
      uid = null;
      window.location.replace("login.html");
    }
  });
  
  function logOut(){
    firebase.auth().signOut();
  }
  
  function messageHandler(err){
    if(!!err){
      console.log(err);
    }else{
       console.log("Success");
    }
  }
  
  function fnCreate(){
    var path = 'users/'+ uid;
    var data = {
      name:"Gabriel",
      age:29,
      messsage:"Hello"
    }
    app_fireBase.databaseApi.create(path,data,messageHandler);
  }
  
  function fnRead(){
    firebase.auth().signOut();
  }
  function fnUpdate(){
    firebase.auth().signOut();
  }
  function fnDelete(){
    firebase.auth().signOut();
  }
  
  mainApp.Create = fnCreate;
  mainApp.Read = fnRead;
  mainApp.Update = fnUpdate;
  mainApp.Delete = fnDelete;
  mainApp.logOut = logout;
  

})
