import Wall from "../ui/components/wall";

export default function HomePage() {
  return (
    <main className="absolute left-0 top-0 flex h-screen w-screen bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-600 via-gray-900 to-gray-950 text-white">
      <h1 className="sr-only">Wall-3</h1>
      <div className="relative h-screen w-screen">
        <Wall />
      </div>
    </main>
  );
}
