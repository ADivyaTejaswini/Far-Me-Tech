var target=document.getElementById("mytarget");



target.classList.add("akash");


async function data(){
    const response = await fetch('fertilizers.json');
    const rep=await response.json();
    

 
//    rep.docs.forEach(function(e) {
    
//     Object.entries(e).forEach(([key,value]) => {
//         console.log(`${key} ${value}`);
//     })
//     console.log("-----------------")
// })
// }


rep.docs.forEach(function(e) {
    
    const{product_main_image_url,product_title,app_sale_price,original_price,product_detail_url}=e;

        console.log(e)
        var a=document.createElement('div');
        a.classList.add("col-xl-3","wow","fadeInUp");
        a.innerHTML=`
                          <div class="product-item">
                              <div class="position-relative bg-light">
                                  <img class="img-fluid w-75" src="${product_main_image_url}" alt="">
                              </div>
                              <div class="text-center p-4">
                                  <a class="d-block h5 mb-2" href="">${product_title}</a>
                                  <span class="text-primary me-1">${app_sale_price}</span>
                                  <span class="text-body text-decoration-line-through">${original_price}</span>
                              </div>
                              <div class=" border-top border-bottom">
                                  <small class="w-50 py-2" id="po">
                                      <a class="text-body border-1" href=""><i class="fa fa-shopping-bag text-primary me-2"></i>Contact Us</a>
                                  </small>
                              </div>
                          </div>
                     
        `
         target.appendChild(a);
})
}

data();





{/* <div class="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                          <div class="product-item">
                              <div class="position-relative bg-light overflow-hidden">
                                  <img class="img-fluid w-100" src="img/product-1.jpg" alt="">
                                  <div class="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">New</div>
                              </div>
                              <div class="text-center p-4">
                                  <a class="d-block h5 mb-2" href="">Fresh Tomato</a>
                                  <span class="text-primary me-1">$19.00</span>
                                  <span class="text-body text-decoration-line-through">$29.00</span>
                              </div>
                              <div class="d-flex border-top">
                                  <small class="w-50 text-center border-end py-2">
                                      <a class="text-body" href=""><i class="fa fa-eye text-primary me-2"></i>View detail</a>
                                  </small>
                                  <small class="w-50 text-center py-2">
                                      <a class="text-body" href=""><i class="fa fa-shopping-bag text-primary me-2"></i>Add to cart</a>
                                  </small>
                              </div>
                          </div>
                      </div> */}