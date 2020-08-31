<template>
  <div class="listSongs">
    <div v-if="songs.length === 0" class="spinner">
      <Spinner spinnerWidth="120px" spinnerHeight="120px" />
    </div>
    <div v-else class="container">
      <button class="btnAdd" @click="changeListOrAdd">Agregar</button>
      <div v-for="(song, index) in songs" :key="index" class="song-container">
        <Song :song="song" :index="index" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import Song from "./Song";
import Spinner from "../Spinner/Spinner";

export default {
  name: "ListSongs",
  components: {
    Song,
    Spinner,
  },
  computed: {
    ...mapState(["songs"]),
  },
  methods: {
    ...mapMutations(["changeListOrAdd"]),
  },
};
</script>

<style scoped>
.listSongs {
  height: calc(100vh - 30vh);
  width: 100%;
  overflow-y: scroll;
  position: relative;
}

.song-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.btnAdd {
  position: fixed;
  width: 6rem;
  height: 1.5rem;
  transform: rotate(90deg);
  bottom: 50vh;
  left: -37px;
  background-color: #a02442;
  color: #fff;
  cursor: pointer;
  font-weight: 500;
  border-style: none;
  box-shadow: 1px -1px 3px rgb(66, 66, 66);
}

.spinner {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (max-width: 425px) {
  .listSongs {
    height: calc(100vh - 180px);
  }
}

@media (min-width: 768px) {
  .song-container {
    display: inline-block;
    height: auto;
  }
  .listSongs {
    display: flex;
    justify-content: center;
  }

  .container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .container {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (min-width: 1440px) {
  .container {
    grid-template-columns: repeat(4, 1fr);
  }
  .listSongs {
    align-items: flex-start;
  }
}

@media (min-width: 2560px) {
  .container {
    grid-template-columns: repeat(6, 1fr);
  }
}
</style>
