import { useState, useEffect, useRef } from "react";
import { supabase } from "../../../services/supabaseClient";
import Swal from "sweetalert2";
import { Datepicker } from "flowbite";
import ReactQuill from "react-quill";

export default function AddNews() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [publishDate, setPublishDate] = useState("");
  const [loading, setLoading] = useState(false);
  const [imageBlob, setImageBlob] = useState(null);
  const [errors, setErrors] = useState({});

  const generateSlug = (title) => {
    const slug = title
      .toLowerCase()
      .replace(/[^\w ]+/g, "")
      .replace(/ +/g, "-");
    console.log("Generated slug:", slug);
    return slug;
  };

  const quillRef = useRef(null);

  // Text Editor
  const modules = {
    toolbar: {
      container: [
        [{ header: [1, 2, 3, false] }],
        ["bold", "italic", "underline", "strike"],
        [{ align: [] }],
        [{ list: "ordered" }, { list: "bullet" }],
        ["link"],
        ["clean"],
      ],
    },
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "align",
    "list",
    "bullet",
    "link",
  ];
  // END of TextEditor

  //Image
  useEffect(() => {
    return () => {
      if (imageBlob) {
        URL.revokeObjectURL(imageBlob);
      }
    };
  }, [imageBlob]);
  
  // datepicker
  useEffect(() => {
    const datepickerEl = document.getElementById("datepicker-autohide");
    if (datepickerEl) {
      const datepicker = new Datepicker(datepickerEl, {
        format: "dd-mm-yyyy",
        autohide: true,
        todayHighlight: true,
      });

      datepickerEl.addEventListener("changeDate", (e) => {
        const selectedDate = e.detail.date;
        const formattedDate = formatDate(selectedDate); // Format date sesuai dd-mm-yyyy
        setPublishDate(formattedDate);
        setErrors({
          ...errors,
          publishDate: validatePublishDate(formattedDate),
        });
      });

      return () => {
        datepicker.destroy();
      };
    }
  }, []);

  // Format date to DD-MM-YYYY
  const formatDate = (date) => {
    if (!date) return "";
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };

  // Validate publish date
  const validatePublishDate = (value) => {
    if (!value) return "Tanggal publikasi harus diisi";
    try {
      const date = convertToISODate(value);
      if (!date) return "Format tanggal tidak valid";
      return "";
    } catch (error) {
      return "Format tanggal tidak valid";
    }
  };

  // Convert DD-MM-YYYY to ISO format for database
  const convertToISODate = (dateStr) => {
    if (!dateStr) return null;
    const [day, month, year] = dateStr.split("-");
    const date = new Date(`${year}-${month}-${day}T00:00:00Z`);
    return date.toISOString();
  };

  const validateTitle = (value) => {
    if (!value.trim()) return "Judul harus diisi";
    if (value.length < 5) return "Judul minimal 5 karakter";
    if (value.length > 100) return "Judul maksimal 100 karakter";
    return "";
  };

  const validateContent = (value) => {
    const textContent = value.replace(/<[^>]*>/g, "").trim();

    if (!textContent) return "Konten harus diisi";
    if (textContent.length < 10) return "Konten minimal 10 karakter";
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
    setErrors({ ...errors, image: "Gambar harus diunggah" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const titleError = validateTitle(title);
    const contentError = validateContent(content);
    const imageError = !image ? "Gambar harus diunggah" : "";
    const publishDateError = validatePublishDate(publishDate);

    setErrors({
      title: titleError,
      content: contentError,
      image: imageError,
      publishDate: publishDateError,
    });

    if (titleError || contentError || imageError || publishDateError) {
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
          .from("news-images")
          .upload(fileName, image);

        if (error) {
          console.error("Error uploading image:", error);
          throw error;
        }

        console.log("Image uploaded successfully", data);

        const { data: urlData, error: urlError } = supabase.storage
          .from("news-images")
          .getPublicUrl(data.path);

        if (urlError) {
          console.error("Error getting public URL:", urlError);
          throw urlError;
        }

        imageUrl = urlData.publicUrl;
        console.log("Image URL obtained:", imageUrl);
      }

      const slug = generateSlug(title);

      const isoPublishDate = convertToISODate(publishDate);
      if (!isoPublishDate) {
        throw new Error("Tanggal publikasi tidak valid");
      }

      console.log("Inserting news data");
      const { data, error } = await supabase.from("news").insert([
        {
          title,
          slug,
          image_url: imageUrl,
          content,
          author: "Admin IDSS",
          published_at: isoPublishDate, 
        },
      ]);

      if (error) {
        console.error("Error inserting news:", error);
        throw error;
      }

      console.log("News inserted successfully", data);

      await Swal.fire({
        icon: "success",
        title: "Berhasil!",
        text: "Berita berhasil ditambahkan.",
        confirmButtonColor: "#3085d6",
      });
 
      setTitle("");
      setContent("");
      setImage(null);
      setPublishDate("");
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

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="font-poppins text-lg block mb-2" htmlFor="title">
          Judul:
        </label>
        <input
          className={`border-2 ${
            errors.title ? "border-red-500" : "border-gray-500"
          } p-2 rounded-lg w-full`}
          type="text"
          id="title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
            setErrors({ ...errors, title: validateTitle(e.target.value) });
          }}
          required
        />
        {errors.title && (
          <p className="text-red-500 text-sm mt-1">{errors.title}</p>
        )}
      </div>

      {/* Date picker */}
      <div>
        <label
          className="font-poppins text-lg block mb-2"
          htmlFor="datepicker-autohide"
        >
          Tanggal Publikasi:
        </label>
        <div className="relative max-w-sm">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
            </svg>
          </div>
          <input
            id="datepicker-autohide"
            type="text"
            className={`bg-gray-50 border ${
              errors.publishDate ? "border-red-500" : "border-gray-300"
            } text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5`}
            placeholder="Pilih tanggal"
            value={publishDate}
            readOnly
            required
          />
        </div>
        {errors.publishDate && (
          <p className="text-red-500 text-sm mt-1">{errors.publishDate}</p>
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
          required
        />
        {errors.image && (
          <p className="text-red-500 text-sm mt-1">{errors.image}</p>
        )}
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
        <label className="font-poppins text-lg block mb-2" htmlFor="content">
          Konten:
        </label>
        <ReactQuill
          theme="snow"
          value={content}
          onChange={setContent}
          modules={modules}
          formats={formats}
          className="h-96 mb-12" // Tambahkan margin bottom untuk toolbar
          placeholder="Tulis konten berita di sini..."
        />
        {errors.content && (
          <p className="text-red-500 text-sm mt-1">{errors.content}</p>
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
        {loading ? "Menambahkan..." : "Tambah Berita"}
      </button>
    </form>
  );
}
