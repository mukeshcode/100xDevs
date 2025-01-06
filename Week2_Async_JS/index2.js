// Create my own promise class

class Promise2{
  constructor(fn){
    fn(() => this.resolve(), () => this.reject());
  }
  then(cb){
    this.resolve = cb;
    return this;
  }
  catch(err){
    this.reject = err;
    return this;
  }
}

function setTimer(resolve, reject){
  setTimeout(resolve, 3000);
}

function setTimeoutPromisified(ms){
  return new Promise2(setTimer);
}

setTimeoutPromisified(3000)
  .then(() => console.log("Timer finished"))
  .catch(() => console.log("Error in setting timer"));