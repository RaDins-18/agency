'use client';

import Spinner from "@/components/ui/Spinner";
import { Eye, EyeOff } from "lucide-react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const { data: status } = useSession();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ username: '', password: '' });
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    try {
      // Attempt to sign in using the credientials provided
      const res = await signIn('credentials', {
        username: form.username,
        password: form.password,
        redirect: false
      });

      if (!res.error) {
        // Successfully signed in
        router.push('/admin')
      } else {
        // handle sign in error
        setError("Invalid username or password");
        setTimeout(() => {
          setError("");
        }, 4000); // remove error after 4 seconds
      }
    } catch (error) {
      setError("Sign-in failed. Please try again");
      setTimeout(() => {
        setError("");
      }, 4000);
    } finally {
      setLoading(false); // ensure loading is set to false in all cases
      setTimeout(() => {
        setError("");
      }, 4000);
    }
  }

  if (status === 'loading') {
    return (
      <div className="flex justify-center items-center h-screen w-screen">
        <Spinner />
      </div>
    )
  }

  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="max-w-xl w-full bg-gradient-to-b from-white to-blue-50 rounded-3xl p-8 border-4 border-white shadow-2xl">
          <div className="text-center font-extrabold text-4xl text-blue-500">
            Login as Admin
          </div>

          {loading ? (
            <div className="flex justify-center items-center flex-col mt-6">
              <Spinner />
              <p className="mt-2">Checking...</p>
            </div>
          ) : (
            <>
              <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
                <input
                  required
                  type="text"
                  name="username"
                  id="username"
                  onChange={handleChange}
                  placeholder="Username"
                  value={form.username}
                  className="w-full bg-white text-gray-800 p-4 rounded-2xl text-xl mt-4 shadow-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 border-2 border-transparent focus:border-cyan-500"
                />
                <div className="relative flex items-center">
                  <input
                    required
                    type={showPassword ? "text" : "password"}
                    name="password"
                    id="password"
                    onChange={handleChange}
                    placeholder="Password"
                    value={form.password}
                    className="w-full bg-white text-gray-800 p-4 pr-12 rounded-2xl text-xl shadow-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 border-2 border-transparent focus:border-cyan-500"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 text-gray-500 hover:text-cyan-500 focus:outline-none"
                  >
                    {showPassword ? (
                      <EyeOff className="w-7 h-7" />
                    ) : (
                      <Eye className="w-7 h-7" />
                    )}
                  </button>
                </div>
                <button
                  type="submit"
                  className="w-full font-bold bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-2xl py-4 mt-6 rounded-2xl shadow-md hover:scale-[102%] transform transition-all active:scale-95"
                >
                  Login
                </button>
              </form>

              {error && (
                <p className="text-gray-600 text-center mt-4 font-semibold">
                  {error}
                </p>
              )}
            </>
          )}
        </div>
      </div>
    </>
  );
}
