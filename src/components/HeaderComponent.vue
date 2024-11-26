<script setup lang="ts">
defineOptions({
  name: 'HeaderComponent',
})
</script>

<template>
  <header class="header">
    <div class="wrapper">
      <div class="header_container">
        <div class="photo"></div>
        <div class="info">
          <h2 class="position">Frontend разработчик (Junior)</h2>
          <h1 class="name">Переверзев<br />Григорий<br />Владимирович</h1>
        </div>
        <div class="contacts">
          <div class="email contact_item">
            <div class="mail_icon contact_icon"></div>
            <div class="mail_address">greg.pereverzev@gmail.com</div>
          </div>
          <div class="github contact_item">
            <div class="github_icon contact_icon"></div>
            <div class="github_address">github.com/varlog762</div>
          </div>
          <div class="phone contact_item">
            <div class="phone_icon contact_icon"></div>
            <div class="phone_number">+375 29 562 59 28</div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped></style>
