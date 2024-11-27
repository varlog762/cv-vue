<script setup lang="ts">
defineOptions({
  name: 'WorkExperienceComponent',
})
</script>

<template>
  <section class="experience">
    <h2 class="experience-header">Опыт работы</h2>
    <div class="job-item">
      <h3 class="position">Начальник службы информационных технологий</h3>
      <div class="company">ЗАО "ГОЛОГРАФИЧЕСКАЯ ИНДУСТРИЯ", Ноябрь 2020 - Октябрь 2022</div>
      <div class="obligations">
        Управлял командой из 3 человек, обеспечивая бесперебойную работу ИТ-инфраструктуры
        предприятия. Разработал архитектурные решения, расширив компьютерную сеть и ИС,
        оптимизировав бизнес-процессы. Внедрил процедуры и документацию, повысив уровень
        информационной безопасности, что привело к успешной сертификации компании по ISO 14298 (60%
        требований к стандарту были реализованы в сфере ИТ и ИБ).
      </div>
    </div>
    <div class="job-item">
      <h3 class="position">Системный администратор</h3>
      <div class="company">ЗАО "ГОЛОГРАФИЧЕСКАЯ ИНДУСТРИЯ", Декабрь 2013 - Ноябрь 2020</div>
      <div class="obligations">
        Осуществлял администрирование ЛВС, физических серверов на базе Microsoft Windows и Linux, а
        также виртуальных серверов Hyper-V/VMware vSphere. Внедрил систему резервного копирования
        данных на базе Veeam Backup & Replication, обеспечив надежную защиту информации компании.
        Участвовал во внедрении нескольких продуктов 1C:Предприятие 8.
      </div>
    </div>
    <div class="job-item">
      <h3 class="position">Системный администратор</h3>
      <div class="company">ООО "СЕРЖ", Май 2009 - Декабрь 2013</div>
      <div class="obligations">
        Осуществлял администрирование ЛВС.<br />
        Внедрил следующие сервисы: Active Directory, DNS, DHCP, виртуализацию на базе VMware
        vSphere.<br />
        Участвовал во внедрении нескольких продуктов 1C:Предприятие 8.
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/main.scss';

.experience {
  max-width: 50%;
}

.position {
  color: $dark;
  font-size: 22px;
  line-height: 24px;
  margin-bottom: 10px;
}

.company {
  margin-bottom: 16px;
  font-family: Prata, serif;
  font-size: 17px;
  line-height: 19px;
  color: $grey;
}

.obligations {
  margin-bottom: 16px;
  font-family: Poppins, sans-serif;
  font-size: 16px;
  line-height: 18px;
  color: $dark;
}
</style>
