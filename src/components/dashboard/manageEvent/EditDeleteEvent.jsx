import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { supabase } from "../../../services/supabaseClient";
import Swal from "sweetalert2";

export default function EditEventsForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchEvents();
  }, [id]);

  async function fetchEvents() {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from("events")
        .select("*")
        .eq("id", id)
        .single();

      if (error) throw error;

      setTitle(data.title);
      setContent(data.content);
      setImageUrl(data.image_url);
    } catch (error) {
      Swal.fire("Error", "Failed to fetch news: " + error.message, "error");
    } finally {
      setLoading(false);
    }
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      let eventImageUrl = imageUrl;

      if (image) {
        const fileExt = image.name.split(".").pop();
        const fileName = `${Math.random()}.${fileExt}`;
        const { data, error } = await supabase.storage
          .from("events-images")
          .upload(fileName, image);

        if (error) throw error;

        const { data: urlData } = supabase.storage
          .from("events-images")
          .getPublicUrl(data.path);

        eventImageUrl = urlData.publicUrl;
      }

      const { data, error } = await supabase
        .from("events")
        .update({
          title,
          image_url: eventImageUrl,
          content,
        })
        .eq("id", id);

      if (error) throw error;

      Swal.fire("Success", "News updated successfully", "success");
      navigate("/dashboard/manage-events");
    } catch (error) {
      Swal.fire("Error", "Failed to update news: " + error.message, "error");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div>
        <span className="loading loading-dots loading-md"></span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="font-poppins text-lg block mb-2" htmlFor="title">
          Judul Event:
        </label>
        <input
          className="border-2 border-gray-500 p-2 rounded-lg w-full"
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label className="font-poppins text-lg block mb-2" htmlFor="image">
          Gambar Event:
        </label>
        <input
          type="file"
          id="image"
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
            alt="Current News Image"
            className="mt-2 max-w-xs h-auto"
          />
        )}
      </div>
      <div>
        <label className="font-poppins text-lg block mb-2" htmlFor="content">
          Deskripsi Event:
        </label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          className="border-2 border-gray-500 p-2 rounded-lg w-full h-40"
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className={`mt-4 px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline ${
          loading ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        {loading ? "Updating..." : "Update Events"}
      </button>
    </form>
  );
}
