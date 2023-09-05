import Link from "next/link";
import Image from "next/image";

import styles from './header.module.css';

const menuItem = [
  {label: 'Home', url: '/'},
  {label: 'My Books', url: '/my-books'},
]
const Header = () => {
  return (
    <header className={styles.header}>
      <Image
        src='./bookshelf.svg'
        alt='logo'
        width='50'
        height='50'
        className={styles.image}
      />
      <nav>
        <ul className={styles.menu}>
          {menuItem.map((item, index) => {
            return (<li key={index}>
              <Link
                href={item.url}
                className={styles.item}
              >
                {item.label}
              </Link>
            </li>)
          })}
        </ul>
      </nav>
    </header>
  )
}

export default Header;
