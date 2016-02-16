window.btcRelayAbi = [{"constant": false, "type": "function", "name": "changeFeeRecipient(int256,int256,int256)", "outputs": [{"type": "int256", "name": "out"}], "inputs": [{"type": "int256", "name": "blockHash"}, {"type": "int256", "name": "feeWei"}, {"type": "int256", "name": "feeRecipient"}]}, {"constant": false, "type": "function", "name": "computeMerkle(int256,int256,int256[])", "outputs": [{"type": "uint256", "name": "out"}], "inputs": [{"type": "int256", "name": "txHash"}, {"type": "int256", "name": "txIndex"}, {"type": "int256[]", "name": "sibling"}]}, {"constant": false, "type": "function", "name": "fastGetBlockHash(int256)", "outputs": [{"type": "int256", "name": "out"}], "inputs": [{"type": "int256", "name": "blockHeight"}]}, {"constant": false, "type": "function", "name": "feePaid(int256,int256)", "outputs": [{"type": "int256", "name": "out"}], "inputs": [{"type": "int256", "name": "txBlockHash"}, {"type": "int256", "name": "amountWei"}]}, {"constant": false, "type": "function", "name": "getAverageChainWork()", "outputs": [{"type": "int256", "name": "out"}], "inputs": []}, {"constant": false, "type": "function", "name": "getBlockHash(int256)", "outputs": [{"type": "int256", "name": "out"}], "inputs": [{"type": "int256", "name": "blockHeight"}]}, {"constant": false, "type": "function", "name": "getBlockHeader(int256)", "outputs": [{"type": "bytes", "name": "out"}], "inputs": [{"type": "int256", "name": "blockHash"}]}, {"constant": false, "type": "function", "name": "getBlockchainHead()", "outputs": [{"type": "int256", "name": "out"}], "inputs": []}, {"constant": false, "type": "function", "name": "getChangeRecipientFee()", "outputs": [{"type": "int256", "name": "out"}], "inputs": []}, {"constant": false, "type": "function", "name": "getChainWork()", "outputs": [{"type": "int256", "name": "out"}], "inputs": []}, {"constant": false, "type": "function", "name": "getFeeAmount(int256)", "outputs": [{"type": "int256", "name": "out"}], "inputs": [{"type": "int256", "name": "blockHash"}]}, {"constant": false, "type": "function", "name": "getFeeRecipient(int256)", "outputs": [{"type": "int256", "name": "out"}], "inputs": [{"type": "int256", "name": "blockHash"}]}, {"constant": false, "type": "function", "name": "getLastBlockHeight()", "outputs": [{"type": "int256", "name": "out"}], "inputs": []}, {"constant": false, "type": "function", "name": "helperVerifyHash__(uint256,int256,int256[],int256)", "outputs": [{"type": "int256", "name": "out"}], "inputs": [{"type": "uint256", "name": "txHash"}, {"type": "int256", "name": "txIndex"}, {"type": "int256[]", "name": "sibling"}, {"type": "int256", "name": "txBlockHash"}]}, {"constant": false, "type": "function", "name": "inMainChain(int256)", "outputs": [{"type": "int256", "name": "out"}], "inputs": [{"type": "int256", "name": "txBlockHash"}]}, {"constant": false, "type": "function", "name": "relayTx(bytes,int256,int256[],int256,int256)", "outputs": [{"type": "int256", "name": "out"}], "inputs": [{"type": "bytes", "name": "txBytes"}, {"type": "int256", "name": "txIndex"}, {"type": "int256[]", "name": "sibling"}, {"type": "int256", "name": "txBlockHash"}, {"type": "int256", "name": "contract"}]}, {"constant": false, "type": "function", "name": "setInitialParent(int256,int256,int256)", "outputs": [{"type": "int256", "name": "out"}], "inputs": [{"type": "int256", "name": "blockHash"}, {"type": "int256", "name": "height"}, {"type": "int256", "name": "chainWork"}]}, {"constant": false, "type": "function", "name": "storeBlockHeader(bytes)", "outputs": [{"type": "int256", "name": "out"}], "inputs": [{"type": "bytes", "name": "blockHeaderBytes"}]}, {"constant": false, "type": "function", "name": "storeBlockWithFee(bytes,int256)", "outputs": [{"type": "int256", "name": "out"}], "inputs": [{"type": "bytes", "name": "blockHeaderBytes"}, {"type": "int256", "name": "feeWei"}]}, {"constant": false, "type": "function", "name": "storeBlockWithFeeAndRecipient(bytes,int256,int256)", "outputs": [{"type": "int256", "name": "out"}], "inputs": [{"type": "bytes", "name": "blockHeaderBytes"}, {"type": "int256", "name": "feeWei"}, {"type": "int256", "name": "feeRecipient"}]}, {"constant": false, "type": "function", "name": "verifyTx(bytes,int256,int256[],int256)", "outputs": [{"type": "uint256", "name": "out"}], "inputs": [{"type": "bytes", "name": "txBytes"}, {"type": "int256", "name": "txIndex"}, {"type": "int256[]", "name": "sibling"}, {"type": "int256", "name": "txBlockHash"}]}, {"constant": false, "type": "function", "name": "within6Confirms(int256)", "outputs": [{"type": "int256", "name": "out"}], "inputs": [{"type": "int256", "name": "txBlockHash"}]}, {"inputs": [{"indexed": true, "type": "int256", "name": "recipient"}, {"indexed": false, "type": "int256", "name": "amount"}], "type": "event", "name": "EthPayment(int256,int256)"}, {"inputs": [{"indexed": true, "type": "uint256", "name": "blockHash"}, {"indexed": true, "type": "int256", "name": "returnCode"}], "type": "event", "name": "GetHeader(uint256,int256)"}, {"inputs": [{"indexed": true, "type": "uint256", "name": "txHash"}, {"indexed": true, "type": "int256", "name": "returnCode"}], "type": "event", "name": "RelayTransaction(uint256,int256)"}, {"inputs": [{"indexed": true, "type": "uint256", "name": "blockHash"}, {"indexed": true, "type": "int256", "name": "returnCode"}], "type": "event", "name": "StoreHeader(uint256,int256)"}, {"inputs": [{"indexed": true, "type": "uint256", "name": "txHash"}, {"indexed": true, "type": "int256", "name": "returnCode"}], "type": "event", "name": "VerifyTransaction(uint256,int256)"}]
