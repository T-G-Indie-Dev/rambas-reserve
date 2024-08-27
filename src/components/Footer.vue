<template>
	<div class="footer-container">
	  <div class="text-container">
		<p class="title">Rambas <span class="subtitle">Reserve</span></p>
	  </div>
  
	  <div class="social-container">
		<a href="#">
		  <i class="fa-brands fa-instagram socialIcon"></i>
		</a>
		<a href="#">
		  <i class="fa-brands fa-linkedin socialIcon"></i>
		</a>
		<a href="#">
		  <i class="fa-brands fa-facebook socialIcon"></i>
		</a>
	  </div>
	</div>
  </template>
  
  <script>
  
  export default {
  	name: 'FooterSection'
  }
  </script>
  
  <style scoped>
  .footer-container {
	background-color: #374151; /* Tailwind stone-700 */
	width: 100%;
	padding: 32px; /* Tailwind p-8 */
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	gap: 32px; /* Tailwind gap-8 */
	color: #f1f5f9; /* Tailwind stone-100 */
  }
  
  .text-container {
	text-align: center;
  }
  
  .title {
	letter-spacing: 0.2em; /* Tailwind tracking-widest */
	font-weight: 600; /* Tailwind font-semibold */
	color: #f1f5f9; /* Tailwind stone-100 */
  }
  
  .subtitle {
	letter-spacing: 0.2em; /* Tailwind tracking-widest */
	font-weight: 300; /* Tailwind font-light */
	color: #f1f5f9; /* Tailwind stone-100 */
  }
  
  .social-container {
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 32px; /* Tailwind gap-8 */
  }
  
  .socialIcon {
	color: #f1f5f9; /* Tailwind stone-100 */
	font-size: 1.5rem; /* Adjust icon size */
	transition: color 0.3s ease;
  }
  
  .socialIcon:hover {
	color: #a8a29e; /* Change color on hover */
  }
  </style>
  