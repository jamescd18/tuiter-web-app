export default function P({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return <p className={`font-serif text-base ${className}`}>{children}</p>;
}
