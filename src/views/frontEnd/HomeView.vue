<template>
  <section class="banner">
    <div class="imgWrap">
      <img src="/img/banner/bubble_1.png" id="bubble1">
      <img src="/img/banner/bubble_2.png" id="bubble2">
      <img src="/img/banner/curtain_left.png" id="curtainLeft">
      <img src="/img/banner/curtain_right.png" id="curtainRight">
      <h3 id="bannerText">marry me</h3>
      <img src="/img/banner/couple.png" id="couple">
    </div>
  </section>
  <main>
    <section id="aboutUS">
      <div class="container">
        <h3 class="fw-bold fs-3 text-center mb-5">
          創辦理念
        </h3>
        <div class="row g-md-0">
          <div class="col-md-6 order-2 order-md-1">
            <img src="https://img.freepik.com/free-photo/gleaming-ring-silk-with-shimmering-bokeh-lights_157027-3926.jpg?t=st=1709794397~exp=1709797997~hmac=ef3f3cacd175ca30097813f4af6879cdb3cdd7888a25e15f49b19c53073faec2&w=1060"
            class="img-thumbnail">
          </div>
          <div class="col-md-6 order-1 order-md-2">
            <div class="card h-100">
              <div class="card-body
              d-flex flex-column justify-content-center
              align-items-center">
                <h4 class="card-title fs-3 fw-bold
                my-3">
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                </h4>
                <p>
                  希望每對戀人都能得到幸福，不會為了如何辦婚禮而苦惱。
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="marqueeWrap">
      <Vue3Marquee
      :clone="true" :duration="10">
        <img
            v-for="img in imgArray"
            :key="img"
            :src="img"
        />
      </Vue3Marquee>
    </div>
    <section id="newInfo">
      <div class="container">
      <h3 class="fw-bold fs-3 text-center mb-3">最新資訊</h3>
      <RouterLink to="/newInfo" class="fs-5 d-block text-end
      text-decoration-underline mb-5 fw-bold"
      style="text-transform:capitalize;"
      >更多新訊息唷</RouterLink>
        <div class="row row-cols-md-2 row-cols-xl-3
        row-cols-1 g-3">
          <div class="col">
            <div class="card h-100">
              <img src="https://images.pexels.com/photos/265856/pexels-photo-265856.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="card-img-top"
              alt="...">
              <div class="card-body">
                <div class="card-title fw-bold">
                  2024.03.11『結好婚』官網正式啟動！
                </div>
                <p class="mb-0">
                  官網上線 全館9折優惠，還是 新會員 100折價券
                </p>
                <a href="#" class="stretched-link"></a>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img src="https://img.freepik.com/free-photo/young-man-with-retro-camera_155003-557.jpg?t=st=1710135919~exp=1710139519~hmac=2d6b248c4b8e8c5482533e0342030289d4d0a90d30d98fd5854f25ab08e6aa73&w=996" class="card-img-top"
              alt="...">
              <div class="card-body">
                <div class="card-title fw-bold">
                  2024.03.11『結好婚』請到超重量級攝影師！
                </div>
                <p class="mb-0">
                  這位復古風攝影師可是全台搶透透，經聽了
                  『結好婚』的工作室規劃及願景非常高興
                  就與我們簽訂了長期合作的契約，相信許多
                  新人迫不及待想讓這位重量級復古攝影大師
                  拍照了吧趕快聯絡我們喔。
                </p>
                <a href="#" class="stretched-link"></a>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img src="https://www.billboard.com/wp-content/uploads/media/maroon-5-screen-grab-sugar-2015-billboard-650.jpg" class="card-img-top"
              alt="...">
              <div class="card-body">
                <div class="card-title fw-bold">
                  2024.03.11 <span class="heartBeat
                  text-info">Maroon 5</span> 來啦！
                </div>
                <p class="mb-0">
                  這次很榮幸能邀請到Maroon 5到現場
                  ，為新人演唱Surge這首膾炙人口的歌曲
                  ，想被祝福的新人阿趕快連絡我們唷。
                </p>
                <a href="#" class="stretched-link"></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="videoWrap">
      <video src="/video/wediding.mp4"
        muted loop autoplay></video>
    </div>
    <section id="products">
      <div class="container">
        <h3 class="fw-bold fs-3 text-center mb-5">服務商品</h3>
        <RouterLink to="/productsPage/products" class="fs-5 d-block text-end
          text-decoration-underline mb-5 fw-bold"
          style="text-transform:capitalize;"
          >更多商品唷</RouterLink>
        <div class="row row-cols-lg-2 row-cols-1 g-4">
          <div class="col">
            <div class="card h-100">
              <div class="row g-0 h-100">
                <div class="col-md-7">
                  <img src="https://img.freepik.com/free-photo/view-3d-videographer-with-camera_23-2151067043.jpg?t=st=1709803117~exp=1709806717~hmac=af9f650b69f12ce1b0c3aa4917bc458c8192c315c7affd3e4f2abe586a7a0821&w=996" class="img-fluid rounded-start h-100 bg-cover" alt="...">
                </div>
                <div class="col-md-5">
                  <div class="card-body d-flex
                    flex-column h-100">
                    <h5 class="card-title fw-bold
                    text-center mb-3">
                      攝影師系列
                    </h5>
                    <p class="card-text">
                      經驗豐富的攝影師，擁有超過10年的攝影經驗，
                      擅長捕捉獨特的瞬間，並將它們轉化成令人難忘的影像。
                      擁有先進的攝影設備，並擅長使用各種攝影工具和軟體，
                      以最大程度地發揮其攝影技巧。
                    </p>
                    <button class="btn btn-outline-lilac
                    w-100 mt-auto" type="button">
                      <i class="bi bi-cart-plus-fill"></i>
                      立即預購
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <div class="row g-0 h-100">
                <div class="col-md-7">
                  <img src="https://images.pexels.com/photos/1327353/pexels-photo-1327353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="img-fluid rounded-start h-100
                  bg-cover" alt="...">
                </div>
                <div class="col-md-5">
                  <div class="card-body d-flex
                    flex-column h-100">
                    <h5 class="card-title fw-bold
                    text-center mb-3">
                      新娘秘書系列
                    </h5>
                    <p class="card-text">
                      厲害的宴客妝髮造型讓你成為耀眼仙女。提供專業的婚禮新秘造型服務，全台皆有新秘服務，歡迎隨時洽詢我們。深邃輕美式。甜美風編髮。輕透氧氣底妝。
                    </p>
                    <button class="btn btn-outline-lilac
                    w-100 mt-auto" type="button">
                      <i class="bi bi-cart-plus-fill"></i>
                      立即預購
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <div class="row g-0 h-100">
                <div class="col-md-7">
                  <img src="https://images.unsplash.com/photo-1624763149686-1893acf73092?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="img-fluid rounded-start h-100 bg-cover" alt="...">
                </div>
                <div class="col-md-5">
                  <div class="card-body d-flex
                    flex-column h-100">
                    <h5 class="card-title fw-bold
                    text-center mb-3">
                      婚宴場地系列
                    </h5>
                    <p class="card-text">
                      最多風格結婚場地首選 — 捷運出站即可到，多元風格宴會空間任君挑選，為你實踐婚禮的無限可能，一站式服務，輕鬆辦婚禮。
                    </p>
                    <button class="btn btn-outline-lilac
                    w-100 mt-auto" type="button">
                      <i class="bi bi-cart-plus-fill"></i>
                      立即預購
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <div class="row g-0 h-100">
                <div class="col-md-7">
                  <img src="https://images.pexels.com/photos/45243/saxophone-music-gold-gloss-45243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="img-fluid rounded-start h-100
                  bg-cover" alt="...">
                </div>
                <div class="col-md-5">
                  <div class="card-body d-flex
                    flex-column h-100">
                    <h5 class="card-title fw-bold
                    text-center mb-3">
                      音樂演奏系列
                    </h5>
                    <p class="card-text">
                      時而莊嚴、平靜，時而夢幻、憂傷；時而如林間微風般難以察覺，有時卻又如同鐘鳴過後，留於謎樣般的撼動。
                    </p>
                    <button class="btn btn-outline-lilac
                    w-100 mt-auto" type="button">
                      <i class="bi bi-cart-plus-fill"></i>
                      立即預購
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <div class="row g-0 h-100">
                <div class="col-md-7">
                  <img src="https://images.pexels.com/photos/195636/pexels-photo-195636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="img-fluid rounded-start h-100
                  bg-cover" alt="...">
                </div>
                <div class="col-md-5">
                  <div class="card-body d-flex
                    flex-column h-100">
                    <h5 class="card-title fw-bold
                    text-center mb-3">
                      超酷禮車系列
                    </h5>
                    <p class="card-text">
                      永恆經典 滿足你的所有想像 — 風格由你定義！
                      精選不敗車款，集結安全、時尚於一身，
                      體驗前所未有駕馭手感＃線上預約賞車。
                      提供最新車款資訊！頂尖安全科技，
                      時尚新潮外觀，動靜皆令人醉心
                    </p>
                    <button class="btn btn-outline-lilac
                    w-100 mt-auto" type="button">
                      <i class="bi bi-cart-plus-fill"></i>
                      立即預購
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <div class="row g-0 h-100">
                <div class="col-md-7">
                  <img src="https://images.pexels.com/photos/4065865/pexels-photo-4065865.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="img-fluid rounded-start h-100
                  bg-cover" alt="...">
                </div>
                <div class="col-md-5">
                  <div class="card-body d-flex
                    flex-column h-100">
                    <h5 class="card-title fw-bold
                    text-center mb-3">
                      婚禮道具系列
                    </h5>
                    <p class="card-text">
                      有道具的襯托，會讓新人無論在婚宴場、
                      拍照、布置、都能充分將氛圍high到最
                      高點。
                    </p>
                    <button class="btn btn-outline-lilac
                    w-100 mt-auto" type="button">
                      <i class="bi bi-cart-plus-fill"></i>
                      立即預購
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="marqueeWrap">
      <Vue3Marquee
      :clone="true" :duration="10">
        <img
            v-for="img in imgArray"
            :key="img"
            :src="img"
        />
      </Vue3Marquee>
    </div>
    <div class="itemWall">
      <h3 class="fw-bold fs-3 text-center mb-5">案例分享</h3>
      <!-- userPhotoModal -->
      <userPhotoModal
        ref="photo"
      ></userPhotoModal>
      <Vue3Marquee
      :pause-on-hover="true"
      :clone="true"
      :direction="'reverse'">
        <div class="card text-bg-dark me-md-5 me-3 h-100">
          <img src="https://images.pexels.com/photos/457701/pexels-photo-457701.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="imgSize h-100" alt="...">
          <div class="card-img-overlay d-flex flex-column
          justify-content-center align-items-center">
            <h5 class="card-title fs-3 fw-bold">新秘作品</h5>
            <a href="#" class="stretched-link"
            @click.prevent="openPhoto"
            ></a>
          </div>
        </div>
        <div class="card text-bg-dark me-md-5 me-3 h-100">
          <img src="https://images.pexels.com/photos/3352398/pexels-photo-3352398.jpeg?auto=compress&cs=tinysrgb&w=600" class="imgSize h-100" alt="...">
          <div class="card-img-overlay d-flex flex-column
          justify-content-center align-items-center">
            <h5 class="card-title fs-3 fw-bold">攝影作品</h5>
            <a href="#" class="stretched-link"
            @click.prevent="openPhoto"
            ></a>
          </div>
        </div>
        <div class="card text-bg-dark me-md-5 me-3 h-100">
          <img src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" class="imgSize h-100" alt="...">
          <div class="card-img-overlay d-flex flex-column
          justify-content-center align-items-center">
            <h5 class="card-title fs-3 fw-bold">禮車廠牌</h5>
            <a href="#" class="stretched-link"
            @click.prevent="openPhoto"
            ></a>
          </div>
        </div>
        <div class="card text-bg-dark me-md-5 me-3 h-100">
          <img src="https://images.pexels.com/photos/5650950/pexels-photo-5650950.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="imgSize h-100" alt="...">
          <div class="card-img-overlay d-flex flex-column
          justify-content-center align-items-center">
            <h5 class="card-title fs-3 fw-bold">樂團介紹</h5>
            <a href="#" class="stretched-link"
            @click.prevent="openPhoto"
            ></a>
          </div>
        </div>
      </Vue3Marquee>
    </div>
    <section id="contact">
      <div class="container">
        <h3 class="fw-bold fs-3 text-center mb-5">
          互動起來唷
        </h3>
        <div class="row row-cols-md-2
        row-cols-1 g-0">
          <div class="col d-flex justify-content-md-end
          justify-content-center">
            <iframe
            class="h-lg-100 w-100"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14486.885240775071!2d120.9496150789712!3d24.80499476126402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346835c76f23bec1%3A0x2ef21e4ee027d3ab!2z5paw56u55rOV5ZyL5be06buO5ama57SX5paw5qaC5b-16aSo!5e0!3m2!1szh-TW!2stw!4v1709882866181!5m2!1szh-TW!2stw" style="border:0; height: 500px;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div class="col">
            <div class="card">
              <div class="card-body pb-0">
                <form action="#">
                  <div class="mb-3">
                    <label for="name" class="form-label
                    d-flex align-items-start">
                      姓名
                      <i class="bi bi-asterisk text-danger
                      ms-1"
                      style="font-size: 8px;"></i>
                    </label>
                    <input type="text" class="form-control"
                    placeholder="請輸入姓名" id="name">
                  </div>
                  <div class="mb-3">
                    <label for="email" class="form-label
                    d-flex align-items-start">
                      信箱
                      <i class="bi bi-asterisk text-danger
                      ms-1"
                      style="font-size: 8px;"></i>
                    </label>
                    <input type="email" class="form-control"
                    placeholder="請輸入信箱" id="email">
                  </div>
                  <div class="mb-3">
                    <label for="tel" class="form-label
                    d-flex align-items-center">
                      電話
                      <small class="text-muted
                      ms-1">(市內請家區碼)</small>
                    </label>
                    <input type="tel" class="form-control"
                    placeholder="請輸入電話" id="tel" min="0">
                  </div>
                  <div class="mb-3">
                    <label for="message" class="form-label
                    d-flex align-items-start">
                      留言
                      <i class="bi bi-asterisk text-danger
                      ms-1"
                      style="font-size: 8px;"></i>
                    </label>
                    <textarea id="message" rows="5"
                    class="form-control"
                    ></textarea>
                  </div>
                  <div class="mb-3">
                    <div class="d-flex gap-1 justify-content-end">
                      <button class="btn btn-outline-secondary
                      w-25"
                      type="button">重置</button>
                      <button class="btn btn-lilac
                      w-25"
                      type="button">送出</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import 'animate.css';
import userPhotoModal from '@/components/PhotoModal.vue';

gsap.registerPlugin(ScrollTrigger);

export default {
  data() {
    return {
      imgArray: [
        '/img/newInfo/wedding_01.png',
        '/img/newInfo/wedding_02.png',
      ],
    };
  },
  components: {
    userPhotoModal,
  },
  methods: {
    openPhoto() {
      this.$refs.photo.show();
    },
  },
  mounted() {
    gsap.to('#couple', {
      scrollTrigger: {
        scrub: 1,
      },
      scale: 2.5,
    });
    gsap.to('#bannerText', {
      scrollTrigger: {
        scrub: 1,
      },
      y: -5000,
    });
    gsap.to('#bubble1', {
      scrollTrigger: {
        scrub: 1,
      },
      x: 300,
    });
    gsap.to('#bubble2', {
      scrollTrigger: {
        scrub: 1,
      },
      x: -300,
    });
    gsap.to('#curtainLeft', {
      scrollTrigger: {
        scrub: 1,
      },
      x: -1000,
    });
    gsap.to('#curtainRight', {
      scrollTrigger: {
        scrub: 1,
      },
      x: 1000,
    });
  },
};
</script>
