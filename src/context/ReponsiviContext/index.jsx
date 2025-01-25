import { useState, useEffect } from 'react';

const useIsMobile = (breakpoint = 768) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= breakpoint);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= breakpoint);
        };

        // Verifica o tamanho inicial da tela
        checkMobile();

        // Adiciona event listener para atualizar quando a tela for redimensionada
        window.addEventListener('resize', checkMobile);

        // Limpa o event listener quando o componente for desmontado
        return () => {
            window.removeEventListener('resize', checkMobile);
        };
    }, [breakpoint]);

    return isMobile;
};

export default useIsMobile;