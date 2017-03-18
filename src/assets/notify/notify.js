/* developed by morfat mosoti ogega
 * on 18th September 2015
 *
 * This requires toastr.js so make sure it exists.
 * more http://codeseven.github.io/toastr/demo.html
 http://codeseven.github.io/toastr/
 other config
 http://www.johnpapa.net/toastr-2-0-1-released/
 * */


var message_options={
  "closeButton": true,
  "debug": false,
  "newestOnTop": false,
  "progressBar": true,
  "positionClass": "toast-top-right",
  "preventDuplicates": false,
  "onclick": null,
  "showDuration": "300",
  "hideDuration": "1000",
  "timeOut": "5000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "slideDown",
  "hideMethod": "slideUp"
};

var sticky_options= {
  "closeButton": true,
  "debug": false,
  "newestOnTop": false,
  "progressBar": true,
  "positionClass": "toast-bottom-right",
  "preventDuplicates": false,
  "onclick": null,
  "showDuration": "300",
  "hideDuration": "1000",
  "timeOut": 10000, 
  "extendedTimeOut": 1000,
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "slideDown",
  "hideMethod": "slideUp",
  "tapToDismiss": false
}

var progress_options= {
  "closeButton": true,
  "debug": false,
  "newestOnTop": false,
  "progressBar": true,
  "positionClass": "toast-top-center",
  "preventDuplicates": false,
  "onclick": null,
  "showDuration": "300",
  "hideDuration": "1000",
  "timeOut": 10000, 
  "extendedTimeOut": 1000,
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "slideDown",
  "hideMethod": "slideUp",
  "tapToDismiss": false
}

function notify(message_type,message_heading,message_content) {
    return toastr[message_type](message_content,message_heading,message_options);
}
function sticky_notify(message_type,message_heading,message_content) {
    return toastr[message_type](message_content,message_heading,sticky_options);
}

function progressBar(message) {
    return toastr['warning'](message,'Progress',progress_options);
}