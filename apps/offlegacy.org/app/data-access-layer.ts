import { PROJECT_STATUS } from './constants'

const PROJECTS = [
  {
    id: 1,
    name: 'Event Tracker',
    description: 'Comprehensive solution for event tracking in React applications',
    status: null,
    badgeColor: 'blue',
    url: 'https://event-tracker.offlegacy.org',
    disabled: false,
  },
  {
    id: 2,
    name: 'Git Intent',
    description:
      'Git workflow tool for intentional commits — define your commit intentions first for clearer, more atomic changes',
    status: PROJECT_STATUS.BETA,
    badgeColor: 'blue',
    url: 'https://github.com/offlegacy/git-intent',
    disabled: false,
  },
  // {
  //   id: 3,
  //   name: 'VSCode Yarn Catalog Lens',
  //   description: 'VSCode extension for Yarn Catalog',
  //   status: PROJECT_STATUS.WIP,
  //   badgeColor: 'gray',
  //   url: 'https://github.com/offlegacy/vscode-yarn-catalog-lens',
  //   disabled: true,
  // },
  // {
  //   id: 4,
  //   name: 'Flags',
  //   description: 'Powerful feature flag system for React applications',
  //   status: PROJECT_STATUS.WIP,
  //   badgeColor: 'gray',
  //   url: 'https://github.com/offlegacy/flags',
  //   disabled: true,
  // },
  {
    id: 5,
    name: 'React Actions',
    description: 'React execution pipeline',
    status: PROJECT_STATUS.ALPHA,
    badgeColor: 'gray',
    url: 'https://github.com/offlegacy/react-actions',
    disabled: true,
  },
  // {
  //   id: 6,
  //   name: 'SandKit',
  //   description: 'Powerful code playground',
  //   status: PROJECT_STATUS.WIP,
  //   badgeColor: 'gray',
  //   url: 'https://github.com/offlegacy/sandkit',
  //   disabled: true,
  // },
  {
    id: 7,
    name: 'Overlay',
    description: 'Powerful overlay state management',
    status: PROJECT_STATUS.ALPHA,
    badgeColor: 'gray',
    url: 'https://github.com/offlegacy/overlay',
    disabled: true,
  },
] as const

export function getProjects() {
  return PROJECTS
}

const NEWS = [
  {
    id: 1,
    title: 'Event Tracker v1.1.0 released',
    date: new Date('2025-01-30'),
    href: 'https://github.com/offlegacy/event-tracker/releases/tag/v1.1.0',
  },
  {
    id: 2,
    title: 'Git Intent v0.0.1 released',
    date: new Date('2025-04-12'),
    href: 'https://github.com/offlegacy/git-intent/releases/tag/v0.0.1',
  },
] as const

export function getNews() {
  return [...NEWS].sort((a, b) => b.date.getTime() - a.date.getTime())
}

const MEMBERS = [
  {
    id: 1,
    firstName: 'Gwansik',
    lastName: 'Kim',
    github: 'gwansikk',
  },
  {
    id: 2,
    firstName: 'Juhyeok',
    lastName: 'Kang',
    github: 'kangju2000',
  },
  {
    id: 3,
    firstName: 'Taehwan',
    lastName: 'Hwang',
    github: 'stakbucks',
  },
] as const

export function getMembers() {
  return MEMBERS
}
