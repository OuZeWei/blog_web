import { defineConfig, presetWind3, presetIcons, presetTypography, transformerDirectives } from 'unocss';

export default defineConfig({
  presets: [
    presetWind3(),
    presetIcons({
      scale: 1.2,
      extraProperties: {
        'display': 'inline-block',
        'vertical-align': 'middle',
      },
    }),
    presetTypography(),
  ],
  transformers: [transformerDirectives()],
  theme: {
    colors: {
      brand: {
        50: '#eff6ff',
        100: '#dbeafe',
        200: '#bfdbfe',
        300: '#93c5fd',
        400: '#60a5fa',
        500: '#3b82f6',
        600: '#2563eb',
        700: '#1d4ed8',
        800: '#1e40af',
        900: '#1e3a8a',
      },
    },
    fontFamily: {
      sans: ['"Segoe UI"', '"PingFang SC"', '"Microsoft YaHei"', 'system-ui', '-apple-system', 'sans-serif'],
      mono: ['"Cascadia Code"', '"Fira Code"', '"Consolas"', 'monospace'],
    },
  },
  shortcuts: {
    'container-main': 'max-w-240 mx-auto px-6',
    'btn': 'inline-flex items-center px-5 py-2.5 rounded-lg font-semibold text-sm transition-all duration-200 cursor-pointer no-underline',
    'btn-primary': 'btn bg-brand-600 text-white border-2 border-brand-600 hover:bg-brand-700 hover:border-brand-700',
    'btn-outline': 'btn bg-transparent text-gray-800 border-2 border-gray-200 hover:border-brand-600 hover:text-brand-600',
    'tag': 'inline-flex items-center px-2.5 py-1 bg-brand-50 text-brand-700 rounded-full text-xs font-medium',
    'card': 'p-6 border border-gray-200 rounded-lg bg-white transition-all duration-200 hover:shadow-md hover:border-brand-200 hover:-translate-y-0.5',
    'section-title': 'flex items-baseline justify-between mb-6',
  },
  rules: [
    ['scrollbar-thin', {
      'scrollbar-width': 'thin',
    }],
  ],
});
