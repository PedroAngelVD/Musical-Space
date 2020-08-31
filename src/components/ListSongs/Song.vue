<template>
  <div class="song" @click="selectSong(index)">
    <h3>{{ song.artista }}</h3>
    <img :src="song.portada" :alt="song.nombre" width="100" />
    <p>{{ song.nombre }}</p>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "Song",
  props: {
    song: {},
    index: Number,
  },
  methods: {
    ...mapMutations(["selectSong"]),
  },
};
</script>

<style scoped>
.song {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 80%;
  margin: 1rem;
  padding: 0.5rem;
  cursor: pointer;
  box-shadow: 1px 2px 7px rgb(66, 66, 66);
}

h3,
p {
  text-align: center;
  margin: 0.7rem;
}

@media (min-width: 768px) {
  .song {
    width: 20rem;
  }
}
</style>
