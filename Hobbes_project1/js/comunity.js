$(document).ready(function(){
  var thehours = new Date().getHours();
  var themessage;
  var morning = 'Good morning, Smith';
  var afternoon = 'Good afternoon, Smith';
  var evening = 'Good evening, Smith';
  var night = 'Good night, Smith';

  if (thehours >= 0 && thehours < 12) {
    themessage = morning; 

  } else if (thehours >= 12 && thehours < 16) {
    themessage = afternoon;

  } else if (thehours >= 16 && thehours < 19) {
    themessage = evening;

  }else if (thehours >= 19 && thehours < 24){
    themessage = night;
  }
  $('.grtng').text(themessage);

// <-----Date and time----->
var date = new Date();
var n = date.toDateString();
var time = date.toLocaleTimeString();

document.getElementById('time').innerHTML = n + ' ' + time;


});



/*event.js*/


$(document).ready(function(){
  $("#show").hide();
  $("#shows").hide();
  $("#delta").show();
  $("#delt").mouseover(function(){
    $("#show").show();
    $("#shows").show();
    $("#delta").hide();
  });
  $("#delt").mouseout(function(){
    $("#show").hide();
    $("#shows").hide();
    $("#delta").show();
  });
  $("#show1").hide();
  $("#shows1").hide();
  $("#delta1").show();
  $("#delt1").mouseover(function(){
    $("#show1").show();
    $("#shows1").show();
    $("#delta1").hide();
  });
  $("#delt1").mouseout(function(){
    $("#show1").hide();
    $("#shows1").hide();
    $("#delta1").show();
  });
  $("#show2").hide();
  $("#shows2").hide();
  $("#delta2").show();
  $("#delt2").mouseover(function(){
    $("#show2").show();
    $("#shows2").show();
    $("#delta2").hide();
  });
  $("#delt2").mouseout(function(){
    $("#show2").hide();
    $("#shows2").hide();
    $("#delta2").show();
  });
  $("#show3").hide();
  $("#shows3").hide();
  $("#delta3").show();
  $("#delt3").mouseover(function(){
    $("#show3").show();
    $("#shows3").show();
    $("#delta3").hide();
  });
  $("#delt3").mouseout(function(){
    $("#show3").hide();
    $("#shows3").hide();
    $("#delta3").show();
  });
  
//  $("#show").hide();
//  $("#shows").hide();
//  $("#delta").show();
//  $("#delt").mouseover(function(){
//    $("#show").show();
//    $("#shows").show();
//    $("#delta").hide();
//   });
//  $("#delt").mouseout(function(){
//         $("#show").hide();
//    $("#shows").hide();
//    $("#delta").show();
//   });
// $("#delt1".click(function(){
//  $("#delt1").remove();
// });
});


/*cal.js*/


var vanillaCalendar = {
  month: document.querySelectorAll('[data-calendar-area="month"]')[0],
  next: document.querySelectorAll('[data-calendar-toggle="next"]')[0],
  previous: document.querySelectorAll('[data-calendar-toggle="previous"]')[0],
  label: document.querySelectorAll('[data-calendar-label="month"]')[0],
  activeDates: null,
  date: new Date(),
  todaysDate: new Date(),

  init: function (options) {
    this.options = options
    this.date.setDate(1)
    this.createMonth()
    this.createListeners()
  },

  createListeners: function () {
    var _this = this
    this.next.addEventListener('click', function () {
      _this.clearCalendar()
      var nextMonth = _this.date.getMonth() + 1
      _this.date.setMonth(nextMonth)
      _this.createMonth()
    })
    // Clears the calendar and shows the previous month
    this.previous.addEventListener('click', function () {
      _this.clearCalendar()
      var prevMonth = _this.date.getMonth() - 1
      _this.date.setMonth(prevMonth)
      _this.createMonth()
    })
  },

  createDay: function (num, day, year) {
    var newDay = document.createElement('div')
    var dateEl = document.createElement('span')
    dateEl.innerHTML = num
    newDay.className = 'vcal-date'
    newDay.setAttribute('data-calendar-date', this.date)

    // if it's the first day of the month
    if (num === 1) {
      if (day === 0) {
        newDay.style.marginLeft = (6 * 14.28) + '%'
      } else {
        newDay.style.marginLeft = ((day - 1) * 14.28) + '%'
      }
    }

    if (this.options.disablePastDays && this.date.getTime() <= this.todaysDate.getTime() - 1) {
      newDay.classList.add('vcal-date--disabled')
    } else {
      newDay.classList.add('vcal-date--active')
      newDay.setAttribute('data-calendar-status', 'active')
    }

    if (this.date.toString() === this.todaysDate.toString()) {
      newDay.classList.add('vcal-date--today')
    }

    newDay.appendChild(dateEl)
    this.month.appendChild(newDay)
  },

  dateClicked: function () {
    var _this = this
    this.activeDates = document.querySelectorAll(
      '[data-calendar-status="active"]'
      )
    for (var i = 0; i < this.activeDates.length; i++) {
      this.activeDates[i].addEventListener('click', function (event) {
        var picked = document.querySelectorAll(
          '[data-calendar-label="picked"]'
          )[0]
        picked.innerHTML = this.dataset.calendarDate
        _this.removeActiveClass()
        this.classList.add('vcal-date--selected')
      })
    }
  },

  createMonth: function () {
    var currentMonth = this.date.getMonth()
    while (this.date.getMonth() === currentMonth) {
      this.createDay(
        this.date.getDate(),
        this.date.getDay(),
        this.date.getFullYear()
        )
      this.date.setDate(this.date.getDate() + 1)
    }
    // while loop trips over and day is at 30/31, bring it back
    this.date.setDate(1)
    this.date.setMonth(this.date.getMonth() - 1)

    this.label.innerHTML =
    this.monthsAsString(this.date.getMonth()) + ' ' + this.date.getFullYear()
    this.dateClicked()
  },

  monthsAsString: function (monthIndex) {
    return [
    'January',
    'Febuary',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
    ][monthIndex]
  },

  clearCalendar: function () {
    vanillaCalendar.month.innerHTML = ''
  },

  removeActiveClass: function () {
    for (var i = 0; i < this.activeDates.length; i++) {
      this.activeDates[i].classList.remove('vcal-date--selected')
    }
  }
}
window.addEventListener('load', function () {
  vanillaCalendar.init({
    disablePastDays: true
  });
})



  
  // $('.hello').hide();
  // $('.clk').click(function(){
  //   $('.hello').show();
  //   $('.hi').hide();
  // });
  var hold = "";
  // var hold = $('.hide');
  $('.clk').click(function(){
    $('.hide').remove();
    $('.show').append(hold);
  });
$("#shows1").click(function(){
  $('#list3').remove();
});
$("#shows2").click(function(){
  $('#list2').remove();
});
$("#shows3").click(function(){
  $('#list1').remove();
});
$("#shows").click(function(){
  $('.event').remove();
});


$("#show").click(function(){
  $('.modal').modal();
});
$("#show1").click(function(){
  $('.modal').modal();
});
$("#show2").click(function(){
  $('.modal').modal();
});
$("#show3").click(function(){
  $('.modal').modal();
});


/*date validation */

// $( function() {
//     var dateFormat = "mm/dd/yy",
//       from = $( "#from" )
//         .datepicker({
//           defaultDate: "+1w",
//           changeMonth: true,
//           numberOfMonths: 3
//         })
//         .on( "change", function() {
//           to.datepicker( "option", "minDate", getDate( this ) );
//         }),
//       to = $( "#to" ).datepicker({
//         defaultDate: "+1w",
//         changeMonth: true,
//         numberOfMonths: 3
//       })
//       .on( "change", function() {
//         from.datepicker( "option", "maxDate", getDate( this ) );
//       });
 
//     function getDate( element ) {
//       var date;
//       try {
//         date = $.datepicker.parseDate( dateFormat, element.value );
//       } catch( error ) {
//         date = null;
//       }
 
//       return date;
//     }
//   } );
$(document).ready(function(){
  $("#from").datepicker();
});