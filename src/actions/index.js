export const increment = num => {
	return {
		type: "INCREMENT",
		payload: num //If you want to include an argument, in this case and number to increase by
	};
};

export const decrement = () => {
	return {
		type: "DECREMENT"
	};
};
