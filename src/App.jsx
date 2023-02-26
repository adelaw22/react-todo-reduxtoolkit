import { Toaster } from 'react-hot-toast'
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
          <AppContent/>
        </div>
      </div> 
       <Toaster position="top-right" />

    </>
  )
}

export default App
