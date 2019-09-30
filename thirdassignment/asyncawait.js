function resolveAfter2Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 2000);
    });
  }
  
  async function asyncCall() {
    console.log('calling');
    var result = console.log(await resolveAfter2Seconds());
    console.log("called");
    console.log(result);
   
  }
  
  asyncCall();
  