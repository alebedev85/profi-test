import React from 'react'
import styles from './SupportBadge.module.scss'

export default function SupportBadge({label, text}) {
  return (
    <div>
      <p className={styles.label}>{label}</p>
      <p className={styles.text}>{text}</p>
    </div>
  )
}
