<template>
  <div class="contact_container">
    <div class="flip-box">
      <div class="flip-box-inner">
        <div class="flip-box-front">
          <img
            style="width: 100%"
            src="../../images/contact-image.jpg"
            alt=""
          />
        </div>
        <div class="flip-box-back">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13233.069675818386!2d18.4926986!3d-33.9856643!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9c746d268c8e0ad9!2sLife%20Choices!5e0!3m2!1sen!2sza!4v1657883098605!5m2!1sen!2sza"
            width="800"
            height="450"
            style="border: 0; width: 100%; height: 100%;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          <!-- <div class="contact_info">
        <div><p>Operating hours</p></div>
        <div><p>Contact</p></div>
        <div><p>Address</p></div>
      </div> -->
        </div>
      </div>
    </div>
    <div style="width: 50%">
      <form
        method="post"
        action="https://formspree.io/f/xgedjjaz"
        class="contact_form"
      >
        <p>Please get in touch with us</p>
        <div class="fullname">
          <input type="text" placeholder="Name" style="width: 50%" />
          <input type="text" placeholder="Surname" style="width: 50%" />
        </div>
        <input type="text" placeholder="Cellphone" /><input
          type="email"
          placeholder="email"
        />
        <textarea name="message"></textarea>
        <button type="submit" id="contact_button">Submit</button>
      </form>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style>
.contact_container {
  display: flex;
  justify-content: center;
  gap: 4rem;
  padding: 4rem;
  margin-inline: 6rem;
}
.contact_form {
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-self: center;
  /* -webkit-box-shadow: 18px 15px 23px 0px rgba(255, 0, 58, 0.4);
  box-shadow: 18px 15px 23px 0px rgba(255, 0, 58, 0.4);
  border-radius: 2rem; */
  color: var(--hover-highlight);
  font-weight: bold;
  font-style: oblique;
  font-family: var(--main-font);
}
textarea {
  background: none;
  border-radius: 4px;
  height: 6rem;
  color: var(--primary-text-colour);
  font-family: var(--main-font);
  padding: 1rem;
}
#contact_button {
  width: 20%;
  align-self: center;
}
.fullname {
  display: flex;
  widows: 100%;
  gap: 0.5rem;
}
input:hover {
  color: crimson;
  font-size: large;
}
.flip-box {
  background-color: transparent;
  perspective: 1000px;
  width: 50%;
}

.flip-box-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

.flip-box:hover .flip-box-inner {
  transform: rotateY(180deg);
}

.flip-box-front,
.flip-box-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.flip-box-front {
}

.flip-box-back {
  transform: rotateY(180deg);
  
}
.contact_info {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}
.back_img {
}
button {
  border: none;
  border-radius: 0.5rem;
  padding: 0.2rem;
  padding-inline: 1rem;
  background-color: crimson;
  color: var(--primary-text-colour);
}
</style>
