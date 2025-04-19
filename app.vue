<template>
  <div id="app">
    <header class="navbar">
      <Navbar />
    </header>
    <main>
      <NuxtPage />
    </main>
    <FooterToggle />
  </div>
</template>

<script setup>
const route = useRoute()

// Applique la classe body selon la page
const updateBodyClass = () => {
  if (route.path === '/') {
    document.body.classList.add('no-padding')
  } else {
    document.body.classList.remove('no-padding')
  }
}

// S'assurer que ça s'exécute après le montage
onMounted(() => {
  updateBodyClass()
})

// Si tu veux que ça s'adapte au changement de page :
watch(() => route.path, updateBodyClass)
</script>

<style>

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1,5;
 	padding-top: 110px;
  font-family: "Delius Swash Caps", cursive;
	background-color: #F4F1ED;
  font-size: 1.2rem;
  max-width: 1920px;
  margin: auto;
}
body.no-padding {
  padding-top: 0 !important;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
</style>