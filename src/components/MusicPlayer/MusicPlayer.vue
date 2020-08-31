<template>
  <div class="musicPlayer">
    <OthersControls />
    <PrincipalControls />
    <ControlVolume />
  </div>
</template>

<script>
import ControlVolume from "./Controls/ControlVolume";
import PrincipalControls from "./Controls/PrincipalControls";
import OthersControls from "./Controls/OthersControls";

export default {
  name: "MusicPlayer",
  components: {
    ControlVolume,
    PrincipalControls,
    OthersControls,
  },
};
</script>

<style scoped>
.musicPlayer {
  height: 15vh;
  width: 100vw;
  background: #fff;
  box-shadow: 6px 0 9px rgb(66, 66, 66);
  display: flex;
  justify-content: center;
}

@media (max-width: 425px) {
  .musicPlayer {
    height: 90px;
    position: fixed;
    bottom: 0;
  }
}
</style>
