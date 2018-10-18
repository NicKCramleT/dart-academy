$(document).ready(function(){
    $('#ms-countdown').countdown('2018/10/20 10:00:00', function(event) {
        $(this).html(event.strftime('<ul class="coming-date coming-date-black"><li>%D <span>Días</span></li><li class="colon">:</li><li>%H <span>Horas</span></li><li class="colon">:</li><li>%M <span>Minutos</span></li><li class="colon">:</li><li>%S <span>Segundos</span></li></ul>'));
    });
});
