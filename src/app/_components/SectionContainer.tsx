interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function SectionContainer({ className, children }: Props) {
  return (
    <section
      className={`desktop:px-0 netbook:px-80 tablet:px-32 px-24 ${className}`}
    >
      {children}
    </section>
  );
}
