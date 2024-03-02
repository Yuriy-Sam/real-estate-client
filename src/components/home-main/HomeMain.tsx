const HomeMain = () => {
	return (
		<section className=" container text-dark-color pt-10 h-[calc(100dvh - 70px)]  ">
			<div className=" text-9xl font-bold flex items-center  ">
				<div className="w-[250px] h-[120px]  mr-8">
					<img
						src="/src/assets/img/main-house3.jpg"
						className=" w-full h-full rounded-full "
						alt=""
					/>
				</div>

				<p>Journey To</p>
			</div>
			<div className=" text-9xl font-bold flex mb-5">
				Your Perfect Home
				<span className=" text-primary-color">.</span>
			</div>
			<div className=" h-full w-full flex justify-between items-center">
				<div className="w-[600px] h-[400px]  mr-5">
					<img
						src="/src/assets/img/main-house1.jpg"
						className=" w-full h-full rounded-xl "
						alt=""
					/>
				</div>
				<div className="w-full h-[400px] flex flex-col items-center justify-between">
					<div className="w-full  h-full flex justify-start gap-2  items-start">
						<div className=" border-2 p-3 px-5 flex justify-center items-center rounded-lg">
							<div className=" w-28  avatar-wrapper">
								<img
									className="avatar left-0"
									src="/src/assets/img/avatar1.webp"
									alt=""
								/>
								<img
									className="avatar left-[30px] "
									src="/src/assets/img/avatar2.jpg"
									alt=""
								/>
								<img
									className="avatar left-[60px]"
									src="/src/assets/img/avatar3.jpg"
									alt=""
								/>
							</div>
							<div className="">
								<p className=" font-medium text-secondary-color">
									1K People
								</p>
								<p className="text-secondary-color">
									Getting Home
								</p>
							</div>
						</div>
						<div className=" border-2 p-3 px-5 flex justify-center items-center rounded-lg">
							<div className="">
								<img
									className=" avatar"
									src="/src/assets/img/avatar1.webp"
									alt=""
								/>
							</div>
							<div className="">
								<p className=" font-medium text-secondary-color">
									100 Houses
								</p>
								<p className="text-secondary-color">
									Sold Monthly
								</p>
							</div>
						</div>
						<div className=" border-2 p-3 px-5 flex justify-center items-center rounded-lg">
							<div className="">
								<img
									className=" avatar"
									src="/src/assets/img/avatar2.jpg"
									alt=""
								/>
							</div>
							<div className="">
								<p className=" font-medium text-secondary-color">
									5K+ People
								</p>
								<p className=" text-secondary-color text-md">
									Looking for House
								</p>
							</div>
						</div>
					</div>
					<div className=" w-full h-[300px]">
						<img
							src="/src/assets/img/main-house2.jpg"
							className=" w-full h-full object-cover rounded-xl"
							alt=""
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HomeMain;
