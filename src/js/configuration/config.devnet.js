const nodeUrl = 'http://0.devnet.cardium.network:6869';
export default {
    networkId: 'devnet',
    displayName: 'Devnet',
    apiBaseUrl: nodeUrl,
    useCustomRequestConfig: false,
    nodes: [
        {url: nodeUrl, maintainer: 'CARDIUM', showAsLink: true},
        {url: 'http://1.devnet.cardium.network:6869', maintainer: 'CARDIUM', showAsLink: true},
        {url: 'http://2.devnet.cardium.network:6869', maintainer: 'CARDIUM', showAsLink: true},
        {url: 'http://3.devnet.cardium.network:6869', maintainer: 'CARDIUM', showAsLink: true},
        {url: 'http://4.devnet.cardium.network:6869', maintainer: 'CARDIUM', showAsLink: true},
        {url: 'http://5.devnet.cardium.network:6869', maintainer: 'CARDIUM', showAsLink: true},
        {url: 'http://6.devnet.cardium.network:6869', maintainer: 'CARDIUM', showAsLink: true}
    ]
};
