﻿function bubuko_load(_id) {
    var str = '';
    if (_id == 'top_memu') {
        str = '<div class="margintop20bottom20" style="text-align: center;">' +
                '<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"><\/script>' +
                '<!-- bu-970x90 -->' +
                '<ins class="adsbygoogle"' +
                '     style="display:inline-block;width:970px;height:90px"' +
                '     data-ad-client="ca-pub-8616102841876629"' +
                '     data-ad-slot="4139540544"><\/ins>' +
                '<script>' +
                '     (adsbygoogle = window.adsbygoogle || []).push({});' +
                '<\/script>' +
               '<\/div>';
    }
    else if (_id == 'title_before') {
    }
    else if (_id == 'content_before') {
        str = '<div class="margintop20">' +
                '<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"><\/script>' +
                '<ins class="adsbygoogle"' +
                '     style="display:block; text-align:center;"' +
                '     data-ad-layout="in-article"' +
                '     data-ad-format="fluid"' +
                '     data-ad-client="ca-pub-8616102841876629"' +
                '     data-ad-slot="9753992635"><\/ins>' +
                '<script>' +
                '     (adsbygoogle = window.adsbygoogle || []).push({});' +
                '<\/script>' +
               '<\/div>';
    }
    else if (_id == 'content_after') {
        str ='<div style="margin:20px 0 0 0;">' +
                '<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"><\/script>' +
                '<!-- bu-690x250 -->' +
                '<ins class="adsbygoogle"' +
                '     style="display:inline-block;width:690px;height:250px"' +
                '     data-ad-client="ca-pub-8616102841876629"' +
                '     data-ad-slot="4296071765"><\/ins>' +
                '<script>' +
                '     (adsbygoogle = window.adsbygoogle || []).push({});' +
                '<\/script>' +
               '<\/div>'+
               '<div style="margin:20px 0;">' +
               '    <div class="_hy8m2td0icb"><\/div>' +
                '    <script type="text/javascript">' +
                '        (window.slotbydup = window.slotbydup || []).push({' +
                '            id: "u5824316",' +
                '            container: "_hy8m2td0icb",' +
                '            async: true' +
                '        });' +
                '    <\/script>' +
               '<\/div>';
    }
    else if (_id == 'comment_before') {
    str = '<div class="margintop20bottom20">' +
                '    <div class="divfloatleft">' +
                '        <div class="_gs6dtwzy5g"><\/div>' +
                '        <script type="text/javascript">' +
                '            (window.slotbydup = window.slotbydup || []).push({' +
                '                id: "u5824376",' +
                '                container: "_gs6dtwzy5g",' +
                '                async: true' +
                '            });' +
                '        <\/script>' +
                '    <\/div>' +
                '    <div class="divfloatright">' +
                '        <div class="_ugszajdrq9c"><\/div>' +
                '        <script type="text/javascript">' +
                '            (window.slotbydup = window.slotbydup || []).push({' +
                '                id: "u5824379",' +
                '                container: "_ugszajdrq9c",' +
                '                async: true' +
                '            });' +
                '        <\/script>' +
                '    <\/div>' +
                '    <div class="divfloatclear">' +
                '    <\/div>' +
                '<\/div>';
                
    }
    else if (_id == 'comment_after') {
    }
    else if (_id == 'right_top') {
        str = '<div>' +
                '<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"><\/script>' +
                '<!-- bu-right-top-300x600 -->' +
                '<ins class="adsbygoogle"' +
                '     style="display:inline-block;width:300px;height:600px"' +
                '     data-ad-client="ca-pub-8616102841876629"' +
                '     data-ad-slot="4971928148"><\/ins>' +
                '<script>' +
                '(adsbygoogle = window.adsbygoogle || []).push({});' +
                '<\/script>' +
                '<\/div>'+
                '<div class="margintop20bottom20">' +
                '    <div class="_7loagr5funt"><\/div>' +
                '    <script type="text/javascript">' +
                '        (window.slotbydup = window.slotbydup || []).push({' +
                '            id: "u5824321",' +
                '            container: "_7loagr5funt",' +
                '            async: true' +
                '        });' +
                '    <\/script>' +
                '    <script type="text/javascript" src="//cpro.baidustatic.com/cpro/ui/cm.js" async="async" defer="defer" >' +
                '    <\/script>' +
                '<\/div>';
    }
    else if (_id == 'right_bottom') {
        if (document.URL.indexOf("detail-") > -1) {                
            str = str+'<div id="xuanting" class="width300px margintop5">' +
                '<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"><\/script>' +
                '<!-- bu-right-bottom-300x600 -->' +
                '<ins class="adsbygoogle"' +
                '     style="display:inline-block;width:300px;height:600px"' +
                '     data-ad-client="ca-pub-8616102841876629"' +
                '     data-ad-slot="7849372928"><\/ins>' +
                '<script>' +
                '(adsbygoogle = window.adsbygoogle || []).push({});' +
                '<\/script>' +
                '<\/div>';
        }
    }
    else if (_id == 'bottom') {
        str = '';
    }
    else if (_id == 'jc_title_before') {
        str = '';
    }
    else if (_id == 'jc_content_before') {
        str = '<div class="margintop20">' +
                '<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"><\/script>' +
                '<ins class="adsbygoogle"' +
                '     style="display:block; text-align:center;"' +
                '     data-ad-layout="in-article"' +
                '     data-ad-format="fluid"' +
                '     data-ad-client="ca-pub-8616102841876629"' +
                '     data-ad-slot="9753992635"><\/ins>' +
                '<script>' +
                '     (adsbygoogle = window.adsbygoogle || []).push({});' +
                '<\/script>' +
               '<\/div>';
    }
    else if (_id == 'jc_content_after') {
        str = '<div class="margintop20bottom20">' +
                '<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"><\/script>' +
                '<!-- bu-690x250 -->' +
                '<ins class="adsbygoogle"' +
                '     style="display:inline-block;width:690px;height:250px"' +
                '     data-ad-client="ca-pub-8616102841876629"' +
                '     data-ad-slot="4296071765"><\/ins>' +
                '<script>' +
                '     (adsbygoogle = window.adsbygoogle || []).push({});' +
                '<\/script>' +
               '<\/div>';
    }
    else if (_id == 'jc_content_bottom') {
        str = '';
    }
    document.write(str);
}