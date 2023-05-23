

$(document).ready(function() {
    document.createElement('header');
    document.createElement('nav');
    document.createElement('menu');
    document.createElement('section');
    document.createElement('article');
    document.createElement('aside');
    document.createElement('footer');
    //language
    $('.all, .pt').hide();

    $('.optChinese').hide();
    
    $('.country-CN').hide();
    $('.country-SG').hide();
    $('#selectLanguage').attr('disabled', 'disabled');
    $('#selectLanguage').change(function(event) {
         console.log('changed language', $(this).val());
         
         if ($('#selectCountry').val() == 'CA' || $('#selectCountry').val() == 'SG') {
             $('li.all a').each(function(i,e) {
            
                 var href = $(e).attr('href');
               
                if ( (href.indexOf('e631600045') > -1) || (href.indexOf('e631600015') > -1) || (href.indexOf('e631600005') > -1) ) {
//                     console.log(href);
                    $(this).parent().css('visibility','hidden');
                }
             });
         }
        $('.all, .language-list h1').hide();
        $('.content-list li').hide();
        toggleLanguage(this.value);
    });

    //country
    $('#selectCountry').change(function(event) {
        // console.log('changed country', $(this).val());
        var countryCode = $(this).val();
        if ('all' == countryCode) {
            $('.country-specific').hide();
            $('.country-not-specific').show();
            $('.all').css('visibility','visible'); 
        } else {
            $('.country-' + countryCode).show();
            $('.country-not-' + countryCode).hide();
        }

        $('.all, .language-list h1').hide();
        $('.content-list li').hide();
        if ($('.prompt.' + this.value).length > 0) {
            $('.prompt.' + this.value).fadeIn('slow');
            $('#selectLanguage').attr('disabled', 'disabled');
        }
        else {
            $('.language-list h1').show();
            $('.pt').hide();
            $('#selectLanguage').removeAttr('disabled');
            toggleLanguage($('#selectLanguage').val());
        }


        if(countryCode === 'CN' || countryCode === 'SG'){
            $('.optChinese').show();
        } else {
            $('.optChinese').hide();
        }
        
        if (countryCode === 'CA' || countryCode === 'SG') {
            $('li.all a').each(function(i,e) {
            
                 var href = $(e).attr('href');
               
                if ( (href.indexOf('e631600045') > -1) || (href.indexOf('e631600015') > -1) || (href.indexOf('e631600005') > -1) ) {
//                     console.log(href);
                    $(this).parent().css('visibility','hidden');
                }
             });
        }
        
        

        if($('#selectLanguage').val() === 'chinese' && (countryCode !== 'CN' && countryCode !== 'SG')){
            $('#selectLanguage').val('all');
            $('.all, .language-list h1').hide();
            $('.content-list li').hide();
            toggleLanguage('all');

        }


    });

    $('.it').change(function(event) {
        $('.all, .language-list h1').hide();
        $('.prompt').fadeIn('slow');
    });

    $('.prompt .accept').click(function() {
        toggleLanguage($('#selectLanguage').val());
        $('#selectLanguage').removeAttr('disabled');
    });
    $('.prompt .reject').click(function() {
        $('.prompt-one').hide();
        $('.reject-message', $(this).parents('.prompt')).fadeIn('slow');
    });

});

function toggleLanguage(language) {
    if (language == 'all') return;
    $('.' + language).fadeIn('slow');
    $('.prompt').hide();
    $('.prompt-one').show();
    $('.reject-message').hide();

    $('.language-list h1').each(function() {
        if ($(this).next('ul').find('li:visible').length === 0) {
            $(this).hide();
        } else {
            $(this).show();
        }
    });
}