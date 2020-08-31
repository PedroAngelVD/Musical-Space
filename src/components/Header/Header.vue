<template>
  <header>
    <div class="logo">
      <a href="/">
        <img src="../../assets/logo.png" alt="logo" />
      </a>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
header {
  height: 15vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  box-shadow: 6px 0 9px rgb(66, 66, 66);
}

img {
  display: block;
}

@media (max-width: 425px) {
  header {
    height: 90px;
  }

  img {
    transform: scale(0.8);
  }
}
</style>
