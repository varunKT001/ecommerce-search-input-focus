const selectors = {
  amazon: {
    hostname: 'amazon.in',
    searchInputSelectors: ['#twotabsearchtextbox'],
  },
  flipkart: {
    hostname: 'flipkart.com',
    searchInputSelectors: [`input.Pke_EE[name="q"]`, `input._3704LK[name="q"]`],
  },
};

document.addEventListener('keypress', (event) => {
  if (event.key === '/') {
    event.preventDefault();

    const hostname = window.location.hostname;
    let searchInputSelectors: string[] = [];

    if (hostname.includes('amazon.in')) {
      searchInputSelectors = selectors.amazon.searchInputSelectors;
    } else if (hostname.includes('flipkart.com')) {
      searchInputSelectors = selectors.flipkart.searchInputSelectors;
    }

    const inputs: HTMLInputElement[] = Array.from(
      searchInputSelectors,
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
