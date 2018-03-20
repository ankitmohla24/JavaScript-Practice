let promiseToCleanTheRoom = new Promise(function(resolve, reject) {

  //cleaning the room

  let isClean = false;

  if (isClean) {
    resolve('Clean');
  } else {
    reject('not Clean');
  }

});
promiseToCleanTheRoom.then(function(fromResolve) {
  console.log('the room is' + fromResolve);
}).catch(function(fromReject){
	console.log('the room is' + fromReject);
})




//Promise Dependency
let cleanRoom= function(){
    return new Promise(function(resolve,reject){
        resolve(' room cleaned')
    });
}
function removeGarbage(message){
    return new Promise(function(resolve,reject){
        resolve(message + ' garbage thrown')
    });
}
function getIcecream(message){
    return new Promise(function(resolve,reject){
        resolve(message + ' icecream eaten')
    });
}

cleanRoom().then(function(result){
    return removeGarbage(result);
}).then(function(result){
    return getIcecream(result);
}).then(function(result){
    console.log(result);
});