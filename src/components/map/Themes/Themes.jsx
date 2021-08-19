import React from "react";
import { useSelector } from 'react-redux';
import ThemeItem from './ThemeItem'

function Themes() {
    const themes = (useSelector(state => state.checkedThemes));

    return (
        <div>
            {themes.map((item) => (
                (item.checked) && <ThemeItem key={item.id} item={item} />
            ))}
        </div>
    )
}

export default Themes;