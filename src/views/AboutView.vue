<template>
  <div class="about">
    <div class="container">
      <h2 class="title">Complete Customer Section</h2>
      <p class="first">
        From the moment they opened the doors to the firstCurl Me Crazy Salon in
        2018, the four partners focused everything they did on one goal. It
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
      <div><img src="../assets/ambiennccee.jpg" alt="image" /></div>
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
      <div><img src="../assets/connections.jpg" alt="image" /></div>
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
      <div><img src="../assets/style.jpg" alt="image" /></div>
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
      <div><img src="../assets/enlightment.jpg" alt="image" /></div>
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
    <div class="about-info2">
      <div><img src="../assets/.jpg" alt="image" /></div>
      <div>
        <h1 class="cus">The<br /></h1>
        <h2>Perfect Manicure</h2>
        <p>
   Apply the best nail art with all your heart. Our proffesional
          manicurist can help you spice up your nail game.
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
:root {
  --secondary-text-colour: #0b1108;
  --primary-text-colour: #c6c0b7;
  --hover-highlight: crimson;
  --main-font: "Source Sans Pro", sans-serif;
}
.about {
  min-height: 100vh;
  background-color: black;
}
.title {
  color: white;
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
  object-fit: cover;
}
.about-info {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.2rem;
}
.about-info2 {
  display: flex;
  flex-direction: row-reverse;
}
.special {
  font-family: var(--main-font);
  color: var(--primary-text-colour);
}
h1 {
  font-family: var(--main-font);
  color: var(--primary-text-colour);
}

.head {
  font-family: var(--main-font);
  color: var(--primary-text-colour);
  margin-top: 50px;
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
