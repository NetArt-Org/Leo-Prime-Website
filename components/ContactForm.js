import { useState } from "react";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        firstName: "",
        secondName: "",
        email: "",
        number: "",
        country: "",
        state: "",
        preferredContactTime: "",
        existingClient: "",
    });

    const [errors, setErrors] = useState({});
    const [focusedField, setFocusedField] = useState(""); 


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: "" });
    };

    const validateForm = () => {
        let newErrors = {};
        Object.keys(formData).forEach((key) => {
            if (!formData[key]) {
                newErrors[key] = "This field is required to submit the query*";
            }
        });
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;
    };

    const formStyle = {
        display: "flex",
        flexWrap: "wrap",
        gap: "10px",
        width: "100%",
        alignItems: "flex-end",
        justifyContent: "space-between"
    };

    const inputContainerStyle = {
        width: "46%", // Two-column layout
        display: "flex",
        flexDirection: "column",
        margin: "14px 0"
    };

    const fullWidthStyle = {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        margin: "8px 0"
    };

    const inputStyle = {
        padding: "10px 5px",
        border: "none",
        borderBottom: "2px solid #ccc",
        outline: "none",
        fontSize: "16px",
        fontWeight:"500"
    };

    const errorStyle = {
        color: "red",
        fontSize: "14px",
        marginTop: "5px",
    };

    const labelStyle = {
        fontWeight: "bold",
        marginBottom: "5px",
        fontSize: "16px",
        marginTop: "0"
    };

    const radioContainerStyle = {
        display: "flex",
        alignItems: "center",
        gap: "15px",
        marginTop: "5px",
        fontSize: "16px"
    };

    const buttonContainerStyle = {
        width: "100%",
        display: "flex",
        justifyContent: "center", // Center-align button
        marginTop: "25px",
    };

    const buttonStyle = {
        padding: "10px 20px",
        border: "none",
        borderRadius: "10px",
        background: "linear-gradient(to bottom left, #DE3C98 0%, #5D08B7 100%)",
        color: "white",
        backgroundOrigin: "border-box",  /* Ensures the background covers the padding */
        backgroundClip: "border-box",
        width: "100%",
        fontFamily: "Poppins, sans-serif",
        fontSize: "16px",
        fontWeight: "500",
        lineHeight: "30px",
    };
    const customRadioStyle = (checked) => ({
        width: "12px",
        height: "12px",
        borderRadius: "50%",
        background: checked
            ? "linear-gradient(to right, #DE3C98 0%, #5D08B7 100%)"
            : "transparent",
        border: checked ? "1px solid #DE3C98" : "1px solid #6F6F6F",
        display: "inline-block",
        cursor: "pointer",
        position: "relative",
    });
    const floatingInputContainerStyle = {
        position: "relative",
        width: "100%",
    };
    
    const floatingInputStyle = {
        ...inputStyle, // Reusing your existing input styles
        width: "100%",
        background: "transparent",
        borderBottom: "2px solid #ccc",
        transition: "all 0.3s ease",
    };
    
    const floatingLabelStyle = {
        position: "absolute",
        left: "5px",
        top: "50%",
        transform: "translateY(-50%)",
        fontSize: "16px",
        transition: "all 0.3s ease",
        pointerEvents: "none",
    };
    
    
    return (
        <>
        <form onSubmit={onSubmit} style={formStyle} className="contact-form">
        {[
            { name: "firstName", placeholder: "First name*" },
            { name: "secondName", placeholder: "Second name*" },
            { name: "email", placeholder: "Email*" },
            { name: "number", placeholder: "Phone number*", type: "tel" },
            { name: "country", placeholder: "Country*" },
            { name: "state", placeholder: "State*" },
            { name: "preferredContactTime", placeholder: "Preferred contact time*" },
        ].map(({ name, placeholder, type = "text" }) => (
            <div key={name} style={window.innerWidth < 768 ? fullWidthStyle : inputContainerStyle}>
                <div className="input-container" style={floatingInputContainerStyle}>
                    <input
                        type={type}
                        name={name}
                        style={floatingInputStyle}
                        value={formData[name]}
                        onChange={handleChange}
                        onFocus={() => setFocusedField(name)}
                        onBlur={() => setFocusedField("")}
                        required
                    />
                    <label
                        style={{
                            ...floatingLabelStyle,
                            top: formData[name] || focusedField === name ? "0px" : "50%",
                            fontSize: formData[name] || focusedField === name ? "12px" : "16px",
                            // color: focusedField == name || formData[name] ? "#5D08B7" : "#6f6f6f",
                        }} 
                    >
                        {placeholder}
                    </label>
                </div>
                {errors[name] && <span style={errorStyle}>{errors[name]}</span>}
            </div>
        ))}
    
        {/* Radio Button for Existing Client */}
        <div style={window.innerWidth < 768 ? fullWidthStyle : inputContainerStyle}>
            <p style={labelStyle}>Are you an existing client?*</p>
            <div style={radioContainerStyle}>
                    <label style={{ display: "flex", alignItems: "center", gap: "5px", cursor: "pointer" }}>
                        <input
                            type="radio"
                            name="existingClient"
                            value="Yes"
                            onChange={handleChange}
                            style={{ position: "absolute", opacity: 0 }}
                        />
                        <div style={customRadioStyle(formData.existingClient === "Yes")}></div>
                        Yes
                    </label>

                    <label style={{ display: "flex", alignItems: "center", gap: "5px", cursor: "pointer" }}>
                        <input
                            type="radio"
                            name="existingClient"
                            value="No"
                            onChange={handleChange}
                            style={{ position: "absolute", opacity: 0 }}
                        />
                        <div style={customRadioStyle(formData.existingClient === "No")}></div>
                        No
                    </label>
                </div>
            {errors.existingClient && <span style={errorStyle}>{errors.existingClient}</span>}
        </div>
    
        {/* Submit Button */}
        <div style={buttonContainerStyle}>
            <button type="submit" style={buttonStyle}>
                Send enquiry
            </button>
        </div>
    </form>
       </>
    );
}
