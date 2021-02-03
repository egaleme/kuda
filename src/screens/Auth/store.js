import create from 'zustand';

const useAuthStore = create((set) => ({
  currentStack: 0,
  setCurrentStack: (current) => set({currentStack: current}),
}));

export {useAuthStore};
