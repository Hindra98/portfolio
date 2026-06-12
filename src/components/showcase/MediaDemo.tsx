import { useEffect, useRef, useState } from "react";
import { moi, pachebel, portrait, profilePicture } from "../../assets";
import { Volume2, VolumeX } from "lucide-react";

function fmt(s: number) {
  if (!isFinite(s)) return "0:00";
  const m = Math.floor(s / 60);
  const r = Math.floor(s % 60);
  return `${m}:${r.toString().padStart(2, "0")}`;
}

export function MediaDemo() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [time, setTime] = useState(0);
  const [dur, setDur] = useState(0);

  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;
    const onTime = () => setTime(a.currentTime);
    const onMeta = () => setDur(a.duration);
    a.addEventListener("timeupdate", onTime);
    a.addEventListener("loadedmetadata", onMeta);
    a.addEventListener("ended", () => setPlaying(false));
    return () => {
      a.removeEventListener("timeupdate", onTime);
      a.removeEventListener("loadedmetadata", onMeta);
    };
  }, []);

  const togglePlay = () => {
    const a = audioRef.current;
    if (!a) return;
    if (playing) {
      a.pause();
      setPlaying(false);
    } else {
      a.play()
        .then(() => setPlaying(true))
        .catch(() => {});
    }
  };

  // Gallery
  const images = [portrait, profilePicture, moi];
  const [idx, setIdx] = useState(0);

  return (
    <div className="space-y-5">
      {/* Custom audio player */}
      {/* Niño Prodigio – Canon de Pachelbel */}
      <div className="rounded-xl border border-border bg-card p-4">
        <audio ref={audioRef} src={pachebel} preload="metadata" />
        <div className="flex items-center gap-3">
          <button
            onClick={togglePlay}
            className="h-11 w-11 shrink-0 rounded-full bg-sharingan text-primary-foreground flex items-center justify-center hover:bg-sharingan-glow transition shadow-lg shadow-sharingan/30"
          >
            {/* {playing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4 translate-x-px" />} */}
            {playing ? (
              <span className={`icon pause-1icon- text-[16px]`} />
            ) : (
              <span className={`icon playicon- text-[16px]`} />
            )}
          </button>
          <div className="flex-1">
            <div className="text-xs font-medium">Lecteur audio</div>
            <div className="mt-1 h-1.5 rounded-full bg-secondary overflow-hidden">
              <div
                className="h-full bg-linear-to-r from-sharingan to-tech transition-all"
                style={{ width: `${dur ? (time / dur) * 100 : 0}%` }}
              />
            </div>
            <div className="mt-1 flex justify-between text-[10px] font-mono text-muted-foreground">
              <span>{fmt(time)}</span>
              <span>{fmt(dur)}</span>
            </div>
          </div>
          <button
            onClick={() => {
              const a = audioRef.current;
              if (!a) return;
              a.muted = !muted;
              setMuted(!muted);
            }}
            className="p-2 rounded-md hover:bg-secondary transition"
          >
            {muted ? (
              <VolumeX className="h-4 w-4" />
            ) : (
              <Volume2 className="h-4 w-4" />
            )}
          </button>
        </div>
      </div>

      {/* Video */}
      {/* <div className="rounded-xl border border-border overflow-hidden bg-black">
        <video src={jjk} controls className="w-full aspect-video" poster="" />
      </div> */}

      {/* Image gallery */}
      <div className="rounded-xl border border-border bg-card overflow-hidden">
        <div className="relative aspect-4/3 bg-secondary">
          <img
            src={images[idx]}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
          <button
            onClick={() =>
              setIdx((i) => (i - 1 + images.length) % images.length)
            }
            className="absolute left-2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full glass flex items-center justify-center"
          >
            {/* <ChevronLeft className="h-4 w-4" /> */}
            <span className={`icon angle-lefticon- text-[16px]`} />
          </button>
          <button
            onClick={() => setIdx((i) => (i + 1) % images.length)}
            className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8 rounded-full glass flex items-center justify-center"
          >
            {/* <ChevronRight className="h-4 w-4" /> */}
            <span className={`icon angle-righticon- text-[16px]`} />
          </button>
        </div>
        <div className="p-2 flex gap-2">
          {images.map((src, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className={`h-14 w-14 rounded-md overflow-hidden border-2 transition ${idx === i ? "border-sharingan" : "border-transparent opacity-60 hover:opacity-100"}`}
            >
              <img src={src} alt="" className="h-full w-full object-cover" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
