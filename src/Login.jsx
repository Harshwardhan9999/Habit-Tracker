import { signInWithPopup } from "firebase/auth"; // ✅ this is correct
import { auth, provider } from "./firebase"; // ✅ make sure both are exported
import Header from "./components/Header";
import { useState } from "react";

function Login() {
  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider); // ✅ use this
      const user = result.user;
      console.log("Logged in user:", user.displayName, user.email);
    } catch (error) {
      console.error("Error logging in:", error.message);
    }
  };

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", formData.email);
    console.log("Password:", formData.password);
  };

  return (
    <div className="flex flex-col items-center bg-[rgb(247,247,247)] h-screen">
      <div className="w-full sticky top-0 z-50 bg-white shadow">
        <Header />
      </div>
      <div className="flex flex-col items-center h-screen justify-center">
        <form
          action="#"
          className="w-96 bg-[rgb(255,255,255)] px-[46px] pt-[42px] pb-[48px] flex flex-col justify-between rounded-2xl"
          style={{ boxShadow: "0 4px 36px 0 rgba(0, 0, 0, 0.04)" }}
        >
          <h1 className="text-[26px] mb-6 font-[600]">Sign Up</h1>
          <div className="mb-3">
            <input
              value={formData.email}
              onChange={handleChange}
              className="form-input"
              type="email"
              name="email"
              // required
              placeholder="Email"
            />
          </div>
          <div className="mb-3">
            <input
              value={formData.password}
              onChange={handleChange}
              className="form-input"
              type="password"
              name="password"
              // required
              // minLength={6}
              placeholder="Password: 6-64 Characters"
            />
          </div>
          <button
            className="bg-[#4772fa] py-2 text-white font-light rounded w-full px-3  mb-2 text-[14px] hover:bg-[rbg(72,102,250)]"
            type="submit"
            onClick={handleSubmit}
          >
            Sign Up
          </button>
          <p className="font-light text-xs mt-3 text-[rgba(25,25,25,0.6)] mb-18">
            By signing up, you agree to our{" "}
            <span className="underline">Terms of Service</span> and{" "}
            <span className="underline">Privacy Policy</span>.
          </p>
          <button
            onClick={signInWithGoogle}
            className="px-6 py-2  border border-[rgba(25,25,25,0.4)] bg-white rounded-md flex w-full items-center justify-center gap-3 font-light hover:bg-[rgb(247,247,247)] text-[#191919]"
          >
            <img
              src="../public/Google_Favicon_2025.svg.webp"
              className="w-5 h-5"
            />
            Sign in with Google
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
