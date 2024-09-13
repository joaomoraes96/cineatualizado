    // Movie data
    const movies = [
        { title: "Os fantasmas", image: "./images/proxfilmes/filme.jpg" },
        { title: "Dragon Ball Z", image: "./images/proxfilmes/filme1.jpg" },
        { title: "Vingadores", image: "./images/proxfilmes/filme2.jpg" },
        { title: "Wish", image: "./images/proxfilmes/filme3.png" },
        { title: "Velozes e Furiosos", image: "./images/proxfilmes/filme4.jpg" }
        // { title: "Sunday", image: "./images/proxfilmes/filme5.png" }
      ];
  
      // Gallery images
      const galleryImages = [
        {
          src: "./images/galeria/foto1.jpg",
          description: "Our state-of-the-art projection room, ensuring crystal-clear visuals for every screening."
        },
        {
          src: "./images/galeria/foto2.jpg",
          description: "The grand entrance to our main theater, welcoming movie-goers to an unforgettable experience."
        },
        {
          src: "./images/galeria/foto3.jpg",
          description: "Our luxurious VIP seating area, perfect for a premium viewing experience."
        },
        {
          src: "./images/galeria/foto4.jpg",
          description: "Behind the scenes: Our dedicated team preparing for the next big premiere."
        },
      ];
  
      // Populate movie grid
      const movieGrid = document.getElementById('movieGrid');
      movies.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.className = 'movie-card';
        movieCard.innerHTML = `
          <img src="${movie.image}" alt="${movie.title} movie poster">
          <div class="movie-info">
            <h3>${movie.title}</h3>
          </div>
        `;
        movieGrid.appendChild(movieCard);
      });
  
      // Populate gallery grid
      const galleryGrid = document.getElementById('galleryGrid');
      galleryImages.forEach((image, index) => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.innerHTML = `
          <img src="${image.src}" alt="Cinema interior ${index + 1}">
          <p class="image-description">${image.description}</p>
        `;
        galleryGrid.appendChild(galleryItem);
      });
  
      // Modal functionality
      const modal = document.getElementById('myModal');
      const modalImg = document.getElementById('modalImg');
      const closeBtn = document.getElementsByClassName('close')[0];
  
      galleryGrid.addEventListener('click', (e) => {
        if (e.target.tagName === 'IMG') {
          modal.style.display = 'block';
          modalImg.src = e.target.src;
          const description = e.target.nextElementSibling.textContent;
          document.getElementById('modalDescription').textContent = description;
        }
      });
  
      closeBtn.onclick = () => {
        modal.style.display = 'none';
      };
  
      window.onclick = (e) => {
        if (e.target === modal) {
          modal.style.display = 'none';
        }
      };
  
      // Populate movie select in booking form
      const movieSelect = document.getElementById('movie');
      movies.forEach(movie => {
        const option = document.createElement('option');
        option.value = movie.title;
        option.textContent = movie.title;
        movieSelect.appendChild(option);
      });
  
      // Booking form submission
      const bookingForm = document.getElementById('bookingForm');
      bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(bookingForm);
        const bookingData = Object.fromEntries(formData);
        console.log('Booking submitted:', bookingData);
        alert('Booking submitted successfully!');
        bookingForm.reset();
      });
  
      // Featured movies functionality
      document.querySelectorAll('.schedule-btn').forEach(button => {
        button.addEventListener('click', (e) => {
          const movie = e.target.getAttribute('data-movie');
          document.getElementById('movie').value = movie;
          document.getElementById('booking').scrollIntoView({ behavior: 'smooth' });
        });
      });
  
      // Hero carousel functionality
      const heroCarousel = document.getElementById('heroCarousel');
      const heroImages = heroCarousel.getElementsByTagName('img');
      const heroNav = document.getElementById('heroNav');
      let currentImageIndex = 0;
      let carouselInterval;
  
      function createNavBalls() {
        for (let i = 0; i < heroImages.length; i++) {
          const ball = document.createElement('div');
          ball.className = 'hero-nav-ball';
          ball.addEventListener('click', () => setActiveImage(i));
          heroNav.appendChild(ball);
        }
      }
  
      function setActiveImage(index) {
        heroImages[currentImageIndex].classList.remove('active');
        heroNav.children[currentImageIndex].classList.remove('active');
        currentImageIndex = index;
        heroImages[currentImageIndex].classList.add('active');
        heroNav.children[currentImageIndex].classList.add('active');
      }
  
      function changeHeroImage() {
        setActiveImage((currentImageIndex + 1) % heroImages.length);
      }
  
      function startCarousel() {
        carouselInterval = setInterval(changeHeroImage, 5000);
      }
  
      function stopCarousel() {
        clearInterval(carouselInterval);
      }
  
      createNavBalls();
      setActiveImage(0);
      startCarousel();
  
      heroCarousel.addEventListener('mouseenter', stopCarousel);
      heroCarousel.addEventListener('mouseleave', startCarousel);
  
      // Social media link functionality
      document.querySelectorAll('.social-icons a, .header-social-icons a').forEach(link => {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          window.open(link.href, '_blank', 'noopener,noreferrer');
        });
      });
  
      // Scheduling button functionality
      document.querySelector('.scheduling-btn').addEventListener('click', (e) => {
        e.preventDefault();
        e.target.classList.toggle('active');
        document.getElementById('booking').scrollIntoView({ behavior: 'smooth' });
      });