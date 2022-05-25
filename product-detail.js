$(document).ready(function () {

  let id = getUrlVars()["id"];
  let product = getUrlVars()["product"];
  debugger
  
  let header = '<div class="product-gallery">\n' +
  '                                <div class="product-gallery__thumbs-container hidden-sm hidden-xs">\n' +
  '                                    <div class="product-gallery__thumbs thumb-fix">\n';

  let productGalery = '<div class="product-gallery">\n' +
  '                                <div class="product-gallery__thumbs-container hidden-sm hidden-xs">\n' +
  '                                    <div class="product-gallery__thumbs thumb-fix">\n' +
  '\n' +
  '                                        <div class="product-gallery__thumb active">\n' +
  '                                            <a class="product-gallery__thumb-placeholder" href="javascript:void(0);"\n' +
  '                                                data-image="image\\product\\thewood-NTA-3songcao\\detail1.jpg"\n' +
  '                                                data-zoom-image="image\\product\\thewood-NTA-3songcao\\detail1.jpg">\n' +
  '                                                <img alt="Tấm ốp NTK 3 sóng cao"\n' +
  '                                                    src="image\\product\\thewood-NTA-3songcao\\detail1.jpg"\n' +
  '                                                    data-image="image\\product\\thewood-NTA-3songcao\\detail1.jpg" />\n' +
  '                                            </a>\n' +
  '                                        </div>\n' +
  '\n' +
  '                                        <div class="product-gallery__thumb ">\n' +
  '                                            <a class="product-gallery__thumb-placeholder" href="javascript:void(0);"\n' +
  '                                                data-image="image\\product\\thewood-NTA-3songcao\\detail2.jpg"\n' +
  '                                                data-zoom-image="image\\product\\thewood-NTA-3songcao\\detail2.jpg">\n' +
  '                                                <img alt="Tấm ốp NTK 3 sóng cao"\n' +
  '                                                    src="image\\product\\thewood-NTA-3songcao\\detail2.jpg"\n' +
  '                                                    data-image="image\\product\\thewood-NTA-3songcao\\detail2.jpg" />\n' +
  '                                            </a>\n' +
  '                                        </div>\n' +
  '\n' +
  '                                        <div class="product-gallery__thumb ">\n' +
  '                                            <a class="product-gallery__thumb-placeholder" href="javascript:void(0);"\n' +
  '                                                data-image="image\\product\\thewood-NTA-3songcao\\detail3.jpg"\n' +
  '                                                data-zoom-image="image\\product\\thewood-NTA-3songcao\\detail3.jpg">\n' +
  '                                                <img alt="Tấm ốp NTK 3 sóng cao"\n' +
  '                                                    src="image\\product\\thewood-NTA-3songcao\\detail3.jpg"\n' +
  '                                                    data-image="image\\product\\thewood-NTA-3songcao\\detail3.jpg" />\n' +
  '                                            </a>\n' +
  '                                        </div>\n' +
  '                                    </div>\n' +
  '                                </div>\n' +
  '                                <div class="product-image-detail box__product-gallery scroll">\n' +
  '                                    <ul id="sliderproduct" class="site-box-content slide_product">\n' +
  '\n' +
  '                                        <li class="product-gallery-item gallery-item">\n' +
  '                                            <img class="product-image-feature"\n' +
  '                                                src="image\\product\\thewood-NTA-3songcao\\detail1.jpg"\n' +
  '                                                alt="Tấm ốp NTK 3 sóng cao">\n' +
  '                                        </li>\n' +
  '\n' +
  '                                        <li class="product-gallery-item gallery-item">\n' +
  '                                            <img class="product-image-feature"\n' +
  '                                                src="image\\product\\thewood-NTA-3songcao\\detail2.jpg"\n' +
  '                                                alt="Tấm ốp NTK 3 sóng cao">\n' +
  '                                        </li>\n' +
  '\n' +
  '                                        <li class="product-gallery-item gallery-item">\n' +
  '                                            <img class="product-image-feature"\n' +
  '                                                src="image\\product\\thewood-NTA-3songcao\\detail3.jpg"\n' +
  '                                                alt="Tấm ốp NTK 3 sóng cao">\n' +
  '                                        </li>\n' +
  '                                    </ul>\n' +
  '                                </div>\n' +
  '                            </div>';

  if(product == 'tamOpNhuaNgoaiTroi'){
    for(let i=0;i<tamOpNhuaNgoaiTroi.length;i++){
      if(tamOpNhuaNgoaiTroi[i].id == id){
          productGalery +=   '<div class="product-gallery__thumb active">\n' +
          '                       <a class="product-gallery__thumb-placeholder" href="javascript:void(0);"\n' +
          '                          data-image="' + tamOpNhuaNgoaiTroi[i].url + '"\n' +
          '                          data-zoom-image="image\\product\\thewood-NTA-3songcao\\detail1.jpg">\n' +
          '                       <img alt="Tấm ốp NTK 3 sóng cao"\n' +
          '                          src="image\\product\\thewood-NTA-3songcao\\detail1.jpg"\n' +
          '                          data-image="image\\product\\thewood-NTA-3songcao\\detail1.jpg" />\n' +
          '                       </a>\n' +
          '                   </div>\n';
      }
    }
  }

  if(product == 'vaidantuongsoithuytinh'){
    for(let i=0;i<vaidantuongsoithuytinh.length;i++){
      if(vaidantuongsoithuytinh[i].id == id){
          for(let j=0;j<vaidantuongsoithuytinh[i].detail.length;j++){
            header +=   '<div class="product-gallery__thumb active">\n' +
            '                       <a class="product-gallery__thumb-placeholder" href="javascript:void(0);"\n' +
            '                          data-image="' + vaidantuongsoithuytinh[i].detail[j] + '"\n' +
            '                          data-zoom-image="' + vaidantuongsoithuytinh[i].detail[j] + '">\n' +
            '                       <img alt="Tấm ốp NTK 3 sóng cao"\n' +
            '                          src="' + vaidantuongsoithuytinh[i].detail[j] + '"\n' +
            '                          data-image="' + vaidantuongsoithuytinh[i].detail[j] + '" />\n' +
            '                       </a>\n' +
            '                   </div>\n';
          }
          header += '</div></div>';
          header += '<div class="product-image-detail box__product-gallery scroll">\n' +
                    '   <ul id="sliderproduct" class="site-box-content slide_product">\n';

          for(let j=0;j<vaidantuongsoithuytinh[i].detail.length;j++){
            header += '<li class="product-gallery-item gallery-item">\n' +
              '            <img class="product-image-feature"\n' +
              '            src="' + vaidantuongsoithuytinh[i].detail[j] + '"\n' +
              '            alt="' + vaidantuongsoithuytinh[i].productName + '">\n' +
              '        </li>\n';
          }
          header += '</ul></div></div>';
          $("#bodyDetailImage").empty().html(header);
      }
    }
  }

});

function getUrlVars() {
  let vars = {};
  window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
      vars[key] = value;
  });
  return vars;
}