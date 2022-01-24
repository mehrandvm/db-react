import { createContext, FC, useState } from 'react';
import { dictionaryList } from '../../language';

type Language = 'fa' | 'en';

interface LanguageContextValue {
  userLanguage: Language;
  dictionary: any;
  changeLanguage: Function;
}

interface LanguageProviderValue {
  userLanguage: Language;
}

export const LanguageContext = createContext<LanguageContextValue>({
  userLanguage: 'en',
  dictionary: dictionaryList.en,
  changeLanguage: () => {},
});

export const LanguageProvider: FC<LanguageProviderValue> = (props) => {
  const [language, setLanguage] = useState<Language>(props.userLanguage);

  const provider = {
    userLanguage: language,
    changeLanguage: setLanguage,
    dictionary: dictionaryList[language],
  };

  return (
    <LanguageContext.Provider value={provider}>
      {props.children}
    </LanguageContext.Provider>
  );
};
