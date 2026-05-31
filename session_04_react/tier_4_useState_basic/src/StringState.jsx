import { useState } from "react";

function StringState() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div style={{ padding: "20px" }}>
            <h2>Nhập thông tin</h2>

            <div style={{ marginBottom: "10px" }}>
                <label>Tên: </label>

                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Nhập tên..."
                    maxLength={100}
                />

                <p>{name.length}/100 ký tự</p>
            </div>

            <div style={{ marginBottom: "10px" }}>
                <label>Email: </label>

                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Nhập email..."
                />

                {email.includes("@") ? (
                    <p style={{ color: "green" }}>
                        ✓ Email hợp lệ
                    </p>
                ) : (
                    <p style={{ color: "red" }}>
                        ✗ Email chưa hợp lệ
                    </p>
                )}
            </div>

            <div style={{ marginBottom: "10px" }}>
                <label>Mật khẩu: </label>

                <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Nhập mật khẩu..."
                />

                <button
                    onClick={() =>
                        setShowPassword(!showPassword)
                    }
                >
                    {showPassword ? "Ẩn" : "Hiện"}
                </button>
            </div>

            <h3>Thông tin đã nhập:</h3>

            <p>
                Tên: {name || "(chưa nhập)"}
            </p>

            <p>
                Email: {email || "(chưa nhập)"}
            </p>

            {name && (
                <p
                    style={{
                        background: "#f0f0f0",
                        padding: "10px"
                    }}
                >
                    Xin chào <strong>{name}</strong>!
                    Email của bạn là {email}
                </p>
            )}
        </div>
    );
}

export default StringState;