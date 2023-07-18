export default function P({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return <p className={`font-serif text-base ${className}`}>{children}</p>;
}
