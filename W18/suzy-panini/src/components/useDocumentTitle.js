import { useEffect } from "react";

const useDocumentTitle = () => {
    useEffect(() => {
       document.title = "Another Panini Place";
    }, []);
};

export default useDocumentTitle;