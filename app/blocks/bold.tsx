export default function Bold({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <p className={`font-bold mt-10 font-serif text-base ${className}`}>
      {children}
    </p>
  );
}
