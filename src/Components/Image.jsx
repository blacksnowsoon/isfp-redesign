import React from "react";
import { imgEncoded } from "../Utiles/UtilesMethods";

export const Image = ({ url, containerClassName, className, alt, title }) => {
  const path = "/assets/imgs/" + url;
  const src = imgEncoded(path);
  return containerClassName ? (
    <div className={containerClassName}>
      <img
        loading="lazy"
        className={className}
        src={src}
        alt={alt}
        title={title || ""}
      />
    </div>
  ) : (
    <img
      loading="lazy"
      className={className}
      src={src}
      alt={alt}
      title={title || ""}
    />
  );
};
