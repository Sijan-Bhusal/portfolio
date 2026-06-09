import Image from "next/image";

const PLAYLIST_ID = "PLSxYYoqMry4zrsZ2qHv5jXiUe4Ipwg41c";

export function YouTubeMusic() {
    return (
        <div className="size-full flex flex-col p-0 overflow-hidden">
            <div className="flex items-center gap-2 px-4 pt-3 pb-1">
                <Image
                    src="/icons/youtube-music.svg"
                    alt="YouTube Music"
                    width={20}
                    height={20}
                    className="h-5 w-5"
                    priority
                />
                <span className="youtube-text font-medium text-sm">
                    Now Playing
                </span>
            </div>
            <div className="flex-1 w-full min-h-0">
                <iframe
                    src={`https://www.youtube.com/embed/videoseries?list=${PLAYLIST_ID}`}
                    className="w-full h-full border-0 no-drag"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    title="YouTube Music Playlist"
                />
            </div>
        </div>
    );
}
