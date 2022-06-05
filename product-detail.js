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

  let productDescription = '<div class="product-title">' +
  '                                         <h1>Tấm ốp NTK 3 sóng cao</h1>' +
  '                                     </div>' +
  '                                     <div class="product-price" id="price-preview">' +
  '                                         <span class="pro-price">1,500,000₫</span>' +
  '                                     </div>' +
  '                                     <form id="add-item-form" action="/cart/add" method="post" class="variants clearfix">' +
  '                                         <div class="select clearfix">' +
  '                                             <select id="product-select" name="id" style="display:none;">' +
  '                                                 <option value="1067887749">168.15 - 1,500,000₫</option>' +
  '                                                 <option value="1067887750">168.16 - 1,500,000₫</option>' +
  '                                                 <option value="1067887751">168.17 - 1,500,000₫</option>' +
  '                                                 <option value="1067887752">168.18 - 1,500,000₫</option>' +
  '                                             </select>' +
  '                                         </div>' +
  '                                         <div class="select-swatch clearfix">' +
  '                                             <div id="variant-swatch-0" class="swatch clearfix" data-option="option1"' +
  '                                                 data-option-index="0">' +
  '                                                 <div class="header hide">Kiểu dáng:</div>' +
  '                                                 <div class="select-swap">' +
  '                                                     <div data-value="168.15" class="n-sd swatch-element 168-15  ">' +
  '                                                         <input class="variant-0" id="swatch-0-168-15" type="radio"' +
  '                                                             name="option1" value="168.15" data-vhandle="168-15" checked />' +
  '                                                         <label for="swatch-0-168-15">' +
  '                                                             <span>168.15</span>' +
  '                                                         </label>' +
  '                                                     </div>' +
  '                                                     <div data-value="168.16" class="n-sd swatch-element 168-16  ">' +
  '                                                         <input class="variant-0" id="swatch-0-168-16" type="radio"' +
  '                                                             name="option1" value="168.16" data-vhandle="168-16" />' +
  '                                                         <label for="swatch-0-168-16">' +
  '                                                             <span>168.16</span>' +
  '                                                         </label>' +
  '                                                     </div>' +
  '                                                     <div data-value="168.17" class="n-sd swatch-element 168-17  ">' +
  '                                                         <input class="variant-0" id="swatch-0-168-17" type="radio"' +
  '                                                             name="option1" value="168.17" data-vhandle="168-17" />' +
  '                                                         <label for="swatch-0-168-17">' +
  '                                                             <span>168.17</span>' +
  '                                                         </label>' +
  '                                                     </div>' +
  '                                                     <div data-value="168.18" class="n-sd swatch-element 168-18  ">' +
  '                                                         <input class="variant-0" id="swatch-0-168-18" type="radio"' +
  '                                                             name="option1" value="168.18" data-vhandle="168-18" />' +
  '         ' +
  '                                                         <label for="swatch-0-168-18">' +
  '                                                             <span>168.18</span>' +
  '                                                         </label>' +
  '                                                     </div>' +
  '                                                 </div>' +
  '                                             </div>' +
  '                                         </div>' +
  '                                         <div class="selector-actions">' +
  '                                             <div class="quantity-area clearfix">' +
  '                                                 <input type="button" value="-" onclick="minusQuantity()" class="qty-btn">' +
  '                                                 <input type="text" id="quantity" name="quantity" value="1" min="1"' +
  '                                                     class="quantity-selector">' +
  '                                                 <input type="button" value="+" onclick="plusQuantity()" class="qty-btn">' +
  '                                             </div>' +
  '                                             <div class="wrap-addcart clearfix">' +
  '                                                 <button type="button" id="add-to-cart"' +
  '                                                     class=" hidden add-to-cartProduct button dark btn-addtocart addtocart-modal "' +
  '                                                     name="add">' +
  '                                                     Thêm vào giỏ' +
  '                                                 </button>' +
  '                                                 <button type="button" id="buy-now"' +
  '                                                     class=" add-to-cartProduct button dark btn-addtocart addtocart-modal hidden "' +
  '                                                     name="add">' +
  '                                                     Mua ngay' +
  '                                                 </button>' +
  '         ' +
  '                                                 <a href="tel:0976896983" type="button" id="add-to-cart-contact"' +
  '                                                     class="button dark btn-addtocart">' +
  '                                                     Liên hệ' +
  '                                                 </a>' +
  '                                             </div>' +
  '                                         </div>' +
  '                                         <div class="product-action-bottom visible-xs">' +
  '                                             <div class="input-bottom">' +
  '                                                 <input id="quan-input" type="number" value="1" min="1">' +
  '                                             </div>' +
  '                                             <button type="button" id="add-to-cartbottom"' +
  '                                                 class="  add-to-cartProduct add-cart-bottom button dark addtocart-modal"' +
  '                                                 name="add">' +
  '                                                 Thêm vào giỏ' +
  '                                             </button>' +
  '                                             <a href="tel: 0976896983" type="button" id="add-to-cart-contact-bottom"' +
  '                                                 class="hidden button dark btn-addtocart">' +
  '                                                 Liên hệ' +
  '                                             </a>' +
  '                                         </div>' +
  '                                     </form>' +
  '                                     <div class="product-description">' +
  '                                         <div class="title-bl">' +
  '                                             <h2>Mô tả</h2>' +
  '                                         </div>' +
  '                                         <div class="description-content">' +
  '                                             <div class="description-productdetail">' +
  '                                                 <p><span style="font-size:16px"><strong><span style="color:#3498db">VẢI DÁN' +
  '                                                                 TƯỜNG CAO CẤP SỢI THUỶ TINH MV với những đặc tính vượt trội,' +
  '                                                                 đang là sự lựa chọn của rất nhiều người:</span></strong></span>' +
  '                                                 </p>' +
  '                                                 <ul>' +
  '                                                     <li><span style="font-size:16px">Thời gian sử dụng<strong> 𝐭𝐫𝐞̂𝐧 𝟏𝟎' +
  '                                                                 𝐧𝐚̆𝐦</strong></span></li>' +
  '                                                     <li><span style="font-size:16px">Chống cháy lan, rửa được, cực bền</span>' +
  '                                                     </li>' +
  '                                                     <li><span style="font-size:16px">Tái sử dụng nhiều lần</span></li>' +
  '                                                     <li><span style="font-size:16px">Chịu va đập tốt&nbsp;</span></li>' +
  '                                                     <li><span style="font-size:16px">Không cần thay thế nhiều lần&nbsp;</span>' +
  '                                                     </li>' +
  '                                                     <li><span style="font-size:16px">Khả năng chịu nhiệt , cách điện , chống' +
  '                                                             cháy cấp độ 🅰️</span></li>' +
  '                                                     <li><span style="font-size:16px">Kháng khuẩn, thân thiện với môi' +
  '                                                             trường</span></li>' +
  '                                                 </ul>' +
  '                                                 <p><span style="font-size:16px"><span style="color:#e74c3c"><strong>&nbsp;CAM' +
  '                                                                 KẾT</strong></span></span></p>' +
  '                                                 <ul>' +
  '                                                     <li><span style="font-size:16px">CO, CQ đầy đủ</span></li>' +
  '                                                     <li><span style="font-size:16px">Bảo hành sản phẩm 10 năm</span></li>' +
  '                                                     <li><span style="font-size:16px">Sử dụng nguyên liệu không chất độc' +
  '                                                             hại</span></li>' +
  '                                                     <li><span style="font-size:16px">Đội ngũ KTV lành nghề, có tâm với khách' +
  '                                                             hàng.</span></li>' +
  '                                                     <li><span style="font-size:16px">Đúng giá niêm yết</span></li>' +
  '                                                 </ul>' +
  '                                                 <p><span style="font-size:16px"><span style="color:#e74c3c"><strong>$ Giá bao' +
  '                                                                 hoàn thiện CHỈ&nbsp;1.500.000/ cuộn</strong></span></span></p>' +
  '                                                 <p><span style="font-size:16px"><span style="color:#e74c3c">Quy cách cuộn :' +
  '                                                             ngang 0.53m x dài 10m&nbsp;</span></span></p>' +
  '                                                 <p><span style="font-size:16px"><img height="16" width="16" alt="➖"' +
  '                                                             src="https://static.xx.fbcdn.net/images/emoji.php/v9/t4b/1/16/2796.png"' +
  '                                                             style="height: 16px; width: 16px;"><img height="16" width="16"' +
  '                                                             alt="➖"' +
  '                                                             src="https://static.xx.fbcdn.net/images/emoji.php/v9/t4b/1/16/2796.png"' +
  '                                                             style="height: 16px; width: 16px;"><img height="16" width="16"' +
  '                                                             alt="➖"' +
  '                                                             src="https://static.xx.fbcdn.net/images/emoji.php/v9/t4b/1/16/2796.png"' +
  '                                                             style="height: 16px; width: 16px;"><img height="16" width="16"' +
  '                                                             alt="➖"' +
  '                                                             src="https://static.xx.fbcdn.net/images/emoji.php/v9/t4b/1/16/2796.png"' +
  '                                                             style="height: 16px; width: 16px;"></span>' +
  '                                                 </p>' +
  '                                                 <p><span style="font-size:16px">Công Ty TNHH Thiết Kế Trang Trí Nội Thất' +
  '                                                         AL</span></p>' +
  '                                                 <p><span style="font-size:16px"><img height="16" width="16"' +
  '                                                             style="height: 16px; width: 16px;" alt="☎️"' +
  '                                                             src="https://static.xx.fbcdn.net/images/emoji.php/v9/t22/1/16/260e.png">' +
  '                                                         HOTLINE: 0976896983</span></p>' +
  '                                                 <p><span style="font-size:16px"><img height="16" width="16"' +
  '                                                             style="height: 16px; width: 16px;" alt="🏠"' +
  '                                                             src="https://static.xx.fbcdn.net/images/emoji.php/v9/tf6/1/16/1f3e0.png">' +
  '                                                         WEB: <a rel="nofollow noopener" target="_blank"' +
  '                                                             href="https://viet-wall.com">https://viet-wall.com/</a></span>' +
  '                                                 </p>' +
  '                                                 <p><span style="font-size:16px"><img height="16" width="16"' +
  '                                                             style="height: 16px; width: 16px;" alt="🏢"' +
  '                                                             src="https://static.xx.fbcdn.net/images/emoji.php/v9/tf8/1/16/1f3e2.png">' +
  '                                                         Cầu Tó, Khương Trung, Hà Nội</span></p>' +
  '                                                 <p style="margin-bottom:13px">&nbsp;</p>' +
  '                                             </div>' +
  '                                         </div>' +
  '                                     </div>';

});

function getUrlVars() {
  let vars = {};
  window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
      vars[key] = value;
  });
  return vars;
}