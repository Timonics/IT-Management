import Logo from "@/components/logo";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen">
      <section
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 w-[320px] min-[430px]:w-[400px] sm:w-[430px] bg-[#fff]/70 rounded-3xl shadow-2xl`}
      >
        <Logo />
        <section className="mt-10">{children}</section>
      </section>
    </div>
  );
}
