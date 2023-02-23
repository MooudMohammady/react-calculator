/* eslint-disable no-eval */
import { useState } from "react";

export default function App() {
  const [result, setResult] = useState(" ");
  const [isFloat, setFloat] = useState(true);

  const btnClickHandeler = (e) => {
    if (e.target.innerText === ".") {
      if (isFloat) {
        setResult(result + e.target.innerText);
        setFloat(false);
      }
    } else setResult(result + e.target.innerText);
  };
  const resultClickHandeler = () => {
    setResult(eval(result));
    setFloat(true);
  };
  const clearHandeler = () => {
    setResult("");
    setFloat(true);
  };

  window.addEventListener("keyup", (e) => {
    setTimeout(() => {
      if (
        (e.key >= 0) & (e.key <= 9) ||
        e.key === "+" ||
        e.key === "-" ||
        e.key === "*" ||
        e.key === "/"
      )
        setResult(result + e.key + "");
      else if (e.key === "Enter") {
        setResult((result) => (result = eval(result)));
        setFloat(true);
      } else if (e.key === ".")
        if (isFloat) {
          setResult(result + ".");
          setFloat(false);
        }
    }, 0);
  });

  return (
    <div className="grid h-[100vh] place-items-center bg-slate-200 text-slate-700">
      <div className="flex h-[700px] w-full flex-col justify-between rounded-lg bg-gradient-to-br from-white to-slate-300 p-5 shadow-xl sm:h-[500px] sm:w-96">
        <div className="h-[70px] overflow-x-auto rounded-md bg-gradient-to-br from-slate-300 to-white py-4 px-2 text-3xl shadow-inner">
          {result}
        </div>
        <div className="grid h-[450px] grid-cols-4 grid-rows-5 gap-2 sm:h-80">
          <button onClick={clearHandeler} className="cal-btn">
            CE
          </button>
          <button onClick={btnClickHandeler} className="cal-btn">
            /
          </button>
          <button onClick={btnClickHandeler} className="cal-btn">
            *
          </button>
          <button onClick={btnClickHandeler} className="cal-btn">
            -
          </button>
          <button onClick={btnClickHandeler} className="cal-btn">
            7
          </button>
          <button onClick={btnClickHandeler} className="cal-btn">
            8
          </button>
          <button onClick={btnClickHandeler} className="cal-btn">
            9
          </button>
          <button onClick={btnClickHandeler} className="cal-btn row-span-2">
            +
          </button>
          <button onClick={btnClickHandeler} className="cal-btn">
            4
          </button>
          <button onClick={btnClickHandeler} className="cal-btn">
            5
          </button>
          <button onClick={btnClickHandeler} className="cal-btn">
            6
          </button>
          <button onClick={btnClickHandeler} className="cal-btn">
            1
          </button>
          <button onClick={btnClickHandeler} className="cal-btn">
            2
          </button>
          <button onClick={btnClickHandeler} className="cal-btn">
            3
          </button>
          <button
            onClick={resultClickHandeler}
            className="cal-btn row-span-2 from-blue-200 to-blue-500 text-white active:from-blue-500 active:to-blue-200">
            =
          </button>
          <button onClick={btnClickHandeler} className="cal-btn col-span-2">
            0
          </button>
          <button onClick={btnClickHandeler} className="cal-btn">
            .
          </button>
        </div>
      </div>
    </div>
  );
}
