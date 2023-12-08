// project 2


import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setStep] = useState(1);
 const [isOpen, setIsOpen] = useState(true);

  function handlePrevious(){
    if (step > 1) setStep(step - 1);
  }

  function handleNext(){
    if (step < 3)setStep(step + 1);
  }

  return (
    <div> 
      <button className="close" onClick={() => setIsOpen(!isOpen)}>
      &times;
    </button>
      { isOpen && (
    <div className="steps">
      <div className="numbers">
        <div className={step >= 1 ? "active" : ""}>1</div>
        <div className={step >= 2 ? "active" : ""}>2</div>
        <div className={step >= 3 ? "active" : ""}>3</div>
      </div>
      <p className="message">
        Step {step} : {messages[step - 1 ]}
      </p>

      <div className="buttons">
          <button style={{backgroundColor: "#7950f2" , color:"#fff"}} 
          onClick={(handlePrevious)}>Previous</button>
          <button style={{backgroundColor: "#7950f2" , color:"#fff"}} 
          onClick={(handleNext)}>Next</button>
      </div>
    </div>)
}
    </div>
     )
}


// challenge

// import { useState } from "react";
// import "./index.css";

// export default function App(){
// return (
//   <div>
// <Counter/>
//   </div>
// )
// };

// function Counter(){
//   const [step , setStep] = useState(1);
//   const [count, setCount] = useState(0);

//   const date = new Date("Dec 06 2023");
//   date.setDate(date.getDate() + count);

//    return(
//     <div>
//     <div>
//       <button onClick={() => setStep((c) => c - 1 )}>-</button>
//       <span> Step : {step} </span>
//       <button onClick={() => setStep((c) => c + 1)}>+</button>
//     </div>

//     <div>
//       <button onClick={() => setCount((c) => c - step)}>-</button>
//       <span> Count : {count} </span>
//       <button onClick={() => setCount((c) => c + step)}>+</button>
//     </div>
//     <p>
//         <span>
//          {count === 0
//           ? "Today is "
//             : count > 0
//             ? `${count} days from today is `
//             : `${Math.abs(count)} days ago was `}
//         </span>
//          <span>{date.toDateString()}</span>
//       </p>
// </div>
//    )
// };