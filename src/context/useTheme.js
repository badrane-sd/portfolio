import { useContext, createContext } from "react";

const ThemeContext = createContext();

export default ThemeContext;
// Utilisation du context
export const useTheme = () => useContext(ThemeContext);
/*
 - fonction utilitaire
 - les composants besoin de context appellent directement le useTheme sans appliquer le hook useContext
*/
