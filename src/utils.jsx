export function resolvePromise(promise, promiseState) {
    if (!promise) { return; };
  
    promiseState.data = null;
    promiseState.error = null;
    promiseState.promise = promise;
  
    promise
      .then(resolveCB)
      .catch(rejectCB);

    function resolveCB(data) {
        if(promiseState.promise == promise) {
            promiseState.data = data;
        };
    };

    function rejectCB(error) {
        if(promiseState.promise == promise) {
            promiseState.error = error;
        };
    };
};

export function renderPromiseState(promiseState, renderCB) {
    if (!promiseState.promise) {
        return "No data...";
    };

    if (promiseState.error) {
        return promiseState.error;
    };

    if (promiseState.data) {
        return renderCB();
    };
  
    return (
      <div className="loadingContainer">
        <img className="loadingImage"
          src = "https://www.elevateyourwellness.org/Content/image/loader2.gif"
        />
      </div>
    );
};
