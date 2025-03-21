import { useContext } from "react";
import { TitleColorContext } from "../context/TitleColorContext";

export const useTitleColorContext = () => {
    const context = useContext(TitleColorContext);

    if(!context) {
        console.log("contexto title não existe!")
    }

    return context;
}