import MainLayout from "../components/Layouts/MainLayout";
import MainSection from "../components/Layouts/MainSection";
import TitleSection from "../components/Layouts/TitleSection";
import { useState } from "react";
import Bandcamp from "../components/Music/Bandcamp";
import Spotify from "../components/Music/Spotify";
import AppleMusic from "../components/Music/AppleMusic";

export default function Music() {
  const [activeTab, setActiveTab] = useState("Spotify");

  return (
    <MainLayout>
      <TitleSection>
        <h2 className="title is-1">Music</h2>
        <p className="subtitle is-3">
          Catch up on my latest and most popular releases!
        </p>
      </TitleSection>
      <MainSection>
        <div className="tabs is-toggle is-fullwidth">
          <ul>
            <li
              className={activeTab === "Spotify" ? "is-active" : ""}
              onClick={() => setActiveTab("Spotify")}
            >
              <a>
                {/* <span className="icon is-small">
                  <i className="fas fa-image" aria-hidden="true"></i>
                </span> */}
                <span>Spotify</span>
              </a>
            </li>
            <li
              className={activeTab === "AppleMusic" ? "is-active" : ""}
              onClick={() => setActiveTab("AppleMusic")}
            >
              <a>
                {/* <span className="icon is-small">
                  <i className="fas fa-music" aria-hidden="true"></i>
                </span> */}
                <span>Apple Music</span>
              </a>
            </li>
            <li
              className={activeTab === "Bandcamp" ? "is-active" : ""}
              onClick={() => setActiveTab("Bandcamp")}
            >
              <a>
                {/* <span className="icon is-small">
                  <i className="fas fa-film" aria-hidden="true"></i>
                </span> */}
                <span>Bandcamp</span>
              </a>
            </li>
            {/* <li>
              <a>
                <span className="icon is-small">
                  <i className="far fa-file-alt" aria-hidden="true"></i>
                </span>
                <span>Documents</span>
              </a>
            </li> */}
          </ul>
        </div>
        <div className="content">
          {activeTab === "Spotify" ? <Spotify /> : null}
          {activeTab === "AppleMusic" ? <AppleMusic /> : null}
          {activeTab === "Bandcamp" ? <Bandcamp /> : null}
        </div>
      </MainSection>
    </MainLayout>
  );
}
