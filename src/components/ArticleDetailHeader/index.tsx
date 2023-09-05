import { Writer } from "@/components/Writer";

export type Props = {
  title: string;
  writerName: string;
  writerImage: string;
};

export const ArticleDetailHeader: React.FC<Props> = ({ title, writerName, writerImage }) => {
  return (
    <div className="flex flex-col items-center gap-40">
      <h1>{title}</h1>
      <Writer name={writerName} image={writerImage} />
    </div>
  );
};
