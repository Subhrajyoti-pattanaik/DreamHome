// 'use client'
// import { get, ref} from 'firebase/database';
// import {useEffect, useState} from 'react';
// import { database } from './firebaseConfig';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyCD-3q_Lmx9pQTl1PbNoj-xYSQrrIdtW9Y",
  authDomain: "dreamhome-a66df.firebaseapp.com",
  databaseURL: "https://dreamhome-a66df-default-rtdb.firebaseio.com",
  projectId: "dreamhome-a66df",
  storageBucket: "dreamhome-a66df.appspot.com",
  messagingSenderId: "132564958689",
  appId: "1:132564958689:web:3c58e915904484798526a0",
  measurementId: "G-25GV3C3DV3"
};

firebase.initializeApp(firebaseConfig);

var dreamHomeDB = firebase.database().ref('dreamHome');

document.getElementById('detailForm').addEventListener('submit',submitForm);

function submitForm(e){
  e.preventDefault();

  var name = getElementVal('name');
  var picture = getElementVal('picture');
  var location = getElementVal('location');
  var price = getElementVal('price');
  var desciption = getElementVal('description');
  
  saveDetails(name,picture,location,price,desciption);

  document.querySelector(".alert").style.display = "block";
}


const saveDetails = (name,picture,location,price,desciption) => {
  dreamHomeDB.child(name).set({

 
      name : name,
      picture : picture,
      location : location,
      price : price,
      desciption : desciption,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
}


function get(){
  var name = document.getElementById('name').value
  var userRef = database.ref('users/' + 'name');
  userRef.on('value', function(snapshot){
  var data = snapshot.val()
  alert(data.email);
})
}