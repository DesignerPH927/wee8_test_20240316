<template>
  <div class="singleProduct">
    <div class="singleProductHeader"></div>
    <div class="container">
      <div class="py-5">
        <div class="row gx-md-6 g-3">
          <div class="col-lg-6">
            <img src="https://media.istockphoto.com/id/1335978911/photo/professional-photographer-at-the-studio-african-american-man-wear-black-hoodie-and-sunglasses.jpg?s=2048x2048&w=is&k=20&c=6x_YU4kqFfWD1TE-sjy2SUBv7Ao9XRpW2Oft5Ci9j-M=" alt=""
            class="img-fluid">
          </div>
          <div class="col-lg-5">
            <nav
              style="--bs-breadcrumb-divider: '>';"
              aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <RouterLink to="/productsPage/products">產品列表</RouterLink>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  攝影師
                </li>
              </ol>
            </nav>
            <h4 class="badge bg-danger fs-5 mb-3">
              百大攝影師
            </h4>
            <p class="card-title fs-4">
              專業的技術一定不會讓您失望
            </p>
            <div class="mt-5">
              <p class="fs-4 fw-bold">
                曾經榮獲
              </p>
              <ul class="award">
                <li>台灣百大攝影師之首</li>
                <li>知名節目御用攝影師</li>
                <li>2023年亞洲攝影 冠軍</li>
              </ul>
              <p class="text-end fw-bold text-danger
              fs-3">
                NT$10000
              </p>
            </div>
            <div class="mb-3">
              <div class="d-flex gap-3">
                <select id="qty" class="form-select">
                  <option value="">1</option>
                </select>
                <button class="btn btn-lilac w-100"
                @click="addCart"
                type="button">加入購物車</button>
              </div>
            </div>
          </div>
        </div>
        <div class="my-5">
          <hr style="border:3px solid #9966cc;
          opacity: .7;
          border-radius: 50px;">
        </div>
        <div class="mb-1">
          <h3 class="fw-bold fs-3 text-center
          mb-5">
            相關商品
          </h3>
          <Vue3Marquee
            :pause-on-hover="true"
            :clone="true"
            :duration="5">
            <div class="me-5">
              <div class="card" style="width: 18rem;">
                <i class="bi bi-heart loveIcon"></i>
                <div class="itemWrap">
                  <img src="https://media.istockphoto.com/id/1335978911/photo/professional-photographer-at-the-studio-african-american-man-wear-black-hoodie-and-sunglasses.jpg?s=2048x2048&w=is&k=20&c=6x_YU4kqFfWD1TE-sjy2SUBv7Ao9XRpW2Oft5Ci9j-M="
                  class="card-img-top" alt="...">
                </div>
                <div class="card-body">
                  <h4 class="d-flex mb-4">
                    <span
                    style="letter-spacing: 2px;"
                    >泰瑞攝影師</span>
                    <span class="badge text-bg-danger ms-auto">百大</span>
                  </h4>
                  <h5 class="text-muted text-center mb-3">
                    2023榮獲百大攝影師之首
                  </h5>
                  <div class="d-flex justify-content-between
                  align-items-center mb-3">
                    <del class="text-muted">$15000</del>
                    <p class="fs-5 text-danger mb-0">
                      NT$ 10000
                    </p>
                  </div>
                  <RouterLink to="/product/aa" class="btn btn-outline-lilac w-100
                  fw-bold">
                    <i class="bi bi-cart-plus-fill"></i>
                    立即預約
                  </RouterLink>
                </div>
              </div>
            </div>
          </Vue3Marquee>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    addCart() {
      this.$router.push('/carts/confirm');
    },
  },
};
</script>
