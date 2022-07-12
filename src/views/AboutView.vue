<template>
  <div class="about">
    <div class="container">
      <div class="part">
        <h2 class="head">About Curl Me Crazy</h2>
      </div>

      <h2 class="special">Complete</h2>
      <h1 class="cus">Customer Satisfaction</h1>
      <p class="first">
        From the moment they opened the doors to the first Curl Me Crazy Salon
        in 2018, the four partners focused everything they did on one goal. It
        meant more than expertly cutting, styling and colouring hair. They
        needed to make sure clients were comfortable, got the latest precision
        cuts and styles, and learned how to care for their hair.
      </p>
      <p class="second">
        Today, 4 years later,the four partners legacy carries on in every
        family-owned Curl me Crazy Salon. And for every customer we serve. It’s
        a formula that ensures you leave after each visit feeling satisfied with
        the services and products you received – and feeling more beautiful than
        ever. That’s really what we’re all about.
      </p>
    </div>
    <div class="about-info">
      <div><img src="../assets/ambience.jpg" alt="image" /></div>
      <div>
        <h1 class="cus">The<br /></h1>
        <h2>Ambience</h2>
        <p>
          The firsts thing you experience. It is at once inviting, comfortable
          and inspiring
        </p>
      </div>
    </div>
    <div class="about-info2">
      <div><img src="../assets/barber.jpg" alt="image" /></div>
      <div>
        <h1 class="cus">The<br /></h1>
        <h2>Connections</h2>
        <p>
          How can any stylist create a “uniquely personal style” if they don’t
          learn more about who you are? Every visit starts with a professional
          consultation that tells us where you want to go today.
        </p>
      </div>
    </div>
    <div class="about-info">
      <div><img src="../assets/color.jpg" alt="image" /></div>
      <div>
        <h1 class="cus">The<br /></h1>
        <h2>Style</h2>
        <p>
          Yes, every Curl Me Crazy Salon stylist is educated, trained and
          qualified. But that’s just the start. Curl Me Crazy Salon develops its
          own training programs to keep every stylist up-to-date of the
          ever-changing world of hair styling and care, and how to deliver it. -
          Curl Me Crazy-style.
        </p>
      </div>
    </div>
    <div class="about-info2">
      <div><img src="../assets/products.jpg" alt="image" /></div>
      <div>
        <h1 class="cus">The<br /></h1>
        <h2>Enlightenment</h2>
        <p>
          The Curl Me Crazy team realized that knowledgeable clients are better
          able to appreciate the Curl me Crazy Salon experience. They
          researched, tested and stocked a wide range of top quality products
          and helped each client understand why and how to use them to maintain
          their style between visits.
        </p>
      </div>
    </div>
    <div
      id="carouselExampleFade"
      class="carousel slide carousel-fade"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="../assets/rev1.jpg" class="d-block w-70" alt="image" />
        </div>
        <div class="carousel-item">
          <img src="../assets/rev2.jpg" class="d-block w-70" alt="image" />
        </div>
        <div class="carousel-item">
          <img src="../assets/rev3.jpg" class="d-block w-70" alt="image" />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style>
.about {
  min-height: 100vh;
}
.part {
  min-height: 50vh;
  min-width: 100%;
  background-image: url(../assets/about-back.jpg);
  background-size: cover;
  margin-bottom: 50px;
}
.about img {
  width: 760px;
  height: 350px;
}
.about-info {
  display: flex;
}
.about-info2 {
  display: flex;
  flex-direction: row-reverse;
}
.special {
  font-family: "Splash", cursive;
}
h1 {
  font-family: "Splash", cursive;
}
.head {
  font-family: "Splash", cursive;
}
.cus {
  margin-top: 50px;
}
#carouselExampleFade {
  margin-left: 350px;
  margin-top: 50px;
  margin-bottom: 50px;
}
</style>
