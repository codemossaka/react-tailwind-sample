import {useEffect, useState} from 'react';
import {fetchLanguages} from '../services/languages';
import Language from '../types/language';
// import {formatMovies} from '../utils/movies';

export default function useLanguages() {
    const [languages, setLanguages] = useState<Language[]>([]);

    const fetchAllLanguages = async () => {
        const data = await fetchLanguages();
        // const languages: FormattedLanguage[] = formatMovies(data.results);
        setLanguages(data);
    };

    useEffect(() => {
        fetchAllLanguages();
    }, []);

    return {languages, setLanguages};
}
