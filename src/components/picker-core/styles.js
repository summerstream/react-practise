var styles = {
    container: {
        position: 'relative',
        width: '100%',
        height: '10rem',
        overflow:'hidden',
        zIndex:'4000'
    },
    mask: {
        background: 'linear-gradient(180deg,#fff,hsla(0,0%,100%,0.7) 39%,hsla(0,0%,100%,0) 40%,hsla(0,0%,100%,0) 61%,hsla(0,0%,100%,0.7) 62%,#fff)',
        zIndex: '4000',
        height: '100%',
        width: '100%',
        // position: 'absolute',
        // left: '-20px'
    },
    list: {
        listStyle: 'none',
        overflow: 'hidden',
        width: '100%',
        boxSizing: 'border-box',
        transform: 'translate3d(0px, 0px, 0px)'
    },
    item:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '1.2rem',
        height:'2rem',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden'
    },
    mark:{
        position:'absolute',
        top:'4rem',
        left:'0',
        width:'100%',
        height:'2rem',
        borderTop:'1px solid #dfdfdf',
        borderBottom:'1px solid #dfdfdf',
        boxSizing:'border-box'
    }

}

export default styles;