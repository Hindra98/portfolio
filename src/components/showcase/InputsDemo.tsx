import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export function InputsDemo() {
  const [show, setShow] = useState(false);
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [email, setEmail] = useState("vadiny@");
  const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  return (
    <div className="space-y-4">
      {/* Search */}
      <label className="block">
        <span className="text-xs font-medium text-muted-foreground">Recherche</span>
        <div className="mt-1.5 relative">
          {/* <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" /> */}
          <span className={`icon searchicon- text-[16px] absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground`} />
          <input
            type="text"
            placeholder="Tapez pour chercher..."
            className="w-full rounded-lg border border-border bg-background pl-9 pr-3 py-2 text-sm focus:outline-none focus:border-sharingan focus:ring-2 focus:ring-sharingan/20 transition"
          />
        </div>
      </label>

      {/* Email validated */}
      <label className="block">
        <span className="text-xs font-medium text-muted-foreground">E-mail (validation live)</span>
        <div className="mt-1.5 relative">
          {/* <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" /> */}
          <span className={`icon mail-alticon- text-[16px] absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground`} />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`w-full rounded-lg border bg-background pl-9 pr-9 py-2 text-sm focus:outline-none focus:ring-2 transition ${valid ? "border-tech/60 focus:border-tech focus:ring-tech/20" : "border-destructive/60 focus:border-destructive focus:ring-destructive/20"}`}
          />
          <span className="absolute right-3 top-1/2 -translate-y-1/2">
            {/* {valid ? <Check className="h-4 w-4 text-tech" /> : <AlertCircle className="h-4 w-4 text-destructive" />} */}
            {valid ? <span className={`icon okicon- text-[16px] text-tech`} /> : <span className={`icon attention-circledicon- text-[16px] text-destructive`} />}
          </span>
        </div>
      </label>

      {/* Password */}
      <label className="block">
        <span className="text-xs font-medium text-muted-foreground">Mot de passe</span>
        <div className="mt-1.5 relative">
          <input
            type={show ? "text" : "password"}
            defaultValue="hindra98"
            className="w-full rounded-lg border border-border bg-background px-3 pr-10 py-2 text-sm focus:outline-none focus:border-sharingan focus:ring-2 focus:ring-sharingan/20 transition"
          />
          <button
            type="button"
            onClick={() => setShow((s) => !s)}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded hover:bg-secondary"
          >
            {show ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </button>
        </div>
      </label>

      {/* OTP */}
      <div>
        <span className="text-xs font-medium text-muted-foreground">Code OTP</span>
        <div className="mt-1.5 flex gap-2">
          {otp.map((v, i) => (
            <input
              key={i}
              value={v}
              onChange={(e) => {
                const val = e.target.value.slice(-1);
                const next = [...otp];
                next[i] = val;
                setOtp(next);
                if (val && i < 3) {
                  const el = document.getElementById(`otp-${i + 1}`);
                  el?.focus();
                }
              }}
              id={`otp-${i}`}
              maxLength={1}
              className="h-11 w-11 rounded-lg border border-border bg-background text-center font-mono text-lg focus:outline-none focus:border-sharingan focus:ring-2 focus:ring-sharingan/20 transition"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
