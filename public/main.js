/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/styles.scss":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/styles.scss ***!
  \**************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: "Arial", "Helvetica", sans-serif;
  background-color: #000000;
  margin: 0;
  padding: 0;
  font-size: 16px;
  color: #ffffff;
  line-height: 1.6;
  overflow-x: hidden;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}
@media (max-width: 768px) {
  .container {
    padding: 0 16px;
  }
}

h1, h2, h3, h4, h5, h6 {
  font-family: "Arial", "Helvetica", sans-serif;
  font-weight: 700;
  margin: 0 0 16px 0;
  text-transform: uppercase;
  letter-spacing: 1px;
}

h1 {
  font-size: 48px;
}

h2 {
  font-size: 32px;
}

h3 {
  font-size: 24px;
}

h4 {
  font-size: 18px;
}

h5 {
  font-size: 16px;
}

h6 {
  font-size: 14px;
}

p {
  margin: 0 0 16px 0;
}

a {
  color: #8B5CF6;
  text-decoration: none;
  transition: color 0.3s ease;
}
a:hover {
  color: rgb(173.3953488372, 140.3313953488, 248.6686046512);
}

.text-center {
  text-align: center;
}

.text-left {
  text-align: left;
}

.text-right {
  text-align: right;
}

.text-uppercase {
  text-transform: uppercase;
}

.text-lowercase {
  text-transform: lowercase;
}

.text-capitalize {
  text-transform: capitalize;
}

.font-bold {
  font-weight: 700;
}

.font-semibold {
  font-weight: 600;
}

.font-medium {
  font-weight: 500;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes slideIn {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}
@keyframes shake {
  0%, 100% {
    transform: translateX(0);
  }
  10%, 30%, 50%, 70%, 90% {
    transform: translateX(-5px);
  }
  20%, 40%, 60%, 80% {
    transform: translateX(5px);
  }
}
@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}
@keyframes marquee {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(-100%);
  }
}
.fade-in {
  animation: fadeIn 0.6s ease-out;
}

.slide-in {
  animation: slideIn 0.5s ease-out;
}

.shake {
  animation: shake 0.5s ease-in-out;
}

.pulse {
  animation: pulse 2s infinite;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 16px 32px;
  border: none;
  border-radius: 8px;
  font-family: "Arial", "Helvetica", sans-serif;
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  min-height: 48px;
}
.btn:focus {
  outline: 2px solid #8B5CF6;
  outline-offset: 2px;
}
.btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  pointer-events: none;
}
.btn.loading {
  pointer-events: none;
}
.btn.loading::after {
  content: "";
  position: absolute;
  width: 16px;
  height: 16px;
  border: 2px solid transparent;
  border-top: 2px solid currentColor;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.btn--primary {
  background-color: #8B5CF6;
  color: #ffffff;
}
.btn--primary:hover {
  background-color: rgb(104.6046511628, 43.6686046512, 243.3313953488);
  transform: translateY(-2px);
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
}
.btn--primary:active {
  transform: translateY(0);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.btn--secondary {
  background-color: transparent;
  color: #8B5CF6;
  border: 2px solid #8B5CF6;
}
.btn--secondary:hover {
  background-color: #8B5CF6;
  color: #ffffff;
  transform: translateY(-2px);
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
}
.btn--secondary:active {
  transform: translateY(0);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.btn--outline {
  background-color: transparent;
  color: #ffffff;
  border: 2px solid #ffffff;
}
.btn--outline:hover {
  background-color: #ffffff;
  color: #000000;
  transform: translateY(-2px);
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
}
.btn--outline:active {
  transform: translateY(0);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.btn--ghost {
  background-color: transparent;
  color: #ffffff;
  border: none;
}
.btn--ghost:hover {
  background-color: rgba(255, 255, 255, 0.1);
  transform: translateY(-2px);
}
.btn--ghost:active {
  transform: translateY(0);
}

.btn--sm {
  padding: 8px 16px;
  font-size: 14px;
  min-height: 36px;
}

.btn--lg {
  padding: 24px 48px;
  font-size: 18px;
  min-height: 56px;
}

.btn--xl {
  padding: 32px 64px;
  font-size: 24px;
  min-height: 64px;
}

.btn--icon {
  padding: 16px;
  min-width: 48px;
  min-height: 48px;
}
.btn--icon .btn__icon {
  width: 20px;
  height: 20px;
}

.btn--full {
  width: 100%;
}

.btn-group {
  display: flex;
  gap: 16px;
}
.btn-group.btn-group--vertical {
  flex-direction: column;
}
.btn-group.btn-group--center {
  justify-content: center;
}
.btn-group.btn-group--space-between {
  justify-content: space-between;
}

@media (max-width: 768px) {
  .btn {
    padding: 8px 24px;
    font-size: 14px;
    min-height: 44px;
  }
  .btn--lg {
    padding: 16px 32px;
    font-size: 16px;
    min-height: 52px;
  }
}
.hero-banner {
  position: relative;
  height: 80vh;
  min-height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.hero-banner__background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
.hero-banner__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}
.hero-banner__overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 2;
}
.hero-banner__content {
  position: relative;
  z-index: 3;
  text-align: center;
  color: #ffffff;
}
.hero-banner__cta {
  margin-top: 48px;
}
.hero-banner__button {
  font-size: 18px;
  padding: 24px 48px;
  min-height: 60px;
}
.hero-banner__marquee {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #000000;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  z-index: 3;
}
@media (max-width: 768px) {
  .hero-banner {
    height: 60vh;
    min-height: 400px;
  }
  .hero-banner__button {
    font-size: 16px;
    padding: 16px 32px;
    min-height: 48px;
  }
}

.marquee {
  overflow: hidden;
  white-space: nowrap;
  padding: 16px 0;
}
.marquee__content {
  display: inline-block;
  animation: marquee 30s linear infinite;
  will-change: transform;
}
.marquee__text {
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin: 0 32px;
  color: #ffffff;
}
.marquee__star {
  color: #8B5CF6;
  margin: 0 16px;
  font-size: 24px;
}
.marquee:hover .marquee__content {
  animation-play-state: paused;
}

.shuffle-essentials {
  padding: 96px 0;
  background-color: #000000;
}
.shuffle-essentials__header {
  text-align: center;
  margin-bottom: 96px;
}
.shuffle-essentials__title {
  font-size: 48px;
  color: #ffffff;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
}
.shuffle-essentials__star {
  color: #8B5CF6;
  font-size: 32px;
}
.shuffle-essentials__products {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 48px;
  margin-bottom: 96px;
}
.shuffle-essentials__hidden {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 48px;
  margin-bottom: 96px;
}
.shuffle-essentials__actions {
  text-align: center;
}
.shuffle-essentials__view-all {
  font-size: 18px;
  padding: 24px 48px;
}
@media (max-width: 768px) {
  .shuffle-essentials {
    padding: 64px 0;
  }
  .shuffle-essentials__title {
    font-size: 32px;
    flex-direction: column;
    gap: 16px;
  }
  .shuffle-essentials__products, .shuffle-essentials__hidden {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 24px;
  }
}

.product-card {
  background-color: #111111;
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;
  position: relative;
  border: 1px solid rgba(255, 255, 255, 0.1);
}
.product-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 25px rgba(0, 0, 0, 0.1);
  border-color: #8B5CF6;
}
.product-card:hover .product-card__overlay {
  opacity: 1;
}
.product-card:hover .product-card__image {
  transform: scale(1.05);
}
.product-card__image-container {
  position: relative;
  overflow: hidden;
  aspect-ratio: 1;
}
.product-card__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}
.product-card__overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}
.product-card__add-to-cart {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  padding: 16px 24px;
}
.product-card__cart-icon {
  width: 16px;
  height: 16px;
}
.product-card__info {
  padding: 24px;
}
.product-card__title {
  font-size: 18px;
  font-weight: 600;
  color: #ffffff;
  margin: 0 0 8px 0;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
.product-card__price {
  font-size: 24px;
  font-weight: 700;
  color: #8B5CF6;
  margin: 0;
}
.product-card__badge {
  position: absolute;
  top: 16px;
  right: 16px;
  background-color: #8B5CF6;
  color: #ffffff;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
.product-card--latest {
  border-color: #8B5CF6;
}
.product-card--latest::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, #8B5CF6, rgb(207.7906976744, 188.6627906977, 251.3372093023));
}

.latest-collection {
  padding: 96px 0;
  background-color: #000000;
}
.latest-collection__header {
  text-align: center;
  margin-bottom: 96px;
}
.latest-collection__title {
  font-size: 48px;
  color: #ffffff;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
}
.latest-collection__star {
  color: #8B5CF6;
  font-size: 32px;
}
.latest-collection__content {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 96px;
  align-items: start;
}
.latest-collection__images {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
}
.latest-collection__image-item {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  aspect-ratio: 1;
}
.latest-collection__image-item:first-child {
  grid-column: 1/-1;
}
.latest-collection__image-item:hover {
  transform: scale(1.02);
  transition: transform 0.3s ease;
}
.latest-collection__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.latest-collection__overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
  padding: 24px;
}
.latest-collection__label {
  color: #ffffff;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
}
.latest-collection__products {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 24px;
}
@media (max-width: 992px) {
  .latest-collection__content {
    grid-template-columns: 1fr;
    gap: 64px;
  }
  .latest-collection__images {
    grid-template-columns: 1fr;
  }
}
@media (max-width: 768px) {
  .latest-collection {
    padding: 64px 0;
  }
  .latest-collection__title {
    font-size: 32px;
    flex-direction: column;
    gap: 16px;
  }
  .latest-collection__products {
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  }
}

.footer {
  background-color: #000000;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 96px 0 48px;
}
.footer__content {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 96px;
  margin-bottom: 96px;
}
.footer__brand {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.footer__logo {
  display: flex;
  align-items: center;
  gap: 16px;
}
.footer__logo-image {
  width: 40px;
  height: 40px;
}
.footer__logo-text {
  font-size: 24px;
  font-weight: 700;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 1px;
}
.footer__copyright {
  color: #666;
  font-size: 14px;
  line-height: 1.5;
}
.footer__navigation {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.footer__main-links {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.footer__policy-links {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.footer__link {
  color: #ffffff;
  text-decoration: none;
  font-size: 14px;
  transition: color 0.3s ease;
}
.footer__link--main {
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}
.footer__link--policy {
  color: #666;
  font-size: 12px;
}
.footer__link:hover {
  color: #8B5CF6;
}
.footer__newsletter {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.footer__newsletter-title {
  font-size: 18px;
  font-weight: 600;
  color: #ffffff;
  margin: 0;
}
.footer__newsletter-form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.footer__newsletter-input-group {
  display: flex;
  gap: 8px;
}
.footer__newsletter-input {
  flex: 1;
  padding: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  background-color: #111111;
  color: #ffffff;
  font-size: 14px;
}
.footer__newsletter-input::placeholder {
  color: #666;
}
.footer__newsletter-input:focus {
  outline: none;
  border-color: #8B5CF6;
}
.footer__newsletter-button {
  padding: 16px;
  min-width: 48px;
}
.footer__bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 48px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}
.footer__payment {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.footer__payment-text {
  color: #666;
  font-size: 14px;
  margin: 0;
}
.footer__payment-icons {
  display: flex;
  gap: 8px;
}
.footer__payment-icon {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-weight: 700;
  font-size: 12px;
}
.footer__social {
  display: flex;
  gap: 24px;
}
.footer__social-link {
  color: #ffffff;
  text-decoration: none;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  transition: color 0.3s ease;
}
.footer__social-link:hover {
  color: #8B5CF6;
}
@media (max-width: 992px) {
  .footer__content {
    grid-template-columns: 1fr 1fr;
    gap: 64px;
  }
  .footer__newsletter {
    grid-column: 1/-1;
  }
}
@media (max-width: 768px) {
  .footer {
    padding: 64px 0 32px;
  }
  .footer__content {
    grid-template-columns: 1fr;
    gap: 48px;
  }
  .footer__bottom {
    flex-direction: column;
    gap: 24px;
    text-align: center;
  }
  .footer__social {
    justify-content: center;
  }
}

.cart-item {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}
.cart-item:last-child {
  border-bottom: none;
}
.cart-item__image {
  width: 60px;
  height: 60px;
  border-radius: 8px;
  overflow: hidden;
  flex-shrink: 0;
}
.cart-item__image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.cart-item__info {
  flex: 1;
  min-width: 0;
}
.cart-item__name {
  font-size: 14px;
  font-weight: 600;
  color: #ffffff;
  margin: 0 0 4px 0;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.cart-item__variant {
  font-size: 12px;
  color: #666;
  margin: 0 0 4px 0;
}
.cart-item__price {
  font-size: 14px;
  font-weight: 700;
  color: #8B5CF6;
  margin: 0;
}
.cart-item__controls {
  display: flex;
  align-items: center;
  gap: 8px;
}
.cart-item__quantity-btn {
  width: 24px;
  height: 24px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background-color: transparent;
  color: #ffffff;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 14px;
  font-weight: 700;
  transition: all 0.3s ease;
}
.cart-item__quantity-btn:hover {
  background-color: #8B5CF6;
  border-color: #8B5CF6;
}
.cart-item__quantity {
  font-size: 14px;
  font-weight: 600;
  color: #ffffff;
  min-width: 20px;
  text-align: center;
}
.cart-item__remove {
  width: 24px;
  height: 24px;
  border: none;
  background-color: transparent;
  color: #666;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 18px;
  font-weight: 700;
  transition: all 0.3s ease;
}
.cart-item__remove:hover {
  background-color: #EF4444;
  color: #ffffff;
}

.home__hero {
  background: linear-gradient(135deg, #8B5CF6, rgb(76.8372093023, 12.3488372093, 223.6511627907));
  color: #000000;
  padding: 32px 0;
  text-align: center;
}
.home__hero h1 {
  font-size: 3rem;
  margin-bottom: 16px;
}
@media (max-width: 575px) {
  .home__hero h1 {
    font-size: 2rem;
  }
}
.home__hero p {
  font-size: 14px;
  margin-bottom: 24px;
}
.home__products {
  padding: 32px 0;
}
.home__products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
}`, "",{"version":3,"sources":["webpack://./src/styles.scss","webpack://./src/_variables.scss","webpack://./src/components/_buttons.scss","webpack://./src/pages/_home.scss","webpack://./src/_mixins.scss"],"names":[],"mappings":"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,aAAA;EACA,sBAAA;EACA,SFvZS;AD6qBb;AGnRE;EACE,aAAA;EACA,sBAAA;EACA,QF/ZS;ADorBb;AGlRE;EACE,aAAA;EACA,sBAAA;EACA,QFraS;ADyrBb;AGjRE;EACE,cFrcW;EEscX,qBAAA;EACA,eF1bW;EE2bX,2BAAA;AHmRJ;AGjRI;EACE,gBFpbiB;EEqbjB,yBAAA;EACA,qBAAA;AHmRN;AGhRI;EACE,WAAA;EACA,eFtcS;ADwtBf;AG/QI;EACE,cFxdU;ADyuBhB;AG7QE;EACE,aAAA;EACA,sBAAA;EACA,SF/bS;AD8sBb;AG5QE;EACE,eFldW;EEmdX,gBF3cmB;EE4cnB,cFneW;EEoeX,SAAA;AH8QJ;AG3QE;EACE,aAAA;EACA,sBAAA;EACA,SF7cS;AD0tBb;AG1QE;EACE,aAAA;EACA,QFndS;AD+tBb;AGzQE;EACE,OAAA;EACA,aFvdS;EEwdT,0CAAA;EACA,kBFhde;EEidf,yBFnfe;EEoff,cFxfW;EEyfX,eF5eW;ADuvBf;AGzQI;EACE,WAAA;AH2QN;AGxQI;EACE,aAAA;EACA,qBFngBU;AD6wBhB;AGtQE;EACE,aFzeS;EE0eT,eAAA;AHwQJ;AGrQE;EACE,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,iBF9eU;EE+eV,8CAAA;AHuQJ;AGpQE;EACE,aAAA;EACA,sBAAA;EACA,SFxfS;AD8vBb;AGnQE;EACE,WAAA;EACA,eF7gBW;EE8gBX,SAAA;AHqQJ;AGlQE;EACE,aAAA;EACA,QFpgBS;ADwwBb;AGjQE;EACE,WAAA;EACA,YAAA;EACA,kBF7fiB;EE8fjB,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,cF1iBW;EE2iBX,gBFnhBe;EEohBf,eFhiBW;ADmyBf;AGhQE;EACE,aAAA;EACA,SFnhBS;ADqxBb;AG/PE;EACE,cFrjBW;EEsjBX,qBAAA;EACA,eF1iBW;EE2iBX,gBFjiBmB;EEkiBnB,yBAAA;EACA,qBAAA;EACA,2BAAA;AHiQJ;AG/PI;EACE,cFhkBU;ADi0BhB;AG7PE;EACE;IACE,8BAAA;IACA,SFpiBQ;EDmyBZ;EG5PE;IACE,iBAAA;EH8PJ;AACF;AG3PE;EAtMF;IAuMI,oBAAA;EH8PF;EG5PE;IACE,0BAAA;IACA,SFljBQ;EDgzBZ;EG3PE;IACE,sBAAA;IACA,SFzjBO;IE0jBP,kBAAA;EH6PJ;EG1PE;IACE,uBAAA;EH4PJ;AACF;;AGvPA;EACE,aAAA;EACA,mBAAA;EACA,SFxkBW;EEykBX,aFzkBW;EE0kBX,iDAAA;AH0PF;AGxPE;EACE,mBAAA;AH0PJ;AGvPE;EACE,WAAA;EACA,YAAA;EACA,kBF1kBe;EE2kBf,gBAAA;EACA,cAAA;AHyPJ;AGvPI;EACE,WAAA;EACA,YAAA;EACA,iBAAA;AHyPN;AGrPE;EACE,OAAA;EACA,YAAA;AHuPJ;AGpPE;EACE,eFpnBW;EEqnBX,gBF3mBmB;EE4mBnB,cFnoBW;EEooBX,iBAAA;EACA,yBAAA;EACA,qBAAA;EACA,mBAAA;EACA,gBAAA;EACA,uBAAA;AHsPJ;AGnPE;EACE,eFjoBW;EEkoBX,WAAA;EACA,iBAAA;AHqPJ;AGlPE;EACE,eFtoBW;EEuoBX,gBF5nBe;EE6nBf,cFvpBY;EEwpBZ,SAAA;AHoPJ;AGjPE;EACE,aAAA;EACA,mBAAA;EACA,QFhoBS;ADm3Bb;AGhPE;EACE,WAAA;EACA,YAAA;EACA,0CAAA;EACA,6BAAA;EACA,cFpqBW;EEqqBX,kBFhoBe;EEioBf,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,eAAA;EACA,eF7pBW;EE8pBX,gBFnpBe;EEopBf,yBAAA;AHkPJ;AGhPI;EACE,yBFjrBU;EEkrBV,qBFlrBU;ADo6BhB;AG9OE;EACE,eFxqBW;EEyqBX,gBF/pBmB;EEgqBnB,cFvrBW;EEwrBX,eAAA;EACA,kBAAA;AHgPJ;AG7OE;EACE,WAAA;EACA,YAAA;EACA,YAAA;EACA,6BAAA;EACA,WAAA;EACA,kBF7pBe;EE8pBf,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,eAAA;EACA,eFxrBW;EEyrBX,gBFhrBe;EEirBf,yBAAA;AH+OJ;AG7OI;EACE,yBFrsBQ;EEssBR,cF7sBS;AD47Bf;;AG1OE;EACE,+FAAA;EACA,cFjtBe;EEktBf,eAAA;EACA,kBAAA;AH6OJ;AG3OI;EACE,eAAA;EACA,mBF7rBO;AD06Bb;AIv8BE;EDwtBE;IAKI,eAAA;EH8ON;AACF;AG3OI;EACE,eAAA;EACA,mBFrsBO;ADk7Bb;AGzOE;EACE,eAAA;AH2OJ;AGzOI;EACE,aAAA;EACA,2DAAA;EACA,SF/sBO;EEgtBP,iBAAA;EACA,cAAA;EACA,eAAA;AH2ON","sourcesContent":["// Main SCSS file - SHUFFLE STORE\n// Import all other SCSS files here\n\n@import 'variables';\n@import 'mixins';\n\n// Reset and base styles\n* {\n  box-sizing: border-box;\n}\n\nhtml {\n  scroll-behavior: smooth;\n}\n\nbody {\n  font-family: $font-family-primary;\n  background-color: $background-color;\n  margin: 0;\n  padding: 0;\n  font-size: $font-size-base;\n  color: $text-color;\n  line-height: 1.6;\n  overflow-x: hidden;\n}\n\n// Container\n.container {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 $spacing-lg;\n  \n  @media (max-width: $breakpoint-md) {\n    padding: 0 $spacing-md;\n  }\n}\n\n// Typography\nh1, h2, h3, h4, h5, h6 {\n  font-family: $font-family-heading;\n  font-weight: $font-weight-bold;\n  margin: 0 0 $spacing-md 0;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n\nh1 { font-size: $font-size-3xl; }\nh2 { font-size: $font-size-2xl; }\nh3 { font-size: $font-size-xl; }\nh4 { font-size: $font-size-lg; }\nh5 { font-size: $font-size-base; }\nh6 { font-size: $font-size-sm; }\n\np {\n  margin: 0 0 $spacing-md 0;\n}\n\na {\n  color: $primary-color;\n  text-decoration: none;\n  transition: color $transition-normal;\n  \n  &:hover {\n    color: lighten($primary-color, 10%);\n  }\n}\n\n// Utility classes\n.text-center { text-align: center; }\n.text-left { text-align: left; }\n.text-right { text-align: right; }\n\n.text-uppercase { text-transform: uppercase; }\n.text-lowercase { text-transform: lowercase; }\n.text-capitalize { text-transform: capitalize; }\n\n.font-bold { font-weight: $font-weight-bold; }\n.font-semibold { font-weight: $font-weight-semibold; }\n.font-medium { font-weight: $font-weight-medium; }\n\n// Animations\n@keyframes fadeIn {\n  from { opacity: 0; transform: translateY(20px); }\n  to { opacity: 1; transform: translateY(0); }\n}\n\n@keyframes slideIn {\n  from { transform: translateX(-100%); }\n  to { transform: translateX(0); }\n}\n\n@keyframes shake {\n  0%, 100% { transform: translateX(0); }\n  10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }\n  20%, 40%, 60%, 80% { transform: translateX(5px); }\n}\n\n@keyframes pulse {\n  0%, 100% { transform: scale(1); }\n  50% { transform: scale(1.05); }\n}\n\n@keyframes marquee {\n  from { transform: translateX(100%); }\n  to { transform: translateX(-100%); }\n}\n\n// Animation classes\n.fade-in {\n  animation: fadeIn 0.6s ease-out;\n}\n\n.slide-in {\n  animation: slideIn 0.5s ease-out;\n}\n\n.shake {\n  animation: shake 0.5s ease-in-out;\n}\n\n.pulse {\n  animation: pulse 2s infinite;\n}\n\n// Import other SCSS modules\n@import 'components/buttons';\n@import 'layout/header';\n@import 'pages/home';\n","// SCSS Variables - SHUFFLE STORE Design System\n// Colors\n$primary-color: #8B5CF6; // Purple\n$secondary-color: #000000; // Black\n$accent-color: #ffffff; // White\n$text-color: #ffffff;\n$text-color-dark: #000000;\n$background-color: #000000;\n$background-light: #111111;\n$border-color: rgba(255, 255, 255, 0.1);\n$success-color: #10B981;\n$error-color: #EF4444;\n\n// Typography\n$font-family-primary: 'Arial', 'Helvetica', sans-serif;\n$font-family-heading: 'Arial', 'Helvetica', sans-serif;\n$font-size-xs: 12px;\n$font-size-sm: 14px;\n$font-size-base: 16px;\n$font-size-lg: 18px;\n$font-size-xl: 24px;\n$font-size-2xl: 32px;\n$font-size-3xl: 48px;\n\n// Font Weights\n$font-weight-normal: 400;\n$font-weight-medium: 500;\n$font-weight-semibold: 600;\n$font-weight-bold: 700;\n\n// Spacing\n$spacing-xs: 4px;\n$spacing-sm: 8px;\n$spacing-md: 16px;\n$spacing-lg: 24px;\n$spacing-xl: 32px;\n$spacing-2xl: 48px;\n$spacing-3xl: 64px;\n$spacing-4xl: 96px;\n\n// Border Radius\n$border-radius-sm: 4px;\n$border-radius-md: 8px;\n$border-radius-lg: 12px;\n$border-radius-xl: 16px;\n$border-radius-full: 50%;\n\n// Shadows\n$shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);\n$shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);\n$shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);\n$shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.1);\n\n// Transitions\n$transition-fast: 0.15s ease;\n$transition-normal: 0.3s ease;\n$transition-slow: 0.5s ease;\n\n// Breakpoints\n$breakpoint-xs: 480px;\n$breakpoint-sm: 576px;\n$breakpoint-md: 768px;\n$breakpoint-lg: 992px;\n$breakpoint-xl: 1200px;\n$breakpoint-2xl: 1400px;\n\n// Z-index\n$z-dropdown: 1000;\n$z-sticky: 1020;\n$z-fixed: 1030;\n$z-modal-backdrop: 1040;\n$z-modal: 1050;\n$z-popover: 1060;\n$z-tooltip: 1070;\n","// Button components - SHUFFLE STORE\n\n.btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: $spacing-sm;\n  padding: $spacing-md $spacing-xl;\n  border: none;\n  border-radius: $border-radius-md;\n  font-family: $font-family-primary;\n  font-size: $font-size-base;\n  font-weight: $font-weight-semibold;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  text-decoration: none;\n  cursor: pointer;\n  transition: all $transition-normal;\n  position: relative;\n  overflow: hidden;\n  min-height: 48px;\n  \n  &:focus {\n    outline: 2px solid $primary-color;\n    outline-offset: 2px;\n  }\n  \n  &:disabled {\n    opacity: 0.6;\n    cursor: not-allowed;\n    pointer-events: none;\n  }\n  \n  // Loading state\n  &.loading {\n    pointer-events: none;\n    \n    &::after {\n      content: '';\n      position: absolute;\n      width: 16px;\n      height: 16px;\n      border: 2px solid transparent;\n      border-top: 2px solid currentColor;\n      border-radius: 50%;\n      animation: spin 1s linear infinite;\n    }\n  }\n}\n\n@keyframes spin {\n  0% { transform: rotate(0deg); }\n  100% { transform: rotate(360deg); }\n}\n\n// Primary button\n.btn--primary {\n  background-color: $primary-color;\n  color: $accent-color;\n  \n  &:hover {\n    background-color: darken($primary-color, 10%);\n    transform: translateY(-2px);\n    box-shadow: $shadow-lg;\n  }\n  \n  &:active {\n    transform: translateY(0);\n    box-shadow: $shadow-md;\n  }\n}\n\n// Secondary button\n.btn--secondary {\n  background-color: transparent;\n  color: $primary-color;\n  border: 2px solid $primary-color;\n  \n  &:hover {\n    background-color: $primary-color;\n    color: $accent-color;\n    transform: translateY(-2px);\n    box-shadow: $shadow-lg;\n  }\n  \n  &:active {\n    transform: translateY(0);\n    box-shadow: $shadow-md;\n  }\n}\n\n// Outline button\n.btn--outline {\n  background-color: transparent;\n  color: $accent-color;\n  border: 2px solid $accent-color;\n  \n  &:hover {\n    background-color: $accent-color;\n    color: $background-color;\n    transform: translateY(-2px);\n    box-shadow: $shadow-lg;\n  }\n  \n  &:active {\n    transform: translateY(0);\n    box-shadow: $shadow-md;\n  }\n}\n\n// Ghost button\n.btn--ghost {\n  background-color: transparent;\n  color: $accent-color;\n  border: none;\n  \n  &:hover {\n    background-color: rgba(255, 255, 255, 0.1);\n    transform: translateY(-2px);\n  }\n  \n  &:active {\n    transform: translateY(0);\n  }\n}\n\n// Button sizes\n.btn--sm {\n  padding: $spacing-sm $spacing-md;\n  font-size: $font-size-sm;\n  min-height: 36px;\n}\n\n.btn--lg {\n  padding: $spacing-lg $spacing-2xl;\n  font-size: $font-size-lg;\n  min-height: 56px;\n}\n\n.btn--xl {\n  padding: $spacing-xl $spacing-3xl;\n  font-size: $font-size-xl;\n  min-height: 64px;\n}\n\n// Button with icon\n.btn--icon {\n  padding: $spacing-md;\n  min-width: 48px;\n  min-height: 48px;\n  \n  .btn__icon {\n    width: 20px;\n    height: 20px;\n  }\n}\n\n// Full width button\n.btn--full {\n  width: 100%;\n}\n\n// Button group\n.btn-group {\n  display: flex;\n  gap: $spacing-md;\n  \n  &.btn-group--vertical {\n    flex-direction: column;\n  }\n  \n  &.btn-group--center {\n    justify-content: center;\n  }\n  \n  &.btn-group--space-between {\n    justify-content: space-between;\n  }\n}\n\n// Responsive buttons\n@media (max-width: $breakpoint-md) {\n  .btn {\n    padding: $spacing-sm $spacing-lg;\n    font-size: $font-size-sm;\n    min-height: 44px;\n  }\n  \n  .btn--lg {\n    padding: $spacing-md $spacing-xl;\n    font-size: $font-size-base;\n    min-height: 52px;\n  }\n}\n","// Home page styles - SHUFFLE STORE\n\n// Hero Banner\n.hero-banner {\n  position: relative;\n  height: 80vh;\n  min-height: 600px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n  \n  &__background {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    z-index: 1;\n  }\n  \n  &__image {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    object-position: center;\n  }\n  \n  &__overlay {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.3);\n    z-index: 2;\n  }\n  \n  &__content {\n    position: relative;\n    z-index: 3;\n    text-align: center;\n    color: $accent-color;\n  }\n  \n  &__cta {\n    margin-top: $spacing-2xl;\n  }\n  \n  &__button {\n    font-size: $font-size-lg;\n    padding: $spacing-lg $spacing-2xl;\n    min-height: 60px;\n  }\n  \n  &__marquee {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    background-color: $background-color;\n    border-top: 1px solid $border-color;\n    z-index: 3;\n  }\n  \n  @media (max-width: $breakpoint-md) {\n    height: 60vh;\n    min-height: 400px;\n    \n    &__button {\n      font-size: $font-size-base;\n      padding: $spacing-md $spacing-xl;\n      min-height: 48px;\n    }\n  }\n}\n\n// Marquee\n.marquee {\n  overflow: hidden;\n  white-space: nowrap;\n  padding: $spacing-md 0;\n  \n  &__content {\n    display: inline-block;\n    animation: marquee 30s linear infinite;\n    will-change: transform;\n  }\n  \n  &__text {\n    font-size: $font-size-lg;\n    font-weight: $font-weight-bold;\n    text-transform: uppercase;\n    letter-spacing: 2px;\n    margin: 0 $spacing-xl;\n    color: $accent-color;\n  }\n  \n  &__star {\n    color: $primary-color;\n    margin: 0 $spacing-md;\n    font-size: $font-size-xl;\n  }\n  \n  &:hover &__content {\n    animation-play-state: paused;\n  }\n}\n\n// Shuffle Essentials\n.shuffle-essentials {\n  padding: $spacing-4xl 0;\n  background-color: $background-color;\n  \n  &__header {\n    text-align: center;\n    margin-bottom: $spacing-4xl;\n  }\n  \n  &__title {\n    font-size: $font-size-3xl;\n    color: $accent-color;\n    margin: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: $spacing-lg;\n  }\n  \n  &__star {\n    color: $primary-color;\n    font-size: $font-size-2xl;\n  }\n  \n  &__products {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n    gap: $spacing-2xl;\n    margin-bottom: $spacing-4xl;\n  }\n  \n  &__hidden {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));\n    gap: $spacing-2xl;\n    margin-bottom: $spacing-4xl;\n  }\n  \n  &__actions {\n    text-align: center;\n  }\n  \n  &__view-all {\n    font-size: $font-size-lg;\n    padding: $spacing-lg $spacing-2xl;\n  }\n  \n  @media (max-width: $breakpoint-md) {\n    padding: $spacing-3xl 0;\n    \n    &__title {\n      font-size: $font-size-2xl;\n      flex-direction: column;\n      gap: $spacing-md;\n    }\n    \n    &__products,\n    &__hidden {\n      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n      gap: $spacing-lg;\n    }\n  }\n}\n\n// Product Card\n.product-card {\n  background-color: $background-light;\n  border-radius: $border-radius-lg;\n  overflow: hidden;\n  transition: all $transition-normal;\n  position: relative;\n  border: 1px solid $border-color;\n  \n  &:hover {\n    transform: translateY(-8px);\n    box-shadow: $shadow-xl;\n    border-color: $primary-color;\n    \n    .product-card__overlay {\n      opacity: 1;\n    }\n    \n    .product-card__image {\n      transform: scale(1.05);\n    }\n  }\n  \n  &__image-container {\n    position: relative;\n    overflow: hidden;\n    aspect-ratio: 1;\n  }\n  \n  &__image {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n    transition: transform $transition-slow;\n  }\n  \n  &__overlay {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.7);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    opacity: 0;\n    transition: opacity $transition-normal;\n  }\n  \n  &__add-to-cart {\n    display: flex;\n    align-items: center;\n    gap: $spacing-sm;\n    font-size: $font-size-sm;\n    padding: $spacing-md $spacing-lg;\n  }\n  \n  &__cart-icon {\n    width: 16px;\n    height: 16px;\n  }\n  \n  &__info {\n    padding: $spacing-lg;\n  }\n  \n  &__title {\n    font-size: $font-size-lg;\n    font-weight: $font-weight-semibold;\n    color: $accent-color;\n    margin: 0 0 $spacing-sm 0;\n    text-transform: uppercase;\n    letter-spacing: 0.5px;\n  }\n  \n  &__price {\n    font-size: $font-size-xl;\n    font-weight: $font-weight-bold;\n    color: $primary-color;\n    margin: 0;\n  }\n  \n  &__badge {\n    position: absolute;\n    top: $spacing-md;\n    right: $spacing-md;\n    background-color: $primary-color;\n    color: $accent-color;\n    padding: $spacing-xs $spacing-sm;\n    border-radius: $border-radius-sm;\n    font-size: $font-size-xs;\n    font-weight: $font-weight-bold;\n    text-transform: uppercase;\n    letter-spacing: 0.5px;\n  }\n  \n  &--latest {\n    border-color: $primary-color;\n    \n    &::before {\n      content: '';\n      position: absolute;\n      top: 0;\n      left: 0;\n      right: 0;\n      height: 4px;\n      background: linear-gradient(90deg, $primary-color, lighten($primary-color, 20%));\n    }\n  }\n}\n\n// Latest Collection\n.latest-collection {\n  padding: $spacing-4xl 0;\n  background-color: $background-color;\n  \n  &__header {\n    text-align: center;\n    margin-bottom: $spacing-4xl;\n  }\n  \n  &__title {\n    font-size: $font-size-3xl;\n    color: $accent-color;\n    margin: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: $spacing-lg;\n  }\n  \n  &__star {\n    color: $primary-color;\n    font-size: $font-size-2xl;\n  }\n  \n  &__content {\n    display: grid;\n    grid-template-columns: 1fr 2fr;\n    gap: $spacing-4xl;\n    align-items: start;\n  }\n  \n  &__images {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: $spacing-lg;\n  }\n  \n  &__image-item {\n    position: relative;\n    border-radius: $border-radius-lg;\n    overflow: hidden;\n    aspect-ratio: 1;\n    \n    &:first-child {\n      grid-column: 1 / -1;\n    }\n    \n    &:hover {\n      transform: scale(1.02);\n      transition: transform $transition-normal;\n    }\n  }\n  \n  &__image {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n  }\n  \n  &__overlay {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));\n    padding: $spacing-lg;\n  }\n  \n  &__label {\n    color: $accent-color;\n    font-weight: $font-weight-bold;\n    text-transform: uppercase;\n    letter-spacing: 1px;\n  }\n  \n  &__products {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n    gap: $spacing-lg;\n  }\n  \n  @media (max-width: $breakpoint-lg) {\n    &__content {\n      grid-template-columns: 1fr;\n      gap: $spacing-3xl;\n    }\n    \n    &__images {\n      grid-template-columns: 1fr;\n    }\n  }\n  \n  @media (max-width: $breakpoint-md) {\n    padding: $spacing-3xl 0;\n    \n    &__title {\n      font-size: $font-size-2xl;\n      flex-direction: column;\n      gap: $spacing-md;\n    }\n    \n    &__products {\n      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));\n    }\n  }\n}\n\n// Footer\n.footer {\n  background-color: $background-color;\n  border-top: 1px solid $border-color;\n  padding: $spacing-4xl 0 $spacing-2xl;\n  \n  &__content {\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    gap: $spacing-4xl;\n    margin-bottom: $spacing-4xl;\n  }\n  \n  &__brand {\n    display: flex;\n    flex-direction: column;\n    gap: $spacing-lg;\n  }\n  \n  &__logo {\n    display: flex;\n    align-items: center;\n    gap: $spacing-md;\n  }\n  \n  &__logo-image {\n    width: 40px;\n    height: 40px;\n  }\n  \n  &__logo-text {\n    font-size: $font-size-xl;\n    font-weight: $font-weight-bold;\n    color: $accent-color;\n    text-transform: uppercase;\n    letter-spacing: 1px;\n  }\n  \n  &__copyright {\n    color: #666;\n    font-size: $font-size-sm;\n    line-height: 1.5;\n  }\n  \n  &__navigation {\n    display: flex;\n    flex-direction: column;\n    gap: $spacing-lg;\n  }\n  \n  &__main-links {\n    display: flex;\n    flex-direction: column;\n    gap: $spacing-sm;\n  }\n  \n  &__policy-links {\n    display: flex;\n    flex-direction: column;\n    gap: $spacing-sm;\n  }\n  \n  &__link {\n    color: $accent-color;\n    text-decoration: none;\n    font-size: $font-size-sm;\n    transition: color $transition-normal;\n    \n    &--main {\n      font-weight: $font-weight-semibold;\n      text-transform: uppercase;\n      letter-spacing: 0.5px;\n    }\n    \n    &--policy {\n      color: #666;\n      font-size: $font-size-xs;\n    }\n    \n    &:hover {\n      color: $primary-color;\n    }\n  }\n  \n  &__newsletter {\n    display: flex;\n    flex-direction: column;\n    gap: $spacing-lg;\n  }\n  \n  &__newsletter-title {\n    font-size: $font-size-lg;\n    font-weight: $font-weight-semibold;\n    color: $accent-color;\n    margin: 0;\n  }\n  \n  &__newsletter-form {\n    display: flex;\n    flex-direction: column;\n    gap: $spacing-md;\n  }\n  \n  &__newsletter-input-group {\n    display: flex;\n    gap: $spacing-sm;\n  }\n  \n  &__newsletter-input {\n    flex: 1;\n    padding: $spacing-md;\n    border: 1px solid $border-color;\n    border-radius: $border-radius-md;\n    background-color: $background-light;\n    color: $accent-color;\n    font-size: $font-size-sm;\n    \n    &::placeholder {\n      color: #666;\n    }\n    \n    &:focus {\n      outline: none;\n      border-color: $primary-color;\n    }\n  }\n  \n  &__newsletter-button {\n    padding: $spacing-md;\n    min-width: 48px;\n  }\n  \n  &__bottom {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding-top: $spacing-2xl;\n    border-top: 1px solid $border-color;\n  }\n  \n  &__payment {\n    display: flex;\n    flex-direction: column;\n    gap: $spacing-md;\n  }\n  \n  &__payment-text {\n    color: #666;\n    font-size: $font-size-sm;\n    margin: 0;\n  }\n  \n  &__payment-icons {\n    display: flex;\n    gap: $spacing-sm;\n  }\n  \n  &__payment-icon {\n    width: 30px;\n    height: 30px;\n    border-radius: $border-radius-full;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color: $accent-color;\n    font-weight: $font-weight-bold;\n    font-size: $font-size-xs;\n  }\n  \n  &__social {\n    display: flex;\n    gap: $spacing-lg;\n  }\n  \n  &__social-link {\n    color: $accent-color;\n    text-decoration: none;\n    font-size: $font-size-sm;\n    font-weight: $font-weight-semibold;\n    text-transform: uppercase;\n    letter-spacing: 0.5px;\n    transition: color $transition-normal;\n    \n    &:hover {\n      color: $primary-color;\n    }\n  }\n  \n  @media (max-width: $breakpoint-lg) {\n    &__content {\n      grid-template-columns: 1fr 1fr;\n      gap: $spacing-3xl;\n    }\n    \n    &__newsletter {\n      grid-column: 1 / -1;\n    }\n  }\n  \n  @media (max-width: $breakpoint-md) {\n    padding: $spacing-3xl 0 $spacing-xl;\n    \n    &__content {\n      grid-template-columns: 1fr;\n      gap: $spacing-2xl;\n    }\n    \n    &__bottom {\n      flex-direction: column;\n      gap: $spacing-lg;\n      text-align: center;\n    }\n    \n    &__social {\n      justify-content: center;\n    }\n  }\n}\n\n// Cart Item Styles\n.cart-item {\n  display: flex;\n  align-items: center;\n  gap: $spacing-md;\n  padding: $spacing-md;\n  border-bottom: 1px solid $border-color;\n  \n  &:last-child {\n    border-bottom: none;\n  }\n  \n  &__image {\n    width: 60px;\n    height: 60px;\n    border-radius: $border-radius-md;\n    overflow: hidden;\n    flex-shrink: 0;\n    \n    img {\n      width: 100%;\n      height: 100%;\n      object-fit: cover;\n    }\n  }\n  \n  &__info {\n    flex: 1;\n    min-width: 0;\n  }\n  \n  &__name {\n    font-size: $font-size-sm;\n    font-weight: $font-weight-semibold;\n    color: $accent-color;\n    margin: 0 0 $spacing-xs 0;\n    text-transform: uppercase;\n    letter-spacing: 0.5px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n  \n  &__variant {\n    font-size: $font-size-xs;\n    color: #666;\n    margin: 0 0 $spacing-xs 0;\n  }\n  \n  &__price {\n    font-size: $font-size-sm;\n    font-weight: $font-weight-bold;\n    color: $primary-color;\n    margin: 0;\n  }\n  \n  &__controls {\n    display: flex;\n    align-items: center;\n    gap: $spacing-sm;\n  }\n  \n  &__quantity-btn {\n    width: 24px;\n    height: 24px;\n    border: 1px solid $border-color;\n    background-color: transparent;\n    color: $accent-color;\n    border-radius: $border-radius-sm;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n    font-size: $font-size-sm;\n    font-weight: $font-weight-bold;\n    transition: all $transition-normal;\n    \n    &:hover {\n      background-color: $primary-color;\n      border-color: $primary-color;\n    }\n  }\n  \n  &__quantity {\n    font-size: $font-size-sm;\n    font-weight: $font-weight-semibold;\n    color: $accent-color;\n    min-width: 20px;\n    text-align: center;\n  }\n  \n  &__remove {\n    width: 24px;\n    height: 24px;\n    border: none;\n    background-color: transparent;\n    color: #666;\n    border-radius: $border-radius-sm;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n    font-size: $font-size-lg;\n    font-weight: $font-weight-bold;\n    transition: all $transition-normal;\n    \n    &:hover {\n      background-color: $error-color;\n      color: $accent-color;\n    }\n  }\n}\n.home {\n  &__hero {\n    background: linear-gradient(135deg, $primary-color, darken($primary-color, 20%));\n    color: $background-color;\n    padding: $spacing-xl 0;\n    text-align: center;\n    \n    h1 {\n      font-size: 3rem;\n      margin-bottom: $spacing-md;\n      \n      @include mobile {\n        font-size: 2rem;\n      }\n    }\n    \n    p {\n      font-size: 14px;\n      margin-bottom: $spacing-lg;\n    }\n  }\n  \n  &__products {\n    padding: $spacing-xl 0;\n    \n    &-grid {\n      display: grid;\n      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n      gap: $spacing-lg;\n      max-width: 1200px;\n      margin: 0 auto;\n      padding: 0 $spacing-md;\n    }\n  }\n}\n","// SCSS Mixins\n\n// Responsive breakpoints\n@mixin mobile {\n  @media (max-width: #{$breakpoint-sm - 1px}) {\n    @content;\n  }\n}\n\n@mixin tablet {\n  @media (min-width: #{$breakpoint-sm}) and (max-width: #{$breakpoint-md - 1px}) {\n    @content;\n  }\n}\n\n@mixin desktop {\n  @media (min-width: #{$breakpoint-md}) {\n    @content;\n  }\n}\n\n// Flexbox utilities\n@mixin flex-center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n@mixin flex-between {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n// Button styles\n@mixin button-base {\n  padding: $spacing-sm $spacing-md;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  font-family: $font-family-primary;\n  font-size: $font-size-base;\n  transition: all 0.3s ease;\n}\n\n@mixin button-primary {\n  @include button-base;\n  background-color: $primary-color;\n  color: $text-color;\n  \n  &:hover {\n    background-color: darken($primary-color, 10%);\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./styles.scss */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[1]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./src/styles.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_0_use_1_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_0_use_2_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.scss */ "./src/styles.scss");
// Import SCSS styles


// SHUFFLE STORE - Cart System and UI Interactions
class ShuffleStore {
  constructor() {
    this.cart = this.loadCart();
    this.products = [];
    this.init();
  }

  init() {
    this.loadProducts();
    this.bindEvents();
    this.updateCartUI();
    this.initScrollEffects();
    this.initViewAllProducts();
  }

  // Load products from the server
  async loadProducts() {
    try {
      const response = await fetch('/data/products.json');
      this.products = await response.json();
    } catch (error) {
      console.error('Error loading products:', error);
    }
  }

  // Cart Management
  loadCart() {
    try {
      const cartData = localStorage.getItem('shuffle-cart');
      return cartData ? JSON.parse(cartData) : [];
    } catch (error) {
      console.error('Error loading cart:', error);
      return [];
    }
  }

  saveCart() {
    try {
      localStorage.setItem('shuffle-cart', JSON.stringify(this.cart));
    } catch (error) {
      console.error('Error saving cart:', error);
    }
  }

  addToCart(productId, variant = null) {
    const product = this.products.find(p => p.id === productId);
    if (!product) return;

    const cartItem = {
      id: productId,
      variant: variant || product.variants[0],
      name: product.title,
      price: variant ? variant.price : product.price,
      image: product.image,
      quantity: 1
    };

    const existingItem = this.cart.find(item => 
      item.id === productId && item.variant.id === cartItem.variant.id
    );

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.cart.push(cartItem);
    }

    this.saveCart();
    this.updateCartUI();
    this.showAddToCartAnimation();
    this.dispatchCartEvent('cart:item-added', cartItem);
  }

  removeFromCart(productId, variantId) {
    this.cart = this.cart.filter(item => 
      !(item.id === productId && item.variant.id === variantId)
    );
    this.saveCart();
    this.updateCartUI();
    this.dispatchCartEvent('cart:item-removed', { productId, variantId });
  }

  updateQuantity(productId, variantId, quantity) {
    const item = this.cart.find(item => 
      item.id === productId && item.variant.id === variantId
    );

    if (item) {
      if (quantity <= 0) {
        this.removeFromCart(productId, variantId);
      } else {
        item.quantity = quantity;
        this.saveCart();
        this.updateCartUI();
        this.dispatchCartEvent('cart:updated', item);
      }
    }
  }

  clearCart() {
    this.cart = [];
    this.saveCart();
    this.updateCartUI();
    this.dispatchCartEvent('cart:cleared');
  }

  getCartTotal() {
    return this.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  getCartItemCount() {
    return this.cart.reduce((count, item) => count + item.quantity, 0);
  }

  // UI Updates
  updateCartUI() {
    const cartCount = document.getElementById('cart-count');
    const cartTotal = document.getElementById('cart-total');
    const cartContent = document.getElementById('cart-content');
    const cartEmpty = document.getElementById('cart-empty');
    const cartFooter = document.getElementById('cart-footer');

    if (cartCount) {
      cartCount.textContent = this.getCartItemCount();
    }

    if (cartTotal) {
      cartTotal.textContent = this.getCartTotal().toFixed(2);
    }

    if (cartContent && cartEmpty && cartFooter) {
      if (this.cart.length === 0) {
        cartEmpty.style.display = 'block';
        cartFooter.style.display = 'none';
        cartContent.innerHTML = '';
        cartContent.appendChild(cartEmpty);
      } else {
        cartEmpty.style.display = 'none';
        cartFooter.style.display = 'block';
        this.renderCartItems(cartContent);
      }
    }
  }

  renderCartItems(container) {
    container.innerHTML = '';
    
    this.cart.forEach(item => {
      const cartItem = document.createElement('div');
      cartItem.className = 'cart-item';
      cartItem.innerHTML = `
        <div class="cart-item__image">
          <img src="/assets/${item.image}" alt="${item.name}">
        </div>
        <div class="cart-item__info">
          <h4 class="cart-item__name">${item.name}</h4>
          <p class="cart-item__variant">${item.variant.name}</p>
          <p class="cart-item__price">$${item.price.toFixed(2)}</p>
        </div>
        <div class="cart-item__controls">
          <button class="cart-item__quantity-btn" data-action="decrease" data-product-id="${item.id}" data-variant-id="${item.variant.id}">-</button>
          <span class="cart-item__quantity">${item.quantity}</span>
          <button class="cart-item__quantity-btn" data-action="increase" data-product-id="${item.id}" data-variant-id="${item.variant.id}">+</button>
        </div>
        <button class="cart-item__remove" data-product-id="${item.id}" data-variant-id="${item.variant.id}">×</button>
      `;
      container.appendChild(cartItem);
    });
  }

  showAddToCartAnimation() {
    const cartIcon = document.querySelector('.header__cart-icon');
    if (cartIcon) {
      cartIcon.classList.add('shake');
      setTimeout(() => {
        cartIcon.classList.remove('shake');
      }, 500);
    }
  }

  // Event Handling
  bindEvents() {
    // Add to cart buttons
    document.addEventListener('click', (e) => {
      if (e.target.matches('.product-card__add-to-cart') || e.target.closest('.product-card__add-to-cart')) {
        e.preventDefault();
        const button = e.target.closest('.product-card__add-to-cart');
        const productId = parseInt(button.dataset.productId);
        this.addToCart(productId);
      }
    });

    // Cart toggle
    const cartToggle = document.getElementById('cart-toggle');
    const cartDropdown = document.getElementById('cart-dropdown');
    const cartClose = document.getElementById('cart-close');

    if (cartToggle && cartDropdown) {
      cartToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        cartDropdown.classList.toggle('active');
      });
    }

    if (cartClose && cartDropdown) {
      cartClose.addEventListener('click', () => {
        cartDropdown.classList.remove('active');
      });
    }

    // Close cart when clicking outside
    document.addEventListener('click', (e) => {
      if (cartDropdown && !cartDropdown.contains(e.target) && !cartToggle.contains(e.target)) {
        cartDropdown.classList.remove('active');
      }
    });

    // Cart item controls
    document.addEventListener('click', (e) => {
      if (e.target.matches('.cart-item__quantity-btn')) {
        const action = e.target.dataset.action;
        const productId = parseInt(e.target.dataset.productId);
        const variantId = e.target.dataset.variantId;
        const item = this.cart.find(item => item.id === productId && item.variant.id === variantId);
        
        if (item) {
          const newQuantity = action === 'increase' ? item.quantity + 1 : item.quantity - 1;
          this.updateQuantity(productId, variantId, newQuantity);
        }
      }

      if (e.target.matches('.cart-item__remove')) {
        const productId = parseInt(e.target.dataset.productId);
        const variantId = e.target.dataset.variantId;
        this.removeFromCart(productId, variantId);
      }
    });

    // Newsletter form
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
      newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = newsletterForm.querySelector('input[type="email"]').value;
        this.handleNewsletterSignup(email);
      });
    }
  }

  // View All Products functionality
  initViewAllProducts() {
    const viewAllBtn = document.getElementById('view-all-btn');
    const hiddenProducts = document.getElementById('hidden-products');
    
    if (viewAllBtn && hiddenProducts) {
      viewAllBtn.addEventListener('click', () => {
        if (hiddenProducts.style.display === 'none') {
          hiddenProducts.style.display = 'grid';
          viewAllBtn.textContent = 'SHOW LESS';
        } else {
          hiddenProducts.style.display = 'none';
          viewAllBtn.textContent = 'VIEW ALL';
        }
      });
    }
  }

  // Scroll effects
  initScrollEffects() {
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }

  // Newsletter signup
  handleNewsletterSignup(email) {
    // Simulate newsletter signup
    console.log('Newsletter signup:', email);
    alert('Thanks for subscribing to our newsletter!');
  }

  // Event dispatching
  dispatchCartEvent(eventName, data) {
    const event = new CustomEvent(eventName, { detail: data });
    document.dispatchEvent(event);
  }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  window.shuffleStore = new ShuffleStore();
  console.log('SHUFFLE STORE is online! 🛍️');
});

// Export for potential module usage
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShuffleStore);

})();

/******/ })()
;
//# sourceMappingURL=main.js.map