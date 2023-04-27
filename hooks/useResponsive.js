import {useState,useEffect} from 'react'
export const useResponsive = ()=>{
    const [offset,setOffset] = useState('');
    
    const offsetResponsive = ()=>{
        setOffset(window.scrollY); 
    }

    useEffect(() => {
      window.addEventListener('scroll',offsetResponsive)
    }, [])

    return {offset}
    
}