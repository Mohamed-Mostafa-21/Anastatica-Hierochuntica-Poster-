function toggle(headEl){
  const step = headEl.parentElement;
  const body = step.querySelector('.step-body');
  const isOpen = step.getAttribute('data-open') === 'true';
  if(isOpen){
    step.setAttribute('data-open','false');
    body.style.maxHeight = '0px';
  } else {
    step.setAttribute('data-open','true');
    body.style.maxHeight = body.scrollHeight + 'px';
  }
}

// keep open panels sized correctly on resize / when nested <details> toggle
document.addEventListener('toggle', (e) => {
  const step = e.target.closest('.step');
  if(step && step.getAttribute('data-open') === 'true'){
    const body = step.querySelector('.step-body');
    body.style.maxHeight = body.scrollHeight + 'px';
  }
}, true);

window.addEventListener('resize', () => {
  document.querySelectorAll('.step[data-open="true"] .step-body').forEach(b=>{
    b.style.maxHeight = b.scrollHeight + 'px';
  });
});
