import { useState } from "react";

function MultipleStates() {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");
    const [isStudent, setIsStudent] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    function handleSubmit() {
        if (
            name.trim() === "" ||
            age === "" ||
            email.trim() === ""
        ) {
            alert("Vui lòng nhập đầy đủ thông tin!");
            return;
        }

        if (age <= 0 || age >= 100) {
            alert("Tuổi phải lớn hơn 0 và nhỏ hơn 100!");
            return;
        }

        setSubmitted(true);
    }

    function handleReset() {
        setName("");
        setAge("");
        setEmail("");
        setIsStudent(false);
        setSubmitted(false);
    }

    return (
        <div style={{ padding: "20px" }}>
            <h2>Form đăng ký</h2>

            {!submitted ? (
                <div>
                    <div style={{ marginBottom: "10px" }}>
                        <label>Tên: </label>
                        <input
                            value={name}
                            onChange={(e) =>
                                setName(e.target.value)
                            }
                        />
                    </div>

                    {/* Xin chào realtime */}
                    {name && (
                        <p>
                            👋 Xin chào <b>{name}</b>!
                        </p>
                    )}

                    <div style={{ marginBottom: "10px" }}>
                        <label>Tuổi: </label>
                        <input
                            type="number"
                            value={age}
                            onChange={(e) =>
                                setAge(e.target.value)
                            }
                        />
                    </div>

                    <div style={{ marginBottom: "10px" }}>
                        <label>Email: </label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) =>
                                setEmail(e.target.value)
                            }
                        />
                    </div>

                    <div style={{ marginBottom: "10px" }}>
                        <label>
                            <input
                                type="checkbox"
                                checked={isStudent}
                                onChange={(e) =>
                                    setIsStudent(
                                        e.target.checked
                                    )
                                }
                            />
                            Là sinh viên
                        </label>
                    </div>

                    <button onClick={handleSubmit}>
                        Đăng ký
                    </button>
                </div>
            ) : (
                <div
                    style={{
                        background: "#d4edda",
                        padding: "15px",
                        borderRadius: "4px"
                    }}
                >
                    <h3>
                        ✅ Đăng ký thành công!
                    </h3>

                    <p>Tên: {name}</p>

                    <p>Tuổi: {age}</p>

                    <p>Email: {email}</p>

                    <p>
                        Sinh viên:{" "}
                        {isStudent
                            ? "Có"
                            : "Không"}
                    </p>

                    <button onClick={handleReset}>
                        Đăng ký lại
                    </button>
                </div>
            )}
        </div>
    );
}

export default MultipleStates;