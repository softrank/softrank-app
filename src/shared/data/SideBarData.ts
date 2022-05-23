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
    roles: ['modelManager'],
  },
  {
    title: 'Avaliações',
    path: '/avaliacoes',
    roles: ['modelManager'],
  },
  {
    title: 'Instituições Avaliadoras',
    path: '/instituicoesAvaliadoras',
    roles: ['modelManager'],
  },
  {
    title: 'Minhas avaliações',
    path: '/avaliacoes',
    roles: ['evaluator', 'organizationalUnit'],
  },
];
