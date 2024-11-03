import React from 'react';

const socialLinks = [{
    id: 'github',
    url: 'https://github.com/cardiumcoin/'
}, {
    id: 'twitter',
    url: 'https://twitter.com/'
}, {
    id: 'facebook',
    url: 'https://www.facebook.com/'
}, {
    id: 'discord',
    url: 'https://discord.gg/'
}, {
    id: 'telegram',
    url: 'https://telegram.me/'
}, {
    id: 'reddit',
    url: 'https://reddit.com/'
}];

const Footer = ({version}) => {
    return (
        <div className="menu-footer">
            <div>Version: {version.replace("Waves","CARDIUM")}</div>
            <div>Brought to you by CARDIUM Team</div>
            <div>
                {socialLinks.map(item =>
                    (<a key={item.id} className={`social ${item.id}`} href={item.url} target="_blank"></a>))}
            </div>
            <div>
                <a className="fade" href="https://cardium.network/" target="_blank">cardium.network</a>
            </div>
        </div>
    );
}

export default Footer;
