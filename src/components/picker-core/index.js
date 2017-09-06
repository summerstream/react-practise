import React, { Component } from 'react';
import styles from './styles.js';

class PickerCore extends Component{
    constructor(props){
        super(props);

        this._startPosition = 0;
        this._dist = 0;
        this._translateY = 0;
        this._initValue = this.props.current;
        this._current = this.props.current;
        this._eventType = 'touch';
        this._eventState=0;//0:initial 1:has started 2:has moved
        this._mouseMoveAllowed = false;
        Object.assign(styles.container, this.props.containerStyle);
        Object.assign(styles.item, this.props.itemStyle);
        this.start = this.start.bind(this);
        this.move = this.move.bind(this);
        this.stop = this.stop.bind(this);
    }
    start(e){
        // console.info('picker start');
        this._eventState = 1;
        if(e.pageY){
            this._eventType = 'mouse';
            this._mouseMoveAllowed = true;
        }else{
            this._eventType = 'touch';
        }
        this._startPosition = e.targetTouches && e.targetTouches[0].pageY || e.pageY;
        this.refs.list.style.transition = 'none';
        this._beginTime = (new Date()).getTime();
    }
    move(e){
        if(e.pageY && !this._mouseMoveAllowed){
            return;
        }
        // console.info('picker move');
        this._eventState = 2;
        if(this._eventType == 'mouse'){
            e.preventDefault();

        }
        e.stopPropagation();
        var dist = (e.targetTouches && e.targetTouches[0].pageY || e.pageY) - this._startPosition;
        this._dist = dist;
        // console.info('move _translateY:'+this._translateY);
        // console.info('move dist:'+dist);
        var y = this._translateY + dist;
        
        if(y>this._scrollRange[0]){
            y = this._scrollRange[0]+this.getBezier(y-this._scrollRange[0]);
        }else if(y<this._scrollRange[1]){
            y = this._scrollRange[1]-this.getBezier(this._scrollRange[1] - y);
        }
        // console.info(`move y:${y}`);
        this.refs.list.style.transform = 'translate3d(0px, '+y+'px, 0px)';
    }
    getBezier(x){
        var ratio = 0.5;
        var delta = (2*this._itemHeight);
        var y = 0;
        if(x>delta){
                y = ratio*delta+0.3*(x-delta);
        }else{
            var a = (0-ratio) /(delta);
            var b = -2*a*delta;
            y = a*x*x+b*x;
        }
        return y;
    }
    stop(e){
        // console.info('picker stop');
        this._mouseMoveAllowed = false;
        if(this._eventState == 0){
            return;
        }
        this._eventState = 0;
        var itemHeight = this._itemHeight;
        this._translateY += this._dist;
        var now = (new Date()).getTime();
        var touchTime = now - this._beginTime;
        touchTime*=0.001;
        var capacity = Math.round(this._boxHeight/itemHeight);
        var halfCapacity = Math.floor(capacity/2);
        if(Math.abs(this._dist) > itemHeight){
            var speed = this._dist/touchTime;
            speed *= 0.5;
            var a = 500;
            var animTime = Math.abs(speed/a);
            var distance = speed*speed/(2*a)*(speed>0?1:-1);
            this._translateY += distance;
        }else{
            animTime = 0.3;
        }
        var y = this._translateY;
        var ys = (y/itemHeight).toFixed(0);

        this._current = halfCapacity - ys;
        var overflow = false;
        if(this._current < 0){//超出上界
            // console.info('超出上界');
            ys=halfCapacity;
            this._current = 0;
            overflow = true;
        }
        if(this._current >= this.props.dataSource.length){//超出下界
            overflow = true;
            ys =0 -(this.props.dataSource.length -halfCapacity-1);
            // console.info('超出下界 ys:'+ys);
            this._current = this.props.dataSource.length-1;
        }
        y = ys*itemHeight;
        this._translateY = y;
        // console.info(`stop move y:${y}`);
        this.refs.list.style.transform = 'translate3d(0px,'+this._translateY+'px,0px)';

        this.refs.list.style.transition = 'all ,'+(overflow ? '0.3':animTime)+'s';
        this.refs.list.style.transitionTimingFunction = 'cubic-bezier(0.1, 0.57, 0.1, 1)';
        this.props.onChanged && this.props.onChanged(this._current);
    }
    // ListItem(props){
    //     return <div key={props.key} style={styles.item}>props..value</div>
    // }
    scrollTo(index){
        this._current = index;
        var y = (2-index)*this._itemHeight;
        this._translateY = y;
        // console.info(`scrollTo y:${y}`);
        this.refs.list.style.transform = 'translate3d(0px,'+y+'px,0px)';
        this.refs.list.style.transition = 'all 0.3s';
        this.refs.list.style.transitionTimingFunction = 'cubic-bezier(0.1, 0.57, 0.1, 1)';
    }
    componentWillReceiveProps(nextProps){
        if(this._current>nextProps.dataSource.length){
            this.scrollTo(0);
        }
    }
    
    componentDidUpdate(prevProps){
        if(this.props.current != prevProps.current){//init value changed
            this.scrollTo(this.props.current);
        }
        this.resetScrollRange();
    }

    resetScrollRange(){
        var boxHeight = this._boxHeight = this.refs.box.clientHeight;
        var itemHeight = this._itemHeight = this.refs.list.firstChild.clientHeight;
        this._scrollRange = [boxHeight/2 -itemHeight/2,boxHeight/2 +itemHeight/2-this.refs.list.clientHeight];
        return this._scrollRange;
    }

    componentDidMount(){
       var boxHeight = this._boxHeight = this.refs.box.clientHeight;
       var itemHeight = this._itemHeight = this.refs.list.firstChild.clientHeight;
       var y = boxHeight/2 -itemHeight/2 - itemHeight*this._current;
       this._translateY = y;
       this.refs.list.style.transform = 'translate3d(0px,'+y+'px,0px)';
        setTimeout(()=>{
            //    console.info('reflush');
            this.refs.mask.style.position = 'relative';
            this.refs.mask.style.position = 'absolute';
        }, 80);
        this.resetScrollRange();
        this._mounted = true;
    }
    render(){
        if(this._mounted){
        this.refs.mask.style.position = 'absolute';

        }
        var list = this.props.dataSource.map((item,k)=>{
                            return <div key={k} style={styles.item}>{item}</div>
                        });
        return (
            <div ref="box" style={Object.assign({},styles.container,this.props.style)} 
                onTouchStart={this.start} onMouseDown={this.start} 
                onTouchMove={this.move} onMouseMove={this.move} 
                onTouchEnd={this.stop} onMouseUp={this.stop} onMouseLeave={this.stop} >
                <div ref="mask" style={styles.mask}  />
                <div style={styles.mark} />
                <div style={styles.list} ref="list">
                    {list}
                </div>
            </div>
        );
    }
}

export default PickerCore;