// import { createClient } from "@supabase/supabase-js";

// export const supabase = createClient(
//   import.meta.env.VITE_REACT_APP_SUPABASE_URL,
//   import.meta.env.VITE_REACT_APP_SUPABASE_ANON_KEY,
// );

// //Global Variable
// export let User = await supabase.auth.getSession().then((e) => e.data.session);
  
// //manggil api di supabase kalo dia eror, muncul alert kalo dia berhasil set global vaiable user
// export const login = async (email, password) => {
//   const user = await supabase.auth.signInWithPassword({ email, password });
//   if (user.error) {
//     alert(user.error.message);
//     return null;
//   } else {
//     User = await supabase.auth.getSession().then((e) => e.data.session);

//     //read
//     const temp = await supabase
//       .from("table_user")
//       .select("*")
//       .eq("user_id", User.user.id); //user yg di table public. table_user
//     User = {
//       user: User.user,
//       username: temp.data[0].username,
//     };
//     return User;
//   }
// };

// export const Logout = async () => {
//   await supabase.auth.signOut();
//   User = null;
// };

// // window.app = async () => {
// //     await supabase.auth.signUp({
// //         email: "111202113768@mhs.dinus.ac.id",
// //         password: "udinussemarang123"
// //     }
// //     )
// // }    

// export default supabase;
