import React from "react";
import "./mediaLink.css";
import { ReactComponent as BiYoutube } from "assets/bi-youtube.svg";
import { ReactComponent as BiDropbox } from "assets/bi-dropbox.svg";

type LinkLabel = "notes" | "tabs" | "video";

interface MediaLinkProps {
  linkLabel: LinkLabel;
  link: string;
}

export function MediaLink({ link, linkLabel }: MediaLinkProps) {
  const icon = linkLabel === "video" ? <BiYoutube /> : <BiDropbox />;

  return (
    <div className="linkContainer">
      <a className="mediaLink" href={link} target="_blank" rel="noreferrer">
        {icon}
        {linkLabel}
      </a>
    </div>
  );
}
