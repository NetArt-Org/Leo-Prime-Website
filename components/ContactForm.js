import { useState } from "react";
import { Country, State } from "country-state-city";
import styles from "./Contact.module.css";

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

    const [errors, setErrors] = useState({});
    const [focusedField, setFocusedField] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: "" });
    };

    const validateForm = () => {
        let newErrors = {};
    
        // Email format validation using a regular expression
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    
        Object.keys(formData).forEach((key) => {
            if (!formData[key]) {
                newErrors[key] = "This field is required*";
            }
        });
    
        if (formData.email && !emailRegex.test(formData.email)) {
            newErrors.email = "Please enter a valid email address*";
        }
    
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    

    const onSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;
    };
    const timeSlots = [];
    for (let i = 9; i < 18; i++) {
        const startTime = `${i % 12 === 0 ? 12 : i % 12} ${i < 12 ? 'AM' : 'PM'}`;
        const endTime = `${(i + 1) % 12 === 0 ? 12 : (i + 1) % 12} ${i + 1 < 12 ? 'AM' : 'PM'}`;
        timeSlots.push(`${startTime} - ${endTime}`);
    }

    return (
        <form onSubmit={onSubmit} className={`${styles.contactForm} contact-form`}>
            {[
                { name: "firstName", placeholder: "First name*" },
                { name: "secondName", placeholder: "Second name*" },
                { name: "email", placeholder: "Email*" },
                { name: "number", placeholder: "Phone number*", type: "tel" },
            ].map(({ name, placeholder, type = "text" }) => (
                <div key={name} className={styles.inputContainer}>
                    <div className={`${styles.floatingInputContainer} input-container`}>
                        <input
                            type={type}
                            name={name}
                            className={styles.floatingInput}
                            value={formData[name]}
                            onChange={handleChange}
                            onFocus={() => setFocusedField(name)}
                            onBlur={() => setFocusedField("")}
                            // required
                        />
                        <label
                            className={styles.floatingLabel}
                            style={{
                                top: formData[name] || focusedField === name ? "0px" : "50%",
                                fontSize: formData[name] || focusedField === name ? "12px" : "16px",
                            }}
                        >
                            {placeholder}
                        </label>
                    </div>
                    {errors[name] && <span className={styles.error}>{errors[name]}</span>}
                </div>
            ))}

            {/* Country Dropdown */}
            <div className={styles.inputContainer}>
                <div className={`${styles.floatingInputContainer} input-container`}>
                    <label
                        className={styles.floatingLabel}
                        style={{
                            top: formData.country || focusedField === "country" ? "0px" : "50%",
                            fontSize: formData.country || focusedField === "country" ? "12px" : "16px",
                        }}
                    >
                        Country*
                    </label>
                    <select
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        className={styles.selectInput}
                        // required
                    >
                        <option value=""></option>
                        {Country.getAllCountries().map((country) => (
                            <option key={country.isoCode} value={country.isoCode}>
                                {country.name}
                            </option>
                        ))}
                    </select>
                </div>
                {errors.country && <span className={styles.error}>{errors.country}</span>}
            </div>

            {/* State Dropdown */}
            <div className={styles.inputContainer}>
                <div className={`${styles.floatingInputContainer} input-container`}>
                    <label
                        className={styles.floatingLabel}
                        style={{
                            top: formData.state || focusedField === "state" ? "0px" : "50%",
                            fontSize: formData.state || focusedField === "state" ? "12px" : "16px",
                        }}
                    >
                        State*
                    </label>
                    <select
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        className={styles.selectInput}
                        disabled={!formData.country}
                        // required
                    >
                        <option value=""></option>
                        {formData.country &&
                            State.getStatesOfCountry(formData.country).map((state) => (
                                <option key={state.isoCode} value={state.isoCode}>
                                    {state.name}
                                </option>
                            ))}
                    </select>
                </div>
                {errors.state && <span className={styles.error}>{errors.state}</span>}
            </div>
            {/* Preferred Contact Time Dropdown */}
            <div className={styles.inputContainer}>
                <div className={`${styles.floatingInputContainer} input-container`}>
                    <label
                        className={styles.floatingLabel}
                        style={{
                            top: formData.preferredContactTime || focusedField === "preferredContactTime" ? "0px" : "50%",
                            fontSize: formData.preferredContactTime || focusedField === "preferredContactTime" ? "12px" : "16px",
                        }}
                    >
                        Preferred Contact Time*
                    </label>
                    <select
                        name="preferredContactTime"
                        value={formData.preferredContactTime}
                        onChange={handleChange}
                        className={styles.selectInput}
                        // required
                    >
                        <option value=""></option>
                        {timeSlots.map((time, index) => (
                            <option key={index} value={time}>
                                {time}
                            </option>
                        ))}
                    </select>
                </div>
                {errors.preferredContactTime && <span className={styles.error}>{errors.preferredContactTime}</span>}
            </div>
            {/* Radio Button for Existing Client */}
            <div className={window.innerWidth < 768 ? styles.fullWidthStyle : styles.inputContainerStyle}>
                <p className={styles.label}>Are you an existing client?*</p>
                <div className={styles.radioContainerStyle}>

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
                {errors.existingClient && <span className={styles.error}>{errors.existingClient}</span>}
            </div>
            <div className={styles.buttonContainer}>
                <button type="submit" className={styles.submitButton}>
                    Send enquiry
                </button>
            </div>
        </form>
    );
}
