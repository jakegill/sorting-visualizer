import { useSelector } from "react-redux";

export default function SortingDisplay() {
	const algo = useSelector((state) => state.algo);
	const array = useSelector((state) => state.array);

	return (
		<>
			<main className='h-[88vh] bg-slate-800'>
				<div className='flex flex-wrap h-[100%] w-[100%]'>
					{array.map((element, index) => (
						<div
							className='bg-gray-300'
							key={index}
							style={{
								width: "1px",
								height: `${element / 8}%`,
							}}
						></div>
					))}
				</div>
			</main>
		</>
	);
}
