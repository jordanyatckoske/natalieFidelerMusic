import MainLayout from "../components/Layouts/MainLayout";
import { useState } from "react";
import Axios from "axios";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };

  const handleSubmit = e => {
    e.preventDefault();
    Axios.post(
      "/",
      encode({
        "form-name": "contact",
        name: name,
        email: email,
        message: message,
      }),
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      },
    )
      .then(response => console.log("Success!", response))
      .catch(error => console.log(error));
  };

  return (
    <MainLayout>
      <h2>Contact</h2>
      <p>Reach out to me with questions and gig opportunities.</p>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <textarea
          name="message"
          placeholder="Message"
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
        <input type="submit" />
      </form>
    </MainLayout>
  );
}
