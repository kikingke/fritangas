
var mainApp = {};
(function(){
var firebase = app_firebase;
  var uid = null;
  firebase.auth().onAuthStateChanged(function(user){
    if(user){
      uid = user.uid;
    }else{
      uid = null;
      window.location.replace("login.html");
    }
  });
  
  function logOut(){
    firebase.auth().signOut();
  }
  function fnCreate(){
    firebase.auth().signOut();
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
