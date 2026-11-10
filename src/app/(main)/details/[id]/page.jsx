import MediaDetails from "@/components/media/MediaDetails";

export default async function DetailsPage({ params }) {
  const { id } = await params;

  return (
    <main className="min-h-screen bg-[#141414] px-4 py-8 text-white sm:px-6">
      <div className="mx-auto w-full max-w-6xl">
        <MediaDetails id={id} />
      </div>
    </main>
  );
}