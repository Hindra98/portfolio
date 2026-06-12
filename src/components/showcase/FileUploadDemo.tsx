import { Upload, X } from "lucide-react";
import { useState, useRef } from "react";

type UploadedFile = {
  id: string;
  file: File;
  status: "ok" | "rejected";
  reason?: string;
};

const ACCEPTED = ["image/", "application/pdf", "video/", "audio/"];
const MAX_SIZE = 5 * 1024 * 1024; // 5MB

function fileIcon(type: string) {
  // if (type.startsWith("image/")) return ImageIcon;
  // if (type.startsWith("video/")) return FileVideo;
  // if (type.startsWith("audio/")) return FileAudio;
  // if (type === "application/pdf") return FileText;

  if (type.startsWith("image/")) return <span className={`icon pictureicon- text-[16px]`} />;
  if (type.startsWith("video/")) return <span className={`icon videoicon- text-[16px]`} />;
  if (type.startsWith("audio/")) return <span className={`icon musicicon- text-[16px]`} />;
  if (type === "application/pdf") return <span className={`icon doc-texticon- text-[16px]`} />;
  // return FileIcon;
  return <span className={`icon docicon- text-[16px]`} />;
}

function humanSize(b: number) {
  if (b < 1024) return `${b} B`;
  if (b < 1024 * 1024) return `${(b / 1024).toFixed(1)} KB`;
  return `${(b / 1024 / 1024).toFixed(1)} MB`;
}
export function FileUploadDemo() {
  const [files, setFiles] = useState<UploadedFile[]>([]);
  const [dragging, setDragging] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const validate = (file: File): UploadedFile => {
    const id = crypto.randomUUID();
    if (!ACCEPTED.some((t) => file.type.startsWith(t))) {
      return { id, file, status: "rejected", reason: "Type non autorisé" };
    }
    if (file.size > MAX_SIZE) {
      return { id, file, status: "rejected", reason: "> 5 MB" };
    }
    return { id, file, status: "ok" };
  };

  const handle = (list: FileList | null) => {
    if (!list) return;
    const validated = Array.from(list).map(validate);
    setFiles((prev) => [...prev, ...validated]);
    // Auto-remove rejected after 2.5s
    validated.forEach((f) => {
      if (f.status === "rejected") {
        setTimeout(() => {
          setFiles((prev) => prev.filter((p) => p.id !== f.id));
        }, 2500);
      }
    });
  };

  return (
    <div className="space-y-3">
      <div
        onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
        onDragLeave={() => setDragging(false)}
        onDrop={(e) => { e.preventDefault(); setDragging(false); handle(e.dataTransfer.files); }}
        onClick={() => inputRef.current?.click()}
        className={`group relative cursor-pointer rounded-xl border-2 border-dashed p-8 text-center transition-all ${dragging ? "border-sharingan bg-sharingan/5 scale-[1.01]" : "border-border hover:border-sharingan/50 hover:bg-secondary/40"}`}
      >
        <input
          ref={inputRef}
          type="file"
          multiple
          className="hidden"
          accept="image/*,application/pdf,video/*,audio/*"
          onChange={(e) => handle(e.target.files)}
        />
        <div className="mx-auto h-12 w-12 rounded-full bg-sharingan/10 flex items-center justify-center mb-3 group-hover:bg-sharingan/20 transition">
          <Upload className="h-5 w-5 text-sharingan" />
        </div>
        <p className="text-sm font-medium">Glissez vos fichiers ou cliquez</p>
        <p className="text-xs text-muted-foreground mt-1">Images, PDF, vidéo, audio · max 5 MB</p>
      </div>

      {files.length > 0 && (
        <ul className="space-y-1.5">
          {files.map((f) => {
            const Icon = fileIcon(f.file.type);
            const ok = f.status === "ok";
            return (
              <li
                key={f.id}
                className={`flex items-center gap-3 rounded-lg border px-3 py-2 text-sm transition-all animate-fade-in-up ${ok ? "border-border bg-card" : "border-destructive/40 bg-destructive/5"}`}
              >
                <div className={`h-9 w-9 rounded-md flex items-center justify-center shrink-0 ${ok ? "bg-tech/10 text-tech" : "bg-destructive/10 text-destructive"}`}>
                  {/* <Icon className="h-4 w-4" /> */}
                  {Icon}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="truncate font-medium">{f.file.name}</div>
                  <div className="text-xs text-muted-foreground flex items-center gap-2">
                    {humanSize(f.file.size)}
                    {!ok && (
                      <span className="text-destructive flex items-center gap-1">
                        {/* <AlertCircle className="h-3 w-3" /> */}
                        <span className={`icon attention-circledicon- text-[12px]`} />{f.reason}
                      </span>
                    )}
                    {ok && <span className="text-tech flex items-center gap-1">
                      {/* <CheckCircle2 className="h-3 w-3" />  */}
                      <span className={`icon ok-circled2icon- text-[12px]`} />
                      OK</span>}
                  </div>
                </div>
                <button
                  onClick={() => setFiles((prev) => prev.filter((p) => p.id !== f.id))}
                  className="p-1.5 rounded-md hover:bg-secondary transition shrink-0"
                  aria-label="Remove"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
