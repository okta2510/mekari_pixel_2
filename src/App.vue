<template>
  <pixel-wrapper>
    <mp-flex h="100vh" align-items="center" justify-content="center">
      <mp-box text-align="center" max-width="sm">
        <mp-icon name="mekari-brand" size="xl" />
        <mp-heading>Hello Pixel 2</mp-heading>
        <mp-text font-size="lg" py="5">
          ....Mekari Design is a collection of design resources, reusable
          components and guidelines for creating Mekari products. So good news,
          we are finally here.
        </mp-text>
        <mp-button>Get Started</mp-button>
      </mp-box>
    </mp-flex>
  </pixel-wrapper>
</template>

<script>
import PixelWrapper from "./components/PixelWrapper";
import {
  MpBox,
  MpHeading,
  MpText,
  MpButton,
  MpFlex,
  MpIcon,
} from "@mekari/pixel";

export default {
  name: "App",
  components: {
    PixelWrapper,
    MpBox,
    MpText,
    MpHeading,
    MpButton,
    MpFlex,
    MpIcon,
  },
};
</script>
