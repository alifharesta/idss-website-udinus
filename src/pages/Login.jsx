// import { Navigate, useNavigate } from "react-router-dom";
// import { supabase, login } from "../services/supabaseClient";

export default function Login() {
  // const navigate = useNavigate();
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const form = new FormData(e.target);
  //   const email = form.get("email");
  //   const password = form.get("password");
  //   const user = await login(email, password);
  //   if (user) {
  //     console.log(data);
  //     navigate("/sidebar");
  //   }

  return (
    <section className="mx-auto container py-2 px-2">
      <form className="mt-5">
        <input
          name="email"
          type="text"
          placeholder="Username"
          className="form-control mb-2"
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          className="form-control mb-2"
        />
        <button className="btn btn-primary">Login</button>
      </form>
    </section>
  );
};

