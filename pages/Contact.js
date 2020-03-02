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

    e.preventDefault();
  };

  return (
    <MainLayout>
      <div className="has-text-centered">
        <h2 className="title is-1">Contact</h2>
        <p className="subtitle is-3">
          Reach out to me with questions and gig opportunities.
        </p>
      </div>
      <form name="contact" onSubmit={handleSubmit} data-netlify="true">
        <div className="field">
          <div className="control">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="input is-rounded"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </div>
        </div>
        <div className="field">
          <div className="control">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input is-rounded"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div className="field">
          <div className="control">
            <textarea
              name="message"
              placeholder="Message"
              value={message}
              className="textarea is-rounded"
              onChange={e => setMessage(e.target.value)}
            />
          </div>
        </div>

        <button className="button is-link" type="submit">
          Submit
        </button>
      </form>
    </MainLayout>
  );
}
