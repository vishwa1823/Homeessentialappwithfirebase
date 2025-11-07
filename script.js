import {initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"

import {getDatabase ,ref,push} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"

const appSettings ={
    databaseURL :"https://plaground-863d8-default-rtdb.asia-southeast1.firebasedatabase.app/"
}

const app=initializeApp(appSettings)
const database=getDatabase(app)
const shoppinginDb=ref(database,"Groceries")


const inputfieldel=document.getElementById("input-field")
const addButtonel=document.getElementById("add-button")
const shoppinglistel=document.getElementById("shopping-list")
addButtonel.addEventListener("click",function(){
    let inputvalue=inputfieldel.value
    push(shoppinginDb,inputvalue)
    console.log(`${inputvalue} Added to database`)
    inputfieldel.value=""
    shoppinglistel.innerHTML+=`<li> ${inputvalue} </li>`
})