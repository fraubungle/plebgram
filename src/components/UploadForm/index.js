import React, { useState } from 'react'
import ProgressBar from '../Progressbar'

import { ReactComponent as ArrowShortLeft } from '../../assets/svgs/arrow-short-left.svg';

// Get local Styles
import style from './style.module.css'

const UploadForm = () => {

    const [file, setFile] = useState(null)
    const [error, setError] = useState(null)

    const changeHandler = (e) => {
        const selected = e.target.files[0];

        const allowedTypes = ['image/png', 'image/jpeg', 'image/jpg'];
        
        if ( selected && allowedTypes.includes(selected.type)) {
            setFile(selected);
            setError(null)
        } else {
            setFile(null);
            setError('We only accept image files (png, jpeg, jpg)')
        }
        
        console.log("Selected: ", selected)
    }

    return (
        <form>

            <div className={style['file-input-wrapper']}>

                <div className={style['faux-file-input']}>
                    <ArrowShortLeft className={style['upload-icon']} />
                    <input  className={style['file-input']} type="file" onChange={changeHandler} />
                </div>

            </div>

            <div className={style['information']}>
                { file && <h6 className={style['file-name']}>{file.name}</h6> }
                { error && <h6 className={style['error']}>{error}</h6> }
                { file && <ProgressBar file={file} setFile={setFile} /> }
            </div>
            
        </form>
    )
}

export default UploadForm
