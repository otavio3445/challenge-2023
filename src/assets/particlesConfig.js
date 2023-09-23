export const particlesConf = {
    background: {
      color: {
        value: "#1a1a1a",
      },
    },
    style: {
      zIndex: -10
    },
    fpsLimit: 200,
    interactivity: {
      events: {
        onClick: {
          enable: false,
          mode: "push",
        },
        onHover: {
          enable: false,
          mode: "repulse",
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 2000,
          duration: 100,
        },
      },
    },
    particles: {
      color: {
        value: "#2eca72",
      },
      links: {
        color: "#2eca72",
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      collisions: {
        enable: true,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: false,
        speed: 1,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 250,
        },
        value: 10,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 5 },
      },
    },
    detectRetina: true,
  }