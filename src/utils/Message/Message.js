
import toastr from "toastr"
import { EventBus, Const } from '../../map/UtilsMap'

function Message() {
    toastr.options.escapeHtml = true;

    EventBus.addListener(Const.events.wrongpassword.type, () => {
        toastr.clear()
        toastr.warning(Const.events.wrongpassword.message, 'Uyarı', {
            "closeButton": false,
            "debug": false,
            "newestOnTop": false,
            "progressBar": true,
            "positionClass": "toast-top-center",
            "preventDuplicates": false,
            "onclick": null,
            "showDuration": "300",
            "hideDuration": "1000",
            "timeOut": "3000",
            "extendedTimeOut": "1000",
            "showEasing": "swing",
            "hideEasing": "linear",
            "showMethod": "fadeIn",
            "hideMethod": "fadeOut"
        })
    })
}

export default Message