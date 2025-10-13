
(function(){
    function initSlider(slider){
      const beforeGroup = slider.querySelector('.ba__group--before');
      const afterGroup  = slider.querySelector('.ba__group--after');
      const beforeImg   = beforeGroup?.querySelector('img') || slider.querySelector('.ba__img--before');
      const handle      = slider.querySelector('.ba__handle');
      const mode        = slider.dataset.mode || 'auto';   // 'auto' | 'fill'
  
      let ratio = 0.5, dragging = false;
  
      function clamp01(x){ return Math.max(0, Math.min(1, x)); }
      function applyPosition(r){
        ratio = clamp01(r);
        const rect = slider.getBoundingClientRect();
        const px = ratio * rect.width;
  
        // Clip AFTER group so only the RIGHT side shows (labels included)
        if (afterGroup) afterGroup.style.clipPath = `inset(0 0 0 ${px}px)`;
  
        if (handle) {
          handle.style.left = px + 'px';
          handle.setAttribute('aria-valuenow', Math.round(ratio * 100));
        }
      }
  
      // --- sizing for 'auto' mode: height from BEFORE image aspect ---
      function sizeFromBefore(){
        if (!beforeImg || !beforeImg.naturalWidth || !beforeImg.naturalHeight) return;
        const aspect = beforeImg.naturalHeight / beforeImg.naturalWidth;
        slider.style.height = Math.round(slider.clientWidth * aspect) + 'px';
        applyPosition(ratio);
      }
      function whenLoaded(img, cb){
        if (!img) return;
        if (img.complete && img.naturalWidth) cb();
        else img.addEventListener('load', cb, { once: true });
      }
  
      if (mode === 'auto') {
        whenLoaded(beforeImg, sizeFromBefore);
        window.addEventListener('resize', sizeFromBefore);
      } else {
        const ro = new ResizeObserver(() => applyPosition(ratio));
        ro.observe(slider);
      }
  
      // --- interactions ---
      function clientX(e){ return e.touches ? e.touches[0].clientX : e.clientX; }
      function updateFromEvent(e){
        const rect = slider.getBoundingClientRect();
        const x = Math.max(0, Math.min(rect.width, clientX(e) - rect.left));
        applyPosition(x / rect.width);
      }
      function down(e){ dragging = true; updateFromEvent(e); e.preventDefault(); }
      function move(e){ if (dragging) updateFromEvent(e); }
      function up(){ dragging = false; }
  
      applyPosition(0.5);
  
      slider.addEventListener('mousedown', down);
      window.addEventListener('mousemove', move);
      window.addEventListener('mouseup', up);
  
      slider.addEventListener('touchstart', down, {passive:false});
      window.addEventListener('touchmove', move, {passive:false});
      window.addEventListener('touchend', up);
  
      if (handle) {
        handle.addEventListener('keydown', (e)=>{
          const step = e.shiftKey ? 0.1 : 0.02;
          if (e.key === 'ArrowLeft')  { applyPosition(ratio - step); e.preventDefault(); }
          if (e.key === 'ArrowRight') { applyPosition(ratio + step); e.preventDefault(); }
          if (e.key === 'Home')       { applyPosition(0); e.preventDefault(); }
          if (e.key === 'End')        { applyPosition(1); e.preventDefault(); }
        });
      }
    }
  
    // Init all sliders
    document.querySelectorAll('.ba').forEach(initSlider);
  })();
