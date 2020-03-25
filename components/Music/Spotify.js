export default function Spotify() {
  return (
    <div className="columns is-multiline">
      <div className="column is-full">
        <iframe
          src="https://open.spotify.com/embed/album/1846BhEa25zm2kqzkfD3cd"
          width="60%"
          height="80"
          frameborder="0"
          allowtransparency="true"
          allow="encrypted-media"
        ></iframe>
      </div>
      <div className="column is-full">
        <iframe
          src="https://open.spotify.com/embed/album/0KQrytUQlgFHBrzCBYmLxh"
          width="60%"
          height="80"
          frameborder="0"
          allowtransparency="true"
          allow="encrypted-media"
        ></iframe>
      </div>
      <div className="column is-full">
        <iframe
          src="https://open.spotify.com/embed/album/6MWwTT61mDNm0pKjt7euVj"
          width="300"
          height="380"
          frameborder="0"
          allowtransparency="true"
          allow="encrypted-media"
        ></iframe>
      </div>
    </div>
  );
}
