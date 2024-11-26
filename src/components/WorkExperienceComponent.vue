<script setup lang="ts">
defineOptions({
  name: 'WorkExperienceComponent',
})
</script>

<template>
  <div class="experience">
    <h2 class="exp_header">Опыт работы</h2>
    <div class="work1">
      <h3 class="position">Начальник службы информационных технологий</h3>
      <div class="working_term">ЗАО "ГОЛОГРАФИЧЕСКАЯ ИНДУСТРИЯ", Ноябрь 2020 - Октябрь 2022</div>
      <div class="obligations taj">
        Управлял командой из 3 человек, обеспечивая бесперебойную работу ИТ-инфраструктуры
        предприятия.<br />
        Разработал архитектурные решения, расширив компьютерную сеть и ИС, оптимизировав
        бизнес-процессы.<br />
        Внедрил процедуры и документацию, повысив уровень информационной безопасности, что привело к
        успешной сертификации компании по ISO 14298 (60% требований к стандарту были реализованы в
        сфере ИТ и ИБ).
      </div>
    </div>
    <div class="work2">
      <h3 class="position">Системный администратор</h3>
      <div class="working_term">ЗАО "ГОЛОГРАФИЧЕСКАЯ ИНДУСТРИЯ", Декабрь 2013 - Ноябрь 2020</div>
      <div class="obligations taj">
        Осуществлял администрирование ЛВС, физических серверов на базе Microsoft Windows и Linux, а
        также виртуальных серверов Hyper-V/VMware vSphere.<br />
        Внедрил систему резервного копирования данных на базе Veeam Backup & Replication, обеспечив
        надежную защиту информации компании.<br />
        Участвовал во внедрении нескольких продуктов 1C:Предприятие 8.
      </div>
    </div>
    <div class="work3">
      <h3 class="position">Системный администратор</h3>
      <div class="working_term">ООО "СЕРЖ", Май 2009 - Декабрь 2013</div>
      <div class="obligations taj">
        Осуществлял администрирование ЛВС.<br />
        Внедрил следующие сервисы: Active Directory, DNS, DHCP, виртуализацию на базе VMware
        vSphere.<br />
        Участвовал во внедрении нескольких продуктов 1C:Предприятие 8.
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
