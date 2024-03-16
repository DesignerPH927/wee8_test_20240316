<template>
  <div class="info">
    <!-- userInfoModal -->
    <userInfoModal
      ref="info"
    ></userInfoModal>
    <div class="infoHeader"></div>
    <div class="container">
      <nav style="--bs-breadcrumb-divider: '>';"
        aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item">
            <RouterLink to="/">首頁</RouterLink>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            最新資訊
          </li>
        </ol>
      </nav>
      <h3 class="fw-bold fs-3 text-center mb-md-5 mb-3">
          最新資訊
        </h3>
      <div class="position-relative pt-3 pb-5">
        <div class="mb-5">
          <div class="row justify-content-center
          gx-md-5 gx-3 gy-5">
            <div class="col-md-5">
              <img src="https://images.pexels.com/photos/288008/pexels-photo-288008.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""
              class="img-fluid rounded-3">
            </div>
            <div class="col-md-6 d-flex flex-column
            justify-content-center">
              <h3 class="fw-bold text-center">
                2024.03.11『結好婚』官網正式啟動！
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Saepe eligendi fuga,
                in nobis reprehenderit, iusto voluptatum
                autem id culpa esse nostrum ducimus
                deleniti dolores dolorum officia,
                unde ut est odit?
              </p>
              <button class="btn btn-outline-lilac
              d-block fw-bold ms-auto" type="button"
              @click.prevent="openInfoModal"
              >
                詳細內容
              </button>
            </div>
          </div>
        </div>
        <div class="mb-5">
          <div class="row justify-content-center
          gx-md-5 gx-3 gy-5">
            <div class="col-md-5 order-md-2">
              <img src="https://img.freepik.com/free-photo/young-man-with-retro-camera_155003-561.jpg?t=st=1710140721~exp=1710144321~hmac=e4370b28a99d089342d91ad6671536eda7b83ea02558bdba4c34d9d49b1a1074&w=996" alt=""
              class="img-fluid rounded-3">
            </div>
            <div class="col-md-6 d-flex flex-column
            justify-content-center order-md-1">
              <h3 class="fw-bold text-center">
                2024.03.11『結好婚』超重量級攝影師！
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Saepe eligendi fuga,
                in nobis reprehenderit, iusto voluptatum
                autem id culpa esse nostrum ducimus
                deleniti dolores dolorum officia,
                unde ut est odit?
              </p>
              <button class="btn btn-outline-lilac
              d-block fw-bold ms-auto" type="button">
                詳細內容
              </button>
            </div>
          </div>
        </div>
        <div class="mb-5">
          <div class="row justify-content-center
          gx-md-5 gx-3 gy-5">
            <div class="col-md-5 order-md-1">
              <img src="https://1.bp.blogspot.com/-27LP071-US4/VMylRG_XbgI/AAAAAAAAENQ/p5zlfp3GIoY/s1600/maroon5.jpg" alt=""
              class="img-fluid rounded-3">
            </div>
            <div class="col-md-6 d-flex flex-column
            justify-content-center order-md-2">
              <h3 class="fw-bold text-center">
                2024.03.11 Maroon 5 來啦
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Saepe eligendi fuga,
                in nobis reprehenderit, iusto voluptatum
                autem id culpa esse nostrum ducimus
                deleniti dolores dolorum officia,
                unde ut est odit?
              </p>
              <button class="btn btn-outline-lilac
              d-block fw-bold ms-auto" type="button">
                詳細內容
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import userInfoModal from '@/components/NewInfoModal.vue';

export default {
  components: {
    userInfoModal,
  },
  methods: {
    openInfoModal() {
      this.$refs.info.show();
    },
  },
  mounted() {},
};
</script>
