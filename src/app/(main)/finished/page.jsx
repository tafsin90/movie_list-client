import MediaCollection from "@/components/media/MediaCollection";

export const metadata = {
  title: "Finished",
};

export default function FinishedPage() {
  return <MediaCollection status="finished" />;
}