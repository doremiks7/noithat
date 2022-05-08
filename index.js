$(document).ready(function () {

    let tamOpNhuaNgoaiTroi = [
        {"productName": "TẤM ỐP 121T9 COFFEE", "price": "51.000", "url":"image\\product\\tamopngoaitroi\\tamopngoaitroi1.jpg"},
        {"productName":"TẤM ỐP 121T9 TEAK","price": "51.000", "url": "image\\product\\tamopngoaitroi\\tamopngoaitroi2.jpg"},
        {"productName":"TẤM ỐP 121T9 WALNUT","price": "51.000", "url": "image\\product\\tamopngoaitroi\\tamopngoaitroi3.jpg"},
        {"productName":"TẤM ỐP 140T16 COFFEE","price": "51.000", "url": "image\\product\\tamopngoaitroi\\tamopngoaitroi4.jpg"},
        {"productName":"TẤM ỐP 140T16 TEAK","price": "51.000", "url": "image\\product\\tamopngoaitroi\\tamopngoaitroi5.jpg"},
        {"productName":"TẤM ỐP 2D 148T21 – COFFEE","price": "87.480", "url": "image\\product\\tamopngoaitroi\\tamopngoaitroi6.jpg"},
        {"productName":"TẤM ỐP 2D 148T21 – TEAK","price": "87.480", "url": "image\\product\\tamopngoaitroi\\tamopngoaitroi7.jpg"},
        {"productName":"TẤM ỐP 3D 148T21 TEAK","price": "95.000", "url": "image\\product\\tamopngoaitroi\\tamopngoaitroi8.jpg"},
        {"productName":"TẤM ỐP 3SN 204T16 – COFFEE","price": "90.000", "url": "image\\product\\tamopngoaitroi\\tamopngoaitroi9.jpg"},
        {"productName":"TẤM ỐP 3SN 204T16 – TEAK","price": "90.000", "url": "image\\product\\tamopngoaitroi\\tamopngoaitroi10.jpg"},
        {"productName":"TẤM ỐP 3SN 204T16 – WALNUT","price": "90.000", "url": "image\\product\\tamopngoaitroi\\tamopngoaitroi11.jpg"},
        {"productName":"TẤM ỐP 5SC 159T27 COFFEE","price": "90.000", "url": "image\\product\\tamopngoaitroi\\tamopngoaitroi12.jpg"},
    ]

    let tranlamgonhua = [
        {"productName":"TRẦN LAM GỖ TW100T40 TEAK","price": "90.000", "url": "image\\product\\tranlamgonhua\\tranlamgonhua1.jpg"},
        {"productName":"TRẦN LAM GỖ TW60T40 TEAK","price": "65.000", "url": "image\\product\\tranlamgonhua\\tranlamgonhua2.jpg"},
        {"productName":"TRẦN LAM GỖ TW60T40 WALNUT","price": "65.000", "url": "image\\product\\tranlamgonhua\\tranlamgonhua3.jpg"},
    ]

    let vaidantuongsoithuytinh = [
        {"productName":"Vải dán tường mẫu số 01","price": "1.500.000", "url": "image\\product\\vaidansoithuytinh\\vaidansoithuytinh1.jpg"},
        {"productName":"Vải dán tường mẫu số 02","price": "1.500.000", "url": "image\\product\\vaidansoithuytinh\\vaidansoithuytinh2.jpg"},
        {"productName":"Vải dán tường mẫu số 03","price": "1.500.000", "url": "image\\product\\vaidansoithuytinh\\vaidansoithuytinh3.jpg"},
        {"productName":"Vải dán tường mẫu số 04","price": "1.500.000", "url": "image\\product\\vaidansoithuytinh\\vaidansoithuytinh4.jpg"},
        {"productName":"Vải dán tường mẫu số 05","price": "1.500.000", "url": "image\\product\\vaidansoithuytinh\\vaidansoithuytinh5.jpg"},
        {"productName":"Vải dán tường mẫu số 06","price": "1.500.000", "url": "image\\product\\vaidansoithuytinh\\vaidansoithuytinh6.jpg"},
        {"productName":"Vải dán tường mẫu số 07","price": "1.500.000", "url": "image\\product\\vaidansoithuytinh\\vaidansoithuytinh7.jpg"},
        {"productName":"Vải dán tường mẫu số 08","price": "1.500.000", "url": "image\\product\\vaidansoithuytinh\\vaidansoithuytinh8.jpg"},
        {"productName":"Vải dán tường mẫu số 09","price": "1.500.000", "url": "image\\product\\vaidansoithuytinh\\vaidansoithuytinh9.jpg"},
        {"productName":"Vải dán tường mẫu số 10","price": "1.500.000", "url": "image\\product\\vaidansoithuytinh\\vaidansoithuytinh10.jpg"},
        {"productName":"Vải dán tường mẫu số 11","price": "1.500.000", "url": "image\\product\\vaidansoithuytinh\\vaidansoithuytinh11.jpg"},
        {"productName":"Vải dán tường mẫu số 12","price": "1.500.000", "url": "image\\product\\vaidansoithuytinh\\vaidansoithuytinh12.jpg"},
        {"productName":"Vải dán tường mẫu số 13","price": "1.500.000", "url": "image\\product\\vaidansoithuytinh\\vaidansoithuytinh13.jpg"},
        {"productName":"Vải dán tường mẫu số 14","price": "1.500.000", "url": "image\\product\\vaidansoithuytinh\\vaidansoithuytinh14.jpg"},
        {"productName":"Vải dán tường mẫu số 15","price": "1.500.000", "url": "image\\product\\vaidansoithuytinh\\vaidansoithuytinh15.jpg"},
        {"productName":"Vải dán tường mẫu số 16","price": "1.500.000", "url": "image\\product\\vaidansoithuytinh\\vaidansoithuytinh16.jpg"},
        {"productName":"Vải dán tường mẫu số 17","price": "1.500.000", "url": "image\\product\\vaidansoithuytinh\\vaidansoithuytinh17.jpg"},
        {"productName":"Vải dán tường mẫu số 18","price": "1.500.000", "url": "image\\product\\vaidansoithuytinh\\vaidansoithuytinh18.jpg"},
        {"productName":"Vải dán tường mẫu số 19","price": "1.500.000", "url": "image\\product\\vaidansoithuytinh\\vaidansoithuytinh19.jpg"},
        {"productName":"Vải dán tường mẫu số 20","price": "1.500.000", "url": "image\\product\\vaidansoithuytinh\\vaidansoithuytinh20.jpg"},
        {"productName":"Vải dán tường mẫu số 21","price": "1.500.000", "url": "image\\product\\vaidansoithuytinh\\vaidansoithuytinh21.jpg"},
        {"productName":"Vải dán tường mẫu số 22","price": "1.500.000", "url": "image\\product\\vaidansoithuytinh\\vaidansoithuytinh22.jpg"},
        {"productName":"Vải dán tường mẫu số 23","price": "1.500.000", "url": "image\\product\\vaidansoithuytinh\\vaidansoithuytinh23.jpg"},
        {"productName":"Vải dán tường mẫu số 24","price": "1.500.000", "url": "image\\product\\vaidansoithuytinh\\vaidansoithuytinh24.jpg"},
        {"productName":"Vải dán tường mẫu số 25","price": "1.500.000", "url": "image\\product\\vaidansoithuytinh\\vaidansoithuytinh25.jpg"},
        {"productName":"Vải dán tường mẫu số 26","price": "1.500.000", "url": "image\\product\\vaidansoithuytinh\\vaidansoithuytinh26.jpg"},
        {"productName":"Vải dán tường mẫu số 27","price": "1.500.000", "url": "image\\product\\vaidansoithuytinh\\vaidansoithuytinh27.jpg"},
        {"productName":"Vải dán tường mẫu số 28","price": "1.500.000", "url": "image\\product\\vaidansoithuytinh\\vaidansoithuytinh28.jpg"},
        {"productName":"Vải dán tường mẫu số 29","price": "1.500.000", "url": "image\\product\\vaidansoithuytinh\\vaidansoithuytinh29.jpg"},
        {"productName":"Vải dán tường mẫu số 30","price": "1.500.000", "url": "image\\product\\vaidansoithuytinh\\vaidansoithuytinh30.jpg"},
        {"productName":"Vải dán tường mẫu số 31","price": "1.500.000", "url": "image\\product\\vaidansoithuytinh\\vaidansoithuytinh31.jpg"},
        {"productName":"Vải dán tường mẫu số 32","price": "1.500.000", "url": "image\\product\\vaidansoithuytinh\\vaidansoithuytinh32.jpg"},
        {"productName":"Vải dán tường mẫu số 33","price": "1.500.000", "url": "image\\product\\vaidansoithuytinh\\vaidansoithuytinh33.jpg"},
        {"productName":"Vải dán tường mẫu số 34","price": "1.500.000", "url": "image\\product\\vaidansoithuytinh\\vaidansoithuytinh34.jpg"},
    ]

    let genHtmlTamOpNhuaNgoaiTroi = "";
    let genHtmltranlamgonhua = "";
    let genHtmlvaidantuongsoithuytinh = "";

    for (let i = 0; i < tamOpNhuaNgoaiTroi.length; i++) {
        genHtmlTamOpNhuaNgoaiTroi += "<div class=\"col-md-4 col-sm-6 col-xs-6 pro-loop \">\n" +
            "    <div class=\"product-block product-resize \">\n" +
            "        <div class=\"product-img \">\n" +
            "            <a href=\"/products/giay-vai-dan-tuong-ma-0101\" title=\""+ tamOpNhuaNgoaiTroi[i].productName +"\"\n" +
            "                class=\"image-resize ratiobox\">\n" +
            "                <picture>\n" +
            "                    <source media=\"(max-width: 480px)\"\n" +
            "                        data-srcset=\"" + tamOpNhuaNgoaiTroi[i].url + "\"\n" +
            "                        srcset=\"" + tamOpNhuaNgoaiTroi[i].url + "\" />\n" +
            "                    <source media=\"(min-width: 481px) and (max-width: 767px)\"\n" +
            "                        data-srcset=\"" + tamOpNhuaNgoaiTroi[i].url + "\"\n" +
            "                        srcset=\"" + tamOpNhuaNgoaiTroi[i].url + "\" />\n" +
            "                    <source media=\"(min-width: 768px)\"\n" +
            "                        data-srcset=\"" + tamOpNhuaNgoaiTroi[i].url + "\"\n" +
            "                        srcset=\"" + tamOpNhuaNgoaiTroi[i].url + "\" />\n" +
            "                    <img class=\"lazyload img-loop\" data-sizes=\"auto\"\n" +
            "                        data-src=\"" + tamOpNhuaNgoaiTroi[i].url + "\"\n" +
            "                        data-lowsrc=\"" + tamOpNhuaNgoaiTroi[i].url + "\"\n" +
            "                        src=\"" + tamOpNhuaNgoaiTroi[i].url + "\"\n" +
            "                        alt=\""+ tamOpNhuaNgoaiTroi[i].productName +" \" />\n" +
            "                </picture>\n" +
            "                <picture>\n" +
            "                    <source media=\"(max-width: 480px)\"\n" +
            "                        data-srcset=\"" + tamOpNhuaNgoaiTroi[i].url + "\"\n" +
            "                        srcset=\"" + tamOpNhuaNgoaiTroi[i].url + "\">\n" +
            "                    <source media=\"(min-width: 481px) and (max-width: 767px)\"\n" +
            "                        data-srcset=\"" + tamOpNhuaNgoaiTroi[i].url + "\"\n" +
            "                        srcset=\"" + tamOpNhuaNgoaiTroi[i].url + "\">\n" +
            "                    <source media=\"(min-width: 768px)\"\n" +
            "                        data-srcset=\"" + tamOpNhuaNgoaiTroi[i].url + "\"\n" +
            "                        srcset=\"" + tamOpNhuaNgoaiTroi[i].url + "\">\n" +
            "                    <img class=\"" + tamOpNhuaNgoaiTroi[i].url + "\"\n" +
            "                        data-src=\"" + tamOpNhuaNgoaiTroi[i].url + "\"\n" +
            "                        src=\"" + tamOpNhuaNgoaiTroi[i].url + "\"\n" +
            "                        alt=\""+ tamOpNhuaNgoaiTroi[i].productName +" \" />\n" +
            "                </picture>\n" +
            "            </a>\n" +
            "            <div class=\"button-add hidden\">\n" +
            "                <button type=\"submit\" title=\"Buy now\" class=\"action\" onclick=\"buy_now('1073726547')\">Mua ngay<i\n" +
            "                        class=\"fa fa-long-arrow-right\"></i></button>\n" +
            "            </div>\n" +
            "            <div class=\"pro-price-mb\">\n" +
            "\n" +
            "                <span class=\"pro-price\">"+ tamOpNhuaNgoaiTroi[i].price +"</span>\n" +
            "            </div>\n" +
            "        </div>\n" +
            "        <div class=\"product-detail clearfix\">\n" +
            "            <div class=\"box-pro-detail\">\n" +
            "                <h3 class=\"pro-name\">\n" +
            "                    <a href=\"/products/giay-vai-dan-tuong-ma-0101\" title=\""+ tamOpNhuaNgoaiTroi[i].productName +"\">\n" +
            "                        "+ tamOpNhuaNgoaiTroi[i].productName +"\n" +
            "                    </a>\n" +
            "                </h3>\n" +
            "                <div class=\"box-pro-prices\">\n" +
            "                    <p class=\"pro-price \">\n" +
            "                        <span>"+ tamOpNhuaNgoaiTroi[i].price +"</span>\n" +
            "                    </p>\n" +
            "                </div>\n" +
            "            </div>\n" +
            "        </div>\n" +
            "    </div>\n" +
            "</div>";
    }

    $("#tamOpNgoaiTroi").empty().html(genHtmlTamOpNhuaNgoaiTroi);

    for (let i = 0; i < tranlamgonhua.length; i++) {
        genHtmltranlamgonhua += "<div class=\"col-md-4 col-sm-6 col-xs-6 pro-loop \">\n" +
            "    <div class=\"product-block product-resize \">\n" +
            "        <div class=\"product-img \">\n" +
            "            <a href=\"/products/giay-vai-dan-tuong-ma-0101\" title=\"" + tranlamgonhua[i].productName + "\"\n" +
            "                class=\"image-resize ratiobox\">\n" +
            "                <picture>\n" +
            "                    <source media=\"(max-width: 480px)\"\n" +
            "                        data-srcset=\"" + tranlamgonhua[i].url + "\"\n" +
            "                        srcset=\"" + tranlamgonhua[i].url + "\" />\n" +
            "                    <source media=\"(min-width: 481px) and (max-width: 767px)\"\n" +
            "                        data-srcset=\"" + tranlamgonhua[i].url + "\"\n" +
            "                        srcset=\"" + tranlamgonhua[i].url + "\" />\n" +
            "                    <source media=\"(min-width: 768px)\"\n" +
            "                        data-srcset=\"" + tranlamgonhua[i].url + "\"\n" +
            "                        srcset=\"" + tranlamgonhua[i].url + "\" />\n" +
            "                    <img class=\"lazyload img-loop\" data-sizes=\"auto\"\n" +
            "                        data-src=\"" + tranlamgonhua[i].url + "\"\n" +
            "                        data-lowsrc=\"" + tranlamgonhua[i].url + "\"\n" +
            "                        src=\"" + tranlamgonhua[i].url + "\"\n" +
            "                        alt=\"" + tranlamgonhua[i].productName + "\" />\n" +
            "                </picture>\n" +
            "                <picture>\n" +
            "                    <source media=\"(max-width: 480px)\"\n" +
            "                        data-srcset=\"" + tranlamgonhua[i].url + "\"\n" +
            "                        srcset=\"" + tranlamgonhua[i].url + "\">\n" +
            "                    <source media=\"(min-width: 481px) and (max-width: 767px)\"\n" +
            "                        data-srcset=\"" + tranlamgonhua[i].url + "\"\n" +
            "                        srcset=\"" + tranlamgonhua[i].url + "\">\n" +
            "                    <source media=\"(min-width: 768px)\"\n" +
            "                        data-srcset=\"" + tranlamgonhua[i].url + "\"\n" +
            "                        srcset=\"" + tranlamgonhua[i].url + "\">\n" +
            "                    <img class=\"" + tranlamgonhua[i].url + "\"\n" +
            "                        data-src=\"" + tranlamgonhua[i].url + "\"\n" +
            "                        src=\"" + tranlamgonhua[i].url + "\"\n" +
            "                        alt=\"" + tranlamgonhua[i].productName + "\" />\n" +
            "                </picture>\n" +
            "            </a>\n" +
            "            <div class=\"button-add hidden\">\n" +
            "                <button type=\"submit\" title=\"Buy now\" class=\"action\" onclick=\"buy_now('1073726547')\">Mua ngay<i\n" +
            "                        class=\"fa fa-long-arrow-right\"></i></button>\n" +
            "            </div>\n" +
            "            <div class=\"pro-price-mb\">\n" +
            "\n" +
            "                <span class=\"pro-price\">" + tranlamgonhua[i].price + "₫</span>\n" +
            "            </div>\n" +
            "        </div>\n" +
            "        <div class=\"product-detail clearfix\">\n" +
            "            <div class=\"box-pro-detail\">\n" +
            "                <h3 class=\"pro-name\">\n" +
            "                    <a href=\"/products/giay-vai-dan-tuong-ma-0101\" title=\"" + tranlamgonhua[i].productName + "\">\n" +
            "                        " + vaidantuongsoithuytinh[i].productName + "\n" +
            "                    </a>\n" +
            "                </h3>\n" +
            "                <div class=\"box-pro-prices\">\n" +
            "                    <p class=\"pro-price \">\n" +
            "                        <span>" + tranlamgonhua[i].price + "₫</span>\n" +
            "                    </p>\n" +
            "                </div>\n" +
            "            </div>\n" +
            "        </div>\n" +
            "    </div>\n" +
            "</div>";

            
    }
    
    $("#tranlamgonhua").empty().html(genHtmltranlamgonhua);


    for (let i = 0; i < vaidantuongsoithuytinh.length; i++) {
        genHtmlvaidantuongsoithuytinh += "<div class=\"col-md-4 col-sm-6 col-xs-6 pro-loop \">\n" +
            "    <div class=\"product-block product-resize \">\n" +
            "        <div class=\"product-img \">\n" +
            "            <a href=\"/products/giay-vai-dan-tuong-ma-0101\" title=\"" + vaidantuongsoithuytinh[i].productName + "\"\n" +
            "                class=\"image-resize ratiobox\">\n" +
            "                <picture>\n" +
            "                    <source media=\"(max-width: 480px)\"\n" +
            "                        data-srcset=\"" + vaidantuongsoithuytinh[i].url + "\"\n" +
            "                        srcset=\"" + vaidantuongsoithuytinh[i].url + "\" />\n" +
            "                    <source media=\"(min-width: 481px) and (max-width: 767px)\"\n" +
            "                        data-srcset=\"" + vaidantuongsoithuytinh[i].url + "\"\n" +
            "                        srcset=\"" + vaidantuongsoithuytinh[i].url + "\" />\n" +
            "                    <source media=\"(min-width: 768px)\"\n" +
            "                        data-srcset=\"" + vaidantuongsoithuytinh[i].url + "\"\n" +
            "                        srcset=\"" + vaidantuongsoithuytinh[i].url + "\" />\n" +
            "                    <img class=\"lazyload img-loop\" data-sizes=\"auto\"\n" +
            "                        data-src=\"" + vaidantuongsoithuytinh[i].url + "\"\n" +
            "                        data-lowsrc=\"" + vaidantuongsoithuytinh[i].url + "\"\n" +
            "                        src=\"" + vaidantuongsoithuytinh[i].url + "\"\n" +
            "                        alt=\"" + vaidantuongsoithuytinh[i].productName + "\" />\n" +
            "                </picture>\n" +
            "                <picture>\n" +
            "                    <source media=\"(max-width: 480px)\"\n" +
            "                        data-srcset=\"" + vaidantuongsoithuytinh[i].url + "\"\n" +
            "                        srcset=\"" + vaidantuongsoithuytinh[i].url + "\">\n" +
            "                    <source media=\"(min-width: 481px) and (max-width: 767px)\"\n" +
            "                        data-srcset=\"" + vaidantuongsoithuytinh[i].url + "\"\n" +
            "                        srcset=\"" + vaidantuongsoithuytinh[i].url + "\">\n" +
            "                    <source media=\"(min-width: 768px)\"\n" +
            "                        data-srcset=\"" + vaidantuongsoithuytinh[i].url + "\"\n" +
            "                        srcset=\"" + vaidantuongsoithuytinh[i].url + "\">\n" +
            "                    <img class=\"" + vaidantuongsoithuytinh[i].url + "\"\n" +
            "                        data-src=\"" + vaidantuongsoithuytinh[i].url + "\"\n" +
            "                        src=\"" + vaidantuongsoithuytinh[i].url + "\"\n" +
            "                        alt=\"" + vaidantuongsoithuytinh[i].productName + "\" />\n" +
            "                </picture>\n" +
            "            </a>\n" +
            "            <div class=\"button-add hidden\">\n" +
            "                <button type=\"submit\" title=\"Buy now\" class=\"action\" onclick=\"buy_now('1073726547')\">Mua ngay<i\n" +
            "                        class=\"fa fa-long-arrow-right\"></i></button>\n" +
            "            </div>\n" +
            "            <div class=\"pro-price-mb\">\n" +
            "\n" +
            "                <span class=\"pro-price\">" + vaidantuongsoithuytinh[i].price + "₫</span>\n" +
            "            </div>\n" +
            "        </div>\n" +
            "        <div class=\"product-detail clearfix\">\n" +
            "            <div class=\"box-pro-detail\">\n" +
            "                <h3 class=\"pro-name\">\n" +
            "                    <a href=\"/products/giay-vai-dan-tuong-ma-0101\" title=\"" + vaidantuongsoithuytinh[i].productName + "\">\n" +
            "                        " + vaidantuongsoithuytinh[i].productName + "\n" +
            "                    </a>\n" +
            "                </h3>\n" +
            "                <div class=\"box-pro-prices\">\n" +
            "                    <p class=\"pro-price \">\n" +
            "                        <span>" + vaidantuongsoithuytinh[i].price + "₫</span>\n" +
            "                    </p>\n" +
            "                </div>\n" +
            "            </div>\n" +
            "        </div>\n" +
            "    </div>\n" +
            "</div>";

            
    }
    
    $("#vaidantuongsoithuytinh").empty().html(genHtmlvaidantuongsoithuytinh);
});

