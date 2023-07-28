$(window).scroll(function () {
    if($(window).scrollTop() > 30) {
      $(".navbar").addClass('fixed-top bg-white').removeClass('bg-transparent');
    } else {
      $(".navbar").removeClass('fixed-top bg-white').addClass('bg-transparent');
    }
  });  
// $(document).ready(function(){
//     result = confirm('Are you ready?');
//     if(result){
//         alert('welcome');

//     }else{
//         alert('Be ready');

//     }
// });