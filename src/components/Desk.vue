<template>
  <div>
    <div v-on:click="moveCard">
      <div class="cardContainer">
        <Card v-for="item in PokerContainer" v-bind:Card="item" v-bind:key="item.id" />
      </div>
      <div class="Desk">
        <Card v-for="item in Desk" v-bind:Card="item" v-bind:key="item.id" />
      </div>
    </div>
  </div>
</template>

<script>
import PokerContainer from "./Poker";
import Card from "./Card";
const Desk = [];

export default {
  name: "Desk",
  components: { Card },
  data: function () {
    return {
      PokerContainer: PokerContainer,
      Desk: Desk,
    };
  },
  methods: {
    shuffle: function () {
      const array = PokerContainer;
      let i, j;
      for (i = array.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));

        [array[i], array[j]] = [array[j], array[i]];
      }
      this.PokerContainer = array;
      console.log(this.PokerContainer);
    },
    moveCard: function () {
      console.log("moved");
      if (PokerContainer.length === 0) return;
      const temp = PokerContainer[PokerContainer.length - 1];
      Desk.push(temp);
      PokerContainer.pop();
    },
  },
  created: function () {
    this.shuffle();
    this.moveCard();
  },

  // componentDidMount
  mounted: function () {},

  // componentDIdUpdate
  updated: function () {},
};
</script>

<style lang="scss" scoped>
button {
  margin-bottom: 100px;
}
.Desk {
  transform: translateX(500px);
}
</style>
