import React, { useState } from "react";

export default function Form() {
  const [formValues, setFormValues] = useState({
    firstName: "",
    email: "",
    phoneNumber: "",
  });
  const [submitInput, setSubmitInput] = useState("");

  const handleInputChange = (inputName, value) => {
    setFormValues({
      ...formValues,
      [inputName]: value,
    });
    if (submitInput) {
      setSubmitInput({
        ...submitInput,
        [inputName]: value,
      });
    }
  };

  const handleSubmit = () => {
    setSubmitInput({ ...formValues });
  };

  return (
    <>
      <div class="container">
        <div class="image">
          <div class="form-box">
            <div class="form">
              <h2>Register</h2>
              <div class="input-box">
                <label for="">
                  <input
                    type="text"
                    placeholder="Name and Surname..."
                    value={formValues.firstName}
                    onChange={(e) => {
                      handleInputChange("firstName", e.target.value);
                    }}
                  />
                </label>
              </div>
              <div class="input-box">
                <label for="">
                  <input
                    type="email"
                    placeholder="Email..."
                    value={formValues.email}
                    onChange={(e) => {
                      handleInputChange("email", e.target.value);
                    }}
                  />
                </label>
              </div>
              <div class="input-box">
                <label for="">
                  <input
                    type="number"
                    placeholder="Phone number..."
                    value={formValues.phoneNumber}
                    onChange={(e) => {
                      handleInputChange("phoneNumber", e.target.value);
                    }}
                  />
                </label>
              </div>
              <button onClick={handleSubmit}>Submit</button>
            </div>
            <div>
              {submitInput !== "" &&
                formValues.firstName !== "" &&
                formValues.email.includes("@gmail.com") &&
                formValues.phoneNumber !== "" && (
                  <div className="submit-result">
                    <p>Username: {submitInput.firstName}</p>
                    <p>Email: {submitInput.email}</p>
                    <p>Phone: {submitInput.phoneNumber}</p>
                  </div>
                )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
