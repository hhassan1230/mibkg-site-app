import { useState, useRef, useCallback } from "react";
import { Maximize2, Minimize2, RotateCcw } from "lucide-react";

/**
 * @param {string} src          — image URL
 * @param {string} alt          — accessible label
 * @param {'equirectangular'|'cubemap'} type — panorama projection type
 */
export default function PanoramaViewer({
  src,
  alt = "360° panorama",
  type = "equirectangular",
}) {
  const [active, setActive] = useState(false);
  const containerRef = useRef(null);
  const sceneRef = useRef(null);

  /* ── Build equirectangular sky (existing path) ────────────────── */
  const buildEquirectangularScene = useCallback(
    (scene) => {
      const sky = document.createElement("a-sky");
      sky.setAttribute("src", src);
      sky.setAttribute("rotation", "0 -90 0");
      scene.appendChild(sky);
    },
    [src],
  );

  /* ── Build cubemap-strip background via Three.js ──────────────── */
  const buildCubemapScene = useCallback(
    (scene) => {
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.src = src;
      img.onload = () => {
        const faceSize = img.height; // each face is height × height
        const THREE = window.AFRAME.THREE;

        // Extract 6 faces from horizontal strip → px, nx, py, ny, pz, nz
        const faces = [];
        for (let i = 0; i < 6; i++) {
          const canvas = document.createElement("canvas");
          canvas.width = faceSize;
          canvas.height = faceSize;
          const ctx = canvas.getContext("2d");
          ctx.drawImage(
            img,
            i * faceSize,
            0,
            faceSize,
            faceSize,
            0,
            0,
            faceSize,
            faceSize,
          );
          faces.push(canvas);
        }

        const cubeTexture = new THREE.CubeTexture(faces);
        cubeTexture.needsUpdate = true;
        scene.object3D.background = cubeTexture;
      };
    },
    [src],
  );

  const launchScene = useCallback(() => {
    if (active || !containerRef.current) return;
    setActive(true);

    const container = containerRef.current;

    // Build A-Frame scene dynamically to avoid body style hijacking
    const scene = document.createElement("a-scene");
    scene.setAttribute("embedded", "");
    scene.setAttribute("vr-mode-ui", "enabled: false");
    scene.setAttribute("loading-screen", "enabled: false");
    scene.setAttribute("renderer", "antialias: true; alpha: true");

    if (type === "cubemap") {
      buildCubemapScene(scene);
    } else {
      buildEquirectangularScene(scene);
    }

    const cam = document.createElement("a-entity");
    cam.setAttribute("camera", "");
    cam.setAttribute(
      "look-controls",
      "reverseMouseDrag: false; touchEnabled: true; magicWindowTrackingEnabled: true",
    );
    cam.setAttribute("position", "0 1.6 0");
    scene.appendChild(cam);

    container.appendChild(scene);
    sceneRef.current = scene;

    // Reset A-Frame's aggressive html/body styles after load
    scene.addEventListener("loaded", () => {
      document.documentElement.style.position = "";
      document.documentElement.style.overflow = "";
      document.body.style.position = "";
      document.body.style.overflow = "";
    });
  }, [active, type, buildEquirectangularScene, buildCubemapScene]);

  const toggleFullscreen = useCallback(() => {
    const el = containerRef.current;
    if (!el) return;

    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      (el.requestFullscreen || el.webkitRequestFullscreen)?.call(el);
    }
  }, []);

  const resetView = useCallback(() => {
    const cam = sceneRef.current?.querySelector("[camera]");
    if (cam) {
      const lookControls = cam.components?.["look-controls"];
      if (lookControls) {
        lookControls.pitchObject.rotation.x = 0;
        lookControls.yawObject.rotation.y = Math.PI / 2; // reset to -90 deg match
      }
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="panorama-container group/pano relative w-full rounded-lg overflow-hidden border-2 border-border hover:border-primary transition-colors bg-[#111]"
      style={{ aspectRatio: "16 / 9" }}
    >
      {!active && (
        /* Play overlay — click to load the scene */
        <button
          onClick={launchScene}
          className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 cursor-pointer"
        >
          {/* Preview image */}
          <img
            src={src}
            alt={alt}
            className="absolute inset-0 w-full h-full object-cover brightness-40"
          />

          {/* Play icon */}
          <div className="relative z-10 w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center shadow-lg group-hover/pano:scale-110 transition-transform">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-7 w-7 text-primary-foreground"
            >
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
              />
              <path
                d="M12 2 A10 10 0 0 1 22 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                fill="none"
                strokeDasharray="2 3"
              />
              <path
                d="M12 2 A10 10 0 0 0 2 12"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                fill="none"
                strokeDasharray="2 3"
              />
              <circle cx="12" cy="12" r="3" fill="currentColor" />
            </svg>
          </div>

          <span className="relative z-10 text-sm font-semibold text-white drop-shadow-md tracking-wide">
            Explore in 360°
          </span>
          <span className="relative z-10 text-xs text-white/60">
            Click &amp; drag to look around
          </span>
        </button>
      )}

      {/* Controls — visible once scene is active */}
      {active && (
        <div className="absolute top-3 right-3 z-20 flex gap-2">
          <button
            onClick={resetView}
            className="w-9 h-9 rounded-full bg-black/60 backdrop-blur-sm hover:bg-primary/80 flex items-center justify-center transition-colors cursor-pointer"
            title="Reset view"
          >
            <RotateCcw className="h-4 w-4 text-white" />
          </button>
          <button
            onClick={toggleFullscreen}
            className="w-9 h-9 rounded-full bg-black/60 backdrop-blur-sm hover:bg-primary/80 flex items-center justify-center transition-colors cursor-pointer"
            title="Fullscreen"
          >
            <Maximize2 className="h-4 w-4 text-white" />
          </button>
        </div>
      )}

      {/* 360° badge */}
      <div className="absolute top-3 left-3 z-20 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-sm text-[11px] font-bold text-white tracking-wider uppercase pointer-events-none">
        360°
      </div>
    </div>
  );
}
