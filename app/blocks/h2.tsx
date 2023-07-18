export default function H2({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <h2 className={`block text-2xl my-4 font-bold font-serif ${className}`}>
      {children}
    </h2>
  );
}
