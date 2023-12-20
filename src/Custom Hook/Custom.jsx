import { useEffect } from 'react'

const Custom = (count) => {
    useEffect(()=>{
        document.title = `${count}`
    },[count])
}

export default Custom
