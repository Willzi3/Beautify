<template>
  <div class="contact_container">
    <form action="post" class="contact_form">
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
</template>
<script>
export default {};
</script>
<style>
.contact_container {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.contact_form {
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 40%;
  align-self: center;
  margin-top: 5rem;
  -webkit-box-shadow: 18px 15px 23px 0px rgba(255, 0, 58, 0.4);
  box-shadow: 18px 15px 23px 0px rgba(255, 0, 58, 0.4);
  border-radius: 2rem;
  padding: 40px;
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
}
input:hover {
  color: crimson;
  font-size: large;
}
</style>