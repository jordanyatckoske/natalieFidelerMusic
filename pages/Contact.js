import MainLayout from "../components/Layouts/MainLayout";
import { useState } from "react";
import Axios from "axios";
import MainSection from "../components/Layouts/MainSection";
import TitleSection from "../components/Layouts/TitleSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ScrollAnimation from "react-animate-on-scroll";

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
      <TitleSection image="images/uploads/Natalie59.jpg">
        <h2 className="animated fadeInUp title is-1">Contact</h2>
        <p className="animated fadeInDown subtitle is-3">
          Reach out to me with questions and gig opportunities.
        </p>
      </TitleSection>
      <MainSection>
        <div className="columns is-multiline">
          <div className="column columns is-centered is-multiline is-mobile is-full social-btns">
            <div className="column animated flipInX delay-1s slow is-one-third-mobile is-one-quarter-tablet is-2-desktop">
              <a
                className="btn facebook"
                href="https://www.facebook.com/nataliefidelermusic/"
                target="_blank"
              >
                <FontAwesomeIcon icon={["fab", "facebook-f"]} />
              </a>
            </div>
            <div className="column animated flipInX delay-1s slower is-one-third-mobile is-one-quarter-tablet is-2-desktop">
              <a
                className="btn instagram"
                href="https://www.instagram.com/nataliefidelermusic/"
                target="_blank"
              >
                <FontAwesomeIcon icon={["fab", "instagram"]} />
              </a>
            </div>

            <div className="column animated flipInX delay-2s is-one-third-mobile is-one-quarter-tablet is-2-desktop">
              <a
                className="btn twitter"
                href="https://twitter.com/nataliefideler?lang=en"
                target="_blank"
              >
                <FontAwesomeIcon icon={["fab", "twitter"]} />
              </a>
            </div>

            <div className="column animated flipInX delay-2s is-one-third-mobile is-one-quarter-tablet is-2-desktop">
              <a
                className="btn bandcamp"
                href="https://nataliefideler.bandcamp.com/"
                target="_blank"
              >
                <FontAwesomeIcon icon={["fab", "bandcamp"]} />
              </a>
            </div>

            <div className="column animated flipInX delay-1s slower is-one-third-mobile is-one-quarter-tablet is-2-desktop">
              <a
                className="btn spotify"
                href="https://open.spotify.com/artist/67VCjum1SGMmN4FLIpq1JF"
                target="_blank"
              >
                <FontAwesomeIcon icon={["fab", "spotify"]} />
              </a>
            </div>

            <div className="column animated flipInX delay-1s slow is-one-third-mobile is-one-quarter-tablet is-2-desktop">
              <a
                className="btn apple"
                href="https://geo.music.apple.com/us/artist/natalie-fideler/1435725805?mt=1&app=music"
                target="_blank"
              >
                <FontAwesomeIcon icon={["fab", "apple"]} />
              </a>
            </div>
          </div>

          <div className="column is-full">
            <form
              name="contact"
              onSubmit={handleSubmit}
              data-netlify="true"
              className="hero-body"
            >
              <div className="field">
                <div className="control">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="animated fadeInDown input is-rounded is-link has-text-info"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="animated fadeInDown input is-rounded is-link has-text-info"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="field">
                <div className="control">
                  <textarea
                    name="message"
                    placeholder="What's Up?"
                    value={message}
                    className="animated fadeInDown textarea is-rounded is-link has-text-info"
                    onChange={e => setMessage(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="columns">
                <div className="column has-text-centered animated fadeInDown">
                  <button
                    className="animated pulse delay-2s slower infinite button is-rounded is-link has-text-white is-medium"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </MainSection>
    </MainLayout>
  );
}
