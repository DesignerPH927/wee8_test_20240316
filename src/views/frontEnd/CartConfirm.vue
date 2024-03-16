<template>
  <div class="row justify-content-center">
    <div class="col-lg-10">
      <div class="card me-auto
      border border-lilac"
      style="background: #ffeeff;">
        <div class="card-body">
          <div class="text-end p-3">
            <button class="btn btn-outline-danger"
            type="button">刪除購物車</button>
          </div>
          <div class="table-responsive">
            <table class="table align-middle text-nowrap">
              <thead>
                <tr class="text-center">
                  <th>縮圖</th>
                  <th>商品</th>
                  <th width="300px;">數量</th>
                  <th>單價</th>
                </tr>
              </thead>
              <tbody>
                <tr class="text-center">
                  <td style="width: 200px;">
                    <div>
                      <img src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""
                      class="img-thumbnail">
                    </div>
                  </td>
                  <th>禮車</th>
                  <td>
                    <div class="input-group input-group-sm">
                      <button class="btn btn-outline-danger" type="button">
                        <i class="bi bi-trash3-fill text-danger
                        fs-5"></i>
                      </button>
                      <button class="btn btn-outline-lilac" type="button">
                        <i class="bi bi-dash-lg"></i>
                      </button>
                      <input type="number" class="form-control
                      bg-transparent shadow-none text-center" value="1"
                      min="0" readonly>
                      <button class="btn btn-outline-lilac" type="button">
                        <i class="bi bi-plus-lg"></i>
                      </button>
                    </div>
                  </td>
                  <td>$15000</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td colspan="2" class="fw-bold">
                    <div class="input-group">
                      <input type="number" class="form-control"
                      min="0">
                      <button class="btn btn-outline-lilac"
                      type="button">優惠碼</button>
                    </div>
                  </td>
                  <td colspan="3"
                  class="text-end fw-bold fs-4">
                    <span>
                      總價
                      <i class="bi bi-currency-dollar"></i>
                      15000
                    </span>
                  </td>
                </tr>
              </tfoot>
            </table>
            <div class="d-flex justify-content-between">
              <button class="btn btn-lilac"
              type="button"
              @click.prevent="backProducts"
              >
                <i class="bi bi-arrow-left"></i>
                繼續購物
              </button>
              <button class="btn btn-lilac"
              type="button"
              @click.prevent="fillInInfo"
              >
                確認結帳
              <i class="bi bi-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    backProducts() {
      this.$router.push('/productsPage/products');
    },
    fillInInfo() {
      this.$router.push('/carts/fillIn');
    },
  },
};
</script>
