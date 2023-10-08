
const chai = require("chai");
const spies = require("chai-spies");
chai.use(spies);

/*describe("index", () => {
    describe("receivesAFunction(callback)", () => {
        it("receives a function and calls it", () => {
          const spy = chai.spy();
    
          receivesAFunction(spy);
    
          expect(spy).to.have.been.called();
        });
*/

function receivesAFunction(callback){
    callback();
}
function returnsANamedFunction(){
    function namedFunction (){}
    return namedFunction;

}
function returnsAnAnonymousFunction (){
    return function(){}
}