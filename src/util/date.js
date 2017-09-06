class DateUtil{
    static parse(str) {
        if (!str) return null;
        return new Date(str.replace(/-/g, "/"));
    }

    static formate(time,formation='YYYY-MM-dd HH:mm'){
        if(!time){
            return '';
        }
        if(typeof time == 'string'){
            time = this.parse(time);
        }
        if(! time instanceof Date){
            throw 'unrecognized date formation!';
        }
        var str  = '';
        var month = ('00'+(time.getMonth()+1)).slice(-2);
        var day = ('00'+time.getDate()).slice(-2);
        var hour = ('00'+time.getHours()).slice(-2);
        var minute = ('00'+time.getMinutes()).slice(-2);
        var seconds = ('00'+time.getSeconds()).slice(-2);
        return formation.replace(/YYYY/i,time.getFullYear())
            .replace(/MM/,month)
            .replace(/dd/,day)
            .replace(/HH/,hour)
            .replace(/mm/,minute)
            .replace(/ss/,seconds);
    }

    static getWeekName(time){
        if(!time){
            return '';
        }
        if(typeof time == 'string'){
            time = this.parse(time);
        }
        var weekName = ['日','一','二','三','四','五','六'];
        return '周'+weekName[time.getDay()];
    }
}

export  default DateUtil