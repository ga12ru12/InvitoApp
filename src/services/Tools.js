import moment from 'moment';
import _ from 'lodash';
import I18n from '../i18n/I18n';

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
export function formatDate (time) {
  let timeDiffMinutes = moment().diff(moment(time), 'minutes');
  let timeDiffHours = moment().diff(moment(time), 'hours');
  let timeDiffDays = moment().diff(moment(time), 'days');
  let timeDiffWeeks = moment().diff(moment(time), 'weeks');
  if(timeDiffMinutes < 1)
    return I18n.t('justNow');
  if(timeDiffMinutes < 60)
    if (timeDiffMinutes==1) return timeDiffMinutes+' '+I18n.t('minuteago');
    else return timeDiffMinutes + ' ' + I18n.t('minutesago');
  if(timeDiffHours < 24)
    if (timeDiffHours==1) return timeDiffHours+' '+I18n.t('hourago');
    else return timeDiffHours + ' ' + I18n.t('hoursago');
  if(timeDiffDays<7)
  {
    if (timeDiffDays==1) return timeDiffDays+ ' '+I18n.t('dayago')
    else return timeDiffDays + ' ' + I18n.t('daysago');
  }
  if(timeDiffWeeks<4)
    if (timeDiffWeeks==1) return timeDiffWeeks+ ' '+I18n.t('weekago')
    else return timeDiffWeeks + ' ' + I18n.t('weeksago');
  return moment(time).format('hh:mm DD/MM/YY');
}

const randomGroupNums = (min, max, num, range, ratio, currentGroup) => {
    let newGroup = [];
    while(newGroup.length != num) {
    let newNum = getRandomIntWithRatio(min, max, range, ratio);
    newGroup.indexOf(newNum) == -1 && newGroup.push(newNum);
    }
    newGroup.sort();
    return currentGroup.join('|').search(newGroup.toString()) == -1 ? newGroup: this.randomGroupNums(min, max, num, currentGroup);
  }

const getRandomIntWithRatio = (min, max, range, ratio) => {
  return getRandomInt(0,100) > ratio ? getRandomInt(0, range? range: max) : getRandomInt(range? range: 0, max)
}

export default {
  sortByProp(prop, list =[]) {
    if(list.length == 0) return;
    return list.sort(function (a, b) {
      if (a[prop] > b[prop]) {
        return 1;
      }
      if (a[prop] < b[prop]) {
        return -1;
      }
      return 0;
    });
  },
  findIndexPointer(list, data) {

    if(!list) return -1;
    return list.findIndex( ( _data, index ) => {
      if (!_data) return -1;
      if ( data.objectId == _data.objectId ) {
        return index>-1;
      }
    });
  },
  filterByObjectId(list, data) {
    if(!list) return -1;
    return list.filter(( _data, index ) => {
      return _data.objectId == data.objectId
    });
  },
  randomGroupNums,
  randomArray(array = [], num) {
    let _array = randomGroupNums(0, array.length, 3, null, 50, []);
    return _array.map( (data) => { return array[data]});
    // return _.sample(array);
    // return _.sampleSize(array || [], num);
  },
  sortById(list) {
    if(!list) return -1;
    list.sort( (a, b) => {
      if(!a || !b) return -1;
      if (a.objectId < b.objectId) {
      return -1;
    }
    if (a.objectId > b.objectId) {
      return 1;
    }

    // names must be equal
    return 0;
    });
  },
  sortByProps(list, props) {
    if(!list) return ([]);
    let newList = list.sort( (a, b) => {
      if(!a || !b) return -1;
      if (this.change_alias(a[props]) < this.change_alias(b[props])) {
      return -1;
    }
    if (this.change_alias(a[props]) > this.change_alias(b[props])) {
      return 1;
    }

    // names must be equal
    return 0;
    });
    return newList;
  },
  validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
  },
  UpperCaseFirstChart(str) {
    return str[0].toUpperCase()+str.substring(1).toLowerCase();
  },
  converParseToJson(data) {
    return JSON.parse(JSON.stringify(data));
  },
  change_alias( alias ) {
    var str = alias;
    str= str.toLowerCase();
    str= str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ  |ặ|ẳ|ẵ/g,"a");
    str= str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e");
    str= str.replace(/ì|í|ị|ỉ|ĩ/g,"i");
    str= str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ  |ợ|ở|ỡ/g,"o");
    str= str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u");
    str= str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y");
    str= str.replace(/đ/g,"d");
    str= str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'| |\"|\&|\#|\[|\]|~|$|_/g,"-");
    str= str.replace(/-+-/g,"-");
    str= str.replace(/^\-+|\-+$/g,"");
    return str;
},
  validateName(name) {
	var re = /^[^0-9 *&^$#@!(){}\[\]\\//]+[^0-9*&^$#@!(){}\[\]\\//]+$/;
	return re.test(name);
  },
  getRandomInt
}
