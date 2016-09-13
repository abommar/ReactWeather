var names = ['bob','Tony','Sam'];

names.forEach(function  (name){

  console.log('forEach', name);
});



names.forEach((name) => {
  console.log('arrowFunc', name);
})


names.forEach((name)=> console.log(name));


var returnMe = (name) => name + '!';
console.log(returnMe('Tony'));

var person = {
  name: 'Tony',
  greet: function (){
    names.forEach( (name) =>{
      console.log(this.name + ' says hi to ' + name )
    });
  }
};

person.greet();

//challenge/

function add (a,b){

  return a + b;
}

console.log(add(1,3));
console.log(add(2,7));

//Statement
var addStatement = (a, b) => {
  return a + b;
}
console.log(addStatement(2,17));

//Expression

var addExpression = (a,b) => a + b;

console.log(addExpression(2,27));
