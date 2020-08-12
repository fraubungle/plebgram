import React from 'react'

// get Components
import UploadForm from '../UploadForm'

// Get local Styles
import style from './style.module.css'
import ImageGrid from '../ImageGrid'


const Body = () => {

	return (
		<main className={`center-vertically set-flex-column`}>

			<div className={`section-inner max-percentage set-flex-column center-vertically`}>
				<h1 className={style['title']}>Your Pictures</h1>
				<p className={style['description']}>A Description of the site and stuff with things!!</p>
			</div>
			
			<div className={`section-inner max-percentage`}>
				<UploadForm />
				<ImageGrid />

			</div>

		</main>
	)
}

export default Body