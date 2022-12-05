import create from 'zustand' // create로 zustand를 불러옵니다.

export const useStore = create(set => ({
  link: 'localhost',
  local_link: () => set(state => ({ link: 'localhost'})),
  server_link: () => set(state => ({ link: '192.'})),
}))



