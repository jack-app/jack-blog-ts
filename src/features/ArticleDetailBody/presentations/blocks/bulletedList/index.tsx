type Props = {
  children: React.ReactNode;
};

export const BulletedListPresentation: React.FC<Props> = ({ children }) => {
  return <ul className="list-inside list-disc">{children}</ul>;
};
