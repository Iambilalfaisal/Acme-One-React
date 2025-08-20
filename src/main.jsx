/*=
import { createRoot } from 'react-dom/client'
class Car {
  constructor(name) {
    this.brand = name;
  }
  
  present() {
    return 'I have a ' + this.brand;
  }
}

class Model extends Car {
constructor(name,mod){
super(name);  
this.model=mod;
}

show(){
  return this.model;
}
}

const mycar = new Model("Ford","Raptor");
const carInfo = mycar.present() +" "+ mycar.show();
 
  const myelements= (
<>
      <h2>{carInfo}</h2>
      <table> 
      
      <thead> 
      <tr>
      <th>Name</th>
      </tr>
      </thead>

      <tbody>

        <tr>
        <td>Bilal</td>
        </tr>

        <tr>
        <td>Owais</td>
        </tr>

        </tbody>
        
       </table>
</>
  ); 

hello=function(){
  return "hello Universe"
}

hello=()=>{
  return "Hello Universe";
}

hello=()=>"hello Universe";


createRoot(document.getElementById('sandy')).render(
        myelements
)  
       

class Header {
  constructor(){
    this.color='Red';
  }
  changeColor=function(){
    document.getElementById('sandy').innerHTML +=this;
  }
}
const myheader = new Header();
window.addEventListener("load",myheader.changeColor);
document.getElementById("btn").addEventListener("click", myheader.changeColor);

const numbers = [1, 2, 3, 4];
const doubled = numbers.map(x => x * 2);

document.getElementById("sandy").innerHTML = doubled;

import { createRoot } from 'react-dom/client'

const users = [
  { id: 1, name: 'John', age: 30 },
  { id: 2, name: 'Jane', age: 25 },
  { id: 3, name: 'Bob', age: 35 }
];

function UserList() {
  return (
    <ul>
      {users.map(user => 
        <li key={user.id}>
          {user.name} is {user.age} years old
        </li>
      )}
    </ul>
  );
}

createRoot(document.getElementById('root')).render(
  <UserList />
)
  
 const vehicles=["Ford","Crane","Sportage"];
 const [Car,Truck,Suv]=vehicles;
document.getElementById("root").innerHTML=Car;

function DateInfo(DAT){
const d=DAT.getDate();
const m=DAT.getMonth()+1;
const y=DAT.getFullYear;
return [d,m,y];
}
const[Date,Month,Year]=DateInfo(newDate())

function Calculate(a, b) {
  const sum = a + b;
  const sub = a - b;
  const multi = a * b;
  const div = a / b;

  return [sum, sub, multi, div];
}

const [sum, sub, multi, div] = Calculate(19, 2);

document.getElementById("root").innerHTML = `
  <p>Sum: ${sum}</p>
  <p>Subtraction: ${sub}</p>
  <p>Multiplication: ${multi}</p>
  <p>Division: ${div}</p>
`;
 
const person={
  FirstName:"Bilal",
  LastName:"Faisal",
  Age:20,
  Car:{
    car:"Ford",
    model:"Raptor",
  }
};
const{FirstName,LastName,Age,Car}=person;
const{car,model}=Car;
document.getElementById('root').innerHTML=`
  <p>Mr. ${FirstName}</p>
  <p>${LastName}</p>
  <p>Is ${Age} years old</p>
  <p>And owns a ${car} ${model}</p>
`;

import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
function Counter(){
  const [count,setCount]=useState(0);

 return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}
createRoot(document.getElementById('root')).render(
  <Counter />
);

const array1=[1,2,3,4,5,6,7,8,9,10];
const array2=[11,12,13,14,15,16,17,18,19,20];
const combinedarr=[...array1,...array2];

document.getElementById('root').innerHTML=combinedarr;

const numbers=[1,2,3,4,5,6,7,8]
const [one,two,...rest]=numbers;

document.getElementById('root').innerHTML=`
<p>${one}</p>
<p>${two}</p>
<p>${rest}</p>
`;

const myVehicle = {
  brand: 'Ford',
  model: 'Mustang',
  color: 'red'
}

const updateMyVehicle = {
  type: 'car',
  year: 2021, 
  color: 'yellow'
}

const myUpdatedVehicle = {...myVehicle, ...updateMyVehicle}

document.getElementById("root").innerHTML=JSON.stringify(myUpdatedVehicle);

import {Name,Age} from './person.js'
import message from './message.js'
 
document.getElementById('root').innerHTML=message();

const name = "John";
const age = 30;
const message = `Hello, ${name}!
You are ${age} years old.`;
document.getElementById('root').innerHTML=message;

const x=`
   BIlal:
      You are looking Good.
   Ali:
    Thanks!  
`
document.getElementById('root').innerHTML=`<pre>${x}</pre>`;


let price=2000;
let tax=200;

let total=`'Total='${price+tax}`;
document.getElementById('root').innerHTML=total;

const items = ["apple", "banana", "orange"];
const list = `You have ${items.length} items:
${items.map(item => `- ${item}`).join('\n')}`;

document.getElementById("root").innerHTML = list;
# JSX

import {createRoot}from 'react-dom/client'

const myElement=<h1>React is {5+5} times better when used with JSX</h1>;

createRoot(document.getElementById("root")).render(
  myElement
);

import {createRoot} from 'react-dom/client'
const myElement=(
  <ul>
   <li>Banana</li>
   <li>Apple</li>
   <li>Orange</li>
  </ul>
);
createRoot(document.getElementById('root')).render(
myElement
);

import {createRoot} from 'react-dom/client'
const myElement=(
<>
  <p>I am a Paragraph </p>
  <p>Another paragraph but for this we need to have a top level element like div or fragments</p>
</>
);
createRoot(document.getElementById('root')).render(
myElement
);

import {createRoot} from 'react-dom/client'

function Car(){
const car="Ford"
const model="Raptor"  
return(
  <>
  <h1>I have a{car}{model}</h1>
  <p>it has {210*1.36} horse power</p>
  </>
);
}
createRoot(document.getElementById('root')).render(
<Car />
);

import {createRoot} from 'react-dom/client'

function Hp(KW){
return KW*1.36;

}
function Car(){
  return(
    <>
    <h1>My car Ford Raptor </h1>
    <p>it has {Hp(210)}Horse Power</p>
    </>
  );
}
createRoot(document.getElementById('root')).render(
<Car />
);

import {createRoot} from 'react-dom/client'

function Car(){
  const myObj={
    car:"Ford",
    model:"Raptor",
    color:"Black"
  }
return (
  <h1>I have {myObj.car} {myObj.model} in {myObj.color} color</h1>
);  
}
createRoot(document.getElementById('root')).render(
<Car />
);

import {createRoot} from 'react-dom/client'

function Car(){
const myFunc=()=>{
  alert("Hello!");
};
return (
  <button onClick={myFunc} enabled >Click Me </button>
      );   
}
createRoot(document.getElementById('root')).render(
  <Car/>
);

import {createRoot} from 'react-dom/client'
function Car(){
  const myStyle={
    color:"red",
    frontSize:'20px',
    backgroundColor:"Black"
  }
  return (
    <>
    <h1 style={myStyle}>Hey this is me testing!</h1>
    </>
  );
}
createRoot(document.getElementById('root')).render(
<Car/>
);

import {createRoot} from 'react-dom/client'

function Fruits(){
  const x=10;
  return(
       <>
       <h1>{ (x)< 10 ? "banana":"apple" }</h1>
       </>
  );
}
createRoot(document.getElementById('root')).render(
<Fruits/>
);

import {createRoot} from 'react-dom/client'

function Car(props){
  return (
<>
<h1>i am a {props.color} car</h1>
</>
  );
}
createRoot(document.getElementById('root')).render(
<Car color="red"/>
);

import {createRoot} from 'react-dom/client'
function Bike(){
  return(
    <>
    <h2>I am a Bike and i live here too</h2>
    </>
  );
}
function Car(){
  return(
    <>
    <h2>I am a Car hehe and i live here :)</h2>
    </>
  );
}
function Garage(){
  return(
    <>
    <h2>Who lives in my Garage</h2>
    <Car/>
    <Bike/>
    </>
    
  );
}   
createRoot(document.getElementById('root')).render(
<Garage/>
);
 
import {createRoot} from 'react-dom/client'
function Car(props){
  return(
    <>
    <h2>I am a {props.brand} car</h2>
    </>
  );
} 
function Garage(){
  return(
    <>
    <h2>Who lives in my Garage?</h2>
    <Car brand='Ford' />
    <Car brand='GT3 RS' />
    <Car brand='Mark x' />
    </>
  );
} 
createRoot(document.getElementById('root')).render(
<Garage/>
);

import {createRoot} from 'react-dom/client'
import Car from './Vehicle.jsx'
createRoot(document.getElementById('root')).render(
  <Car />
);

import {createRoot} from 'react-dom/client'
function Car(props){
  return(
    <>
    <h2>
      I am a {props.model} in {props.color} color and i was made in {props.year}
    </h2>
    </>
  );
}
createRoot(document.getElementById('root')).render(
  <Car model="Ford Raptor" color="Black" year={2007}/>
);

import {createRoot} from 'react-dom/client'

function Car(props) {
  return (
    <>
      <h2>My favorite car is a {props.carinfo.name} {props.carinfo.model}!</h2>
      <p>But it has to be from {props.years[0]}, {props.years[1]}, or {props.years[2]}.</p>
    </>
  );
}
let x = [1964, 1965, 1966];
let y = {name: "Ford", model: "Mustang"};

createRoot(document.getElementById('root')).render(
  <Car years={x} carinfo={y} />
);

import {createRoot} from 'react-dom/client'
function Car(props){
  return(
    <>
    <h2>i have a car {props.CarInfo.name} {props.CarInfo.model}</h2>
    <p>its color is {props.CarInfo.color} and it was made in year:{props.CarInfo.year}</p>
    </>
  );
}
const CarInfo={
     name:"Ford",
     model:"Raptor",
     color:"black",
     year:1999
};
createRoot(document.getElementById('root')).render(
  <Car CarInfo={CarInfo}/>
);

import {createRoot} from 'react-dom/client'

function Car({color}){
return(
  <h2>the car color is :{color}</h2>
);
}
createRoot(document.getElementById('root')).render(
  <Car color="Black"/>
);

import {createRoot} from 'react-dom/client'
function Car (props){
const{name,color}=props;
return(
<h2>my car {name} is in {color} color </h2>
);
}
createRoot(document.getElementById('root')).render(
  <Car name="Ford"color="Black" year={2009} />
);
 
import {createRoot} from 'react-dom/client'
function Car ({name,color="Blue",...rest}){
return(
  <h2>my car {name} is in color {color} and was made in year:{rest.year}</h2>
);
}
createRoot(document.getElementById('root')).render(
  <Car name="Ford" year={2009} model="Raptor" />
);

import {createRoot} from 'react-dom/client'
function Son(props){
  return(
    <div style={{background:"Blue"}}>
    <h2>I am the son</h2>

    <div>{props.children}</div>

    </div>
  );
}
function Daughter(props){
  return(
  <div style={{backgroundColor:'Pink'}}>
  <h2>I am the Daughter</h2>
  <div>{props.children}</div>
  </div>
  );
}
function Parent(props){
  return(
  <div>
    <h1>I have two children</h1>
    <Son>
      <p>This is son speaking with the parent function</p>
    </Son>
    <Daughter>
      <p>This is Daughter spkeaking from the Parent Function</p>
    </Daughter>
  </div>
  );
   
}
createRoot(document.getElementById('root')).render(
  <Parent/>
);

import {createRoot} from 'react-dom/client'
function Click(){
  function Shoot(){
    alert('Good shot!')
  }
  return(
    <button onClick={Shoot}>Shoot!</button>
  );
}
createRoot(document.getElementById('root')).render(
  <Click/>
);

import {createRoot} from 'react-dom/client'

function Football() {
  const shoot = (a) => {
    alert(a);
  }

  return (
    <button onClick={() => shoot("Goal!")}>Take the shot!</button>
  );
}
createRoot(document.getElementById)('root')
#20_08-2025
import {createRoot} from 'react-dom/client'

function Missed_Goal(){
  return(
<h1>Missed Goal!</h1>
  )
}
function Made_Goal(){
  return(
    <h1>Great Goal</h1>
  )
}

function Score(props){
  const isGoal=props.isGoal;
  if(isGoal){
    return(
  <h1>Made Goal!</h1>
    ) 
  }
  return(
  <h1>No goal is Made</h1>
  )
}
rootChange(document.getElementById('root')).render(
  <Score isGoal={False} />
);
# Use of && logical operator
import {createRoot} from 'react-dom/client'
function Car(props){
  return(
    <>
      {props.Model && <h1>I have a {props.brand}  </h1>}
    </>
  );
}
createRoot(document.getElementById('root')).render(
  <Car Model="Raptor" brand='ford'/>
);

# Now i will move on to lists 

import {createRoot} from 'react-dom/client'
function Car(){
  const myCars=['Ford','Lambo','Porsche']
  return(

   <>
   <h1>I have the following Cars</h1>
   <ul>
    {myCars.map((Cars)=><li>I am a {Cars}</li>)}
   </ul>
   </>
  );
}
createRoot(document.getElementById('root')).render(
  <Car/>
);
Now we will see the use of key 

import {createRoot} from 'react-dom/client'

function Car(){
 const myCars=[
  {Id:1 , Brand:'Ford'},
  {Id:2 , Brand:'Porsche'},
  {Id:3, Brand:'Honda'}
  ];

  return(
    <>
    <h1>Who is there </h1>
    <ul>
      {myCars.map((cars)=><li Key={myCars.ID}>I am a {cars.Brand}</li>)}
    </ul>
    </>
  );
}
createRoot(document.getElementById('root')).render(
  <Car/>
);
#now we will make alist using index which is not reccomended but can be used as a last resort  

import {createRoot} from 'react-dom/client'
function Car(){
  const myCars=['Ford','BMW','AUDI'];
  return(
    <>
    <h1>These are the cars</h1>
    <ul>
     {myCars.map((cars,Index)=><li key={Index}>I am a {cars}</li>)} 
    </ul>
    </>
  );
}
createRoot(document.getElementById('root')).render(
  <Car/>
);
# Now we will move on to Forms

import {createRoot} from 'react-dom/client'

function MyForm(){
  return(
    <>
    <form>
      <label>Please Enter Your Name:
        <input type='text'></input>
      </label>
    </form>
    </>
  );
}
createRoot(document.getElementById('root')).render(
  <MyForm/>
);
# Now we will use controlled components also known as hooks in react to store the values in the app rather than the browser

import {createRoot} from 'react-dom/client'
import {useState} from 'react'
function MyForm(){
const [name,setName]=useState('');
function handelChange(e){
  setName(e.target.value);
}
return(
<form>
  <label>Enter your Name :
    <input type='text' value={name} onChange={handelChange}/>
  </label>
  <p>The name is : {name}</p>
</form>
);
}
createRoot(document.getElementById('root')).render(
  <MyForm/>
);
#form with submit handling
import {createRoot} from 'react-dom/client'
import {useState} from 'react'
function MyForm(){
  const[name,setName]=useState('');
function handelChange(e){
setName(e.target.value);
}  
function handelSubmit(e){
  e.preventDefault();
  alert(name);
}
return(
  <form onSubmit={handelSubmit}>
    <label>Enter Your Name : 
      <input type='text' value={name} onChange={handelChange}/>
    </label>
  </form>
);
}
createRoot(document.getElementById('root')).render(
  <MyForm/>
);
# textarea in form

import {createRoot} from 'react-dom/client'
import {useState} from 'react'
function MyForm(){
  const [MyTxt,setMyTxt]=useState('')
function handelChange(e){
  setMyTxt(e.target.value);
}  
function handelSubmit(e){
e.prevetDefault();
alert(MyTxt);
}
return(
  <>
  <form onSubmit={handelSubmit}>
  <label>Enter Your Name : 
    <textarea type='text' value={MyTxt} onChange={handelChange} />
  </label>
</form>
<p>The Current Value is {MyTxt} </p>
  </>

);
}
createRoot(document.getElementById('root')).render(
<MyForm/>
);
# Now we will practice Select in form

import {createRoot} from 'react-dom/client'
import {useState} from 'react'
function MyForm(){
  const [Car,setCar]=useState('');
function handelChange(e){
  setCar(e.target.value);
}  
return(
  <>
  <select value={Car} onChange={handelChange}>
  <option value='BMW'>BMW</option>
  <option value='AUDI'>AUDI</option>
  <option value='Lambo'>Lambo</option>
  <option value='Porsche'>Porsche</option>
  <option value='Honda'>Honda</option>
  </select>
  <p>the current car is : {Car}</p>
  </>

);
}
createRoot(document.getElementById('root')).render(
<MyForm/>
);
# handel Multiple Inputs in React

import {createRoot} from 'react-dom/client'
import {useState} from 'react'

function MyForm(){
const [myTxt,setmyTxt]= useState({});

const handelChange= (e) =>{

const name =e.target.name;
const value=e.target.value;
setmyTxt(values=>({...values,[name]:value}))

}  
return(
  <>
    <form>
    <label> First Name:
      <input type='text' name='FirstName' value={myTxt.firstname} onChange={handelChange}  />
    </label>
    <label>Last Name :
    <input type='text' name='LastName' value={myTxt.lastname} onChange={handelChange}  />
    </label>
    <p>the current values : {myTxt.FirstName} {myTxt.LastName} </p>
    </form>
  </>

); 
}
createRoot(document.getElementById('root')).render(
<MyForm/>
);
# CheckBox in React 

import {createRoot} from 'react-dom/client'
import {useState} from 'react'

function MyForm(){
const [input,setInput]=useState({});

const handelChange=(e)=>{
const  target=e.target;
const  value=target.type === 'checkbox' ? target.checked :target.value;
const name=target.name;
setInput(values=>({...values,[name]:value}));
}
const handelSubmit=(event)=>{
let fillings='';
if (input.tomato) fillings +='Tomato'
if (input.onion){
  if(input.tomato)fillings +=' and '
  fillings +='Onion'
}
if (fillings==='')fillings="No fillings";
alert(`${input.firstname} wants to eat a burger with ${fillings}`);
event.preventDefault();  
}
return(
<>
<form onSubmit={handelSubmit}> 
<label>My Name is:
  <input
  type="text"
  name="firstname"
  value={input.firstname}
  onChange={handelChange}
  />
</label>
<label>Tomato:
  <input
  type="checkbox"
  name="tomato"
  checked={input.tomato}
  onChange={handelChange}
  />
</label>
<label>Onion:
  <input
  type="checkbox"
  name="onion"
  checked={input.onion}
  onChange={handelChange}
  />
</label>
<button type="submit">Submit</button>
</form>
</>
);
}
createRoot(document.getElementById('root')).render(
<MyForm/>
);

#after checks moving on to radio 
import {createRoot} from 'react-dom/client'
import {useState} from 'react'
function MyForm(){
const [slectedFruit,setSlectedFruit]=useState('banana');  

const handelChange=(e)=>{
setSlectedFruit(e.target.value);

};
const handelSubmit=(e)=>{
  alert(`Your fav Fruit is ${slectedFruit}`);
  set.preventDefault();
};
return(
  <>
    <form onSubmit={handelSubmit}>
  <p>Select Your Fav Fruit:</p>
    <label>
      <input
      type='radio'
      name='fruit'
      value='apple'
      checked={slectedFruit==='apple'}
      onChange={handelChange}
      />
      Apple
    </label>
    <br/>
     <label>
      <input
      type='radio'
      name='fruit'
      value='banana'
      checked={slectedFruit==='banana'}
      onChange={handelChange}
      />
      Banana
    </label>
    <br/>
     <label>
      <input
      type='radio'
      name='fruit'
      value='orange'
      checked={slectedFruit==='orange'}
      onChange={handelChange}
      />
      Orange
    </label>
     <br />
      <button type="submit">Submit</button>
  </form>
  </>

);
}
createRoot(document.getElementById('root')).render(
<MyForm/>
);
#now we will move on to suspence which lets us wait while the input is loading

import { createRoot } from 'react-dom/client';
import { Suspense } from 'react';
import MyFruits from './fruits.jsx';

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <MyFruits />
      </Suspense>
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <App />
);
#the suspence itself doesnot make it delay bcz its too fast with lazy we can see the delay
import { createRoot } from 'react-dom/client';
import { Suspense, lazy } from 'react';

const Cars = lazy(() => import('./cars.jsx'));

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Cars />
      </Suspense>
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <App />
);
#now moving on to styling React with css using importing css page

import { createRoot } from 'react-dom/client';
import './style.css'

const Header=()=>{
   return (
    <>
      <h1>Hello Travelers!</h1>
      <p>How do you like the style?.</p>
    </>
  );
}
createRoot(document.getElementById('root')).render(
  <Header />
);

# Css modules
*/
import { createRoot } from 'react-dom/client';
import styles from './Button.module.css';

function App() {
  return (
    <div>
      <button className={styles.mybutton}>
        My Button
      </button>
    </div>
  );
}
createRoot(document.getElementById('root')).render(
  <App />
);