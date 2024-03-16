<template>
  <div class="row g-lg-5 g-3 justify-content-center">
    <div class="col-lg-6">
      <div class="card me-auto
      border border-lilac"
      style="background: #ffeeff;">
        <div class="card-body">
          <div class="table-responsive">
            <table class="table align-middle
            text-nowrap">
              <thead>
                <tr class="text-center">
                  <th>縮圖</th>
                  <th>商品</th>
                  <th>數量</th>
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
                  <td>3</td>
                  <td>$15000</td>
                </tr>
              </tbody>
            </table>
            <div class="d-flex justify-content-between
            align-items-center">
              <button class="btn btn-lilac"
              type="button"
              @click.prevent="backPage"
              >
                <i class="bi bi-arrow-left"></i>
                回上一步
              </button>
              <p class="text-end fw-bold fs-4 mb-0">
                總價
                <i class="bi bi-currency-dollar"></i>
                15000
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-6">
      <div class="card ms-auto
      border border-lilac"
      style="background: #ffeeff;">
        <div class="card-body px-lg-5 p-4">
          <h3 class="fw-bold text-center">
            請填寫表單
          </h3>
          <VForm action="#" v-slot="{ errors }"
            @submit="onSubmit" ref="form">
            <div class="row">
              <div class="col-lg-6">
                <div class="mb-3">
                  <label for="mail" class="form-label
                  fw-bold">
                    信箱
                  </label>
                  <VField
                    id="mail"
                    type="mail"
                    name="信箱"
                    class="form-control
                    bg-transparent
                    border border-lilac"
                    placeholder="請輸入信箱"
                    rules="email|required"
                    v-model="form.user.email"
                    :class="{ 'is-invalid': errors['信箱'] }"
                    ></VField>
                    <error-message name="信箱"
                    class="invalid-feedback"></error-message>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="mb-3">
                  <label for="name" class="form-label fw-bold">
                    姓名
                  </label>
                  <VField
                    id="name"
                    type="text"
                    name="姓名"
                    class="form-control
                    bg-transparent
                    border border-lilac"
                    rules="required"
                    v-model="form.user.name"
                    placeholder="請輸入姓名"
                    :class="{ 'is-invalid': errors['姓名'] }"
                    ></VField>
                    <error-message name="姓名"
                    class="invalid-feedback"></error-message>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="mb-3">
                  <label for="tel" class="form-label fw-bold">
                    電話
                  </label>
                  <VField
                    id="tel"
                    type="tel"
                    name="tel"
                    class="form-control
                    bg-transparent
                    border border-lilac"
                    :rules="isPhone"
                    v-model="form.user.tel"
                    :class="{ 'is-invalid': errors['tel'] }"
                    placeholder="請輸入電話"></VField>
                    <error-message name="tel"
                    class="invalid-feedback"></error-message>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="mb-3">
                  <label for="address" class="form-label fw-bold">
                    地址
                  </label>
                  <VField
                    id="address"
                    name="地址"
                    class="form-control
                    bg-transparent
                    border border-lilac"
                    :class="{ 'is-invalid': errors['地址'] }"
                    placeholder="請輸入地區"
                    rules="required"
                    v-model="form.user.address"
                    as="select"
                    >
                    <option
                      value=""
                      selected disabled>
                      請選擇地區
                    </option>
                    <option value="台北市">台北市</option>
                    <option value="新北市">新北市</option>
                    <option value="桃園市">桃園市</option>
                    <option value="新竹市">新竹市</option>
                    <option value="台中市">台中市</option>
                  </VField>
                  <error-message name="地址"
                    class="invalid-feedback"></error-message>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="mb-3">
                  <label for="address" class="form-label fw-bold">
                    付款方式
                  </label>
                  <VField
                    id="address"
                    name="付款方式"
                    class="form-control
                    bg-transparent
                    border border-lilac"
                    :class="{ 'is-invalid': errors['付款方式'] }"
                    placeholder="請輸入地區"
                    rules="required"
                    v-model="form.user.address"
                    as="select"
                    >
                    <option
                      value=""
                      selected disabled>
                      請選擇付款方式
                    </option>
                    <option value="台北市">信用卡</option>
                    <option value="新北市">貨到付款</option>
                    <option value="桃園市">ATM 轉帳</option>
                  </VField>
                  <error-message name="付款方式"
                    class="invalid-feedback"></error-message>
                </div>
              </div>
              <div class="mb-3">
                <label for="message" class="form-label fw-bold">
                  留言
                </label>
                <VField
                id="message"
                rows="5"
                name="Message"
                class="form-control
                bg-transparent
                border border-lilac"
                v-model="form.user.message"
                as="textarea"
                :class="{ 'is-invalid': errors['Message'] }"
                ></VField>
              </div>
            </div>
            <div class="d-flex
            justify-content-end
            align-items-center">
              <button class="btn btn-outline-secondary
              me-2" type="button"
              @click="resetData"
              >重置</button>
              <button class="btn btn-lilac"
              type="submit">
                確認結帳
                <i class="bi bi-arrow-right"></i>
              </button>
            </div>
          </VForm>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2';

export default {
  data() {
    return {
      form: {
        user: {
          email: '',
          name: '',
          tel: '',
          address: '',
          message: '',
        },
      },
    };
  },
  methods: {
    backPage() {
      this.$router.go(-1);
    },
    onSubmit() {
      Swal.fire({
        title: '完成填寫',
        icon: 'success',
      });
      this.$router.push('/carts/isPaid');
    },
    isPhone(value) {
      const phoneNumber = /^(09)[0-9]{8}$/;
      return phoneNumber.test(value) ? true : '電話號碼需 09 開頭唷';
    },
  },
};
</script>
