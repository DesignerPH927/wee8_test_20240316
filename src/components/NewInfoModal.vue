<template>
  <div class="modal fade" id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="modal">
    <div class="modal-dialog modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header bg-lilac">
          <h1 class="modal-title fs-5 text-white"
            id="exampleModalLabel">
            『結好婚』官網正式啟動！
          </h1>
          <button type="button" class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
            ></button>
        </div>
        <div class="modal-body">
          <small class="d-block text-center mb-3"
          style="color: #9999cc;">
            2024/03/12
          </small>
          <div class="card bg-transparent border-0">
            <img src="https://images.pexels.com/photos/288008/pexels-photo-288008.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="card-img-top rounded-3" alt="...">
            <div class="card-body">
              <p class="card-text"
              style="color: #9966cc;
              text-align:justify;">
                親愛的貴賓您好，我們是【結好婚】，
                很榮幸也很幸運地在這裡與您相遇！
                『結婚』是人生中的一大要事，需要規劃的內容非常繁瑣，
                新人總是在這個過程中感到慌亂、無助，因此我們誕生了！
                為您從求婚到婚禮，打造完整的客製化規劃服務，
                提供符合您需求的專業人員挑選，不管是中式或西式禮俗，
                我們將提供您專業的建議，婚禮不再忙昏頭，
                讓我們為您打造完美婚禮【結好婚】！
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import modalMixins from '../mixins/modal';

export default {
  mixins: [modalMixins],
};
</script>
