import { useDispatch, useSelector } from "react-redux";
import { selectAlgo } from "../../redux/navbarSlice.js";
import { setLength } from "../../redux/navbarSlice.js";

export default function Navbar() {
	const dispatch = useDispatch();
	const algo = useSelector((state) => state.algo);

	const handleAlgoClick = (e) => {
		dispatch(selectAlgo(e.target.value));
	};

	const handleLengthSlider = (e) => {
		setTimeout(() => {
			//Prevent excessive rerendering
			dispatch(setLength(e.target.value));
		}, 1000);
	};

	return (
		<>
			<nav className='text-xl text-gray-200 flex justify-around items-center h-[12vh] border-b-2 border-blue-700 bg-gray-900'>
				<button>Generate array</button>
				<div className='flex flex-col gap-1 justify-center items-center text-base'>
					<label htmlFor='arrLength'>Array length</label>
					<input
						onChange={handleLengthSlider}
						id='arrLength'
						type='range'
						min='10'
						max='500'
					/>
				</div>

				<ul className='text-base flex gap-8'>
					<button
						className={algo === "merge" ? "text-blue-500" : "text-gray-200"}
						onClick={handleAlgoClick}
						value='merge'
					>
						Merge Sort
					</button>
					<button
						className={algo === "quick" ? "text-blue-500" : "text-gray-200"}
						onClick={handleAlgoClick}
						value='quick'
					>
						Quick Sort
					</button>
					<button
						className={algo === "heap" ? "text-blue-500" : "text-gray-200"}
						onClick={handleAlgoClick}
						value='heap'
					>
						Heap Sort
					</button>
					<button
						className={algo === "insertion" ? "text-blue-500" : "text-gray-200"}
						onClick={handleAlgoClick}
						value='insertion'
					>
						Insertion Sort
					</button>
					<button
						className={algo === "selection" ? "text-blue-500" : "text-gray-200"}
						onClick={handleAlgoClick}
						value='selection'
					>
						Selection Sort
					</button>
					<button
						className={algo === "bubble" ? "text-blue-500" : "text-gray-200"}
						onClick={handleAlgoClick}
						value='bubble'
					>
						Bubble Sort
					</button>
				</ul>
			</nav>
		</>
	);
}
