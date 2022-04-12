<template>
  <div>
    <client-only>
      <CodingWorkshopSlideP5
        :content-counter="contentCounter"
        :content="content"
        :content-loop="contentLoop"
        @content-done="contentDone"
      >
      </CodingWorkshopSlideP5>
    </client-only>

    <div
    class="
      full-width-wrapper full-height-wrapper
      position-absolute fixed-top
      d-flex align-items-center justify-content-center
    "
    >
      <!-- Slide content -->
      <div
        v-if="content[contentCounter].type === 'RTF'"
        class="workshop-slide-content container"
      >
        <h1
          class="text-white"
        >
          {{ content[contentCounter].title }}
        </h1>
        <h2
          class="text-white"
        >
          {{ content[contentCounter].subtitle }}
        </h2>
        <ul
          v-if="content[contentCounter].contentList.length > 0"
          class="text-white"
        >
          <li
            v-for="contentItem in content[contentCounter].contentList"
            :key="contentItem"
          >
            <h3
            >
              <small>
                {{ contentItem }}
              </small>
            </h3>
          </li>
        </ul>
        <div
          v-if="content[contentCounter].images[0].id !== ''"
          class="
            workshop-slide-img-wrapper
            img-object-contain
          "
        >
          <NuxtImg
            provider="cloudinary"
            :src="`${content[contentCounter].images[0].id}`"
          />
          <a
            :href="content[contentCounter].images[0].source"
            target="_blank"
            class="
              text-small
              text-secondary
            "
          >
            <small>
              Source: {{ content[contentCounter].images[0].source }}
            </small>
          </a>
        </div>
        <div
          class="mt-2"
        >
          <span>
            Links
          </span>
          <ul
            class="list-unstyled">
            <li
              v-for="url in content[contentCounter].URL"
              :key="url"
            >
              <a
                :href="url" 
                target="_blank"
                class="
                  text-white
                "
              >
                {{ url }}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Page Buttons -->
      <div
        class="
          slides-control-wrapper mb-3
          text-center text-white
          cursor-pointer
          d-flex align-items-center
        "
      >
        <i
          class="
            material-icons
            link-secondary text-decoration-none
          "
          :class="{ 'disabled': contentCounter === 0 }"
          @click.prevent="prevContent"
        >
          arrow_back_ios
        </i>
        <input
          v-model.number.lazy="pageCount" type="number"
          class="
            form-control workshop-slides-form-control
            text-center
          "
        >
        <span
          class="ml-2"
        >
          / {{ content.length }}
        </span>
        <i
          class="
            material-icons
            link-secondary text-decoration-none
          "
          :class="{ 'disabled': contentCounter === content.length - 1 }"
          @click.prevent="nextContent"
        >
          arrow_forward_ios
        </i>
      </div>
      <!-- sound volume button -->
    </div>
  </div>
</template>

<script>

export default {
  name: 'NotesIntroCreativeCoding',
  components: {
    CodingWorkshopSlideP5: () => {
      if (process.client) {
        return import("../../../components/CodingWorkshopSlideP5.vue");
      }
    }
  },
  data () {
    return {
      // interaction content
      contentCounter: 0,
      pageCount: 1,
      content: [
        {
          type: 'plain text',
          content: 'Introduction to Creative Coding: Interactive Fireworks Party 創意編程入門: 互動花火大會',
        },
        {
          type: 'plain text',
          content: 'Who am I?',
        },
        {
          type: 'plain text',
          content: 'Echo Hui',
        },
        {
          type: 'plain text',
          content: '一位新媒體藝術家及網頁開發工程師，擅於探索視覺及嗅覺感知的邊界',
        },
        {
          type: 'plain text',
          content: 'Creative Coding 是甚麼?',
        },
        {
          type: 'plain text',
          content: 'Coding as an Artistic Medium',
        },
        {
          type: 'plain text',
          content: 'Aesthetics + Computation',
        },
        {
          type: 'plain text',
          content: 'Generative, Interactive, Transcoding and Transmediality, Connectivity, Corporeality and Virtuality',
        },
        {
          type: 'plain text',
          content: 'Generative'
        },
        {
          type: 'RTF',
          title: 'Generative - Zach Lieberman',
          subtitle: 'Adjunct Associate Professor - MIT Media Lab Future Sketches',
          contentList: [],
          images: [
            {
              id:'generative-1_ik5vy6.jpg',
              source: 'https://www.instagram.com/p/CX3o4EBKXUf/',
            }
          ],
          URL: [
            'https://www.instagram.com/p/CX3o4EBKXUf/',
            'https://www.instagram.com/p/CR9GYCljnl0/'
          ],
        },
        {
          type: 'RTF',
          title: 'Generative - Takawo',
          subtitle: 'a creative coder based in Japan',
          contentList: [],
          images: [
            {
              id:'generative-3_hsobwn.jpg',
              source: 'https://openprocessing.org/sketch/1393689',
            }
          ],
          URL: [
            'https://openprocessing.org/sketch/1393689',
            'https://openprocessing.org/sketch/1146807'
          ],
        },
        {
          type: 'RTF',
          title: 'Generative - NFT',
          subtitle: 'CryptoPunks',
          contentList: [
            '10,000 uniquely generated characters',
            'Ethereum Blockchain'
          ],
          images: [
            {
              id:'NFT-2_qfuwlp.jpg',
              source: 'https://www.larvalabs.com/cryptopunks',
            }
          ],
          URL: [
            'https://www.larvalabs.com/cryptopunks'
          ],
        },
        {
          type: 'RTF',
          title: 'Generative - NFT marketplace for creative coder',
          subtitle: 'ArtBlocks.io',
          contentList: [
            '10,000 uniquely generated characters',
            'Ethereum Blockchain'
          ],
          images: [
            {
              id:'NFT-1_dyd1mc.jpg',
              source: 'https://www.artblocks.io/',
            }
          ],
          URL: [
            'https://www.artblocks.io/projects?section=curated'
          ],
        },
        {
          type: 'plain text',
          content: 'Generative & Transcoding and Transmediality'
        },
        {
          type: 'RTF',
          title: 'Generative & Transcoding and Transmediality',
          subtitle: '《聲音的建築展》- 台北',
          contentList: [],
          images: [
            {
              id:'generative-6_diikco.jpg',
              source: 'https://www.marieclaire.com.tw/lifestyle/art/50364',
            }
          ],
          URL: [
            'https://www.youtube.com/watch?v=enTyMgHrba4'
          ],
        },
        {
          type: 'plain text',
          content: 'Interactive'
        },
        {
          type: 'RTF',
          title: 'Interactive (Web-based) - Camera Images',
          subtitle: 'Google Experiments',
          contentList: [],
          images: [
            {
              id:'interactive-1_utaokf.jpg',
              source: 'https://experiments.withgoogle.com/collection/creatability',
            }
          ],
          URL: [
            'https://creatability.withgoogle.com/keyboard/'
          ],
        },
        {
          type: 'RTF',
          title: 'Interactive (Web-based) - Mouse',
          subtitle: 'Echo Hui & Kelly Chu - Amorphous Hotel',
          contentList: [],
          images: [
            {
              id:'amorhpus-hotel_u8jd56.png',
              source: 'Echo Hui',
            }
          ],
          URL: [
            'https://www.amorphoushotel.com'
          ],
        },
        {
          type: 'RTF',
          title: 'Interactive (Physical) - Neil Mendoza',
          subtitle: 'ROBOTIC VOICE ACTIVATED WORD KICKING MACHINE',
          contentList: [],
          images: [
            {
              id:'interactive-2_lco8yw.jpg',
              source: 'https://www.neilmendoza.com/portfolio/robotic-voice-activated-word-kicking-machine/',
            }
          ],
          URL: [
            'https://www.neilmendoza.com/portfolio/robotic-voice-activated-word-kicking-machine/'
          ],
        },
        {
          type: 'RTF',
          title: 'Interactive (Physical) - Echo Hui',
          subtitle: 'Interactive LED Wall',
          contentList: [],
          images: [
            {
              id:'interactive-3_ayvbxp.jpg',
              source: 'Echo Hui',
            }
          ],
          URL: [
            ''
          ],
        },
        {
          type: 'RTF',
          title: 'Interactive (Physical) - Echo Hui',
          subtitle: 'Interactive LED Wall',
          contentList: [],
          images: [
            {
              id:'interactive-4_seij9k.jpg',
              source: 'Echo Hui',
            }
          ],
          URL: [
            'https://vimeo.com/687814795'
          ],
        },
        {
          type: 'plain text',
          content: 'Creative Coding Community'
        },
        {
          type: 'RTF',
          title: 'Creative Coding Community Activities',
          subtitle: 'Twitter 創意編程煙火大會',
          contentList: [
            'p5.js 是一個遍佈世界各地的開發社群',
            '每隔幾年，美國就會舉行一次 p5.js 開發人員大會， 藝術家、設計師、開發人員、教育工作者協力推進 p5.js 項目',
            '(2021年8月)有一群日本Creative Coder在Processing Community Day時串連起社群, 在Twitter上辦起虛擬的花火大會,透過各自的作品在版面上綻放了大大小小的煙火, 替最近被疫情拉開實體距離的生活中, 增添一些夏天的顏色'
          ],
          images: [
            {
              id:'fireworks-twitter_drqnwv.png',
              source: '',
            }
          ],
          URL: [
            'https://twitter.com/hashtag/CreativeCoding%E8%8A%B1%E7%81%AB%E5%A4%A7%E4%BC%9A?src=hashtag_click',
            'https://day.processing.org/'
          ],
        },
        {
          type: 'plain text',
          content: 'Creative Coding Languages'
        },
        {
          type: 'RTF',
          title: 'Creative Coding Languages',
          subtitle: 'Processing - Java',
          contentList: [
            'To make coding accessible for artists, designers, educators, and beginners',
            'Around the year 2000, Ben Fry and Casey Reas developed the Processing Language in MIT Media Lab',
            'Professor John Maeda MIT Media Lab Research Group - The Aesthetics and Computation Group'
          ],
          images: [
            {
              id:'',
              source: '',
            }
          ],
          URL: [
            'https://www.media.mit.edu/people/maeda/overview/',
            'https://acg.media.mit.edu/',
            'https://processing.org/'
          ],
        },
        {
          type: 'RTF',
          title: 'Creative Coding Languages',
          subtitle: 'p5.js - JavaScript',
          contentList: [
            'To make coding accessible for artists, designers, educators, and beginners, and reinterprets this for the web environment',
          ],
          images: [
            {
              id:'p5JS_wkt7nr.png',
              source: '',
            }
          ],
          URL: [
            'https://p5js.org/',
          ],
        },
        {
          type: 'RTF',
          title: 'Creative Coding Languages',
          subtitle: 'Other important languages and libraries',
          contentList: [
            'Three.js -JavaScript',
            'Paper.js -JavaScript',
            'Openframeworks - C++',
          ],
          images: [
            {
              id:'',
              source: '',
            }
          ],
          URL: [
            'https://threejs.org/examples/#webgl_animation_keyframes',
            'http://paperjs.org/',
            'https://openframeworks.cc/',
            'https://p5js.org/books/'
          ],
        },
        {
          type: 'plain text',
          content: 'Creative Coding Platforms'
        },
        {
          type: 'RTF',
          title: 'Creative Coding Languages',
          subtitle: 'Other important languages and libraries',
          contentList: [
            'Codepen - frontend resources',
            'Openprocessing - p5.js',
          ],
          images: [
            {
              id:'openprocessing_ejja4w.png',
              source: '',
            }
          ],
          URL: [
            'https://codepen.io/trending',
            'https://openprocessing.org/browse/#',
          ],
        },
        {
          type: 'plain text',
          content: 'Let\' code!'
        },
        {
          type: 'RTF',
          title: 'Coding Time - The Importance of Particle Systems',
          subtitle: '',
          contentList: [
            'An essential concept in creating coding and game development',
          ],
          images: [
            {
              id:'amorhpus-hotel-2_qqetfg.jpg',
              source: 'Echo Hui',
            }
          ],
          URL: [
            'https://amorphoushotel.com/SmellLobby',
          ],
        },
        {
          type: 'RTF',
          title: 'Coding Time - The Importance of Particle Systems',
          subtitle: '',
          contentList: [
            'An essential concept in creating coding and game development',
          ],
          images: [
            {
              id:'particle-systems-1_acdqei.jpg',
              source: 'https://natureofcode.com/book/chapter-4-particle-systems/',
            }
          ],
          URL: [
            'https://natureofcode.com/book/chapter-4-particle-systems/',
          ],
        },
        {
          type: 'RTF',
          title: 'Coding Time - Understanding Encapsulation',
          subtitle: '',
          contentList: [
            'Class in p5.js',
          ],
          images: [
            {
              id:'Class-1_h7f7f4.png',
              source: 'Understanding Encapsulation',
            }
          ],
          URL: [
            '',
          ],
        },
        {
          type: 'RTF',
          title: 'Coding Time - Understanding Physics in creative coding',
          subtitle: 'Velocity, acceleration and gravity',
          contentList: [
            '',
          ],
          images: [
            {
              id:'Speed-and-Velocity_k3cycz.jpg',
              source: 'https://www.coolkidfacts.com/speed-and-velocity/',
            }
          ],
          URL: [
            '',
          ],
        },
        {
          type: 'RTF',
          title: 'Coding Time - Understanding Physics in creative coding',
          subtitle: 'Velocity, acceleration and gravity',
          contentList: [
            'To simplify things in the particle system, we assume the mass (m) to be 1.',
            'F = ma',
            'F = (1) * a',
            'Thus, force equals acceleration. F = a'
          ],
          images: [
            {
              id:'gravity-acceleration_cmvmap.jpg',
              source: 'https://www.piping-designer.com/index.php/properties/classical-mechanics/384-gravitational-acceleration',
            }
          ],
          URL: [
            '',
          ],
        },
        {
          type: 'RTF',
          title: 'Introduction to Creative Coding: Interactive Fireworks Party 創意編程入門: 互動花火大會',
          subtitle: 'Licenses',
          contentList: [],
          images: [
            {
              id:'licenses_wrlapo.png',
              source: 'Openprocessing',
            }
          ],
          URL: [
            'https://creativecommons.org/licenses/?lang=en',
          ],
        },
        {
          type: 'RTF',
          title: 'Introduction to Creative Coding: Interactive Fireworks Party 創意編程入門: 互動花火大會',
          subtitle: 'Workshop Resources',
          contentList: [],
          images: [
            {
              id:'',
              source: '',
            }
          ],
          URL: [
            'https://www.noseborg.com/workshops/IntroToCreativeCoding/WorkshopResources',
          ],
        },
      ],
      contentLoop: true,
    };
  },
  watch: {
    pageCount() {
      this.contentCounter = this.pageCount - 1;
      this.contentLoop = true;
    },
  },
  mounted() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('overflow-hidden');
  },
  unmounted() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('overflow-hidden');
  },
  methods: {
    contentDone() {
      this.contentLoop = false;
    },
    prevContent() {
      this.contentCounter -= 1;
      this.pageCount -= 1;
      this.contentLoop = true;
    },
    nextContent() {
      this.contentCounter += 1;
      this.pageCount += 1;
      this.contentLoop = true;
    },
    goToNextPage() {
      // console.log('go to next page');
    },
  },
};
</script>
