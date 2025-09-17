import Logo from "@/components/logo";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen">
      <section
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 min-w-[320px] min-[430px]:min-w-[400px] sm:min-w-[430px] bg-white rounded-xl shadow-2xl flex flex-col items-center justify-center`}
      >
        <Logo />
        <section className="mt-10 w-full">{children}</section>
      </section>
    </div>
  );
}
