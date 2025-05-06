import { useState, useEffect, useRef } from "react";
import { supabase } from "../../../services/supabaseClient";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

export default function AddNews() {
  const [gelar, setGelar] = useState("");
  const [nama, setNama] = useState("");
  const [bidang, setBidang] = useState("");
  const [jabatan, setJabatan] = useState("");
  const [image, setImage] = useState(null);
  const [imageBlob, setImageBlob] = useState(null);
  const [scopusId, setScopusId] = useState("");
  const [sintaId, setSintaId] = useState("");
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const quillRef = useRef(null);

  //Image
  useEffect(() => {
    return () => {
      if (imageBlob) {
        URL.revokeObjectURL(imageBlob);
      }
    };
  }, [imageBlob]);

  const validateGelar = (value) => {
    if (!value.trim()) return "Gelar harus diisi";
    return "";
  };

  const validateNama = (value) => {
    if (!value.trim()) return "Nama harus diisi";
    return "";
  };

  // const validateBidang = (value) => {
  //   if (!value.trim()) return "Bidang harus diisi";
  //   return "";
  // };

  const validateJabatan = (value) => {
    if (!value.trim()) return "Jabatan harus diisi";
    return "";
  };

  const validateScopusId = (value) => {
    if (!value.trim()) return "Scopus ID harus diisi";
    return "";
  };

  const validateSintaId = (value) => {
    if (!value.trim()) return "Sinta ID harus diisi";
    return "";
  };

  const validateImage = (file) => {
    if (!file) return false;
    const allowedTypes = ["image/jpeg", "image/png", "image/gif"];
    if (!allowedTypes.includes(file.type)) {
      Swal.fire({
        icon: "error",
        title: "Format Gambar Tidak Sesuai",
        text: "Format gambar harus JPEG, PNG, atau GIF",
      });
      return false;
    }
    if (file.size > 10 * 1024 * 1024) {
      Swal.fire({
        icon: "error",
        title: "Ukuran Gambar Terlalu Besar",
        text: "Ukuran gambar maksimal 10MB",
      });
      return false;
    }
    return true;
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && validateImage(file)) {
      setImage(file);
      const blob = URL.createObjectURL(file);
      setImageBlob(blob);
      setErrors({ ...errors, image: "" });
    } else {
      setImage(null);
      setImageBlob(null);
      setErrors({ ...errors, image: "Pilih gambar yang sesuai" });
    }
  };

  const handleCancelImage = () => {
    setImage(null);
    if (imageBlob) {
      URL.revokeObjectURL(imageBlob);
    }
    setImageBlob(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const gelarError = validateGelar(gelar);
    const namaError = validateNama(nama);
    // const bidangError = validateBidang(bidang);
    const jabatanError = validateJabatan(jabatan);
    const scopusIdError = validateScopusId(scopusId);
    const sintaIdError = validateSintaId(sintaId);
    setErrors({
      gelar: gelarError,
      nama: namaError,
      // bidang: bidangError,
      jabatan: jabatanError,
      scopusId: scopusIdError,
      sintaId: sintaIdError,
    });

    if (
      gelarError ||
      namaError ||
      // bidangError ||
      jabatanError ||
      scopusIdError ||
      sintaIdError
    ) {
      return;
    }

    setLoading(true);

    try {
      console.log("Starting submission process");
      let imageUrl = null;
      if (image) {
        console.log("Uploading image");
        const fileExt = image.name.split(".").pop();
        const fileName = `${Math.random()}.${fileExt}`;
        const { data, error } = await supabase.storage
          .from("profile-members")
          .upload(fileName, image);

        if (error) {
          console.error("Error uploading image:", error);
          throw error;
        }

        console.log("Image uploaded successfully", data);

        const { data: urlData, error: urlError } = supabase.storage
          .from("profile-members")
          .getPublicUrl(data.path);

        if (urlError) {
          console.error("Error getting public URL:", urlError);
          throw urlError;
        }

        imageUrl = urlData.publicUrl;
        console.log("Image URL obtained:", imageUrl);
      }

      console.log("Inserting member data");

      const { data, error } = await supabase.from("members").insert([
        {
          gelar,
          nama,
          bidang,
          jabatan,
          image_url: imageUrl,
          scopus_id: scopusId,
          sinta_id: sintaId,
        },
      ]);

      if (error) {
        console.error("Error inserting member:", error);
        throw error;
      }

      console.log("Member inserted successfully", data);

      await Swal.fire({
        icon: "success",
        title: "Berhasil!",
        text: "Member berhasil ditambahkan.",
        confirmButtonColor: "#3085d6",
      });

      setGelar("");
      setNama("");
      setBidang("");
      setJabatan("");
      setImage(null);
      setScopusId("");
      setSintaId("");
      handleCancelImage();
      setErrors({});
    } catch (error) {
      console.error("Detailed error:", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text:
          "Error adding news: " +
          (error.message || error.error_description || "Unknown error"),
      });
    } finally {
      setLoading(false);
    }
  };
  // Options for gelar
  const gelarOptions = ["Dr.", "Prof. Dr."];
  // Options for jabatan
  const jabatanOptions = [
    "Advisory Board",
    "Director",
    "Secretary 1",
    "Secretary 2",
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

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="font-poppins text-lg block mb-2" htmlFor="gelar">
          Gelar:
        </label>
        <select
          className={`border-2 ${
            errors.gelar ? "border-red-500" : "border-gray-500"
          } p-2 rounded-lg w-full`}
          id="gelar"
          value={gelar}
          onChange={(e) => {
            setGelar(e.target.value);
            setErrors({ ...errors, gelar: validateGelar(e.target.value) });
          }}
          required
        >
          <option value="">Pilih Gelar</option>
          {gelarOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {errors.gelar && (
          <p className="text-red-500 text-sm mt-1">{errors.gelar}</p>
        )}
      </div>
      <div>
        <label className="font-poppins text-lg block mb-2" htmlFor="bidang">
          Nama:
        </label>
        <input
          className={`border-2 ${
            errors.title ? "border-red-500" : "border-gray-500"
          } p-2 rounded-lg w-full`}
          type="text"
          id="nama"
          value={nama}
          onChange={(e) => {
            setNama(e.target.value);
            setErrors({ ...errors, title: validateNama(e.target.value) });
          }}
          required
        />
        {errors.nama && (
          <p className="text-red-500 text-sm mt-1">{errors.nama}</p>
        )}
      </div>
      <div>
        <label className="font-poppins text-lg block mb-2" htmlFor="image">
          Gambar:
        </label>
        <input
          type="file"
          id="image"
          onChange={handleImageChange}
          accept="image/*"
          className={`block w-full text-sm ${
            errors.image ? "text-red-500" : "text-gray-500"
          }
            file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-blue-50 file:text-blue-700
            hover:file:bg-blue-100`}
        />
        {imageBlob && (
          <div className="mt-4 relative">
            <img
              src={imageBlob}
              alt="Preview"
              className="max-w-xs h-auto rounded-lg shadow-lg"
            />
            <button
              type="button"
              onClick={handleCancelImage}
              className="absolute top-[-10px] left-[340px] bg-red-500 text-white rounded-full p-1 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        )}
      </div>
      <div>
        <label className="font-poppins text-lg block mb-2" htmlFor="bidang">
          Bidang:
        </label>
        <select
          className={`border-2 ${
            errors.bidang ? "border-red-500" : "border-gray-500"
          } p-2 rounded-lg w-full`}
          type="text"
          id="bidang"
          value={bidang}
          onChange={(e) => {
            setBidang(e.target.value);
            setErrors({ ...errors, title: validateBidang(e.target.value) });
          }}
        >
          <option value="">Pilih Bidang</option>
          {bidangOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {/* {errors.bidang && (
          <p className="text-red-500 text-sm mt-1">{errors.bidang}</p>
        )} */}
      </div>
      <div>
        <label className="font-poppins text-lg block mb-2" htmlFor="jabatan">
          Jabatan:
        </label>
        <select
          className={`border-2 ${
            errors.title ? "border-red-500" : "border-gray-500"
          } p-2 rounded-lg w-full`}
          type="text"
          id="jabatan"
          value={jabatan}
          onChange={(e) => {
            setJabatan(e.target.value);
            setErrors({ ...errors, title: validateJabatan(e.target.value) });
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
        {errors.jabatan && (
          <p className="text-red-500 text-sm mt-1">{errors.jabatan}</p>
        )}
      </div>
      <div>
        <label className="font-poppins text-lg block mb-2" htmlFor="scopusId">
          Scopus ID:
        </label>
        <input
          className={`border-2 ${
            errors.scopusId ? "border-red-500" : "border-gray-500"
          } p-2 rounded-lg w-full`}
          type="text"
          id="scopusId"
          value={scopusId}
          onChange={(e) => {
            setScopusId(e.target.value);
            setErrors({
              ...errors,
              scopusId: validateScopusId(e.target.value),
            });
          }}
          required
        />
        <img>
        </img>
        {errors.scopusId && (
          <p className="text-red-500 text-sm mt-1">{errors.scopusId}</p>
        )}
      </div>
      <div>
        <label className="font-poppins text-lg block mb-2" htmlFor="sintaId">
          Sinta ID:
        </label>
        <input
          className={`border-2 ${
            errors.sintaId ? "border-red-500" : "border-gray-500"
          } p-2 rounded-lg w-full`}
          type="text"
          id="sintaId"
          value={sintaId}
          onChange={(e) => {
            setSintaId(e.target.value);
            setErrors({ ...errors, sintaId: validateSintaId(e.target.value) });
          }}
          required
        />
        {errors.sintaId && (
          <p className="text-red-500 text-sm mt-1">{errors.sintaId}</p>
        )}
      </div>
      <button
        type="submit"
        disabled={
          loading || Object.values(errors).some((error) => error !== "")
        }
        className={`mt-4 px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline ${
          loading || Object.values(errors).some((error) => error !== "")
            ? "opacity-50 cursor-not-allowed"
            : ""
        }`}
      >
        {loading ? "Menambahkan..." : "Add Member"}
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
