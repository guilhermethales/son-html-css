var form = $('form');
form.submit(function(event) {
    event.preventDefault();
    var enviar = $('#btnEnviar');
    enviar.val('Aguarde...')
        .attr("disabled", true);
    $.ajax({
        type: form.attr('method'),
        url: form.attr('action'),
        data: form.serialize(),
        success: function() {
            alert('Email enviado com sucesso!');
            form.trigger('reset');

            enviar.val('Enviar')
                .attr("disabled", false);
        }
    });
});