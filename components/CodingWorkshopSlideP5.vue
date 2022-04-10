<template>
  <VueP5
    @sketch="sketch"
  >
  </VueP5>
</template>

<script>
/* eslint-disable no-undef */
import VueP5 from 'vue-p5';

export default {
  components: { 
    VueP5,
  },
  props: {
    contentLoop: Boolean,
    contentCounter: {
      type: Number,
      default: 0,
    },
    content: {
      type: Array,
      default() {
        return [];
      }
    },
  },
  data () {
    return {
      sizeMode: 'desktop',
      particles: [],
      // typewriter effect
      fontFile: '/font/NotoSansHK-Regular.otf',
      fontRegular: null,
      fontSize: 48,
      fontColor: '',
      textPadding: {
        desktop: 100,
        tablet: 60,
        mobile: 20,
      },
      interval: 4,
      loopCount: 0,
      strCounter: 0,
    };
  },
  watch: {
    contentCounter() {
      this.strCounter = 0;
    },
  },  
  methods: {
    sketch(p5) {
      p5.preload = () => {
        this.fontRegular = p5.loadFont(this.fontFile);

      };

      p5.setup = () => {
        p5.background(0);
        p5.noStroke();
        p5.createCanvas(p5.windowWidth, p5.windowHeight);
        p5.textSize(this.fontSize);
        p5.textFont(this.fontRegular);
        this.fontColor = p5.color(p5.random(255), p5.random(255), p5.random(150, 246));
      };

      p5.windowResized = () => {
        p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
        if (p5.windowWidth <= 575.99) {
          this.sizeMode = 'mobile';
        } else if (p5.windowWidth <= 991.99) {
          this.sizeMode = 'tablet';
        } else {
          this.sizeMode = 'desktop';
        }
      };


      p5.typewriterEffect = (str, loopStatus) => {
        p5.fill(this.fontColor);
        p5.textAlign(p5.CENTER, p5.CENTER);
        p5.text(
            str.substring(0, this.strCounter),
            this.textPadding[this.sizeMode], 0,
            p5.width - this.textPadding[this.sizeMode] * 2, p5.height
        );
        if (loopStatus) {
          if (this.strCounter <= str.length - 1) {
            // this.fontColor = p5.color(p5.random(255), p5.random(255), p5.random(255));
            this.fontColor = p5.color(p5.random(255), p5.random(150, 246), p5.random(150, 246));
            this.loopCount += 1;
            if (this.loopCount >= this.interval) {
              this.loopCount = 0;
              this.strCounter += 1;
            }
          } else {
            this.$emit('content-done');
            this.loopCount = 0;
          }
        }
      };

      p5.draw = () => {
        p5.background(0);

        // animate text
        if (this.content[this.contentCounter].content !== '') {
          if (this.content[this.contentCounter].type === 'plain text') {
            p5.typewriterEffect(this.content[this.contentCounter].content, this.contentLoop);
          }
        }
      };
    }
  },
};
</script>