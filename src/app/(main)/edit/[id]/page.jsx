import EditMediaForm from "@/components/media/EditMediaForm";

export default async function EditPage({ params }) {
  const { id } = await params;

  return (
    <main className="min-h-screen bg-[#141414] px-4 py-8 text-white sm:px-6">
      <div className="mx-auto w-full max-w-4xl">
        <EditMediaForm id={id} />
      </div>
    </main>
  );
}