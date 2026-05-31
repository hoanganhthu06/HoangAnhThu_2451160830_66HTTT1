import { useState } from "react";

function ClickEvents() {
    const [message, setMessage] = useState("Chưa click");
    const [clickCount, setClickCount] = useState(0);

    const [color, setColor] = useState("lightblue");
    const [colorClick, setColorClick] = useState(0);

    const [likeCount, setLikeCount] = useState(0);
    const [isLiked, setIsLiked] = useState(false);

    function handleClick() {
        setMessage(
            "Đã click lúc " +
            new Date().toLocaleTimeString()
        );

        setClickCount(clickCount + 1);
    }

    function handleReset() {
        setMessage("Đã reset!");
        setClickCount(0);
    }

    function randomColor() {
        const colors = [
            "red",
            "blue",
            "green",
            "yellow",
            "purple",
            "orange",
            "pink"
        ];

        const index = Math.floor(
            Math.random() * colors.length
        );

        setColor(colors[index]);
        setColorClick(colorClick + 1);
    }

    function handleLike() {
        setIsLiked(!isLiked);
        setLikeCount(likeCount + 1);
    }

    return (
        <div style={{ padding: "20px" }}>
            <h2>Click Events</h2>

            <p>{message}</p>
            <p>Số lần click: {clickCount}</p>

            <button onClick={handleClick}>
                Click me!
            </button>

            <button onClick={handleReset}>
                Reset
            </button>

            <hr />

            <h3>Đổi màu ngẫu nhiên</h3>

            <div
                style={{
                    width: "200px",
                    height: "100px",
                    backgroundColor: color,
                    border: "1px solid black",
                    marginBottom: "10px"
                }}
            ></div>

            <button onClick={randomColor}>
                Đổi màu
            </button>

            <p>
                Số lần đổi màu: {colorClick}
            </p>

            <hr />

            <h3>Like Button</h3>

            <button onClick={handleLike}>
                {isLiked
                    ? "❤️ Đã thích"
                    : "🤍 Thích"}
            </button>

            <p>
                Số lần bấm Like: {likeCount}
            </p>
        </div>
    );
}

export default ClickEvents;