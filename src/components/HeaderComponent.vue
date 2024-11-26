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
            <font-awesome-icon :icon="['fas', 'envelope']" />
            <div class="mail_address">greg.pereverzev@gmail.com</div>
          </div>
          <div class="github contact_item">
            <font-awesome-icon :icon="['fab', 'github']" />
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

<style lang="scss" scoped>
.header {
  min-height: 200px;
  padding: 30px;
  background: url(../images/background.png) center no-repeat;

  .header_container {
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-family: Prata, serif;
    font-size: 10px;
    line-height: 20px;
    color: #222;

    .photo {
      height: 104px;
      width: 104px;
      border-radius: 100%;
      background: url(../images/img.png) center no-repeat;
    }

    .info {
      margin-right: 20px;
    }

    .contacts {
      .contact_item {
        display: flex;
        justify-content: start;
        align-items: center;
        gap: 4px;

        .contact_icon {
          padding: 0 8px;
          height: 14px;
          width: 14px;
        }
      }

      .email {
        .mail_icon {
          background: url(../icons/Mail_black.png) center no-repeat;
        }
      }

      .in {
        .in_icon {
          background: url(../icons/LinkedIN_black.png) center no-repeat;
        }
      }

      .github {
        .github_icon {
          background: url(../icons/github.png) center no-repeat;
        }
      }

      .phone {
        .phone_icon {
          background: url(../icons/Combined_Shape.png) center no-repeat;
        }
      }
    }
  }
}
</style>
