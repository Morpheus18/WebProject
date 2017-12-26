/**
 * Created by sawe1 on 02.05.2017.
 */

jQuery(document).ready(function() {
    jQuery('.end_news').addClass("hiddens").viewportChecker({
        classToAdd: 'visibles animated infinite bounceIn',
        offset: 100
    });

    jQuery('#headerwrap').addClass("hiddens").viewportChecker({
        classToAdd: 'visibles animated infinite bounceInLeft',
        offset: 100
    });

    jQuery('.startgame').addClass("hiddens").viewportChecker({
        classToAdd: 'visibles animated infinite fadeInRightBig',
        offset: 50
    });

    jQuery('.anims').addClass("hiddens").viewportChecker({
        classToAdd: 'visibles animated infinite pulse',
        offset: 100
    });
    jQuery('.vkanim').addClass("hiddens").viewportChecker({
        classToAdd: 'visibles animated infinite swing',
        offset: 100
    });
    jQuery('.vkontakte').addClass("hiddens").viewportChecker({
        classToAdd: 'visibles animated infinite bounceInLeft',
        offset: 100
    });


});