import MediaCollection from "@/components/media/MediaCollection";

export const metadata = {
  title: "Watchlist",
};

export default function WatchlistPage() {
  return <MediaCollection status="watchlist" />;
}