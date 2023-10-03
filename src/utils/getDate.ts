export const getDate = () => {
	const now = new Date();
	const today = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;
  console.log('today', today)
	return today;
};
