import { useState } from "react";
import { supabase } from "../services/supabaseClient";
import Logo1 from "../assets/landingpage/logo.png";
import { useNavigate } from "react-router-dom";
import bg from "../../src/assets/landingpage/lataridss.jpg";
import eye from "../assets/landingpage/eye.png";
import hidden from "../assets/landingpage/hidden.png";
import Swal from "sweetalert2"

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
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
        localStorage.setItem("id", loginData.user.id);

        if (profileData.role === "admin") {
          console.log("Admin login successful");
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
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full object-cover opacity-70">
          <img src={bg} alt="latar-idss"/>
        </div>
        <div className="relative z-20 flex flex-col items-center justify-center bg-white rounded-lg p-8 shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold font-poppins text-center">
          Login Admin
        </h2>
        <img src={Logo1} alt="Logo" className="w-24 mx-auto mt-5" />

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full px-3 py-2 mt-8 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        
        <input
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full px-3 py-2 mt-5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-0 flex items-center px-3 translate-x-[-60%] translate-y-[19%] text-gray-600 text-xs"
          >
            <img 
            src={showPassword ? hidden : eye}
            alt={showPassword ? "Hide" : "Show"}
            className="w-5 h-5 ml-4"
            />
          </button>
        
        <button
          onClick={handleLogin}
          className="w-full py-2 mt-10 font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-500"
        >
          Login
        </button>
        </div>
        </div>
    </div>
  );
}


