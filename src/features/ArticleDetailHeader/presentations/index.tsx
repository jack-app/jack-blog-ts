import { Tag, Props as TagProps } from "@/ui/Tag";
import { Writer } from "@/ui/Writer";
import { formatDateForAdventCalender } from "../logics";

export type Tag = TagProps & {
  id: string;
};

export type Props = {
  title: string;
  writerName: string;
  writerImage: string;
  tags: Tag[];
  publishDate?: string;
};

export const ArticleDetailHeaderPresentation: React.FC<Props> = ({
  title,
  writerName,
  writerImage,
  tags,
  publishDate,
}) => {
  return (
    <div className="flex flex-col items-start gap-60 px-40">
      {publishDate && (
        <span className="text-detail1 text-subText">
          {formatDateForAdventCalender(publishDate)}
        </span>
      )}
      <div className="flex flex-col items-center gap-40 ">
        <h1 className="font-[24px]">{title}</h1>
        <Writer name={writerName} image={writerImage} />
      </div>
      <ul className="flex flex-wrap gap-30">
        {tags.map((tag) => (
          <li key={tag.id}>
            <Tag name={tag.name} color={"default"} isLink />
          </li>
        ))}
      </ul>
    </div>
  );
};
