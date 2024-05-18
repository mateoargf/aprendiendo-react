import './App.css'

export function TwitterFollowCard({children,formatUserName,userName,isFollowing}) {
     return (
          <article className='tw-followCard'>
               <header className='tw-followCard-header'>
                    <img
                         className='tw-followCard-avatar'
                         src={`https://unavatar.io/${userName}`}
                         alt="el avatar de midudev" />
                    <div className='tw-followCard-info'>
                         <strong>{children}</strong>
                         <span className='tw-followCard-infoUserName'>{formatUserName(userName)}</span>
                    </div>
               </header>
               <aside>
                    <button className='tw-followCard-button'>
                         {isFollowing ? 'Siguiendo' : 'Seguir'}
                    </button>
               </aside>
          </article>
     )
}