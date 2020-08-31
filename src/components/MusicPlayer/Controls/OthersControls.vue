<template>
  <div class="othersControls">
    <div div v-if="songs.length === 0" class="spinner">
      <Spinner spinnerWidth="40px" spinnerHeight="40px" />
    </div>
    <div iv v-else class="others">
      <div class="portada">
        <img v-if="songWithIndice()" :src="songWithIndice().portada" :alt="songWithIndice().nombre" />
      </div>
      <div class="nameSong">
        <h1 v-if="songWithIndice()">{{ songWithIndice().nombre }}</h1>
        <p v-if="songWithIndice()">{{ songWithIndice().artista }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import Spinner from "../../Spinner/Spinner";

export default {
  name: "OthersControls",
  components: {
    Spinner,
  },
  computed: {
    ...mapState(["songs"]),
  },
  methods: {
    ...mapGetters(["songWithIndice"]),
  },
};
</script>

<style scoped>
.othersControls {
  width: 25vw;
  height: 100%;
}

.others {
  display: flex;
  height: 100%;
}

.portada {
  height: 100%;
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
}

img {
  width: 70px;
  height: 70px;
}

.nameSong {
  height: 100%;
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
}

h1 {
  font-size: 20px;
}

p {
  font-size: 17px;
  margin: 0;
}

.spinner {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (max-width: 1280px) {
  h1 {
    font-size: 16px;
  }

  p {
    font-size: 13px;
  }
}

@media (max-width: 1000px) {
  h1 {
    font-size: 12px;
  }

  p {
    font-size: 10px;
  }
}

@media (max-width: 900px) {
  .portada {
    display: none;
  }

  .othersControls {
    justify-content: center;
  }
}

@media (max-width: 768px) {
  .othersControls {
    display: none;
  }
}
</style>
