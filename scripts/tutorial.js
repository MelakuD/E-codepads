$(function(){
     //to show the content of course
     $('.wrapper .courseside .btn').each(function(){
          $(this).on('click', function(){
               $('.content .contentfor').each(function(){
                    $(this).css('visibility','hidden');
               });
               var $item = $(this).text();
               switch($item){
                    case "HTML":
                         $('#html').css('visibility','visible');
                         break;
                    case "CSS":
                         $('#css').css('visibility','visible');
                         break;
                    case "JAVASCRIPT":
                         $('#js').css('visibility','visible');
                         break;
                    case "JQUERY":
                         $('#html').css('visibility','visible');
                         break;
                    case "Python":
                         $('#python').css('visibility','visible');
                         break;
                    case "C++":
                         $('#cpp').css('visibility','visible');
                         break;
                    case "JAVA":
                         $('#java').css('visibility','visible');
                         break;
                    case "DATASCIENCE":
                         $('#DS').css('visibility','visible');
                         break;
               }
          });
     });
     // to show the note of each title
     
});