import React from 'react'
import { motion } from 'framer-motion'

// Get local Styles
import style from './style.module.css'

const Model = ({selectedImage, setSelectedImage}) => {

    const handleClick = (e) => {

        if ( e.target.classList.contains(style['backdrop']) ) {
            setSelectedImage(null)
        }

    }

    return (

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className={style['backdrop']} onClick={handleClick}>
            <motion.img initial={{ y: '-100vh' }} animate={{ y: 0 }} src={selectedImage} alt={`Monkey alt text!!`} />
        </motion.div>
    )
}

export default Model
