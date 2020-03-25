export default function Bandcamp() {
  return (
    <div className="columns is-multiline">
      <div className="column">
        <iframe
          style={{ border: 0, width: 400 + "px", height: 406 + "px" }}
          src="https://bandcamp.com/EmbeddedPlayer/album=249347485/size=large/bgcol=ffffff/linkcol=0687f5/artwork=small/transparent=true/"
          seamless
        >
          <a href="http://nataliefideler.bandcamp.com/album/live-on-prairie-musicians">
            Live on Prairie Musicians by Natalie Fideler
          </a>
        </iframe>
      </div>
      <div className="column">
        <iframe
          style={{ border: 0, width: 400 + "px", height: 373 + "px" }}
          src="https://bandcamp.com/EmbeddedPlayer/album=2360070269/size=large/bgcol=ffffff/linkcol=0687f5/artwork=small/transparent=true/"
          seamless
        >
          <a href="http://nataliefideler.bandcamp.com/album/steak-eggs">
            Steak &amp; Eggs by Natalie Fideler
          </a>
        </iframe>
      </div>
      <div className="column is-full">
        <iframe
          style={{ border: 0, width: 100 + "%", height: 120 + "px" }}
          src="https://bandcamp.com/EmbeddedPlayer/track=2530374385/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/"
          seamless
        >
          <a href="http://nataliefideler.bandcamp.com/track/inside-of-you">
            Inside Of You by Natalie Fideler
          </a>
        </iframe>
      </div>

      <div className="column is-full">
        <iframe
          style={{ border: 0, width: 100 + "%", height: 120 + "px" }}
          src="https://bandcamp.com/EmbeddedPlayer/track=2279275462/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/"
          seamless
        >
          <a href="http://nataliefideler.bandcamp.com/track/power-move">
            Power Move by Natalie Fideler
          </a>
        </iframe>
      </div>
      <div className="column is-full">
        <iframe
          style={{ border: 0, width: 100 + "%", height: 120 + "px" }}
          src="https://bandcamp.com/EmbeddedPlayer/track=1101934870/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/"
          seamless
        >
          <a href="http://nataliefideler.bandcamp.com/track/safety-blanket-2">
            Safety Blanket by Natalie Fideler
          </a>
        </iframe>
      </div>

      <div className="column is-full">
        <iframe
          style={{ border: 0, width: 100 + "%", height: 120 + "px" }}
          src="https://bandcamp.com/EmbeddedPlayer/track=2686500662/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/"
          seamless
        >
          <a href="http://nataliefideler.bandcamp.com/track/joy-is-revolutionary">
            Joy is Revolutionary by Natalie Fideler
          </a>
        </iframe>
      </div>
    </div>
  );
}
