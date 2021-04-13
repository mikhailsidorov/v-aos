<template>
  <div class="contaner">
    <div class="square" v-for="(animation, index) in animations" :key="index" v-aos:[animation]="{}">
      <code>&lt;div v-aos:{{animation}}&gt;&lt;/div&gt;</code>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      animations: [
        'fade',
        'fade-up',
        'fade-down',
        'fade-left',
        'fade-right',
        'fade-up-right',
        'fade-up-left',
        'fade-down-right',
        'fade-down-left',
        'flip-up',
        'flip-down',
        'flip-left',
        'flip-right',
        'slide-up',
        'slide-down',
        'slide-left',
        'slide-right',
        'zoom-in',
        'zoom-in-up',
        'zoom-in-down',
        'zoom-in-left',
        'zoom-in-right',
        'zoom-out',
        'zoom-out-up',
        'zoom-out-down',
        'zoom-out-left',
        'zoom-out-right',
      ]
    }
  }
}
</script>

<style lang="css" scoped>
.contaner {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.square {
  margin-top: 200px;;
  height: 100px;
  padding: 50px;
  border: 1px solid red;
  display: flex;
  align-items: center;
}
</style>

