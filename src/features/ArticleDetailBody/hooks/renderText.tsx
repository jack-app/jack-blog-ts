import { RichText } from "@/types/block";
import styles from "./text.module.css";

export const Text = ({ text }: { text: RichText[] }) => {
  return text.map((value: RichText) => {
    const {
      annotations: { bold, code, color, italic, strikethrough, underline },
      text,
    } = value;

    if (!text) return null;

    return (
      <span
        className={[
          bold ? styles.bold : "",
          code ? styles.code : "",
          italic ? styles.italic : "",
          strikethrough ? styles.strikethrough : "",
          underline ? styles.underline : "",
        ].join(" ")}
        style={color !== "default" ? { color } : {}}
        key={text.content}
      >
        {text.link ? (
          <a href={text.link.url} className="text-link hover:underline">
            {text.content}
          </a>
        ) : (
          text.content
        )}
      </span>
    );
  });
};
