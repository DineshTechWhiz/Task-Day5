// Q.2
let myData = {
  "name": "Dinesh T",
  "email": "dineshthiyagarajan337@gmail.com",
  "phone": 7603954804,
  "degree": "BCA",
  "location": "Trichy,Tamilnadu"
  }

let a= Object.keys(myData);


// for loop

for(let i=0; i>=0; i++)
{
if(a[i])
{
console.log(`${a[i]} : ${myData[a[i]]}`);
}
else
{
break;
}
}

//for in

for (let i in myData) 
{
console.log(i+" : "+myData[i]);
}

// for of

for (let i of a) {
console.log(i+" : "+myData[i]);
}

// forEach

a.forEach(b =>{console.log(`${b} : ${myData[b]}`)})