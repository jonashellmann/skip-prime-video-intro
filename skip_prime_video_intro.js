// Create observer with callback function
const callback = function(mutations, observer) {
	console.log(mutations);
	// Iterate over every DOM mutation
	for (let mutation of mutations) {
		// Iterate over all added nodes in a mutation
		for (let node of mutation.addedNodes) {
			// Click on node if it
			if (node.matches) {
				if (node.matches('.skipElement')) {
					node.click();
				} else if (node.matches('.nextUpContents')) {
					for (let child of node.childNodes) {
						if (child.matches('.nextUpCard')) {
							child.click();
						}
					}
				}
			}
		}
	}
};	
const mutationObserver = new MutationObserver(callback);

// Start oberserving every change in the DOM
const element = document.documentElement;
const config = { attributes: false, childList: true, subtree: true };
mutationObserver.observe(element, config);