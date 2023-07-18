export default function Bold({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <p className={`font-bold mt-10 font-serif text-base ${className}`}>
      {children}
    </p>
  );
}
