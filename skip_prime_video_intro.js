// Create observer with callback function
const callback = function (mutations, observer) {
    // Iterate over every DOM mutation
    for (let mutation of mutations) {
        // Iterate over all added nodes in a mutation
        for (let node of mutation.addedNodes) {
            if (node.matches('.atvwebplayersdk-skipelement-button') // Button to skip intro and flashback
                    || node.matches('.atvwebplayersdk-nextupcard-button') // Button to play next episode
                    || node.matches('.atvwebplayersdk-infobar-container .fu4rd6c')) { // Button to skip ads
                node.click();
            }
        }
    }
};
const mutationObserver = new MutationObserver(callback);

// Start oberserving every change in the DOM
const element = document.documentElement;
const config = { attributes: true, childList: true, subtree: true };
mutationObserver.observe(element, config);