document.querySelectorAll('.nav-links').forEach(
    link => {
        if(link.href == window.location.href) {
            link.classList.add('active');
        }
    }
)
const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");
btn.addEventListener("click", () => {
	menu.classList.toggle("hidden");
});
const setup = () => {
    const getTheme = () => {
      if (window.localStorage.getItem('light')) {
        return JSON.parse(window.localStorage.getItem('light'))
      }
      return !!window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches
    }

    const setTheme = (value) => {
      window.localStorage.setItem('light', value)
    }

    return {
      loading: true,
      islight: getTheme(),
      toggleTheme() {
        this.islight = !this.islight
        setTheme(this.islight)
      },
    }
  }