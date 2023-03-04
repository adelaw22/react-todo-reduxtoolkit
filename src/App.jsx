import PageTtile from './componets/PageTtile'
import AppHeader from './componets/AppHeader'
import AppContent from './componets/AppContent'
import styles from './styles/modules/app.module.scss'


function App() {
  return (
    <>
      <div className="container">
        <PageTtile>TODO Tickets</PageTtile>
        <div className={styles.app__wrapper}>
          <AppHeader/>
          <hr/>
          <AppContent/>
        </div>
      </div> 
   
    </>
  )
}

export default App
