import { Writer } from "@/ui/Writer";

export type Props = {
  title: string;
  writerName: string;
  writerImage: string;
};

export const ArticleDetailHeaderPresentation: React.FC<Props> = ({
  title,
  writerName,
  writerImage,
}) => {
  return (
    <div className="flex flex-col items-center gap-40">
      <h1>{title}</h1>
      <Writer name={writerName} image={writerImage} />
    </div>
  );
};
