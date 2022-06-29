<template>
  <div class="bg-light p-3" style="min-height: 235px">
    <WatermarkToolView
      @changeImgUrl="changeImgUrl"
      @download-img="downloadImg"
    />
    <canvas v-show="!preview" :id="canvasId" class="img-fluid"></canvas>
    <div  v-if="preview" class="">
      <img src="@/assets/img/ID1.jpg" alt="" class="img-fluid"  v-if="preview == 'ID1'"/>
      <img src="@/assets/img/ID2.jpg" alt="" class="img-fluid"  v-if="preview == 'ID2'"/>
      <img src="@/assets/img/ID3.jpg" alt="" class="img-fluid"  v-if="preview == 'ID3'"/>
      <img src="@/assets/img/handleID.png" alt="" class="img-fluid"  v-if="preview == 'handleID'"/>
      <span class="d-block">(請保持證件清晰)</span>
    </div>
  </div>
</template>

<script>
import { ref } from '@nuxtjs/composition-api'

export default {
  name: 'TheWatermark',
  props: ['canvasId', 'prePhoto'],
  emits: ['getFileUrl'],
  setup(props, { emit }) {
    const preview = ref(props.prePhoto)

    const imgUrl = ref('')
    const waterText = ref('此證件僅供歐維信貸認證使用，他用無效')
    const waterColor = ref('#999')
    const waterFontSize = ref('20')
    const clearance = ref('100')
    let canvas, ctx, img, ox, oy

    function addWatermark() {
      preview.value = ''
      canvas = document.getElementById(props.canvasId)
      ctx = canvas.getContext('2d')
      img = document.createElement('img')
      img.onload = render
      img.src = imgUrl.value
    }

    const render = () => {
      canvas.width = img.width
      canvas.height = img.height
      ox = canvas.width / 2
      oy = canvas.height / 2
      ctx.drawImage(img, 0, 0, img.width, img.height)
      ctx.save()
      ctx.translate(ox, oy)
      ctx.rotate((30 * Math.PI) / 180)
      ctx.translate(-ox, -oy)
      ctx.fillStyle = waterColor.value
      ctx.font = `bold ${waterFontSize.value}px sans-serif`

      for (
        let a = -img.width / clearance.value;
        a < img.width / clearance.value;
        a++
      ) {
        for (
          let b = -img.height / clearance.value;
          b < (img.height / clearance.value) * 2;
          b++
        ) {
          ctx.fillText(
            waterText.value,
            a * clearance.value * 4,
            10 + b * clearance.value
          )
        }
      }

      ctx.restore()
      const afterImg = canvas.toDataURL()
      emit('getFileUrl', afterImg)
    }

    const changeImgUrl = (val) => {
      imgUrl.value = val
      addWatermark()
    }

    const downloadImg = () => {
      const aEl = document.createElement('a')
      aEl.download = 'xx'
      const afterImg = canvas.toDataURL()
      // console.log(afterImg);
      return afterImg
    }

    return {
      changeImgUrl,
      downloadImg,
      preview
    }
  }
}
</script>
