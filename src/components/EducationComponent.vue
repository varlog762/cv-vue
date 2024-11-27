<script setup lang="ts">
defineOptions({
  name: 'EducationComponent',
})
</script>

<template>
  <section class="education">
    <h2 class="education-header">Образование и дополнительное образование</h2>
    <h3 class="specialization">Ремонт и обслуживание радиоэлектронных средств</h3>
    <div class="university">Минский государственный колледж электроники, 2004 - 2006</div>
    <h3 class="specialization">JavaScript/Front-end Pre-School</h3>
    <div class="university">The Rolling Scopes School, 2022</div>
    <h3 class="specialization">Front End Development</h3>
    <div class="university">EPAM UpSkill Me, Декабрь 2022 - Август 2023</div>
    <h3 class="specialization">ANGULAR 2023Q4</h3>
    <div class="university">The Rolling Scopes School, Октябрь 2023 - Январь 2024</div>
    <h3 class="specialization">Node.js - Полный курс</h3>
    <div class="university">Udemy, Январь - Март 2024</div>
    <h3 class="specialization">Docker - Полный курс</h3>
    <div class="university">Udemy, Февраль - Март 2024</div>
    <h3 class="specialization">Angular и NgRx</h3>
    <div class="university">Udemy, Апрель - Июнь 2024</div>
  </section>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/main.scss';

.specialization {
  font-size: 14px;
  line-height: 20px;
  color: $dark;
}

.university {
  padding-bottom: 10px;
  font-family: Prata, serif;
  font-size: 14px;
  line-height: 16px;
  color: $grey;
}
</style>
