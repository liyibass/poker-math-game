<template>
  <div class="card" v-bind:style="!move ? style : moveStyle">
    <img :src="getImgUrl(Card.id)" v-bind:alt="Card.id" />
  </div>
</template>

<script>
export default {
  name: "Card",
  props: ["Card"],
  data: function () {
    return {
      move: false,
      style: {
        transform: "rotate(" + Math.floor(Math.random() * 20 - 10) + "deg)",
      },
      moveStyle: {
        transform: "rotate(" + Math.floor(Math.random() * 20 - 10) + "deg)",
        left: "400px",
        zIndex: "1",
      },
    };
  },
  methods: {
    getImgUrl(pic) {
      return require("../images/Cards/" + pic + ".jpg");
    },
    moveCardAnimate() {
      this.move = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  left: 20px;
  width: 300px;
  position: absolute;

  transition: all 0.3s ease-out;

  img {
    width: 80%;
  }
}
</style>
