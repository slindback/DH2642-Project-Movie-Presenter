export default function resolvePromise(promise, promiseState){
    if (!promise) { return; }
  
    promiseState.data = null;
    promiseState.error = null;
    promiseState.promise = promise;
  
    promise
      .then(resolveCB)
      .catch(rejectCB);

    function resolveCB(data) {
        if(promiseState.promise == promise) {
            promiseState.data = data;
        }
    }

    function rejectCB(error) {
        if(promiseState.promise == promise) {
            promiseState.error = error;
        }
    }
}
