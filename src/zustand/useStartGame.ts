import { create } from "zustand";

type Start = {
  theme: number;
  players: number;
  grid: number;
};

interface State {
  condition: Start | null;
  setCondition: (value: Start | null) => void;
}

export const useStart = create<State>((set) => ({
  condition: null,
  setCondition: (value) => set({ condition: value }),
}));
