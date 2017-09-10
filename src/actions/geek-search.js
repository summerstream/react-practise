export const SEARCH = 'SEARCH'
export const REQUEST_SEARCH = 'REQUEST_SEARCH'
export const RECEIVE_SEARCH_RESULTS = 'RECEIVE_SEARCH_RESULTS'

export function requestSearch(){
    return {
        type:REQUEST_SEARCH
    }
}

export function receiveSearchResults(json){
     return{
         type:RECEIVE_SEARCH_RESULTS,
         json:json
     }
}

function fetchSearchResults(keywords,dispatch){
    var headers = new Headers();
    headers.append('Content-Type','application/x-www-form-urlencoded');
    headers.append('Accept','application/json, text/plain, */*');

    var url = `https://www.reddit.com/subreddits/search.json?q=${keywords}`;

    return fetch(url,{
        method:'GET',
        headers:headers,
        cache:'default'
    }).then((response)=>{
        return response.json();
    },(reason)=>{
        console.warn(reason);
    }).then((json)=>{
        var list = json.data.children.map((v)=>{
            return {
                title:v.data.title,
                summary:v.data.public_description,
                url:v.data.url
            }
        });
        dispatch(receiveSearchResults(list));

    }).catch((e)=>{
        console.error(e);
    });
}

export function search(keywords){
    return function(dispatch){
        dispatch(requestSearch());
        return fetchSearchResults(keywords,dispatch);
    }
}