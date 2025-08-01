// 'use client';

// import { useState, ChangeEvent, FormEvent } from "react";

// // Defines the shape of our form data to match the backend
// interface FormData {
//   name: string;
//   email_id: string;
//   message: string;
// }

// const Contact = () => {
//   const [formData, setFormData] = useState<FormData>({ name: "", email_id: "", message: "" });
//   const [status, setStatus] = useState<string>("");
//   const [isLoading, setIsLoading] = useState<boolean>(false);

//   const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setStatus("Sending...");

//     try {
//       const response = await fetch("/api/sendMail", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         setStatus("✅ Message sent successfully!");
//         setFormData({ name: "", email_id: "", message: "" }); // Clear form
//       } else {
//         const data = await response.json();
//         // Display validation errors from Zod if they exist
//         const errorMessage = data.errors ? data.errors[0].message : "Failed to send message.";
//         setStatus(`❌ ${errorMessage}`);
//       }
//     } catch (error) {
//       console.error("Error sending message:", error);
//       setStatus("❌ An error occurred. Please try again.");
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-6">
//       <h1 className="mt-20 text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-neutral-50 to-neutral-400 text-center">
//         Contact
//       </h1>

//       <div className="w-full max-w-2xl mx-auto mt-8 p-8 sm:p-12 bg-white rounded-lg shadow-2xl">
//         <h2 className="text-3xl font-bold text-gray-800 mb-4">Get in Touch</h2>
//         <p className="text-gray-600 mb-6">
//           Feel free to reach out. I will get back to you as soon as possible!
//         </p>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label className="block text-gray-700 font-medium mb-1">Name</label>
//             <input
//               type="text"
//               name="name"
//               placeholder="Your Name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//               className="text-black w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           <div>
//             <label className="block text-gray-700 font-medium mb-1">Email</label>
//             <input
//               type="email"
//               name="email_id"
//               placeholder="Your Email"
//               value={formData.email_id}
//               onChange={handleChange}
//               required
//               className="text-black w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           <div>
//             <label className="block text-gray-700 font-medium mb-1">Message</label>
//             <textarea
//               name="message"
//               placeholder="Your Message"
//               value={formData.message}
//               onChange={handleChange}
//               required
//               className="text-black w-full border border-gray-300 p-3 rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>

//           <button
//             type="submit"
//             disabled={isLoading}
//             className="w-full bg-gray-500 text-white font-semibold py-3 rounded-lg hover:bg-gray-600 transition-all disabled:bg-gray-400 disabled:cursor-not-allowed"
//           >
//             {isLoading ? "Sending..." : "Send Message"}
//           </button>

//           {status && <p className="text-center text-gray-700 mt-4">{status}</p>}
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Contact;



"use client";

import { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  name: string;
  email_id: string;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({ name: "", email_id: "", message: "" });
  const [status, setStatus] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus("Sending...");

    try {
      const response = await fetch("/api/sendMail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("✅ Message sent successfully!");
        setFormData({ name: "", email_id: "", message: "" }); // Clear form
      } else {
        const data = await response.json();
        const errorMessage = data.errors ? data.errors[0].message : "Failed to send message.";
        setStatus(`❌ ${errorMessage}`);
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus("❌ An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div id="contact" className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-6">
      <h1 className="mt-20 text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-neutral-50 to-neutral-400 text-center">
        Contact
      </h1>

      <div className="w-full max-w-2xl mx-auto mt-8 p-8 sm:p-12 bg-white rounded-lg shadow-2xl">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Get in Touch</h2>
        <p className="text-gray-600 mb-6">
          Feel free to reach out. I will get back to you as soon as possible!
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="text-black w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Email</label>
            <input
              type="email"
              name="email_id"
              placeholder="Your Email"
              value={formData.email_id}
              onChange={handleChange}
              required
              className="text-black w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Message</label>
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              className="text-black w-full border border-gray-300 p-3 rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gray-500 text-white font-semibold py-3 rounded-lg hover:bg-gray-600 transition-all disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {isLoading ? "Sending..." : "Send Message"}
          </button>

          {status && <p className="text-center text-gray-700 mt-4">{status}</p>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
