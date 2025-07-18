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