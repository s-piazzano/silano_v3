import { readonly, ref } from 'vue';

export function useS(initialState) {
  const state = ref(initialState);
  const setState = (newState) => {
    state.value = newState;
  };
  
  return [readonly(state), setState];
}