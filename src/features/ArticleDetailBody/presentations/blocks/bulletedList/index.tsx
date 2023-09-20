type Props = {
  children: React.ReactNode;
};

export const BulletedListPresentation: React.FC<Props> = ({ children }) => {
  return <ul className="list-outside list-disc pl-40">{children}</ul>;
};
