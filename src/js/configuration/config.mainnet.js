const nodeUrl = 'https://node.cardium.network';

export default {
    networkId: 'mainnet',
    displayName: 'Mainnet',
    apiBaseUrl: nodeUrl,
    useCustomRequestConfig: true,
    dataServicesBaseUrl: 'https://api.cardium.network/v0',
    spamListUrl: 'https://raw.githubusercontent.com/cardiumcoin/cardium-community/main/scam%20tokens%20according%20to%20ym%20community.csv',
    nodes: [{url: nodeUrl, maintainer: 'CARDIUM'}],
    dappsUrl: 'https://raw.githubusercontent.com/cardiumcoin/cardium-client-config/main/official_ym_dapps.json'
};
