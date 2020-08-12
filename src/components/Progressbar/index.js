import React, { useEffect } from 'react'
import useStorage from '../../hooks/userStorage'
// Get local Styles
import style from './style.module.css'
import { motion } from 'framer-motion'

const ProgressBar = ( { file, setFile } ) => {

    const { url, progress } = useStorage(file);

    useEffect(() => {
        
        if ( url ) {
            setFile(null)
        }
    }, [url, setFile])

    return (
        <motion.div 
        initial={{ width: 0 }}
        animate={{ width: progress + '%'}}
        className={style['progress-bar']}  />
    )
}

export default ProgressBar
