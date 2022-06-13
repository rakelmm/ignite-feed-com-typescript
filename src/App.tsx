import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';

import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/rakelmm.png",
      name: 'Rakel Moreira',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋', },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀', },
      { type: 'link', content: 'rakel.design/doctorcare' },
    ],
    publishedAt: new Date('2022-06-08 15:32:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/maykbrito.png",
      name: 'Mayk Brito',
      role: 'Educator @Rocketseat'
    },
    content: [
      { type: 'paragraph', content: 'Faaala dev, Mayk Brito na área! 👋', },
      { type: 'paragraph', content:'Eu quero te parabenizar por chegar até aqui. Você deu o seu melhor, e agora está mais perto de ser um destaque no mercado da programação. E pra finalizar e comemorar o que construímos até aqui, tirar suas dúvidas e encerrar a nossa jornada com o mesmo entusiasmo que começamos, estaremos ao vivo hoje, às 19H00 de Brasília, no YouTube da Rocketseat. 🚀', },
      { type: 'link', content: 'mayk.maratona/explorer' },
    ],
    publishedAt: new Date('2022-06-01 15:32:00'),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>

  )
}
