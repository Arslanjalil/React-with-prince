// import { useState } from "react";

// const app = () => {

//   const { count, setCount } = useState(5);

//   const addvalue = () => {
//     setCount = count + 1;
//   }

//   const RemoveValue = () => {
//     setCount = count + 1;
//   }
//   return (
//     <>
//       <div>
//         <h1>Counter project</h1>
//         <p>Counter value = 5</p>
//         <button onClick={addvalue}>Add</button>
//         <button onClick={RemoveValue}>Remove</button>
//       </div>
//     </>
//   );
// };

// export default app;





import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(5);

  const handleIncrement = () => {
    if (count < 20) {
    setCount(count + 1);
  };
  }
  const handleDecrement = () => {
    if (count > 0) {
    setCount(count - 1);
  };
  }
  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={handleIncrement}>Add</button>
      <button onClick={handleDecrement}>Remove</button>
    </div>
  );
};

export default Counter;
