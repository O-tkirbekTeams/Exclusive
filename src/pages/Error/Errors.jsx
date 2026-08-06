import { Link } from "react-router-dom";

function Errors() {
  return (
    <>
      <div className="min-h-screen w-full flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-purple-950 via-fuchsia-950 to-black">
        <style>{`
        .stars {
          background-image:
            radial-gradient(1px 1px at 20% 30%, #fff8 40%, transparent 41%),
            radial-gradient(1px 1px at 70% 60%, #fff6 40%, transparent 41%),
            radial-gradient(1px 1px at 40% 80%, #fff5 40%, transparent 41%),
            radial-gradient(1px 1px at 85% 20%, #fff7 40%, transparent 41%),
            radial-gradient(1px 1px at 60% 10%, #fff5 40%, transparent 41%);
        }
        .lamp-wrap {
          position: relative;
          width: min(70vw, 340px);
          height: min(70vw, 520px);
          margin-bottom: 1rem;
        }
        .glass {
          position: absolute;
          inset: 0;
          border-radius: 50% 50% 18% 18% / 30% 30% 10% 10%;
          background: linear-gradient(180deg, #ffffff10, #3a1440 60%, #180620);
          border: 2px solid #ffffff22;
          overflow: hidden;
          box-shadow: 0 0 60px 10px rgba(255,90,140,.25), inset 0 0 40px rgba(255,255,255,.05);
        }
        .cap, .base {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          background: linear-gradient(180deg,#5b3a63,#2a1330);
        }
        .cap { top: -4%; width: 34%; height: 6%; border-radius: 8px 8px 40% 40%; }
        .base { bottom: -6%; width: 60%; height: 9%; border-radius: 8px; box-shadow: 0 8px 18px #0008; }

        .goo { position: absolute; inset: 0; filter: blur(14px) contrast(28); }
        .blob {
          position: absolute;
          left: 50%;
          border-radius: 9999px;
          transform: translateX(-50%);
          background: radial-gradient(circle at 35% 30%, #ffb454, #ff5e7e 55%, #ff2f6e 100%);
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
        }
        .b1 { width: 38%; aspect-ratio: 1; bottom: -15%; animation: rise1 7s infinite; }
        .b2 { width: 30%; aspect-ratio: 1; bottom: -20%; animation: rise2 9s infinite; animation-delay: .6s; }
        .b3 { width: 22%; aspect-ratio: 1; bottom: -10%; animation: rise3 6.5s infinite; animation-delay: 1.4s; }
        .b4 { width: 26%; aspect-ratio: 1; bottom: -25%; animation: rise4 8.2s infinite; animation-delay: 2.1s; }
        .b5 { width: 18%; aspect-ratio: 1; bottom: -10%; animation: rise5 5.6s infinite; animation-delay: .2s; }

        @keyframes rise1 {
          0% { bottom: -15%; transform: translate(-50%,0) scale(1); }
          45% { bottom: 60%; transform: translate(-60%,0) scale(1.15); }
          75% { bottom: 80%; transform: translate(-40%,0) scale(.9); }
          100% { bottom: -15%; transform: translate(-50%,0) scale(1); }
        }
        @keyframes rise2 {
          0% { bottom: -20%; transform: translate(-50%,0) scale(.9); }
          50% { bottom: 55%; transform: translate(-30%,0) scale(1.2); }
          80% { bottom: 75%; transform: translate(-55%,0) scale(1); }
          100% { bottom: -20%; transform: translate(-50%,0) scale(.9); }
        }
        @keyframes rise3 {
          0% { bottom: -10%; transform: translate(-50%,0) scale(1); }
          40% { bottom: 40%; transform: translate(-65%,0) scale(1.1); }
          70% { bottom: 70%; transform: translate(-35%,0) scale(.85); }
          100% { bottom: -10%; transform: translate(-50%,0) scale(1); }
        }
        @keyframes rise4 {
          0% { bottom: -25%; transform: translate(-50%,0) scale(1); }
          50% { bottom: 50%; transform: translate(-25%,0) scale(1.25); }
          85% { bottom: 85%; transform: translate(-50%,0) scale(.95); }
          100% { bottom: -25%; transform: translate(-50%,0) scale(1); }
        }
        @keyframes rise5 {
          0% { bottom: -10%; transform: translate(-50%,0) scale(.8); }
          45% { bottom: 35%; transform: translate(-60%,0) scale(1.1); }
          75% { bottom: 65%; transform: translate(-40%,0) scale(.9); }
          100% { bottom: -10%; transform: translate(-50%,0) scale(.8); }
        }
        @media (prefers-reduced-motion: reduce) {
          .blob { animation: none !important; }
        }
      `}</style>

        <div className="stars absolute inset-0 opacity-60 pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center text-center px-8">
          <div className="lamp-wrap">
            <div className="cap" />
            <div className="glass">
              <div className="goo">
                <div className="blob b1" />
                <div className="blob b2" />
                <div className="blob b3" />
                <div className="blob b4" />
                <div className="blob b5" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent pointer-events-none" />
            </div>
          </div>

          <h1 className="text-6xl md:text-7xl font-extrabold text-orange-50 tracking-wide">
            404
          </h1>

          <p className="mt-2 mb-6 max-w-xs text-purple-200/80">
            Bu sahifa qayerdadir, lekin biz uni topa olmayapmiz. Ehtimol lava
            bilan birga suzib ketgandir.
          </p>

          <Link to={"/"}
            className="inline-block px-7 py-3 rounded-full font-bold text-purple-950 bg-gradient-to-br from-pink-400 to-rose-600 shadow-lg hover:-translate-y-0.5 transition-transform"
          >
            Bosh sahifaga qaytish
          </Link>
        </div>
      </div>
    </>
  );
}

export default Errors;
