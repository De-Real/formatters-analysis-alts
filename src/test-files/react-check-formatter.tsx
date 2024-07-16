import React, { useState, useEffect, useCallback, memo } from "react";

interface Props {
	username: string;
}

const ReactCheckAnalysis: React.FC<Props> = (props) => {
	const { username } = props;
	const [data, setData] = useState<string | null>(null);

	const n = 1,
		r = 1,
		l = 1,
		t = 1,
		b = 1,
		f = 1;
	const expr =
		// biome-ignore format: the array should not be formatted
		[
            (2 * n) / (r - l),
            0,
            (r + l) / (r - l),
            0,
            0,
            (2 * n) / (t - b),
            (t + b) / (t - b),
            0,
            0,
            0,
            -(f + n) / (f - n),
            -(2 * f * n) / (f - n),
            0,
            0,
            -1,
            0,
        ];

	const fetchData = useCallback(() => {
		// Simulate an API call
		setTimeout(() => {
			setData(`Analysis data for ${username}`);
		}, 1000);
	}, [username]);

	useEffect(() => {
		fetchData();
	}, [fetchData]);

	return (
		<div>
			<h1>React Check Analysis</h1>
			<p>Username: {username}</p>
			<p>Data: {data ? data : "Loading..."}</p>
			<p>{expr}</p>
		</div>
	);
};

export default memo(ReactCheckAnalysis);
