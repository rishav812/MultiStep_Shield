# 📝 Multi-Step Form with Validation and Persistence

This project implements a multi-step registration form using React, `useReducer`, and `Yup`, with the following features:

---

## 🚀 Features

### 📋 Multi-Step Form
- Step 1: Personal Information (Name, Email, Phone)
- Step 2: Account Security (Password, Security Question)
- Step 3: Financial Information (Income Range, Employment Status)
- Step 4: Summary & Submit

### ✅ Validation
- Client-side validation using **Yup** and `react-hook-form`
- Server-side validation simulated via a mock API with random success/failure
- Field-specific error highlighting from "server"

### 🛡️ Security & Rate Limiting
- Simulated server rate limiting to block rapid submission attempts
- Passwords are hidden in the summary
- Optional: Token-based authentication header support

### 💾 Persistence
- Form data is automatically saved in **localStorage**
- Data is restored on page reload using `secure-ls` for secure encryption

### 🧠 State Management
- Global state managed using `useReducer`
- Step index and form data are both managed centrally

---

## 📦 Tech Stack

- ⚛️ React
- ⚙️ TypeScript
- 📦 react-hook-form
- 🔐 Yup (validation)
- 🔄 useReducer (state management)
- 💾 secure-ls (encrypted localStorage)
- 🧪 DummyJSON API (for search simulation)

---
