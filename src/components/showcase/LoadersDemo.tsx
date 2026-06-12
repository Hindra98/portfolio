
/** 4 linear infinite loaders + 4 circular infinite loaders. */
export function LoadersDemo() {
  return (
    <div className="space-y-6">
      <div>
        <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-3">
          Linéaire
        </div>
        <div className="grid grid-cols-2 gap-4">
          <LinearA />
          <LinearB />
          <LinearC />
          <LinearD2 />
        </div>
      </div>
      <div>
        <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-3">
          Circulaire
        </div>
        <div className="grid grid-cols-4 gap-4 place-items-center">
          <CircularA />
          <CircularB />
          <CircularC />
          <CircularD />
        </div>
      </div>

      <style>{`
        @keyframes ldr-slide { 0%{transform:translateX(-100%);} 100%{transform:translateX(400%);} }
        @keyframes ldr-grow { 0%{width:0;margin-left:0;} 50%{width:60%;margin-left:20%;} 100%{width:0;margin-left:100%;} }
        @keyframes ldr-stripes { from{background-position:0 0;} to{background-position:32px 0;} }
        @keyframes ldr-bounce { 0%,80%,100%{transform:scaleY(0.4);} 40%{transform:scaleY(1);} }
        @keyframes ldr-dash { 0%{stroke-dasharray:1,150;stroke-dashoffset:0;} 50%{stroke-dasharray:90,150;stroke-dashoffset:-35;} 100%{stroke-dasharray:90,150;stroke-dashoffset:-124;} }
        @keyframes ldr-rotate { to{transform:rotate(360deg);} }
        @keyframes ldr-pulse-ring { 0%{transform:scale(.6);opacity:.8;} 100%{transform:scale(1.4);opacity:0;} }
        @keyframes ldr-dot { 0%,100%{opacity:.2;} 50%{opacity:1;} }
      `}</style>
    </div>
  );
}

/* -------- Linear -------- */
function LinearA() {
  return (
    <div className="space-y-1.5">
      <div className="text-[10px] text-muted-foreground">Slide</div>
      <div className="relative h-2 w-full overflow-hidden rounded-full bg-secondary">
        <div className="absolute h-full w-1/3 rounded-full bg-linear-to-r from-sharingan to-tech" style={{ animation: "ldr-slide 1.4s ease-in-out infinite" }} />
      </div>
    </div>
  );
}
function LinearB() {
  return (
    <div className="space-y-1.5">
      <div className="text-[10px] text-muted-foreground">Grow</div>
      <div className="relative h-2 w-full overflow-hidden rounded-full bg-secondary">
        <div className="h-full rounded-full bg-sharingan" style={{ animation: "ldr-grow 1.8s ease-in-out infinite" }} />
      </div>
    </div>
  );
}
function LinearC() {
  return (
    <div className="space-y-1.5">
      <div className="text-[10px] text-muted-foreground">Stripes</div>
      <div
        className="h-2 w-full rounded-full"
        style={{
          background: "repeating-linear-gradient(45deg, var(--sharingan) 0 8px, var(--tech) 8px 16px)",
          backgroundSize: "32px 100%",
          animation: "ldr-stripes 1s linear infinite",
        }}
      />
    </div>
  );
}
// function LinearD() {
//   return (
//     <div className="space-y-1.5">
//       <div className="text-[10px] text-muted-foreground">Dots</div>
//       <div className="flex items-end gap-1 h-3">
//         {[...Array(5)].map((_,i) => (
//           <span
//             key={i}
//             className="w-1.5 h-full flex-1 bg-sharingan rounded-sm origin-bottom"
//             style={{ animation: `ldr-bounce 1s ease-in-out ${i * 0.12}s infinite` }}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

const LinearD2 = () => {
  return (<div className="space-y-1.5">
      <div className="text-[10px] text-muted-foreground">Dots</div>
    <div className="lds-ellipsis">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    </div>
  );
};

/* -------- Circular -------- */
function CircularA() {
  return (
    <svg className="h-10 w-10" viewBox="0 0 50 50" style={{ animation: "ldr-rotate 1.6s linear infinite" }}>
      <circle cx="25" cy="25" r="20" fill="none" stroke="var(--sharingan)" strokeWidth="4" strokeLinecap="round" style={{ animation: "ldr-dash 1.5s ease-in-out infinite" }} />
    </svg>
  );
}
function CircularB() {
  return (
    <div className="h-10 w-10 rounded-full border-4 border-secondary border-t-tech" style={{ animation: "ldr-rotate 0.9s linear infinite" }} />
  );
}
function CircularC() {
  return (
    <div className="relative h-10 w-10">
      <span className="absolute inset-0 rounded-full bg-sharingan/60" style={{ animation: "ldr-pulse-ring 1.4s ease-out infinite" }} />
      <span className="absolute inset-2 rounded-full bg-sharingan" />
    </div>
  );
}
function CircularD() {
  return (
    <div className={"relative h-10 w-10"}>
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
        <span
          key={i}
          className="absolute top-1/2 left-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground"
          style={{
            transform: `rotate(${i * 45}deg) translate(0, -14px)`,
            animation: `ldr-dot 1s ease-in-out ${i * 0.12}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
