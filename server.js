const express = require ('express');
const mongoose = require ('mongoose');

//connect the server to mongodb

mongoose.connect('mongodb+srv://zainb1718150:zainb.2003@cluster0.pfthgcp.mongodb.net/?retryWrites=true&w=majority').then(
    ()=>console.log("connected to the database!"),
    err => {
        console.log("error????")
    }
)
let app = express();
/* code */

const studentSchema = new mongoose.Schema({
    id : Number,
    name : String,
    age : Number,
    address : String,
    unversity : String,
    faculty : String,
    level : String,
    phone : String
 });
 let studentModel = new mongoose.model("students",studentSchema);
 
 const courseSchema = new mongoose.Schema({
    nameCourse : String,
    numberCourse : Number,
    typeOfCourses : String,  
    areaCourse : String,
    bookPrice :  String,   
    coursePrice : String 
 });
 let courseModel = new mongoose.model("courses",courseSchema);
////////////////////////////////////////////////////////////////////////

let stu1 = new studentModel({
    id : 1,
    name : "yasmin ibrahim",
    age : 20,
    address : "Al-sharkia",
    unversity : "suez canal",
    faculty : "computer science and informatics",
    level : "third",
    phone : "01012345678"
}).save();

let stu2 = new studentModel({
    id : 2,
    name : "farah El-sayed",
    age : 19,
    address : "Al-sharkia",
    unversity : "zagazig",
    faculty : "Arts",
    level : "second",
    phone : "01087654321"
}).save();

let stu3 = new studentModel({
    id : 3,
    name : "mohamed hamdy",
    age : 23,
    address : "cairo",
    unversity : "Ain Shams",
    faculty : "Engineering",
    level : "fourth",
    phone : "01081726354"
}).save();


let cour_stu1 = new courseModel({
    nameCourse : "Ai",
    numberCourse : 3,
    typeOfCourses : "Offline",  
    areaCourse : "Dokki",
    bookPrice :  "No",  
    coursePrice : "Yes" 
}).save();

let cour_stu2 = new courseModel({
    nameCourse : "FrontEnd",
    numberCourse : 1,
    typeOfCourses : "Online",  
    areaCourse : "6th of October",
    bookPrice :  "Yes",   
    coursePrice : "Yes" 
}).save();

let cour_stu3 = new courseModel({
    nameCourse : "BackEnd",
    numberCourse : 2,
    typeOfCourses : "Online",  
    areaCourse : "Nasr city",
    bookPrice :  "No",   
    coursePrice : "No" 
}).save();

app.listen (3000, function(){
    console.log("server now is open!")
})