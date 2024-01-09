function getdata(){
    var name=document.getElementById("search").value


firebase.database().ref('dreamHome/'+name).once('value').then(function (snapshot){

    var price=snapshot.val().price;
    var location=snapshot.val().location;
    var desciption=snapshot.val().desciption;
    var name=snapshot.val().name;
  


    document.getElementById("pri").innerHTML=price;
    document.getElementById("loc").innerHTML=location;
    document.getElementById("desc").innerHTML=desciption;
    document.getElementById("nam").innerHTML=name;
   
})
}