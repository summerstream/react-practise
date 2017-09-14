import {FORWARD, BACK} from './symbol'

const getUrl = (path)=>{
        var url = '';
        var base = window.location.origin;
        if (/https?\:\/\//i.test(path)) {
            url = path;
        } else {
            url = base + '/' + path;
        }
        return url;
}

const History = {
    forward: (path, data = {}) => {
        window.history.pushState(data, '', getUrl(path))
        window[FORWARD](path, data);
    },
    back: (path, data = {}) => {
        if(!path){
            window.history.back();
        }else{
            window.history.replaceState(data, '', getUrl(path))
            window[BACK](path, data);
        }
    },
    goTo: (path, data = {}) => {
        window.history.pushState(data, '', getUrl(path))
        window[FORWARD](path, data);
    },
}

export default History;