import { useEffect, useState } from "react";

const useKeypress = () => {
    const [message, setMessage] = useState(null);

    const forbiddenKeys = ['*','-', '+', '/', '='];
    
    useEffect(() => {
        const handleKeypress = (e) => {
            if (forbiddenKeys.includes(e.key)) {
                e.preventDefault();
                setMessage(`Using ${e.key} is not allowed`);
            } else {
                setMessage(null);
            }
        };

        document.addEventListener('keypress', handleKeypress);
        
        return () => {
            document.removeEventListener('keypress', handleKeypress);
        }
    }, []);


    return message;
};

export default useKeypress;