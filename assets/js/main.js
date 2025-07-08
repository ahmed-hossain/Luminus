// Theme Toggle Button
const toggle = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
  toggle.checked = true;
}

toggle.addEventListener('change', function () {
  if (this.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
  }
});
// ============================ END of Theme Toggle ===============================


// Image Lazy Load
// https://github.com/aFarkas/lazysizes/tree/gh-pages/plugins/native-loading
import lazySizes from 'lazysizes';
import 'lazysizes/plugins/native-loading/ls.native-loading';

lazySizes.cfg.nativeLoading = {
    setLoadingAttribute: true,
    disableListeners: {
        scroll: true
    }
};