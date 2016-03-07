//add new function to jasmine prototype which will fail spec immediately after expect failed
//some kind of FailFast functionality 
jasmine.Env.prototype.expectCritical = function(actual){ 
return  { 
  toBe: function (expected) { 
    if (actual !== expected) throw Error("Actual: " + actual + " Expected: " + expected); 
    } 
  }; 
};
