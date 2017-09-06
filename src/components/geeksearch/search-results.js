import React from 'react'

const SearchResults = ({list=[]})=>(
    <div>
        {
            list.map((v)=>(
                <Result title={v.title} summary={v.summary} url={v.url} />
            ))
        }
    </div>
)

const Result=({title,summary,url})=>(
    <div>
        <h2>
            <a target="_blank" href="#" >{title}</a>    
        </h2>
        <p>{summary}</p>
    </div>
)

export default SearchResults