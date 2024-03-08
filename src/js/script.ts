declare let gsap: any;
declare let emailjs: any;

document.addEventListener("DOMContentLoaded", () => {
  window.scrollTo(0, 0);
});

document.addEventListener("DOMContentLoaded", () => {
  initCursorAnimation();
  initEmailJS();
  setupFormSubmission();
  animationGsap();
});


function initCursorAnimation(): void {
  document.addEventListener("mousemove", (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    const cursor = document.querySelector(".cursor") as HTMLElement;
    if (cursor) {
      gsap.set(cursor, {
        x: mouseX,
        y: mouseY,
      });
    }
  });
}

function initEmailJS(): void {
  emailjs.init("i3cuI03Wdw5ZPk9Wn");
}

function validateForm(form: HTMLFormElement): boolean {
  let isValid = true;
  const nameInput = form.querySelector('.contact-name') as HTMLInputElement;
  const emailInput = form.querySelector('.contact-email') as HTMLInputElement;
  const messageInput = form.querySelector('.contact-message') as HTMLTextAreaElement;

  if (!nameInput.value.trim()) {
    (document.querySelector('.name-error') as HTMLElement).textContent = 'Name is required.';
    isValid = false;
  } else {
    (document.querySelector('.name-error') as HTMLElement).textContent = '';
  }

  if (!emailInput.value.trim() || !/\S+@\S+\.\S+/.test(emailInput.value)) {
    (document.querySelector('.email-error') as HTMLElement).textContent = 'Invalid email address.';
    isValid = false;
  } else {
    (document.querySelector('.email-error') as HTMLElement).textContent = '';
  }

  if (!messageInput.value.trim()) {
    (document.querySelector('.message-error') as HTMLElement).textContent = 'Message is required.';
    isValid = false;
  } else {
    (document.querySelector('.message-error') as HTMLElement).textContent = '';
  }

  return isValid;
}


function setupFormSubmission(): void {
  const form = document.querySelector(".form") as HTMLFormElement;
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    sendEmail(this);
  });
}


function sendEmail(form: HTMLFormElement): void {
  if (!validateForm(form)) {
    alert('Please correct the errors before submitting.');
    return;
  }
  emailjs.sendForm('service_0w1fh9a', 'template_lg0whuf', form)
    .then((response: any) => {
      console.log('SUCCESS!', response.status, response.text);
      alert('Your mail is sent!');
      form.reset();
    }, (error: any) => {
      console.log('FAILED...', error);
      alert('Failed to send the mail, please try again.');
    });
}


function animationGsap() {
  let home = gsap.timeline();
  home.from(".home-top > .greeting", { duration: 0.5, y: 30, autoAlpha: 0, ease: "power2.out" })
      .from(".home-top > .name", { duration: 0.35, y: 30, autoAlpha: 0, ease: "power2.out" }, "+=0.1")
      .from(".home-top > .career", { duration: 0.35, y: 30, autoAlpha: 0, ease: "power2.out" }, "+=0.1")
      .from(".home-top > p", { duration: 0.35, y: 30, autoAlpha: 0, ease: "power2.out" }, "+=0.1")
      .from(".home-top > a", { duration: 0.35, y: 30, autoAlpha: 0, ease: "power2.out" }, "+=0.1")
      .from([".home-bottom", ".home-side"] , { duration: 1, autoAlpha: 0, ease: "power2.out" }, "+=0.5");

  let about1 = gsap.timeline({
    scrollTrigger: {
      trigger: ".about-top",
      start: "top 80%",
      end: "top 40%",
      scrub: false,
      markers: false,
    }
  });
  about1.from(".about-top", { duration: 0.5, y: 30, autoAlpha: 0, ease: "power2.out" })

  let about2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".about-bottom",
      start: "top 80%",
      end: "top 40%",
      scrub: false,
      markers: false,
    }
  });
  about2.from(".about-bottom", { duration: 0.5, y: 30, autoAlpha: 0, ease: "power2.out" })

  // work1
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".work1",
      start: "top 80%",
      end: "top 40%",
      scrub: false,
      markers: false,
    }
  })
  tl.from(".work1", {
    x: "-30%",
    autoAlpha: 0
  })

  // work2
  let tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".work2",
      start: "top 80%",
      end: "top 40%",
      scrub: false,
      markers: false,
    }
  })
  tl2.from(".work2", {
    x: "30%",
    autoAlpha: 0
  })

  // work3
  let tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: ".work3",
      start: "top 80%",
      end: "top 40%",
      scrub: false,
      markers: false,
    }
  })
  tl3.from(".work3", {
    x: "-30%",
    autoAlpha: 0
  })

  let contactMessage = gsap.timeline({
    scrollTrigger: {
      trigger: ".contact-form > div > p",
      start: "top 80%",
      end: "top 40%",
      scrub: false,
      markers: false,
    }
  });
  contactMessage.from(".contact-form > div > p", { duration: 0.5, y: 30, autoAlpha: 0, ease: "power2.out" });

  let contactForm = gsap.timeline({
    scrollTrigger: {
      trigger: ".contact-form > form",
      start: "top 80%",
      end: "top 40%",
      scrub: false,
      markers: false,
    }
  });
  contactForm.from(".contact-form > form", { duration: 0.5, y: 30, autoAlpha: 0, ease: "power2.out" });
}