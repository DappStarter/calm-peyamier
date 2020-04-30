require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom arena brave foot alien royal mad pudding grace muscle army gauge'; 
let testAccounts = [
"0xa06281b0b6dbdecaa3e085212be90cea94c5848c60ffa4c1d895614aab8e8149",
"0xce75906514f351d051b0ea5ae6ed2334e1260efc44b20e1f3e11d10d1f0be114",
"0x0a3650401b0516941264592b3d2bf1ccc777018bf63425bf54e17e5708ad8bb6",
"0x32f4ce178145b8bbff80b80def8a085efbd8240cf40cfa95ae1a3e93f354c879",
"0x29f4aaac016271ba54a7550acc0d1ee7aa9db7b8376974ad0b59b2502bf7d22d",
"0x395f6ab7647b72861de4093d2369a0d1811f54920fe09bd103a2c9a17bb80de5",
"0xc9a557801bcbf0773f913a3084300cb444e078f76506251657710b2bd9a9a111",
"0x599729e251bf3e6b2c622244d9278784a593c8b5bf898e3aeb2f1d52f059c3c2",
"0xb05bb5778e47dd7d63a8e39d9deb1c99085b5cae4cd0808e47d73bb491e95541",
"0x20781d040b102d8bd895ca8e6d050f0facd60d4eb14af7a0030933bcccbcb64f"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
