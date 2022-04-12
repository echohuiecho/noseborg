<template>
  <div
    class="
      full-height-wrapper
      position-absolute fixed-top
      d-flex justify-content-center
    "
  >
    <div
      class="workshop-slide-content container"
    >
      <h1
        class="
          text-white mt-5
        "
      >
        {{ resources[0].title }}
      </h1>
      <h2
        class="text-white mt-5"
      >
        {{ resources[0].subtitle }}
      </h2>
      <dl class="row text-white mt-4">
        <template
          v-for="contentItem in resources[0].contentList"
        >
          <dt
            :key="contentItem"
            class="col-md-4"
          >
            <span>
              {{ contentItem.description }}
            </span>
          </dt>
          <dd
            :key="contentItem"
            class="col-md-8"
          >
            <span>
              <a
                :href="contentItem.link" class="text-secondary"
                target="_blank"
              >
                {{  contentItem.link }}
              </a>
            </span>
          </dd>
        </template>
      </dl>
      <div
        v-if="resources[0].images[0].id !== ''"
        class="
          workshop-slide-img-wrapper
          img-object-contain mt-4
        "
      >
        <NuxtImg
          provider="cloudinary"
          :src="`${resources[0].images[0].id}`"
        />
        <a
          :href="resources[0].source"
          target="_blank"
          class="
            text-small
            text-secondary
          "
        >
          <small>
            Source: {{ resources[0].source }}
          </small>
        </a>
      </div>
      <div
        class="mt-5 text-white "
      >
        <h3>
          Learn more about Echo Hui:
        </h3>
        <dl class="text-white mt-4">
          <template
            v-for="url in resources[0].URL"
          >
            <div
              :key="url"
              class=""
            >
              <span>
                {{ url.description }}
              </span>
            </div>
            <div
              :key="url"
              class="mb-3"
            >
              <span>
                <a
                  :href="url.link" class="text-secondary"
                  target="_blank"
                >
                  {{  url.link }}
                </a>
              </span>
            </div>
          </template>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WorkshopResources',
  data () {
    return {
      resources: [
        {
          type: 'RTF',
          title: 'Introduction to Creative Coding: Interactive Fireworks Party 創意編程入門: 互動花火大會',
          subtitle: 'Recommended Resources',
          contentList: [
            {
              description: 'Workshop Tutorial Code - Basic Geometry',
              link: 'https://openprocessing.org/sketch/1537479',
            },
            {
              description: 'Workshop Tutorial Code - Particle Systems motion',
              link: 'https://openprocessing.org/sketch/1535792',
            },
            {
              description: 'Workshop Tutorial Code - Particle Systems, fireworks & emojis',
              link: 'https://openprocessing.org/sketch/1539861',
            },
            {
              description: 'p5.js official documentation',
              link: 'https://p5js.org/',
            },
            {
              description: 'p5.js books',
              link: 'https://p5js.org/books/',
            },
            {
              description: 'p5 web editor',
              link: 'https://editor.p5js.org/',
            },
            {
              description: 'p5.js is not a capital P!',
              link: 'https://github.com/processing/p5.js/issues/1572',
            },
            {
              description: 'Openprocessing',
              link: 'https://openprocessing.org/',
            },
            {
              description: 'Licenses',
              link: 'https://creativecommons.org/licenses/?lang=en',
            },
            {
              description: 'GitHub',
              link: 'https://github.com/',
            },
          ],
          images: [
            {
              id:'',
              source: '',
            }
          ],
          URL: [
            {
              description: 'Instagram - Artworks that involves creative coding, interaction, etc.',
              link: 'https://www.instagram.com/echohuiecho/',
            },
            {
              description: 'GitHub - recent projects and project source code',
              link: 'https://github.com/echohuiecho',
            },
            {
              description: 'Noseborg (Coming Soon) - an artist-led platform that uses code to raise the awareness of olfactory health',
              link: 'http://noseborg.com/',
            },
            {
              description: 'Medium (Coming Soon) - coding resources and tutorials',
              link: 'https://medium.com/@echohui',
            },
          ],
        },
      ],
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
    body.classList.add('bg-black');
  },
  unmounted() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('bg-black');
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
