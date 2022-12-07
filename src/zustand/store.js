import create from 'zustand' // create로 zustand를 불러옵니다.

export const useStore = create(set => ({
  link: 'localhost',
  local_link: () => set(state => ({ link: 'localhost'})),
  server_link: () => set(state => ({ link: '192.'})),
}))

export const useBotlink = create(set => ({
  link_state: 'home',
  set_home: () => set(state => ({link_state:'home'})),
  set_item: () => set(state => ({link_state:'item'})),
  set_mypage: () => set(state => ({link_state:'mypage'})),
  set_notice:() => set(state => ({link_state:'notice'})),
}))

