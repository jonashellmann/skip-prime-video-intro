const mutationObserverPrime = new MutationObserver(
	function(mutations, observer) {
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
	});

// Start oberserving every change in the DOM
mutationObserverPrime.observe(document.documentElement, { attributes: false, childList: true, subtree: true });