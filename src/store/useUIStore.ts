import { create } from 'zustand';

interface UIState {
    isMenuOpen: boolean;
    isSearchOpen: boolean;
    toggleMenu: () => void;
    toggleSearch: () => void;
    closeAll: () => void;
}

export const useUIStore = create<UIState>((set) => ({
    isMenuOpen: false,
    isSearchOpen: false,
    toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen, isSearchOpen: false })),
    toggleSearch: () => set((state) => ({ isSearchOpen: !state.isSearchOpen, isMenuOpen: false })),
    closeAll: () => set({ isMenuOpen: false, isSearchOpen: false }),
}));
