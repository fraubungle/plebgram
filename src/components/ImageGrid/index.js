import React from 'react'
import useFirestore from '../../hooks/useFirestore'
import { motion } from 'framer-motion'


// Get local Styles
import style from './style.module.css'

const ImageGrid = ({setSelectedImage}) => {

    const {docs} = useFirestore('images');

    return (
        <div className={style['grid']}>
            {docs && docs.map(doc => (
                <motion.div className={style['item']} key={doc.id} whileHover={{opacity: 1}} layout onClick={() => setSelectedImage(doc.url)}>
                    <motion.img 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1}}
                        whileHover={{scale: 2}}
                        transition={{ delay: 1 }}
                        className={style['image']} src={doc.url} alt="Add Alt Text Here" />
                </motion.div>
            ))}
        </div>
    )
}

export default ImageGrid
