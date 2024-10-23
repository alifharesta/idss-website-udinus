import { useState, useEffect } from "react";
import { supabase } from "../../../services/supabaseClient";
import Swal from "sweetalert2";

export default function AddNews() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [imageBlob, setImageBlob] = useState(null);
  const [errors, setErrors] = useState({});

  const generateSlug = (title) => {
    const slug = title
      .toLowerCase()
      .replace(/[^\w ]+/g, '')
      .replace(/ +/g, '-');
    console.log("Generated slug:", slug);
    return slug;
  };

  useEffect(() => {
    return () => {
      if (imageBlob) {
        URL.revokeObjectURL(imageBlob);
      }
    };
  }, [imageBlob]);

  const validateTitle = (value) => {
    if (!value.trim()) return "Judul harus diisi";
    if (value.length < 5) return "Judul minimal 5 karakter";
    if (value.length > 100) return "Judul maksimal 100 karakter";
    return "";
  };

  const validateContent = (value) => {
    if (!value.trim()) return "Konten harus diisi";
    if (value.length < 50) return "Konten minimal 50 karakter";
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

    setErrors({
      title: titleError,
      content: contentError,
      image: imageError,
    });

    if (titleError || contentError || imageError) {
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

      console.log("Inserting news data");
      const { data, error } = await supabase.from("news").insert([
        {
          title,
          slug,
          image_url: imageUrl,
          content,
          author: "Admin IDSS",
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
        <textarea
          id="content"
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
            setErrors({ ...errors, content: validateContent(e.target.value) });
          }}
          required
          className={`border-2 ${
            errors.content ? "border-red-500" : "border-gray-500"
          } p-2 rounded-lg w-full h-40`}
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
