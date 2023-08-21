<template>
  <Swipe>
    <div class="wrapper">
      <div class="nav">
        <div class="logo">{{ $t("logo") }}</div>

        <div
          @click.prevent="changeLocale(locale)"
          class="account cursor-pointer hover:text-yellow-500"
        >
          {{ locale.toUpperCase() }}
        </div>
      </div>

      <div class="content">
        <div class="tagline">{{ $t("index.headContent") }}</div>

        <div class="pages">
          <span>{{ index + 1 }}</span
          >/{{ myProduct.length }}
        </div>

        <div class="title">TOEMSUK</div>

        <div class="more cursor-pointer" @click.prevent="onClickMyCup()">
          <a href="#" class="">{{ $t("index.homeBtn") }}</a>
        </div>

        <div class="desc">
          <p>
            {{ $t("index.coffee") }} <span>{{ $t("index.arabica") }}</span>
            {{ $t("index.by") }}
            <br />
            {{ $t("index.pangcon") }}
          </p>

          <span class="text-xl">{{ myProduct[index].name }}</span>

          <p>
            {{ $t("index.desc") }}
          </p>
        </div>
      </div>

      <div class="juice">
        <img :src="myProduct[index].img" alt="" />
      </div>

      <div class="leaves">
        <ul id="scene">
          <li class="layer">
            <img :src="myProduct[index].bg" alt="" />
          </li>
        </ul>
      </div>

      <div class="arrows">
        <button @click.prevent="onClickNext('prev')" class="prev rounded-full">
          <font-awesome-icon icon="fa-solid fa-angle-left" />
        </button>
        <button @click.prevent="onClickNext('next')" class="next rounded-full">
          <font-awesome-icon icon="fa-solid fa-angle-right" />
        </button>
      </div>
      <div class="bottom-text md:hidden">
        <p>^</p>
        <p>Swipe up to enter</p>
      </div>
    </div>
  </Swipe>
</template>

<script>
import { gsap, Expo } from "gsap";
import { useNuxtApp, useRoute, navigateTo } from "#app";

export default {
  name: "Index",
  data() {
    return {
      myProduct: [
        {
          img: "_nuxt/assets/toemsuk_cup.png",
          name: this.$t("index.productName.mocha"),
          bg: "_nuxt/assets/bean1.png",
        },
        // {
        //   img: "_nuxt/assets/LINE_ALBUM_ขนม_230808_2-removebg-preview.png",
        //   name: this.$t("index.productName.latte"),
        //   bg: "_nuxt/assets/11zon_resized.png",
        // },
      ],
      index: 0,
      availableLocales: ["en", "th"],
      isTh: false,
      currentPage: 2,
    };
  },
  computed: {
    locale() {
      return this.isTh === true ? "en" : "th";
    },
  },
  mounted() {
    this.toggleVisibilityAndMoveUp(); // Start the animation loop

    const nuxtApp = useNuxtApp();
    nuxtApp.$bus.$on("swipe", async (direction) => {
      console.log(direction);
      if (direction === "left") {
        this.onClickNext("prev");
      }
      if (direction === "right") {
        this.onClickNext("next");
      }
      if (direction === "up") {
        await this.onClickMyCup();
      }
    });

    this.welcomeHomePage();
  },
  methods: {
    welcomeHomePage() {
      gsap.from(".logo", { opacity: 0, x: -20, ease: Expo.easeInOut });

      gsap.from(".search", {
        delay: 0.5,
        opacity: 0,
        x: -20,
        ease: Expo.easeInOut,
      });
      gsap.from(".account", {
        delay: 0.6,
        opacity: 0,
        x: -20,
        ease: Expo.easeInOut,
      });
      gsap.from(".cart", {
        delay: 0.7,
        opacity: 0,
        x: -20,
        ease: Expo.easeInOut,
      });
      gsap.from(".juice", {
        delay: 2,
        opacity: 0,
        y: -800,
        ease: Expo.easeInOut,
      });

      gsap.from(".leaves .layer:nth-child(1)", {
        delay: 2.2,
        opacity: 0,
        y: -800,
        ease: Expo.easeInOut,
      });
      gsap.from(".title", {
        delay: 1,
        opacity: 0,
        y: 20,
        ease: Expo.easeInOut,
      });
      gsap.from(".tagline", {
        delay: 1.3,
        opacity: 0,
        y: 20,
        ease: Expo.easeInOut,
      });
      gsap.from(".pages", {
        delay: 1.3,
        opacity: 0,
        y: 20,
        ease: Expo.easeInOut,
      });
      gsap.from(".more", {
        delay: 1.4,
        opacity: 0,
        y: 20,
        ease: Expo.easeInOut,
      });
      gsap.from(".desc", {
        delay: 1.4,
        opacity: 0,
        y: 20,
        ease: Expo.easeInOut,
      });
      gsap.from(".arrows", { delay: 2, opacity: 0, ease: Expo.easeInOut });
    },
    toggleVisibilityAndMoveUp() {
      gsap.to(".bottom-text", {
        opacity: 0,
        y: -10, // Adjust the value as needed
        duration: 0.5,
        ease: Expo.easeInOut,
        onComplete: () => {
          gsap.to(".bottom-text", {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: Expo.easeInOut,
            delay: 0.5,
            onComplete: toggleVisibilityAndMoveUp,
          });
        },
      });
    },
    async onClickMyCup() {
      gsap.from(".juice", {
        delay: 0,
        opacity: "100%",
        y: -200,
      });
      gsap.from(".logo", { opacity: "100%", x: -20, ease: Expo.easeInOut });
      gsap.from(".search", {
        delay: 0.5,
        opacity: "100%",
        x: -20,
        ease: Expo.easeInOut,
      });
      gsap.from(".account", {
        delay: 0.6,
        opacity: "100%",
        x: -20,
        ease: Expo.easeInOut,
      });
      gsap.from(".cart", {
        delay: 0.7,
        opacity: "100%",
        x: -20,
        ease: Expo.easeInOut,
      });

      gsap.from(".leaves", {
        delay: 1.2,
        opacity: "100%",
        y: -900,
      });
      gsap.from(".title", {
        delay: 1,
        opacity: "100%",
        y: 20,
        ease: Expo.easeInOut,
      });
      gsap.from(".tagline", {
        delay: 0.5,
        opacity: "100%",
        y: 20,
        ease: Expo.easeInOut,
      });

      gsap.from(".more", {
        delay: 0.7,
        opacity: "100%",
        y: 20,
        ease: Expo.easeInOut,
      });
      gsap.from(".desc", {
        delay: 0.7,
        opacity: "100%",
        y: 20,
        ease: Expo.easeInOut,
      });
      gsap.from(".arrows", { delay: 2, opacity: "100%", ease: Expo.easeInOut });
      gsap.from(".pages", {
        delay: 0.3,
        opacity: "100%",
        y: 20,
        ease: Expo.easeInOut,
      });
      // Wait for animations to complete
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Change the route
      this.$router.replace("/home");
    },
    changeLocale(locale) {
      console.log(this.$t("index.productName.latte"));
      this.isTh = !this.isTh;
      this.$i18n.locale = locale;
    },
    async onClickNext(v) {
      console.log(v);
      v === "next" ? (this.index += 1) : (this.index -= 1);
      if (this.index + 1 > this.myProduct.length) this.index = await 0;
      if (this.index < 0) this.index = (await this.myProduct.length) - 1;
      console.log(this.index);
      gsap.from(".juice", {
        delay: 0,
        opacity: 0,
        y: -800,
        ease: Expo.easeInOut,
      });
      gsap.from(".leaves .layer:nth-child(1)", {
        delay: 0.5,
        opacity: 0,
        y: -800,
        ease: Expo.easeInOut,
      });
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.bottom-text {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  font-size: 16px;
  color: #facc15;
}
body {
  width: 100%;
  height: 100vh;
  font-family: "Montserrat";
  font-size: 12px;
  overflow: hidden;
}

ul {
  list-style: none;
}

.nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top: 20px;
  text-transform: uppercase;
  font-weight: 600;
}
.account {
}

.logo {
  font-size: 40px;
}

.menu-links ul li {
  display: inline-block;
  padding-right: 20px;
}

.cart {
  font-size: 20px;
}

.content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* ไม่ต้องกำหนดความสูงและเนื้อที่จอแบบเต็ม */
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  z-index: -1;
}

.title {
  flex: 0 0 100%;
  font-size: 200px;
  text-transform: uppercase;
  font-weight: 700;
  color: #facc15;
}

.tagline {
  flex: 1;
  font-size: 30px;
  color: #999;
}

.pages {
  flex: 0;
  letter-spacing: 5px;
  color: #999;
}

.pages span {
  font-size: 60px;
  color: #000;
  font-weight: 600;
}

.more {
  flex: 1;
}

.more a {
  text-decoration: none;
  font-size: 20px;
  color: #fff;
  background: #000;
  padding: 10px 30px;
  border-radius: 10px;
}
.more a:hover {
  color: #facc15; /* เปลี่ยนสีตัวอักษรเมื่อเม้าส์ชี้ไป */
  background-color: #000; /* เปลี่ยนสีพื้นหลังเมื่อเม้าส์ชี้ไป */
}

.desc {
  flex: 0 0 30%;
}

.desc p:nth-child(1) {
  font-size: 30px;
  margin-bottom: 20px;
}

.desc p:nth-child(2) {
  line-height: 2;
}

.desc span {
  color: #facc15;
}

.juice {
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 1;
}

.juice img {
  animation: float 4s ease-in-out infinite;
  max-height: 600px;
}

@keyframes float {
  0% {
    transform: translate(-50%, -46%);
  }
  50% {
    transform: translate(-50%, -54%);
  }
  100% {
    transform: translate(-50%, -46%);
  }
}

.leaves {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -5;
}

.leaves img {
  max-width: 100%;
  max-height: 100%;
}

.arrows .prev {
  position: absolute;
  top: 50%;
  left: 100px;
}

.arrows .next {
  position: absolute;
  top: 50%;
  right: 100px;
}

.arrows button {
  border: 1px solid #999;
  background: transparent;
  padding: 20px;
  border-radius: 100%;
  outline: none;
}
.wrapper {
}

.arrows button:hover {
  color: #fff;
  background: #000;
}

@media (max-width: 768px) {
  .desc span {
    display: none;
  }
  .juice img {
    max-height: 300px;
  }
  .title {
    visibility: hidden;
  }
  .desc {
    display: none;
  }
  .content {
    visibility: hidden;
  }
  .menu-links {
    visibility: hidden;
  }
  .arrows {
    visibility: hidden;
  }
  .account {
    /* visibility: hidden; */
  }
  .leaves {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    position: absolute;
    /* top: 0; */
    /* left: 0; */
    z-index: -5;
  }

  .leaves img {
    max-width: 100%;
    max-height: 100%;
  }
  .wrapper {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    position: relative;
  }
  .more {
    /* flex: 1; */
  }

  .more a {
    text-decoration: none;
    font-size: 20px;
    color: #fff;
    background: #000;
    padding: 10px 30px;
    border-radius: 10px;
  }
  .logo {
    color: #facc15;
  }
}
</style>
