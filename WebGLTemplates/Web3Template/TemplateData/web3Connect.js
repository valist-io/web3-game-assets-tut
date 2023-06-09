const tokenContract = "0x833126E9aE5b0284fb8Fa0F52dD762800286c250";

const balanceOfABI = [
  {
    "constant": true,
    "inputs": [
      {
        "name": "owner",
        "type": "address"
      }
    ],
    "name": "balanceOf",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function",
    "signature": "0x70a08231"
  },
];

(async () => {
  if (window.ethereum) {
    console.log('connecting to web3 provider...');
    await window.ethereum.request({method: 'eth_requestAccounts'});
    
    window.web3 = new Web3(window.ethereum);

    const accounts = await web3.eth.getAccounts();
    
    if (accounts.length !== 0) {
      window.address = accounts[0];

      const contract = new web3.eth.Contract(balanceOfABI, tokenContract);
      const result = await contract.methods
        .balanceOf(accounts[0])
        .call();

      if (result) {
        window.balanceOf = result;
      }
    }

    window.ethereum.on("accountsChanged", function () {
      location.reload();
    });
  }
})();
