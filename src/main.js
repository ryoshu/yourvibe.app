import ScrollMagic from 'scrollmagic'
import gsap from 'gsap'
import { ScrollMagicPluginGsap } from 'scrollmagic-plugin-gsap'

ScrollMagicPluginGsap(ScrollMagic, gsap);

import HMR from '@roxi/routify/hmr'
import App from './App.svelte';

const app = HMR(App, { target: document.body }, 'routify-app')

export default app;