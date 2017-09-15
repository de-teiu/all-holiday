
window.onload = function() {
  //当月を取得
  var today = new Date();
  var year = today.getFullYear();
  var month = today.getMonth()+ 1;

  var startDate = getStartDate(year,month);
  var row = createRow(startDate,month);

  new Vue({
    el: '#calendar',
    data: {
      year:year,
      month:month,
      weekList: ['日','月','火','水','木','金','土'],
      list: row,
    },
    methods: {
      shift:function(val){
        if('back'===val){
          this.month = (this.month===1)?12:this.month-1;
          this.year = (this.month===12)?this.year-1:this.year;
        }else{
          this.month = (this.month===12)?1:this.month+1;
          this.year = (this.month===1)?this.year+1:this.year;
        }
        this.list = updateRow(this.year,this.month);
      },
      padLeft:function(val){
        return padLeft(val);
      }
    }
  });
};

/** 年月からカレンダーの開始日を取得 */
function getStartDate(year,month){
  //月の開始日を取得
  var date = new Date(year + '/' + month + '/' + '01');
  //曜日を取得
  var day = date.getDay();
  //カレンダーの開始日が日曜日になるようにするため、
  //月の開始日から曜日値を引く
  date.setDate(date.getDate() - day);
  //console.log(date);
  return date;
}

/** 日付リストを生成 */
function createRow(date,targetMonth){
  var row = [];
  for(var i=0;i<42;i++){
    row.push({
      date:date.getDate(),
      anniv:getAnniversary(padLeft(date.getMonth()+1) + padLeft(date.getDate())),
      six:'大安',
      isNotThisMonth: date.getMonth()+1 != targetMonth,
    });
    date.setDate(date.getDate() + 1);
  }
  return row;
}

/** 指定した年月で画面更新 */
function updateRow(year,month){
  //カレンダーの開始日を取得
  var startDate = getStartDate(year,padLeft(month));
  var row = createRow(startDate,month);
  return row;
}

/** 2桁になるように左ゼロ埋め */
function padLeft(val){
  return ( '00'  + val ).slice( -2 );
}
