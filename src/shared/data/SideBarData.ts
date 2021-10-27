interface IPath {
  title: string;
  path: string;
  roles?: string[];
}

export const SideBarData: IPath[] = [
  {
    title: 'Home',
    path: '/',
  },
  {
    title: 'Modelos',
    path: '/modelos',
    roles: ['modelManager'],
  },
  {
    title: 'Avaliadores',
    path: '/avaliadores',
  },
  {
    title: 'Avaliações',
    path: '/avaliacoes',
  },
  {
    title: 'Instituições Avaliadoras',
    path: '/instituicoesAvaliadoras',
  },
];
