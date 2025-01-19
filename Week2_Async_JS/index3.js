class Promise2{
  constructor(fn){
    fn(() => this.resolve());
  }

  then(cb){
    this.resolve = cb;
    return this;
  }
}

function setCounter(n){
  function asyncOps(resolve){
    for(let i = 0; i<100000000; i++);
    resolve();
  }
  return new Promise(asyncOps);
}

function logMe(){console.log("Me")};

setCounter(3).then(logMe);

