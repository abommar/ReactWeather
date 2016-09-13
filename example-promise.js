function getTempCallback(location, callback) {
    callback(undefined, 78);
    callback('City Not Found');

}

getTempCallback('Mason', function(err, temp) {
    if (err) {
        console.log('error', err);
    } else {
        console.log('success', temp);
    }
});




function getTempPromise(location) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
          //  resolve(79);
            reject('City not found');
        }, 1000);
    });
}



getTempPromise('Mason').then(function(temp) {
    console.log('promise success', temp);
}, function(err) {
    console.log('promise error', err);
})


//challenge area 2 Argument returns promise and adds them up if one is not a number reject
function addPromise (a,b){
  return new Promise(function(resolve, reject){
    if (typeof a === 'number' && typeof b === 'number') {
      resolve (a + b);
    } else {
      reject('value is not a number');
    }
  });
}


addPromise('A',5).then(function(sum) {
    console.log('promise success', sum);
}, function(err) {
    console.log('promise error', err);
});
