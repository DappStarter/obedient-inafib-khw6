require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt basket flip spot finger deliver remember column gesture crew flat genius'; 
let testAccounts = [
"0xfe69ee90beb7c6b4e8930317512feba3f0a1dfb3bbe6f3eb9634e2df4ad388d2",
"0x2a6c939296c4c395302362bc1eea8c55dbb6e83060c6dfa0772b1915c7171da4",
"0xaf385681944bf7434e6e54f4f5279c1ed3728247b07dd8485d46521509d71da7",
"0x0fb275f4dd84a0b01d25a6f036efa339b71351178c84087295ce0e9060cf39fa",
"0xecf0148a25b86354ad0f1c07d0b5523939608ac0919a99e9d22dd5b635f66c9a",
"0xe73a2b4d46f671513ea6b583d6f73a2bda30794d25e74daf6243205125af0742",
"0x9a1bf5cee97477d42deebb28ba0ee6c8cdceabeb03b8731cd5da36d9a14daea4",
"0x96d8fa835a9cfb3503585a75a2d35a6a2fde9a4badf80046e122d484df589ace",
"0x43af16745ef81ac9907137f8d570d964994470d2d00a6b0579bc9066ca67f3a2",
"0xebeafc4d33f635a3ff12fe34614a4b763e7ef327a1ee5bacd04061ca2ae11b54"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 3000000,
            gasPrice: 470000000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


