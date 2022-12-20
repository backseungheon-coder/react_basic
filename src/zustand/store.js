import create from 'zustand' // create로 zustand를 불러옵니다.

export const useStore = create(set => ({
  link: 'http://43.200.140.62:8000',
  local_link: () => set(state => ({ link: 'http://127.0.0.1:8000'})),
  server_link: () => set(state => ({ link: 'http://43.200.140.62:8000'})),
}))

export const useBotlink = create(set => ({
  link_state: 'home',
  set_home: () => set(state => ({link_state:'home'})),
  set_item: () => set(state => ({link_state:'item'})),
  set_mypage: () => set(state => ({link_state:'mypage'})),
  set_notice:() => set(state => ({link_state:'notice'})),
  set_none: () => set(state => ({link_state:''})),

}))

