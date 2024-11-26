<script setup lang="ts">
defineOptions({
  name: 'HeaderComponent',
})
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="header-container">
        <div class="photo">
          <img src="/images/img.png" alt="My photo" class="photo-image" />
        </div>
        <div class="info">
          <h2 class="position">Frontend разработчик (Junior)</h2>
          <h1 class="name">
            Григорий<br />
            Переверзев
          </h1>
        </div>
        <div class="contacts">
          <a href="mailto:greg.pereverzev@gmail.com">
            <div class="contact_item">
              <font-awesome-icon :icon="['fas', 'envelope']" class="icon" />
              greg.pereverzev@gmail.com
            </div>
          </a>
          <a href="tel:+375 29 562 59 28">
            <div class="contact_item">
              <font-awesome-icon :icon="['fas', 'phone']" class="icon" />
              +375 29 562 59 28
            </div>
          </a>
          <a href="https://www.linkedin.com/in/gregory-pereverzev-33848759/" target="_blank">
            <div class="contact_item">
              <font-awesome-icon :icon="['fab', 'linkedin']" class="icon" />
              linkedIn
            </div>
          </a>
          <div class="contact_item">
            <font-awesome-icon :icon="['fab', 'github']" class="icon" />
            github
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import '../assets/styles/main.scss';

.header {
  min-height: 400px;
  padding: 72px 64px 0 64px;
  background: url(../images/background.png) center top no-repeat;
  background-size: 100% 100%;
}

.header-container {
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: top;
  flex-wrap: wrap;
  font-family: Prata, serif;
  font-size: 10px;
  line-height: 20px;
  color: $dark;
}

.photo {
  margin-bottom: 20px;
  height: 208px;
  width: 208px;
  border-radius: 100%;
  overflow: hidden;

  &-image {
    display: block;
    margin: 0 auto;
    width: 100%;
    height: 120%;
  }
}

.position {
  font-size: 28px;
  line-height: 28px;
}

.name {
  font-family: Prata, serif;
  font-size: 50px;
  line-height: 155%;
}

.contact_item {
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: 'Prata', serif;
  font-size: 18px;
  line-height: 22px;
}

.icon {
  color: $orange;
}
</style>
