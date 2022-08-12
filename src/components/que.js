import React from 'react'

const Que = () => {


    function wait(ms) {
        var start = Date.now(),
        now = start;
        while (now - start < ms) {
        now = Date.now();
        }
        console.log(5);
       }
       console.log(1);
       setTimeout(function(){console.log(2)}, 1000);
       setTimeout(function(){console.log(3)}, 0);
       console.log(4);
       wait(2000);
//=>
    //    1
    //    4
    //    5
    //    1
    //    4
    //    5
    //    3
    //    2
// =================================

       try {
        throw new Error();
       } catch (x) {
        var x = 1, y = 2;
        console.log(x);
       }
       console.log(x);
       console.log(y);
//=>
    // 1
    // undefined
    // 2
    // 1
    // undefined
    // 2

// ================================

    async function getData() {
        return await Promise.resolve('Data');
       }

       const data = getData();
       console.log(data);
       console.log(Promise.resolve('Data'));
//=>
    //  Promise {<pending>}
    //  Promise {<fulfilled>: 'Data'}
    //  Promise {<pending>}
    //  Promise {<fulfilled>: 'Data'}




  return (
    <div>
      
    </div>
  )
}






export default Que
