type Props = {
  href: string;
};

export const BookmarkPresentation: React.FC<Props> = ({ href }) => {
  return (
    <a href={href} target="_brank" className="text-link hover:underline">
      {href}
    </a>
  );
};
