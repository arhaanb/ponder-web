<template>
  <div class="container">
    <section id="hero" class="center">
      <img
        src="@/assets/img/ponder.svg"
        draggable="false"
        class="logo"
        alt=""
      />
      <br />
      <br />
      <h1 class="center">
        Ponder
      </h1>
      <h5>
        A tool to help you
        <i>think better.</i>
      </h5>
    </section>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.logo {
  width: 7em;
  border-radius: 1em;
  -webkit-box-shadow: 0px 34px 143px -36px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 34px 143px -36px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 34px 143px -36px rgba(0, 0, 0, 0.75);
}

#hero {
  margin: 5em 0;
}
</style>
