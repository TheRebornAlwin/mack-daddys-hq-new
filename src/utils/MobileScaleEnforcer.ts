// src/utils/MobileScaleEnforcer.ts
const BASE = 390;          // preview baseline width
const MIN = 14;            // clamp min
const MAX = 18;            // clamp max

function targetPxForWidth(w: number) {
  const fluid = (w * 16) / BASE; // 16px at 390px
  return Math.max(MIN, Math.min(MAX, fluid));
}

function injectInlineStyle() {
  const id = 'fluid-inline-enforcer';
  if (document.getElementById(id)) return;
  const style = document.createElement('style');
  style.id = id;
  style.textContent = `
    @media (max-width: 900px) {
      html { -webkit-text-size-adjust:100%; text-size-adjust:100%; }
    }
  `;
  document.head.appendChild(style);
}

function applyInlineComputedSize() {
  // JS-driven size (ultimate override). Updates on resize/orientation.
  const set = () => {
    if (window.matchMedia('(max-width: 900px)').matches) {
      const w = window.innerWidth;
      const px = targetPxForWidth(w);
      // Inline style wins over most styles; not using !important here.
      (document.documentElement as HTMLElement).style.fontSize = px + 'px';
    } else {
      (document.documentElement as HTMLElement).style.fontSize = '';
    }
  };
  set();
  window.addEventListener('resize', set, { passive: true });
  window.addEventListener('orientationchange', set);
}

function needsWrapperFallback(fsFrozen: boolean) {
  // If rem scaling is blocked (tons of px leftovers), we can scale the whole app.
  // Try wrapper only if font-size enforcement is still ineffective.
  return fsFrozen;
}

function applyWrapperFallback() {
  // Wrap #root (or main app container) and scale it physically
  const ROOT_ID = 'root';
  const EXISTING = document.getElementById('m-scale');
  if (EXISTING) return;

  const app = document.getElementById(ROOT_ID);
  if (!app || app.parentElement?.id === 'm-scale') return;

  const wrap = document.createElement('div');
  wrap.id = 'm-scale';
  wrap.style.transformOrigin = 'top center';
  wrap.style.width = '100%';
  app.parentElement!.insertBefore(wrap, app);
  wrap.appendChild(app);

  const update = () => {
    if (window.matchMedia('(max-width: 900px)').matches) {
      const scale = window.innerWidth / BASE; // BASE→1.0
      wrap.style.transform = `scale(${scale})`;
      wrap.style.width = `${100 / scale}%`;   // counteract scale to fit viewport
    } else {
      wrap.style.transform = '';
      wrap.style.width = '100%';
    }
  };
  update();
  window.addEventListener('resize', update, { passive: true });
  window.addEventListener('orientationchange', update);
}

export function enforceMobileFluidScaling() {
  if (typeof window === 'undefined') return;

  const check = () => {
    if (!window.matchMedia('(max-width: 900px)').matches) return;

    // Measure html fs at two widths to detect "frozen" root size
    const initialW = window.innerWidth;
    const initialFs = parseFloat(getComputedStyle(document.documentElement).fontSize);

    // Nudge width by forcing a minimal task delay (user may rotate or browser chrome may show/hide)
    setTimeout(() => {
      const w = window.innerWidth;
      const fs = parseFloat(getComputedStyle(document.documentElement).fontSize);
      const expected = targetPxForWidth(w);

      // Consider "frozen" if font-size differs from expected by > 0.75px and didn't change from initial
      const fsFrozen = Math.abs(fs - expected) > 0.75 && Math.abs(fs - initialFs) < 0.25;

      if (fsFrozen) {
        // Step 1: inject inline style to win cascade
        injectInlineStyle();

        // Step 2: force JS-driven root font-size to exact px (always wins)
        applyInlineComputedSize();

        // Re-check after enforcing
        setTimeout(() => {
          const fs2 = parseFloat(getComputedStyle(document.documentElement).fontSize);
          const expected2 = targetPxForWidth(window.innerWidth);
          const stillFrozen = Math.abs(fs2 - expected2) > 0.75;

          // Step 3: wrapper fallback (scales entire app) if still blocked
          if (needsWrapperFallback(stillFrozen)) {
            applyWrapperFallback();
          }
        }, 60);
      }
    }, 60);
  };

  // Run on load + when mobile
  check();
  window.addEventListener('resize', check, { passive: true });
  window.addEventListener('orientationchange', check);
}