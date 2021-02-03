import create from 'zustand';

import {getIntroData, storeIntroData} from '../../utils/Storage';

export const appIntroStore = create((set, get) => ({
  introFinished: false,
  getIntroFinished: async () => {
    const intro = await getIntroData();
    set({introFinished: intro});
  },
  setIntroFinished: async (v) => {
    await storeIntroData(v);
    set({introFinished: v});
  },
}));
