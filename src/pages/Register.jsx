import { useState } from "react";
import { supabase } from "../services/supabaseClient";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user"); // Default role as "user"
  const navigate = useNavigate();

  const handleSignUp = async () => {
    const { data: signUpData, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      Swal.fire({
        icon: "error",
        title: "Pendaftaran Gagal",
        text: error.message,
      });
    } else {
      // Tunggu sebentar untuk memastikan pengguna telah didaftarkan sepenuhnya
      const user = await supabase.auth.getUser();

      if (user?.data?.user) {
        // Insert the user's role into the profiles table
        const { data: profileData, error: profileError } = await supabase
          .from("profiles")
          .insert([
            { id: user.data.user.id, email, role }, // Save role in profile
          ]);

        if (profileError) {
          Swal.fire({
            icon: "error",
            title: "Gagal Menyimpan Data Profil",
            text: profileError.message,
          });
        } else {
          Swal.fire({
            icon: "success",
            title: "Pendaftaran Berhasil!",
            text: "Akun Anda berhasil dibuat, Anda bisa login sekarang.",
          }).then(() => {
            navigate("/login"); // Redirect to login page setelah user klik "OK" di Swal
          });
        } // Redirect to login page
      } else {
        Swal.fire({
            icon: "error",
            title: "Gagal Mendapatkan Data Pengguna",
            text: "Tidak dapat mengambil data pengguna setelah pendaftaran.",
          });
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-500">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold font-poppins text-center">Sign Up</h2>

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
          onClick={handleSignUp}
          className="w-full py-2 font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-500"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}
