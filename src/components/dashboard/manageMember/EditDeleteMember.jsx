import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { supabase } from "../../../services/supabaseClient";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

export default function EditMemberForm() {
  const [gelarDepan, setGelarDepan] = useState("");
  const [gelarBelakangList, setGelarBelakangList] = useState([]);
  const [nama, setNama] = useState("");
  const [bidang, setBidang] = useState("");
  const [jabatan, setJabatan] = useState("");
  const [scopusId, setScopusId] = useState("");
  const [sintaId, setSintaId] = useState("");
  const [image, setImage] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const { id } = useParams();
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const parseGelarBelakang = (value) => {
    return typeof value === "string" ? value.split(", ") : value || [];
  };

  // Options for gelar
  const gelarOptions = ["Dr.", "Prof. Dr."];
  const gelarBelakangOptions = [
    "S.Kom.",
    "S.T.",
    "S.Si.",
    "M.Kom.",
    "M.Cs.",
    "M.Si.",
    "M.Eng.",
    "M.T.",
  ];

  // Options for jabatan
  const jabatanOptions = [
    "Advisory Board",
    "Chairman",
    "Secretary 1",
    "Secretary 2",
    "Academic Advisor",
    "Coordinator AI for Medical Science",
    "Coordinator AI for Natural Disaster",
    "Coordinator AI for Game",
    "Coordinator AI for Smart Society, Food, and Agriculture",
    "Coordinator AI for High Performance Computing",
    "Coordinator AI for Data Security",
    "Member",
  ];

  // Options for bidang
  const bidangOptions = [
    "AI for Medical Science",
    "AI for Natural Disaster",
    "AI for Game",
    "AI for Smart Society, Food, and Agriculture",
    "AI for High Performance Computing",
    "AI for Data Security",
  ];

  useEffect(() => {
    fetchMembers();
  }, [id]);

  useEffect(() => {
    return () => {
      if (imageUrl) {
        URL.revokeObjectURL(imageUrl);
      }
    };
  }, [imageUrl]);

  async function fetchMembers() {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from("members")
        .select("*")
        .eq("id", id)
        .single();

      if (error) throw error;

      setGelarDepan(data.gelar_depan || "");
      setGelarBelakangList(parseGelarBelakang(data.gelar_belakang));
      setNama(data.nama || "");
      setBidang(data.bidang || "");
      setJabatan(data.jabatan || "");
      setScopusId(data.scopus_id || "");
      setSintaId(data.sinta_id || "");
      setImageUrl(data.image_url || "");
    } catch (error) {
      Swal.fire("Error", "Failed to fetch member: " + error.message, "error");
    } finally {
      setLoading(false);
    }
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 10 * 1024 * 1024) { // 10MB limit
        Swal.fire("Error", "Image size should be less than 10MB", "error");
        return;
      }
      if (!file.type.startsWith('image/')) {
        Swal.fire("Error", "Please upload an image file", "error");
        return;
      }
      setImage(file);
    }
  };

  const handleGelarBelakangChange = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions).map(
      (option) => option.value
    );
    setGelarBelakangList(selectedOptions);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!nama || !jabatan || !scopusId || !sintaId) {
      Swal.fire("Error", "Please fill all required fields", "error");
      return;
    }
    setLoading(true);

    try {
      let newImageUrl = imageUrl;

      if (image) {
        const fileExt = image.name.split(".").pop();
        const fileName = `${Math.random()}.${fileExt}`;
        const { data, error } = await supabase.storage
          .from("profile-members")
          .upload(fileName, image);

        if (error) throw error;

        const { data: urlData } = supabase.storage
          .from("profile-members")
          .getPublicUrl(data.path);

        newImageUrl = urlData.publicUrl;
      }

      const { data, error } = await supabase
        .from("members")
        .update({
          gelar_depan: gelarDepan,
          gelar_belakang: gelarBelakangList,
          nama,
          bidang,
          jabatan,
          scopus_id: scopusId,
          sinta_id: sintaId,
          image_url: newImageUrl,
        })
        .eq("id", id);

      if (error) throw error;

      Swal.fire("Success", "Members updated successfully", "success");
      navigate("/dashboard/manage-members");
    } catch (error) {
      Swal.fire("Error", "Failed to update : " + error.message, "error");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="font-poppins text-lg block mb-2" htmlFor="gelar">
          Gelar:
        </label>
        <select
          className="border-2 border-gray-500 p-2 rounded-lg w-full"
          type="text"
          id="gelar"
          value={gelarDepan}
          onChange={(e) => setGelarDepan(e.target.value)}
          required
        >
          <option value="">Pilih Gelar</option>
          {gelarOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div className="relative">
        <label
          className="font-poppins text-lg block mb-2"
          htmlFor="gelarBelakang"
        >
          Gelar Belakang:
        </label>
        <div className="relative">
          <button
            type="button"
            onClick={toggleDropdown}
            className="w-full p-2 border-2 border-gray-500 rounded-lg text-left flex justify-between items-center"
          >
            <span>
              {gelarBelakangList.length > 0
                ? gelarBelakangList.join(", ")
                : "Pilih Gelar Belakang"}
            </span>
            <svg
              className={`w-4 h-4 transition-transform ${
                isDropdownOpen ? "transform rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {isDropdownOpen && (
            <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-48 overflow-y-auto">
              {gelarBelakangOptions.map((option) => (
                <div
                  key={option}
                  className={`px-4 py-2 cursor-pointer hover:bg-blue-50 ${
                    gelarBelakangList.includes(option) ? "bg-blue-100" : ""
                  }`}
                  onClick={() => {
                    const newSelection = gelarBelakangList.includes(option)
                      ? gelarBelakangList.filter((item) => item !== option)
                      : [...gelarBelakangList, option];
                    setGelarBelakangList(newSelection);
                  }}
                >
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={gelarBelakangList.includes(option)}
                      onChange={() => {}}
                      className="mr-2"
                    />
                    {option}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <p className="text-sm text-gray-500 mt-1">
          Klik untuk memilih gelar belakang
        </p>
      </div>
      <div>
        <label className="font-poppins text-lg block mb-2" htmlFor="nama">
          Nama:
        </label>
        <input
          className="border-2 border-gray-500 p-2 rounded-lg w-full"
          type="text"
          id="nama"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
          required
        />
      </div>
      <div>
        <label className="font-poppins text-lg block mb-2" htmlFor="gambar">
          Gambar:
        </label>
        <input
          type="file"
          id="gambar"
          onChange={handleImageChange}
          accept="image/*"
          className="block w-full text-sm text-gray-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-blue-50 file:text-blue-700
            hover:file:bg-blue-100"
        />
        {imageUrl && (
          <img
            src={imageUrl}
            alt="Current Member Profile"
            className="mt-2 max-w-xs h-auto"
          />
        )}
      </div>
      <div>
        <label className="font-poppins text-lg block mb-2" htmlFor="bidang">
          Bidang:
        </label>
        <select
          className="border-2 border-gray-500 p-2 rounded-lg w-full"
          id="bidang"
          value={bidang}
          onChange={(e) => setBidang(e.target.value)}
        >
          <option value="">Pilih Bidang</option>
          {bidangOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className="font-poppins text-lg block mb-2" htmlFor="jabatan">
          Jabatan:
        </label>
        <select
          className="p-2 rounded-lg w-full"
          type="text"
          id="jabatan"
          value={jabatan}
          onChange={(e) => {
            setJabatan(e.target.value);
          }}
          required
        >
          <option value="">Pilih Jabatan</option>
          {jabatanOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      {/* Remove empty img tags */}
      <div>
        <label className="font-poppins text-lg block mb-2" htmlFor="scopusId">
          Scopus ID:
        </label>
        <input
          className="border-2 border-gray-500 p-2 rounded-lg w-full"
          type="text"
          id="scopusId"
          value={scopusId}
          onChange={(e) => setScopusId(e.target.value)}
          required
        />
      </div>
      <div>
        <label className="font-poppins text-lg block mb-2" htmlFor="sintaId">
          Sinta ID:
        </label>
        <input
          className="border-2 border-gray-500 p-2 rounded-lg w-full"
          type="text"
          id="sintaId"
          value={sintaId}
          onChange={(e) => {
            setSintaId(e.target.value);
          }}
          required
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className={`mt-4 px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline ${
          loading ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        {loading ? "Updating..." : "Update Member"}
      </button>
      <button>
        <Link
          to="/dashboard/manage-members"
          className="mt-4 ml-5 px-4 py-2 font-bold bg-red-500 text-white rounded-full"
        >
          Back
        </Link>
      </button>
    </form>
  );
}
