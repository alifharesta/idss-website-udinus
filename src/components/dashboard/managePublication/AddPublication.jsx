import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../../services/supabaseClient";
import Swal from "sweetalert2";

export default function AddPublication() {
  const [judul, setJudul] = useState("");
  const [jenis, setJenis] = useState("");
  const jenisOptions = ["Jurnal", "Prosiding"];
  const [author, setAuthor] = useState("");
  const [abstract, setAbstract] = useState("");
  const [volume, setVolume] = useState("");
  const [issue, setIssue] = useState("");
  const [url_artikel, setArticle] = useState("");
  const [tahun, setTahun] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const generateSlug = (judul) => {
    const slug = judul
      .toLowerCase()
      .replace(/[^\w ]+/g, "")
      .replace(/ +/g, "-");
    console.log("Generated slug:", slug);
    return slug;
  };

  const validateJudul = (value) => {
    if (!value.trim()) return "Judul harus diisi";
    if (value.length < 5) return "Judul minimal 8 karakter";
    return "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const judulError = validateJudul(judul);

    setErrors((prevErrors) => ({
      ...prevErrors,
      judul: judulError,
    }));

    if (judulError) {
      return;
    }

    setLoading(true);

    try {
      console.log("Inserting Article");
      const slug = generateSlug(judul);
      const { data, error } = await supabase.from("publications").insert([
        {
          judul,
          jenis,
          abstract,
          author,
          volume,
          issue,
          url_artikel,
          tahun,
          slug
        },
      ]);

      if (error) {
        console.error("Error inserting article:", error);
        throw error;
      }


      console.log("Article inserted successfully", data);

      await Swal.fire({
        icon: "success",
        judul: "Berhasil!",
        text: "Publikasi berhasil ditambahkan.",
        confirmButtonColor: "#3085d6",
      });

      navigate("/dashboard/manage-publications");

      setJudul("");
      setJenis("");
      setAuthor("");
      setAbstract("");
      setVolume("");
      setIssue("");
      setArticle("");
      setTahun("");
      setErrors({});
    } catch (error) {
      console.error("Detailed error:", error);
      Swal.fire({
        icon: "error",
        judul: "Oops...",
        text:
          "Error adding publication: " +
          (error.message || error.error_description || "Unknown error"),
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="font-poppins text-lg block mb-2" htmlFor="judul">
          Judul:
        </label>
        <input
          className={`border-2 ${
            judul ? "border-blue-500" : "border-gray-500"
          } p-2 rounded-lg w-full`}
          type="text"
          id="judul"
          value={judul}
          onChange={(e) => setJudul(e.target.value)}
          required
        />
        {errors?.judul && (
          <p className="text-red-500 text-sm mt-1">{errors.judul}</p>
        )}
      </div>
      <div>
        <label className="font-poppins text-lg block mb-2" htmlFor="jenis">
          Jenis:
        </label>
        <select
          className="border-2 border-gray-500 p-2 rounded-lg w-full"
          type="text"
          id="jenis"
          value={jenis}
          onChange={(e) => setJenis(e.target.value)}
          required
        >
          <option value="">Pilih Jenis Publikasi</option>
          {jenisOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className="font-poppins text-lg block mb-2" htmlFor="author">
          Penulis:
        </label>
        <input
          className="border-2 border-gray-500 p-2 rounded-lg w-full"
          type="text"
          id="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
      </div>
      <div>
        <label className="font-poppins text-lg block mb-2" htmlFor="abstract">
          Abstrak:
        </label>
        <textarea
          className="border-2 border-gray-500 p-2 rounded-lg w-full min-h-[200px] resize-y"
          id="abstract"
          value={abstract}
          onChange={(e) => setAbstract(e.target.value)}
          required
        />
      </div>
      <div>
        <label className="font-poppins text-lg block mb-2" htmlFor="volume">
          Volume:
        </label>
        <input
          className="border-2 border-gray-500 p-2 rounded-lg w-full"
          type="text"
          id="volume"
          value={volume}
          onChange={(e) => setVolume(e.target.value)}
          required
        />
      </div>
      <div>
        <label className="font-poppins text-lg block mb-2" htmlFor="issue">
          Issue:
        </label>
        <input
          className="border-2 border-gray-500 p-2 rounded-lg w-full"
          type="text"
          id="issue"
          value={issue}
          onChange={(e) => setIssue(e.target.value)}
          required
        />
      </div>
      <div>
        <label className="font-poppins text-lg block mb-2" htmlFor="article">
          Url Artikel:
        </label>
        <input
          className="border-2 border-gray-500 p-2 rounded-lg w-full"
          type="text"
          id="article"
          value={url_artikel}
          onChange={(e) => setArticle(e.target.value)}
          required
        />
      </div>
      <div>
        <label className="font-poppins text-lg block mb-2" htmlFor="year">
          Tahun:
        </label>
        <input
          className="border-2 border-gray-500 p-2 rounded-lg w-full"
          type="text"
          id="tahun"
          value={tahun}
          onChange={(e) => setTahun(e.target.value)}
          required
        />
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
        {loading ? "Menambahkan..." : "Tambah Publikasi"}
      </button>
    </form>
  );
}
