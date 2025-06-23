import React from "react";
import { storage } from "../../utils/storage";

interface SummaryProps {
  formData: {
    name?: string;
    email?: string;
    phone?: string;
    password?: string;
    securityQuestion?: string;
    securityAnswer?: string;
    incomeRange?: string;
    employmentStatus?: string;
  };
  onBack: () => void;
  onSubmit?: () => void;
  resetData: () => void;
}

const Summary: React.FC<SummaryProps> = ({
  formData,
  onBack,
  onSubmit,
  resetData,
}) => {
  console.log("summary.page render");
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>📝 Summary</h2>

      <div style={styles.section}>
        <h3>👤 Personal Information</h3>
        <p>
          <strong>Name:</strong> {formData.name}
        </p>
        <p>
          <strong>Email:</strong> {formData.email}
        </p>
        <p>
          <strong>Phone:</strong> {formData.phone}
        </p>
      </div>

      <div style={styles.section}>
        <h3>🔐 Account Security</h3>
        <p>
          <strong>Password:</strong> *******
        </p>
        <p>
          <strong>Security Question:</strong> {formData.securityQuestion}
        </p>
        <p>
          <strong>Answer:</strong> {formData.securityAnswer}
        </p>
      </div>

      <div style={styles.section}>
        <h3>💼 Financial Information</h3>
        <p>
          <strong>Income Range:</strong> {formData.incomeRange}
        </p>
        <p>
          <strong>Employment Status:</strong> {formData.employmentStatus}
        </p>
      </div>

      <div style={styles.buttonContainer}>
        <button onClick={onBack} style={styles.backButton}>
          Back
        </button>
        <button onClick={onSubmit} style={styles.submitButton}>
          Submit
        </button>
        <button onClick={resetData} style={styles.submitButton}>
          Reset
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "500px",
    margin: "40px auto",
    padding: "24px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    backgroundColor: "#fff",
  },
  heading: {
    textAlign: "center",
    marginBottom: "20px",
  },
  section: {
    marginBottom: "20px",
    lineHeight: 1.6,
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
  backButton: {
    padding: "10px 20px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    backgroundColor: "#007bff",
    cursor: "pointer",
  },
  submitButton: {
    padding: "10px 20px",
    borderRadius: "6px",
    border: "none",
    backgroundColor: "#007bff",
    color: "#fff",
    cursor: "pointer",
  },
};

export default Summary;
