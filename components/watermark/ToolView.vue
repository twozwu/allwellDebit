<template>
  <section>
    <input
      id="formFile"
      type="file"
      accept="image/png,image/jpeg,image/gif,image/jpg"
      class="form-control mb-3"
      @change="selectImg"
    />
    <!-- <label class="col-3 btn btn-primary" for="imgFile">上传图片</label> -->

    <!-- <span class="btn" @click="download">下载图片</span> -->
  </section>
</template>

<script>
// import { ref } from 'vue'
export default {
  name: "ToolView",
  setup(props, { emit }) {
    let img = "";
    const selectImg = (event) => {
      const file = event.target.files[0];
      img = file;
      const reader = new FileReader();
      reader.onload = () => {
        emit("changeImgUrl", reader.result);
      };
      reader.readAsDataURL(file);
    };

    const download = () => emit("downloadImg");

    return {
      selectImg,
      download,
      img,
    };
  },
  emits: ["changeImgUrl", "downloadImg"],
};
</script>
