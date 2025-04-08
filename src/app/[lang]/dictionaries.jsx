const dictionaries = {
    en: () => import('./dictionaries/en.json').then((mod) => mod.default),
    ar: () => import('./dictionaries/ar.json').then((mod) => mod.default),
  }
  
  export async function getDictionary(locale) {
    return dictionaries[locale]?.() || dictionaries.en()
  }
  