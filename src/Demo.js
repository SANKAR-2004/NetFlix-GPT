import React,{useRef, useState} from 'react';

const Demo = () => {
    const [y, setY] = useState(1);
    const z = useRef(1);
    let x = 1;
  return (
    <div className="absolute text-2xl p-20 mt-24">
      <p className="p-4">let Variable {"->" + x}</p>
          <button className="bg-green-400 px-4 py-2 rounded-lg cursor-pointer" onClick={() => { x = x + 1; console.log(x); }}>
        Increment X
      </button>
      <p className="p-4">State Variable {"->" + y}</p>
          <button className="bg-green-400 px-4 py-2 rounded-lg cursor-pointer" onClick={() => { setY(y + 1) }}>
        Increment Y
      </button>
      <p className="p-4">Ref Variable {"->" + z.current}</p>
      <button className="bg-green-400 px-4 py-2 rounded-lg cursor-pointer" onClick={()=> z.current=z.current+1}>
        Increment Z
      </button>
    </div>
  );
}

export default Demo;