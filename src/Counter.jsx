import { useEffect } from "react";
import { useState } from "react";

export function Counter() {
  //state
  const [kliki, setKliki] = useState(0);

  useEffect(() => {
    if (kliki === 10) {
      alert("USTAVI SE!!");
    }
  }, [kliki]);

  return (
    <button
      className="border p-3 font-bold"
      onClick={() => {
        setKliki(kliki + 1);
      }}
    >
      Kliknil si me {kliki}-krat
      {kliki > 34 && <div className="text-read-500">KDAJ SE BOŠ USTAVIL?!</div>}
      {kliki % 2 === 0 ? <div>sodo</div> : <div>liho</div>}
    </button>
  );
}
