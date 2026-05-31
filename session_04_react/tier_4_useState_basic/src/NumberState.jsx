import { useState } from "react";

function NumberState() {
    const [count, setCount] = useState(0);

    let color = "black";

    if (count > 0) {
        color = "green";
    } else if (count < 0) {
        color = "red";
    }

    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
            
            <h2 style={{ color }}>
                Bộ đếm: {count}
            </h2>

            <p style={{ color }}>
                {count > 0
                    ? "Số dương"
                    : count < 0
                    ? "Số âm"
                    : "Số 0"}
            </p>

            <button onClick={() => setCount(count + 1)}>
                Tăng (+1)
            </button>

            <button onClick={() => setCount(count - 1)}>
                Giảm (-1)
            </button>

            <button onClick={() => setCount(count + 5)}>
                Tăng (+5)
            </button>

            <button onClick={() => setCount(count * 2)}>
                Nhân đôi
            </button>

            <button onClick={() => setCount(0)}>
                Reset
            </button>

        </div>
    );
}

export default NumberState;