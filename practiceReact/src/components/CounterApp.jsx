import React, { useState } from "react";

function CounterApp () {
    const [value , counter] = useState(0)

    const [bgColor , updateColor] = useState()
    return (
        <div className="mt-10 bg-zinc-800 text-white p-4 text-center">
            <h3 className="text-2xl">{value}</h3>
            <button className="mr-10 bg-white text-black py-3 px-5 rounded" onClick={function () {
                if (value !== 20) {
                    counter(value + 1)
                }
            }}>Add</button>
            <button className="bg-white text-black py-3 px-5 rounded" onClick={function () {
                if (value !== 0) {
                    counter(value -1)
                }
            }}>Sub</button>
        </div>
    )
}

export default CounterApp