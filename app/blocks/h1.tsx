export default function H1({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <h1 className={`block text-4xl my-3 font-bold font-serif ${className}`}>
      {children}
    </h1>
  );
}
