<template>
  <section class="about_container">
    <img id="about_image" src="../../images/img_4017.jpg" alt="" />
    <div>
      <h2 id="about_head">About us</h2>
    </div>
    <div class="about_info">
      <div id="box_1" class="about_boxes" style="grid-row-end: span 2">
        <!-- <img src="../../images/nails.jpg" style="width: 300px" alt="" /> -->
        <h3 class="box_head" id="box_1_head">Nails</h3>
        <div id="box_1_text" class="box_text">
          <p>
            Apply the best nail art with all your heart. Our proffesional
            manicurist can help you spice up your nail game.
          </p>
          <p>
            Care better for you nails by booking an appointment with one of our
            nailtechs, we offer variety of services like gel-ish nails, acrylic
            system if you would like to extend your nails, we also offer polygel
            which gives a more smoother finish and glowing touch to your nails.
          </p>
        </div>
      </div>
      <div id="box_2" class="about_boxes" style="grid-column-end: span 2">
        <h3 class="box_head" id="box_2_head">Hair</h3>
        <p id="box_2_text" class="box_text">
          How can any stylist create a “uniquely personal style” if they don’t
          learn more about who you are? Every visit starts with a professional
          consultation that tells us where you want to go today.
        </p>
        <!-- <img
          src="../../images/jessica-felicio-_cvwXhGqG-o-unsplash.jpg"
          style="width: 100%; height: 200px; object-fit: cover"
          alt=""
        /> -->
      </div>
      <div id="box_3" class="about_boxes" style="grid-column-end: span 2">
        <h3 class="box_head" id="box_3_head">Facials</h3>
        <p id="box_3_text" class="box_text">
          We offer a wide range of facial treatments from problem skin facials
          to anti-aging facials. From a relaxing pamper session to preparing
          your skin for your big day. A basic facial is a skin treatment that
          cleanses pores, exfoliates away dead skin cells, and treats common
          skin concerns with a custom mask. This multi-step process is meant to
          rejuvenate and nourish faces, making skin appear healthier and
          younger.
        </p>
        <!-- <img
          src="../../images/facial.jpg"
          style="width: 100%; height: 200px; object-fit: cover"
          alt=""
        /> -->
      </div>
      <div id="box_4" class="about_boxes" style="grid-column-end: span 2">
        <!-- <img src="../../images/massage.jpg" style="width: 100%" alt="" /> -->
        <h3 class="box_head" id="box_4_head">Massage</h3>
        <div id="box_4_text" class="box_text">
          <p>
            Indulge in Choose a wide array of spa treatments designed to balance
            and nurture the mind, body and spirit including massages, spa
            packages body wraps and hair removal. Leaves your skin feeling
            refreshed and moisturized
          </p>
          <p>
            massages target the source of the body's pain via eliminating tense
            muscles, increasing flexibility, and providing relaxation to the
            affected muscles as well as the body as a whole.
          </p>
        </div>
      </div>
      <div id="box_5" class="about_boxes">
        <h3 class="box_head" id="box_5_head">Products</h3>
        <p id="box_5_text" class="box_text">
          we offfer a variety of products for different types of hair, we have
          products for all hair types. We offer a variety of hair colours and
          treatments to nourish and refresh your hair. We have nail products for
          if you would like to practice to do your own nails at home. We offer a
          variety of nail products, including products to grow your own nails.
        </p>
        <!-- <img src="../../images/products.jpg" style="width: 300px" alt="" /> -->
      </div>
    </div>
  </section>
</template>
<style>
:root {
  --secondary-text-colour: #0b1108;
  --primary-text-colour: #c6c0b7;
  --hover-highlight: crimson;
  --main-font: "Source Sans Pro", sans-serif;
  --heading-font: "Noto Serif Display", serif;
}
section {
  align-items: center;
}
.about_info {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 70%;
  gap: 1rem;
  margin-bottom: 20px;
  position: relative;
}
#about_image {
  position: absolute;
  width: 24%;
  top: 4rem;
  right: 43rem;
}
.about_boxes {
  padding: 1rem;
  border-radius: 1rem;
}
#about_head {
  color: var(--primary-text-colour);
  font-family: var(--heading-font);
  padding: 20px;
}
.about_container {
  display: flex;
  flex-direction: column;
  margin-top: 4rem;
  position: relative;
}
.box_head {
  font-family: var(--heading-font);
  position: absolute;
}
.box_text {
  position: absolute;
}
#box_1_head {
  top: 2rem;
  right: 54rem;
  font-size: 4em;
}
#box_2_head {
  top: -2rem;
  right: 6rem;
  font-size: 4em;
}
#box_3_head {
  top: 23rem;
  right: 25rem;
  font-size: 4em;
}
#box_4_head {
  top: 40rem;
  right: 42rem;
  font-size: 4em;
}
#box_5_head {
  top: 48rem;
  right: 9rem;
  font-size: 4em;
}
#box_1_text {
  top: 7rem;
  right: 46rem;
  width: 16rem;
  text-align: left;
}
#box_2_text {
  top: 4rem;
  right: 6rem;
  width: 14rem;
  text-align: right;
}
#box_3_text {
  top: 29rem;
  right: 6rem;
  width: 30rem;
  text-align: left;
}
#box_4_text {
  top: 46rem;
  right: 42rem;
  width: 20rem;
  text-align: right;
}
#box_5_text {
  top: 54rem;
  right: 6rem;
  width: 20rem;
  text-align: justify;
}
#box_1_text:hover {
  transform: translate(50%, -50%);
  transition: 2s;
}
#box_2_text:hover {
  transform: translate(50%, -50%);
  transition: 2s;
}
#box_3_text:hover {
  transform: translate(50%, -50%);
  transition: 2s;
}
#box_4_text:hover {
  transform: translate(50%, -50%);
  transition: 2s;
}
#box_5_text:hover {
  transform: translate(50%, -50%);
  transition: 2s;
  color: var(--hover-highlight);
}
</style>
