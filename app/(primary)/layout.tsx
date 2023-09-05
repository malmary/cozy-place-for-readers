import Header from "@/components/header/header";
import {ReactNode} from "react";

import styles from './layout.module.css';

type Props = {
  children: ReactNode
}

const MainLayout = ({ children }: Props) => {
  return (
    <div className={styles.layout}>
      <Header/>
      <main>
        {children}
      </main>
    </div>
  );
}

export default MainLayout;
