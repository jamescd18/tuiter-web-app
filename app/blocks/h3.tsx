export default function H3({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <h2 className={`block text-xl my-5 font-bold font-serif ${className}`}>
      {children}
    </h2>
  );
}
