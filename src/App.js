import React, { useState } from 'react';
import Header from './components/Header';

import ImageGrid from './components/ImageGrid'
import UploadForm from './components/UploadForm'
import Model from './components/Model';

import style from './style.module.css'

function App() {

	const [selectedImage, setSelectedImage] = useState(null)

	console.log(selectedImage)

	return (

		<div className="App">

			<header className="App-header">
				<Header />
			</header>

			<main className={`center-vertically set-flex-column`}>

				<div className={`section-inner max-percentage set-flex-column center-vertically`}>
					<h1 className={style['title']}>Your Pictures</h1>
					<p className={style['description']}>A Description of the site and stuff with things!!</p>
				</div>
				
				<div className={`section-inner max-percentage`}>
					<UploadForm />
					<ImageGrid setSelectedImage={setSelectedImage} />

				</div>

			</main>

			{selectedImage && <Model selectedImage={selectedImage} setSelectedImage={setSelectedImage} />}

		</div>

	);

}

export default App;
