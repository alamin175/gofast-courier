const Gallery = () => {
	return (
		<div className="text-center">
			<div>
				<h1 className="text-4xl font-medium bg-black text-white p-5 m-6">
					Photo Gallery
				</h1>
				<h1 className="text-4xl font-medium  p-5 m-6 text-red-500">
					Images of Admin routes
				</h1>
			</div>
			<div className="grid md:grid-cols-2 gap-10 m-6">
				<img
					className="border-4 rounded-lg"
					src="https://i.ibb.co/X2bKMWt/gallery-1.jpg"
					alt="img-1"
				/>

				<img
					className="border-4 rounded-lg"
					src="https://i.ibb.co/mHdMD4P/gallery-2.jpg"
					alt="img-2"
				/>

				<img
					className="border-4 rounded-lg"
					src="https://i.ibb.co/YW2H3zW/gallery-3.jpg"
					alt="img-3"
				/>

				<img
					className="border-4 rounded-lg"
					src="https://i.ibb.co/L8M9PGc/gallery-4.jpg"
					alt="img-4"
				/>
			</div>
		</div>
	);
};

export default Gallery;
