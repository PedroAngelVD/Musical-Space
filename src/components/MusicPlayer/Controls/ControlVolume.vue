<template>
  <div class="volume">
    <div>
      <img
        class="reduceVolume"
        @click="reduceVolume"
        src="../../../assets/img/reduce-volume.svg"
        alt="reduceVolume"
      />
    </div>

    <div>
      <div v-if="mutedAudio">
        <img
          class="volumeActivated"
          @click="muted"
          src="../../../assets/img/mute.svg"
          alt="volumeMuted"
        />
      </div>
      <div v-else>
        <img
          class="volumeActivated"
          @click="muted"
          src="../../../assets/img/volume-adjustment.svg"
          alt="volumeMuted"
        />
      </div>
    </div>

    <div>
      <img
        class="upVolume"
        @click="upVolume"
        src="../../../assets/img/volume-up.svg"
        alt="upVolume"
      />
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "ControlVolume",
  computed: {
    ...mapState(["mutedAudio"]),
  },
  methods: {
    ...mapMutations(["muted", "reduceVolume", "upVolume"]),
  },
};
</script>

<style scoped>
.volume {
  width: 25vw;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

img {
  width: 42px;
  cursor: pointer;
  filter: drop-shadow(2px 2px 3px rgb(66, 66, 66));
}

.volumeActivated {
  width: 64px;
  margin-left: 10px;
  margin-right: 10px;
}

@media (max-width: 768px) {
  .volume {
    display: none;
  }
}
</style>