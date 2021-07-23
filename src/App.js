import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import Table from './Components/Table/Table';
import Footer from './Components/Footer/Footer';

import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <main className={styles['main-container']}>
        <div className={styles.main}>
          <Sidebar />
          <Table />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
