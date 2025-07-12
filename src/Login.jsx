import { signInWithPopup } from "firebase/auth"; // ✅ this is correct
import { auth, provider } from "./firebase"; // ✅ make sure both are exported

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

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <button
        onClick={signInWithGoogle}
        className="px-6 py-3 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700"
      >
        Sign in with Google
      </button>
    </div>
  );
}

export default Login;
