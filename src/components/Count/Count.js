import React, { memo } from 'react';
import { useNavigate } from 'react-router-dom';

const Count = ({ id }) => {
	const initialMinute = 10;
	const initialSeconds = 0;
	const navigate = useNavigate();
	const [minutes, setMinutes] = React.useState(initialMinute);
	const [seconds, setSeconds] = React.useState(initialSeconds);

	React.useEffect(() => {
		let myInterval = setInterval(() => {
			if (seconds > 0) {
				setSeconds(seconds - 1);
			}
			if (seconds === 0) {
				if (minutes === 0) {
					clearInterval(myInterval);
					navigate(`/cards/${id}`);
				} else {
					setMinutes(minutes - 1);
					setSeconds(59);
				}
			}
		}, 1000);

		return () => {
			clearInterval(myInterval);
		};
	});

	return (
		<>
			{minutes === 0 && seconds === 0 ? null : (
				<div>
					{minutes}:{seconds < 10 ? `0${seconds}` : seconds}
				</div>
			)}
		</>
	);
};

export default memo(Count);
