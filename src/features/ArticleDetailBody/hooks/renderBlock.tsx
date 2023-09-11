import Link from "next/link";
import { Fragment } from "react";
import styles from "./post.module.css";
import createImage from "@/utils/createImage";
import { BookmarkPresentation } from "../presentations/blocks/bookmark";
import { BulletedListPresentation } from "../presentations/blocks/bulletedList";
import { NumberedListPresentation } from "../presentations/blocks/numberedList";

export const Text = ({ text }: { text: any }) => {
  if (!text) {
    return null;
  }
  return text.map((value: any) => {
    const {
      annotations: { bold, code, color, italic, strikethrough, underline },
      text,
    } = value;
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

const renderNestedList = (block: any, pageId: string) => {
  const { type } = block;
  const value = block[type];
  if (!value) return null;

  const isNumberedList = value.children[0].type === "numbered_list_item";

  if (isNumberedList) {
    return <ol>{value.children.map((block: any) => renderBlock(block, pageId))}</ol>;
  }
  return <ul>{value.children.map((block: any) => renderBlock(block, pageId))}</ul>;
};

export const renderBlock = async (block: any, pageId: string) => {
  // notionのブロックの種類によって、表示を変える
  // ref:https://developers.notion.com/reference/block#block-types-that-support-child-blocks
  const { type, id } = block;
  const value = block[type];

  switch (type) {
    case "paragraph":
      return (
        <p>
          <Text text={value.rich_text} />
        </p>
      );
    case "heading_1":
      return (
        <h1>
          <Text text={value.rich_text} />
        </h1>
      );
    case "heading_2":
      return (
        <h2>
          <Text text={value.rich_text} />
        </h2>
      );
    case "heading_3":
      return (
        <h3>
          <Text text={value.rich_text} />
        </h3>
      );
    case "bulleted_list": {
      return (
        <BulletedListPresentation>
          {value.children.map((child: any) => renderBlock(child, pageId))}
        </BulletedListPresentation>
      );
    }
    case "numbered_list": {
      return (
        <NumberedListPresentation>
          {value.children.map((child: any) => renderBlock(child, pageId))}
        </NumberedListPresentation>
      );
    }
    case "bulleted_list_item":
    case "numbered_list_item":
      return (
        <li key={block.id}>
          <Text text={value.rich_text} />
          {!!value.children && renderNestedList(block, pageId)}
        </li>
      );
    case "to_do":
      return (
        <div>
          <label htmlFor={id}>
            <input type="checkbox" id={id} defaultChecked={value.checked} />{" "}
            <Text text={value.rich_text} />
          </label>
        </div>
      );
    case "toggle":
      return (
        <details>
          <summary>
            <Text text={value.rich_text} />
          </summary>
          {block.children?.map((child: any) => (
            <Fragment key={child.id}>{renderBlock(child, pageId)}</Fragment>
          ))}
        </details>
      );
    case "child_page":
      return (
        <div className={styles.childPage}>
          <strong>{value.title}</strong>
          {block.children.map((child: any) => renderBlock(child, pageId))}
        </div>
      );
    case "image":
      let src;
      if (block.image.type === "file") {
        src = await createImage(pageId, block.id, block.image.file.url);
      }
      if (block.image.type === "external") {
        src = block.image.external.url;
      }
      src = value.type === "external" ? value.external.url : value.file.url;

      const caption = value.caption ? value.caption[0]?.plain_text : "";
      return (
        <figure>
          <img src={src} alt={caption} />
          {caption && <figcaption>{caption}</figcaption>}
        </figure>
      );
    case "divider":
      return <hr key={id} />;
    case "quote":
      return <blockquote key={id}>{value.rich_text[0].plain_text}</blockquote>;
    case "code":
      return (
        <pre className={styles.pre}>
          <code className={styles.code_block} key={id}>
            {value.rich_text[0].plain_text}
          </code>
        </pre>
      );
    case "file":
      const src_file = value.type === "external" ? value.external.url : value.file.url;
      const splitSourceArray = src_file.split("/");
      const lastElementInArray = splitSourceArray[splitSourceArray.length - 1];
      const caption_file = value.caption ? value.caption[0]?.plain_text : "";
      return (
        <figure>
          <div className={styles.file}>
            📎{" "}
            <Link href={src_file} passHref>
              {lastElementInArray.split("?")[0]}
            </Link>
          </div>
          {caption_file && <figcaption>{caption_file}</figcaption>}
        </figure>
      );
    case "bookmark":
      return <BookmarkPresentation href={value.url} />;
    case "table": {
      return (
        <table className={styles.table}>
          <tbody>
            {block.children?.map((child: any, i: number) => {
              const RowElement = value.has_column_header && i == 0 ? "th" : "td";
              return (
                <tr key={child.id}>
                  {child.table_row?.cells?.map((cell: any, i: number) => {
                    return (
                      <RowElement key={`${cell.plain_text}-${i}`}>
                        <Text text={cell} />
                      </RowElement>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      );
    }
    case "column_list": {
      return (
        <div className={styles.row}>
          {block.children.map((block: any) => renderBlock(block, pageId))}
        </div>
      );
    }
    case "column": {
      return <div>{block.children.map((child: any) => renderBlock(child, pageId))}</div>;
    }
    default:
      return `❌ Unsupported block (${
        type === "unsupported" ? "unsupported by Notion API" : type
      })`;
  }
};
