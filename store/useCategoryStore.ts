import { create } from 'zustand';

type State = {
  activeId: number;
}

type Action = {
  setActiveId: (activeId: number) => void;
}

type Store = State & Action;

export const useCategoryStore = create<Store>((set) => ({
  activeId: 1,
  setActiveId: (activeId: number) => set({ activeId }),
}));
