//import Window from 'window';
//import URL from 'url';

export const getUrl = (hostname: string, port: number, pathname: string) => {
    const URL = require('url').URL;
    let b = getValidHostname(hostname);
    const u = new URL(b);
    u.port = port;
    u.pathname = pathname;
    return u.href;
};

export const getValidHostname = (hostname = "") => {
    var Window = require('window');
    const window = new Window();
    let newUrl = decodeURIComponent(hostname);
    newUrl = newUrl.trim().replace(/\s/g, "");

    if(/^(:\/\/)/.test(newUrl)){
        return `http${newUrl}`;
    }
    if(!/^(f|ht)tps?:\/\//i.test(newUrl)){
        return `http://${newUrl}`;
    }

    return newUrl;
};