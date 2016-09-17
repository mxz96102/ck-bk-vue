<template lang="pug">
.input-image-1
  file-base64(  v-bind:multiple="true", v-bind:done="getFiles")
  img.image-get()
  button.subImg() 确认

</template>

<script>
  import cropit from 'cropit';
  import fileBase64 from 'vue-file-base64';

export default {
  data () {
    return {

    }
  },
  props: ['title',"name"],
  ready(){
  },
  components: { fileBase64 },
  methods: {
    getFiles(files){
      document.getElementsByClassName('image-get')[0].src=files[0].base64;
      $('.image-get').cropper({
        rotatable:false,
        aspectRatio:1,
        scalable:false,
      });
        $('.subImg').click(()=>{
          $('.image-get').cropper('getCroppedCanvas', {
            width: 128,
            height: 128
          }).toBlob(function (blob) {
            $.ajax('/image/base64', {
              method: "POST",
              data: {image:blob},
              processData: false,
              contentType: false,
              success: function (data) {
                alert('提交成功');
                $('.input-image-1').html("<img class='uploaded-img' src='"+data.image_url+"'>")
              },
              error: function () {
                alert('Upload error');
              }
            });
          });
          return false;

        })

    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
