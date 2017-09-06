var styles = {
    container: {
        background: 'white',
        // position:'fixed', bottom:'0',
        width: '100%',
        zIndex: '4000',
        // transform:'translate(0,100%)',
        // transition: 'all 3.3s'
    },
    group: {
        position: 'fixed',
        bottom: 0,
        width: '100%',
        zIndex: 4000
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: '#0076ff',
        height: '2rem',
        padding: '0 1rem'
    },
    body: {
        width: '100%',
        height: '100%',
        zIndex: '4000'
    },
    mask: {
        position: 'fixed',
        bottom: '0',
        left: '0',
        height: '100%',
        width: '100%',
        background: 'rgba(0,0,0,0)',
        zIndex: '3999',
        opacity: '0',
        transition: 'opacity 0.3s'
    }
};

export default styles;