import React from 'react';
import { useTranslation } from 'react-i18next';
import './language.scss';
import flagRo from '../../image/md.png';
import flagRu from '../../image/ru.png';


export const Language = () => {
    const [t, i18n] = useTranslation(),
    changeLang = (lang) => () => i18n.changeLanguage(lang);
    return (
        <div className='headerLanguage'>
            <button>
                <img src={flagRu} alt="ru" onClick={changeLang('ru')} />
                <img src={flagRo} alt="ro" onClick={changeLang('en')}/>
                <img src={flagRo} alt="ro" onClick={changeLang('ro')}/>
            </button>
        </div>
    )
}
