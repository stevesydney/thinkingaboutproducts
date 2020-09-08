(function () {
  const hue = Math.floor(Math.random() * 360);
  const root = document.documentElement;
  const dark = window.matchMedia('(prefers-color-scheme: dark)');
  function luminosity(darkScheme, lightScheme) {
    if (dark.matches) return darkScheme;
    return lightScheme;
  }
  root.style.setProperty('--colour-link', `hsl(${hue},68%,${luminosity('80%', '40%')})`);
  root.style.setProperty('--colour-link-hover', `hsl(${hue},68%,${luminosity('80%', '40%')})`);
  root.style.setProperty('--colour-link-focus', `hsl(${hue},68%,${luminosity('90%', '30%')})`);
  root.style.setProperty('--colour-link-visited', `hsl(${hue},68%,${luminosity('70%', '60%')})`);
  root.style.setProperty('--colour-link-active', `hsl(${hue},68%,${luminosity('95%', '20%')})`);
})();
