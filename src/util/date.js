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

    static formate(time,formation='YYYY-MM-dd HH:mm:ss'){
        if(!time){
            return '';
        }
        if(typeof time == 'string'){
            time = this.parseDate(time);
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

    static parse(input,formation){
        if(!input){
            throw 'input must be non-empty string!';
        }
        if(!formation){
            throw 'formation is essential when parse datetime!'
        }
        if(input.length !== formation.length){
            throw 'parse failed,check the formation!'
        }
        var getValue = function(f){
            var index = formation.indexOf(f);
            if(index > -1){
                return input.substr(index,f.length);
            }
            return null;
        }
        var now = new Date();
        var year = getValue('YYYY') || getValue('yyyy') || now.getFullYear();
        var month = getValue('MM')  || (now.getMonth()+1);
        var day = getValue('dd') || now.getDate();
        var hour = getValue('HH') || 0;
        var minute = getValue('mm') || 0;
        var second = getValue('ss') || 0;

        var d = new Date(year,month-1,day,hour,minute,second);
        return d;
    }

    static parseFromMultipleFormation(input,formations){
        if(!input){
            throw 'input must be non-empty string!';
        }
        if(!formations || !(formations instanceof Array) || formations.length < 1){
            throw 'parse failed, check the formations!'
        }
        for(var i=0;i<formations.length;i++){
            try{
                var d = this.parse(input,formations[i]);
                return d;
            }catch(e){

            }
        }
        return null;
    }
}

export  default DateUtil