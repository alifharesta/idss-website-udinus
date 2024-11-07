import { useState } from "react";
import { supabase } from "../services/supabaseClient";
import Logo1 from "../assets/landingpage/logo.png";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2"

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    const { data: loginData, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      Swal.fire({
        icon: "error",
        title: "Login Gagal",
        text: error.message,
      });
    } else {
      const { data: profileData, error: profileError } = await supabase
        .from("profiles")
        .select("role")
        .eq("id", loginData.user.id);

      if (profileError) {
        Swal.fire({
          icon: "error",
          title: "Gagal Mengambil Data Profil",
          text: profileError.message,
        });
      } else {
        if (profileData.role === "admin") {
          console.log("Admin login successful");
          // Arahkan user ke halaman dashboard atau berikan akses admin
        } else {
          Swal.fire({
            icon: "success",
            title: "Login Berhasil",
            text: "Selamat datang!",
          }).then(() => {
            navigate("/dashboard");
          });
        }   
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-500">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold font-poppins text-center">
          Login Admin IDSS
        </h2>
        <img src={Logo1} alt="Logo" className="w-24 mx-auto" />

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button
          onClick={handleLogin}
          className="w-full py-2 font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-500"
        >
          Login
        </button>
      </div>
    </div>
  );
}
