import SecureLS from "secure-ls";
const ls = new SecureLS({ encodingType: "aes" });

export const storage = {
  set: (key: string, data: unknown) => {
    try {
      ls.set(key, data);
    } catch (err) {
      console.log("error:", err);
    }
  },

  get: (key: string) => {
    try {
      const data = ls.get(key);
      return data;
    } catch (err) {
      console.log("error:", err);
    }
  },

  clear: () => {
    try {
      ls.clear();
    } catch (err) {
      console.log("error:", err);
    }
  },
};
