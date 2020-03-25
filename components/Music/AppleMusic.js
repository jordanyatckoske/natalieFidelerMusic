export default function AppleMusic() {
  return (
    <div className="columns -is-multiline">
      <div className="column ">
        <iframe
          allow="autoplay *; encrypted-media *;"
          frameborder="0"
          height="450"
          style={{
            width: 100 + "%",
            maxWidth: 660 + "px",
            background: "transparent",
          }}
          //   sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
          src="https://embed.music.apple.com/us/album/power-move-single/1485449227"
        ></iframe>
      </div>
      <div className="column">
        <iframe
          allow="autoplay *; encrypted-media *;"
          frameborder="0"
          height="450"
          style={{
            width: 100 + "%",
            maxWidth: 660 + "px",
            background: "transparent",
          }}
          //   sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
          src="https://embed.music.apple.com/us/album/steak-eggs/1438264784?app=music"
        ></iframe>
      </div>
      <div className="column">
        <iframe
          allow="autoplay *; encrypted-media *;"
          frameborder="0"
          height="450"
          style={{
            width: 100 + "%",
            maxWidth: 660 + "px",
            background: "transparent",
          }}
          //   sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
          src="https://embed.music.apple.com/us/album/safety-blanket-single/1435725942?app=music"
        ></iframe>
      </div>
    </div>
  );
}
