export default function App() {
  return (
    <div class="bg-slate-200 grid place-items-center h-[100vh]">
      <div className="bg-gradient-to-br from-white to-slate-300 w-96 h-[500px] rounded-lg shadow-xl flex flex-col justify-between p-5">
        <div className="text-3xl py-4 px-2 text-black rounded-md bg-gradient-to-br from-slate-300 to-white shadow-inner">
          0
        </div>
        <div className="grid grid-cols-4 grid-rows-5 gap-2 h-80">
          <button className="cal-btn">CE</button>
          <button className="cal-btn">/</button>
          <button className="cal-btn">*</button>
          <button className="cal-btn">-</button>
          <button className="cal-btn">7</button>
          <button className="cal-btn">8</button>
          <button className="cal-btn">9</button>
          <button className="cal-btn row-span-2">+</button>
          <button className="cal-btn">4</button>
          <button className="cal-btn">5</button>
          <button className="cal-btn">6</button>
          <button className="cal-btn">1</button>
          <button className="cal-btn">2</button>
          <button className="cal-btn">3</button>
          <button className="cal-btn row-span-2 from-blue-200 to-blue-500 text-white active:from-blue-500 active:to-blue-200">=</button>
          <button className="cal-btn col-span-2">0</button>
          <button className="cal-btn">.</button>
        </div>
      </div>
    </div>
  );
}
