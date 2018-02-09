<template>
  <div id="translate" class="main">
    <div class="banner mt-10">
      <select class="select ui" name="language" v-model="language">
        <option value="en">English</option>
        <option value="es">Spanish</option>
        <option value="ko">Korean</option>
        <option value="ja">	Japanese</option>
        <option value="fr">	French</option>
      </select>
      <a v-on:click="doTranslate" class="btn ml-20">Translate</a>
    </div>
    <div class="pt-20 mt-10">
      <textarea class="textarea" name="origin" placeholder="Please input" v-model="tranlateText"></textarea>
      <textarea class="textarea ml-80 bgGray" name="result" disabled v-model="translateResult"></textarea>
    </div>
    <div class="mt-10 tip">{{remnant}} characters left</div>
  </div>
</template>
<script>
    export default{
      name:'translate',
      data (){
        return {
          tranlateText:'',
          remnant:200,
          MAX:200,
          language:'fr',
          translateResult:''
        }
      },
      methods: {
        doTranslate (){
          if(!this.tranlateText) return;
          this.$http.get('https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20180124T121141Z.144d41e9e521c8ec.89bd75a40c34d8275dcd6365a4024bed3b13edf7&lang='+this.language+'&text='+this.tranlateText)
            .then((response)=>{
              this.translateResult = response.body.text[0];
          })
        }
      },
      watch:{
        tranlateText (val, oldVal){
          this.remnant = this.MAX - val.length;
          if(val.length > this.MAX){
            this.tranlateText = this.tranlateText.substring(0, this.MAX);
          }
        }
      }
    }
</script>
<style lang="scss" scoped>
    
</style>
