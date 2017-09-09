export const SEARCH = 'SEARCH'

export function search(keywords){
    return{
        type:SEARCH,
        keywords:keywords
    }
}