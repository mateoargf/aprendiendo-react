import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App() {

     const formatUserName = (userName) => `@${userName}`
     const midudev = { formatUserName:  formatUserName , isFollowing:true, userName: 'midudev' }
     const mateoargf = { formatUserName:  formatUserName , isFollowing:false, userName: 'mateoargf' }

     return (
          <section className='App'>
               <TwitterFollowCard {...midudev}>
                    Miguel Ángel Durán
               </TwitterFollowCard>
               <TwitterFollowCard {...mateoargf}>
                    Mateo Gomez Fleytas
               </TwitterFollowCard>

          </section>
     )
}