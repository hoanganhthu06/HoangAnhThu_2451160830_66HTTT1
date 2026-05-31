import { useState } from "react";

function FormEvents() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        message: ""
    });

    const [submitted, setSubmitted] = useState(false);

    function handleChange(event) {
        const { name, value } = event.target;

        setFormData({
            ...formData,
            [name]: value
        });
    }

    function handleSubmit(event) {
        event.preventDefault();

        if (
            formData.name === "" ||
            formData.email === "" ||
            formData.password === "" ||
            formData.confirmPassword === ""
        ) {
            alert("Vui lòng nhập đầy đủ thông tin!");
            return;
        }

        if (!formData.email.includes("@")) {
            alert("Email không hợp lệ!");
            return;
        }

        if (
            formData.password !==
            formData.confirmPassword
        ) {
            alert("Mật khẩu không khớp!");
            return;
        }

        setSubmitted(true);
    }

    function handleReset() {
        setFormData({
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
            message: ""
        });

        setSubmitted(false);
    }

    return (
        <div style={{ padding: "20px" }}>
            <h2>Form Events</h2>

            {!submitted ? (
                <form onSubmit={handleSubmit}>

                    <div>
                        <label>Tên: </label>
                        <input
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </div>

                    <br />

                    <div>
                        <label>Email: </label>

                        <input
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />

                        {formData.email &&
                            !formData.email.includes("@") && (
                                <p style={{ color: "red" }}>
                                    Email phải chứa ký tự @
                                </p>
                            )}
                    </div>

                    <br />

                    <div>
                        <label>Mật khẩu: </label>

                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </div>

                    <br />

                    <div>
                        <label>
                            Xác nhận mật khẩu:
                        </label>

                        <input
                            type="password"
                            name="confirmPassword"
                            value={
                                formData.confirmPassword
                            }
                            onChange={handleChange}
                        />

                        {formData.confirmPassword &&
                            formData.password !==
                                formData.confirmPassword && (
                                <p style={{ color: "red" }}>
                                    Mật khẩu không khớp
                                </p>
                            )}

                        {formData.confirmPassword &&
                            formData.password ===
                                formData.confirmPassword && (
                                <p style={{ color: "green" }}>
                                    ✓ Mật khẩu khớp
                                </p>
                            )}
                    </div>

                    <br />

                    <div>
                        <label>Tin nhắn: </label>

                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={4}
                        />
                    </div>

                    <br />

                    <button type="submit">
                        Gửi
                    </button>

                    <button
                        type="button"
                        onClick={handleReset}
                    >
                        Xóa
                    </button>
                </form>
            ) : (
                <div
                    style={{
                        background: "#d4edda",
                        padding: "15px",
                        borderRadius: "5px"
                    }}
                >
                    <h3>
                        ✅ Đã gửi thành công!
                    </h3>

                    <p>
                        Tên: {formData.name}
                    </p>

                    <p>
                        Email: {formData.email}
                    </p>

                    <p>
                        Tin nhắn:
                        {formData.message}
                    </p>

                    <button
                        onClick={handleReset}
                    >
                        Gửi lại
                    </button>
                </div>
            )}
        </div>
    );
}

export default FormEvents;