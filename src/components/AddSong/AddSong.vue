<template>
  <div class="addSong">
    <button class="btnListar" @click="changeListOrAdd">Listar</button>
    <form @submit="datos" action="#" id="formulario">
      <div>
        <label for="artista">
          Artista
          <span>*</span>
        </label>
        <input type="text" id="artista" placeholder="Nombre del Artista" required />
      </div>
      <div>
        <label for="cancion">
          Cancion
          <span>*</span>
        </label>
        <input type="text" id="cancion" placeholder="Nombre de la Cancion" required />
      </div>
      <div>
        <label for="portada">Portada</label>
        <input type="text" id="portada" placeholder="https://www.images.com/images.jpg" />
      </div>
      <div>
        <label for="file">
          Musica/Mp3
          <span>*</span>
        </label>
        <input type="file" id="file" accept=".mp3" @change="fileDato" required />
      </div>
      <div>
        <button type="submit" id="save">{{uploadValue === 0 ? 'Guardar' : 'Cargando..'}}</button>
        <progress :value="uploadValue" max="100"></progress>
      </div>
    </form>
  </div>
</template>

<script>
import { db, storage } from "../../.firebase/firebaseConfig";
import { mapActions, mapMutations } from "vuex";

export default {
  name: "AddSong",
  data() {
    return {
      uploadValue: 0,
      file: File,
    };
  },
  methods: {
    ...mapMutations(["changeListOrAdd"]),
    async datos(event) {
      event.preventDefault();

      const artista = document.getElementById("artista").value;
      const nombre = document.getElementById("cancion").value;
      const portada = document.getElementById("portada").value;

      const storageRef = storage.ref(`music/${this.file.name}`);
      const task = storageRef.put(this.file);

      document.getElementById("save").setAttribute("disabled", "");
      document.getElementById("formulario").reset();

      task.on(
        "state_changed",
        (snapshot) => {
          let percentage =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          if (percentage === 100) {
            this.uploadValue = 0;
          } else {
            this.uploadValue = percentage;
          }
        },
        (error) => {
          console.error(error.message);
        },
        async () => {
          const audio = await task.snapshot.ref.getDownloadURL();
          await db.collection("list_music").add({
            artista,
            nombre,
            portada,
            url: audio,
          });
          this.getSongs();
          document.getElementById("save").removeAttribute("disabled");
        }
      );
    },
    fileDato(event) {
      const file = event.target.files[0];
      this.file = file;
    },
    ...mapActions(["getSongs"]),
  },
};
</script>

<style scoped>
.addSong {
  height: calc(100vh - 30vh);
  min-height: 400px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  position: relative;
}

form {
  width: 300px;
}

span {
  color: red;
}

label {
  display: block;
  font-weight: 600;
}

input {
  width: 100%;
  height: 24px;
}

progress::-webkit-progress-value {
  background-image: -webkit-linear-gradient(
      top,
      rgba(255, 255, 255, 0.164),
      rgba(0, 0, 0, 0.144)
    ),
    -webkit-linear-gradient(left, #352c8c, #b02337);
}

progress::-webkit-progress-bar {
  background-color: #fff;
}

progress {
  position: absolute;
  left: 0;
  top: -18px;
  width: 100%;
  z-index: -1;
  -webkit-appearance: none;
  appearance: none;
}

button {
  transition: 0.3s;
  width: 100%;
  height: 30px;
  text-align: center;
  color: #fff;
  background-color: #822758;
  border-width: 0;
  cursor: pointer;
}

button:disabled {
  transition: 0.3s;
  cursor: wait;
  background-color: #1d1d1d;
}

.btnListar {
  position: fixed;
  width: 6rem;
  height: 1.5rem;
  transform: rotate(90deg);
  bottom: 50vh;
  right: -37px;
  font-weight: 500;
  border-style: none;
  box-shadow: 1px -1px 3px rgb(66, 66, 66);
}

@media (max-width: 425px) {
  label {
    font-size: 20px;
  }

  input {
    margin-bottom: 10px;
  }
}
</style>
