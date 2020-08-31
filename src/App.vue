<template>
  <div id="app">
    <Header />

    <div v-if="listOrAdd">
      <ListSongs />
    </div>
    <div v-else>
      <AddSong />
    </div>

    <MusicPlayer />
  </div>
</template>

<script>
import Header from "./components/Header/Header";
import MusicPlayer from "./components/MusicPlayer/MusicPlayer";
import ListSongs from "./components/ListSongs/ListSongs";
import AddSong from "./components/AddSong/AddSong";
import { mapActions, mapState } from "vuex";

export default {
  name: "App",
  components: {
    Header,
    MusicPlayer,
    ListSongs,
    AddSong,
  },
  computed: {
    ...mapState(["listOrAdd"]),
  },
  methods: {
    ...mapActions(["getSongs"]),
  },
  created() {
    this.getSongs();
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: "system-ui";
  height: 100vh;
  width: 100vw;
}
</style>
