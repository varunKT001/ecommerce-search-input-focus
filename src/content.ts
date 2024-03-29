const selectors = {
  amazon: {
    hostname: 'amazon.in',
    searchInputSelectors: ['#twotabsearchtextbox'],
  },
  flipkart: {
    hostname: 'flipkart.com',
    searchInputSelectors: [`.Pke_EE[name="q"]`, `._3704LK[name="q"]`],
  },
};

document.addEventListener('keypress', (event) => {
  if (event.key === '/') {
    event.preventDefault();

    const hostname = window.location.hostname;
    let searchInputSelectors = [];

    if (hostname.includes('amazon.in')) {
      searchInputSelectors = selectors.amazon.searchInputSelectors;
    } else if (hostname.includes('flipkart.com')) {
      searchInputSelectors = selectors.flipkart.searchInputSelectors;
    }

    const inputs: HTMLInputElement[] = Array.from(
      selectors.amazon.searchInputSelectors,
      (selector) => {
        return document.querySelector(selector);
      }
    );

    inputs.forEach((input) => {
      if (input) {
        input.focus();

        // To move the caret to the end of the text
        const inputValueLength = input.value.length;
        input.setSelectionRange(inputValueLength, inputValueLength);
      }
    });
  }
});
