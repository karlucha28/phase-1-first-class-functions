
function a() {
    console.log("Spy")
}
function receivesAFunction(a) {
 a();
}
function returnsANamedFunction() {
 return a;
}
function returnsAnAnonymousFunction (){
   return function () {};
};