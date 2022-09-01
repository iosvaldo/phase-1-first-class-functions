function receivesAFunction(receivesCallback) {
  receivesCallback();
}

function returnsANamedFunction(){
  return function anything() {
    
  }
}

function returnsAnAnonymousFunction(){
  return function () {
   
 }
}