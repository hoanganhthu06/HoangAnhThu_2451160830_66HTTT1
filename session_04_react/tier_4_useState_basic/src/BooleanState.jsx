import { useState } from "react";

function BooleanState() {
    const [isVisible, setIsVisible] = useState(true);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isLiked, setIsLiked] = useState(false);

    const [showPassword, setShowPassword] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isOn, setIsOn] = useState(false);

    const themeStyle = {
        backgroundColor: isDarkMode ? "#333" : "#fff",
        color: isDarkMode ? "#fff" : "#333",
        padding: "20px",
        minHeight: "100vh"
    };

    return (
        <div style={themeStyle}>
            <h2>Toggle Demo</h2>

            <button
                onClick={() => setIsVisible(!isVisible)}
            >
                {isVisible
                    ? "Ẩn nội dung"
                    : "Hiện nội dung"}
            </button>

            {isVisible && (
                <div
                    style={{
                        marginTop: "10px",
                        padding: "10px",
                        border: "1px solid #ddd"
                    }}
                >
                    <p>
                        Đây là nội dung có thể
                        ẩn/hiện!
                    </p>
                </div>
            )}

            <hr />

            <button
                onClick={() =>
                    setIsDarkMode(!isDarkMode)
                }
            >
                {isDarkMode
                    ? "☀️ Light Mode"
                    : "🌙 Dark Mode"}
            </button>

            <hr />

            <button
                onClick={() =>
                    setIsLiked(!isLiked)
                }
            >
                {isLiked
                    ? "❤️ Đã thích"
                    : "🤍 Thích"}
            </button>

            <hr />

            <h3>Mật khẩu</h3>

            <input
                type={
                    showPassword
                        ? "text"
                        : "password"
                }
                placeholder="Nhập mật khẩu..."
            />

            <button
                onClick={() =>
                    setShowPassword(
                        !showPassword
                    )
                }
            >
                {showPassword
                    ? "Ẩn"
                    : "Hiện"}
            </button>

            <hr />

            <h3
                style={{
                    cursor: "pointer"
                }}
                onClick={() =>
                    setIsOpen(!isOpen)
                }
            >
                📂 Câu hỏi thường gặp
            </h3>

            {isOpen && (
                <div
                    style={{
                        border: "1px solid gray",
                        padding: "10px"
                    }}
                >
                    Đây là nội dung của
                    accordion.
                </div>
            )}

            <hr />

            <h3>Bật / Tắt đèn</h3>

            <div
                style={{
                    fontSize: "60px"
                }}
            >
                {isOn ? "💡" : "⚫"}
            </div>

            <button
                onClick={() =>
                    setIsOn(!isOn)
                }
            >
                {isOn
                    ? "Tắt đèn"
                    : "Bật đèn"}
            </button>
        </div>
    );
}

export default BooleanState;