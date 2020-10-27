export const useTabs = (initialTab, allTab) => {
	const [currentIdx, setCurrentIdx] = useState(initialTab);

	if (!allTab || !Array.isArray(allTab)) {
		return;
	}

	return {
		currentItem: allTab[currentIdx],
		changeItem: setCurrentIdx
	};
};
