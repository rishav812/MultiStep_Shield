export const mockSubmitForm = (formData: Record<string, any>) => {
  return new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      const isSuccess = Math.random() > 0.4; // 60% chance of success

      if (isSuccess) {
        resolve(); // ✅ successful submission
      } else {
        // ❌ Simulated server validation errors
        const errors: Record<string, string> = {};

        if (formData.email === "already@exists.com") {
          errors.email = "Email already in use";
        }

        if (!formData.phone || formData.phone.length !== 10) {
          errors.phone = "Phone number must be 10 digits";
        }

        if (formData.password && formData.password.length < 8) {
          errors.password = "Password must be at least 8 characters";
        }

        // fallback generic error
        if (Object.keys(errors).length === 0) {
          errors.email = "Server error — please try again";
        }

        reject(errors); // return simulated field-level errors
      }
    }, 1000); // 1 second delay to simulate network
  });
};
