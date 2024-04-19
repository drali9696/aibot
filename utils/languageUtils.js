// utils/languageUtils.js

export function determineTextDirection(text) {
    const persianPattern = /[\u0600-\u06FF\uFB8A\uFDF2\uFDFD\uFE70-\uFEFF]/;
    return persianPattern.test(text) ? 'rtl' : 'ltr';
  }
  
