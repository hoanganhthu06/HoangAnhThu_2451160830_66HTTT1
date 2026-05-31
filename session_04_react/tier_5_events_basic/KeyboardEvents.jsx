import { useState } from "react";

function KeyboardEvents() {
    const [targetKey, setTargetKey] = useState("A");

    const [x, setX] = useState(100);
    const [y, setY] = useState(100);

    const [darkMode, setDarkMode] = useState(false);

    function randomKey() {
        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const index = Math.floor(
            Math.random() * letters.length
        );
        return letters[index];
    }

    function handleKeyDown(event) {

        // Game đoán phím
        if (
            event.key.toUpperCase() === targetKey
        ) {
            alert("🎉 Chính xác!");
            setTargetKey(randomKey());
        }

        // Di chuyển ô vuông
        if (event.key === "ArrowUp") {
            setY((prev) => prev - 10);
        }

        if (event.key === "ArrowDown") {
            setY((prev) => prev + 10);
        }

        if (event.key === "ArrowLeft") {
            setX((prev) => prev - 10);
        }

        if (event.key === "ArrowRight") {
            setX((prev) => prev + 10);
        }

        // Ctrl + D đổi màu nền
        if (
            event.ctrlKey &&
            event.key === "d"
        ) {
            event.preventDefault();
            setDarkMode((prev) => !prev);
        }
    }

    return (
        <div
            tabIndex={0}
            onKeyDown={handleKeyDown}
            style={{
                padding: "20px",
                minHeight: "100vh",
                backgroundColor: darkMode
                    ? "#222"
                    : "#fff",
                color: darkMode
                    ? "#fff"
                    : "#000"
            }}
        >
            <h2>⌨️ Keyboard Events</h2>

            <hr />

            <h3>Game đoán phím</h3>

            <p>
                Hãy nhấn phím:
                <strong>
                    {" "}
                    {targetKey}
                </strong>
            </p>

            <hr />

            <h3>
                Di chuyển ô vuông bằng
                ↑ ↓ ← →
            </h3>

            <div
                style={{
                    position: "relative",
                    width: "500px",
                    height: "300px",
                    border: "2px solid black"
                }}
            >
                <div
                    style={{
                        position: "absolute",
                        left: x,
                        top: y,
                        width: "50px",
                        height: "50px",
                        backgroundColor: "red"
                    }}
                ></div>
            </div>

            <hr />

            <h3>Ctrl + D</h3>

            <p>
                Nhấn Ctrl + D để đổi nền
                sáng/tối
            </p>
        </div>
    );
}

export default KeyboardEvents;