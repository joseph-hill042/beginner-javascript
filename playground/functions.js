window.onload = (e) => {
  console.info('event:::', e);
  window.scrollTo({
    top: 200,
    left: 0,
    behavior: 'smooth',
  });
};
