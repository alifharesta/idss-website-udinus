import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { supabase } from "../../../services/supabaseClient";
import { format } from "date-fns";
import edit from "../../../assets/landingpage/edit.png";
import del from "../../../assets/landingpage/delete.png";
import Swal from "sweetalert2";

export default function ManageMainMember() {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMembers();
  }, []);

  async function fetchMembers() {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from("members")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setMembers(data);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Error fetching members: " + error.message,
      });
    } finally {
      setLoading(false);
    }
  }

  const deleteMembers = async (id) => {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      });

      if (result.isConfirmed) {
        const { error } = await supabase.from("members").delete().eq("id", id);

        if (error) throw error;

        setMembers(members.filter((item) => item.id !== id));

        Swal.fire("Deleted!", "Member has been deleted.", "success");
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Error deleting member: " + error.message,
      });
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-[1037px] h-auto p-6 mx-auto shadow-custom-3 shadow-custom-4 mt-10">
      <div className="mx-auto mb-4">
        <Link to="add" className="p-2 bg-blue-500 text-white rounded-md">
          Add Member
        </Link>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead className="mx-auto text-center text-neutral-15 border-none">
            <tr className="border-none w-[999px] h-[56px] pt-[16px] pr-[0px] pb-[16px] pl-[0px] gap-[56px]">
              <th>Profile</th>
              <th>Gelar</th>
              <th>Nama</th>
              <th>Bidang</th>
              <th>Jabatan</th>
              <th>Create At</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="mx-auto text-center border-t-2">
            {members.map((item) => (
              <tr
                key={item.id}
                className="border-none w-[1003px] h-[64px] pt-[16px] pr-[0px] pb-[16px] pl-[0px] gap-[56px] text-neutral-15"
              >
                <td>
                  {item.image_url ? (
                    <img
                      src={item.image_url}
                      alt="avatar"
                      className="w-14 h-14 object-fill"
                    />
                  ) : (
                    <div className="w-20 h-20 bg-gray-200 rounded-full" />
                  )}
                </td>
                <td>{item.gelar}</td>
                <td>{item.nama}</td>
                <td>{item.bidang}</td>
                <td>{item.jabatan}</td>
                <td>
                  {format(new Date(item.created_at), "dd/MM/yyyy")}
                </td>
                <td className="flex gap-5 ml-10">
                  <Link to={`/dashboard/manage-members/edit/${item.id}`}>
                    <img
                      src={edit}
                      alt="Edit"
                      className="w-[24px] h-[24px] cursor-pointer"
                    />
                  </Link>
                  <button onClick={() => deleteMembers(item.id)}>
                    <img
                      src={del}
                      alt="Delete"
                      className="w-[24px] h-[24px] cursor-pointer"
                    />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
