import { useContext } from 'react';
import { LanguageContext } from '../../../context/language';

const useText = () => {
  const languageContext = useContext(LanguageContext);
  return (tid: string) => languageContext.dictionary[tid] || tid;
};

export default useText;
