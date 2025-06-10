import { Children, createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider =({children})=>{
        const [isDarkMood ,setIsDarkMood] = useState(false)
        const ToggoleTheme =()=>{
            setIsDarkMood(!isDarkMood)
        }

        useEffect(()=>{
            if(isDarkMood){
                document.body.classList.add('dark');
            }else{
                document.body.classList.remove('dark');
            }
        },[isDarkMood])


        return(
            <ThemeContext.Provider value={{isDarkMood, ToggoleTheme}}>
                {children}
            </ThemeContext.Provider>
        )
}