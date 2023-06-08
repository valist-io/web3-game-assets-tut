(async () => {
  if (window.ethereum) {
    console.log('connecting to web3 provider...');
    await window.ethereum.request({method: 'eth_requestAccounts'});

    window.ethereum.on("accountsChanged", function () {
      location.reload();
    });
  }
})();
