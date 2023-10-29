export default {
  name: "player",

  state: () => ( {
    current: false,
    controls: false,
    playing: false,
  }),

  mutations: {
    setCurrent(state, newValue) {
      state.current = newValue;
    },
    setControls(state, newValue) {
      state.controls = newValue;
    },
    setPlaying(state, newValue) {
      state.playing = newValue;
    },
  },
};
