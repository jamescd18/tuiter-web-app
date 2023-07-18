export default function P({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return <p className={`font-serif text-base my-3 ${className}`}>{children}</p>;
}
