import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
     {
          userName: 'mateoargf',
          name: 'Mateo Gomez Fleytas',
          isFollowing: true
     },
     {
          userName: 'midudev',
          name: 'Miguel Ángel Durán',
          isFollowing: true
     },
     {
          userName: 'pheralb',
          name: 'Pablo H.',
          isFollowing: false
     },
     {
          userName: 'TMChein',
          name: 'Tomas',
          isFollowing: false
     }
]

export function App() {
     return (
          <section className='App'>
               {
                    users.map(({ userName, name, isFollowing }) => (
                         <TwitterFollowCard
                              key={userName}
                              userName={userName}
                              initialIsFollowing={isFollowing}>
                              {name}
                         </TwitterFollowCard>
                    ))
               }
          </section>
     )
}