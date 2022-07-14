<template>
  <section class="about_container">
    <div>
      <h2 id="about_head">About us</h2>
    </div>
    <div class="about_info">
      <div id="box_1" class="about_boxes" style="grid-row-end: span 2">
        <img src="../../images/nails.jpg" style="width: 300px" alt="" />
        <h3>Nails</h3>
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
      <div id="box_2" class="about_boxes" style="grid-column-end: span 2">
        <h3>Hair</h3>
        <p>
          How can any stylist create a “uniquely personal style” if they don’t
          learn more about who you are? Every visit starts with a professional
          consultation that tells us where you want to go today.
        </p>
        <img
          src="../../images/jessica-felicio-_cvwXhGqG-o-unsplash.jpg"
          style="width: 100%; height: 200px; object-fit: cover"
          alt=""
        />
      </div>
      <div id="box_3" class="about_boxes" style="grid-column-end: span 2">
        <h3>Facials</h3>
        <p>
          We offer a wide range of facial treatments from problem skin facials
          to anti-aging facials. From a relaxing pamper session to preparing
          your skin for your big day. A basic facial is a skin treatment that
          cleanses pores, exfoliates away dead skin cells, and treats common
          skin concerns with a custom mask. This multi-step process is meant to
          rejuvenate and nourish faces, making skin appear healthier and
          younger.
        </p>
        <img
          src="../../images/facial.jpg"
          style="width: 100%; height: 200px; object-fit: cover"
          alt=""
        />
      </div>
      <div id="box_4" class="about_boxes" style="grid-column-end: span 2">
        <img src="../../images/massage.jpg" style="width: 100%" alt="" />
        <h4>Massage</h4>
        <p>
          Indulge in Choose a wide array of spa treatments designed to balance
          and nurture the mind, body and spirit including massages, spa packages
          body wraps and hair removal. Leaves your skin feeling refreshed and
          moisturized
        </p>
        <p>
          massages target the source of the body's pain via eliminating tense
          muscles, increasing flexibility, and providing relaxation to the
          affected muscles as well as the body as a whole.
        </p>
      </div>
      <div id="box_5" class="about_boxes">
        <h3>Products</h3>
        <p>
          we offfer a variety of products for different types of hair, we have
          products for all hair types. We offer a variety of hair colours and
          treatments to nourish and refresh your hair. We have nail products for
          if you would like to practice to do your own nails at home. We offer a
          variety of nail products, including products to grow your own nails.
        </p>
        <img src="../../images/products.jpg" style="width: 300px" alt="" />
      </div>
    </div>
  </section>
</template>
<style>
.about_info {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 70%;
  gap: 1rem;
  margin-bottom: 20px;
}
.about_boxes {
  background: black;
  padding: 1rem;
  border-radius: 1rem;
}
#about_head {
  color: var(--primary-text-colour);
  font-family: var(--main-font);
  padding: 20px;
}
</style>









