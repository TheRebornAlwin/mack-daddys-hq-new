export function mountFluidDebug() {
  if (typeof window === 'undefined') return;
  if (window.matchMedia('(min-width: 901px)').matches) return;
  const el = document.createElement('div');
  el.id = 'fluid-debug';
  Object.assign(el.style, {
    position: 'fixed',
    right: '8px',
    bottom: '8px',
    zIndex: '999999',
    background: 'rgba(0,0,0,0.6)',
    color: '#fff',
    padding: '6px 8px',
    fontSize: '12px',
    borderRadius: '6px',
    fontFamily: 'monospace'
  });
  document.body.appendChild(el);
  const render = () => {
    const fs = getComputedStyle(document.documentElement).fontSize;
    el.textContent = `vw:${window.innerWidth}px  html fs:${fs}`;
  };
  window.addEventListener('resize', render);
  window.addEventListener('orientationchange', render);
  render();
}