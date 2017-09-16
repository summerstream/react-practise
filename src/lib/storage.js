const Storage = {
    set(key,value,expiration=8640000000){//default expiration time is 100 days
        var data = {
            data:value,
            expiration:(new Date()).getTime()+expiration
        }
        window.localStorage.setItem(key, JSON.stringify(data))
    },
    get(key){
        var value = window.localStorage.getItem(key);
        if(value){
            value = JSON.parse(value)
            if(value.expiration > (new Date()).getTime()){
                return value.data;
            }else{
                window.localStorage.removeItem(key);
                return null;
            }
        }
        else{
            return null;
        }
    }
}

export default Storage