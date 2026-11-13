(() => {
  const requestedSide = new URLSearchParams(window.location.search).get("side");
  const side = requestedSide === "bride" ? "bride" : window.__INVITATION_SIDE__;
  if (side !== "bride") return;

  document.documentElement.classList.add("bride-mode");
  document.title = "Aastha & Raghav — Wedding Celebrations";

  const description = "Join Aastha and Raghav for their wedding celebrations, December 19 and 25–27, 2026.";
  document.querySelector('meta[name="description"]')?.setAttribute("content", description);
  document.querySelector('meta[property="og:description"]')?.setAttribute("content", description);
  document.querySelector('meta[name="twitter:description"]')?.setAttribute("content", description);

  const coverTitle = document.querySelector(".cover h1");
  if (coverTitle) {
    coverTitle.innerHTML = '<span>Aastha</span><span class="and">&amp;</span><span>Raghav</span>';
  }

  const family = document.querySelector(".family");
  const invitation = family?.querySelector(".reveal");
  if (family && invitation) {
    family.setAttribute("aria-label", "Bride's family invitation");
    invitation.innerHTML = `
      <svg class="family-ornament" viewBox="0 0 120 40" fill="none" stroke="currentColor" stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 29h29c10 0 17-5 24-16 7 11 14 16 24 16h29"/><path d="M58 9c-4 4-7 8-7 12 0 4 3 7 9 11 6-4 9-7 9-11 0-4-3-8-7-12l-2-2-2 2Z"/><path d="M42 28c5-1 9-4 13-9M78 28c-5-1-9-4-13-9M60 32v4M36 29l-4-4M84 29l4-4"/></svg>
      <p class="label">In fulfilment of a beautiful<br />dream cherished together</p>
      <p class="invitation-copy" style="--i:1">Arun Tandon, with the eternal blessings of<br />his beloved wife, Late Anuradha Tandon,<br />joyfully invites you to join in celebrating<br />the wedding of their daughter</p>
      <p class="couple-names" style="--i:2"><span class="name">Aastha</span></p>
      <p class="lineage" style="--i:2.5">Grand D/o Late Smt. Sumitra Rani<br />and Late Dr. Gurbachan Singh Tandon</p>
      <p class="couple-names" style="--i:3"><span class="with">with</span><span class="name">Raghav</span></p>
      <p class="lineage" style="--i:3.5">S/o Dr. Namita &amp; Dr. Vikram Jaggi</p>
      <div class="rule" style="--i:4;--rule:#b8945b"><svg viewBox="0 0 176 12" fill="none" stroke="currentColor" aria-hidden="true"><path d="M0 6h70M106 6h70" /><path d="M88 2c-4 0-7 2-7 4s3 4 7 4 7-2 7-4-3-4-7-4Zm-10 4c-3-3-7-3-8 0 1 3 5 3 8 0Zm20 0c3-3 7-3 8 0-1 3-5 3-8 0Z" /></svg></div>
      <div class="bride-joy" style="--i:5"><p class="label">Celebrating this joyous occasion</p><p class="joy-names">Aditi, Nihal,<br />Nirvaan &amp; Anaya</p></div>
      <div class="rule" style="--i:6;--rule:#b8945b"><svg viewBox="0 0 176 12" fill="none" stroke="currentColor" aria-hidden="true"><path d="M0 6h70M106 6h70" /><path d="M88 2c-4 0-7 2-7 4s3 4 7 4 7-2 7-4-3-4-7-4Zm-10 4c-3-3-7-3-8 0 1 3 5 3 8 0Zm20 0c3-3 7-3 8 0-1 3-5 3-8 0Z" /></svg></div>
      <div class="extended" style="--i:7"><p class="label">With the love and blessings of</p><p class="extended-copy">Our Extended Family</p></div>
      <p class="bride-signoff" style="--i:8">With love, together, always</p>`;
  }

  const shabad = document.createElement("section");
  shabad.className = "card event shabad";
  shabad.id = "shabad-kirtan";
  shabad.dataset.petals = "4";
  shabad.dataset.petalOrigin = "corners";
  shabad.setAttribute("aria-labelledby", "shabad-title");
  shabad.innerHTML = `
    <span class="corner-floral" aria-hidden="true"><img src="assets/cover-corner.webp" width="1024" height="1536" alt="" loading="lazy" /></span>
    <span class="corner-floral right" aria-hidden="true"><img src="assets/cover-corner.webp" width="1024" height="1536" alt="" loading="lazy" /></span>
    <div class="copy reveal">
      <p class="ikh-onkar">ੴ</p>
      <p class="intro">With the blessings of Waheguru,<br />we invite you to join us for</p>
      <h2 id="shabad-title">Shabad Kirtan</h2>
      <p class="intro">to celebrate the wedding of</p>
      <p class="couple-line">Aastha &amp; Raghav</p>
      <ul class="schedule" style="--i:1"><li>Shabad Kirtan – 11 AM to 1 PM</li><li>Lunch – 1 PM onwards</li></ul>
      <div class="rule" style="--i:2"><svg viewBox="0 0 176 12" fill="none" stroke="currentColor" aria-hidden="true"><path d="M0 6h70M106 6h70" /><path d="M88 2c-4 0-7 2-7 4s3 4 7 4 7-2 7-4-3-4-7-4Zm-10 4c-3-3-7-3-8 0 1 3 5 3 8 0Zm20 0c3-3 7-3 8 0-1 3-5 3-8 0Z" /></svg></div>
      <p class="date" style="--i:3">Saturday, Dec 19, 2026</p>
      <p class="venue" style="--i:3">Shri Guru Singh Sabha Gurudwara<br />Sector 18, Noida – 201301</p>
    </div>`;
  document.getElementById("engagement")?.before(shabad);
  document.querySelector(".footer").textContent = "Aastha & Raghav · December 2026";
})();
