import { useState } from "react";

function InputEvents() {
    const [text, setText] = useState("");
    const [email, setEmail] = useState("");

    function handleChange(event) {
        setText(event.target.value);
    }

    function handleEmailChange(event) {
        setEmail(event.target.value);
    }

    const wordCount = text.trim()
        ? text.trim().split(/\s+/).length
        : 0;

    return (
        <div style={{ padding: "20px" }}>
            <h2>Input Events</h2>

            <div style={{ marginBottom: "15px" }}>
                <input
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="Nhập email..."
                    style={{
                        padding: "8px",
                        width: "300px"
                    }}
                />

                <p>
                    {email.includes("@")
                        ? "✅ Email hợp lệ"
                        : "❌ Email chưa hợp lệ"}
                </p>
            </div>

            <input
                value={text}
                onChange={handleChange}
                onFocus={() =>
                    console.log("Focused")
                }
                onBlur={() =>
                    console.log("Blurred")
                }
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        alert("Enter pressed!");
                    }
                }}
                placeholder="Nhập gì đó..."
                maxLength={100}
                style={{
                    padding: "8px",
                    width: "300px"
                }}
            />

            <p>Ký tự: {text.length}/100</p>

            <p>Số từ: {wordCount}</p>

            <p>Bạn đang nhập: {text}</p>

            {text && (
                <div
                    style={{
                        background: "#f0f0f0",
                        padding: "10px",
                        marginTop: "10px",
                        borderRadius: "5px"
                    }}
                >
                    <h4>Preview</h4>
                    <p>{text}</p>
                </div>
            )}

            {text.length > 80 && (
                <p style={{ color: "red" }}>
                    ⚠️ Sắp hết ký tự!
                </p>
            )}
        </div>
    );
}

export default InputEvents;