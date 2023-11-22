import { useEffect } from "react";


export function useTitle(title: string){

    useEffect(() => {

        const originalTitle = document.title;
        document.title = originalTitle + "--" + title;

        return () => {
            document.title = originalTitle;
        }
    }, [])
}