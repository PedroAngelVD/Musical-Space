<template>
  <div class="principalControls">
    <div>
      <img class="back" @click="back" src="../../../assets/img/back.svg" alt="back" />
    </div>

    <div>
      <img
        class="playOrPause"
        v-if="statePlayOrPause"
        @click="playOrPause()"
        src="../../../assets/img/play.svg"
        alt="play"
      />

      <img
        class="playOrPause"
        v-else
        @click="playOrPause()"
        src="../../../assets/img/pause.svg"
        alt="pause"
        width="66px"
      />
    </div>

    <div>
      <img class="next" @click="next" src="../../../assets/img/next.svg" alt="next" />
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "PrincipalControls",
  computed: {
    ...mapState(["statePlayOrPause"]),
  },
  methods: {
    ...mapMutations(["playOrPause", "next", "back"]),
  },
};
</script>

<style scoped>
.principalControls {
  width: 50vw;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

img {
  cursor: pointer;
  filter: drop-shadow(2px 2px 3px rgb(66, 66, 66));
}

.back,
.next {
  width: 42px;
}

.playOrPause {
  width: 64px;
  margin-left: 10px;
  margin-right: 10px;
}
</style>
