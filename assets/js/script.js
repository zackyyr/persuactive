
    const navToggle = document.querySelector('.hamburger-menu button');
    const navLinks = document.querySelector('.nav-link');

    function openNavbar() {
        navLinks.classList.toggle('active');
    }

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideNav = navLinks.contains(event.target);
        const isClickOnToggle = navToggle.contains(event.target);

        if (!isClickInsideNav && !isClickOnToggle) {
            navLinks.classList.remove('active');
        }
    });




    window.addEventListener('scroll', () => {
        const header = document.querySelector('.header');
        header.classList.toggle('scrolled', window.scrollY > 10);
    });

    window.addEventListener('scroll', () => {
        const header = document.querySelector('.header');
        header.classList.toggle('scrolled', window.scrollY > 10);
    });
    


    // Scroll problems
    const header = document.getElementById("painPointHeader");
    let originalText = header.innerHTML;
    
    // Ganti <br> sementara
    originalText = originalText.replace(/<br\s*\/?>/gi, ' [BR] ');
    
    // Frasa yang mau di-highlight (harus sesuai dengan teks asli ya, termasuk spasi dan tanda baca)
    const phraseToHighlight = " gak ngerti value produk kamu.";
    
    // Replace frasa dengan span
    const highlightedHTML = originalText.replace(
      phraseToHighlight,
      `<span class="highlight-word highlighted">${phraseToHighlight}</span>`
    );
    
    // Setelah frasa di-highlight, split sisanya per kata (tanpa ganggu span yang sudah ada)
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = highlightedHTML;
    
    // Fungsi untuk proses span kata per kata
    function processTextNodes(node) {
      if (node.nodeType === Node.TEXT_NODE) {
        const words = node.textContent.trim().split(/\s+/);
        const spanWords = words.map(word => {
          if (word === "[BR]") return "<br>";
          return `<span class="highlight-word">${word}</span>`;
        });
        const wrapper = document.createElement("span");
        wrapper.innerHTML = spanWords.join(" ");
        return wrapper;
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        const clone = node.cloneNode(false);
        node.childNodes.forEach(child => {
          clone.appendChild(processTextNodes(child));
        });
        return clone;
      }
      return node;
    }
    
    // Apply proses dan masukkan ke header
    const processed = processTextNodes(tempDiv);
    header.innerHTML = "";
    header.appendChild(processed);
    const highlightWords = document.querySelectorAll(".highlight-word");
    let hasAnimated = false; // <- penanda animasi udah pernah jalan

    window.addEventListener("scroll", () => {
      const section = document.querySelector(".pain-point");
      const sectionTop = section.getBoundingClientRect().top;
      const triggerPoint = window.innerHeight / 2;
    
      if (sectionTop < triggerPoint && !hasAnimated) {
        highlightWords.forEach((word, i) => {
          setTimeout(() => {
            word.classList.add("visible");
          }, i * 40);
        });
        hasAnimated = true; // <- set jadi true setelah animasi jalan
      }
    });
    /* INI KETIKA MAU NYALAIN ANIMASI LAGI :  */
    // window.addEventListener("scroll", () => {
    //   const section = document.querySelector(".pain-point");
    //   const sectionTop = section.getBoundingClientRect().top;
    //   const triggerPoint = window.innerHeight / 2;
    
    //   if (sectionTop < triggerPoint) {
    //     highlightWords.forEach((word, i) => {
    //       setTimeout(() => {
    //         word.classList.add("visible");
    //       }, i * 40);
    //     });
    //   } else {
    //     highlightWords.forEach(word => word.classList.remove("visible"));
    //   }
    // });

    
