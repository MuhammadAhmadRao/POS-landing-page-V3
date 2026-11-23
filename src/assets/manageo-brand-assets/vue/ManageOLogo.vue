<template>
  <!-- Standalone Symbol -->
  <svg
    v-if="variant === 'symbol'"
    viewBox="0 0 80 64"
    :height="pixelHeight"
    :width="(pixelHeight / 64) * 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    :class="className"
    aria-label="ManageO Cart Symbol"
  >
    <path d="M 6 22 L 20 22" :stroke="cartColor" stroke-width="4.5" stroke-linecap="round" />
    <path d="M 2 31 L 24 31" :stroke="cartColor" stroke-width="4.5" stroke-linecap="round" />
    <path d="M 10 40 L 20 40" :stroke="cartColor" stroke-width="4.5" stroke-linecap="round" />
    <path
      d="M 18 15 C 22 15 25 17 26.5 20 L 32 37 C 33.5 41 36.5 43 40 43 L 60 43 C 63.5 43 66 40.5 67.5 37 L 75 20"
      :stroke="cartColor"
      stroke-width="5.8"
      stroke-linecap="round"
      stroke-linejoin="round"
      fill="none"
    />
    <circle cx="42" cy="53" r="4.5" :fill="cartColor" />
    <circle cx="61" cy="53" r="4.5" :fill="cartColor" />
  </svg>

  <!-- Full Master Logo -->
  <div
    v-else
    :class="className"
    :style="{ display: 'inline-flex', alignItems: 'center', lineHeight: 1 }"
  >
    <svg
      :viewBox="`0 0 ${fullWidth} 64`"
      :height="pixelHeight"
      :width="calculatedWidth"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="ManageO POS Logo"
    >
      <defs>
        <linearGradient :id="`vueManageOGrad_${variant}`" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#0062FF" />
          <stop offset="50%" stop-color="#008CFF" />
          <stop offset="100%" stop-color="#00D5FF" />
        </linearGradient>
      </defs>

      <!-- Speed Cart -->
      <g transform="translate(4, 6) scale(0.82)">
        <path d="M 6 22 L 20 22" :stroke="cartColor" stroke-width="4.5" stroke-linecap="round" />
        <path d="M 2 31 L 24 31" :stroke="cartColor" stroke-width="4.5" stroke-linecap="round" />
        <path d="M 10 40 L 20 40" :stroke="cartColor" stroke-width="4.5" stroke-linecap="round" />
        <path
          d="M 18 15 C 22 15 25 17 26.5 20 L 32 37 C 33.5 41 36.5 43 40 43 L 60 43 C 63.5 43 66 40.5 67.5 37 L 75 20"
          :stroke="cartColor"
          stroke-width="5.8"
          stroke-linecap="round"
          stroke-linejoin="round"
          fill="none"
        />
        <circle cx="42" cy="53" r="4.5" :fill="cartColor" />
        <circle cx="61" cy="53" r="4.5" :fill="cartColor" />
      </g>

      <!-- Wordmark -->
      <text
        x="84"
        y="44"
        :fill="textColor"
        font-family="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif"
        font-size="44"
        font-weight="800"
        letter-spacing="-1.2px"
      >
        Manage
      </text>

      <!-- Circular Gradient Ring O -->
      <circle
        cx="269"
        cy="28.5"
        r="14.5"
        fill="none"
        :stroke="`url(#vueManageOGrad_${variant})`"
        stroke-width="7.8"
      />

      <!-- Pill Badge [ POS ] -->
      <g v-if="showBadge" transform="translate(304, 18)">
        <rect
          width="52"
          height="24"
          rx="7"
          :fill="badgeBg"
          :stroke="isDark ? '#334155' : 'transparent'"
          stroke-width="1"
        />
        <text
          x="26"
          y="17"
          :fill="badgeText"
          font-family="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif"
          font-size="12.5"
          font-weight="800"
          letter-spacing="0.5px"
          text-anchor="middle"
        >
          POS
        </text>
      </g>
    </svg>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(
  defineProps<{
    variant?: 'primary' | 'dark' | 'symbol' | 'monochrome';
    size?: 'sm' | 'md' | 'lg' | 'xl' | number;
    showBadge?: boolean;
    className?: string;
  }>(),
  {
    variant: 'primary',
    size: 'md',
    showBadge: true,
    className: '',
  }
);

const heightMap: Record<string, number> = { sm: 24, md: 36, lg: 48, xl: 60 };
const pixelHeight = computed(() => (typeof props.size === 'number' ? props.size : heightMap[props.size] || 36));

const isDark = computed(() => props.variant === 'dark');
const isMono = computed(() => props.variant === 'monochrome');
const textColor = computed(() => (isDark.value ? '#FFFFFF' : isMono.value ? '#000000' : '#0F172A'));
const cartColor = computed(() => (isDark.value ? '#38BDF8' : isMono.value ? textColor.value : '#0072F5'));
const badgeBg = computed(() => (isDark.value ? '#1E293B' : '#EEF4FF'));
const badgeText = computed(() => (isDark.value ? '#60A5FA' : '#1D4ED8'));

const fullWidth = computed(() => (props.showBadge ? 370 : 305));
const calculatedWidth = computed(() => (pixelHeight.value / 64) * fullWidth.value);
</script>