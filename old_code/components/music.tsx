import React from "react";

export class MusicBox extends React.Component {
  render() {
    return (
      <div className="fixedFooter">
        <iframe style={{borderRadius: '12px'}} src="https://open.spotify.com/embed/track/7kfzX7ufDOV18X8l00ko4u?utm_source=generator" width="100%" height="152" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
    )
  }
}
