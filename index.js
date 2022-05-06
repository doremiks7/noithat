$(document).ready(function () {

    let tamOpNhuaNgoaiTroi = [
        "image\\product\\tamopngoaitroi\\tamopngoaitroi1.jpg",
        "image\\product\\tamopngoaitroi\\tamopngoaitroi2.jpg",
        "image\\product\\tamopngoaitroi\\tamopngoaitroi3.jpg"
    ]

    let tranlamgonhua = [
        "image\\product\\tranlamgonhua\\tranlamgonhua1.jpg",
        "image\\product\\tranlamgonhua\\tranlamgonhua2.jpg",
        "image\\product\\tranlamgonhua\\tranlamgonhua3.jpg"
    ]

    let genHtmlTamOpNhuaNgoaiTroi = "";
    let genHtmltranlamgonhua = "";

    for (let i = 0; i < tamOpNhuaNgoaiTroi.length; i++) {
        genHtmlTamOpNhuaNgoaiTroi += "<div class=\"col-md-4 col-sm-6 col-xs-6 pro-loop \">\n" +
            "    <div class=\"product-block product-resize \">\n" +
            "        <div class=\"product-img \">\n" +
            "            <a href=\"/products/giay-vai-dan-tuong-ma-0101\" title=\"Giấy vải dán tường ( Mã 0101 )\"\n" +
            "                class=\"image-resize ratiobox\">\n" +
            "                <picture>\n" +
            "                    <source media=\"(max-width: 480px)\"\n" +
            "                        data-srcset=\"" + tamOpNhuaNgoaiTroi[i] + "\"\n" +
            "                        srcset=\"" + tamOpNhuaNgoaiTroi[i] + "\" />\n" +
            "                    <source media=\"(min-width: 481px) and (max-width: 767px)\"\n" +
            "                        data-srcset=\"" + tamOpNhuaNgoaiTroi[i] + "\"\n" +
            "                        srcset=\"" + tamOpNhuaNgoaiTroi[i] + "\" />\n" +
            "                    <source media=\"(min-width: 768px)\"\n" +
            "                        data-srcset=\"" + tamOpNhuaNgoaiTroi[i] + "\"\n" +
            "                        srcset=\"" + tamOpNhuaNgoaiTroi[i] + "\" />\n" +
            "                    <img class=\"lazyload img-loop\" data-sizes=\"auto\"\n" +
            "                        data-src=\"" + tamOpNhuaNgoaiTroi[i] + "\"\n" +
            "                        data-lowsrc=\"" + tamOpNhuaNgoaiTroi[i] + "\"\n" +
            "                        src=\"" + tamOpNhuaNgoaiTroi[i] + "\"\n" +
            "                        alt=\" Giấy vải dán tường ( Mã 0101 ) \" />\n" +
            "                </picture>\n" +
            "                <picture>\n" +
            "                    <source media=\"(max-width: 480px)\"\n" +
            "                        data-srcset=\"" + tamOpNhuaNgoaiTroi[i] + "\"\n" +
            "                        srcset=\"" + tamOpNhuaNgoaiTroi[i] + "\">\n" +
            "                    <source media=\"(min-width: 481px) and (max-width: 767px)\"\n" +
            "                        data-srcset=\"" + tamOpNhuaNgoaiTroi[i] + "\"\n" +
            "                        srcset=\"" + tamOpNhuaNgoaiTroi[i] + "\">\n" +
            "                    <source media=\"(min-width: 768px)\"\n" +
            "                        data-srcset=\"" + tamOpNhuaNgoaiTroi[i] + "\"\n" +
            "                        srcset=\"" + tamOpNhuaNgoaiTroi[i] + "\">\n" +
            "                    <img class=\"" + tamOpNhuaNgoaiTroi[i] + "\"\n" +
            "                        data-src=\"" + tamOpNhuaNgoaiTroi[i] + "\"\n" +
            "                        src=\"" + tamOpNhuaNgoaiTroi[i] + "\"\n" +
            "                        alt=\" Giấy vải dán tường ( Mã 0101 ) \" />\n" +
            "                </picture>\n" +
            "            </a>\n" +
            "            <div class=\"button-add hidden\">\n" +
            "                <button type=\"submit\" title=\"Buy now\" class=\"action\" onclick=\"buy_now('1073726547')\">Mua ngay<i\n" +
            "                        class=\"fa fa-long-arrow-right\"></i></button>\n" +
            "            </div>\n" +
            "            <div class=\"pro-price-mb\">\n" +
            "\n" +
            "                <span class=\"pro-price\">1,500,000₫</span>\n" +
            "            </div>\n" +
            "        </div>\n" +
            "        <div class=\"product-detail clearfix\">\n" +
            "            <div class=\"box-pro-detail\">\n" +
            "                <h3 class=\"pro-name\">\n" +
            "                    <a href=\"/products/giay-vai-dan-tuong-ma-0101\" title=\"Giấy vải dán tường ( Mã 0101 )\">\n" +
            "                        Giấy vải dán tường ( Mã 0101 )\n" +
            "                    </a>\n" +
            "                </h3>\n" +
            "                <div class=\"box-pro-prices\">\n" +
            "                    <p class=\"pro-price \">\n" +
            "                        <span>1,500,000₫</span>\n" +
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
            "            <a href=\"/products/giay-vai-dan-tuong-ma-0101\" title=\"Giấy vải dán tường ( Mã 0101 )\"\n" +
            "                class=\"image-resize ratiobox\">\n" +
            "                <picture>\n" +
            "                    <source media=\"(max-width: 480px)\"\n" +
            "                        data-srcset=\"" + tranlamgonhua[i] + "\"\n" +
            "                        srcset=\"" + tranlamgonhua[i] + "\" />\n" +
            "                    <source media=\"(min-width: 481px) and (max-width: 767px)\"\n" +
            "                        data-srcset=\"" + tranlamgonhua[i] + "\"\n" +
            "                        srcset=\"" + tranlamgonhua[i] + "\" />\n" +
            "                    <source media=\"(min-width: 768px)\"\n" +
            "                        data-srcset=\"" + tranlamgonhua[i] + "\"\n" +
            "                        srcset=\"" + tranlamgonhua[i] + "\" />\n" +
            "                    <img class=\"lazyload img-loop\" data-sizes=\"auto\"\n" +
            "                        data-src=\"" + tranlamgonhua[i] + "\"\n" +
            "                        data-lowsrc=\"" + tranlamgonhua[i] + "\"\n" +
            "                        src=\"" + tranlamgonhua[i] + "\"\n" +
            "                        alt=\" Giấy vải dán tường ( Mã 0101 ) \" />\n" +
            "                </picture>\n" +
            "                <picture>\n" +
            "                    <source media=\"(max-width: 480px)\"\n" +
            "                        data-srcset=\"" + tranlamgonhua[i] + "\"\n" +
            "                        srcset=\"" + tranlamgonhua[i] + "\">\n" +
            "                    <source media=\"(min-width: 481px) and (max-width: 767px)\"\n" +
            "                        data-srcset=\"" + tranlamgonhua[i] + "\"\n" +
            "                        srcset=\"" + tranlamgonhua[i] + "\">\n" +
            "                    <source media=\"(min-width: 768px)\"\n" +
            "                        data-srcset=\"" + tranlamgonhua[i] + "\"\n" +
            "                        srcset=\"" + tranlamgonhua[i] + "\">\n" +
            "                    <img class=\"" + tranlamgonhua[i] + "\"\n" +
            "                        data-src=\"" + tranlamgonhua[i] + "\"\n" +
            "                        src=\"" + tranlamgonhua[i] + "\"\n" +
            "                        alt=\" Giấy vải dán tường ( Mã 0101 ) \" />\n" +
            "                </picture>\n" +
            "            </a>\n" +
            "            <div class=\"button-add hidden\">\n" +
            "                <button type=\"submit\" title=\"Buy now\" class=\"action\" onclick=\"buy_now('1073726547')\">Mua ngay<i\n" +
            "                        class=\"fa fa-long-arrow-right\"></i></button>\n" +
            "            </div>\n" +
            "            <div class=\"pro-price-mb\">\n" +
            "\n" +
            "                <span class=\"pro-price\">1,500,000₫</span>\n" +
            "            </div>\n" +
            "        </div>\n" +
            "        <div class=\"product-detail clearfix\">\n" +
            "            <div class=\"box-pro-detail\">\n" +
            "                <h3 class=\"pro-name\">\n" +
            "                    <a href=\"/products/giay-vai-dan-tuong-ma-0101\" title=\"Giấy vải dán tường ( Mã 0101 )\">\n" +
            "                        Giấy vải dán tường ( Mã 0101 )\n" +
            "                    </a>\n" +
            "                </h3>\n" +
            "                <div class=\"box-pro-prices\">\n" +
            "                    <p class=\"pro-price \">\n" +
            "                        <span>1,500,000₫</span>\n" +
            "                    </p>\n" +
            "                </div>\n" +
            "            </div>\n" +
            "        </div>\n" +
            "    </div>\n" +
            "</div>";

            
    }
    
    $("#tranlamgonhua").empty().html(genHtmltranlamgonhua);
});

